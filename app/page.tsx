"use client";

import { Code2, ArrowRight, Github } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="text-center px-4">
          <Code2 className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Exemplos sites
          </h1>
        </div>
      </section>

      {/* Sobre o Projeto */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Sobre o Projeto
          </h2>
          <Card className="p-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Este projeto tem como objetivo apresentar websites
            </p>
          </Card>
        </div>
      </section>

      {/* Projetos */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Projetos Recriados
          </h2>
          <div className="grid gap-6">
            <Card className="p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Escritório de Advocacia
                  </h3>
                  <p className="text-muted-foreground">
                    Site profissional para escritório de advocacia com design
                    moderno e minimalista.
                  </p>
                </div>
                <Link href="/advogado">
                  <Button>
                    Ver Projeto
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Escritório de Contabilidade
                  </h3>
                  <p className="text-muted-foreground">
                    Site profissional para escritório de contalibilidade com design
                    moderno e minimalista.
                  </p>
                </div>
                <Link href="/contador">
                  <Button>
                    Ver Projeto
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-4xl mx-auto flex justify-center">
          <Link
            href="https://github.com/seu-usuario/seu-repositorio"
            target="_blank"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>Ver no GitHub</span>
          </Link>
        </div>
      </footer>
    </main>
  );
}
