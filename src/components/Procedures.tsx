import { Smile, Droplet, Heart, User } from "lucide-react";

const procedures = [
  {
    icon: Smile,
    category: "Face",
    title: "Rejuvenescimento Facial",
    procedures: ["Lift Facial", "Necklift", "Ritidoplastia", "Blefaroplastia"],
    color: "from-blue-500/10 to-primary/10"
  },
  {
    icon: Droplet,
    category: "Lipoescultura",
    title: "Modelagem Corporal",
    procedures: ["Abdominoplastia", "Lipo HD", "Lipo com Renuvion", "Lipoenxertia de Glúteos"],
    color: "from-purple-500/10 to-primary/10"
  },
  {
    icon: Heart,
    category: "Mamas",
    title: "Cirurgia das Mamas",
    procedures: ["Mamoplastia Redutora", "Prótese", "Aumento Híbrido", "Mastopexia"],
    color: "from-pink-500/10 to-primary/10"
  },
  {
    icon: User,
    category: "Ginecomastia",
    title: "Contorno Torácico Masculino",
    procedures: ["Tratamento Cirúrgico Especializado", "Resultados Discretos"],
    color: "from-teal-500/10 to-primary/10"
  }
];

const Procedures = () => {
  return (
    <section id="procedimentos" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Procedimentos que combinam ciência e arte
          </h2>
          <p className="text-xl text-muted-foreground">
            Técnicas avançadas e equipamentos de última geração para resultados naturais, 
            seguros e que respeitam a harmonia do seu corpo.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {procedures.map((procedure, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-border/50 bg-secondary/40 hover:bg-card hover:shadow-strong transition-smooth p-8"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${procedure.color} opacity-0 group-hover:opacity-100 transition-smooth`} />
              
              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-smooth">
                      <procedure.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary uppercase tracking-wide">{procedure.category}</p>
                      <h3 className="text-2xl font-bold mt-1">{procedure.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {procedure.procedures.map((proc, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <p className="text-foreground/80">{proc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Procedures;
