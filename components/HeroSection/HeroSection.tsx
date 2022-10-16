import GoDown from "../Buttons/GoDown";
import Container from "../Layouts/Container";
import Logo from "../Logos/Logo";
import DesktopNavigation from "../Navigation/DesktopNavigation";

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="hero-bg absolute h-full w-full bg-right md:bg-center" />
      <Container>
        <div className="flex h-screen flex-col items-center justify-between p-4 py-16 md:p-8">
          <Logo className="mt-12 shadow-darker drop-shadow-sm md:hidden" />
          <DesktopNavigation />
          <GoDown />
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
