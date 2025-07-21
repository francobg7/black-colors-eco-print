import React, { useState } from 'react';
import { Recycle, Shield, CheckCircle, Award, Leaf } from 'lucide-react';

const pilaresSustentabilidad = [
  {
    icon: <Recycle className="w-12 h-12" />, 
    titulo: "Gestión de Residuos",
    descripcion: "Recolección y transformación responsable de todos los residuos de impresión.",
    color: "#3d7b4f"
  },
  {
    icon: <Shield className="w-12 h-12" />, 
    titulo: "Trazabilidad", 
    descripcion: "Productos con origen responsable y seguimiento completo del ciclo de vida.",
    color: "#c3e8a4"
  },
  {
    icon: <CheckCircle className="w-12 h-12" />, 
    titulo: "Gestión Final Positiva",
    descripcion: "Únicos en Paraguay con gestión final ambientalmente responsable de residuos.",
    color: "#d7f2db"
  },
  {
    icon: <Award className="w-12 h-12" />, 
    titulo: "ISO 14001",
    descripcion: "Ayudamos a nuestros clientes a alcanzar esta certificación ambiental.",
    color: "#2f9e44"
  }
];

const SustentabilidadSection = () => {
  const [activeSection, setActiveSection] = useState(-1);

  return (
    <section className="py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f3d2e 0%, #2f9e44 100%)' }}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-20">
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-8" style={{ color: '#d7f2db' }}>
            Compromiso con la Sustentabilidad
          </h2>
          <div className="w-32 h-2 mx-auto rounded-full" style={{ background: 'linear-gradient(135deg, #c3e8a4, #2f9e44)' }}></div>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative w-[600px] h-[600px] max-w-full max-h-[70vw]">
            {/* Central Logo */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full flex items-center justify-center z-30 shadow-2xl bg-white/80">
              <img src="/images/logo-mejorado-removebg-preview.png" alt="Logo Black Colors" className="w-24 h-24 object-contain" />
            </div>
            {/* 4 Circular Sections */}
            {pilaresSustentabilidad.map((pilar, index) => {
              const isActive = activeSection === index;
              const angle = (index * 90) - 45; // Start from top-right
              const radius = 200;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              return (
                <div
                  key={index}
                  className="absolute w-72 h-72 cursor-pointer transition-all duration-700 ease-out"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) ${isActive ? 'scale(1.1)' : 'scale(1)'}`,
                    zIndex: isActive ? 20 : 10
                  }}
                  onMouseEnter={() => setActiveSection(index)}
                  onMouseLeave={() => setActiveSection(-1)}
                >
                  <div 
                    className="w-full h-full rounded-full flex flex-col items-center justify-center text-center p-8 shadow-2xl transition-all duration-700 backdrop-blur-sm border-2"
                    style={{
                      background: isActive 
                        ? `linear-gradient(135deg, ${pilar.color}ee, rgba(47,158,68,0.9))` 
                        : `linear-gradient(135deg, ${pilar.color}cc, rgba(61,123,79,0.8))`,
                      borderColor: isActive ? '#d7f2db' : 'transparent',
                      boxShadow: isActive 
                        ? `0 20px 40px ${pilar.color}66, 0 0 40px ${pilar.color}44` 
                        : '0 10px 30px rgba(0,0,0,0.3)',
                      filter: isActive ? 'brightness(1.2)' : 'brightness(1)'
                    }}
                  >
                    <div className={`mb-6 transition-all duration-300 ${isActive ? 'scale-125' : ''}`} style={{ color: index === 1 || index === 2 ? '#0f3d2e' : '#d7f2db' }}>
                      {pilar.icon}
                    </div>
                    <h3 className={`font-bold text-xl mb-4 leading-tight transition-all duration-300 ${isActive ? 'scale-105' : ''}`} style={{ color: index === 1 || index === 2 ? '#0f3d2e' : '#d7f2db' }}>
                      {pilar.titulo}
                    </h3>
                    <p className={`text-sm leading-relaxed transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-85'}`} style={{ color: index === 1 || index === 2 ? '#0f3d2e' : '#c3e8a4' }}>
                      {pilar.descripcion}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustentabilidadSection; 