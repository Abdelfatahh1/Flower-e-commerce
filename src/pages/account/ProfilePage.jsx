import { mockUser } from '../../features/account/mockData/user'
import { AccountPageShell } from '../../features/account/components/AccountPageShell'
import { Input } from '../../components/ui/Input'
import { Button } from '../../components/ui/Button'

export function ProfilePage() {
  return (
    <AccountPageShell>
      <div>
        <h2 className="font-display text-3xl">تعديل الملف الشخصي</h2>
        <p className="mt-2 text-charcoal-soft">حدّثي بياناتك الشخصية</p>
        <form className="mt-8 max-w-xl space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input label="الاسم الأول" defaultValue={mockUser.firstName} />
            <Input label="اسم العائلة" defaultValue={mockUser.lastName} />
          </div>
          <Input label="البريد الإلكتروني" type="email" defaultValue={mockUser.email} />
          <Input label="الهاتف" defaultValue={mockUser.phone} />
          <Input label="العنوان" defaultValue={mockUser.address.street} />
          <div className="grid gap-4 sm:grid-cols-3">
            <Input label="المدينة" defaultValue={mockUser.address.city} />
            <Input label="المحافظة" defaultValue={mockUser.address.state} />
            <Input label="الرمز البريدي" defaultValue={mockUser.address.zip} />
          </div>
          <Button type="button" variant="primary">
            حفظ التغييرات
          </Button>
        </form>
      </div>
    </AccountPageShell>
  )
}
