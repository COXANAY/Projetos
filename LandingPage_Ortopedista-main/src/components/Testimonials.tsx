import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const Testimonials = () => {
  const testimonials = [
    {
      content: "Após anos sofrendo com dores no joelho, finalmente encontrei uma solução duradoura com o Dr. Ricardo. Sua abordagem foi clara, segura e eficaz. Hoje posso voltar a praticar esportes sem limitações.",
      author: "Carlos Mendes",
      position: "Professor, 45 anos",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      content: "A cirurgia de coluna que realizei com o Dr. Ricardo mudou completamente minha qualidade de vida. Sua equipe é extremamente profissional e atenciosa, me senti segura durante todo o processo.",
      author: "Ana Paula Santos",
      position: "Advogada, 38 anos",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      content: "Meu filho se recuperou rapidamente de uma fratura no braço graças ao excelente atendimento do Dr. Ricardo. Sua paciência e cuidado com crianças é admirável, e os resultados foram perfeitos.",
      author: "Márcia Oliveira",
      position: "Engenheira, 41 anos",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-ortho-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-ortho-100 text-ortho-800 mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            O que nossos <span className="title-gradient">pacientes dizem</span>
          </h2>
          <p className="text-lg text-gray-600">
            Conheça as histórias de sucesso e a experiência de quem já passou por nossos tratamentos.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="glass-panel p-8 md:p-10">
                    <Quote className="h-12 w-12 text-ortho-300 mb-6" />
                    <p className="text-lg md:text-xl text-gray-700 mb-8">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                        className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                      />
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold">{testimonial.author}</h4>
                        <p className="text-gray-600">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentIndex ? "bg-ortho-600 w-6" : "bg-ortho-200"
                )}
                aria-label={`Ir para o depoimento ${index + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-gray-700 hover:text-ortho-600 transition-colors"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-6 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-gray-700 hover:text-ortho-600 transition-colors"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
