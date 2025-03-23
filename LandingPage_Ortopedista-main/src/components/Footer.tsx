import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-ortho-950 text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="mb-6">
              <span className="text-2xl font-bold">Dr. Ortho</span>
            </div>
            <p className="text-gray-300 mb-6">
              Oferecemos tratamentos ortopédicos de excelência com atendimento humanizado e tecnologia avançada para sua saúde e bem-estar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Depoimentos</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Serviços</h3>
            <ul className="space-y-4">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Traumatologia</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Ortopedia Esportiva</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Cirurgia de Coluna</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Artroscopia</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Osteoporose</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-300">
                  Av. Paulista, 1000 - Bela Vista<br />São Paulo - SP, 01310-100
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-300">(11) 99999-9999</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-300">contato@drricardo.com.br</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Dr. Ricardo Silva. Todos os direitos reservados.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-sm text-gray-400">
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
