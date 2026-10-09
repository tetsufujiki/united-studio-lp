export function SchemaOrg() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://rec.united-studio.com/#localbusiness',
    name: 'USI新河岸音楽工務所',
    image: 'https://rec.united-studio.com/ogp.jpg',
    description:
      '東京・板橋の完全予約制レコーディングスタジオ。初心者のボーカル録音から歌ってみた制作まで、エンジニアが完成までサポート。',
    address: {
      '@type': 'PostalAddress',
      postalCode: '174-0042',
      streetAddress: '東坂下1-19-24-110',
      addressLocality: '板橋区',
      addressRegion: '東京都',
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
    parentOrganization: {
      '@type': 'Organization',
      '@id': 'https://united-studio.com/#organization',
    },
    priceRange: '2時間 ¥14,000〜（利用日時・開始時刻による）',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '13:00',
      closes: '22:00',
    },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://rec.united-studio.com/#service',
    name: 'Recording Studio',
    description:
      '録音から編集・ミックス・マスタリングまで一人のエンジニアが一貫担当。通常のボーカル収録は2時間で当日完成を目指します。多人数や複雑な制作では追加セッションをご相談する場合があります。',
    serviceType: 'Recording Studio',
    provider: {
      '@type': 'Organization',
      '@id': 'https://united-studio.com/#organization',
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
      '@type': 'Organization',
      '@id': 'https://united-studio.com/#organization',
    },
    description:
      '東京・板橋で録音から当日完成まで。料金・空き状況をオンラインで確認できるUSI新河岸音楽工務所のご利用案内。',
  };

  const webpageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://rec.united-studio.com/#webpage',
    url: 'https://rec.united-studio.com',
    name: '東京・板橋のレコーディングスタジオ｜当日完成・ミックス込み｜USI新河岸音楽工務所',
    description:
      '録音から編集・ミックス・マスタリングまで一人のエンジニアが一貫担当。通常の2時間で当日完成を目指します。利用日時・開始時刻別の料金と空き状況をオンラインで確認・予約できます。',
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://rec.united-studio.com/#website',
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://united-studio.com/#organization',
    },
  };

  return (
    <>
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
