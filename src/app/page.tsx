import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ProductCoverflow from "@/components/ProductCoverflow";
import ProductGrid from "@/components/ProductGrid";
import Marquee from "@/components/Marquee";
import WhyDeedis from "@/components/WhyDeedis";
import StoryBanner from "@/components/StoryBanner";
import IngredientsSection from "@/components/IngredientsSection";
import CustomerReviews from "@/components/CustomerReviews";
import MysteryBox from "@/components/MysteryBox";
import NewsletterCTA from "@/components/NewsletterCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-clip bg-[var(--color-primary)]">
      <AnnouncementBar />
      <Header />
      <HeroSection />
      <TrustBar />
      <ProductCoverflow />
      <ProductGrid />
      <Marquee />
      <WhyDeedis />
      <StoryBanner />
      <IngredientsSection />
      <CustomerReviews />
      <MysteryBox />
      <NewsletterCTA />
      <Footer />
    </main>
  );
}
