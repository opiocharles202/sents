import { testimonials } from "@/app/data/products";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-50 to-background dark:from-cream-950/50 dark:to-background" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-gold-400/5 rounded-full blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-500 mb-4">
            What They Say
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
            Loved by{" "}
            <span className="text-gradient-gold">Fragrance</span>{" "}
            Enthusiasts
          </h2>
          <p className="mt-4 text-muted text-lg leading-relaxed">
            Join thousands of customers who have found their signature scent with us.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-2 gap-6 stagger-children">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              id={`testimonial-${testimonial.id}`}
              className="relative p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-gold-300/30 transition-all duration-500"
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-6 text-6xl font-serif text-gold-200/30 dark:text-gold-800/30 leading-none select-none">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-gold-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground leading-relaxed text-[15px] italic mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted">
                    Verified buyer · {testimonial.product}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
