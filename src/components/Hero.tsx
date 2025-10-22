import { Button } from "@/components/ui/button";
import { MessageCircle, Award, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/dr-pedro-horizontal.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Dr. Pedro Smaniotto" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <img 
            src={logo} 
            alt="Clínica Smaniotto" 
            className="h-20 md:h-24 mb-8 animate-fade-in"
          />
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
            <Award className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">USP • Stanford • Doutor em Ciências</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up leading-[1.1]">
            Cirurgia plástica com{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              excelência médica
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed animate-fade-in delay-150">
            Resultados naturais e seguros, combinando formação internacional de elite com mais de uma década de experiência em cirurgia plástica estética e reparadora.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-scale-in delay-300">
            <a 
              href="https://wa.me/5567991163617?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20procedimentos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="w-full sm:w-auto gradient-premium text-white hover:opacity-90 transition-smooth shadow-strong text-lg px-10 py-7 group"
              >
                <MessageCircle className="mr-2 h-6 w-6 group-hover:scale-110 transition-smooth" />
                Agendar Consulta
              </Button>
            </a>
            
            <Button 
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-primary/30 bg-background/80 backdrop-blur-sm hover:bg-primary/5 text-lg px-10 py-7"
              onClick={() => document.getElementById('procedimentos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Ver Procedimentos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
