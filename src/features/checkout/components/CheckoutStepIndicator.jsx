import { cn } from '../../../lib/utils'

const steps = [
  { id: 1, label: 'مراجعة الطلب' },
  { id: 2, label: 'الشحن والدفع' },
]

export function CheckoutStepIndicator({ currentStep }) {
  return (
    <div className="mb-10 mt-8 flex gap-2">
      {steps.map((step) => (
        <div
          key={step.id}
          className={cn(
            'flex-1 rounded-full py-2 text-center text-sm font-medium transition-all duration-300',
            currentStep === step.id
              ? 'bg-charcoal text-cream'
              : currentStep > step.id
                ? 'bg-rose/15 text-rose-dark'
                : 'bg-cream-dark text-charcoal-soft'
          )}
        >
          {step.id}. {step.label}
        </div>
      ))}
    </div>
  )
}
