/**
 * Path configuration for file storage locations
 * These values can be overridden via environment variables
 */

/**
 * Directory for storing public/original files (local storage mode)
 * Default: ./public
 */
export const PUBLIC_DIR = process.env.PUBLIC_DIR ?? "./public";

/**
 * Prefix for cloud storage paths (S3/R2)
 * Derived from PUBLIC_DIR by extracting the folder name
 * Examples:
 *   PUBLIC_DIR="./public" → STORAGE_PREFIX="public/"
 *   PUBLIC_DIR="" → STORAGE_PREFIX=""
 *   PUBLIC_DIR="./custom" → STORAGE_PREFIX="custom/"
 */
function deriveStoragePrefix(): string {
  if (!PUBLIC_DIR) return "";
  // Extract folder name from path (e.g., "./public" → "public", "/var/data" → "data")
  const folderName = PUBLIC_DIR.replace(/^\.?\//, "").replace(/\/$/, "");
  return folderName ? `${folderName}/` : "";
}

export const STORAGE_PREFIX = process.env.STORAGE_PREFIX ?? deriveStoragePrefix();
