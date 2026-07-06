import type { Review } from '@/lib/reviews-api'

type Props = {
  review: Review
}

/**
 * Single review card — USDL glassmorphism style.
 * Displays rating stars, comment, reviewer name, and date.
 * Intentionally has no interactive state; interaction is handled by the parent.
 */
export function ReviewCard({ review }: Props) {
  const date = new Date(review.created_at).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-white/20 bg-white/[0.07] px-7 py-6 shadow-[0_8px_32px_rgba(0,0,0,0.22)] backdrop-blur-md">
      {/* Stars */}
      <div className="flex items-center gap-1" aria-label={`${review.rating}点`}>
        {[1, 2, 3, 4, 5].map((n) => (
          <svg
            key={n}
            className={`h-4 w-4 ${n <= review.rating ? 'text-[#d8a86b]' : 'text-white/20'}`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.366-2.446a1 1 0 00-1.175 0l-3.366 2.446c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.293 9.384c-.783-.57-.38-1.81.588-1.81h4.161a1 1 0 00.951-.69l1.286-3.957z" />
          </svg>
        ))}
      </div>

      {/* Comment */}
      <p className="flex-1 text-sm leading-relaxed text-[#f7f1e8]/90 md:text-base">
        {review.comment}
      </p>

      {/* Footer: name + date */}
      <div className="flex items-center justify-between border-t border-white/10 pt-3">
        <span className="text-xs font-medium tracking-wide text-[#d8c5ab]">
          {review.reviewer_name}
        </span>
        <time
          dateTime={review.created_at}
          className="text-xs text-[#d8c5ab]/70"
        >
          {date}
        </time>
      </div>
    </article>
  )
}
