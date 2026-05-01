export const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Isabel Freire. Todos os direitos reservados.</p>
        <p className="font-mono text-xs">Construído com React + Vite + Tailwind</p>
      </div>
    </footer>
  );
};