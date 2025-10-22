import { useState, useRef, useEffect } from "react";
import { MessageCircle, ClipboardCheck, FileText, Calendar, Stethoscope, Heart, Activity, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Primeiro Contato",
    description: "Converse com nossa equipe pelo WhatsApp para tirar dúvidas iniciais e entender como funciona a avaliação."
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Consulta de Avaliação",
    description: "O Dr. Pedro realiza uma análise completa e indica a melhor conduta médica e técnica para o seu caso."
  },
  {
    icon: FileText,
    number: "03",
    title: "Orçamento Cirúrgico",
    description: "Transparência em cada etapa — valores de hospital, equipe médica, anestesia e materiais."
  },
  {
    icon: Calendar,
    number: "04",
    title: "Retorno Médico",
    description: "Um segundo encontro para alinhar expectativas e esclarecer dúvidas antes da cirurgia."
  },
  {
    icon: Calendar,
    number: "05",
    title: "Agendamento Cirúrgico",
    description: "Definição da data e início do preparo clínico e logístico."
  },
  {
    icon: Stethoscope,
    number: "06",
    title: "Consulta Pré-Operatória",
    description: "Avaliação final, revisão de exames e orientações sobre o dia da cirurgia."
  },
  {
    icon: Heart,
    number: "07",
    title: "Dia da Cirurgia",
    description: "Procedimento realizado com total segurança hospitalar e equipe especializada."
  },
  {
    icon: Activity,
    number: "08",
    title: "Acompanhamento Pós-Operatório",
    description: "Retornos agendados, curativos e acompanhamento contínuo para garantir uma recuperação segura e tranquila."
  }
];

const JourneyCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const cardWidth = container.querySelector('.journey-card')?.clientWidth || 0;
    const gap = 24; // gap-6 = 24px
    const scrollAmount = cardWidth + gap;
    
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      setActiveIndex(Math.max(0, activeIndex - 1));
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setActiveIndex(Math.min(steps.length - 1, activeIndex + 1));
    }
  };

  return (
    <section className="py-32 bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Sua jornada de transformação
          </h2>
          <p className="text-xl text-muted-foreground">
            Acompanhamento completo em todas as etapas do seu processo cirúrgico, 
            do primeiro contato até a recuperação total.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="flex justify-end gap-3 mb-6">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              disabled={activeIndex === 0}
              className="rounded-full shadow-soft disabled:opacity-30"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              disabled={activeIndex >= steps.length - 1}
              className="rounded-full shadow-soft disabled:opacity-30"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Carousel Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {steps.map((step, index) => (
              <div
                key={index}
                className="journey-card flex-shrink-0 w-[85vw] sm:w-[400px] relative group"
              >
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden sm:block absolute top-20 left-full w-6 h-0.5 bg-gradient-to-r from-primary/30 to-transparent z-0" />
                )}
                
                <div className="relative h-full bg-card rounded-2xl border-2 border-border p-8 shadow-soft hover:shadow-medium transition-smooth hover:border-primary/30">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-smooth">
                        <step.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shadow-soft">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold flex-1">
                      {step.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  const container = scrollContainerRef.current;
                  if (!container) return;
                  const cardWidth = container.querySelector('.journey-card')?.clientWidth || 0;
                  container.scrollTo({ left: (cardWidth + 24) * index, behavior: 'smooth' });
                }}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex 
                    ? 'w-8 bg-primary' 
                    : 'w-2 bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <a 
            href="https://wa.me/5567991163617?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20procedimentos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="gradient-premium text-white hover:opacity-90 transition-smooth shadow-medium text-lg px-10 py-7">
              <MessageCircle className="mr-2 h-6 w-6" />
              Iniciar Minha Jornada
            </Button>
          </a>
        </div>
      </div>
      
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default JourneyCarousel;
