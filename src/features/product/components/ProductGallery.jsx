// دي الصور اللي بتظهر تحت صورة البرودكت في البرودكت ديتلز
export function ProductGallery({ product }) {
  return (
    <div>
      <div className="overflow-hidden rounded-3xl bg-cream-dark shadow-sm">
        <img
          src={product.images[0]}
          alt={product.name}
          className="aspect-square w-full object-cover"
        />
      </div>
      {product.images.length > 1 && (
        <div className="mt-4 flex gap-3 overflow-x-auto">
          {product.images.map((img, i) => (
            <div
              key={i}
              className={`h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-2 ${
                i === 0
                  ? "border-rose shadow-md"
                  : "border-transparent opacity-70"
              }`}
            >
              <img src={img} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
