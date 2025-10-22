import { Button } from "@/components/ui/button";
import { MessageCircle, Award } from "lucide-react";
import logo from "@/assets/logo-transparent.png";
import heroBg from "@/assets/dr-pedro-hero.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Dr. Pedro Smaniotto" className="w-full h-full object-cover object-[40%_center] md:object-right" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>
      
      {/* Logo fixed at top */}
      <div className="absolute top-6 left-4 sm:left-6 lg:left-8 z-20">
        <img src={logo} alt="Clínica Smaniotto" className="h-14 md:h-16 animate-fade-in brightness-0 invert" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl pb-16 md:pb-20">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 md:mb-8 animate-fade-in">
            <Award className="h-4 w-4 text-white" />
            <span className="text-sm md:text-base font-medium text-white">USP • Stanford • PhD</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 animate-slide-up leading-[1.05] text-white">
            Beleza alinhada à função
          </h1>
          
          <p className="text-base md:text-xl text-white/90 mb-8 md:mb-10 leading-relaxed animate-fade-in delay-150 max-w-xl">
            Cirurgia plástica com propósito — unir ciência, técnica e sensibilidade para resultados naturais e seguros
          </p>
          
          <div className="animate-scale-in delay-300">
            <a href="https://wa.me/5567991163617?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20procedimentos" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-foreground hover:bg-white/90 transition-smooth shadow-strong text-lg px-12 py-8 rounded-full group font-semibold">
                <MessageCircle className="mr-3 h-6 w-6 group-hover:scale-110 transition-smooth" />
                Agendar Avaliação
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;