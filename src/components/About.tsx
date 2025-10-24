import drPedro from "@/assets/dr-pedro-vertical.jpg";
import { Check } from "lucide-react";

const About = () => {
  const credentials = [
    "Medicina pela Faculdade de Medicina da USP (FMUSP)",
    "Especialização em Cirurgia Geral pela FMUSP",
    "Especialização em Cirurgia Plástica pela FMUSP",
    "Fellow em Cirurgia Plástica na Universidade de Stanford (EUA)",
    "Doutor em Ciências pela Faculdade de Medicina da USP",
    "Mais de uma década de experiência em cirurgia estética e reparadora"
  ];

  return (
    <section id="sobre" className="py-16 md:py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          <div className="relative">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-strong">
              <img 
                src={drPedro} 
                alt="Dr. Pedro Smaniotto - Cirurgião Plástico formado pela USP e Stanford, especialista em cirurgia plástica estética e reparadora" 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width="600"
                height="800"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-background rounded-2xl shadow-strong p-6 border border-border max-w-[250px]">
              <p className="text-4xl font-bold text-primary mb-1">10+</p>
              <p className="text-sm text-muted-foreground">Anos de experiência em cirurgia plástica</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Excelência que transforma vidas
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              O Dr. Pedro Smaniotto é referência em cirurgia plástica estética e reparadora, 
              combinando formação de elite internacional com técnica apurada e visão humanizada.
            </p>
            
            <div className="space-y-4 mb-8">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-foreground/90">{credential}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-secondary/30 border-l-4 border-primary rounded-r-xl p-6">
              <p className="text-lg italic text-foreground/90 leading-relaxed">
                "A cirurgia plástica une ciência, arte e empatia. Cada procedimento é único, 
                pensado para alcançar resultados naturais e duradouros que respeitem a identidade de cada paciente."
              </p>
              <p className="text-sm font-semibold text-primary mt-3">— Dr. Pedro Smaniotto</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
