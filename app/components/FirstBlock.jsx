const FirstBlock = () => {
    return (
      <div className="flex flex-col items-center justify-center p-4">
        {/* Titulo centrado */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-8" style={{ color: '#001122' }}>
          ¡Gracias por confiar!
        </h1>
  
        {/* Primer Video embebido de YouTube */}
        <div className="mb-8 w-full max-w-3xl">
          <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}> {/* Esto mantiene la relación de aspecto 16:9 */}
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/tL5PB9XQaBA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
  
        {/* Párrafo explicativo */}
        <p className="text-center text-base sm:text-lg lg:text-xl text-gray-700 mx-auto leading-relaxed">
          Te explicamos cómo funciona nuestro servicio y cómo personalizarlo con opciones exclusivas para ti.
        </p>
  
        {/* Botón "Accede al drive personalizado" */}
        <a
          href="https://wa.me/+543585411552"
           target="_blank"
          className="mt-6 w-full sm:w-[300px] md:w-[400px] lg:w-[564px] h-[45px] bg-[#222222] text-white text-lg font-semibold rounded-xl flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
        >
          Accede al drive personalizado
        </a>
      </div>
    );
  };
  
  export default FirstBlock;
  