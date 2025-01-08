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
                src="https://res.cloudinary.com/dytpump6i/image/upload/v1736290432/DALL_E_2025-01-07_18.39.49_-_A_professional_graphic_design_for_measurable_objectives_structuring_using_kwpxoq.webp"
                alt="Imagen 1"
              />
            </div>
          </div>
  
          {/* Título y párrafo a la derecha */}
          <div className="text-left space-y-4 mt-8 lg:mt-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800">
            Estructuración de Objetivos Medibles:
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 w-full sm:w-72">
            Conectamos acciones diarias con metas trimestrales y anuales.
            </p>
  
            {/* Botón debajo del párrafo */}
            <div className="flex justify-start">
              <a
                href="https://wa.me/+543585411552"
           target="_blank"
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
                src="https://res.cloudinary.com/dytpump6i/image/upload/v1736290398/DALL_E_2025-01-07_18.40.25_-_A_professional_graphic_design_for_team_optimization_using_the_colors_blac_qvhgco.webp"
                alt="Imagen 2"
              />
            </div>
          </div>
  
          {/* Título y párrafo a la izquierda */}
          <div className="text-left space-y-4 mt-8 lg:mt-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800">
            Optimización del Equipo:
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 w-full sm:w-72">
            Herramientas para asignar tareas y medir resultados.
            Capacitación para que cada miembro entienda su rol y cómo contribuye al éxito del negocio.
            </p>
  
            {/* Botón debajo del párrafo */}
            <div className="flex justify-start">
              <a
             href="https://wa.me/+543585411552"
           target="_blank"
                className="w-full sm:w-[300px] lg:w-[360px] h-[40px] sm:h-[50px] bg-[#222222] text-white text-sm sm:text-lg font-semibold rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
              >
           Ver Todos los Detalles
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FourthBlock;