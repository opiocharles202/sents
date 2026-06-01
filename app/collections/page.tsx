import { Suspense } from "react";
import CollectionsClient from "@/app/components/collections/CollectionsClient";

export const unstable_instant = { prefetch: "static" };

export const metadata = {
  title: "Collections | Scents — Luxury Perfume",
  description: "Browse our entire collection of luxury fragrances.",
};

export default function CollectionsPage() {
  return (
    <div className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-500 mb-4">
            Our Catalog
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
            The <span className="text-gradient-gold">Collections</span>
          </h1>
          <p className="mt-4 text-muted text-lg leading-relaxed">
            Discover the perfect fragrance for every occasion, mood, and personality.
          </p>
        </div>

        {/* Filters and Grid */}
        <Suspense fallback={<p className="text-center text-muted">Loading collections...</p>}>
          <CollectionsClient />
        </Suspense>
        
      </div>
    </div>
  );
}
