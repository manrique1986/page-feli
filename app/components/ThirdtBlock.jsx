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
              src="https://www.youtube.com/embed/SJCPcf3m2KA"
              title="YouTube video player"
              frameBorder="0"
              allow=" autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Texto a la derecha */}
        <div className="text-left space-y-6"> {/* Aumentamos el espacio entre los elementos */}
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1B3A4B]">GPT Personalizado</h2> {/* Título más grande */}
          <p className="text-lg sm:text-xl text-[#1B3A4B] max-w-full sm:w-80"> {/* Texto más grande */}
            Automatizá y optimizá procesos clave para ahorrar tiempo.
          </p>

          {/* Botón debajo del texto */}
          <Link
            href="/page1"
            className="w-full max-w-[400px] h-[45px] bg-[#B0846A] text-white text-lg font-semibold rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
          >
            Descubrí cómo podés automatizarlo
          </Link>
        </div>
      </div>

      {/* Segundo diseño: video a la derecha y texto a la izquierda */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8 px-4">
        {/* Texto a la izquierda */}
        <div className="text-left space-y-6 mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1B3A4B]">Entrega Sorprendente</h2> {/* Título más grande */}
          <p className="text-lg sm:text-xl text-[#1B3A4B] max-w-full sm:w-80"> {/* Texto más grande */}
            Impresioná con un sistema de entrega automatizado y único.
          </p>

          {/* Botón debajo del texto */}
          <a
            href="/page2"
            className="w-full max-w-[400px] h-[45px] bg-[#B0846A] text-white text-lg text-center font-semibold rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
          >
            Conocé como diferenciarte con tu servicio
          </a>
        </div>

        {/* Video a la derecha */}
        <div className="w-full h-[200px] sm:h-[300px] md:h-[356.5px] px-4 md:px-8">
          <div className="relative w-full h-full">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/XmCbqupXzt8"
              
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
