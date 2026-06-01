import { fragranceFamilies } from "@/app/data/products";

export default function FragranceFamilies() {
  return (
    <section id="fragrances" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-500 mb-4">
            Find Your Family
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
            Explore by{" "}
            <span className="text-gradient-gold">Fragrance Family</span>
          </h2>
          <p className="mt-4 text-muted text-lg leading-relaxed">
            Every fragrance tells a different story. Discover the family that
            resonates with your personality.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {fragranceFamilies.map((family) => (
            <a
              key={family.id}
              href="#"
              id={`family-${family.id}`}
              className="group relative flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border hover:border-gold-300/40 transition-all duration-500 hover:shadow-xl hover:shadow-gold-500/5 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-5 text-5xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                {family.icon}
              </div>

              {/* Name */}
              <h3 className="font-serif text-xl font-semibold group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                {family.name}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {family.description}
              </p>

              {/* Count */}
              <span className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-cream-100 dark:bg-cream-900 text-xs font-medium text-muted">
                {family.count} fragrances
              </span>

              {/* Hover arrow */}
              <div className="mt-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-gold-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
