import { FaProjectDiagram, FaChartLine, FaRegLightbulb, FaShareAlt } from 'react-icons/fa';  // Iconos adicionales

const FifthBlock = () => {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-24">
      <div className="mt-36">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {/* Tarjeta 1: Plan Personalizado */}
          <div className="flex flex-col bg-gradient-to-r from-[#F7F7F7] via-[#F1F5F9] to-[#E2E8F0] p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out transform h-full">
            {/* Párrafo arriba a la izquierda */}
            <p className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Plan Personalizado</p>
            {/* Precio y texto */}
            <div className="flex items-center space-x-2">
              <span className="text-4xl font-extrabold text-gray-800">$40</span>
              <span className="text-sm text-gray-500">/mes</span>
            </div>
            {/* Iconos y características */}
            <div className="space-y-4 mt-6">
              <div className="flex items-center space-x-2">
                <FaProjectDiagram className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Diagnóstico</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaChartLine className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">2 llamadas estratégicas cada semana</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaRegLightbulb className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Revisión de resultados</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaShareAlt className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Acompañamiento de 2 semanas</p>
              </div>
            </div>
            {/* Botón alineado al final del contenedor */}
            <div className="flex justify-center mt-auto">
              <a
                href="https://link.mercadopago.com.ar/agenciafb"
                className="w-[200px] sm:w-[250px] lg:w-[200px] h-[45px] bg-[#B0846A] text-white text-lg font-semibold rounded-full flex items-center justify-center transition-all duration-300 ease-in-out transform hover:bg-gradient-to-r hover:from-[#FFD700] hover:to-[#FFC107] hover:scale-105"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Tarjeta 2: Plan Profesional */}
          <div className="flex flex-col bg-gradient-to-r from-[#F7F7F7] via-[#F1F5F9] to-[#E2E8F0] p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out transform h-full">
            {/* Párrafo arriba a la izquierda */}
            <p className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Plan Profesional</p>
            {/* Precio y texto */}
            <div className="flex items-center space-x-2">
              <span className="text-4xl font-extrabold text-gray-800">$80</span>
              <span className="text-sm text-gray-500">/mes</span>
            </div>
            {/* Iconos y características */}
            <div className="space-y-4 mt-6">
              <div className="flex items-center space-x-2">
                <FaProjectDiagram className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Diagnóstico + 2 sesiones a la semana</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaChartLine className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Guías y estrategias personalizadas</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaRegLightbulb className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Acompañamiento de un mes</p>
              </div>
            </div>
            {/* Botón alineado al final del contenedor */}
            <div className="flex justify-center mt-auto">
              <a
                href="https://link.mercadopago.com.ar/agenciafb"
                className="w-[200px] sm:w-[250px] lg:w-[200px] h-[45px] bg-[#B0846A] text-white text-lg font-semibold rounded-full flex items-center justify-center transition-all duration-300 ease-in-out transform hover:bg-gradient-to-r hover:from-[#FFD700] hover:to-[#FFC107] hover:scale-105"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Tarjeta 3: Plan Avanzado */}
          <div className="flex flex-col bg-gradient-to-r from-[#F7F7F7] via-[#F1F5F9] to-[#E2E8F0] p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out transform h-full">
            {/* Párrafo arriba a la izquierda */}
            <p className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Plan Avanzado</p>
            {/* Precio y texto */}
            <div className="flex items-center space-x-2">
              <span className="text-4xl font-extrabold text-gray-800">$170</span>
              <span className="text-sm text-gray-500">/mes</span>
            </div>
            {/* Iconos y características */}
            <div className="space-y-4 mt-6">
              <div className="flex items-center space-x-2">
                <FaProjectDiagram className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Diagnóstico + 3 sesiones a la semana</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaChartLine className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Plan completo de acción</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaRegLightbulb className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Revisión constante</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaShareAlt className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Resolución de problemas y medición de resultados</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaShareAlt className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Acompañamiento por un mes y medio</p>
              </div>
            </div>
            {/* Botón alineado al final del contenedor */}
            <div className="flex justify-center mt-auto">
              <a
                href="https://link.mercadopago.com.ar/agenciafb"
                className="w-[200px] sm:w-[250px] lg:w-[200px] h-[45px] bg-[#B0846A] text-white text-lg font-semibold rounded-full flex items-center justify-center transition-all duration-300 ease-in-out transform hover:bg-gradient-to-r hover:from-[#FFD700] hover:to-[#FFC107] hover:scale-105"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthBlock;





