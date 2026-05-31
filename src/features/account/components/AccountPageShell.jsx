import { Container } from '../../../components/ui/Container'
import { Breadcrumb } from '../../../components/ui/Breadcrumb'
import { AccountSidebar } from './AccountSidebar'

export function AccountPageShell({ children }) {
  return (
    <Container className="py-8 sm:py-10 md:py-14">
      <Breadcrumb items={[{ label: 'الرئيسية', to: '/' }, { label: 'حسابي' }]} />
      <h1 className="font-display text-3xl sm:text-4xl md:text-5xl">حسابي</h1>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:mt-8 sm:gap-8 lg:mt-10 lg:grid-cols-[minmax(0,260px)_1fr] lg:gap-10">
        <AccountSidebar />
        <div className="min-w-0 w-full animate-fade-in">{children}</div>
      </div>
    </Container>
  )
}
