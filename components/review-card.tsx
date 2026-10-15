import type { Review } from '@/lib/reviews-api'

type Props = {
  review: Review
}

/**
 * Single review card — USDL 4.0 editorial style.
 * Displays rating stars, comment, reviewer name, and date.
 * Intentionally has no interactive state; interaction is handled by the parent.
 */
export function ReviewCard({ review }: Props) {
  const hasComment = Boolean(review.comment?.trim())
  const date = new Date(review.created_at).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="flex flex-col gap-4 bg-usi-ink/85 px-7 py-7 backdrop-blur-sm">
      {/* Stars */}
      <div className="flex items-center gap-1" aria-label={`${review.rating}点`}>
        {[1, 2, 3, 4, 5].map((n) => (
          <svg
            key={n}
            className={`h-3.5 w-3.5 ${n <= review.rating ? 'text-usi-accent' : 'text-usi-cream/20'}`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.366-2.446a1 1 0 00-1.175 0l-3.366 2.446c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.293 9.384c-.783-.57-.38-1.81.588-1.81h4.161a1 1 0 00.951-.69l1.286-3.957z" />
          </svg>
        ))}
      </div>

      {/* Comment */}
      <p className={`min-w-0 flex-1 break-words [overflow-wrap:anywhere] ${hasComment ? 'text-sm leading-relaxed text-usi-cream/90 md:text-base' : 'text-xs italic leading-relaxed text-usi-cream-muted md:text-sm'}`}>
        {hasComment ? review.comment : '星評価のみ'}
      </p>

      {/* Footer: name + date */}
      <div className="flex items-center justify-between border-t border-usi-hairline-dark pt-3">
        <span className="text-xs font-medium tracking-wide text-usi-cream-muted">
          {review.reviewer_name}
        </span>
        <time
          dateTime={review.created_at}
          className="font-mono text-[11px] text-usi-cream-muted/80"
        >
          {date}
        </time>
      </div>
    </article>
  )
}
