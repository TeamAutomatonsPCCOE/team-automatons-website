
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

// Helper to recursively get files
function getFiles(dir) {
    const dirents = fs.readdirSync(dir, { withFileTypes: true });
    let files = [];
    for (const dirent of dirents) {
        const res = path.resolve(dir, dirent.name);
        if (dirent.isDirectory()) {
            files = files.concat(getFiles(res));
        } else {
            // Filter for images only
            if (/\.(jpg|jpeg|png|webp|svg|gif)$/i.test(res)) {
                files.push(res);
            }
        }
    }
    return files;
}

const TARGET_FOLDERS = ['logos', 'team', 'gallery'];

(async function () {
    console.log(`Scanning specific directories (${TARGET_FOLDERS.join(', ')}) for images...`);

    let allFiles = [];
    for (const folder of TARGET_FOLDERS) {
        const fullPath = path.join(PUBLIC_DIR, folder);
        if (fs.existsSync(fullPath)) {
            allFiles = allFiles.concat(getFiles(fullPath));
        } else {
            console.log(`Warning: Folder ${folder} not found in public directory.`);
        }
    }

    console.log(`Found ${allFiles.length} images.`);

    for (const filePath of allFiles) {
        // Construct public ID
        // e.g. C:\...\public\team\2026\foo.webp -> team/2026/foo
        const relativePath = path.relative(PUBLIC_DIR, filePath);
        const relativeDir = path.dirname(relativePath);
        const fileName = path.basename(relativePath, path.extname(relativePath));

        // Normalize path separators to forward slashes for Cloudinary
        const folderPath = relativeDir.split(path.sep).join('/');

        const publicId = `${CLOUDINARY_FOLDER_PREFIX}/${folderPath === '.' ? '' : folderPath + '/'}${fileName}`;

        console.log(`Uploading: ${relativePath} -> ${publicId}`);

        try {
            const result = await cloudinary.uploader.upload(filePath, {
                public_id: publicId,
                overwrite: true,
                resource_type: 'auto'
            });
            console.log(`  SUCCESS: ${result.secure_url}`);
        } catch (error) {
            console.error(`  ERROR uploading ${relativePath}:`, error.message);
        }
    }

    console.log('Upload complete!');
})();
