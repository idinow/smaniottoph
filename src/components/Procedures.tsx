import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const procedures = [
  {
    category: "Face",
    title: "Rejuvenescimento Facial",
    procedures: "Lift Facial, Necklift, Ritidoplastia, Blefaroplastia",
    description: "Rejuvenescimento facial com naturalidade, redefinindo contornos e expressões sem perder a essência do paciente."
  },
  {
    category: "Lipoescultura",
    title: "Modelagem Corporal",
    procedures: "Abdominoplastia, Lipo HD, Lipo com Renuvion, Lipoenxertia de Glúteos",
    description: "Modelagem corporal precisa, com técnicas que combinam tecnologia e proporções naturais."
  },
  {
    category: "Mamas",
    title: "Cirurgia das Mamas",
    procedures: "Mamoplastia Redutora, Prótese, Aumento Híbrido, Mastopexia",
    description: "Equilíbrio entre forma, volume e simetria, respeitando o biotipo e o momento de cada mulher."
  },
  {
    category: "Ginecomastia",
    title: "Contorno Torácico Masculino",
    procedures: "Tratamento Cirúrgico Especializado",
    description: "Tratamento cirúrgico discreto e seguro para redefinir o contorno do tórax masculino, devolvendo autoconfiança."
  }
];

const Procedures = () => {
  return (
    <section id="procedimentos" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Principais Procedimentos
          </h2>
          <div className="h-1 w-24 gradient-premium rounded-full mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {procedures.map((procedure, index) => (
            <Card 
              key={index} 
              className="border-2 border-border hover:border-primary/50 transition-smooth shadow-soft hover:shadow-medium group"
            >
              <CardHeader>
                <div className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                  {procedure.category}
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-smooth">
                  {procedure.title}
                </CardTitle>
                <CardDescription className="text-base font-medium text-foreground/70">
                  {procedure.procedures}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {procedure.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Procedures;
