import Link from 'next/link';

const ThirdBlock = () => {
  return (
    <div className="w-full py-12">
      {/* Primer diseño: imagen a la izquierda y texto a la derecha */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
        {/* Imagen a la izquierda */}
        <div className="w-full h-[200px] sm:h-[300px] md:h-[356.5px] px-4 md:px-8">
          <div className="relative w-full h-full">
            <img
              className="w-full h-full rounded-lg object-cover" // Usamos una imagen y le damos el tamaño adecuado
              src="https://via.placeholder.com/800x400" // Reemplaza con la URL de tu imagen
              alt="Imagen descriptiva"
            />
          </div>
        </div>

        {/* Texto a la derecha */}
        <div className="text-left space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Análisis Personalizado:</h2>
          <p className="text-sm sm:text-lg text-gray-700 max-w-full sm:w-72">
            Evaluamos tus procesos actuales y necesidades clave.
          </p>

          {/* Botón debajo del texto */}
          <Link
            href="https://wa.me/+543585411552"
           target="_blank"
            className="w-full max-w-[320px] h-[40px] bg-[#222222] text-white text-sm font-semibold rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
          >
           Mas informacion
          </Link>
        </div>
      </div>

      {/* Segundo diseño: imagen a la derecha y texto a la izquierda */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8 px-4">
        {/* Texto a la izquierda */}
        <div className="text-left space-y-4 mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Capacitación Completa: </h2>
          <p className="text-sm sm:text-lg text-gray-700 max-w-full sm:w-72">
            Videos tutoriales y guías paso a paso para que puedas gestionar el sistema con facilidad.
          </p>

          {/* Botón debajo del texto */}
          <a
            href="https://wa.me/+543585411552"
           target="_blank"
            className="w-full max-w-[320px] h-[40px] bg-[#222222] text-white text-sm font-semibold rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
          >
          Mas informacion
          </a>
        </div>

        {/* Imagen a la derecha */}
        <div className="w-full h-[200px] sm:h-[300px] md:h-[356.5px] px-4 md:px-8">
          <div className="relative w-full h-full">
            <img
              className="w-full h-full rounded-lg object-cover" // Imagen en lugar de video, con las mismas dimensiones
              src="https://via.placeholder.com/800x400" // Reemplaza con la URL de tu imagen
              alt="Imagen descriptiva"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdBlock;
