"use client";

export default function Newsletter() {
  return (
    <section id="newsletter" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-950 via-[#1a120b] to-[#0c0a09]" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gold-400/5 rounded-full blur-[100px]" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="mx-auto mb-6 h-14 w-14 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-500/20">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Stay in the{" "}
          <span className="text-gradient-gold">Know</span>
        </h2>

        <p className="mt-4 text-cream-400 text-lg leading-relaxed max-w-xl mx-auto">
          Be the first to discover new collections, exclusive offers, and the
          stories behind our fragrances.
        </p>

        {/* Form */}
        <form
          id="newsletter-form"
          className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            id="newsletter-email"
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-cream-700/30 text-white placeholder:text-cream-600 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500/50 transition-all"
          />
          <button
            type="submit"
            id="newsletter-submit"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold text-sm tracking-wide shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40 hover:from-gold-400 hover:to-gold-500 transition-all duration-300 whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>

        <p className="mt-4 text-xs text-cream-600">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
