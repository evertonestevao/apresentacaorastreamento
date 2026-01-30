"use client";

export default function DemoSection() {
  return (
    <section className="w-full bg-gray-900 text-gray-100 py-16 px-6 flex flex-col items-center gap-8">
      <h2 className="text-3xl font-bold">Demonstração do Frontend</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <img
          src="/screenshot1.png"
          alt="Mapa Interativo"
          className="rounded-xl shadow-lg w-72"
        />
        <img
          src="/screenshot2.png"
          alt="Status dos Veículos"
          className="rounded-xl shadow-lg w-72"
        />
      </div>
    </section>
  );
}
