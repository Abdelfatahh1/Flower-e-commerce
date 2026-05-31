import { AccountPageShell } from '../../features/account/components/AccountPageShell'

const settings = [
  {
    label: 'رسائل تسويقية',
    description: 'استلام العروض وتحديثات المجموعات الجديدة',
    default: true,
  },
  {
    label: 'إشعارات SMS',
    description: 'تحديثات الطلب عبر الرسائل النصية',
    default: false,
  },
  {
    label: 'تحليلات الاستخدام',
    description: 'مساعدتنا على تحسين تجربة التسوق',
    default: true,
  },
]

export function PrivacyPage() {
  return (
    <AccountPageShell>
      <div>
        <h2 className="font-display text-3xl">إعدادات الخصوصية</h2>
        <p className="mt-2 text-charcoal-soft">تحكّمي في استخدام بياناتك</p>
        <ul className="mt-8 max-w-xl space-y-4">
          {settings.map((s) => (
            <li
              key={s.label}
              className="flex items-center justify-between gap-4 rounded-2xl border border-blush/40 bg-white p-5"
            >
              <div>
                <p className="font-medium">{s.label}</p>
                <p className="text-sm text-charcoal-soft">{s.description}</p>
              </div>
              <input type="checkbox" defaultChecked={s.default} className="h-5 w-5 rounded text-rose" />
            </li>
          ))}
        </ul>
      </div>
    </AccountPageShell>
  )
}
