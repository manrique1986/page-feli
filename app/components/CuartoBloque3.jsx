const FourthBlock = () => {
    return (
      <div className="w-full px-4 sm:px-8 lg:px-24">
        {/* Primer bloque con título, párrafo e imagen */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-8">
          {/* Imagen a la izquierda */}
          <div className="flex justify-center items-center">
            <div className="relative w-full lg:w-[450px] h-[300px] rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-xl"
                src=""
                alt="Imagen 1"
              />
            </div>
          </div>
  
          {/* Título y párrafo a la derecha */}
          <div className="text-left space-y-4 mt-8 lg:mt-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800">
            Acompañamiento 1 a 1:
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 w-full sm:w-72">
            Tendrás acceso a una asesoría personalizada donde trabajaremos juntos en cada área clave de tu negocio.
            </p>
  
            {/* Botón debajo del párrafo */}
            <div className="flex justify-start">
              <a
                href="/page3"
                className="w-full sm:w-[300px] lg:w-[360px] h-[40px] sm:h-[50px] bg-[#222222] text-white text-sm sm:text-lg font-semibold rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
              >
                Comencemos
              </a>
            </div>
          </div>
        </div>
  
        {/* Segundo bloque con título, párrafo e imagen */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-16">
          {/* Imagen a la derecha */}
          <div className="flex justify-center items-center">
            <div className="relative w-full lg:w-[450px] h-[300px] rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-xl"
                src=""
                alt="Imagen 2"
              />
            </div>
          </div>
  
          {/* Título y párrafo a la izquierda */}
          <div className="text-left space-y-4 mt-8 lg:mt-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800">
            Resolución y enfoque: 
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 w-full sm:w-72">
            Centramos que las soluciones sean 100% adaptadas a tu negocio. El enfoque claro va a hacer que dirijamos todas las acciones a ese objetivo
            </p>
  
            {/* Botón debajo del párrafo */}
            <div className="flex justify-start">
              <a
                href="#"
                className="w-full sm:w-[300px] lg:w-[360px] h-[40px] sm:h-[50px] bg-[#222222] text-white text-sm sm:text-lg font-semibold rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
              >
                Coordina tu comienzo
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FourthBlock;