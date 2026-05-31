import { Link } from 'react-router-dom'
import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'

export function RegisterPage() {
  return (
    <div className="animate-fade-in">
      <h1 className="font-display text-4xl">إنشاء حساب</h1>
      <p className="mt-2 text-charcoal-soft">انضمي لبلوميه واستمتعي بعروض حصرية</p>
      <form className="mt-8 space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <Input label="الاسم الأول" />
          <Input label="اسم العائلة" />
        </div>
        <Input label="البريد الإلكتروني" type="email" />
        <Input label="كلمة المرور" type="password" />
        <Input label="تأكيد كلمة المرور" type="password" />
        <label className="flex items-start gap-3 text-sm text-charcoal-soft">
          <input type="checkbox" className="mt-1 rounded border-blush" />
          أوافق على الشروط وسياسة الخصوصية
        </label>
        <Button type="button" variant="primary" className="w-full">
          إنشاء الحساب
        </Button>
      </form>
      <p className="mt-8 text-center text-sm text-charcoal-soft">
        لديك حساب؟{' '}
        <Link to="/login" className="font-medium text-rose hover:underline">
          سجّلي الدخول
        </Link>
      </p>
    </div>
  )
}
