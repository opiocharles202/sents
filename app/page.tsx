import Hero from "./components/landing-page/Hero";
import BrandMarquee from "./components/landing-page/BrandMarquee";
import NewArrivals from "./components/landing-page/NewArrivals";
import FeaturedProducts from "./components/landing-page/FeaturedProducts";
import FragranceFamilies from "./components/landing-page/FragranceFamilies";
import BrandStory from "./components/landing-page/BrandStory";
import Testimonials from "./components/landing-page/Testimonials";
import Newsletter from "./components/landing-page/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandMarquee />
      <NewArrivals />
      <FeaturedProducts />
      <FragranceFamilies />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  );
}
