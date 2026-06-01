import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Scents — Luxury Perfume Collection",
  description:
    "Discover exquisite fragrances crafted by master perfumers. From floral elegance to woody sophistication, find your signature scent at Scents.",
  keywords: ["perfume", "fragrance", "luxury", "eau de parfum", "cologne", "scents"],
  openGraph: {
    title: "Scents — Luxury Perfume Collection",
    description:
      "Discover exquisite fragrances crafted by master perfumers.",
    type: "website",
  },
};

import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
