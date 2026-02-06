// Your Amazon Associate Tag
export const AMAZON_TAG = "somts09-20";

/**
 * Helper to construct Amazon search URLs with your affiliate tag
 */
export function getAmazonSearchLink(keywords: string): string {
  const query = encodeURIComponent(keywords);
  return `https://www.amazon.com/s?k=${query}&tag=${AMAZON_TAG}`;
}

/**
 * Helper to ensure a product URL has your affiliate tag.
 * If you provide a full affiliate link (starting with https://...), it returns it as-is.
 * If you provide an ASIN (e.g., "B0784VYVL1"), it builds a tagged URL.
 */
export function getAmazonProductLink(urlOrAsin: string): string {
  // If it's already a full URL, just return it (assumes you pasted a full affiliate link)
  if (urlOrAsin.startsWith("http")) {
    return urlOrAsin;
  }

  // Otherwise, assume it's an ASIN and build a clean link
  return `https://www.amazon.com/dp/${urlOrAsin}?tag=${AMAZON_TAG}`;
}
