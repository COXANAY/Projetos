import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Update document title
    document.title = 'Página Não Encontrada | Dr. Ricardo Silva';
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-ortho-50 px-4">
      <div className="glass-panel p-8 md:p-12 max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-ortho-100 text-ortho-700">
          <span className="text-4xl font-bold">404</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">Página não encontrada</h1>
        <p className="text-gray-600 mb-8">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/" 
            className="btn-primary flex items-center justify-center"
          >
            <Home className="mr-2 h-5 w-5" />
            Voltar ao Início
          </a>
          <button 
            onClick={() => window.history.back()} 
            className="btn-secondary flex items-center justify-center"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
