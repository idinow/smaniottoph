import drPedro from "@/assets/dr-pedro-vertical.jpg";
import { Award, GraduationCap, Globe } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Dr. Pedro Smaniotto
              </h2>
              <div className="h-1 w-24 gradient-premium rounded-full" />
            </div>
            
            <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
              Formado em Medicina pela <strong className="text-primary">Faculdade de Medicina da USP (FMUSP)</strong>, 
              com especialização em Cirurgia Geral e Cirurgia Plástica pela mesma instituição.
            </p>
            
            <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
              Em 2015, realizou um <strong className="text-primary">Fellow em Cirurgia Plástica na Universidade de Stanford (EUA)</strong> e 
              é <strong className="text-primary">Doutor em Ciências pela USP</strong>.
            </p>
            
            <p className="text-lg text-foreground/90 mb-8 leading-relaxed">
              Com mais de uma década de experiência, o Dr. Pedro alia conhecimento científico, técnica precisa e atenção humana 
              em cada procedimento, atuando nas áreas <strong>estética e reparadora</strong>.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center p-4 bg-accent rounded-xl transition-smooth hover:shadow-soft">
                <GraduationCap className="h-8 w-8 text-primary mb-2" />
                <p className="text-sm font-medium">FMUSP</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-accent rounded-xl transition-smooth hover:shadow-soft">
                <Globe className="h-8 w-8 text-primary mb-2" />
                <p className="text-sm font-medium">Stanford</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-accent rounded-xl transition-smooth hover:shadow-soft">
                <Award className="h-8 w-8 text-primary mb-2" />
                <p className="text-sm font-medium">Doutor USP</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 gradient-premium opacity-10 rounded-2xl transform rotate-3" />
              <img 
                src={drPedro} 
                alt="Dr. Pedro Smaniotto - Cirurgião Plástico" 
                className="relative rounded-2xl shadow-strong w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
