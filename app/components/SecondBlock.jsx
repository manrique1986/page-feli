const SecondBlock = () => {
    return (
      <div className="mt-8 w-full max-w-full">
        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
          {/* Imagen en lugar de video */}
          <img
            className="w-full h-full object-cover absolute top-0 left-0"
            src="https://res.cloudinary.com/dytpump6i/image/upload/v1738459578/WhatsApp_Image_2025-02-01_at_22.24.32_qtmbbo.jpg" // Reemplaza con la URL de tu imagen
            alt="Imagen personalizada"
        
          
          />
  
          {/* Contenido centrado sobre la imagen */}
           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white space-y-4 z-10 bg-[#B0846A] bg-opacity-75   px-4 sm:px-6 py-4 rounded-lg w-4/5 sm:w-3/4 lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-shadow-lg">
              Personaliza tu experiencia
            </h2>
            <p className="text-sm sm:text-lg max-w-xs sm:max-w-lg mx-auto">
              Agregá los toppings que mejor se adapten a tus necesidades y potenciá tus resultados.
            </p>
          </div> 
        </div>
      </div>
    );
  };
  
  export default SecondBlock;