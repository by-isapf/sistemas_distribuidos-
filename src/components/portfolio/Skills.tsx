import { Code, Server, FlaskConical, Wrench } from "lucide-react";

const groups = [
  { icon: Code, title: "Front-end", items: ["React", "HTML", "CSS", "JavaScript", "Tailwind CSS"] },
  { icon: Server, title: "Back-end & lógica", items: ["Java", "C", "Python"] },
  { icon: FlaskConical, title: "Pesquisa & Tecnologia", items: ["Metodologia Científica", "Análise de Dados", "Desenvolvimento Acadêmico"] },
  { icon: Wrench, title: "Ferramentas", items: ["Git", "GitHub", "VS Code", "AWS Amplify"] },
];

export const Skills = () => {
  return (
    <section id="habilidades" className="py-24 sm:py-32 bg-secondary/40">
      <div className="container mx-auto px-4">
        <p className="font-mono text-sm text-primary mb-3">04 / habilidades</p>

        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-12">
          Habilidades
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map(({ icon: Icon, title, items }) => (
            <article key={title} className="p-6 rounded-2xl border border-border bg-card shadow-card hover:border-primary/40 transition-smooth">
              <Icon className="h-5 w-5 text-primary mb-4" />
              <h3 className="font-semibold mb-4">{title}</h3>

              <ul className="flex flex-wrap gap-2">
                {items.map((it) => (
                  <li key={it} className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border">
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};