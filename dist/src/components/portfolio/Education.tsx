import { GraduationCap, FlaskConical } from "lucide-react";

export const Education = () => {
  return (
    <section id="formacao" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <p className="font-mono text-sm text-primary mb-3">03 / formação</p>

        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-12">
          Formação acadêmica
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">
          <article className="p-6 rounded-2xl border border-border bg-card shadow-card">
            <GraduationCap className="h-6 w-6 text-primary mb-4" />
            <h3 className="font-display text-lg font-semibold">Tecnologia da Informação (TI)</h3>
            <p className="text-sm text-muted-foreground">UFERSA</p>
          </article>

          <article className="p-6 rounded-2xl border border-border bg-card shadow-card">
            <FlaskConical className="h-6 w-6 text-primary mb-4" />
            <h3 className="font-display text-lg font-semibold">Iniciação Científica</h3>
            <p className="text-sm text-muted-foreground">Atuação em pesquisa acadêmica</p>
          </article>
        </div>
      </div>
    </section>
  );
};