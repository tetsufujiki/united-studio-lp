import type { MetadataRoute } from 'next'

/**
 * Generate a dynamic XML sitemap for Google Search Console and SEO.
 * 
 * INCLUDED URLS:
 * - Homepage (/)
 * - FAQ page (/faq)
 * - Guide page (/guide)
 * 
 * EXCLUDED URLS:
 * - API routes
 * - Admin/internal pages
 * - Draft or unpublished content
 * - Error pages
 * 
 * ENVIRONMENT VARIABLES:
 * - NEXT_PUBLIC_SITE_URL: The production site URL (e.g., https://rec.united-studio.com)
 *   If not set, the sitemap will use a fallback, but you should configure this for production.
 * 
 * TO ADD NEW PAGES:
 * 1. Static pages: Add a new entry to the pages array below
 * 2. Dynamic database content (e.g., blog posts, portfolio items):
 *    - Create a section that fetches from your database (Supabase, PostgreSQL, etc.)
 *    - Map each item to a URL with appropriate lastModified timestamp
 *    - Example:
 *      const posts = await fetchBlogPosts();
 *      const dynamicUrls = posts.map(post => ({
 *        url: `${baseUrl}/blog/${post.slug}`,
 *        lastModified: new Date(post.updated_at),
 *        changeFrequency: 'monthly' as const,
 *        priority: 0.7,
 *      }));
 */

export default function sitemap(): MetadataRoute.Sitemap {
  // Get base URL from environment variable or use fallback
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rec.united-studio.com'

  // Static pages with their properties
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date('2025-06-30'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date('2025-06-30'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guide`,
      lastModified: new Date('2025-06-30'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // IMPORTANT: To add dynamic content from a database:
  // 1. Import your database client or API function
  // 2. Create an async function to fetch items
  // 3. Map each item to a sitemap entry
  // 4. Combine with staticPages array
  //
  // Example for blog posts:
  // const dynamicPages = await getDynamicPages();
  // return [...staticPages, ...dynamicPages];

  return staticPages
}
