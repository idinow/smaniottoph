import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/5567991163617?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20procedimentos"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-scale-in"
    >
      <Button 
        size="lg" 
        className="rounded-full h-16 w-16 shadow-strong bg-foreground text-background hover:bg-foreground/90 transition-smooth group"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="h-7 w-7 group-hover:scale-110 transition-smooth" />
      </Button>
    </a>
  );
};

export default FloatingWhatsApp;
