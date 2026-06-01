import Image from "next/image";

export default function OurHeritage() {
  return (
    <section className="py-24 sm:py-32 bg-background relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6">
              Born in Paris, <br />
              <span className="text-gradient-gold">Loved Worldwide</span>
            </h2>
            <div className="space-y-6 text-muted text-lg leading-relaxed">
              <p>
                The story of Scents began in a small, sunlit atelier in the heart of Paris in 2018. Our founders, a collective of three master perfumers, shared a singular vision: to strip away the pretense of the traditional fragrance industry and return to the pure, emotive power of scent.
              </p>
              <p>
                Frustrated by mass-produced fragrances relying on synthetic fillers, they set out to create a house that honors the ancient traditions of perfumery while embracing modern, sustainable practices.
              </p>
              <p>
                Today, what started as a passionate experiment has grown into a globally recognized luxury brand. Yet, our core philosophy remains unchanged: every bottle is a labor of love, crafted slowly and intentionally to capture fleeting moments and turn them into lasting memories.
              </p>
            </div>
          </div>

          {/* Right: Image grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 relative">
            <div className="space-y-4 sm:space-y-6 mt-8 sm:mt-12">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/perfume-floral.png"
                  alt="Perfume crafting process"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/hero-perfume.png"
                  alt="Our atelier"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
            {/* Decorative stamp */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-gold-500/20 bg-background/80 backdrop-blur-sm flex items-center justify-center flex-col shadow-2xl z-10">
              <span className="text-gold-500 font-serif text-2xl font-bold leading-none mb-1">Est.</span>
              <span className="text-foreground text-sm tracking-widest font-semibold">2018</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
