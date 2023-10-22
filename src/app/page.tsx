import GoToTopButton from "@/components/Buttons/GoToTopButton";
import FooterSection from "@/components/FooterSection/FooterSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import MenuSection from "@/components/MenuSection/MenuSection";
import FloatingNavigation from "@/components/Navigation/FloatingNavigation";
import MobileNavigation from "@/components/Navigation/MobileNavigation";
import OurStorySection from "@/components/OurStorySection/OurStorySection";
import ReviewSection from "@/components/ReviewSection/ReviewSection";
import VisitUsSection from "@/components/VisitUsSection/VisitUsSection";

export default function Home() {
  return (
    <div>
      <main>
        <MobileNavigation />
        <FloatingNavigation />
        <GoToTopButton />
        <HeroSection />
        <MenuSection />
        <OurStorySection />
        <ReviewSection />
        <VisitUsSection />
      </main>
      <FooterSection />
    </div>
  );
}
