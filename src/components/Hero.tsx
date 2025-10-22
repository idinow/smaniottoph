import { Button } from "@/components/ui/button";
import { MessageCircle, Award } from "lucide-react";
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
        <div className="max-w-3xl pt-8 md:pt-16">
          <img 
            src={logo} 
            alt="Clínica Smaniotto" 
            className="h-12 md:h-16 mb-8 animate-fade-in brightness-0 invert"
          />
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-fade-in">
            <Award className="h-4 w-4 text-white" />
            <span className="text-sm font-medium text-white">USP • Stanford • Doutor em Ciências</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-slide-up leading-[1.05] text-white">
            Beleza alinhada à função
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed animate-fade-in delay-150 max-w-xl">
            Cirurgia plástica com propósito — unir ciência, técnica e sensibilidade para resultados naturais e seguros
          </p>
          
          <div className="animate-scale-in delay-300">
            <a 
              href="https://wa.me/5567991163617?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20procedimentos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-white text-foreground hover:bg-white/90 transition-smooth shadow-strong text-lg px-12 py-8 rounded-full group font-semibold"
              >
                <MessageCircle className="mr-3 h-6 w-6 group-hover:scale-110 transition-smooth" />
                Agendar Avaliação
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
