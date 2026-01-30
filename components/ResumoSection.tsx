"use client";

export default function ResumoSection() {
  return (
    <section className="w-full bg-gray-950 text-gray-100 py-16 px-6 flex justify-center">
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl font-semibold mb-4">Resumo do Artigo</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Este artigo descreve o desenvolvimento e integração de um rastreador
          (físico) a um sistema de rastreamento veicular, integrando
          dispositivos de Internet das Coisas (IoT), a plataforma open-source
          Traccar, um backend em Node.js e um frontend em React/Next.js. O
          sistema permite monitoramento em tempo real de veículos, exibição de
          status e visualização de dados de forma intuitiva.
        </p>
      </div>
    </section>
  );
}
