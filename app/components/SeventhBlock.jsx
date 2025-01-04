"use client"; // Asegura que el código se ejecute en el cliente, para React

import { useState } from 'react';
import Footer from './Footer';

const SeventhBlock = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleToggle = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="mt-16 w-full max-w-full">
      <div className="relative w-full">
        {/* Contenedor con gradiente de fondo */}
        <div className=" text-center text-black z-10">
          {/* Título completamente centrado */}
          <h2 className="text-4xl sm:text-3xl md:text-4xl font-bold text-shadow-lg ">
            FAQ
          </h2>
        </div>

        {/* Contenedor de las preguntas y respuestas */}
        <div className="max-w-3xl mx-auto px-6 sm:px-4 mt-12 mb-40"> {/* Agregué mb-20 para margen abajo */}
          {/* Lista de preguntas y respuestas */}
          <div className="text-lg space-y-4">
            {[
              {
                question: '¿Cómo puedo agendar mi llamada de diagnóstico?',
                answer: 'Es muy fácil. Solo hacé clic en el botón "Agendar mi llamada" que encontrarás en esta página. Serás redirigido/a a nuestro calendario, donde podés elegir el día y horario que mejor se adapte a vos. ¡Nos aseguramos de que la llamada sea directa, clara y totalmente personalizada!',
              },
              {
                question: '¿Qué son los toppings y cómo puedo adquirirlos?',
                answer: 'Los toppings son servicios adicionales que podés agregar para potenciar aún más tu proyecto. Estos incluyen opciones como automatización avanzada, videos extra o campañas específicas. Podés adquirirlos durante el proceso de diagnóstico o en cualquier momento del servicio. Solo tenés que mencionarlo y lo integramos al plan.',
              },
              {
                question: '¿Cómo funciona el sistema de afiliación?',
                answer: 'Nuestro sistema de afiliación está diseñado para que puedas recomendar nuestros servicios y obtener recompensas exclusivas por cada referido que se convierta en cliente. Una vez que formes parte de nuestro sistema, te brindaremos un enlace único o código que podés compartir. Por cada cliente referido, recibirás un porcentaje de comisión o beneficios adicionales para tus próximos proyectos.',
              },
              {
                question: '¿Cuánto tiempo toma el proceso de creación del funnel?',
                answer: 'El tiempo promedio es de una semana desde que recibimos todos los materiales. Sin embargo, este tiempo puede variar según la complejidad del proyecto y los ajustes necesarios. Durante el proceso, te mantendremos actualizado/a sobre cada etapa.',
              },
              {
                question: 'Ejemplo de Call to Action Final para FAQ',
                answer: '"¿Tenés más preguntas? Agendá tu llamada ahora y respondemos todas tus dudas personalmente. ¡Estamos listos para ayudarte a escalar tu negocio!"',
              },
            ].map((item, index) => (
              <div key={index} className="border-b border-black pb-4">
                {/* Pregunta */}
                <button
                  className="w-full text-left font-semibold text-lg sm:text-base hover:text-gray-600"
                  onClick={() => handleToggle(index)}
                >
                  {item.question}
                </button>

                {/* Respuesta (con animación para evitar que se mueva el layout) */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    activeQuestion === index ? 'max-h-[500px] p-2' : 'max-h-0 p-0'
                  }`}
                >
                  <p className="mt-2 text-gray-700">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeventhBlock;