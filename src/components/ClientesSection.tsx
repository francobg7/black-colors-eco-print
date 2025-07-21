import React from 'react';

const clientes = [
  "Garden", "Cavallaro", "Inpaco", "EcoTech", "GreenSolutions", "NatureCorp", "BioTech", "EcoLife"
];

const ClientesSection = () => (
  <section className="py-10 md:py-20" style={{ background: 'linear-gradient(135deg, #c3e8a4 0%, #d7f2db 50%, #c3e8a4 100%)' }}>
    <div className="container mx-auto px-4 sm:px-6 md:px-8">
      <div className="text-center mb-8 md:mb-16">
        <h2 className="text-2xl sm:text-4xl lg:text-4xl font-bold mb-4" style={{ color: '#0f3d2e' }}>
          Clientes que Confían en Nosotros
        </h2>
        <p className="text-lg mb-8" style={{ color: '#3d7b4f' }}>
          Empresas líderes que han confiado en Black Colors para transformar su impresión en una acción sustentable.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {clientes.map((cliente, idx) => (
          <div key={idx} className="bg-white/80 rounded-xl shadow p-6 text-xl font-semibold" style={{ color: '#2f9e44', minWidth: '160px' }}>
            {cliente}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ClientesSection; 