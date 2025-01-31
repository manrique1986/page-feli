const FourthBlock = () => {
    return (
      <div className="w-full px-4 sm:px-8 lg:px-24">
        {/* Primer video con título y párrafo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-8">
          {/* Video a la izquierda */}
          <div className="flex justify-center items-center">
            <div className="relative w-full lg:w-[450px] h-0" style={{ paddingBottom: '56.25%' }}> {/* Mantener relación 16:9 */}
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/Q3Lz3gcOu6M" // Reemplaza VIDEO_ID_1 con el ID del primer video de YouTube
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
  
          {/* Título y párrafo a la derecha */}
          <div className="text-left space-y-4 mt-8 lg:mt-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B3A4B]">
              Consultoría 1 a 1
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-[#1B3A4B] w-full sm:w-72">
              Sesiones personalizadas para ajustar y planificar estrategias.
            </p>
  
            {/* Botón debajo del párrafo */}
            <div className="flex justify-start">
              <a
                href="/page3"
                className="w-full sm:w-[300px] lg:w-[360px] h-[40px] sm:h-[50px] bg-[#B0846A] text-white text-sm sm:text-lg font-semibold rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
              >
                Conoce aún más
              </a>
            </div>
          </div>
        </div>
  
        {/* Segundo video con título y párrafo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-16">
          {/* Video a la derecha */}
          <div className="flex justify-center items-center">
            <div className="relative w-full lg:w-[450px] h-0" style={{ paddingBottom: '56.25%' }}> {/* Mantener relación 16:9 */}
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/gKsgiaIH3d0" // Reemplaza VIDEO_ID_2 con el ID del segundo video de YouTube
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
  
          {/* Título y párrafo a la izquierda */}
          <div className="text-left space-y-4 mt-8 lg:mt-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B3A4B]">
              Seguimiento extendido
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-[#1B3A4B] w-full sm:w-72">
              Optimización y métricas continuas para resultados sostenibles.
            </p>
  
            {/* Botón debajo del párrafo */}
            <div className="flex justify-start">
              <a
                href="/page4"
                className="w-full sm:w-[300px] lg:w-[360px] h-[40px] sm:h-[50px] bg-[#B0846A] text-white text-sm sm:text-lg font-semibold rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
              >
                ¿Por cuánto tiempo es el seguimiento?
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FourthBlock;