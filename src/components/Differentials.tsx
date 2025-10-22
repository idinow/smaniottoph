import { Shield, Award, Heart, UserRound } from "lucide-react";

const differentials = [
  {
    icon: UserRound,
    title: "Atendimento Individualizado",
    description: "Consultas personalizadas e confidenciais, focadas nas necessidades e objetivos únicos de cada paciente.",
    stat: "100%",
    statLabel: "Personalizado"
  },
  {
    icon: Award,
    title: "Formação Internacional",
    description: "Graduação e especialização pela USP, com fellowship em Stanford — instituições de referência mundial.",
    stat: "USP + Stanford",
    statLabel: "Elite Médica"
  },
  {
    icon: Heart,
    title: "Resultados Naturais",
    description: "Procedimentos com foco em naturalidade, harmonia e segurança, respeitando a identidade de cada pessoa.",
    stat: "Natural",
    statLabel: "& Seguro"
  },
  {
    icon: Shield,
    title: "Acompanhamento Completo",
    description: "Suporte integral do pré ao pós-operatório, garantindo segurança e tranquilidade em todas as etapas.",
    stat: "8 Etapas",
    statLabel: "de Cuidado"
  }
];

const Differentials = () => {
  return (
    <section className="py-16 md:py-20 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Por que escolher a Clínica Smaniotto
          </h2>
          <p className="text-xl text-muted-foreground">
            Excelência médica, atenção humanizada e resultados que transformam vidas com segurança e naturalidade.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((differential, index) => (
            <div 
              key={index}
              className="group relative bg-secondary/40 rounded-3xl p-8 border border-border/50 hover:border-primary/30 hover:bg-card shadow-soft hover:shadow-medium transition-smooth"
            >
              <div className="absolute top-8 right-8 text-right">
                <p className="text-2xl font-bold text-primary">{differential.stat}</p>
                <p className="text-xs text-muted-foreground">{differential.statLabel}</p>
              </div>
              
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                <differential.icon className="h-8 w-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-3">
                {differential.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {differential.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
