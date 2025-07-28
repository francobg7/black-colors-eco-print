import React from 'react';

const QuienesSomosSection = () => (
  <section className="py-10 md:py-20 relative overflow-hidden bg-white">
    <svg className="absolute left-0 top-0 w-full h-40 z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon fill="#fff" points="0,0 100,0 100,70 70,20 0,30" />
    </svg>
    <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#4b6d3b' }}>
            Quiénes Somos
          </h2>
          <div className="space-y-6 text-xl leading-relaxed" style={{ color: '#4b6d3b' }}>
            <p>
              Con <span className="font-semibold text-2xl" style={{ color: '#4b6d3b' }}>18 años de experiencia</span> en el mercado, Black Colors se ha consolidado como líder en soluciones de impresión. Nuestra filosofía es clara:
            </p>
            <blockquote className="text-3xl font-medium italic border-l-4 pl-6 my-8 transform hover:scale-105 transition-transform duration-300" style={{ color: '#4b6d3b', borderColor: '#2f9e44' }}>
              "Nunca damos un no, resolvemos lo que el cliente necesita"
            </blockquote>
            <p>
              Grandes empresas como <span className="font-semibold" style={{ color: '#4b6d3b' }}>Garden, Cavallaro, Inpaco</span> y muchas más confían en nuestra trayectoria y compromiso con la excelencia.
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
          <div className="absolute -bottom-8 -right-8 p-8 rounded-2xl shadow-2xl z-20" style={{ background: 'linear-gradient(135deg, #2d472f)', color: '#d7f2db' }}>
            <div className="text-4xl font-bold">+18</div>
            <div className="text-lg">Años de experiencia</div>
          </div>
        </div>
      </div>
    </div>
    <svg className="absolute left-0 bottom-0 w-full h-40 z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon fill="#fff" points="0,100 0,30 30,80 100,60 100,100" />
    </svg>
  </section>
);

export default QuienesSomosSection; 