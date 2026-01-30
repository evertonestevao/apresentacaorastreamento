"use client";

import { Badge } from "@/components/ui/badge";

export default function TecnologiasSection() {
  const techs = [
    "Node.js",
    "React",
    "Next.js",
    "Traccar",
    "IoT",
    "WebSocket",
    "Leaflet",
  ];

  return (
    <section className="w-full bg-gray-950 text-gray-100 py-28 px-6 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12">
        Tecnologias Utilizadas
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {techs.map((tech) => (
          <Badge
            key={tech}
            className="bg-gray-800 text-gray-100 px-6 py-3 text-lg font-semibold transition transform hover:scale-105 hover:bg-gray-700"
          >
            {tech}
          </Badge>
        ))}
      </div>
    </section>
  );
}
