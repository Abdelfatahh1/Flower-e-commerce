export const mockOrders = [
  {
    id: 'ORD-2847',
    date: '١٠ مايو ٢٠٢٥',
    status: 'delivered',
    statusLabel: 'تم التسليم',
    total: 2230,
    items: [
      { name: 'تدرج الورود المخملية', quantity: 1, price: 1280 },
      { name: 'صندوق هدايا فاخر', quantity: 1, price: 950 },
    ],
  },
  {
    id: 'ORD-2791',
    date: '٢٢ أبريل ٢٠٢٥',
    status: 'shipped',
    statusLabel: 'قيد الشحن',
    total: 1850,
    items: [{ name: 'أناقة الأوركيد الليلية', quantity: 1, price: 1850 }],
  },
  {
    id: 'ORD-2654',
    date: '٨ مارس ٢٠٢٥',
    status: 'delivered',
    statusLabel: 'تم التسليم',
    total: 3340,
    items: [
      { name: 'مجموعة عروس بلوم', quantity: 1, price: 2450 },
      { name: 'دزينة الورود الحمراء', quantity: 1, price: 890 },
    ],
  },
]

export const mockNotifications = [
  {
    id: 'n1',
    title: 'تم تسليم الطلب',
    message: 'طلبك ORD-2847 وصل بنجاح.',
    date: '١٢ مايو ٢٠٢٥',
    read: true,
  },
  {
    id: 'n2',
    title: 'مجموعة الربيع',
    message: 'اكتشفي باقات الربيع الجديدة — خصم ١٥٪ هذا الأسبوع.',
    date: '٨ مايو ٢٠٢٥',
    read: false,
  },
  {
    id: 'n3',
    title: 'تحديث الشحن',
    message: 'طلبك ORD-2791 في الطريق إليك.',
    date: '٢٣ أبريل ٢٠٢٥',
    read: false,
  },
]
