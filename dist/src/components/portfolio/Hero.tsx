import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl animate-fade-up">
          <p className="font-mono text-sm text-primary mb-4">// Olá, mundo 👋</p>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
            Isabel <span className="text-gradient">Freire</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-4">
            Pesquisadora | Tecnologia da Informação | Desenvolvimento de Software
          </p>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-10">
            Transformando conhecimento em soluções tecnológicas.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button size="lg" asChild className="shadow-glow">
              <a href="https://github.com/by-isapf" target="_blank" rel="noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>

            <Button size="lg" variant="outline" asChild>
              <a href="#contato-linkedin">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>

            <Button size="lg" variant="ghost" asChild>
              <a href="#contato">
                <Mail className="mr-2 h-4 w-4" /> Contato
              </a>
            </Button>
          </div>
        </div>

        <a href="#sobre" className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-smooth" aria-label="Rolar para baixo">
          <ArrowDown className="h-4 w-4 animate-bounce" /> rolar
        </a>
      </div>
    </section>
  );
};