// Extended product details for the Product Detail Page
// In production, this would come from a database query

export interface ProductNote {
  type: "top" | "heart" | "base";
  notes: string[];
}

export interface ProductDetail {
  id: string;
  longDescription: string;
  notes: ProductNote[];
  ingredients: string[];
  concentration: string;
  longevity: string;
  sillage: string;
  season: string[];
  occasion: string[];
  detailImages: string[];
}

export const productDetails: Record<string, ProductDetail> = {
  "1": {
    id: "1",
    longDescription:
      "Velvet Noir is a masterfully crafted fragrance that embodies the allure of midnight. Opening with a dramatic burst of dark Bulgarian rose and crimson saffron, it evolves into a heart of black amber and labdanum, before settling into a deep, lingering base of smoky oud and musk. This is a scent for those who command attention without raising their voice — enigmatic, sophisticated, and unforgettable.",
    notes: [
      { type: "top", notes: ["Dark Rose", "Saffron", "Pink Pepper"] },
      { type: "heart", notes: ["Black Amber", "Labdanum", "Iris"] },
      { type: "base", notes: ["Smoky Oud", "Musk", "Vetiver"] },
    ],
    ingredients: [
      "Alcohol Denat.",
      "Parfum (Fragrance)",
      "Aqua (Water)",
      "Limonene",
      "Linalool",
      "Coumarin",
      "Eugenol",
      "Geraniol",
    ],
    concentration: "Eau de Parfum",
    longevity: "10-12 hours",
    sillage: "Heavy",
    season: ["Autumn", "Winter"],
    occasion: ["Evening", "Special Occasions", "Date Night"],
    detailImages: [
      "/images/perfume-detail.png",
      "/images/hero-perfume.png",
      "/images/perfume-floral.png",
    ],
  },
  "2": {
    id: "2",
    longDescription:
      "Fleur d'Amour captures the ephemeral beauty of a rose garden at dawn. Delicate petals of Bulgarian rose intertwine with the lush sweetness of peony and the luminous freshness of morning dew. A whisper of white musk provides a clean, skin-like finish that makes this fragrance feel intimate and deeply personal — as though the flowers are blooming just for you.",
    notes: [
      { type: "top", notes: ["Bergamot", "Pear Blossom", "Morning Dew"] },
      { type: "heart", notes: ["Bulgarian Rose", "Peony", "Lily of the Valley"] },
      { type: "base", notes: ["White Musk", "Cashmere Wood", "Ambrette Seed"] },
    ],
    ingredients: [
      "Alcohol Denat.",
      "Parfum (Fragrance)",
      "Aqua (Water)",
      "Citronellol",
      "Geraniol",
      "Hydroxycitronellal",
      "Linalool",
    ],
    concentration: "Eau de Parfum",
    longevity: "8-10 hours",
    sillage: "Moderate",
    season: ["Spring", "Summer"],
    occasion: ["Daytime", "Brunch", "Garden Party"],
    detailImages: [
      "/images/perfume-floral.png",
      "/images/perfume-detail.png",
      "/images/hero-perfume.png",
    ],
  },
  "3": {
    id: "3",
    longDescription:
      "Cedar & Sage is a journey into the heart of an ancient forest. The grounding richness of atlas cedar is elevated by the herbaceous clarity of clary sage, while smoky vetiver and earthy patchouli create a foundation of timeless masculinity. This is a fragrance for the modern gentleman — confident, refined, and deeply connected to nature's raw elegance.",
    notes: [
      { type: "top", notes: ["Clary Sage", "Juniper Berry", "Bergamot"] },
      { type: "heart", notes: ["Atlas Cedar", "Guaiac Wood", "Lavender"] },
      { type: "base", notes: ["Vetiver", "Patchouli", "Tonka Bean"] },
    ],
    ingredients: [
      "Alcohol Denat.",
      "Parfum (Fragrance)",
      "Aqua (Water)",
      "Linalool",
      "Limonene",
      "Alpha-Isomethyl Ionone",
      "Coumarin",
    ],
    concentration: "Eau de Parfum Intense",
    longevity: "12+ hours",
    sillage: "Moderate to Heavy",
    season: ["Autumn", "Winter"],
    occasion: ["Office", "Evening", "Everyday"],
    detailImages: [
      "/images/hero-perfume.png",
      "/images/perfume-detail.png",
      "/images/perfume-floral.png",
    ],
  },
  "4": {
    id: "4",
    longDescription:
      "Aqua Soleil is a liquid snapshot of the Mediterranean coast. Sun-kissed bergamot and zesty lemon verbena crash like gentle waves over a heart of sea salt accord and white tea, before drying down to a warm embrace of driftwood and ambergris. Close your eyes, and you're on a yacht anchored off the Côte d'Azur, the sun warming your skin.",
    notes: [
      { type: "top", notes: ["Bergamot", "Lemon Verbena", "Grapefruit"] },
      { type: "heart", notes: ["Sea Salt Accord", "White Tea", "Jasmine Water"] },
      { type: "base", notes: ["Driftwood", "Ambergris", "White Musk"] },
    ],
    ingredients: [
      "Alcohol Denat.",
      "Parfum (Fragrance)",
      "Aqua (Water)",
      "Limonene",
      "Linalool",
      "Citral",
      "Citronellol",
    ],
    concentration: "Eau de Toilette",
    longevity: "6-8 hours",
    sillage: "Light to Moderate",
    season: ["Spring", "Summer"],
    occasion: ["Beach", "Daytime", "Casual"],
    detailImages: [
      "/images/perfume-floral.png",
      "/images/hero-perfume.png",
      "/images/perfume-detail.png",
    ],
  },
  "5": {
    id: "5",
    longDescription:
      "Opulent Oud is the crown jewel of Maison Lumière — a fragrance that transcends time and geography. Rare Laotian oud, hand-selected saffron threads, and the velvety richness of damask rose form an olfactory tapestry of extraordinary depth. Each spray reveals new facets of its complexity, making it a scent that tells a different story every time you wear it. This is liquid gold.",
    notes: [
      { type: "top", notes: ["Saffron", "Cardamom", "Rose Absolute"] },
      { type: "heart", notes: ["Laotian Oud", "Damask Rose", "Frankincense"] },
      { type: "base", notes: ["Sandalwood", "Amber", "Leather"] },
    ],
    ingredients: [
      "Alcohol Denat.",
      "Parfum (Fragrance)",
      "Aqua (Water)",
      "Eugenol",
      "Coumarin",
      "Cinnamal",
      "Geraniol",
      "Linalool",
    ],
    concentration: "Parfum Extrait",
    longevity: "14+ hours",
    sillage: "Beast Mode",
    season: ["Autumn", "Winter", "All Year"],
    occasion: ["Special Occasions", "Evening", "Luxury Events"],
    detailImages: [
      "/images/hero-perfume.png",
      "/images/perfume-detail.png",
      "/images/perfume-floral.png",
    ],
  },
  "6": {
    id: "6",
    longDescription:
      "Jardin Secret captures the enchantment of discovering a hidden garden in full bloom. Delicate lily of the valley and jasmine sambac dance together in the sunlight, while green fig leaves add a playful, crisp dimension. This youthful and joyful fragrance is like wearing a secret smile — fresh, innocent, and irresistibly charming.",
    notes: [
      { type: "top", notes: ["Green Fig Leaf", "Mandarin", "Dewberry"] },
      { type: "heart", notes: ["Lily of the Valley", "Jasmine Sambac", "Freesia"] },
      { type: "base", notes: ["Soft Musk", "Blonde Woods", "Honey Accord"] },
    ],
    ingredients: [
      "Alcohol Denat.",
      "Parfum (Fragrance)",
      "Aqua (Water)",
      "Hydroxycitronellal",
      "Linalool",
      "Benzyl Benzoate",
      "Citronellol",
    ],
    concentration: "Eau de Parfum",
    longevity: "6-8 hours",
    sillage: "Light",
    season: ["Spring", "Summer"],
    occasion: ["Daytime", "School", "Playful Outings"],
    detailImages: [
      "/images/perfume-floral.png",
      "/images/perfume-detail.png",
      "/images/hero-perfume.png",
    ],
  },
  "7": {
    id: "7",
    longDescription:
      "Ember Wood is a fireside reverie captured in glass. Charred birch and smoky incense open with an arresting warmth, evolving into a heart of precious amber and labdanum. The dry-down of sandalwood and benzoin creates a cocoon of comfort — the olfactory equivalent of wrapping yourself in a cashmere blanket by a crackling fire on a cold winter evening.",
    notes: [
      { type: "top", notes: ["Charred Birch", "Black Pepper", "Elemi"] },
      { type: "heart", notes: ["Smoky Incense", "Amber", "Labdanum"] },
      { type: "base", notes: ["Sandalwood", "Benzoin", "Vanilla Absolute"] },
    ],
    ingredients: [
      "Alcohol Denat.",
      "Parfum (Fragrance)",
      "Aqua (Water)",
      "Coumarin",
      "Eugenol",
      "Limonene",
      "Cinnamal",
      "Linalool",
    ],
    concentration: "Eau de Parfum",
    longevity: "10-12 hours",
    sillage: "Heavy",
    season: ["Autumn", "Winter"],
    occasion: ["Evening", "Date Night", "Cozy Nights"],
    detailImages: [
      "/images/hero-perfume.png",
      "/images/perfume-detail.png",
      "/images/perfume-floral.png",
    ],
  },
  "8": {
    id: "8",
    longDescription:
      "Citrus Breeze is pure sunshine distilled into a bottle. The electric freshness of yuzu and grapefruit ignites the senses, while wild mint adds an invigorating cool edge. A clean base of white cedar and cotton musk ensures the fragrance feels effortlessly modern and infinitely wearable. Perfect for anyone who wants to radiate positivity and energy.",
    notes: [
      { type: "top", notes: ["Yuzu", "Grapefruit", "Wild Mint"] },
      { type: "heart", notes: ["Green Apple", "Lemon Verbena", "Watery Notes"] },
      { type: "base", notes: ["White Cedar", "Cotton Musk", "Ambroxan"] },
    ],
    ingredients: [
      "Alcohol Denat.",
      "Parfum (Fragrance)",
      "Aqua (Water)",
      "Limonene",
      "Linalool",
      "Citral",
      "Citronellol",
    ],
    concentration: "Eau de Toilette",
    longevity: "4-6 hours",
    sillage: "Light",
    season: ["Spring", "Summer"],
    occasion: ["Everyday", "Sports", "Casual"],
    detailImages: [
      "/images/perfume-floral.png",
      "/images/hero-perfume.png",
      "/images/perfume-detail.png",
    ],
  },
};

export function getProductDetail(id: string): ProductDetail | undefined {
  return productDetails[id];
}
