import type { NextPage } from "next";
import Head from "next/head";
import FloatingNavigation from "../components/Navigation/FloatingNavigation";
import HeroSection from "../components/HeroSection/HeroSection";
import MenuSection from "../components/MenuSection/MenuSection";
import OurStorySection from "../components/OurStorySection/OurStorySection";
import VisitUsSection from "../components/VisitUsSection/VisitUsSection";
import FooterSection from "../components/FooterSection/FooterSection";
import ReviewSection from "../components/ReviewSection/ReviewSection";
import MobileNavigation from "../components/Navigation/MobileNavigation";
import MobileMenuButton from "../components/Navigation/MobileMenuButton";
import GoToTopButton from "../components/Buttons/GoToTopButton";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ukiyo (浮世) - Japanese Fine Dining Restaurant</title>
        <meta
          name="description"
          content="Ukiyo (浮世) is a Japanese fine dining restaurant established in 2022. It is situated at the heart of Dhaka in Gulshan. It dedicates itself to serving memorable tastes with a strong conviction for authenticity. It prides itself in bringing the complete experience of Japanese food instead of being limited to only one or two categories."
        />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:title"
          content="Ukiyo (浮世) - Japanese Fine Dining Restaurant"
        />
        <meta
          property="og:description"
          content="Ukiyo (浮世) is a Japanese fine dining restaurant established in 2022. It is situated at the heart of Dhaka in Gulshan. It dedicates itself to serving memorable tastes with a strong conviction for authenticity. It prides itself in bringing the complete experience of Japanese food instead of being limited to only one or two categories."
        />
        <meta property="og:image" content="/assets/images/thumbnail.webp" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
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
    </>
  );
};

export default Home;
