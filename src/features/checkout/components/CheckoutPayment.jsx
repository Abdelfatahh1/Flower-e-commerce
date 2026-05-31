import { useState } from 'react'
import { CreditCard, Wallet, Banknote } from 'lucide-react'
import { Input } from '../../../components/ui/Input'
import { paymentMethods } from '../mockData/paymentMethods'
import { cn } from '../../../lib/utils'

const icons = { card: CreditCard, wallet: Wallet, cod: Banknote }

export function CheckoutPayment() {
  const [selected, setSelected] = useState(paymentMethods[0].id)

  return (
    <div className="space-y-5">
      <h2 className="font-display text-2xl">طريقة الدفع</h2>
      <div className="space-y-3">
        {paymentMethods.map((method) => {
          const Icon = icons[method.id]
          const isSelected = selected === method.id
          return (
            <label
              key={method.id}
              className={cn(
                'flex cursor-pointer items-center gap-4 rounded-2xl border p-4 transition-all duration-300',
                isSelected
                  ? 'border-rose bg-rose/5 shadow-sm'
                  : 'border-blush/60 hover:border-blush-deep hover:shadow-sm'
              )}
            >
              <input
                type="radio"
                name="payment"
                value={method.id}
                checked={isSelected}
                onChange={() => setSelected(method.id)}
                className="text-rose focus:ring-rose/30"
              />
              <Icon className="h-5 w-5 text-rose" />
              <span className="font-medium">{method.label}</span>
            </label>
          )
        })}
      </div>
      {selected === 'card' && (
        <div className="space-y-4 rounded-2xl bg-cream-dark/50 p-6 animate-fade-in">
          <Input label="رقم البطاقة" placeholder="4242 4242 4242 4242" />
          <div className="grid grid-cols-2 gap-4">
            <Input label="تاريخ الانتهاء" placeholder="MM/YY" />
            <Input label="رمز الأمان" placeholder="123" />
          </div>
        </div>
      )}
    </div>
  )
}
