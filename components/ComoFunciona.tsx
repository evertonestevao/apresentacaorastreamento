"use client";

import { Badge } from "@/components/ui/badge";

export default function ComoFuncionaSection() {
  return (
    <section className="w-full bg-gray-950 text-gray-100 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-12">Como Funciona a Aplicação</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
        <div className="flex flex-col items-center border p-4 rounded-2xl">
          <Badge className="mb-4 bg-gray-800 text-gray-100 text-md">1</Badge>
          <h3 className="text-xl font-semibold mb-2">Rastreador</h3>
          <p className="text-gray-400 text-sm">
            Dispositivo GPS instalado nos veículos envia informações de
            localização, velocidade e status.
          </p>
        </div>

        <div className="flex flex-col items-center border p-4 rounded-2xl ">
          <Badge className="mb-4 bg-gray-800 text-gray-100 text-md">2</Badge>
          <h3 className="text-xl font-semibold mb-2">Traccar</h3>
          <p className="text-gray-400 text-sm">
            Plataforma open-source recebe os dados do rastreador e organiza em
            registros compreensíveis.
          </p>
        </div>

        <div className="flex flex-col items-center border p-4 rounded-2xl">
          <Badge className="mb-4 bg-gray-800 text-gray-100 text-md">3</Badge>
          <h3 className="text-xl font-semibold mb-2">Backend Node.js</h3>
          <p className="text-gray-400 text-sm text-center">
            Recebe os dados do Traccar via API ou Webhook, processa e organiza
            as informações, garantindo atualização em tempo real via{" "}
            <strong>WebSocket</strong> para o frontend.
          </p>
        </div>

        <div className="flex flex-col items-center border p-4 rounded-2xl">
          <Badge className="mb-4 bg-gray-800 text-gray-100 text-md">4</Badge>
          <h3 className="text-xl font-semibold mb-2">Frontend React</h3>
          <p className="text-gray-400 text-sm text-center">
            Mostra os veículos no mapa em tempo real usando{" "}
            <strong>Leaflet</strong>, exibindo posição, status e histórico de
            forma intuitiva, consumindo os dados enviados via WebSocket pelo
            backend.
          </p>
        </div>
      </div>
    </section>
  );
}
