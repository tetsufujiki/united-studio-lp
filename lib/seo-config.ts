/**
 * SEO Configuration Module
 *
 * Centralized configuration for robots.ts and sitemap.ts
 * Provides reusable functions and constants to avoid duplication.
 *
 * USAGE:
 * - Import getSiteUrl() to get the base URL
 * - Import getStaticPages() for sitemap static pages
 * - Import getSitemapUrl() for robots.txt sitemap reference
 *
 * ADDING DYNAMIC CONTENT:
 * Create async functions following this pattern:
 *
 * export async function getNewsPosts(): Promise<MetadataRoute.Sitemap> {
 *   const posts = await fetchFromSupabase('news_posts');
 *   return posts.map(post => ({
 *     url: `${getSiteUrl()}/news/${post.slug}`,
 *     lastModified: new Date(post.updated_at),
 *     changeFrequency: 'weekly' as const,
 *     priority: 0.7,
 *   }));
 * }
 */

import type { MetadataRoute } from 'next'

/**
 * Get the base URL for the site
 * Uses NEXT_PUBLIC_SITE_URL environment variable or falls back to production domain
 */
export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://rec.united-studio.com'
}

/**
 * Get the full sitemap URL for robots.txt and other references
 */
export function getSitemapUrl(): string {
  return `${getSiteUrl()}/sitemap.xml`
}

/**
 * Static pages configuration
 * These pages are always included in the sitemap
 *
 * @returns Array of static page sitemap entries
 */
export function getStaticPages(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl()

  return [
    {
      url: baseUrl,
      lastModified: new Date('2025-06-30'),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date('2025-06-30'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guide`,
      lastModified: new Date('2025-06-30'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]
}

/**
 * Example dynamic content function for future implementation
 * Uncomment and modify when adding Supabase integration
 *
 * export async function getNewsArticles(): Promise<MetadataRoute.Sitemap> {
 *   try {
 *     const baseUrl = getSiteUrl()
 *     // const supabase = createClient();
 *     // const { data: articles } = await supabase
 *     //   .from('news_articles')
 *     //   .select('slug, updated_at')
 *     //   .eq('published', true)
 *     //   .order('updated_at', { ascending: false });
 *
 *     // return articles?.map(article => ({
 *     //   url: `${baseUrl}/news/${article.slug}`,
 *     //   lastModified: new Date(article.updated_at),
 *     //   changeFrequency: 'weekly' as const,
 *     //   priority: 0.7,
 *     // })) || [];
 *   } catch (error) {
 *     console.error('Error fetching news articles for sitemap:', error)
 *     return []
 *   }
 * }
 */

/**
 * Template for adding more dynamic content sources
 * Copy this pattern for each new content type (productions, reviews, etc.)
 *
 * Pattern:
 * 1. Create a function named get{ContentType}()
 * 2. Fetch from database with error handling
 * 3. Map to MetadataRoute.Sitemap format
 * 4. Return empty array on error (graceful degradation)
 * 5. Import and call in sitemap.ts with Promise.all()
 */
