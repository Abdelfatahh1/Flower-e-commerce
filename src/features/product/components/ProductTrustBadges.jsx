import { Truck, Shield, CreditCard } from 'lucide-react'

const items = [
  { icon: Truck, text: 'شحن مجاني للطلبات فوق ١٥٠٠ ج.م' },
  { icon: Shield, text: 'ضمان نضارة ٧ أيام' },
  { icon: CreditCard, text: 'دفع آمن — كل البطاقات' },
]

export function ProductTrustBadges() {
  return (
    <div className="mt-10 space-y-4 rounded-2xl border border-blush/40 bg-cream-dark/50 p-6">
      {items.map(({ icon: Icon, text }) => (
        <div key={text} className="flex items-center gap-3 text-sm text-charcoal-soft">
          <Icon className="h-5 w-5 shrink-0 text-sage" />
          {text}
        </div>
      ))}
    </div>
  )
}
