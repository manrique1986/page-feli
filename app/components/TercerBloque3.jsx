import Link from 'next/link';

const ThirdBlock = () => {
  return (
    <div className="w-full py-12 px-4 md:px-8"> {/* Padding horizontal en todo el contenedor */}
      {/* Primer diseño: imagen a la izquierda y texto a la derecha */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Imagen a la izquierda */}
        <div className="w-full h-[300px] sm:h-[450px] md:h-[500px] px-4 md:px-8">
          <div className="relative w-full h-full overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-cover rounded-xl"
              src="https://res.cloudinary.com/dytpump6i/image/upload/v1736290173/DALL_E_2025-01-07_18.34.16_-_A_professional_personalized_diagnosis_graphic_design_using_the_colors_bla_j9l6cw.webp"
              alt="Imagen descriptiva"
            />
          </div>
        </div>

        {/* Texto a la derecha */}
        <div className="text-left space-y-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B3A4B]">Diagnóstico Personalizado:</h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-[#1B3A4B] max-w-full sm:w-80">
          Analizamos a fondo tus procesos, estrategias actuales y objetivos para entender qué necesita tu negocio.
          </p>

          {/* Botón debajo del texto */}
          <Link
            href="https://wa.me/+543585411552"
            target="_blank"
            className="w-full max-w-[320px] h-[50px] bg-[#B0846A] text-white text-lg font-semibold rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
          >
            Más información
          </Link>
        </div>
      </div>

      {/* Segundo diseño: imagen a la derecha y texto a la izquierda */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
        {/* Texto a la izquierda */}
        <div className="text-left ml-32 space-y-6 mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B3A4B]">Plan de Acción Hecho a Medida:</h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-[#1B3A4B] max-w-full sm:w-80">
          Creamos una estrategia paso a paso diseñada específicamente para tus necesidades y metas.
          </p>

          {/* Botón debajo del texto */}
          <a
            href="https://wa.me/+543585411552"
            target="_blank"
            className="w-full max-w-[320px] h-[50px] bg-[#B0846A] text-white text-lg font-semibold rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
          >
           Quiero más información
          </a>
        </div>

        {/* Imagen a la derecha */}
        <div className="w-full h-[300px] sm:h-[450px] md:h-[500px] px-4 md:px-8">
          <div className="relative w-full h-full overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-cover rounded-xl"
              src="https://res.cloudinary.com/dytpump6i/image/upload/v1736290265/DALL_E_2025-01-07_18.34.57_-_A_professional_custom_action_plan_graphic_design_using_the_colors_black_ozqyp4.webp"
              alt="Imagen descriptiva"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdBlock;