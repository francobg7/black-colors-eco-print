import React from 'react';

const clientes = [
  "Garden", "Cavallaro", "Inpaco", "EcoTech", "GreenSolutions", "NatureCorp", "BioTech", "EcoLife"
];

const ClientesSection = () => (
  <section className="py-10 md:py-20 relative overflow-hidden" style={{ background: '#fff' }}>
    <svg className="absolute left-0 top-0 w-full h-40 z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon fill="#fff" points="0,0 100,0 100,70 70,20 0,30" />
    </svg>
    <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8">
      <div className="text-center mb-8 md:mb-16">
        <h2 className="text-2xl sm:text-4xl lg:text-4xl font-bold mb-4" style={{ color: '#0f3d2e' }}>
          Clientes que Confían en Nosotros
        </h2>
        <p className="text-lg mb-8" style={{ color: '#3d7b4f' }}>
          Empresas líderes que han confiado en Black Colors para transformar su impresión en una acción sustentable.
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex animate-[scroll_20s_linear_infinite] space-x-8">
          {[...clientes, ...clientes].map((cliente, index) => (
            <div key={index} className="flex-shrink-0">
              <div className="rounded-2xl p-8 min-w-[200px] text-center hover:scale-105 transition-transform duration-300 shadow-xl backdrop-blur-sm" style={{ background: 'rgba(47,158,68,0.8)' }}>
                <div className="text-3xl font-bold" style={{ color: '#d7f2db' }}>{cliente}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
    <svg className="absolute left-0 bottom-0 w-full h-40 z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon fill="#fff" points="0,100 0,30 30,80 100,60 100,100" />
    </svg>
  </section>
);

export default ClientesSection; 