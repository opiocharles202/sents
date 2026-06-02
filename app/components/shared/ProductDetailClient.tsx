"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/app/data/products";
import type { ProductDetail } from "@/app/data/productDetails";

interface ProductDetailClientProps {
  product: Product;
  details: ProductDetail;
  relatedProducts: Product[];
}

export default function ProductDetailClient({
  product,
  details,
  relatedProducts,
}: ProductDetailClientProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"notes" | "details" | "ingredients">("notes");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  // Price multiplier based on size
  const getSizePrice = (size: string) => {
    const base = product.price;
    if (size.includes("30")) return base * 0.7;
    if (size.includes("100")) return base * 1.4;
    return base;
  };

  const currentPrice = getSizePrice(selectedSize);
  const originalPrice = product.originalPrice
    ? getSizePrice(selectedSize) * (product.originalPrice / product.price)
    : undefined;

  const discount = originalPrice
    ? Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
    : 0;

  const allImages = details.detailImages;

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2500);
  };

  const noteTypeLabel = {
    top: "Top Notes",
    heart: "Heart Notes",
    base: "Base Notes",
  };

  const noteTypeIcon = {
    top: "✦",
    heart: "♥",
    base: "◆",
  };

  const noteTypeColor = {
    top: "from-amber-200 to-gold-400",
    heart: "from-rose-300 to-pink-500",
    base: "from-stone-400 to-cream-700",
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-4">
        <nav className="flex items-center gap-2 text-sm text-muted" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <svg className="w-3.5 h-3.5 text-cream-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
          <Link href="/collections" className="hover:text-foreground transition-colors">
            Collections
          </Link>
          <svg className="w-3.5 h-3.5 text-cream-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
          <span className="text-foreground font-medium">{product.name}</span>
        </nav>
      </div>

      {/* Main Product Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Image Gallery */}
          <div className="animate-fade-in">
            {/* Main Image */}
            <div
              ref={imageRef}
              className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-cream-100 via-cream-50 to-gold-50 dark:from-cream-950 dark:via-cream-900 dark:to-gold-950/30 border border-border"
            >
              <Image
                src={allImages[selectedImage]}
                alt={`${product.name} by ${product.brand}`}
                fill
                priority
                className="object-contain p-8 transition-all duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Badges */}
              <div className="absolute top-5 left-5 flex flex-col gap-2">
                {product.isNew && (
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-500/90 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                    New Arrival
                  </span>
                )}
                {product.isBestseller && (
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-gold-500/90 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                    Bestseller
                  </span>
                )}
                {discount > 0 && (
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-rose-500/90 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                    -{discount}% Off
                  </span>
                )}
              </div>

              {/* Wishlist */}
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="absolute top-5 right-5 p-3 rounded-full bg-white/80 dark:bg-cream-900/80 backdrop-blur-sm border border-border hover:border-gold-300 transition-all duration-300 group/wish"
                aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
              >
                <svg
                  className={`w-5 h-5 transition-all duration-300 ${
                    isWishlisted
                      ? "text-rose-500 fill-rose-500 scale-110"
                      : "text-muted group-hover/wish:text-rose-400"
                  }`}
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  fill={isWishlisted ? "currentColor" : "none"}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </button>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-3 mt-5">
              {allImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === i
                      ? "border-gold-500 shadow-lg shadow-gold-500/20 ring-2 ring-gold-500/20"
                      : "border-border hover:border-gold-300/50"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} view ${i + 1}`}
                    fill
                    className="object-contain p-2 bg-cream-50 dark:bg-cream-950"
                    sizes="96px"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            {/* Brand & Category */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 dark:text-gold-400">
                {product.brand}
              </span>
              <span className="w-1 h-1 rounded-full bg-cream-400" />
              <span className="text-xs font-medium uppercase tracking-wider text-muted capitalize">
                {product.fragranceFamily}
              </span>
            </div>

            {/* Name */}
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mt-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4.5 h-4.5 ${
                      i < Math.floor(product.rating)
                        ? "text-gold-400"
                        : "text-cream-300 dark:text-cream-700"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold text-foreground">{product.rating}</span>
              <span className="text-sm text-muted">({product.reviewCount} reviews)</span>
            </div>

            {/* Concentration Badge */}
            <div className="mt-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold-50 dark:bg-gold-950/30 border border-gold-200 dark:border-gold-800/50 text-xs font-semibold text-gold-700 dark:text-gold-300">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
                {details.concentration}
              </span>
            </div>

            {/* Description */}
            <p className="mt-6 text-muted leading-relaxed text-base">
              {details.longDescription}
            </p>

            {/* Divider */}
            <div className="h-px bg-border my-8" />

            {/* Size Selection */}
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-4">
                Select Size
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`relative px-6 py-3 rounded-xl border-2 text-sm font-semibold transition-all duration-300 ${
                      selectedSize === size
                        ? "border-gold-500 bg-gold-50 dark:bg-gold-950/30 text-gold-700 dark:text-gold-300 shadow-md shadow-gold-500/10"
                        : "border-border bg-card text-muted hover:border-gold-300/50 hover:text-foreground"
                    }`}
                  >
                    {size}
                    <span className="block text-xs mt-0.5 font-normal">
                      ${getSizePrice(size).toFixed(2)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mt-8 flex items-baseline gap-3">
              <span className="text-4xl font-bold text-foreground">
                ${currentPrice.toFixed(2)}
              </span>
              {originalPrice && (
                <span className="text-xl text-muted line-through">
                  ${originalPrice.toFixed(2)}
                </span>
              )}
              {discount > 0 && (
                <span className="text-sm font-bold text-rose-500 bg-rose-50 dark:bg-rose-950/30 px-2 py-1 rounded-md">
                  Save {discount}%
                </span>
              )}
            </div>

            {/* Quantity & Add to Cart */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              {/* Quantity */}
              <div className="flex items-center border border-border rounded-xl overflow-hidden bg-card">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3.5 text-muted hover:text-foreground hover:bg-cream-50 dark:hover:bg-cream-900 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                  </svg>
                </button>
                <span className="px-6 py-3.5 text-sm font-semibold text-foreground min-w-[3rem] text-center border-x border-border">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(Math.min(99, quantity + 1))}
                  className="px-4 py-3.5 text-muted hover:text-foreground hover:bg-cream-50 dark:hover:bg-cream-900 transition-colors"
                  aria-label="Increase quantity"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                id="add-to-cart-btn"
                onClick={handleAddToCart}
                className={`flex-1 relative overflow-hidden px-8 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-500 ${
                  addedToCart
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                    : "bg-gradient-to-r from-gold-500 to-gold-600 text-white hover:from-gold-600 hover:to-gold-700 shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40 hover:scale-[1.02] active:scale-[0.98]"
                }`}
              >
                <span className={`flex items-center justify-center gap-2 transition-all duration-300 ${addedToCart ? "translate-y-8 opacity-0" : "translate-y-0 opacity-100"}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                  Add to Cart
                </span>
                <span className={`absolute inset-0 flex items-center justify-center gap-2 transition-all duration-300 ${addedToCart ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  Added!
                </span>
              </button>
            </div>

            {/* Quick info */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: "Longevity", value: details.longevity, icon: "⏱" },
                { label: "Sillage", value: details.sillage, icon: "💨" },
                { label: "Season", value: details.season.slice(0, 2).join(", "), icon: "🌤" },
                { label: "Audience", value: product.audience, icon: product.audience === "female" ? "👩" : product.audience === "male" ? "👨" : product.audience === "kids" ? "👧" : "👤" },
              ].map((info) => (
                <div
                  key={info.label}
                  className="p-3 rounded-xl bg-card border border-border text-center hover:border-gold-300/40 transition-colors"
                >
                  <span className="text-lg">{info.icon}</span>
                  <p className="text-[11px] text-muted uppercase tracking-wider mt-1">{info.label}</p>
                  <p className="text-sm font-semibold text-foreground mt-0.5 capitalize">{info.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fragrance Notes & Details Tabs */}
        <div className="mt-20">
          <div className="flex items-center gap-1 border-b border-border mb-10 overflow-x-auto">
            {(["notes", "details", "ingredients"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-sm font-semibold uppercase tracking-widest whitespace-nowrap transition-all duration-300 relative ${
                  activeTab === tab
                    ? "text-gold-600 dark:text-gold-400"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {tab === "notes" ? "Fragrance Notes" : tab === "details" ? "Details" : "Ingredients"}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="animate-fade-in" key={activeTab}>
            {activeTab === "notes" && (
              <div className="grid md:grid-cols-3 gap-8">
                {details.notes.map((noteGroup) => (
                  <div
                    key={noteGroup.type}
                    className="group relative p-8 rounded-2xl bg-card border border-border hover:border-gold-300/40 hover:shadow-xl hover:shadow-gold-500/5 transition-all duration-500"
                  >
                    {/* Gradient circle */}
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${noteTypeColor[noteGroup.type]} flex items-center justify-center text-white text-lg mb-5 shadow-lg`}>
                      {noteTypeIcon[noteGroup.type]}
                    </div>
                    <h4 className="font-serif text-xl font-bold text-foreground mb-1">
                      {noteTypeLabel[noteGroup.type]}
                    </h4>
                    <p className="text-xs text-muted uppercase tracking-wider mb-5">
                      {noteGroup.type === "top"
                        ? "First impression (0–30 min)"
                        : noteGroup.type === "heart"
                        ? "Character (30 min–4 hr)"
                        : "Foundation (4+ hours)"}
                    </p>
                    <ul className="space-y-3">
                      {noteGroup.notes.map((note) => (
                        <li
                          key={note}
                          className="flex items-center gap-3 text-sm text-foreground"
                        >
                          <span className={`w-2 h-2 rounded-full bg-gradient-to-br ${noteTypeColor[noteGroup.type]}`} />
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "details" && (
              <div className="max-w-3xl grid sm:grid-cols-2 gap-6">
                {[
                  { label: "Concentration", value: details.concentration },
                  { label: "Longevity", value: details.longevity },
                  { label: "Sillage", value: details.sillage },
                  { label: "Season", value: details.season.join(", ") },
                  { label: "Occasion", value: details.occasion.join(", ") },
                  { label: "Fragrance Family", value: product.fragranceFamily },
                  { label: "Audience", value: product.audience },
                  { label: "Available Sizes", value: product.sizes.join(", ") },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col p-5 rounded-xl bg-card border border-border"
                  >
                    <span className="text-xs text-muted uppercase tracking-widest font-semibold">
                      {item.label}
                    </span>
                    <span className="text-sm font-medium text-foreground mt-1.5 capitalize">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "ingredients" && (
              <div className="max-w-3xl">
                <p className="text-sm text-muted leading-relaxed mb-6">
                  Full list of ingredients as required by IFRA regulations. Ingredients are listed
                  in descending order of concentration.
                </p>
                <div className="flex flex-wrap gap-2">
                  {details.ingredients.map((ingredient) => (
                    <span
                      key={ingredient}
                      className="px-3 py-1.5 rounded-lg bg-cream-100 dark:bg-cream-900 text-sm text-foreground border border-border"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-500 mb-3">
                You May Also Like
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
                Similar <span className="text-gradient-gold">Fragrances</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rp, i) => (
                <Link
                  key={rp.id}
                  href={`/products/${rp.id}`}
                  className="group relative flex flex-col rounded-2xl bg-card border border-border overflow-hidden hover:border-gold-300/40 hover:shadow-xl hover:shadow-gold-500/5 transition-all duration-500"
                >
                  <div className="relative aspect-[4/5] bg-gradient-to-b from-cream-100 to-cream-50 dark:from-cream-950 dark:to-cream-900 overflow-hidden">
                    <Image
                      src={rp.image}
                      alt={`${rp.name} by ${rp.brand}`}
                      fill
                      className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-400">
                      {rp.brand}
                    </span>
                    <h3 className="mt-1 font-serif text-lg font-semibold text-foreground leading-snug group-hover:text-gold-700 dark:group-hover:text-gold-300 transition-colors">
                      {rp.name}
                    </h3>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, si) => (
                          <svg key={si} className={`w-3 h-3 ${si < Math.floor(rp.rating) ? "text-gold-400" : "text-cream-300 dark:text-cream-700"}`} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-lg font-bold text-foreground">${rp.price.toFixed(2)}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
