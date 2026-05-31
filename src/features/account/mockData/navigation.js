export const mainNavLinks = [
  { to: "/", label: "الرئيسية" },
  { to: "/shop", label: "المتجر" },
  { to: "/shop?tag=sale", label: "التخفيضات" },
  { to: "/account", label: "حسابي" },
];

export const footerLinks = {
  المتجر: [
    { label: "كل الزهور", to: "/shop" },
    { label: "باقات", to: "/shop?category=bouquets" },
    { label: "زفاف", to: "/shop?category=wedding" },
    { label: "تخفيضات", to: "/shop?tag=sale" },
  ],
  الشركة: [
    { label: "من نحن", to: "#" },
    { label: "تواصل معنا", to: "#" },
    { label: "دليل العناية", to: "#" },
  ],
  الحساب: [
    { label: "حسابي", to: "/account" },
    { label: "طلباتي", to: "/account/orders" },
    { label: "المفضلة", to: "/wishlist" },
    { label: "السلة", to: "/cart" },
  ],
};

export const accountNavLinks = [
  { to: "/account", label: "لوحة التحكم", end: true },
  { to: "/account/profile", label: "الملف الشخصي" },
  { to: "/account/orders", label: "الطلبات" },
  { to: "/account/notifications", label: "الإشعارات" },
  { to: "/account/compare", label: "المقارنه" },
  { to: "/account/privacy", label: "الخصوصية" },
  { to: "/account/delete", label: "حذف الحساب" },
  { to: "/", label: "تسجيل الخروج" },
];
