import { Link } from 'react-router-dom'
import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'

export function LoginPage() {
  return (
    <div className="animate-fade-in">
      <h1 className="font-display text-4xl">مرحباً بعودتك</h1>
      <p className="mt-2 text-charcoal-soft">سجّلي الدخول إلى حساب بلوميه</p>
      <form className="mt-8 space-y-5">
        <Input label="البريد الإلكتروني" type="email" placeholder="you@email.com" />
        <Input label="كلمة المرور" type="password" placeholder="••••••••" />
        <div className="flex justify-end">
          <a href="#" className="text-sm text-rose hover:underline">
            نسيتِ كلمة المرور؟
          </a>
        </div>
        <Button type="button" variant="primary" className="w-full">
          تسجيل الدخول
        </Button>
      </form>
      <p className="mt-8 text-center text-sm text-charcoal-soft">
        ليس لديك حساب؟{' '}
        <Link to="/register" className="font-medium text-rose hover:underline">
          أنشئي حساباً
        </Link>
      </p>
    </div>
  )
}
