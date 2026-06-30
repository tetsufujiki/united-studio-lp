import type { MetadataRoute } from 'next'
import { getSitemapUrl } from '@/lib/seo-config'

/**
 * Robots.txt Configuration
 *
 * Defines crawling rules for search engines and web crawlers.
 *
 * RULES:
 * - Allow all user agents to crawl public pages (/, /faq, /guide)
 * - Automatically excludes API routes (/api/*)
 * - Includes sitemap URL for search engine discovery
 *
 * DISALLOWED AREAS (implicit - not in allow list):
 * - /api/* (API routes)
 * - /admin/* (if added in future)
 * - /.next/* (Next.js internal)
 * - /private/* (private areas)
 *
 * ENVIRONMENT VARIABLES:
 * - NEXT_PUBLIC_SITE_URL: Base URL used for sitemap reference
 *   Defaults to 'https://rec.united-studio.com' if not set
 *
 * Google Search Console Compatibility: ✓
 * - Uses standard robots.txt protocol
 * - Includes sitemap URL for automatic discovery
 * - Uses wildcard rules for broad crawler permissions
 */

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/.next/'],
      },
    ],
    sitemap: getSitemapUrl(),
  }
}
