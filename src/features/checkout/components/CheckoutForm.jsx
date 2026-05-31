import { Input, Select } from '../../../components/ui/Input'
import { mockUser } from '../../account/mockData/user'

export function CheckoutShippingForm() {
  const { address } = mockUser

  return (
    <div className="space-y-5">
      <h2 className="font-display text-2xl">معلومات الشحن</h2>
      <Input
        label="الاسم الكامل"
        defaultValue={`${mockUser.firstName} ${mockUser.lastName}`}
      />
      <Input label="رقم الهاتف" defaultValue={mockUser.phone} />
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="الشارع" defaultValue={address.street} />
        <Input
          label="رقم / اسم المبنى"
          defaultValue={`${address.buildingNumber} ${address.buildingName}`}
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="الدور" defaultValue={address.floor} />
        <Input label="الشقة" defaultValue={address.apartment} />
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <Input label="المدينة" defaultValue={address.city} />
        <Input label="المحافظة" defaultValue={address.state} />
        <Input label="الرمز البريدي" defaultValue={address.zip} />
      </div>
      <Select
        label="الدولة"
        defaultValue="EG"
        options={[
          { value: 'EG', label: 'مصر' },
          { value: 'SA', label: 'السعودية' },
          { value: 'AE', label: 'الإمارات' },
        ]}
      />
    </div>
  )
}
