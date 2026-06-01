// Dummy data for the Scents perfume e-commerce storefront

export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  fragranceFamily: "floral" | "woody" | "oriental" | "fresh";
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  sizes: string[];
  isNew?: boolean;
  isBestseller?: boolean;
  audience: "male" | "female" | "kids" | "unisex";
}

export const audiences = ["male", "female", "kids", "unisex"];

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  product: string;
}

export interface FragranceFamily {
  id: string;
  name: string;
  description: string;
  icon: string;
  count: number;
}

export const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Velvet Noir",
    brand: "Maison Lumière",
    description: "A captivating blend of dark rose, black amber, and smoky oud that wraps you in mystery.",
    fragranceFamily: "oriental",
    price: 189.00,
    originalPrice: 220.00,
    image: "/images/hero-perfume.png",
    rating: 4.9,
    reviewCount: 324,
    sizes: ["30ml", "50ml", "100ml"],
    isBestseller: true,
    audience: "female",
  },
  {
    id: "2",
    name: "Fleur d'Amour",
    brand: "Parfums de Provence",
    description: "A delicate symphony of Bulgarian rose, peony, and white musk with a hint of morning dew.",
    fragranceFamily: "floral",
    price: 165.00,
    image: "/images/perfume-floral.png",
    rating: 4.8,
    reviewCount: 256,
    sizes: ["30ml", "50ml", "100ml"],
    isNew: true,
    audience: "female",
  },
  {
    id: "3",
    name: "Cedar & Sage",
    brand: "Atelier du Bois",
    description: "A grounding journey through ancient forests — atlas cedar, clary sage, and vetiver.",
    fragranceFamily: "woody",
    price: 210.00,
    image: "/images/hero-perfume.png",
    rating: 4.7,
    reviewCount: 198,
    sizes: ["50ml", "100ml"],
    audience: "male",
  },
  {
    id: "4",
    name: "Aqua Soleil",
    brand: "Côte d'Azur",
    description: "Sun-kissed bergamot, sea salt accord, and driftwood that captures the Mediterranean coast.",
    fragranceFamily: "fresh",
    price: 145.00,
    image: "/images/perfume-floral.png",
    rating: 4.6,
    reviewCount: 187,
    sizes: ["30ml", "50ml", "100ml"],
    isNew: true,
    audience: "unisex",
  },
  {
    id: "5",
    name: "Opulent Oud",
    brand: "Maison Lumière",
    description: "Rare Laotian oud, saffron threads, and damask rose — an opulent signature of the East.",
    fragranceFamily: "oriental",
    price: 340.00,
    image: "/images/hero-perfume.png",
    rating: 5.0,
    reviewCount: 142,
    sizes: ["50ml", "100ml"],
    isBestseller: true,
    audience: "unisex",
  },
  {
    id: "6",
    name: "Jardin Secret",
    brand: "Parfums de Provence",
    description: "Lily of the valley, jasmine sambac, and green fig leaves in a sunlit secret garden.",
    fragranceFamily: "floral",
    price: 155.00,
    image: "/images/perfume-floral.png",
    rating: 4.8,
    reviewCount: 210,
    sizes: ["30ml", "50ml"],
    audience: "kids",
  },
  {
    id: "7",
    name: "Ember Wood",
    brand: "Atelier du Bois",
    description: "Charred birch, smoky incense, and warm amber create a fireside embrace.",
    fragranceFamily: "woody",
    price: 195.00,
    originalPrice: 230.00,
    image: "/images/hero-perfume.png",
    rating: 4.7,
    reviewCount: 165,
    sizes: ["50ml", "100ml"],
    audience: "male",
  },
  {
    id: "8",
    name: "Citrus Breeze",
    brand: "Côte d'Azur",
    description: "Yuzu, grapefruit, and wild mint over a base of white cedar and musk.",
    fragranceFamily: "fresh",
    price: 125.00,
    image: "/images/perfume-floral.png",
    rating: 4.5,
    reviewCount: 298,
    sizes: ["30ml", "50ml", "100ml"],
    audience: "kids",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Isabelle Moreau",
    avatar: "IM",
    rating: 5,
    text: "Velvet Noir is absolutely intoxicating. Every time I wear it, I receive compliments. It lasts all day and evolves beautifully on my skin.",
    product: "Velvet Noir",
  },
  {
    id: "2",
    name: "Alexander Chen",
    avatar: "AC",
    rating: 5,
    text: "Cedar & Sage has become my signature scent. The craftsmanship is evident — you can smell the quality in every note. Worth every penny.",
    product: "Cedar & Sage",
  },
  {
    id: "3",
    name: "Sofia Petrov",
    avatar: "SP",
    rating: 5,
    text: "I was blown away by Fleur d'Amour. It's elegant without being overpowering. The rose note is incredibly natural and refined.",
    product: "Fleur d'Amour",
  },
  {
    id: "4",
    name: "James Whitfield",
    avatar: "JW",
    rating: 5,
    text: "Opulent Oud is luxury bottled. The saffron and oud combination is masterfully balanced. This is a true artisan fragrance.",
    product: "Opulent Oud",
  },
];

export const fragranceFamilies: FragranceFamily[] = [
  {
    id: "floral",
    name: "Floral",
    description: "Romantic bouquets of rose, jasmine, and peony",
    icon: "🌸",
    count: 24,
  },
  {
    id: "woody",
    name: "Woody",
    description: "Earthy depths of cedar, sandalwood, and vetiver",
    icon: "🌿",
    count: 18,
  },
  {
    id: "oriental",
    name: "Oriental",
    description: "Exotic blends of oud, amber, and saffron",
    icon: "✨",
    count: 15,
  },
  {
    id: "fresh",
    name: "Fresh",
    description: "Crisp notes of citrus, aquatic, and green accords",
    icon: "🍋",
    count: 21,
  },
];

export const brands = [
  "Maison Lumière",
  "Parfums de Provence",
  "Atelier du Bois",
  "Côte d'Azur",
];

export const stats = [
  { label: "Curated Fragrances", value: "200+" },
  { label: "Master Perfumers", value: "12" },
  { label: "Countries Shipped", value: "45" },
  { label: "Happy Customers", value: "50K+" },
];
