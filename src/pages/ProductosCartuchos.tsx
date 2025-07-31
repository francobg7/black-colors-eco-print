
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';

const ProductosCartuchos = () => {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0f3d2e 0%, #2f9e44 50%, #3d7b4f 100%)' }}>
      <div className="container mx-auto px-6 py-20">
        <div className="mb-8">
          <Link 
            to="/productos" 
            className="inline-flex items-center space-x-2 text-green-lime hover:text-green-mint transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver a Productos</span>
          </Link>
        </div>
        
        <div className="text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-8" style={{ color: '#d7f2db' }}>
            CARTUCHOS Y TONERS
          </h1>
          <p className="text-xl sm:text-2xl lg:text-4xl mb-12" style={{ color: '#c3e8a4' }}>
            Contenido próximamente
          </p>
          <div className="text-lg" style={{ color: '#c3e8a4' }}>
            Descubre nuestra selección de cartuchos y toners de alta calidad
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductosCartuchos;
