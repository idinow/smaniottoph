import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-gold/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <img 
            src={logo} 
            alt="Clínica Smaniotto" 
            className="h-24 md:h-32 mb-8 animate-fade-in"
          />
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up leading-tight">
            Beleza alinhada à função.
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 max-w-3xl animate-fade-in delay-150">
            Cirurgia plástica com propósito — unir ciência, técnica e sensibilidade para resultados naturais, seguros e duradouros.
          </p>
          
          <p className="text-base md:text-lg text-foreground/80 mb-8 max-w-3xl leading-relaxed animate-fade-in delay-300">
            Cada detalhe importa. A atuação do Dr. Pedro Smaniotto reflete uma trajetória construída com base em{" "}
            <span className="font-semibold text-primary">formação de excelência pela USP</span> e{" "}
            <span className="font-semibold text-primary">experiência internacional na Universidade de Stanford</span>.
            Mais do que estética, sua abordagem busca equilíbrio, bem-estar e confiança em cada paciente.
          </p>
          
          <a 
            href="https://wa.me/5567991163617?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20procedimentos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block animate-scale-in delay-500"
          >
            <Button 
              size="lg" 
              className="gradient-premium text-white hover:opacity-90 transition-smooth shadow-medium text-base md:text-lg px-8 py-6 group"
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-smooth" />
              Agendar Avaliação pelo WhatsApp
            </Button>
          </a>
          
          <p className="text-sm text-muted-foreground mt-4 animate-fade-in delay-700">
            Atendimento exclusivo com acompanhamento em todas as etapas do processo cirúrgico
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
