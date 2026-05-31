import { useState } from 'react'
import { Textarea } from '../../../components/ui/Input'
import { Button } from '../../../components/ui/Button'
import { StarRating } from './StarRating'

const PLACEHOLDER =
  'شاركنا تجربتك: الحجم، الجودة، الخامة/القماش، والانطباع العام عن المنتج...'

export function ReviewForm({ onSubmit }) {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(null)
  const [content, setContent] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const canSubmit = rating > 0 && content.trim().length >= 10

  function handleSubmit(e) {
    e.preventDefault()
    if (!canSubmit) return
    onSubmit({ rating, content: content.trim() })
    setRating(0)
    setContent('')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-blush/40 bg-white p-6 shadow-sm transition-all duration-300 md:p-8"
    >
      <h3 className="font-display text-xl md:text-2xl">أضف تقييمك</h3>
      <p className="mt-2 text-sm text-charcoal-soft">
        ساعد العملاء الآخرين بمشاركة رأيك الصادق
      </p>

      <div className="mt-6">
        <p className="mb-2 text-sm font-medium text-charcoal">تقييمك</p>
        <StarRating
          value={rating}
          onChange={setRating}
          hoverValue={hoverRating}
          onHover={setHoverRating}
          onHoverLeave={() => setHoverRating(null)}
        />
        {rating > 0 && (
          <p className="mt-2 text-xs text-charcoal-soft">
            {rating} من 5 نجوم
          </p>
        )}
      </div>

      <div className="mt-6">
        <Textarea
          label="تفاصيل التقييم"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={PLACEHOLDER}
          rows={5}
          className="min-h-[140px] leading-relaxed"
        />
        <p className="mt-1 text-xs text-charcoal-soft/80">
          {content.length} حرف · الحد الأدنى ١٠ أحرف
        </p>
      </div>

      <div className="mt-8">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={!canSubmit}
          className="w-full sm:w-auto"
        >
          {submitted ? 'تم إرسال التقييم' : 'إرسال التقييم'}
        </Button>
      </div>
    </form>
  )
}
