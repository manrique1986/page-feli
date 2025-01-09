import { FaProjectDiagram, FaChartLine, FaRegLightbulb, FaShareAlt } from 'react-icons/fa';  // Iconos adicionales

const FifthBlock = () => {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-24">
      <div className="mt-36">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {/* Tarjeta 1: Plan Inicial */}
          <div className="flex flex-col space-y-6 bg-gradient-to-r from-[#F7F7F7] via-[#F1F5F9] to-[#E2E8F0] p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out transform">
            {/* Párrafo arriba a la izquierda */}
            <p className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Plan Inicial</p>
            {/* Precio y texto */}
            <div className="flex items-center space-x-2">
              <span className="text-4xl font-extrabold text-gray-800">$70</span>
              <span className="text-sm text-gray-500">/p/month</span>
            </div>
            {/* Iconos y características */}
            <div className="space-y-4 mt-6 flex-grow">
              <div className="flex items-center space-x-2">
                <FaProjectDiagram className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Análisis de necesidades del cliente y su negocio</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaChartLine className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Configuración Básica: Ajuste inicial del GPT para tareas específicas</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaRegLightbulb className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Entrenamiento con datos genéricos para aprendizaje funcional</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaShareAlt className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Documentación Inicial: Guía básica para el uso del GPT</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaShareAlt className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Seguimiento y Ajustes: 1 llamada estratégica</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaShareAlt className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Corrección de errores y mejoras durante la primera semana</p>
              </div>
            </div>
            {/* Botón alineado al final */}
            <div className="mt-6 flex justify-center w-full">
              <a
                href="https://link.mercadopago.com.ar/agenciafb"
                className="w-[200px] sm:w-[250px] lg:w-[200px] h-[45px] bg-black text-white text-lg font-semibold rounded-full flex items-center justify-center transition-all duration-300 ease-in-out transform hover:bg-gradient-to-r hover:from-[#FFD700] hover:to-[#FFC107] hover:scale-105"
              >
                Comencemos
              </a>
            </div>
          </div>

          {/* Tarjeta 2: Plan Profesional */}
          <div className="flex flex-col space-y-6 bg-gradient-to-r from-[#F7F7F7] via-[#F1F5F9] to-[#E2E8F0] p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out transform">
            {/* Párrafo arriba a la izquierda */}
            <p className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Plan Profesional</p>
            {/* Precio y texto */}
            <div className="flex items-center space-x-2">
              <span className="text-4xl font-extrabold text-gray-800">$140</span>
              <span className="text-sm text-gray-500">/p/month</span>
            </div>
            {/* Iconos y características */}
            <div className="space-y-4 mt-6 flex-grow">
              <div className="flex items-center space-x-2">
                <FaProjectDiagram className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Diagnóstico y Consultoría Estratégica: Entrevista inicial</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaChartLine className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Configuración Avanzada: Desarrollo del GPT adaptado a workflows</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaRegLightbulb className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Entrenamiento Personalizado con datos específicos del negocio</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaShareAlt className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Soporte Activo y Optimización: 2 sesiones estratégicas</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaShareAlt className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Resolución de problemas iniciales y acompañamiento durante 2 semanas</p>
              </div>
            </div>
            {/* Botón alineado al final */}
            <div className="mt-6 flex justify-center w-full">
              <a
                href="https://link.mercadopago.com.ar/agenciafb"
                className="w-[200px] sm:w-[250px] lg:w-[200px] h-[45px] bg-black text-white text-lg font-semibold rounded-full flex items-center justify-center transition-all duration-300 ease-in-out transform hover:bg-gradient-to-r hover:from-[#FFD700] hover:to-[#FFC107] hover:scale-105"
              >
                Comencemos
              </a>
            </div>
          </div>

          {/* Tarjeta 3: Plan Premium */}
          <div className="flex flex-col space-y-6 bg-gradient-to-r from-[#F7F7F7] via-[#F1F5F9] to-[#E2E8F0] p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out transform">
            {/* Párrafo arriba a la izquierda */}
            <p className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Plan Premium</p>
            {/* Precio y texto */}
            <div className="flex items-center space-x-2">
              <span className="text-4xl font-extrabold text-gray-800">$200</span>
              <span className="text-sm text-gray-500">/p/month</span>
            </div>
            {/* Iconos y características */}
            <div className="space-y-4 mt-6 flex-grow">
              <div className="flex items-center space-x-2">
                <FaProjectDiagram className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Consultoría Estratégica Completa: Diseño y mapeo de procesos avanzados</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaChartLine className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Desarrollo Avanzado: GPT multifuncional con capacidades avanzadas</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaRegLightbulb className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Entrenamiento intensivo con datos históricos y específicos</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaShareAlt className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Soporte Premium: 4 sesiones estratégicas</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaShareAlt className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Acompañamiento con soporte 24/7 durante 1 mes</p>
              </div>
            </div>
            {/* Botón alineado al final */}
            <div className="mt-6 flex justify-center w-full">
              <a
                href="https://link.mercadopago.com.ar/agenciafb"
                className="w-[200px] sm:w-[250px] lg:w-[200px] h-[45px] bg-black text-white text-lg font-semibold rounded-full flex items-center justify-center transition-all duration-300 ease-in-out transform hover:bg-gradient-to-r hover:from-[#FFD700] hover:to-[#FFC107] hover:scale-105"
              >
                Comencemos
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthBlock;






