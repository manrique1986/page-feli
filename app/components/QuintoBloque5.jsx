import { FaClipboardCheck, FaCogs, FaTasks, FaChartLine } from 'react-icons/fa';  // Iconos adicionales

const FifthBlock = () => {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-24">
      <div className="mt-36">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {/* Tarjeta 1: Plan Básico */}
          <div className="flex flex-col bg-gradient-to-r from-[#F7F7F7] via-[#F1F5F9] to-[#E2E8F0] p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out transform h-full">
            {/* Párrafo arriba a la izquierda */}
            <p className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Básico</p>
            {/* Precio y texto */}
            <div className="flex items-center space-x-2">
              <span className="text-4xl font-extrabold text-gray-800">$150</span>
              <span className="text-sm text-gray-500">/mes</span>
            </div>
            {/* Iconos y características */}
            <div className="space-y-4 mt-6">
              <div className="flex items-center space-x-2">
                <FaClipboardCheck className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">2 Sesiones de Consultoría para Definir Visión y Misión</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaCogs className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Plantilla Básica para Objetivos SMART</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaTasks className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Documento Final de Visión y Misión</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaChartLine className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Feedback Inicial sobre Estrategia</p>
              </div>
            </div>
            {/* Botón alineado al final del contenedor */}
            <div className="flex justify-center mt-auto">
              <a
                href="https://link.mercadopago.com.ar/agenciafb"
                className="w-[200px] sm:w-[250px] lg:w-[200px] h-[45px] bg-black text-white text-lg font-semibold rounded-full flex items-center justify-center transition-all duration-300 ease-in-out transform hover:bg-gradient-to-r hover:from-[#FFD700] hover:to-[#FFC107] hover:scale-105"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Tarjeta 2: Plan Intermedio */}
          <div className="flex flex-col bg-gradient-to-r from-[#F7F7F7] via-[#F1F5F9] to-[#E2E8F0] p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out transform h-full">
            {/* Párrafo arriba a la izquierda */}
            <p className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Intermedio</p>
            {/* Precio y texto */}
            <div className="flex items-center space-x-2">
              <span className="text-4xl font-extrabold text-gray-800">$200</span>
              <span className="text-sm text-gray-500">/mes</span>
            </div>
            {/* Iconos y características */}
            <div className="space-y-4 mt-6">
              <div className="flex items-center space-x-2">
                <FaClipboardCheck className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Hasta 4 Sesiones de Consultoría Estratégica</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaCogs className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Definición Completa de Visión, Misión y Valores del Negocio</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaTasks className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Creación de Objetivos SMART Personalizados</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaChartLine className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Plantillas de Presentación Interna para Comunicar la Estrategia</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaChartLine className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Revisión Mensual de Progreso en la Implementación</p>
              </div>
            </div>
            {/* Botón alineado al final del contenedor */}
            <div className="flex justify-center mt-auto">
              <a
                href="https://link.mercadopago.com.ar/agenciafb"
                className="w-[200px] sm:w-[250px] lg:w-[200px] h-[45px] bg-black text-white text-lg font-semibold rounded-full flex items-center justify-center transition-all duration-300 ease-in-out transform hover:bg-gradient-to-r hover:from-[#FFD700] hover:to-[#FFC107] hover:scale-105"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Tarjeta 3: Plan Avanzado */}
          <div className="flex flex-col bg-gradient-to-r from-[#F7F7F7] via-[#F1F5F9] to-[#E2E8F0] p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out transform h-full">
            {/* Párrafo arriba a la izquierda */}
            <p className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Avanzado</p>
            {/* Precio y texto */}
            <div className="flex items-center space-x-2">
              <span className="text-4xl font-extrabold text-gray-800">$3500</span>
              <span className="text-sm text-gray-500">/mes</span>
            </div>
            {/* Iconos y características */}
            <div className="space-y-4 mt-6">
              <div className="flex items-center space-x-2">
                <FaClipboardCheck className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Procesos Estratégicos Ilimitados para Diferentes Equipos o Áreas</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaCogs className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Taller Completo para Definir Visión, Misión, Valores y Propósitos Estratégicos</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaTasks className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Implementación de Objetivos SMART con Dashboard de Seguimiento</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaChartLine className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Plantillas y Documentos Personalizados para la Gestión Estratégica</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaChartLine className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Asesoría 1 a 1 Mensual para Ajustar y Optimizar Estrategias</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaChartLine className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Reportes Detallados de Impacto y Seguimiento</p>
              </div>
            </div>
            {/* Botón alineado al final del contenedor */}
            <div className="flex justify-center mt-auto">
              <a
                href="https://link.mercadopago.com.ar/agenciafb"
                className="w-[200px] sm:w-[250px] lg:w-[200px] h-[45px] bg-black text-white text-lg font-semibold rounded-full flex items-center justify-center transition-all duration-300 ease-in-out transform hover:bg-gradient-to-r hover:from-[#FFD700] hover:to-[#FFC107] hover:scale-105"
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
