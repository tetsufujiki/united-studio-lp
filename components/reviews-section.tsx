import Image from 'next/image'
import Link from 'next/link'
import { fetchReviews } from '@/lib/reviews-api'
import { ReviewCard } from '@/components/review-card'

const RESERVE_REVIEWS_URL =
  process.env.NEXT_PUBLIC_RESERVE_URL
    ? `${process.env.NEXT_PUBLIC_RESERVE_URL}/reviews`
    : 'https://reserve.united-studio.com/reviews'

/**
 * ReviewsSection — async RSC
 *
 * Fetches up to 3 approved reviews from the reserve site public API at build /
 * revalidation time (ISR, 10-minute cache). On fetch failure the section still
 * renders — review cards are simply omitted and the badge still shows.
 *
 * To increase the number of cards shown, change the `limit` argument passed to
 * fetchReviews(). The API supports up to 12.
 */
export async function ReviewsSection() {
  const { reviews, total_count } = await fetchReviews(3)

  // Use live total if available; fall back to a conservative display value.
  const displayCount = total_count > 0 ? total_count : null

  return (
    <section className="relative overflow-hidden bg-usi-ink">
      {/* Studio atmosphere photo background */}
      <Image
        src="/assets/booth-atmosphere.jpg"
        alt=""
        fill
        sizes="100vw"
        quality={80}
        className="-z-20 object-cover"
        aria-hidden="true"
      />

      {/* Deep overlay for readability */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(to bottom, rgba(16,17,22,0.88) 0%, rgba(16,17,22,0.72) 50%, rgba(16,17,22,0.88) 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:px-12 md:py-32 lg:px-16">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-usi-cream-muted">
              Reviews
            </span>
            <span className="h-px flex-1 bg-usi-hairline-dark" />
          </div>

          <div className="mt-8 flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
            <h2 className="text-3xl font-light tracking-tight text-usi-cream md:text-4xl">
              お客様のレビュー
            </h2>

            {/* Review-count anchor */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg key={i} className="h-4 w-4 text-usi-accent" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.366-2.446a1 1 0 00-1.175 0l-3.366 2.446c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.293 9.384c-.783-.57-.38-1.81.588-1.81h4.161a1 1 0 00.951-.69l1.286-3.957z" />
                  </svg>
                ))}
              </div>
              <p className="flex items-baseline gap-1.5 text-usi-cream">
                {displayCount !== null && (
                  <span className="text-3xl font-bold tracking-tight md:text-4xl">
                    {displayCount}
                  </span>
                )}
                <span className="text-sm font-light tracking-wide text-usi-cream-muted md:text-base">
                  {displayCount !== null ? '件のレビュー' : 'レビュー多数'}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Review cards */}
        {reviews.length > 0 ? (
          <div className="mb-12 grid grid-cols-1 gap-px border border-usi-hairline-dark bg-usi-hairline-dark md:mb-16 md:grid-cols-3">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        ) : (
          /* Fallback: API not yet available */
          <div className="mb-12 md:mb-16">
            {process.env.NODE_ENV !== 'production' && (
              <p className="text-center text-sm text-usi-cream-muted">
                レビューを読み込めませんでした（API未接続 — reserve サイトの /api/public/reviews を確認してください）
              </p>
            )}
          </div>
        )}

        {/* "すべてのレビューを見る" — unchanged link target */}
        <div className="flex justify-start">
          <Link
            href={RESERVE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 border border-usi-cream/30 px-8 py-3.5 text-sm font-medium text-usi-cream transition-colors duration-200 hover:border-usi-cream/60 hover:bg-white/5 md:text-base"
          >
            すべてのレビューを見る
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
