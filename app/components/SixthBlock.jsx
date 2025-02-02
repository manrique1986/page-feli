const SixthBlock = () => {
    return (
      <div className="mt-16 w-full max-w-full">
        <div className="relative w-full h-[600px] sm:h-[500px] md:h-[600px]">
          {/* Imagen de fondo */}
          <img
            className="w-full h-full object-cover absolute top-0 left-0"
            src="https://res.cloudinary.com/dytpump6i/image/upload/v1738459578/WhatsApp_Image_2025-02-01_at_22.24.32_qtmbbo.jpg" // Reemplaza con la URL de tu imagen
            alt="Imagen personalizada"
          />
  
          {/* Contenedor con fondo negro semi-transparente detrás del texto */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white space-y-6 z-10 px-6 py-4 bg-[#1B3A4B] bg-opacity-75  rounded-lg w-full max-w-3xl">
            {/* Título */}
            <h2 className="text-4xl sm:text-3xl md:text-4xl font-bold text-shadow-lg">
              Listo para transformar tu negocio
            </h2>
  
            {/* Párrafo */}
            <p className="text-lg sm:text-base max-w-3xl mx-auto">
              Estrategias diseñadas para vender más, automatizar procesos y conectar con tu audiencia de manera auténtica. 
              Construí un sistema que trabaje para vos mientras te enfocás en lo que realmente importa.
            </p>
  
            {/* Contenedor de botones */}
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-x-4 sm:space-y-0">
              <div className="bg-black bg-opacity-50 rounded-md py-3 px-8 w-full sm:w-auto">
                <a
                  href="#"
                  className="text-white text-lg font-semibold hover:bg-opacity-70 transition duration-300 block text-center"
                >
                  Quiero agendar mi primera llamada de onboarding!
                </a>
              </div>
              <div className="bg-black bg-opacity-50 rounded-md py-3 px-8 w-full sm:w-auto">
                <a
                  href="#"
                  className="text-white text-lg font-semibold hover:bg-opacity-70 transition duration-300 block text-center"
                >
                  Quiero conocer más sobre los topping en descuento!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SixthBlock;