import { MapPin, Phone, Mail, Clock } from "lucide-react";
const Contact = () => {
  return <section id="contato" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Entre em Contato
            </h2>
            <div className="h-1 w-24 gradient-premium rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground">
              Estamos prontos para atendê-lo com excelência
            </p>
          </div>
          
          <div className="bg-secondary/30 rounded-2xl shadow-medium p-8 md:p-12 border border-border/50">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold mb-1">Endereço</h3>
                    <p className="text-muted-foreground">Rua Rui Barbosa, 4098<br />Campo Grande – MS</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold mb-1">Telefone</h3>
                    <p className="text-muted-foreground">(67) 3321-0787</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold mb-1">E-mail</h3>
                    <p className="text-muted-foreground break-all">contato@cirurgiaplasticasmaniotto.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold mb-1">Horário</h3>
                    <p className="text-muted-foreground">Atendimento com hora marcada</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                <strong>Clínica Smaniotto</strong> — Cirurgia Plástica Estética, Reparadora e Microcirurgia
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Dr. Pedro H. Smaniotto • CRM-MS: 5.666 • CRM-SP: 129.386
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;