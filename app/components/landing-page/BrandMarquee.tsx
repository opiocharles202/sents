import { brands } from "@/app/data/products";

export default function BrandMarquee() {
  return (
    <section className="py-12 border-y border-border overflow-hidden bg-cream-50/50 dark:bg-cream-950/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted">
          Featured Houses
        </p>
      </div>
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-cream-50 dark:from-cream-950/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-cream-50 dark:from-cream-950/30 to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex animate-marquee whitespace-nowrap">
          {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="mx-8 sm:mx-12 text-xl sm:text-2xl font-serif font-semibold text-cream-400 dark:text-cream-700 select-none flex-shrink-0"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
