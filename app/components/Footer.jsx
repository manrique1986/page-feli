"use client"; // Asegura que el código se ejecute en el cliente, para React

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-white py-4 w-full fixed bottom-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 sm:px-4">
        {/* Texto "Contacto" alineado a la izquierda */}
        <div className="text-lg font-semibold sm:text-base text-center sm:text-left">
          Contacto
        </div>

        {/* Información de contacto alineada a la derecha */}
        <div className="flex flex-wrap justify-center sm:justify-between space-x-6 sm:space-x-4 mt-2 sm:mt-0">
          <a
            href="tel:+123456789"
            className="text-lg font-medium hover:underline sm:text-sm w-full sm:w-auto text-center"
          >
            +54 3585411552
          </a>
          <a
            href="mailto:contacto@ejemplo.com"
            className="text-lg font-medium hover:underline sm:text-sm w-full sm:w-auto text-center"
          >
            agenciafbb@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
