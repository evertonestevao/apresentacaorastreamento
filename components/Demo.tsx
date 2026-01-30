export default function Demo() {
  return (
    <section className="snap-start h-screen bg-[#121212] text-center flex flex-col justify-center px-6">
      <h2 className="text-4xl font-bold mb-12 text-[#E0E0E0] font-sans">
        Demonstração
      </h2>
      <video
        src="/placeholder-video.mp4"
        controls
        className="mx-auto rounded-lg border border-[#2A2A2A] max-w-full"
      />
    </section>
  );
}
