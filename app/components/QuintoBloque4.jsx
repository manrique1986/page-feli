import { FaProjectDiagram, FaChartLine, FaRegLightbulb, FaShareAlt } from 'react-icons/fa';  // Iconos adicionales

const FifthBlock = () => {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-24">
      <div className="mt-36">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {/* Tarjeta 1: Plan Personal */}
          <div className="flex flex-col bg-gradient-to-r from-[#F7F7F7] via-[#F1F5F9] to-[#E2E8F0] p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out transform h-full">
            {/* Párrafo arriba a la izquierda */}
            <p className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Personal</p>
            {/* Precio y texto */}
            <div className="flex items-center space-x-2">
              <span className="text-4xl font-extrabold text-gray-800">$200</span>
              <span className="text-sm text-gray-500">/mes</span>
            </div>
            {/* Iconos y características */}
            <div className="space-y-4 mt-6">
              <div className="flex items-center space-x-2">
                <FaProjectDiagram className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">1 Proceso de Onboarding</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaChartLine className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">2 Encuestas</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaRegLightbulb className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Seguimiento Básico (Correos Automáticos)</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaShareAlt className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Reporte Mensual de Progreso</p>
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
            <p className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Profesional</p>
            {/* Precio y texto */}
            <div className="flex items-center space-x-2">
              <span className="text-4xl font-extrabold text-gray-800">$350</span>
              <span className="text-sm text-gray-500">/mes</span>
            </div>
            {/* Iconos y características */}
            <div className="space-y-4 mt-6">
              <div className="flex items-center space-x-2">
                <FaProjectDiagram className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Hasta 3 Procesos de Onboarding</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaChartLine className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">3 Encuestas + análisis + diagnóstico</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaRegLightbulb className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Seguimiento Personalizado (Correos + Mensajes Directos)</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaShareAlt className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Reportes Detallados de Métricas de Retención</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaShareAlt className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Estrategias Básicas de Fidelización</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaShareAlt className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Mapa de seguimiento en llamadas</p>
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

          {/* Tarjeta 3: Plan Business */}
          <div className="flex flex-col bg-gradient-to-r from-[#F7F7F7] via-[#F1F5F9] to-[#E2E8F0] p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out transform h-full">
            {/* Párrafo arriba a la izquierda */}
            <p className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Business</p>
            {/* Precio y texto */}
            <div className="flex items-center space-x-2">
              <span className="text-4xl font-extrabold text-gray-800">$500</span>
              <span className="text-sm text-gray-500">/mes</span>
            </div>
            {/* Iconos y características */}
            <div className="space-y-4 mt-6">
              <div className="flex items-center space-x-2">
                <FaProjectDiagram className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Procesos de Onboarding Ilimitados</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaChartLine className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Análisis Avanzado de Feedback + Diagnóstico</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaRegLightbulb className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Seguimiento Completo (Correos, Mensajes y Llamadas)</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaShareAlt className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Dashboard en Tiempo Real para Monitorear Retención</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaShareAlt className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Diseño de Programas de Fidelización Personalizados</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaShareAlt className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Consultoría Mensual 1 a 1 con 3 sesiones semanales</p>
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
