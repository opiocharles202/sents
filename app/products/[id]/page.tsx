import { notFound } from "next/navigation";
import { featuredProducts } from "@/app/data/products";
import { getProductDetail } from "@/app/data/productDetails";
import ProductDetailClient from "@/app/components/shared/ProductDetailClient";

export const unstable_instant = {
  prefetch: "runtime",
  samples: [
    {
      params: { id: "1" },
    },
    {
      params: { id: "2" },
    },
  ],
};

// Generate static params for all products
export function generateStaticParams() {
  return featuredProducts.map((product) => ({
    id: product.id,
  }));
}

// Dynamic metadata per product
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = featuredProducts.find((p) => p.id === id);

  if (!product) {
    return { title: "Product Not Found | Scents" };
  }

  return {
    title: `${product.name} by ${product.brand} | Scents — Luxury Perfume`,
    description: product.description,
    openGraph: {
      title: `${product.name} by ${product.brand}`,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = featuredProducts.find((p) => p.id === id);
  const details = getProductDetail(id);

  if (!product || !details) {
    notFound();
  }

  // Get related products: same fragrance family, excluding current
  const relatedProducts = featuredProducts
    .filter((p) => p.id !== id && p.fragranceFamily === product.fragranceFamily)
    .slice(0, 4);

  // If not enough related by family, fill with other products
  if (relatedProducts.length < 4) {
    const moreProducts = featuredProducts
      .filter((p) => p.id !== id && !relatedProducts.some((rp) => rp.id === p.id))
      .slice(0, 4 - relatedProducts.length);
    relatedProducts.push(...moreProducts);
  }

  return (
    <ProductDetailClient
      product={product}
      details={details}
      relatedProducts={relatedProducts}
    />
  );
}
