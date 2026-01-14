
export const CLOUDINARY_CLOUD_NAME = 'dmaiwu7zn';
export const CLOUDINARY_FOLDER_PREFIX = 'team-automatons';

/**
 * Transforms a local path into a Cloudinary URL 
 * if the image has been uploaded to the expected folder structure.
 * 
 * @param {string} src - The source URL (e.g. "/team/2026/Rajvardhan.webp")
 * @returns {string} - The optimized Cloudinary URL or original src if external/invalid
 */
export function getCloudinaryUrl(src, transformations = 'w_500') {
    if (!src) return src;



    if (src.startsWith('http') || src.startsWith('//')) {
        return src; // Return external URLs as is
    }

    // Remove leading slash
    const cleanPath = src.startsWith('/') ? src.slice(1) : src;

    // Remove extension for public ID
    const lastDotIndex = cleanPath.lastIndexOf('.');
    const pathWithoutExt = lastDotIndex !== -1 ? cleanPath.substring(0, lastDotIndex) : cleanPath;

    const publicId = `${CLOUDINARY_FOLDER_PREFIX}/${pathWithoutExt}`;
    const encodedPublicId = publicId.split('/').map(encodeURIComponent).join('/');

    // Construct URL with f_auto,q_auto and custom transformations
    return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto,${transformations}/v1/${encodedPublicId}`;
}

