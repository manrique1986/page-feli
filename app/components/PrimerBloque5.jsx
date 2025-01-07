const PrimerBloque = () => {
    return (
      <div className="flex flex-col items-center justify-center p-4">
        {/* Titulo centrado */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-8" style={{ color: '#001122' }}>
        Conocé porque tu negocio no tiene ese "todos para el mismo lado"
        </h1>
  
        {/* Primer Video embebido de YouTube */}
        <div className="mb-8 w-full max-w-3xl">
          <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}> {/* Relación de aspecto 16:9 */}
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/gKsgiaIH3d0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
  
        {/* Párrafo explicativo con diseño limpio y dinámico */}
        <p className="text-center text-base sm:text-lg lg:text-xl font-medium text-gray-700 mx-auto leading-relaxed sm:leading-relaxed lg:leading-relaxed mb-6 lg:w-8/12 px-6 sm:px-8">
        Dejá de perder tiempo y energía en procesos desorganizados. Lográ que cada miembro de tu equipo esté alineado con las metas de tu negocio. Nosotros te ayudamos a definir tu visión, estructurar tus procesos y enfocar tus esfuerzos hacia resultados medibles.


        </p>
  
        {/* Botón "Acceder" */}
        <a
          href="#"
          className="mt-6 w-full sm:w-[300px] md:w-[400px] lg:w-[564px] h-[45px] bg-[#222222] text-white text-lg font-semibold rounded-xl flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
        >
          Acceder
        </a>
      </div>
    );
  };
  
  export default PrimerBloque;