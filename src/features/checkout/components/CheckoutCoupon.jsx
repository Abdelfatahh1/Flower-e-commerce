import { useState } from 'react'
import { Input } from '../../../components/ui/Input'
import { Button } from '../../../components/ui/Button'

export function CheckoutCoupon() {
  const [code, setCode] = useState('')
  const [applied, setApplied] = useState(false)
  const [message, setMessage] = useState('')

  function handleApply(e) {
    e.preventDefault()
    const trimmed = code.trim()
    if (!trimmed) return
    if (trimmed.toUpperCase() === 'BLOOM10') {
      setApplied(true)
      setMessage('تم تطبيق الخصم بنجاح — خصم ١٠٪')
    } else {
      setApplied(false)
      setMessage('رمز الخصم غير صالح')
    }
  }

  return (
    <div className="space-y-4 border-t border-blush/30 pt-8">
      <h2 className="font-display text-2xl">رمز الخصم</h2>
      <form onSubmit={handleApply} className="flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="flex-1">
          <Input
            label="أدخل رمز الخصم"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="مثال: BLOOM10"
            disabled={applied}
          />
        </div>
        <Button
          type="submit"
          variant="secondary"
          disabled={!code.trim() || applied}
          className="shrink-0 sm:mb-0"
        >
          {applied ? 'تم التطبيق' : 'تطبيق'}
        </Button>
      </form>
      {message && (
        <p
          className={`text-sm ${applied ? 'text-sage' : 'text-rose-dark'}`}
          role="status"
        >
          {message}
        </p>
      )}
    </div>
  )
}
