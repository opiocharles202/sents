import Image from "next/image";
import { stats } from "@/app/data/products";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-950 via-[#1a120b] to-[#0c0a09]" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-400/8 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-600/5 rounded-full blur-[160px]" />

      {/* Gold particle dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold-400/40 rounded-full animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-700/30 bg-gold-950/40 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-500" />
              </span>
              <span className="text-xs font-medium text-gold-300 tracking-wide uppercase">
                New Collection 2026
              </span>
            </div>

            {/* Heading */}
            <h1
              className="animate-fade-in-up text-5xl sm:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] tracking-tight text-white"
              style={{ animationDelay: "0.15s" }}
            >
              Discover Your{" "}
              <span className="text-gradient-gold">Signature</span>{" "}
              Scent
            </h1>

            {/* Subheading */}
            <p
              className="animate-fade-in-up mt-6 text-lg sm:text-xl text-cream-400 leading-relaxed max-w-xl mx-auto lg:mx-0"
              style={{ animationDelay: "0.3s" }}
            >
              Exquisite fragrances crafted by master perfumers, using the world&apos;s
              rarest ingredients. Each scent tells a story that lingers.
            </p>

            {/* CTA buttons */}
            <div
              className="animate-fade-in-up mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              style={{ animationDelay: "0.45s" }}
            >
              <a
                href="#collections"
                id="cta-explore"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold text-sm tracking-wide shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40 hover:from-gold-400 hover:to-gold-500 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Explore Collection</span>
                <svg className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href="#about"
                id="cta-story"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-cream-700/40 text-cream-200 font-semibold text-sm tracking-wide hover:bg-cream-900/30 hover:border-cream-600/50 transition-all duration-300"
              >
                Our Story
              </a>
            </div>

            {/* Stats bar */}
            <div
              className="animate-fade-in-up mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8"
              style={{ animationDelay: "0.6s" }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-gradient-gold font-serif">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-cream-500 tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Hero image */}
          <div
            className="animate-slide-in-right relative flex items-center justify-center"
            style={{ animationDelay: "0.3s" }}
          >
            {/* Glow ring */}
            <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full border border-gold-500/20 animate-pulse-glow" />
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-gold-400/10" />

            {/* Image container */}
            <div className="relative w-72 h-72 sm:w-[400px] sm:h-[400px] lg:w-[480px] lg:h-[480px] animate-float">
              <Image
                src="/images/hero-perfume.png"
                alt="Luxury perfume bottle — Velvet Noir by Maison Lumière"
                fill
                className="object-contain drop-shadow-[0_20px_60px_rgba(217,146,42,0.3)]"
                priority
                sizes="(max-width: 640px) 288px, (max-width: 1024px) 400px, 480px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
