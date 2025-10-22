import Hero from "@/components/Hero";
import About from "@/components/About";
import Differentials from "@/components/Differentials";
import Procedures from "@/components/Procedures";
import Journey from "@/components/Journey";
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
      <Journey />
      <Contact />
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};

export default Index;
