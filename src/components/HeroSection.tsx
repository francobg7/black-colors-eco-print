import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = ({ heroLoaded, scrollY }: { heroLoaded: boolean, scrollY: number }) => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0 bg-[url('/images/upscalemedia-transformed.png')] bg-cover bg-center"></div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
        <div className="hidden lg:block"></div>
        <div className="space-y-8 flex flex-col items-center lg:items-end text-center lg:text-right">
          <h1 className={`text-3xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight transition-all duration-1500 ease-out ${heroLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}
            style={{ color: '#ffffff', textShadow: '3px 3px 6px rgba(0,0,0,0.8)', transform: `translateY(${Math.max(0, 50 - scrollY * 0.1)}px)` }}>
            Black Colors: <span className={`transition-all duration-1800 delay-300 ease-out ${heroLoaded ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}
              style={{ color: '#c3e8a4', textShadow: '3px 3px 6px rgba(0,0,0,0.9)', display: 'inline-block' }}>
              Impresión Sustentable
            </span> para un Futuro Verde
          </h1>
          <p className={`text-2xl mb-8 leading-relaxed transition-all duration-1200 delay-500 ease-out ${heroLoaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}
            style={{ color: '#ffffff', textShadow: '2px 2px 4px rgba(0,0,0,0.8)', transform: `translateY(${Math.max(0, 30 - scrollY * 0.08)}px)` }}>
            Convertí tu impresión en una acción por el planeta con nuestras soluciones integrales de impresión sustentable y economía circular.
          </p>
          <div className={`flex flex-col sm:flex-row gap-6 transition-all duration-1000 delay-700 ease-out ${heroLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}` + ' justify-center lg:justify-end'}>
            <Link to="/productos">
              <Button 
                size="lg" 
                className="px-10 py-4 text-xl border-0 shadow-2xl transition-all duration-300 transform hover:scale-105 group"
                style={{ background: 'linear-gradient(135deg, #2f9e44, #3d7b4f)', color: '#ffffff' }}>
                Conocer Productos
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/leasing">
              <Button 
                size="lg" 
                className="px-10 py-4 text-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #2f9e44, #3d7b4f)', color: '#ffffff' }}>
                Servicio de Leasing
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <svg className="absolute left-0 bottom-0 w-full h-32" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ zIndex: 2 }}>
      <polygon fill="#fff" points="0,100 0,30 30,80 100,60 100,100" />
    </svg>
  </section>
);

export default HeroSection; 