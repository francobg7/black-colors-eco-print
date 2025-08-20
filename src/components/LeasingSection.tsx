
const LeasingSection = () => (
  <section className="py-10 md:py-20 relative overflow-hidden bg-[#2d472f]">
    <svg className="absolute left-0 top-0 w-full h-40 z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon fill="#2d472f" points="0,0 100,0 100,70 70,20 0,30" />
    </svg>
    <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-8 animate-fade-in text-white">
            Servicio de Leasing Sustentable
          </h2>
          <p className="text-2xl mb-12 leading-relaxed text-green-100">
            Nuestro servicio de leasing incluye alquiler de equipos con mantenimiento completo y reposición de insumos.
          </p>
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-white">Beneficios principales:</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg text-green-100">
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
    <svg className="absolute left-0 bottom-0 w-full h-40 z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon fill="#2d472f" points="0,100 0,30 30,80 100,60 100,100" />
    </svg>
  </section>
);

export default LeasingSection; 