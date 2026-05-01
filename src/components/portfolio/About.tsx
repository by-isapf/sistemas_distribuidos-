import { Code2, FlaskConical, BookOpen, Globe } from "lucide-react";

const pillars = [
  { icon: Code2, title: "Desenvolvimento de Software", desc: "React, JavaScript e soluções computacionais modernas." },
  { icon: FlaskConical, title: "Pesquisa Científica", desc: "Iniciação científica e metodologia de pesquisa." },
  { icon: BookOpen, title: "Tecnologia da Informação", desc: "Análise, desenvolvimento e inovação em TI." },
  { icon: Globe, title: "Computação Aplicada", desc: "Teoria e prática para resolver problemas reais." },
];

export const About = () => {
  return (
    <section id="sobre" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <p className="font-mono text-sm text-primary mb-3">01 / sobre</p>

        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-6">
          Sobre mim
        </h2>

        <div className="space-y-4 text-muted-foreground leading-relaxed max-w-4xl mb-10">
          <p>
            Isabel Freire é estudante de Tecnologia da Informação pela UFERSA e atua em pesquisa de Iniciação Científica.
          </p>
          <p>
            Sua trajetória acadêmica é marcada pelo interesse em desenvolvimento de software, tecnologia e investigação científica, buscando constantemente aprofundar conhecimentos e aplicar soluções inovadoras.
          </p>
          <p>
            Possui experiência com projetos acadêmicos e pesquisa, com foco em desenvolvimento e análise de soluções computacionais.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="p-6 rounded-xl border border-border bg-card shadow-card hover:border-primary/50 transition-smooth">
              <Icon className="h-5 w-5 text-primary mb-4" />
              <h3 className="font-semibold mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};