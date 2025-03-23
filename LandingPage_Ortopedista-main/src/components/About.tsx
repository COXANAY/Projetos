import React from 'react';
import { Award, BookOpen, Clock, Stethoscope } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Clock className="h-6 w-6" />, value: '15+', label: 'Anos de Experiência' },
    { icon: <Stethoscope className="h-6 w-6" />, value: '5000+', label: 'Pacientes Atendidos' },
    { icon: <Award className="h-6 w-6" />, value: '12+', label: 'Prêmios Recebidos' },
    { icon: <BookOpen className="h-6 w-6" />, value: '30+', label: 'Artigos Publicados' },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-ortho-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-ortho-100 text-ortho-800 mb-4">
            Sobre Nós
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Conheça o <span className="title-gradient">Dr. Ricardo Silva</span>
          </h2>
          <p className="text-lg text-gray-600">
            Profissional dedicado e experiente, comprometido em oferecer os melhores tratamentos ortopédicos
            e cuidados personalizados para cada paciente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Formação e Experiência</h3>
              <p className="text-gray-600">
                Formado pela Universidade Federal de Medicina, com especialização em Ortopedia
                e Traumatologia pelo Instituto Nacional de Traumato-Ortopedia. Possui ampla 
                experiência em cirurgias ortopédicas, tratamentos conservadores e reabilitação.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="hover-card-animation p-4 rounded-lg border border-gray-100 bg-white shadow-sm">
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-ortho-100 rounded-md text-ortho-700">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Especialização em Cirurgia de Joelho</h4>
                      <p className="text-sm text-gray-600">Instituto de Ortopedia Avançada (2010-2012)</p>
                    </div>
                  </div>
                </div>

                <div className="hover-card-animation p-4 rounded-lg border border-gray-100 bg-white shadow-sm">
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-ortho-100 rounded-md text-ortho-700">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Fellowship em Ortopedia Esportiva</h4>
                      <p className="text-sm text-gray-600">Centro de Medicina Esportiva (2012-2013)</p>
                    </div>
                  </div>
                </div>

                <div className="hover-card-animation p-4 rounded-lg border border-gray-100 bg-white shadow-sm">
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-ortho-100 rounded-md text-ortho-700">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Doutorado em Ciências Médicas</h4>
                      <p className="text-sm text-gray-600">Universidade de Pesquisa Médica (2014-2018)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-ortho-600/20 to-ortho-200/20 rounded-2xl transform -rotate-3 scale-105"></div>
              <div className="glass-panel p-2 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Dr. Ricardo Silva em seu consultório" 
                  className="w-full h-auto rounded-xl object-cover max-w-md"
                  style={{aspectRatio: '4/3'}}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="hover-card-animation p-6 text-center glass-panel"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-ortho-100 text-ortho-700">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
