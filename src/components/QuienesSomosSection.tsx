
const QuienesSomosSection = () => (
  <section className="py-8 md:py-12 relative overflow-hidden bg-white">
    <svg className="absolute left-0 top-0 w-full h-24 z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon fill="#fff" points="0,0 100,0 100,70 70,20 0,30" />
    </svg>
    <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#4b6d3b' }}>
            Quiénes Somos
          </h2>
          <div className="space-y-4 text-lg leading-relaxed" style={{ color: '#4b6d3b' }}>
            <p>
              Con <span className="font-semibold text-xl" style={{ color: '#4b6d3b' }}>18 años de experiencia</span> en el mercado, Black Colors se ha consolidado como líder en soluciones de impresión. Nuestra filosofía es clara:
            </p>
            <blockquote className="text-2xl font-medium italic border-l-4 pl-6 my-6 transform hover:scale-105 transition-transform duration-300" style={{ color: '#4b6d3b', borderColor: '#2f9e44' }}>
              "Nunca damos un no, resolvemos lo que el cliente necesita"
            </blockquote>
            <p>
              Grandes empresas como <span className="font-semibold" style={{ color: '#4b6d3b' }}>Garden, Cavallaro, Inpaco</span> y muchas más confían en nuestra trayectoria y compromiso con la excelencia.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-3 rounded-2xl blur-xl" style={{ background: 'linear-gradient(135deg, rgba(195,232,164,0.2), rgba(47,158,68,0.2))' }}></div>
          <img 
            src="/images/quienes-somos.png"
            alt="Equipo Black Colors"
            className="w-full h-80 md:h-96 lg:h-[28rem] object-cover rounded-2xl shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl shadow-2xl z-20" style={{ background: 'linear-gradient(135deg, #4e8759)', color: '#d7f2db' }}>
            <div className="text-3xl font-bold">+18</div>
            <div className="text-base">Años de experiencia</div>
          </div>
        </div>
      </div>
    </div>
    <svg className="absolute left-0 bottom-0 w-full h-24 z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon fill="#fff" points="0,100 0,30 30,80 100,60 100,100" />
    </svg>
  </section>
);

export default QuienesSomosSection; 