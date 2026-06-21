export function SchemaOrg() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://rec.united-studio.com/#organization',
    name: 'ユナイテッドスタジオ（株）',
    url: 'https://rec.united-studio.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://rec.united-studio.com/assets/usi_logo.png',
      width: 250,
      height: 250,
    },
    sameAs: [
      'https://www.youtube.com/@unitedstudio',
      'https://x.com/unitedstudio',
      'https://www.facebook.com/unitedstudio',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '03-6682-4537',
      contactType: 'Customer Service',
      areaServed: 'JP',
      availableLanguage: 'ja',
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://rec.united-studio.com/#localbusiness',
    name: 'USI新河岸音楽工務所',
    image: 'https://rec.united-studio.com/ogp.jpg',
    description:
      '歌ってみたからHIPHOPまで対応、1000組以上の利用実績。高評価レビューが集まる予約サイトで24時間予約受付。',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '東坂下1-19-24-110',
      addressLocality: '板橋区',
      addressRegion: '東京都',
      postalCode: '',
      addressCountry: 'JP',
    },
    telephone: '03-6682-4537',
    url: 'https://rec.united-studio.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://rec.united-studio.com/assets/usi_logo.png',
      width: 250,
      height: 250,
    },
    organization: {
      '@id': 'https://rec.united-studio.com/#organization',
    },
    priceRange: '¥14,000-',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://rec.united-studio.com/#service',
    name: 'Recording Studio',
    description:
      'ボーカル収録からミックス・マスタリング、撮影まで一括対応するレコーディングスタジオ。当日完成納品が基本仕様。',
    serviceType: 'Recording Studio',
    provider: {
      '@id': 'https://rec.united-studio.com/#organization',
    },
    areaServed: 'JP',
    availableLanguage: 'ja',
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://rec.united-studio.com/#website',
    name: 'USI新河岸音楽工務所',
    url: 'https://rec.united-studio.com',
    publisher: {
      '@id': 'https://rec.united-studio.com/#organization',
    },
    description:
      '1000組+利用・高評価レビュー・即日納品ワンプライスのレコーディングスタジオ。',
  };

  const webpageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://rec.united-studio.com/#webpage',
    url: 'https://rec.united-studio.com',
    name: '1000組+利用・高評価レビュー・即日納品ワンプライスのレコーディングスタジオ｜USI新河岸音楽工務所',
    description:
      '歌ってみたからHIPHOPまで対応、1000組以上の利用実績。高評価レビューが集まる予約サイトで24時間予約受付。',
    isPartOf: {
      '@id': 'https://rec.united-studio.com/#website',
    },
    publisher: {
      '@id': 'https://rec.united-studio.com/#organization',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
    </>
  );
}
