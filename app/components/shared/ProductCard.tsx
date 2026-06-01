import Image from "next/image";
import type { Product } from "@/app/data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <article
      id={`product-${product.id}`}
      className="group relative flex flex-col rounded-2xl bg-card border border-border overflow-hidden hover:border-gold-300/40 hover:shadow-xl hover:shadow-gold-500/5 transition-all duration-500"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
        {product.isNew && (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-emerald-500/90 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
            New
          </span>
        )}
        {product.isBestseller && (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-gold-500/90 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
            Bestseller
          </span>
        )}
        {product.originalPrice && (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-rose-500/90 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
            Sale
          </span>
        )}
      </div>

      {/* Quick add */}
      <button
        className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 dark:bg-cream-900/80 backdrop-blur-sm border border-border opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-gold-50 dark:hover:bg-gold-950/50 hover:border-gold-300"
        aria-label={`Add ${product.name} to cart`}
      >
        <svg className="w-4 h-4 text-foreground" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
      </button>

      {/* Image */}
      <div className="relative aspect-[4/5] bg-gradient-to-b from-cream-100 to-cream-50 dark:from-cream-950 dark:to-cream-900 overflow-hidden">
        <Image
          src={product.image}
          alt={`${product.name} by ${product.brand} — ${product.fragranceFamily} fragrance`}
          fill
          className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Hover shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 p-4 sm:p-5">
        {/* Brand */}
        <span className="text-[11px] font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-400">
          {product.brand}
        </span>

        {/* Name */}
        <h3 className="mt-1.5 font-serif text-lg font-semibold text-foreground leading-snug group-hover:text-gold-700 dark:group-hover:text-gold-300 transition-colors">
          {product.name}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">
          {product.description}
        </p>

        {/* Sizes */}
        <div className="mt-3 flex items-center gap-1.5">
          {product.sizes.map((size) => (
            <span
              key={size}
              className="px-2 py-0.5 rounded-md bg-cream-100 dark:bg-cream-900 text-[10px] font-medium text-muted"
            >
              {size}
            </span>
          ))}
        </div>

        {/* Rating + Price */}
        <div className="mt-auto pt-4 flex items-end justify-between">
          {/* Rating */}
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(product.rating) ? "text-gold-400" : "text-cream-300 dark:text-cream-700"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-muted">({product.reviewCount})</span>
          </div>

          {/* Price */}
          <div className="text-right">
            {product.originalPrice && (
              <span className="block text-xs text-muted line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
            <span className="text-lg font-bold text-foreground">
              ${product.price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
