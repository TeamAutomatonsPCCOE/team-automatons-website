
export const CLOUDINARY_CLOUD_NAME = 'dmaiwu7zn';
export const CLOUDINARY_FOLDER_PREFIX = 'team-automatons';

/**
 * Transforms a local path into a Cloudinary URL 
 * if the image has been uploaded to the expected folder structure.
 * 
 * @param {string} src - The source URL (e.g. "/team/2026/Rajvardhan.webp")
 * @returns {string} - The optimized Cloudinary URL or original src if external/invalid
 */
export function getCloudinaryUrl(src) {
    if (!src) return src;



    if (src.startsWith('http') || src.startsWith('//')) {
        return src; // Return external URLs as is
    }

    // Fallback to local path if Cloudinary is not desired or in development
    if (process.env.NEXT_PUBLIC_USE_LOCAL_IMAGES === 'true' || process.env.NODE_ENV === 'development') {
        return src.startsWith('/') ? src : `/${src}`;
    }

    // Remove leading slash
    const cleanPath = src.startsWith('/') ? src.slice(1) : src;

    // Remove extension for public ID (Cloudinary handles this, but it's cleaner without)
    // Actually, Cloudinary upload script removed extension for public_id, 
    // but the URL delivery should probably match.
    // However, if we uploaded as "team/2026/foo", we can access it.
    // Let's rely on the public_id pattern we established: prefix + path_without_ext
    const lastDotIndex = cleanPath.lastIndexOf('.');
    const pathWithoutExt = lastDotIndex !== -1 ? cleanPath.substring(0, lastDotIndex) : cleanPath;

    const publicId = `${CLOUDINARY_FOLDER_PREFIX}/${pathWithoutExt}`;
    const encodedPublicId = publicId.split('/').map(encodeURIComponent).join('/');

    // Construct URL with f_auto,q_auto for optimization
    return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto/v1/${encodedPublicId}`;
}
