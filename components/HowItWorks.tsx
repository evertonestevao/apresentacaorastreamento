import { Navigation, Server, Wifi, MapPin } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Navigation className="w-6 h-6 text-[#4B6A8F]" />,
      text: "Rastreador envia dados para o Traccar",
    },
    {
      icon: <Server className="w-6 h-6 text-[#4B6A8F]" />,
      text: "Backend Node.js consulta a API do Traccar",
    },
    {
      icon: <Wifi className="w-6 h-6 text-[#4B6A8F]" />,
      text: "Backend envia dados via WebSocket",
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#4B6A8F]" />,
      text: "Frontend recebe dados em tempo real e atualiza o mapa",
    },
  ];

  return (
    <section className="snap-start h-screen bg-[#121212] text-center flex flex-col justify-center px-6">
      <h2 className="text-4xl font-bold mb-12 text-[#E0E0E0] font-sans">
        Como Funciona
      </h2>
      <div className="max-w-3xl mx-auto space-y-6 text-[#A0A0A0] text-lg font-inter">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-center gap-4 justify-center">
            {step.icon}
            <span>{step.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
