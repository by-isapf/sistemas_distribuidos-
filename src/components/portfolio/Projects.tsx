import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    name: "Projetos no GitHub",
    description: "Projetos acadêmicos e pessoais relacionados a desenvolvimento de software, programação e tecnologia.",
    tech: ["React", "JavaScript", "Java", "C", "Python"],
    link: "https://github.com/by-isapf",
    role: "Desenvolvedora",
    highlight: true,
  },
  {
    name: "Pesquisa de Iniciação Científica",
    description: "Atuação em pesquisa acadêmica com foco em tecnologia, metodologia científica e análise de soluções computacionais.",
    tech: ["Pesquisa Acadêmica", "Análise de Dados", "Tecnologia"],
    link: "https://github.com/by-isapf",
    role: "Pesquisadora",
    highlight: false,
  },
];

export const Projects = () => {
  return (
    <section id="projetos" className="py-24 sm:py-32 bg-secondary/40">
      <div className="container mx-auto px-4">
        <p className="font-mono text-sm text-primary mb-3">02 / projetos</p>

        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Projetos
        </h2>

        <p className="text-muted-foreground mb-12">
          Projetos acadêmicos, pessoais e de pesquisa desenvolvidos durante a trajetória em Tecnologia da Informação.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.name} className="p-6 rounded-2xl border border-border bg-card shadow-card hover:border-primary/40 transition-smooth">
              <h3 className="font-display text-xl font-semibold mb-3">{p.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{p.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <Badge key={t} variant="secondary">
                    {t}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-xs text-muted-foreground">{p.role}</span>

                <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-primary transition-smooth">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </div>
            </article>
          ))}
        </div>

        <a href="https://github.com/by-isapf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-8 text-primary font-medium">
          <ExternalLink className="h-4 w-4" />
          Ver repositório completo
        </a>
      </div>
    </section>
  );
};