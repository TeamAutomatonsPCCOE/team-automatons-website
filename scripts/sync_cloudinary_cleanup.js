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
const TARGET_FOLDERS = ['logos', 'team', 'gallery'];

// Recursive file getter
function getFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(getFiles(file));
        } else {
            if (/\.(jpg|jpeg|png|webp|svg|gif)$/i.test(file)) {
                results.push(file);
            }
        }
    });
    return results;
}

(async function () {
    console.log('Starting Full Cloudinary Cleanup and Sync...');

    // 1. Get ALL Local Files in target folders
    let allLocalFiles = [];
    for (const folder of TARGET_FOLDERS) {
        const fullPath = path.join(PUBLIC_DIR, folder);
        if (fs.existsSync(fullPath)) {
            allLocalFiles = allLocalFiles.concat(getFiles(fullPath));
        }
    }

    // 2. Build Set of Expected Public IDs
    // Logic must EXACTLY match upload_to_cloudinary.js
    const expectedPublicIds = new Set();

    allLocalFiles.forEach(filePath => {
        const relativePath = path.relative(PUBLIC_DIR, filePath);
        const relativeDir = path.dirname(relativePath);
        // Use path.parse to robustly get name without extension
        const fileName = path.parse(filePath).name;

        // Normalize path separators to forward slashes
        const folderPath = relativeDir.split(path.sep).join('/');

        // Construct Public ID: prefix/folder/filename
        // e.g. team-automatons/team/2026/member
        let publicId = `${CLOUDINARY_FOLDER_PREFIX}/${folderPath === '.' ? '' : folderPath + '/'}${fileName}`;

        // Remove double slashes if any (though logic above should prevent it)
        publicId = publicId.replace('//', '/');

        expectedPublicIds.add(publicId);
    });

    console.log(`Found ${allLocalFiles.length} local files across [${TARGET_FOLDERS.join(', ')}].`);

    // 3. List ALL Remote Resources in team-automatons folder (recursive)
    let remoteResources = [];
    let nextCursor = null;

    console.log('Fetching remote resources list...');
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

    console.log(`Found ${remoteResources.length} remote resources.`);

    // 4. Identify Deletions
    // Only check resources that START with our target folders (to avoid deleting other stuff if shared)
    // Actually, CLOUDINARY_FOLDER_PREFIX = 'team-automatons' is our sandbox, so we can probably delete anything not local.
    // BUT to contain scope to 'logos', 'team', 'gallery', we should filter remote list.

    const validRemoteResources = remoteResources.filter(r => {
        // e.g. public_id: team-automatons/logos/foo
        // check if it belongs to one of the TARGET_FOLDERS
        return TARGET_FOLDERS.some(folder => r.public_id.startsWith(`${CLOUDINARY_FOLDER_PREFIX}/${folder}/`));
    });

    const toDelete = validRemoteResources.filter(r => !expectedPublicIds.has(r.public_id));

    if (toDelete.length === 0) {
        console.log('No files to delete. Cloudinary is in sync!');
    } else {
        console.log(`Found ${toDelete.length} files to delete from Cloudinary:`);

        // limiting output
        if (toDelete.length > 20) {
            toDelete.slice(0, 20).forEach(r => console.log(` - ${r.public_id}`));
            console.log(`... and ${toDelete.length - 20} more.`);
        } else {
            toDelete.forEach(r => console.log(` - ${r.public_id}`));
        }

        // 5. Perform Deletion
        // Cloudinary bulk delete allows up to 100 public_ids per call
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
