import React from 'react';

const QuienesSomosSection = () => (
  <section className="py-10 md:py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #3d7b4f 0%, #2f9e44 100%)' }}>
    <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#d7f2db' }}>
            Quiénes Somos
          </h2>
          <div className="space-y-6 text-xl leading-relaxed" style={{ color: '#c3e8a4' }}>
            <p>
              Con <span className="font-semibold text-2xl" style={{ color: '#d7f2db' }}>18 años de experiencia</span> en el mercado, Black Colors se ha consolidado como líder en soluciones de impresión. Nuestra filosofía es clara:
            </p>
            <blockquote className="text-3xl font-medium italic border-l-4 pl-6 my-8 transform hover:scale-105 transition-transform duration-300" style={{ color: '#d7f2db', borderColor: '#2f9e44' }}>
              "Nunca damos un no, resolvemos lo que el cliente necesita"
            </blockquote>
            <p>
              Grandes empresas como <span className="font-semibold" style={{ color: '#d7f2db' }}>Garden, Cavallaro, Inpaco</span> y muchas más confían en nuestra trayectoria y compromiso con la excelencia.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-2xl blur-xl" style={{ background: 'linear-gradient(135deg, rgba(195,232,164,0.2), rgba(47,158,68,0.2))' }}></div>
          <img 
            src="/images/nosotros2.jpg"
            alt="Equipo Black Colors"
            className="rounded-2xl shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute -bottom-8 -right-8 p-8 rounded-2xl shadow-2xl z-20" style={{ background: 'linear-gradient(135deg, #2f9e44, #3d7b4f)', color: '#d7f2db' }}>
            <div className="text-4xl font-bold">18</div>
            <div className="text-lg">Años de experiencia</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default QuienesSomosSection; 