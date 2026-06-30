# SEO Implementation Guide

## Overview

This project includes a complete SEO implementation with automatic sitemap generation and robots.txt configuration, optimized for Google Search Console and compatible with all major search engines.

## Files

### 1. `app/robots.ts`
**Purpose**: Defines crawling rules for search engines

**Features**:
- Allows crawling of all public pages (`/`, `/faq`, `/guide`)
- Disallows crawling of API routes (`/api/`), admin areas (`/admin/`), and Next.js internals (`/.next/`)
- Automatically references sitemap URL using environment variables
- Uses `NEXT_PUBLIC_SITE_URL` environment variable for domain configuration

**Current Output**:
```
User-Agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /.next/

Sitemap: https://rec.united-studio.com/sitemap.xml
```

### 2. `app/sitemap.ts`
**Purpose**: Generates XML sitemap for search engine discovery

**Features**:
- Includes all static pages (homepage, FAQ, Guide)
- Prepared for dynamic content from future Supabase integration
- Uses centralized configuration from `lib/seo-config.ts`
- Graceful error handling for dynamic content sources
- Google Search Console compatible

**Current Output**:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://rec.united-studio.com</loc>
    <lastmod>2025-06-30T00:00:00.000Z</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://rec.united-studio.com/faq</loc>
    <lastmod>2025-06-30T00:00:00.000Z</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://rec.united-studio.com/guide</loc>
    <lastmod>2025-06-30T00:00:00.000Z</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

### 3. `lib/seo-config.ts`
**Purpose**: Centralized SEO configuration and reusable utilities

**Key Functions**:
- `getSiteUrl()` - Returns the base URL (uses `NEXT_PUBLIC_SITE_URL` env var)
- `getSitemapUrl()` - Returns the full sitemap URL
- `getStaticPages()` - Returns static page sitemap entries
- Template functions for future dynamic content

**Usage Example**:
```typescript
import { getSiteUrl, getStaticPages } from '@/lib/seo-config'

const baseUrl = getSiteUrl() // 'https://rec.united-studio.com'
const staticPages = getStaticPages() // Returns sitemap entries
```

## Environment Variables

### NEXT_PUBLIC_SITE_URL
- **Type**: String (URL)
- **Default**: `https://rec.united-studio.com`
- **Usage**: Sets the base domain for all sitemap and robots.txt entries
- **Example**: `NEXT_PUBLIC_SITE_URL=https://yourdomain.com`

## Adding Dynamic Content

### Step 1: Create a Getter Function
In `lib/seo-config.ts`, add a new async function following this pattern:

```typescript
export async function getNewsArticles(): Promise<MetadataRoute.Sitemap> {
  try {
    const baseUrl = getSiteUrl()
    // Fetch from Supabase or your database
    const { data: articles } = await supabase
      .from('news_articles')
      .select('slug, updated_at')
      .eq('published', true)

    return articles?.map(article => ({
      url: `${baseUrl}/news/${article.slug}`,
      lastModified: new Date(article.updated_at),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })) || []
  } catch (error) {
    console.error('Error fetching news articles:', error)
    return [] // Graceful degradation
  }
}
```

### Step 2: Import and Use in Sitemap
In `app/sitemap.ts`, update the import and return statement:

```typescript
import { getStaticPages, getNewsArticles } from '@/lib/seo-config'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = getStaticPages()
  const newsPages = await getNewsArticles()
  
  return [...staticPages, ...newsPages]
}
```

### Step 3: Use Promise.all for Multiple Sources
For multiple content types, fetch in parallel:

```typescript
const [staticPages, newsPages, productionPages, reviewPages] = await Promise.all([
  getStaticPages(),
  getNewsArticles(),
  getProductions(),
  getReviews(),
])

return [...staticPages, ...newsPages, ...productionPages, ...reviewPages]
```

## Content Type Examples

### News Articles
- URL Pattern: `/news/{slug}`
- Priority: 0.7
- Change Frequency: weekly
- Database Table: `news_articles`

### Productions
- URL Pattern: `/productions/{slug}`
- Priority: 0.7
- Change Frequency: monthly
- Database Table: `productions`

### Reviews
- URL Pattern: `/reviews/{slug}`
- Priority: 0.6
- Change Frequency: monthly
- Database Table: `reviews`

### Portfolio Items
- URL Pattern: `/portfolio/{slug}`
- Priority: 0.6
- Change Frequency: monthly
- Database Table: `portfolio_items`

## Verification

### Test robots.txt
```bash
curl https://yourdomain.com/robots.txt
```

### Test sitemap.xml
```bash
curl https://yourdomain.com/sitemap.xml
```

### Submit to Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select your property
3. Go to Sitemaps section
4. Submit: `https://yourdomain.com/sitemap.xml`

### Verify in Search Console
- Check coverage to see which pages were discovered
- Monitor for any indexing errors
- View crawl statistics and insights

## Best Practices

1. **Update lastModified**: Always update the `lastModified` date when content changes
2. **Priority Hierarchy**:
   - Homepage: 1.0
   - Main pages: 0.8
   - Content pages: 0.7
   - Supporting pages: 0.6
3. **Change Frequency**:
   - `daily` - Homepage, frequently updated content
   - `weekly` - Blog posts, news
   - `monthly` - Static pages, old content
   - `yearly` - Rarely updated pages
4. **Error Handling**: Always wrap database fetches in try-catch, returning empty arrays on error
5. **Performance**: Use `Promise.all()` for parallel fetches from multiple sources
6. **Testing**: Test sitemap after adding new content sources

## Maintenance

### Regular Updates
- Review sitemap monthly to ensure all pages are included
- Update `lastModified` dates for active content
- Monitor Google Search Console for indexing issues

### When Adding New Sections
1. Create new content type getter function in `lib/seo-config.ts`
2. Add import to `app/sitemap.ts`
3. Add to Promise.all() or return statement
4. Test with `curl` before deploying
5. Submit updated sitemap to Google Search Console

## Troubleshooting

### Sitemap not updating
- Check that `lastModified` dates are correct
- Verify database queries return expected results
- Check error logs in server

### Robots.txt not showing correct domain
- Verify `NEXT_PUBLIC_SITE_URL` is set in environment
- Check `.env.local` or Vercel environment variables
- Rebuild and redeploy

### Pages not indexing in Google
- Submit sitemap to Google Search Console
- Check for robots.txt disallow rules
- Verify pages return HTTP 200 status
- Check page content meets quality guidelines

## Resources

- [Google Sitemap Protocol](https://www.sitemaps.org/)
- [Google Search Central](https://developers.google.com/search/docs)
- [Next.js Metadata Route](https://nextjs.org/docs/app/api-reference/file-conventions/metadata-route)
- [Robots.txt Specification](https://www.robotstxt.org/)
