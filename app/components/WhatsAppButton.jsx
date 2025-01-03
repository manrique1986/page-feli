"use client"; // Asegura que el código se ejecute en el cliente

import { FaWhatsapp } from 'react-icons/fa'; // Importamos el ícono de WhatsApp

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+543585411552" // Cambia este número por tu número de WhatsApp
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-64 right-4 bg-[#25d366] text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-[#128c7e] transition-colors duration-300 z-50"
    >
      {/* Ajustamos el tamaño con clases de Tailwind */}
      <FaWhatsapp size={16} className="sm:size-8 md:size-12 lg:size-30 xl:size-30" />
    </a>
  );
};

export default WhatsAppButton;

