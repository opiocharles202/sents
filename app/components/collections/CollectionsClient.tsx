"use client";

import { useState, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { featuredProducts, brands, fragranceFamilies, audiences } from "@/app/data/products";
import ProductCard from "../shared/ProductCard";

export default function CollectionsClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<string>("All");
  const [selectedFamily, setSelectedFamily] = useState<string>(searchParams.get("family") || "All");
  const [selectedAudience, setSelectedAudience] = useState<string>("All");
  const [showBestsellers, setShowBestsellers] = useState<boolean>(searchParams.get("bestsellers") === "true");
  const [priceRange, setPriceRange] = useState<number>(500); // Max price slider
  const [sortBy, setSortBy] = useState<"newest" | "price-asc" | "price-desc" | "name-asc">("newest");

  const filteredProducts = useMemo(() => {
    let result = featuredProducts;

    // 1. Search
    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase();
      result = result.filter(
        (p) => p.name.toLowerCase().includes(lowerTerm) || p.brand.toLowerCase().includes(lowerTerm)
      );
    }

    // 2. Brand
    if (selectedBrand !== "All") {
      result = result.filter((p) => p.brand === selectedBrand);
    }

    // 3. Family
    if (selectedFamily !== "All") {
      result = result.filter((p) => p.fragranceFamily === selectedFamily);
    }

    // 4. Audience
    if (selectedAudience !== "All") {
      result = result.filter((p) => p.audience === selectedAudience);
    }

    // 5. Bestsellers
    if (showBestsellers) {
      result = result.filter((p) => p.isBestseller);
    }

    // 6. Price
    result = result.filter((p) => p.price <= priceRange);

    // 7. Sort
    result = [...result].sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "newest":
        default:
          // Simulate newest by putting isNew first
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return 0;
      }
    });

    return result;
  }, [searchTerm, selectedBrand, selectedFamily, selectedAudience, showBestsellers, priceRange, sortBy]);

  return (
    <div className="flex flex-col lg:flex-row gap-12">
      {/* Sidebar Filters */}
      <aside className="w-full lg:w-64 flex-shrink-0 space-y-10">
        {/* Search */}
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-widest">Search</h3>
          <input
            type="text"
            placeholder="Search perfumes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
          />
        </div>

        {/* Brand Filter */}
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-widest">Brand</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="brand"
                checked={selectedBrand === "All"}
                onChange={() => setSelectedBrand("All")}
                className="w-4 h-4 text-gold-600 bg-card border-border focus:ring-gold-500"
              />
              <span className="text-sm text-muted group-hover:text-foreground transition-colors">All Brands</span>
            </label>
            {brands.map((brand) => (
              <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="brand"
                  checked={selectedBrand === brand}
                  onChange={() => setSelectedBrand(brand)}
                  className="w-4 h-4 text-gold-600 bg-card border-border focus:ring-gold-500"
                />
                <span className="text-sm text-muted group-hover:text-foreground transition-colors">{brand}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Fragrance Family Filter */}
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-widest">Family</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="family"
                checked={selectedFamily === "All"}
                onChange={() => setSelectedFamily("All")}
                className="w-4 h-4 text-gold-600 bg-card border-border focus:ring-gold-500"
              />
              <span className="text-sm text-muted group-hover:text-foreground transition-colors">All Families</span>
            </label>
            {fragranceFamilies.map((family) => (
              <label key={family.id} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="family"
                  checked={selectedFamily === family.id}
                  onChange={() => setSelectedFamily(family.id)}
                  className="w-4 h-4 text-gold-600 bg-card border-border focus:ring-gold-500"
                />
                <span className="text-sm text-muted group-hover:text-foreground transition-colors">{family.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Audience Filter */}
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-widest">Audience</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="audience"
                checked={selectedAudience === "All"}
                onChange={() => setSelectedAudience("All")}
                className="w-4 h-4 text-gold-600 bg-card border-border focus:ring-gold-500"
              />
              <span className="text-sm text-muted group-hover:text-foreground transition-colors">All</span>
            </label>
            {audiences.map((aud) => (
              <label key={aud} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="audience"
                  checked={selectedAudience === aud}
                  onChange={() => setSelectedAudience(aud)}
                  className="w-4 h-4 text-gold-600 bg-card border-border focus:ring-gold-500"
                />
                <span className="text-sm text-muted group-hover:text-foreground transition-colors capitalize">{aud}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Bestsellers Toggle */}
        <div>
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <input
                type="checkbox"
                checked={showBestsellers}
                onChange={(e) => setShowBestsellers(e.target.checked)}
                className="sr-only"
              />
              <div className={`block w-10 h-6 rounded-full transition-colors ${showBestsellers ? 'bg-gold-500' : 'bg-border'}`}></div>
              <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${showBestsellers ? 'translate-x-4' : 'translate-x-0'}`}></div>
            </div>
            <span className="text-sm font-semibold text-foreground tracking-widest uppercase group-hover:text-gold-600 transition-colors">
              Bestsellers Only
            </span>
          </label>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-widest">Max Price: ${priceRange}</h3>
          <input
            type="range"
            min="50"
            max="500"
            step="10"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full h-2 bg-cream-200 dark:bg-cream-800 rounded-lg appearance-none cursor-pointer accent-gold-500"
          />
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1">
        {/* Top Bar (Results count & Sort) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-4 border-b border-border">
          <p className="text-sm text-muted">
            Showing <span className="font-semibold text-foreground">{filteredProducts.length}</span> results
          </p>
          <div className="flex items-center gap-3">
            <label htmlFor="sort" className="text-sm text-muted">Sort by:</label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-2 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
            >
              <option value="newest">Newest Arrivals</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <h3 className="text-xl font-serif font-semibold mb-2">No fragrances found</h3>
            <p className="text-muted">Try adjusting your filters or search term to find what you're looking for.</p>
            <button 
              onClick={() => {
                setSearchTerm("");
                setSelectedBrand("All");
                setSelectedFamily("All");
                setSelectedAudience("All");
                setShowBestsellers(false);
                setPriceRange(500);
                router.replace("/collections", { scroll: false });
              }}
              className="mt-6 px-6 py-2 rounded-full border border-gold-500 text-gold-600 hover:bg-gold-50 dark:hover:bg-gold-950/30 transition-colors text-sm font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
