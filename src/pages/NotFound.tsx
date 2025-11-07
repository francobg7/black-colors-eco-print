import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <SEO 
        title="Página no encontrada" 
        description="Lo sentimos, la página que estás buscando no existe."
        noIndex={true} // Importante: indicamos a los buscadores que no indexen esta página
      />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center px-4 max-w-md mx-auto">
          <div className="mb-8">
            <div className="text-8xl font-bold text-green-600 mb-4">404</div>
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">
              Página no encontrada
            </h1>
            <p className="text-gray-600 mb-8">
              Lo sentimos, la página que estás buscando no existe o ha sido movida.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link 
              to="/" 
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Volver al inicio
            </Link>
            
            <div className="text-sm text-gray-500">
              <p>Ruta solicitada: <code className="bg-gray-200 px-2 py-1 rounded text-xs">{location.pathname}</code></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
