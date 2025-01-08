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
                src="https://res.cloudinary.com/dytpump6i/image/upload/v1736289804/DALL_E_2025-01-07_18.32.18_-_A_professional_loyalty_strategy_graphic_design_using_the_colors_black_gr_njbwar.webp"
                alt="Imagen 1"
              />
            </div>
          </div>
  
          {/* Título y párrafo a la derecha */}
          <div className="text-left space-y-4 mt-8 lg:mt-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800">
            Fidelización Estratégica:
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 w-full sm:w-72">
            Desarrollamos programas de recompensas, descuentos exclusivos y campañas de retención para mantener viva la relación con tus clientes.
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
                src="https://res.cloudinary.com/dytpump6i/image/upload/v1736290006/DALL_E_2025-01-07_18.32.52_-_A_professional_continuous_improvement_graphic_design_using_the_colors_bla_dy9jdn.webp"
                alt="Imagen 2"
              />
            </div>
          </div>
  
          {/* Título y párrafo a la izquierda */}
          <div className="text-left space-y-4 mt-8 lg:mt-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800">
            Análisis y Mejora Continua:
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 w-full sm:w-72">
            Te ayudamos a recopilar opiniones y feedback para mejorar tu servicio constantemente y adaptarlo a las necesidades de tus clientes.
            </p>
  
            {/* Botón debajo del párrafo */}
            <div className="flex justify-start">
              <a
              href="https://wa.me/+543585411552"
           target="_blank"
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