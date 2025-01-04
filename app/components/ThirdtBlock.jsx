import Link from 'next/link';

const ThirdBlock = () => {
  return (
    <div className="w-full py-12">
      {/* Primer diseño: video a la izquierda y texto a la derecha */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
        {/* Video a la izquierda */}
        <div className="w-full h-[200px] sm:h-[300px] md:h-[356.5px] px-4 md:px-8">
          <div className="relative w-full h-full">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/9c4N0r374I8"
              title="YouTube video player"
              frameBorder="0"
              allow=" autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Texto a la derecha */}
        <div className="text-left space-y-6"> {/* Aumentamos el espacio entre los elementos */}
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">GPT Personalizado</h2> {/* Título más grande */}
          <p className="text-lg sm:text-xl text-gray-700 max-w-full sm:w-80"> {/* Texto más grande */}
            Automatizá y optimizá procesos clave para ahorrar tiempo.
          </p>

          {/* Botón debajo del texto */}
          <Link
            href="/gpt"
            className="w-full max-w-[320px] h-[45px] bg-[#222222] text-white text-sm font-semibold rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
          >
            Descubrí cómo podés automatizarlo
          </Link>
        </div>
      </div>

      {/* Segundo diseño: video a la derecha y texto a la izquierda */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8 px-4">
        {/* Texto a la izquierda */}
        <div className="text-left space-y-6 mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">Entrega Sorprendente</h2> {/* Título más grande */}
          <p className="text-lg sm:text-xl text-gray-700 max-w-full sm:w-80"> {/* Texto más grande */}
            Impresioná con un sistema de entrega automatizado y único.
          </p>

          {/* Botón debajo del texto */}
          <a
            href="#"
            className="w-full max-w-[320px] h-[45px] bg-[#222222] text-white text-sm font-semibold rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
          >
            Conocé como diferenciarte con tu servicio
          </a>
        </div>

        {/* Video a la derecha */}
        <div className="w-full h-[200px] sm:h-[300px] md:h-[356.5px] px-4 md:px-8">
          <div className="relative w-full h-full">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/7bJFiK-fH28?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=1&iv_load_policy=3"
              
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdBlock;
