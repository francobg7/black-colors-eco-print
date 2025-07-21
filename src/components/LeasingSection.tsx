import React from 'react';

const LeasingSection = () => (
  <section className="py-10 md:py-20 relative overflow-hidden" style={{ background: '#a7f3d0' }}>
    <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-8 animate-fade-in" style={{ color: '#0f3d2e' }}>
            Servicio de Leasing Sustentable
          </h2>
          <p className="text-2xl mb-12 leading-relaxed" style={{ color: '#1f2937' }}>
            Nuestro servicio de leasing incluye alquiler de equipos con mantenimiento completo y reposición de insumos.
          </p>
          <div>
            <h3 className="text-2xl font-semibold mb-8" style={{ color: '#0f3d2e' }}>Beneficios principales:</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg" style={{ color: '#0f3d2e' }}>
              <li>Renovación constante de equipos</li>
              <li>Mantenimiento y soporte incluidos</li>
              <li>Reposición de insumos sin costo adicional</li>
              <li>Gestión responsable de residuos</li>
            </ul>
          </div>
        </div>
        <div className="relative">
          <img 
            src="/images/leasing.jpg" 
            alt="Servicio de Leasing Black Colors"
            className="w-full h-48 sm:h-72 md:h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  </section>
);

export default LeasingSection; 