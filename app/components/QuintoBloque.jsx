import { FaProjectDiagram, FaChartLine, FaRegLightbulb, FaShareAlt } from 'react-icons/fa';  // Iconos adicionales

const FifthBlock = () => {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-24">
      <div className="mt-36">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {/* Tarjeta 1: Personal */}
          <div className="flex flex-col space-y-6 bg-gradient-to-r from-[#F7F7F7] via-[#F1F5F9] to-[#E2E8F0] p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out transform">
            {/* Párrafo arriba a la izquierda */}
            <p className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Personal</p>
            {/* Precio y texto */}
            <div className="flex items-center space-x-2">
              <span className="text-4xl font-extrabold text-gray-800">$50</span>
              <span className="text-sm text-gray-500">/p/month</span>
            </div>
            {/* Iconos y características */}
            <div className="space-y-4 mt-6">
              <div className="flex items-center space-x-2">
                <FaProjectDiagram className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">1 Project</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaChartLine className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Analytics</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaRegLightbulb className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Insights Panel</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaShareAlt className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Share Features</p>
              </div>
            </div>
            {/* Botón */}
            <div className="flex justify-center w-full">
              <a
                href="https://link.mercadopago.com.ar/agenciafb"
                className="w-[200px] sm:w-[250px] lg:w-[200px] h-[45px] bg-black text-white text-lg font-semibold rounded-full flex items-center justify-center transition-all duration-300 ease-in-out transform hover:bg-gradient-to-r hover:from-[#FFD700] hover:to-[#FFC107] hover:scale-105"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Tarjeta 2: Profesional */}
          <div className="flex flex-col space-y-6 bg-gradient-to-r from-[#F7F7F7] via-[#F1F5F9] to-[#E2E8F0] p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out transform">
            {/* Párrafo arriba a la izquierda */}
            <p className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Profesional</p>
            {/* Precio y texto */}
            <div className="flex items-center space-x-2">
              <span className="text-4xl font-extrabold text-gray-800">$100</span>
              <span className="text-sm text-gray-500">/p/month</span>
            </div>
            {/* Iconos y características */}
            <div className="space-y-4 mt-6">
              <div className="flex items-center space-x-2">
                <FaProjectDiagram className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">2 Projects</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaChartLine className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Analytics</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaRegLightbulb className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Insights Panel</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaShareAlt className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Share Features</p>
              </div>
            </div>
            {/* Botón */}
            <div className="flex justify-center w-full">
              <a
                href="https://link.mercadopago.com.ar/agenciafb"
                className="w-[200px] sm:w-[250px] lg:w-[200px] h-[45px] bg-black text-white text-lg font-semibold rounded-full flex items-center justify-center transition-all duration-300 ease-in-out transform hover:bg-gradient-to-r hover:from-[#FFD700] hover:to-[#FFC107] hover:scale-105"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Tarjeta 3: Business */}
          <div className="flex flex-col space-y-6 bg-gradient-to-r from-[#F7F7F7] via-[#F1F5F9] to-[#E2E8F0] p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out transform">
            {/* Párrafo arriba a la izquierda */}
            <p className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Business</p>
            {/* Precio y texto */}
            <div className="flex items-center space-x-2">
              <span className="text-4xl font-extrabold text-gray-800">$160</span>
              <span className="text-sm text-gray-500">/p/month</span>
            </div>
            {/* Iconos y características */}
            <div className="space-y-4 mt-6">
              <div className="flex items-center space-x-2">
                <FaProjectDiagram className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Unlimited Projects</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaChartLine className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Advanced Analytics</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaRegLightbulb className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Premium Insights</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaShareAlt className="text-2xl text-indigo-600" />
                <p className="text-base text-gray-700">Share Features</p>
              </div>
            </div>
            {/* Botón */}
            <div className="flex justify-center w-full">
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



