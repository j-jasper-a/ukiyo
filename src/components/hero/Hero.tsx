import Container from "../common/Container";
import HeadingPrimary from "../common/HeadingPrimary";

const Hero = () => {
  return (
    <div id="home" className="relative h-screen overflow-hidden">
      <div className="absolute -z-10 h-full w-full bg-gradient-to-b from-black/50 via-black/50 to-dark" />
      <video
        autoPlay
        loop
        muted
        src="/assets/videos/backdrop.mp4"
        className="absolute left-0 top-0 -z-20 h-full w-full object-cover"
      />
      <Container className="flex h-full flex-col items-center justify-center px-4 sm:px-8">
        <HeadingPrimary />
      </Container>
    </div>
  );
};

export default Hero;
