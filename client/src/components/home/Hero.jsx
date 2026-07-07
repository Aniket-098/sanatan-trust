import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import Container from "../ui/Container";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0A0400]"
    >
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        {/* Main Glow */}

        <div
          className="
          absolute
          left-1/2
          top-0
          h-[900px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-yellow-500/10
          blur-[170px]
          "
        />

        {/* Left Glow */}

        <div
          className="
          absolute
          -left-40
          top-40
          h-[400px]
          w-[400px]
          rounded-full
          bg-orange-500/10
          blur-[130px]
          "
        />

        {/* Right Glow */}

        <div
          className="
          absolute
          -right-40
          bottom-20
          h-[450px]
          w-[450px]
          rounded-full
          bg-yellow-500/5
          blur-[140px]
          "
        />

      </div>

      <Container
        className="
        relative
        z-10
        grid
        min-h-screen
        items-center
        gap-16
        pt-28
        lg:grid-cols-2
        xl:gap-24
        "
      >
        <HeroContent />

        <HeroImage />
      </Container>
    </section>
  );
};

export default Hero;