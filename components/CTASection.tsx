"use client";

import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="w-full bg-gray-950 text-gray-100 py-26 px-14 text-center">
      <h2 className="text-3xl font-bold mb-6">Acesse o Artigo</h2>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button asChild>
          <a
            href="/Everton Estevao - Traccar e Leaflet.pdf"
            target="_blank"
            className="w-full sm:w-auto"
          >
            Ler Artigo Completo
          </a>
        </Button>
        {/* <Button asChild>
          <a
            href="https://github.com/seu-repo"
            target="_blank"
            className="w-full sm:w-auto"
          >
            Ver Código no GitHub
          </a>
        </Button> */}
      </div>
    </section>
  );
}
