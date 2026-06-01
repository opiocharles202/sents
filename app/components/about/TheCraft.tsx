export default function TheCraft() {
  const values = [
    {
      title: "Rare Botanicals",
      description: "We source our ingredients from the world's most remote and pristine environments, from Bulgarian rose valleys to Sri Lankan sandalwood groves.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>
      ),
    },
    {
      title: "Slow Perfumery",
      description: "Art cannot be rushed. Our fragrances undergo a meticulous maceration process lasting up to six months, allowing the notes to seamlessly fuse and mature.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      ),
    },
    {
      title: "Ethical Sourcing",
      description: "We maintain direct, transparent relationships with our farmers, ensuring fair wages, sustainable harvesting practices, and zero animal testing.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
        </svg>
      ),
    },
    {
      title: "Artisan Glasswork",
      description: "Our signature bottles are individually blown and polished by master glassmakers in Normandy, making each vessel uniquely yours.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-cream-50 dark:bg-[#0c0a09]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-500 mb-4">
            Our Craft
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            The Anatomy of a <span className="text-gradient-gold">Masterpiece</span>
          </h2>
          <p className="mt-4 text-muted text-lg leading-relaxed">
            True luxury is found in the details. We cut no corners in our pursuit of olfactory perfection.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 stagger-children">
          {values.map((value) => (
            <div key={value.title} className="relative group">
              {/* Card background */}
              <div className="absolute inset-0 bg-card rounded-2xl border border-border transition-all duration-500 group-hover:shadow-xl group-hover:border-gold-300/40 group-hover:-translate-y-1" />
              
              <div className="relative p-8">
                {/* Icon */}
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-50 dark:bg-gold-950/50 border border-gold-200/50 dark:border-gold-800/30 text-gold-600 dark:text-gold-400 group-hover:scale-110 transition-transform duration-500">
                  {value.icon}
                </div>
                
                {/* Content */}
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
