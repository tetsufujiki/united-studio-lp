import type { MetadataRoute } from 'next'
import { getStaticPages } from '@/lib/seo-config'

/**
 * XML Sitemap Generation for Google Search Console
 *
 * This file automatically generates a sitemap.xml that includes all public pages
 * for search engine indexing and discovery.
 *
 * INCLUDED URLS:
 * - Static pages: /, /faq, /guide
 * - Future dynamic content: news articles, productions, reviews, portfolio items (from Supabase)
 *
 * EXCLUDED URLS (by design):
 * - /api/* (API routes)
 * - /admin/* (admin pages)
 * - /.next/* (Next.js internal)
 * - Unpublished or draft content
 * - Error pages
 *
 * ARCHITECTURE:
 * 1. Static pages are defined in lib/seo-config.ts (getStaticPages)
 * 2. Dynamic content functions are added to lib/seo-config.ts
 * 3. Each content type gets its own getter function
 * 4. All are combined here using Promise.all() for parallel fetching
 * 5. Combined array returned as sitemap
 *
 * ENVIRONMENT VARIABLES:
 * - NEXT_PUBLIC_SITE_URL: Base URL for all sitemap entries
 *   Defaults to 'https://rec.united-studio.com' if not set
 *
 * HOW TO ADD NEW CONTENT:
 * 1. Create a new function in lib/seo-config.ts:
 *    export async function get{ContentType}(): Promise<MetadataRoute.Sitemap> {
 *      // Fetch from Supabase or database
 *      // Map each item to sitemap entry
 *      // Return array or empty array on error
 *    }
 *
 * 2. Import the function here:
 *    import { getStaticPages, get{ContentType} } from '@/lib/seo-config'
 *
 * 3. Add to Promise.all() below:
 *    const dynamicPages = await get{ContentType}()
 *    return [...staticPages, ...dynamicPages, ...]
 *
 * EXAMPLES FOR FUTURE CONTENT TYPES:
 * - News Articles: /news/{slug}
 * - Productions: /productions/{slug}
 * - Reviews: /reviews/{slug}
 * - Portfolio Items: /portfolio/{slug}
 *
 * All functions should handle errors gracefully and return empty arrays
 * so one failed content source doesn't break the entire sitemap.
 *
 * Google Search Console: ✓ Compatible
 */

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get static pages
  const staticPages = getStaticPages()

  // FUTURE: Fetch dynamic content from Supabase
  // Uncomment and add as content sources become available:
  //
  // const [newsPages, productionPages, reviewPages] = await Promise.all([
  //   getNewsArticles(),
  //   getProductions(),
  //   getReviews(),
  // ])

  // Combine all pages (static + dynamic)
  // Return only staticPages for now; add dynamic sources as they're created
  return staticPages

  // FINAL RETURN (when dynamic content is added):
  // return [...staticPages, ...newsPages, ...productionPages, ...reviewPages]
}
