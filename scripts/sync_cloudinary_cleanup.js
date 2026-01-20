const fs = require('fs');
const path = require('path');
const cloudinary = require('cloudinary').v2;

// Configuration
cloudinary.config({
    cloud_name: 'dmaiwu7zn',
    api_key: '921318436438925',
    api_secret: 'KhJfH9wAlHorqpRX7c0vX0sXB9g'
});


const PUBLIC_DIR = path.join(__dirname, '../public');
const CLOUDINARY_FOLDER_PREFIX = 'team-automatons';
const TARGET_FOLDERS = ['logos', 'team', 'gallery', 'irc', 'achievements', 'contact', 'events'];

// Recursive file getter for ALL of public
function getFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(getFiles(file));
        } else {
            // Only include supported image/video formats
            if (/\.(jpg|jpeg|png|webp|svg|gif|mp4|webm|mov)$/i.test(file)) {
                results.push(file);
            }
        }
    });
    return results;
}

(async function () {
    console.log('Starting Global Cloudinary Cleanup and Sync...');

    // 1. Get ALL Local Files in PUBLIC_DIR (recursive)
    const allLocalFiles = getFiles(PUBLIC_DIR);

    // 2. Build Set of Expected Public IDs
    const expectedPublicIds = new Set();

    allLocalFiles.forEach(filePath => {
        const relativePath = path.relative(PUBLIC_DIR, filePath);
        const relativeDir = path.dirname(relativePath);
        const fileName = path.parse(filePath).name;
        const folderPath = relativeDir.split(path.sep).join('/');

        // Special case for files in root of public
        let publicId = folderPath === '.'
            ? `${CLOUDINARY_FOLDER_PREFIX}/${fileName}`
            : `${CLOUDINARY_FOLDER_PREFIX}/${folderPath}/${fileName}`;

        publicId = publicId.replace('//', '/');
        expectedPublicIds.add(publicId);
    });

    console.log(`Found ${allLocalFiles.length} local files in public/ directory.`);

    // 3. List ALL Remote Resources in team-automatons folder (recursive)
    let remoteResources = [];
    let nextCursor = null;

    console.log('Fetching ALL remote resources in team-automatons folder...');
    try {
        do {
            const result = await cloudinary.search
                .expression(`public_id:${CLOUDINARY_FOLDER_PREFIX}/*`)
                .max_results(500)
                .next_cursor(nextCursor)
                .execute();

            remoteResources = remoteResources.concat(result.resources);
            nextCursor = result.next_cursor;
            process.stdout.write('.');
        } while (nextCursor);
        console.log(''); // Newline
    } catch (e) {
        console.error("Error fetching remote resources:", e.message);
        process.exit(1);
    }

    console.log(`Found ${remoteResources.length} total remote resources.`);

    // 4. Identify Deletions
    // Anything in team-automatons folder that isn't in our local public/ list
    const toDelete = remoteResources.filter(r => !expectedPublicIds.has(r.public_id));

    if (toDelete.length === 0) {
        console.log('No orphaned files found. Cloudinary is in perfect sync!');
    } else {
        console.log(`Found ${toDelete.length} orphaned files to delete from Cloudinary:`);

        if (toDelete.length > 20) {
            toDelete.slice(0, 20).forEach(r => console.log(` - ${r.public_id}`));
            console.log(`... and ${toDelete.length - 20} more.`);
        } else {
            toDelete.forEach(r => console.log(` - ${r.public_id}`));
        }

        // 5. Perform Deletion
        const BATCH_SIZE = 100;
        for (let i = 0; i < toDelete.length; i += BATCH_SIZE) {
            const batch = toDelete.slice(i, i + BATCH_SIZE).map(r => r.public_id);
            console.log(`Deleting batch ${i / BATCH_SIZE + 1}...`);
            try {
                const res = await cloudinary.api.delete_resources(batch);
                console.log('  Result:', res);
            } catch (err) {
                console.error('  Batch delete failed:', err.message);
            }
        }
    }

    console.log('Cleanup complete.');
})();
