import AboutHero from "@/app/components/about/AboutHero";
import OurHeritage from "@/app/components/about/OurHeritage";
import TheCraft from "@/app/components/about/TheCraft";
import Newsletter from "@/app/components/landing-page/Newsletter";

export const metadata = {
  title: "Our Story | Scents — Luxury Perfume",
  description: "Discover the heritage, master perfumers, and artisan craft behind the world's most exquisite fragrances.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <OurHeritage />
      <TheCraft />
      <Newsletter />
    </div>
  );
}
