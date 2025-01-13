/**
 * Creates a URL-friendly slug from a string
 * Converts spaces to hyphens, removes special characters
 * 
 * @param {string} str - String to convert to slug
 * @returns {string} URL-friendly slug
 * 
 * @example
 * createSlug("Spaghetti Carbonara") // returns "spaghetti-carbonara"
 * createSlug("Thai Green Curry (Spicy)") // returns "thai-green-curry-spicy"
 */
export function createSlug(str) {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')  // Remove special characters
      .replace(/\s+/g, '-')      // Replace spaces with hyphens
      .replace(/-+/g, '-');      // Remove consecutive hyphens
  }
  
  /**
   * Reverses a slug back to a readable string
   * 
   * @param {string} slug - URL slug to convert
   * @returns {string} Human readable string
   * 
   * @example
   * slugToString("spaghetti-carbonara") // returns "Spaghetti Carbonara"
   */
  export function slugToString(slug) {
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }