import { AlertTriangle } from 'lucide-react'
import { AccountPageShell } from '../../features/account/components/AccountPageShell'
import { Input } from '../../components/ui/Input'
import { Button } from '../../components/ui/Button'

export function DeleteAccountPage() {
  return (
    <AccountPageShell>
      <div className="max-w-xl">
        <h2 className="font-display text-3xl">حذف الحساب</h2>
        <div className="mt-8 rounded-3xl border border-rose/30 bg-rose/5 p-6">
          <div className="flex gap-4">
            <AlertTriangle className="h-6 w-6 shrink-0 text-rose" />
            <div>
              <p className="font-medium text-charcoal">هذا الإجراء نهائي</p>
              <p className="mt-2 text-sm text-charcoal-soft">
                سيُحذف سجل الطلبات والمفضلة والإعدادات. لا يمكن التراجع.
              </p>
            </div>
          </div>
        </div>
        <form className="mt-8 space-y-5">
          <Input label='اكتبي "حذف" للتأكيد' placeholder="حذف" />
          <Button
            type="button"
            variant="rose"
            onClick={() => document.getElementById('delete-dialog')?.showModal()}
          >
            حذف حسابي
          </Button>
        </form>
        <dialog
          id="delete-dialog"
          className="max-w-lg rounded-3xl border-0 bg-white p-6 shadow-2xl backdrop:bg-charcoal/40"
        >
          <p className="text-charcoal-soft">
            تم تسجيل طلب الحذف. (عرض تجريبي — لا يتم تنفيذ إجراء.)
          </p>
          <form method="dialog" className="mt-6">
            <Button type="submit" variant="secondary" className="w-full">
              إغلاق
            </Button>
          </form>
        </dialog>
      </div>
    </AccountPageShell>
  )
}
