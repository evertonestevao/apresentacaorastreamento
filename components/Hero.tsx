"use client";

import { Button } from "@/components/ui/button";
import { useRef, useEffect } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Tenta iniciar o vídeo após 500ms de carregamento da página
    const timeout = setTimeout(() => {
      videoRef.current?.play().catch(() => {
        // falhou no autoplay, vídeo vai ficar pronto para play manual
      });
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="w-full bg-gray-950 text-gray-100 min-h-screen flex items-center px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Texto à esquerda */}
        <div className="flex-1 text-left p-4">
          <h1 className="text-4xl lg:text-4xl font-bold mb-6">
            Sistema de Rastreamento Veicular com IoT, Node.js e React
          </h1>
          <p className="text-gray-400 text-lg mb-6">
            Uma abordagem open-source que integra dispositivos IoT, backend
            Node.js e frontend React/Next.js, permitindo monitoramento de
            veículos em tempo real e visualização de dados intuitiva.
          </p>
          <p className="text-gray-600 text-md mb-6">
            Desenvolvido por{" "}
            <a
              href="https://wa.me/14997075287?text=Vi%20seu%20projeto%20e%20quero%20falar%20com%20você"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-white transition-colors"
            >
              Everton Estevão
            </a>
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <a
                href="/Everton Estevao - Traccar e Leaflet.pdf"
                target="_blank"
                className="w-full sm:w-auto"
              >
                Ler Artigo Completo
              </a>
            </Button>
            <Button asChild>
              <a
                href="https://github.com/seu-repo"
                target="_blank"
                className="w-full sm:w-auto"
              >
                Ver Código no GitHub
              </a>
            </Button>
          </div>
        </div>

        {/* Vídeo à direita */}
        <div className="flex-[2] w-full lg:max-w-3xl aspect-video rounded-xl overflow-hidden shadow-lg">
          <video
            ref={videoRef}
            src="/demonstracao.mp4"
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
