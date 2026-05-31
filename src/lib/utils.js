export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function formatPrice(amount) {
  return new Intl.NumberFormat('ar-EG', {
    style: 'currency',
    currency: 'EGP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function calcDiscount(price, originalPrice) {
  if (!originalPrice || originalPrice <= price) return 0
  return Math.round(((originalPrice - price) / originalPrice) * 100)
}

export function getPathSlug(segment) {
  const parts = window.location.pathname.split('/').filter(Boolean)
  const index = parts.indexOf(segment)
  return index >= 0 ? parts[index + 1] : null
}

export const badgeLabels = {
  sale: 'تخفيض',
  new: 'جديد',
  bestseller: 'الأكثر مبيعاً',
}
