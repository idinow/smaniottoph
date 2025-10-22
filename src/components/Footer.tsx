const Footer = () => {
  return (
    <footer className="bg-foreground/5 py-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Clínica Smaniotto. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Cirurgia Plástica Estética e Reparadora | Campo Grande - MS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
