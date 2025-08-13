
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

const Productos = () => {
  const categorias = [
    {
      id: 'impresoras',
      title: 'IMPRESORAS',
      description: 'Equipos de última tecnología para todas tus necesidades de impresión',
      image: '/images/background-1.jpg',
      color: 'from-[#0f3d2e] to-[#3d7b4f]',
      hoverColor: 'from-[#3d7b4f] to-[#2f9e44]'
    },
    {
      id: 'cartuchos',
      title: 'CARTUCHOS Y TÓNER',
      description: 'Consumibles de alta calidad compatibles con todas las marcas',
      image: '/images/background-2.jpg',
      color: 'from-[#3d7b4f] to-[#2f9e44]',
      hoverColor: 'from-[#2f9e44] to-[#c3e8a4]'
    },
    {
      id: 'resmas',
      title: 'RESMAS SUSTENTABLES',
      description: 'Papel ecológico certificado para un futuro más verde',
      image: '/images/background-3.jpg',
      color: 'from-[#2f9e44] to-[#c3e8a4]',
      hoverColor: 'from-[#c3e8a4] to-[#d7f2db]'
    }
  ];

  return (
    <div className="min-h-screen w-full">
      {/* Contenedor principal con las 3 columnas - altura completa de la pantalla */}
      <div className="flex h-screen w-full">
        
        {/* Primera columna - Impresoras */}
        <div className="relative w-1/3 h-full overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-110"
            style={{ backgroundImage: `url(${categorias[0].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br opacity-80 transition-opacity duration-300 hover:opacity-70"
                   style={{ background: `linear-gradient(135deg, ${categorias[0].color})` }} />
          
          {/* Línea divisoria derecha con efecto 3D */}
          <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-60" />
          <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-40 transform rotate-1" />
          <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-20 transform -rotate-1" />
          
          {/* Contenido de la categoría */}
          <Link to={`/productos/${categorias[0].id}`} className="block h-full">
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 group cursor-pointer">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-white drop-shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:text-[#d7f2db] group-hover:drop-shadow-[0_0_20px_rgba(215,242,219,0.8)]">
                {categorias[0].title}
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-[#d7f2db] opacity-90 transition-all duration-500 group-hover:opacity-100 group-hover:text-white max-w-xs">
                {categorias[0].description}
              </p>
              
              {/* Indicador de interacción */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <div className="inline-flex items-center space-x-2 text-white bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <span className="text-xs font-medium">Ver productos</span>
                  <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Segunda columna - Cartuchos y Tóner */}
        <div className="relative w-1/3 h-full overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-110"
            style={{ backgroundImage: `url(${categorias[1].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br opacity-80 transition-opacity duration-300 hover:opacity-70"
                   style={{ background: `linear-gradient(135deg, ${categorias[1].color})` }} />
          
          {/* Línea divisoria izquierda con efecto 3D */}
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-60" />
          <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-40 transform -rotate-1" />
          <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-20 transform rotate-1" />
          
          {/* Línea divisoria derecha con efecto 3D */}
          <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-60" />
          <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-40 transform rotate-1" />
          <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-20 transform -rotate-1" />
          
          {/* Contenido de la categoría */}
          <Link to={`/productos/${categorias[1].id}`} className="block h-full">
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 group cursor-pointer">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-white drop-shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:text-[#d7f2db] group-hover:drop-shadow-[0_0_20px_rgba(215,242,219,0.8)]">
                {categorias[1].title}
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-[#d7f2db] opacity-90 transition-all duration-500 group-hover:opacity-100 group-hover:text-white max-w-xs">
                {categorias[1].description}
              </p>
              
              {/* Indicador de interacción */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <div className="inline-flex items-center space-x-2 text-white bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <span className="text-xs font-medium">Ver productos</span>
                  <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Tercera columna - Resmas Sustentables */}
        <div className="relative w-1/3 h-full overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-110"
            style={{ backgroundImage: `url(${categorias[2].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br opacity-80 transition-opacity duration-300 hover:opacity-70"
                   style={{ background: `linear-gradient(135deg, ${categorias[2].color})` }} />
          
          {/* Línea divisoria izquierda con efecto 3D */}
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-60" />
          <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-40 transform -rotate-1" />
          <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-20 transform rotate-1" />
          
          {/* Contenido de la categoría */}
          <Link to={`/productos/${categorias[2].id}`} className="block h-full">
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 group cursor-pointer">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-white drop-shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:text-[#d7f2db] group-hover:drop-shadow-[0_0_20px_rgba(215,242,219,0.8)]">
                {categorias[2].title}
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-[#d7f2db] opacity-90 transition-all duration-500 group-hover:opacity-100 group-hover:text-white max-w-xs">
                {categorias[2].description}
              </p>
              
              {/* Indicador de interacción */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <div className="inline-flex items-center space-x-2 text-white bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <span className="text-xs font-medium">Ver productos</span>
                  <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Footer que aparece después del contenido principal */}
      <Footer />

      {/* Estilos CSS personalizados para las líneas divisorias verticales */}
      <style>{`
        @media (max-width: 768px) {
          .rotate-1 {
            transform: rotate(0.5deg);
          }
          .-rotate-1 {
            transform: rotate(-0.5deg);
          }
        }
        
        @media (min-width: 769px) {
          .rotate-1 {
            transform: rotate(1deg);
          }
          .-rotate-1 {
            transform: rotate(-1deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Productos;
