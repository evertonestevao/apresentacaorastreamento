import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function Features() {
  const features = [
    "Rastreador configurado no Traccar",
    "Backend Node.js buscando dados e autenticando no Traccar",
    "Atualização em tempo real via WebSocket",
    "Mapa interativo com Leaflet",
    "Exibição de informações detalhadas do veículo",
    "Marcadores se movendo automaticamente conforme a posição",
  ];

  return (
    <section className="snap-start h-screen bg-[#121212] text-center flex flex-col justify-center px-6">
      <h2 className="text-4xl font-bold mb-12 text-[#E0E0E0] font-sans">
        Funcionalidades
      </h2>
      <div className="max-w-4xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2">
        {features.map((feature, idx) => (
          <Card key={idx} className="bg-[#1B1B1B] border border-[#2A2A2A] p-4">
            <CardHeader>
              <h3 className="text-[#E0E0E0] font-bold">{feature}</h3>
            </CardHeader>
            <CardContent>
              <p className="text-[#A0A0A0]">
                Detalhes adicionais ou descrição do recurso.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
