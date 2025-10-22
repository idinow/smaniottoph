import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import logo from "@/assets/logo-transparent.png";
import heroBg from "@/assets/dr-pedro-horizontal.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Dr. Pedro Smaniotto" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <img 
            src={logo} 
            alt="Clínica Smaniotto" 
            className="h-16 md:h-20 mb-12 animate-fade-in brightness-0 invert"
          />
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-slide-up leading-[1.05] text-white">
            Excelência em cirurgia plástica
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed animate-fade-in delay-150 max-w-xl">
            Resultados naturais e seguros com formação internacional USP e Stanford
          </p>
          
          <div className="animate-scale-in delay-300">
            <a 
              href="https://wa.me/5567991163617?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20procedimentos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="gradient-accent text-white hover:opacity-90 transition-smooth shadow-strong text-lg px-12 py-8 rounded-full group"
              >
                <MessageCircle className="mr-3 h-6 w-6 group-hover:scale-110 transition-smooth" />
                Agendar Consulta
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
