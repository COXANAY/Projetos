import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ArrowUp, Calendar, Clock, Users } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-ortho-950 text-white dark:bg-gray-900">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="mb-6">
              <span className="text-2xl font-bold">Dr. Ortho</span>
            </div>
            <p className="text-gray-200 mb-6 dark:text-gray-300">
              Oferecemos tratamentos ortopédicos de excelência com atendimento humanizado e tecnologia avançada para sua saúde e bem-estar.
            </p>
            <div className="flex space-x-4 ">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/30 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/30 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/30 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/30 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white dark:text-gray-300">Links Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="text-gray-200 hover:text-white transition-colors dark:text-gray-300">Início</a>
              </li>
              <li>
                <a href="#about" className="text-gray-200 hover:text-white transition-colors dark:text-gray-300">Sobre</a>
              </li>
              <li>
                <a href="#services" className="text-gray-200 hover:text-white transition-colors dark:text-gray-300">Serviços</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-200 hover:text-white transition-colors dark:text-gray-300">Depoimentos</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-200 hover:text-white transition-colors dark:text-gray-300">Contato</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white dark:text-gray-300">Horários</h3>
            <ul className="space-y-4">
              <li className="flex">
                <Clock className="h-5 w-5 mt-0.5 mr-3 flex-shrink-0 text-ortho-400" />
                <div>
                  <span className="block text-white">Segunda a Sexta</span>
                  <span className="text-gray-300">08:00 - 19:00</span>
                </div>
              </li>
              <li className="flex">
                <Clock className="h-5 w-5 mt-0.5 mr-3 flex-shrink-0 text-ortho-400" />
                <div>
                  <span className="block text-white">Sábado</span>
                  <span className="text-gray-300">08:00 - 14:00</span>
                </div>
              </li>
              <li className="flex">
                <Calendar className="h-5 w-5 mt-0.5 mr-3 flex-shrink-0 text-ortho-400" />
                <div>
                  <span className="block text-white">Agendamento</span>
                  <span className="text-gray-300">Consultas com hora marcada</span>
                </div>
              </li>
              <li className="flex">
                <Users className="h-5 w-5 mt-0.5 mr-3 flex-shrink-0 text-ortho-400" />
                <div>
                  <span className="block text-white">Convênios</span>
                  <span className="text-gray-300">Aceitamos os principais planos</span>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contato</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mt-0.5 mr-3 flex-shrink-0 text-ortho-400" />
                <span className="text-gray-200 ">
                  Av. Paulista, 1000 - Bela Vista<br />São Paulo - SP, 01310-100
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mt-0.5 mr-3 flex-shrink-0 text-ortho-400" />
                <span className="text-gray-200">(11) 99999-9999</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mt-0.5 mr-3 flex-shrink-0 text-ortho-400" />
                <span className="text-gray-200">contato@drricardo.com.br</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Dr. Ricardo Silva. Todos os direitos reservados.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-sm text-gray-300">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Mapa do Site</a>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-ortho-600 p-3 rounded-full shadow-lg hover:bg-ortho-700 transition-colors z-40"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;