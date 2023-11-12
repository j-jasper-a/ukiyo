import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navigation from "@/components/navigation/Navigation";
import Menu from "@/components/menu/Menu";
import MobileNavigation from "@/components/navigation/MobileNavigation";
import Experience from "@/components/experience/Experience";
import Contact from "@/components/contact/Contact";

const Home = () => {
  return (
    <div className="relative">
      <Navigation />
      <MobileNavigation />
      <main>
        <Hero />
        <Menu />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
