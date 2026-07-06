export type Review = {
  id: string
  rating: number
  comment: string
  reviewer_name: string
  created_at: string
}

export type ReviewsResponse = {
  reviews: Review[]
  average_rating: number
  total_count: number
}

const RESERVE_BASE_URL =
  process.env.NEXT_PUBLIC_RESERVE_URL || 'https://reserve.united-studio.com'

/**
 * Fetch approved reviews from the reserve site public API.
 *
 * @param limit  Number of reviews to fetch (max 12). Default 3.
 *
 * Uses Next.js fetch caching:
 * - Cached at the edge and revalidated every 10 minutes.
 * - On error returns a safe empty fallback so the LP is never broken.
 */
export async function fetchReviews(limit = 3): Promise<ReviewsResponse> {
  const url = `${RESERVE_BASE_URL}/api/public/reviews?limit=${limit}`

  try {
    const res = await fetch(url, {
      next: { revalidate: 600 }, // revalidate every 10 minutes
    })

    if (!res.ok) {
      console.error(`[reviews-api] HTTP ${res.status} from ${url}`)
      return { reviews: [], average_rating: 5.0, total_count: 0 }
    }

    const data: ReviewsResponse = await res.json()
    return data
  } catch (err) {
    console.error('[reviews-api] Failed to fetch reviews:', err)
    return { reviews: [], average_rating: 5.0, total_count: 0 }
  }
}
