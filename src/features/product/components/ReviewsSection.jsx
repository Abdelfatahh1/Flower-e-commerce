import { useState } from 'react'
import { Star, Check } from 'lucide-react'
import { productReviews } from '../mockData/reviews'
import { ReviewForm } from './ReviewForm'

function formatReviewDate() {
  return new Intl.DateTimeFormat('ar-EG', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date())
}

export function ReviewsSection() {
  const [reviews, setReviews] = useState(productReviews)

  function handleSubmit({ rating, content }) {
    setReviews((prev) => [
      {
        id: `r-${Date.now()}`,
        author: 'أنت',
        rating,
        date: formatReviewDate(),
        title: 'تقييم جديد',
        content,
        verified: false,
      },
      ...prev,
    ])
  }

  return (
    <section className="mt-20 border-t border-blush/30 pt-16">
      <h2 className="font-display text-3xl">آراء العملاء</h2>

      <div className="mt-8">
        <ReviewForm onSubmit={handleSubmit} />
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {reviews.map((review) => (
          <article
            key={review.id}
            className="rounded-3xl border border-blush/40 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{review.author}</p>
                <p className="text-xs text-charcoal-soft">{review.date}</p>
              </div>
              <div className="flex text-gold">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>
            <h3 className="mt-4 font-display text-lg">{review.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
              {review.content}
            </p>
            {review.verified && (
              <p className="mt-3 flex items-center gap-1 text-xs text-sage">
                <Check className="h-3 w-3" /> عملية شراء موثقة
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
