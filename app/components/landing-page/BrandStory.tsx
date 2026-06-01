import Image from "next/image";

export default function BrandStory() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image composition */}
          <div className="relative">
            {/* Main image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-gold-900/10">
              <Image
                src="/images/perfume-floral.png"
                alt="Artisan perfume crafting — Fleur d'Amour by Parfums de Provence"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 sm:right-8 glass-light rounded-xl p-5 shadow-lg max-w-[220px] animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">Est. 2018</div>
                  <div className="text-[10px] text-muted">Paris, France</div>
                </div>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                Crafted by 12 master perfumers using ethically sourced ingredients.
              </p>
            </div>

            {/* Decorative gold ring */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full border-2 border-gold-300/20" />
          </div>

          {/* Right — Content */}
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-500 mb-4">
              Our Story
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
              The Art of{" "}
              <span className="text-gradient-gold">Perfumery</span>,{" "}
              Reimagined
            </h2>

            <div className="mt-8 space-y-5 text-muted text-[15px] leading-relaxed">
              <p>
                Born in the heart of Paris, Scents was founded with a singular
                vision: to make the world&apos;s finest fragrances accessible to
                discerning individuals everywhere.
              </p>
              <p>
                Our master perfumers source the rarest ingredients from every
                corner of the globe — Bulgarian roses, Laotian oud, Italian
                bergamot, and Indian saffron — blending tradition with modern
                artistry to create scents that transcend time.
              </p>
              <p>
                Every bottle is a testament to meticulous craftsmanship,
                sustainable sourcing, and an unwavering commitment to excellence.
              </p>
            </div>

            {/* Feature list */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>
                  ),
                  title: "Sustainable",
                  desc: "Ethically sourced ingredients",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
                    </svg>
                  ),
                  title: "Artisan",
                  desc: "Handcrafted in small batches",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  ),
                  title: "Cruelty-Free",
                  desc: "Never tested on animals",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg>
                  ),
                  title: "Free Shipping",
                  desc: "On orders above $100",
                },
              ].map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 h-9 w-9 rounded-lg bg-gold-50 dark:bg-gold-950/50 border border-gold-200/50 dark:border-gold-800/30 flex items-center justify-center text-gold-600 dark:text-gold-400">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{feature.title}</h4>
                    <p className="text-xs text-muted mt-0.5">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
