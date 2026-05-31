import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import ProductGrid from "@/components/ProductGrid";
import StoryBanner from "@/components/StoryBanner";
import MysteryBox from "@/components/MysteryBox";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden bg-[var(--color-primary)]">
      <AnnouncementBar />
      <Header />
      <HeroSlider />
      <ProductGrid />
      <StoryBanner />
      <MysteryBox />
      <Footer />
    </main>
  );
}
