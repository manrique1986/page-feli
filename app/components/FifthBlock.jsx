const FifthBlock = () => {
    return (
      <div className="w-full px-4 sm:px-8 lg:px-24">
        {/* Nuevo bloque de tarjetas */}
        <div className="mt-36">
          {/* Contenedor de las tarjetas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {/* Tarjeta 1 */}
            <div className="flex flex-col space-y-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <iframe
                className="w-full h-[240px] lg:h-[240px] sm:h-[300px] rounded-xl" // Mantener tamaño para escritorio y más grande en tablet
                src="https://www.youtube.com/embed/tu_video_aqui" // Reemplaza con tu URL de video
                title="Tarjeta 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h3 className="text-xl sm:text-2xl lg:text-xl text-left font-bold text-gray-800">Mejoras en la Oferta</h3>
              <p className="text-sm sm:text-base text-gray-700 text-left w-64">
                Hacemos tu propuesta imposible de rechazar.
              </p>
              <div className="flex justify-center w-full">
                <a
                  href="#"
                  className="w-[200px] sm:w-[250px] lg:w-[200px] h-[40px] bg-[#222222] text-white text-sm font-semibold  rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
                >
                  Lee cómo podes convertir
                </a>
              </div>
            </div>
  
            {/* Tarjeta 2 */}
            <div className="flex flex-col space-y-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <iframe
                className="w-full h-[240px] lg:h-[240px] sm:h-[300px] rounded-xl" // Mantener tamaño para escritorio y más grande en tablet
                src="https://www.youtube.com/embed/tu_video_aqui" // Reemplaza con tu URL de video
                title="Tarjeta 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h3 className="text-xl sm:text-2xl lg:text-xl text-left font-bold text-gray-800">Investigación de Nicho</h3>
              <p className="text-sm sm:text-base text-gray-700 text-left w-full">
                Identificamos oportunidades clave y estrategias ganadoras.
              </p>
              <div className="flex justify-center w-full">
                <a
                  href="#"
                  className="w-[200px] sm:w-[250px] lg:w-[200px] h-[40px] bg-[#222222] text-white text-sm font-semibold rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
                >
                  A quién le vende?
                </a>
              </div>
            </div>
  
            {/* Tarjeta 3 */}
            <div className="flex flex-col space-y-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <iframe
                className="w-full h-[240px] lg:h-[240px] sm:h-[300px] rounded-xl" // Mantener tamaño para escritorio y más grande en tablet
                src="https://www.youtube.com/embed/tu_video_aqui" // Reemplaza con tu URL de video
                title="Tarjeta 3"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h3 className="text-xl sm:text-2xl lg:text-xl text-left font-bold text-gray-800">Diseño de Presentaciones</h3>
              <p className="text-sm sm:text-base text-gray-700 text-left w-full">
                Transmití profesionalismo con presentaciones automatizadas.
              </p>
              <div className="flex justify-center w-full">
                <a
                  href="#"
                  className="w-[200px] sm:w-[250px] lg:w-[200px] h-[40px] bg-[#222222] text-white text-sm  font-semibold rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
                >
                  Conoce más
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FifthBlock;
  