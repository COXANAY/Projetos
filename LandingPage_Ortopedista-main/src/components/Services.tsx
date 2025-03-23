import React from 'react';
import { Activity, ArrowRight, Bone, Brain, Heart, StretchHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

const Services = () => {
  const services = [
    {
      icon: <Bone className="h-8 w-8" />,
      title: 'Traumatologia',
      description: 'Tratamento especializado para fraturas, lesões e traumas no sistema musculoesquelético.',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: 'Ortopedia Esportiva',
      description: 'Cuidados específicos para atletas e praticantes de atividades físicas, com foco na prevenção e recuperação de lesões.',
      color: 'bg-green-50 text-green-600',
    },
    {
      icon: <StretchHorizontal className="h-8 w-8" />,
      title: 'Cirurgia de Coluna',
      description: 'Procedimentos cirúrgicos avançados para tratamento de hérnias discais, estenose e outras patologias da coluna vertebral.',
      color: 'bg-purple-50 text-purple-600',
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Artroscopia',
      description: 'Técnica minimamente invasiva para diagnóstico e tratamento de lesões articulares, com recuperação mais rápida.',
      color: 'bg-red-50 text-red-600',
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'Osteoporose',
      description: 'Avaliação e tratamento da osteoporose, com foco na prevenção de fraturas e melhora da qualidade óssea.',
      color: 'bg-amber-50 text-amber-600',
    },
    {
      icon: <Bone className="h-8 w-8" />,
      title: 'Próteses Articulares',
      description: 'Substituição de articulações danificadas por artrose ou trauma, proporcionando alívio da dor e recuperação da mobilidade.',
      color: 'bg-teal-50 text-teal-600',
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-ortho-100 text-ortho-800 mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tratamentos ortopédicos <span className="title-gradient">especializados</span>
          </h2>
          <p className="text-lg text-gray-600">
            Oferecemos uma ampla gama de serviços ortopédicos com tecnologia avançada e 
            abordagem personalizada para cada paciente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="hover-card-animation p-6 rounded-xl bg-white border border-gray-100 shadow-sm"
            >
              <div className={cn("inline-flex items-center justify-center w-16 h-16 rounded-lg mb-4", service.color)}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a 
                href="#contact" 
                className="inline-flex items-center text-ortho-600 font-medium hover:text-ortho-700 transition-colors"
              >
                Saiba mais
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="btn-primary">
            Agendar Consulta
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;