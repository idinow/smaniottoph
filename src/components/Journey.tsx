import { MessageCircle, ClipboardCheck, FileText, Calendar, Stethoscope, Heart, Activity, CheckCircle2 } from "lucide-react";
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

const Journey = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Sua Jornada Cirúrgica
          </h2>
          <div className="h-1 w-24 gradient-premium rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acompanhamento completo em todas as etapas do seu processo cirúrgico
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-smooth h-full border-2 border-transparent hover:border-primary/20">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="ml-auto text-3xl font-bold text-primary/20 group-hover:text-primary/40 transition-smooth">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a 
            href="https://wa.me/5567991163617?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20procedimentos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="gradient-premium text-white hover:opacity-90 transition-smooth shadow-medium">
              <MessageCircle className="mr-2 h-5 w-5" />
              Converse com nossa equipe no WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Journey;
