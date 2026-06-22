import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'レコーディングスタジオ利用ガイド｜USI新河岸音楽工務所',
  description: 'USI新河岸音楽工務所のレコーディングスタジオ利用ガイド。初心者も安心してご利用いただけます。料金、営業時間、アクセス、よくある質問をご紹介。',
}

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
