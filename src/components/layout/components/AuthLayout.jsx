import { Link, Outlet } from 'react-router-dom'
import { Container } from '../../../components/ui/Container'

export function AuthLayout() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="grid min-h-screen lg:grid-cols-2">
        <div className="relative hidden overflow-hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200&q=80"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
          <div className="relative flex h-full flex-col justify-end p-12 text-cream">
            <Link to="/" className="font-display text-4xl font-semibold">
              بلوم<span className="text-blush-deep">يه</span>
            </Link>
            <p className="mt-4 max-w-md text-lg text-cream/90">
              حيث تروي كل بتلة قصة من الأناقة والجمال الخالد.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center py-12">
          <Container className="max-w-md">
            <Link to="/" className="mb-8 inline-block font-display text-2xl lg:hidden">
              بلوم<span className="text-rose">يه</span>
            </Link>
            <Outlet />
          </Container>
        </div>
      </div>
    </div>
  )
}
