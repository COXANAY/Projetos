import React from 'react';
import { Calendar, Clock, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const businessHours = [
    { day: 'Segunda - Sexta', hours: '08:00 - 19:00' },
    { day: 'Sábado', hours: '08:00 - 13:00' },
    { day: 'Domingo', hours: 'Fechado' },
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-ortho-100 text-ortho-800 mb-4">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Agende sua <span className="title-gradient">consulta</span>
          </h2>
          <p className="text-lg text-gray-600">
            Estamos prontos para atender você com o melhor tratamento ortopédico personalizado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-panel p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Entre em Contato</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ortho-500 focus:border-transparent transition-all"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ortho-500 focus:border-transparent transition-all"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ortho-500 focus:border-transparent transition-all"
                    placeholder="(00) 00000-0000"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="service">
                    Serviço Desejado
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ortho-500 focus:border-transparent transition-all"
                    required
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="Consulta">Consulta</option>
                    <option value="Traumatologia">Traumatologia</option>
                    <option value="Ortopedia Esportiva">Ortopedia Esportiva</option>
                    <option value="Cirurgia de Coluna">Cirurgia de Coluna</option>
                    <option value="Artroscopia">Artroscopia</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ortho-500 focus:border-transparent transition-all"
                  placeholder="Descreva brevemente sua necessidade ou condição"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="glass-panel p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="p-2 bg-ortho-100 rounded-md text-ortho-700">
                      <MapPin className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Endereço</h4>
                    <p className="text-gray-600">Av. Paulista, 1000 - Bela Vista<br />São Paulo - SP, 01310-100</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="p-2 bg-ortho-100 rounded-md text-ortho-700">
                      <Phone className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Telefone</h4>
                    <p className="text-gray-600">(11) 99999-9999</p>
                    <p className="text-gray-600">(11) 3333-3333</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="p-2 bg-ortho-100 rounded-md text-ortho-700">
                      <Mail className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">E-mail</h4>
                    <p className="text-gray-600">contato@drricardo.com.br</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-panel p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <Clock className="h-6 w-6 text-ortho-700 mr-2" />
                <h3 className="text-2xl font-bold">Horário de Atendimento</h3>
              </div>
              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                    <span className="font-medium">{schedule.day}</span>
                    <span className={`${schedule.hours === 'Fechado' ? 'text-red-500' : 'text-gray-600'}`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center bg-ortho-700 text-white p-6 rounded-2xl hover-card-animation">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2">Agende Online</h3>
              <p className="mb-4">Agende sua consulta de forma rápida e fácil através da nossa plataforma online.</p>
              <button className="px-6 py-2 bg-white text-ortho-700 rounded-md font-medium hover:bg-gray-100 transition-colors">
                Agendar Agora
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gray-100 rounded-2xl overflow-hidden h-80 shadow-md">
          <iframe 
            title="Localização da Clínica"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0977087430847!2d-46.65390882414747!3d-23.564610061606036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1689042242308!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;