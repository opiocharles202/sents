import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero-perfume.png" // Reusing dummy image
          alt="The art of perfumery"
          fill
          className="object-cover object-center opacity-40 blur-[2px] scale-105"
          priority
        />
        {/* Dark luxury gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-16">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold-500 mb-6 animate-fade-in-up">
          Our Heritage
        </span>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          The <span className="text-gradient-gold">Essence</span> of Artistry
        </h1>
        <p className="text-lg sm:text-xl text-cream-300 leading-relaxed max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          For over a decade, Scents has been at the forefront of modern perfumery, blending rare botanicals with uncompromising craftsmanship to create fragrances that transcend time.
        </p>
      </div>
    </section>
  );
}
