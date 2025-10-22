import Hero from "@/components/Hero";
import About from "@/components/About";
import Differentials from "@/components/Differentials";
import Procedures from "@/components/Procedures";
import JourneyCarousel from "@/components/JourneyCarousel";
import Contact from "@/components/Contact";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Differentials />
      <Procedures />
      <JourneyCarousel />
      <Contact />
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};

export default Index;
