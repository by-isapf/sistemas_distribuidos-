import { Github, Linkedin, Mail, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const EMAIL = "isabel.freire114@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/isabel-freire";
const GITHUB = "https://github.com/by-isapf";

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      toast({ title: "Email copiado!", description: EMAIL });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({ title: "Não foi possível copiar", variant: "destructive" });
    }
  };

  return (
    <section id="contato" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="font-mono text-sm text-primary mb-3">05 / contato</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight mb-6">
            Vamos <span className="text-gradient">construir</span> algo juntos?
          </h2>
          <p className="text-muted-foreground text-lg">
            Aberta a oportunidades, colaborações em projetos de software e pesquisa acadêmica.
          </p>
        </div>

        <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-4">
          <a href={GITHUB} target="_blank" rel="noreferrer" className="group p-6 rounded-2xl border border-border bg-card shadow-card hover:border-primary/50 hover:-translate-y-1 transition-smooth">
            <Github className="h-6 w-6 text-primary mb-3" />
            <p className="font-semibold mb-1">GitHub</p>
            <p className="text-sm text-muted-foreground break-all">@by-isapf</p>
          </a>

          <a id="contato-linkedin" href={LINKEDIN} target="_blank" rel="noreferrer" className="group p-6 rounded-2xl border border-border bg-card shadow-card hover:border-primary/50 hover:-translate-y-1 transition-smooth">
            <Linkedin className="h-6 w-6 text-primary mb-3" />
            <p className="font-semibold mb-1">LinkedIn</p>
            <p className="text-sm text-muted-foreground">Conecte-se comigo</p>
          </a>

          <div className="sm:col-span-2 p-6 rounded-2xl border border-border bg-card shadow-card">
            <p className="font-semibold mb-1">Email</p>
            <p className="text-sm text-muted-foreground break-all mb-4">{EMAIL}</p>

            <div className="flex flex-wrap gap-2">
              <Button onClick={copyEmail} variant="outline">
                {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                {copied ? "Copiado" : "Copiar email"}
              </Button>

              <Button asChild>
                <a href={`mailto:${EMAIL}`}>
                  <Mail className="mr-2 h-4 w-4" /> Enviar email
                </a>
              </Button>

              <Button asChild variant="ghost">
                <a href={GITHUB} target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-4 w-4" /> Abrir GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};