"use client";

export default function Footer() {
  return (
    <footer className="w-full  bg-gray-950 text-gray-400 py-8 text-center text-sm border-t border-gray-800">
      <p className="">
        Desenvolvido por{" "}
        <a
          href="https://wa.me/14997075287?text=Vi%20seu%20projeto%20e%20quero%20falar%20com%20você"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white  transition-colors"
        >
          Everton Estevão
        </a>
      </p>
      <p className="mt-2">
        <a
          href="https://wa.me/14997075287?text=Vi%20seu%20projeto%20e%20quero%20falar%20com%20você"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-100 underline hover:text-white transition-colors"
        >
          Fale comigo no WhatsApp
        </a>
      </p>
    </footer>
  );
}
