/**
 * Path configuration for file storage locations
 * These values can be overridden via environment variables
 */

/**
 * Directory for storing public/original files (local storage mode)
 * Default: ./public
 */
export const PUBLIC_DIR = process.env.PUBLIC_DIR ?? "./public";
