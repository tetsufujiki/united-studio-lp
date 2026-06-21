import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'レコーディングスタジオ利用ガイド｜USI新河岸音楽工務所',
  description: 'レコーディングスタジオの利用方法、料金、アクセスについての完全ガイド。初心者も安心してご利用いただけます。',
}

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
