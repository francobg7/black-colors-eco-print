import React from 'react';
import { Recycle, Shield, CheckCircle, Award } from 'lucide-react';

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

const SustentabilidadSection = () => (
  <section className="py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f3d2e 0%, #2f9e44 100%)' }}>
    <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
      <div className="text-center mb-8 md:mb-20">
        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-8" style={{ color: '#d7f2db' }}>
          Compromiso con la Sustentabilidad
        </h2>
        <p className="text-lg mb-8" style={{ color: '#c3e8a4' }}>
          Nuestra misión es transformar la impresión en una acción positiva para el planeta.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {pilaresSustentabilidad.map((pilar, idx) => (
          <div key={idx} className="w-full h-full rounded-full flex flex-col items-center justify-center text-center p-8 shadow-2xl transition-all duration-700 backdrop-blur-sm border-2"
            style={{
              background: `linear-gradient(135deg, ${pilar.color}cc, rgba(61,123,79,0.8))`,
              borderColor: 'transparent',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              filter: 'brightness(1)'
            }}
          >
            <div className="mb-6" style={{ color: idx === 1 || idx === 2 ? '#0f3d2e' : '#d7f2db' }}>
              {pilar.icon}
            </div>
            <h3 className="font-bold text-xl mb-4 leading-tight" style={{ color: idx === 1 || idx === 2 ? '#0f3d2e' : '#d7f2db' }}>
              {pilar.titulo}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: idx === 1 || idx === 2 ? '#0f3d2e' : '#c3e8a4' }}>
              {pilar.descripcion}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SustentabilidadSection; 