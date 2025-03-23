import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative pt-20 min-h-screen flex items-center overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-ortho-200 rounded-full filter blur-3xl opacity-50 animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-1/4 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-40 animate-pulse-slow"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6 max-w-xl">
              <div className="inline-block animate-slide-in-left">
                <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-ortho-100 text-ortho-800">
                  Ortopedista Especializado
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight animate-slide-up">
                Cuidados ortopédicos <span className="title-gradient">de excelência</span> para sua saúde
              </h1>
              
              <p className="text-lg text-gray-600 animate-slide-up" style={{animationDelay: '0.1s'}}>
                Tratamentos avançados e personalizados para lesões musculoesqueléticas, 
                articulações e coluna vertebral, proporcionando alívio da dor e recuperação eficaz.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
                <a href="#contact" className="btn-primary">
                  Agendar Consulta
                  <Calendar className="ml-2 h-5 w-5" />
                </a>
                <a href="#services" className="btn-secondary">
                  Nossos Serviços
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
              
              <div className="flex items-center space-x-4 pt-6 animate-slide-up" style={{animationDelay: '0.3s'}}>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className={cn(
                        "w-10 h-10 rounded-full border-2 border-white",
                        `bg-ortho-${i * 100}`
                      )}
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <p className="text-gray-500">Mais de <span className="font-semibold text-ortho-700">1,000+ pacientes</span></p>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-1 text-gray-600">5.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-ortho-600/20 to-ortho-200/20 rounded-2xl transform rotate-6 scale-105"></div>
              <div className="glass-panel p-2 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" 
                  alt="Médico ortopedista" 
                  className="w-full h-auto rounded-xl object-cover max-w-md"
                  style={{aspectRatio: '3/4'}}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-panel p-4 animate-fade-in" style={{animationDelay: '0.5s'}}>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-green-100">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Dr. Ricardo Silva</p>
                    <p className="text-xs text-gray-600">CRM 12345 - Ortopedista</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;