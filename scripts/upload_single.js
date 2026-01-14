
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

const filePathRelative = process.argv[2]; // e.g. team/2026/Atharva.webp

if (!filePathRelative) {
    console.error("Please provide a relative file path (e.g. team/2026/Atharva.webp)");
    process.exit(1);
}

const filePath = path.join(PUBLIC_DIR, filePathRelative);

if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
}

const relativeDir = path.dirname(filePathRelative);
const fileName = path.basename(filePathRelative, path.extname(filePathRelative));
const folderPath = relativeDir.split(path.sep).join('/');
const publicId = `${CLOUDINARY_FOLDER_PREFIX}/${folderPath === '.' ? '' : folderPath + '/'}${fileName}`;

console.log(`Uploading: ${filePathRelative} -> ${publicId}`);

cloudinary.uploader.upload(filePath, {
    public_id: publicId,
    overwrite: true,
    resource_type: 'auto'
}).then(result => {
    console.log(`SUCCESS: ${result.secure_url}`);
}).catch(error => {
    console.error(`ERROR: ${error.message}`);
});
