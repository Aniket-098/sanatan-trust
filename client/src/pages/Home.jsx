import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Gallery from "../components/home/Gallery";
import Donation from "../components/home/Donation";
import Testimonials from "../components/home/Testimonials";
import ContactCTA from "../components/home/ContactCTA";


const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Gallery />
      <Donation />
      <Testimonials />
      <ContactCTA />
    </>
  );
};

export default Home;