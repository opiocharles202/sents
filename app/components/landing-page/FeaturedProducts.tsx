import { featuredProducts } from "@/app/data/products";
import ProductCard from "../shared/ProductCard";

export default function FeaturedProducts() {
  const allFeatured = featuredProducts.filter((p) => !p.isNew).slice(0, 8);

  return (
    <section id="bestsellers" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-500 mb-4">
              Curated Selection
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
              Our <span className="text-gradient-gold">Signature</span> Classics
            </h2>
            <p className="mt-4 text-muted text-lg max-w-xl leading-relaxed">
              Handpicked fragrances that define elegance. Explore the timeless creations that our customers love most.
            </p>
          </div>

          {/* View all link */}
          <a
            href="/collections"
            id="view-all-products"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-gold-600 dark:text-gold-400 hover:text-gold-700 dark:hover:text-gold-300 transition-colors whitespace-nowrap"
          >
            View All Fragrances
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {allFeatured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
