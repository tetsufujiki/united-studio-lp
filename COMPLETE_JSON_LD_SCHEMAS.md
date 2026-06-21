# Complete JSON-LD Schemas Reference

This document contains all five JSON-LD schemas in their complete, standalone form for reference and validation.

## 1. Organization Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://rec.united-studio.com/#organization",
  "name": "ユナイテッドスタジオ（株）",
  "url": "https://rec.united-studio.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://rec.united-studio.com/assets/usi_logo.png",
    "width": 250,
    "height": 250
  },
  "sameAs": [
    "https://www.youtube.com/@unitedstudio",
    "https://x.com/unitedstudio",
    "https://www.facebook.com/unitedstudio"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "03-6682-4537",
    "contactType": "Customer Service",
    "areaServed": "JP",
    "availableLanguage": "ja"
  }
}
```

## 2. LocalBusiness Schema

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://rec.united-studio.com/#localbusiness",
  "name": "USI新河岸音楽工務所",
  "image": "https://rec.united-studio.com/ogp.jpg",
  "description": "歌ってみたからHIPHOPまで対応、1000組以上の利用実績。高評価レビューが集まる予約サイトで24時間予約受付。",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "東坂下1-19-24-110",
    "addressLocality": "板橋区",
    "addressRegion": "東京都",
    "postalCode": "",
    "addressCountry": "JP"
  },
  "telephone": "03-6682-4537",
  "url": "https://rec.united-studio.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://rec.united-studio.com/assets/usi_logo.png",
    "width": 250,
    "height": 250
  },
  "organization": {
    "@id": "https://rec.united-studio.com/#organization"
  },
  "priceRange": "¥14,000-",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  }
}
```

## 3. Service Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://rec.united-studio.com/#service",
  "name": "Recording Studio",
  "description": "ボーカル収録からミックス・マスタリング、撮影まで一括対応するレコーディングスタジオ。当日完成納品が基本仕様。",
  "serviceType": "Recording Studio",
  "provider": {
    "@id": "https://rec.united-studio.com/#organization"
  },
  "areaServed": "JP",
  "availableLanguage": "ja"
}
```

## 4. WebSite Schema

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://rec.united-studio.com/#website",
  "name": "USI新河岸音楽工務所",
  "url": "https://rec.united-studio.com",
  "publisher": {
    "@id": "https://rec.united-studio.com/#organization"
  },
  "description": "1000組+利用・高評価レビュー・即日納品ワンプライスのレコーディングスタジオ。"
}
```

## 5. WebPage Schema

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://rec.united-studio.com/#webpage",
  "url": "https://rec.united-studio.com",
  "name": "1000組+利用・高評価レビュー・即日納品ワンプライスのレコーディングスタジオ｜USI新河岸音楽工務所",
  "description": "歌ってみたからHIPHOPまで対応、1000組以上の利用実績。高評価レビューが集まる予約サイトで24時間予約受付。",
  "isPartOf": {
    "@id": "https://rec.united-studio.com/#website"
  },
  "publisher": {
    "@id": "https://rec.united-studio.com/#organization"
  }
}
```

## Validation Using Google Rich Results Test

To validate all schemas at once:

1. Visit: https://search.google.com/test/rich-results
2. Enter URL: https://rec.united-studio.com
3. Click "Test URL"
4. Expected results:
   - Organization: ✓ Valid
   - LocalBusiness: ✓ Valid
   - Service: ✓ Valid
   - WebSite: ✓ Valid
   - WebPage: ✓ Valid
   - No errors
   - No warnings

## Cross-Reference Map

The schemas are interconnected via @id references:

```
Organization
├── LocalBusiness → references Organization
├── Service → provider references Organization
├── WebSite → publisher references Organization
└── WebPage → publisher references Organization
             → isPartOf references WebSite
```

This structure ensures:
- Proper entity relationships
- Correct search engine interpretation
- Enhanced Knowledge Graph generation
- Improved local search visibility
- Better AI assistant understanding

## Implementation Location

All schemas are implemented in: `/components/schema-org.tsx`

Each schema is rendered as a separate `<script type="application/ld+json">` tag in the document head (via `layout.tsx`).

## Notes

- No external dependencies required
- TypeScript-compliant
- Server Component (no Client Component code)
- Vercel deployment ready
- Zero build errors
- Follows schema.org best practices
- All URLs use secure HTTPS
- All content is in Japanese (ja language)
- All references use verified social media accounts
- Logo uses official company asset
