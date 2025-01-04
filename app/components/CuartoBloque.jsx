const FourthBlock = () => {
    return (
      <div className="w-full px-4 sm:px-8 lg:px-24">
        {/* Primer bloque con título, párrafo e imagen */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-8">
          {/* Imagen a la izquierda */}
          <div className="flex justify-center items-center">
            <div className="relative w-full lg:w-[450px] h-0" style={{ paddingBottom: '56.25%' }}>
              <img
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                src="/path/to/image1.jpg" // Reemplaza con la ruta de tu imagen
                alt="Imagen 1"
              />
            </div>
          </div>
  
          {/* Título y párrafo a la derecha */}
          <div className="text-left space-y-4 mt-8 lg:mt-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800">
              Soporte Inicial:
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 w-full sm:w-72">
              30 días de asistencia técnica para resolver cualquier inconveniente y optimizar el sistema.
            </p>
  
            {/* Botón debajo del párrafo */}
            <div className="flex justify-start">
              <a
                href="#"
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
            <div className="relative w-full lg:w-[450px] h-0" style={{ paddingBottom: '56.25%' }}>
              <img
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                src="/path/to/image2.jpg" // Reemplaza con la ruta de tu imagen
                alt="Imagen 2"
              />
            </div>
          </div>
  
          {/* Título y párrafo a la izquierda */}
          <div className="text-left space-y-4 mt-8 lg:mt-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800">
              ¿Qué ganás con este topping?
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 w-full sm:w-72">
              Liberá tiempo
              <br />
              Evitá errores
              <br />
              Crecé con eficiencia
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
  