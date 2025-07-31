
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

const Productos = () => {
  const productLines = [
    {
      id: 'impresoras',
      title: 'IMPRESORAS',
      description: 'Equipos de última tecnología para todas tus necesidades de impresión',
      gradient: 'from-green-dark to-green-medium',
      hoverGradient: 'from-green-medium to-green-emerald'
    },
    {
      id: 'cartuchos',
      title: 'CARTUCHOS Y TONERS',
      description: 'Consumibles de alta calidad compatibles con todas las marcas',
      gradient: 'from-green-medium to-green-emerald',
      hoverGradient: 'from-green-emerald to-green-lime'
    },
    {
      id: 'resmas',
      title: 'RESMAS SUSTENTABLES',
      description: 'Papel ecológico certificado para un futuro más verde',
      gradient: 'from-green-emerald to-green-lime',
      hoverGradient: 'from-green-lime to-green-mint'
    }
  ];

  return (
    <div className="min-h-screen">
      {productLines.map((product, index) => (
        <div 
          key={product.id}
          className="min-h-screen flex items-center justify-center px-6 py-20"
          style={{ 
            background: `linear-gradient(135deg, var(--green-dark) 0%, var(--green-medium) 50%, var(--green-emerald) 100%)` 
          }}
        >
          <div className="container mx-auto max-w-4xl">
            <Link to={`/productos/${product.id}`}>
              <div 
                className={`
                  relative overflow-hidden rounded-3xl p-12 text-center 
                  transition-all duration-500 ease-out cursor-pointer
                  hover:scale-105 hover:shadow-2xl hover:shadow-green-emerald/30
                  bg-gradient-to-br ${product.gradient}
                  hover:bg-gradient-to-br hover:${product.hoverGradient}
                  border border-green-mint/20 hover:border-green-mint/40
                  backdrop-blur-sm
                `}
                style={{
                  boxShadow: '0 25px 50px -12px rgba(47, 158, 68, 0.25)',
                }}
              >
                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 opacity-0 hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white to-transparent transform -translate-x-full hover:translate-x-full" 
                     style={{ transition: 'transform 0.8s ease-in-out' }} />
                
                <div className="relative z-10">
                  <h2 
                    className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in"
                    style={{ color: 'var(--green-mint)' }}
                  >
                    {product.title}
                  </h2>
                  <p 
                    className="text-xl md:text-2xl leading-relaxed animate-slide-up"
                    style={{ color: 'var(--green-lime)' }}
                  >
                    {product.description}
                  </p>
                  
                  {/* Indicador visual de interacción */}
                  <div className="mt-8 inline-flex items-center space-x-2 text-green-mint opacity-70 hover:opacity-100 transition-opacity">
                    <span className="text-lg">Ver productos</span>
                    <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default Productos;
