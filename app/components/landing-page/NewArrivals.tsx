import Image from "next/image";
import { featuredProducts } from "@/app/data/products";
import ProductCard from "../shared/ProductCard";

export default function NewArrivals() {
  const newArrivals = featuredProducts.filter((p) => p.isNew).slice(0, 2);

  return (
    <section id="new-arrivals" className="relative py-24 sm:py-32 bg-cream-50 dark:bg-[#0c0a09]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Editorial Spotlight */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-perfume.png"
                alt="Latest fragrance collection"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="inline-block px-3 py-1 mb-4 rounded-full bg-gold-500/20 backdrop-blur-md border border-gold-400/30 text-[10px] font-bold uppercase tracking-widest text-gold-300">
                  Spring 2026 Collection
                </span>
                <h3 className="font-serif text-3xl font-bold text-white mb-3">
                  A New Era of Sensorial Elegance
                </h3>
                <p className="text-cream-300 text-sm leading-relaxed mb-6">
                  Discover our latest olfactory creations, blending rare botanicals with modern perfumery techniques.
                </p>
                <a
                  href="#shop-new"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white group"
                >
                  <span className="relative after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-full after:bg-gold-400 after:origin-right after:transition-transform after:duration-300 group-hover:after:origin-left group-hover:after:scale-x-0">
                    Explore Collection
                  </span>
                  <svg className="w-4 h-4 text-gold-400 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold-400/10 rounded-full blur-[40px]" />
          </div>

          {/* Right: Product Grid */}
          <div className="lg:col-span-7">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-500 mb-2">
                  Just Arrived
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
                  New <span className="text-gradient-gold">Arrivals</span>
                </h2>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6 stagger-children">
              {newArrivals.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
