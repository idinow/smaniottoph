import { Shield, Award, Heart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const differentials = [
  {
    icon: Users,
    title: "Atendimento Individualizado",
    description: "Consultas personalizadas e confidenciais, focadas nas necessidades e objetivos únicos de cada paciente."
  },
  {
    icon: Award,
    title: "Formação de Excelência",
    description: "Graduação e especialização pela USP, com fellowship em Stanford — instituições de referência mundial."
  },
  {
    icon: Heart,
    title: "Resultados Naturais",
    description: "Procedimentos com foco em naturalidade, harmonia e segurança, respeitando a identidade de cada pessoa."
  },
  {
    icon: Shield,
    title: "Acompanhamento Completo",
    description: "Suporte integral do pré ao pós-operatório, garantindo segurança e tranquilidade em todas as etapas."
  }
];

const Differentials = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Diferenciais da Clínica Smaniotto
          </h2>
          <div className="h-1 w-24 gradient-premium rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Na Clínica Smaniotto, o paciente é acompanhado em todas as etapas, 
            com atenção próxima e suporte contínuo da equipe médica.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((differential, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-soft hover:shadow-medium transition-smooth group bg-card"
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:scale-110 transition-smooth">
                  <differential.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {differential.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {differential.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
