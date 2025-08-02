import React, { useEffect, useState } from 'react';
import Footer from '@/components/Footer';

const Transformar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calcular el progreso del scroll (0 a 1)
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(currentScroll / scrollHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-[300vh]">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-no-repeat bg-center"
          style={{ 
            backgroundImage: 'url(/images/background-2.jpg)',
            backgroundSize: 'cover',
            backgroundAttachment: 'scroll',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top',
            height: '300vh', // altura de 3 pantallas
            width: '100vw',
          }}
        ></div>
        
      </div>

      {/* Contenido en una capa superior */}
      <div  className="relative z-10 text-white">
        {/* Header - más pequeño y sin ocupar toda la pantalla */}
        <div className="pt-20 pb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight tracking-tight">
            PROYECTO <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-900">TRANSFORMAR</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-green-800 mb-8 leading-relaxed">
            Redefine el destino de los residuos de impresión, convirtiendo lo que otros consideran desecho en recursos valiosos para el futuro.
          </p>
        </div>

        {/* Contenedor principal con flujo continuo */}
        <div className="container mx-auto px-6 pb-0">
          {/* Sección de introducción */}
          <div >
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2 space-y-6" style={{
                opacity: Math.min(1, scrollProgress * 5 + 0.5),
                transform: `translateY(${Math.max(0, (1 - Math.min(1, scrollProgress * 3 + 0.5)) * 20)}px)`,
                transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
              }}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-900">Nuestra Misión Transformadora</h2>
                <p className="text-lg leading-relaxed text-green-800">
                  En Black Colors, creemos que la sustentabilidad no debe ser un simple concepto, sino una acción concreta, medible y transformadora. Por eso, junto a nuestro aliado estratégico Enerpy, hemos desarrollado el <span className="font-semibold text-green-900">Proyecto Transformar</span>: una iniciativa innovadora que redefine el destino de los residuos de impresión.
                </p>
                <p className="text-lg leading-relaxed text-green-800">
                  Este proyecto nace con un propósito claro: cerrar el ciclo de vida de los productos de impresión y darles un nuevo propósito.
                </p>
              </div>
              <div className="lg:w-1/2" style={{
                opacity: Math.min(1, scrollProgress * 5 + 0.6),
                transform: `translateY(${Math.max(0, (1 - Math.min(1, scrollProgress * 3 + 0.6)) * 20)}px)`,
                transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
              }}>
                <img 
                  src="/images/transformar2.jpg" 
                  alt="Transformación sustentable" 
                  className="w-full rounded-2xl shadow-xl h-[300px] md:h-[400px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Sección de Proceso */}
          <div className="py-12 border-b border-green-700/30">
            <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2" style={{
                opacity: Math.min(1, scrollProgress * 4 + 0.4),
                transform: `translateY(${Math.max(0, (1 - Math.min(1, scrollProgress * 2.5 + 0.4)) * 20)}px)`,
                transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
              }}>
                <img 
                  src="/images/transformar3.jpg" 
                  alt="Proceso de transformación" 
                  className="w-full rounded-2xl shadow-xl h-[520px] md:h-[700px] object-cover"
                />
              </div>
              <div className="lg:w-1/2 space-y-6" style={{
                opacity: Math.min(1, scrollProgress * 4 + 0.3),
                transform: `translateY(${Math.max(0, (1 - Math.min(1, scrollProgress * 2.5 + 0.3)) * 20)}px)`,
                transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
              }}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-900">El Proceso de Transformación</h2>
                <p className="text-lg leading-relaxed text-green-800">
                  A través de la tecnología exclusiva <span className="font-semibold text-green-900">RMO (Reactor Modular Orgánico)</span> de Enerpy, recolectamos residuos como cartuchos vacíos, toners usados, papeles contaminados y otros desechos vinculados al proceso de impresión.
                </p>
                <p className="text-lg leading-relaxed text-green-800">
                  El proceso consiste en la descomposición térmica controlada de los residuos, sin necesidad de incineración ni emisiones tóxicas. Esta transformación no solo evita que toneladas de residuos terminen en vertederos, sino que también convierte la contaminación potencial en recursos útiles.
                </p>
              </div>
            </div>
          </div>

          {/* Sección de subproductos y resultados */}
          <div className="py-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-green-900 text-center">
              Resultados del Proceso
            </h2>
            
            {/* Combustible - formato similar a otras secciones */}
            <div className="py-10 border-b border-green-700/30">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/3 flex justify-center" style={{
                  opacity: Math.min(1, scrollProgress * 3.5 + 0.2),
                  transform: `translateY(${Math.max(0, (1 - Math.min(1, scrollProgress * 2 + 0.2)) * 20)}px)`,
                  transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
                }}>
                  <div className="w-96 h-96 md:w-[30rem] md:h-[30rem] relative rounded-full">
                    <img 
                      src="/images/transformar4.jpg" 
                      alt="Combustible líquido reutilizable" 
                      className="w-full h-full rounded-full shadow-xl object-cover border-4 border-green-600/30"
                    />
                  </div>
                </div>
                <div className="lg:w-2/3 space-y-4" style={{
                  opacity: Math.min(1, scrollProgress * 3.5 + 0.3),
                  transform: `translateY(${Math.max(0, (1 - Math.min(1, scrollProgress * 2 + 0.3)) * 20)}px)`,
                  transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
                }}>
                  <h3 className="text-2xl font-bold mb-3 text-green-900">Combustible Líquido Reutilizable</h3>
                  <p className="text-green-800 text-lg leading-relaxed">
                    Uno de los principales productos del proceso de transformación es el combustible líquido reutilizable, una fuente de energía limpia para procesos industriales que reduce la dependencia de combustibles fósiles tradicionales.
                  </p>
                  <p className="text-green-800 text-lg leading-relaxed">
                    Este combustible tiene aplicaciones en diversos sectores industriales, permitiendo generar calor y energía de forma más limpia y eficiente, con menor huella de carbono.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Carbón - invertido */}
            <div className="py-10 border-b border-green-700/30">
              <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
                <div className="lg:w-2/3 space-y-4" style={{
                  opacity: Math.min(1, scrollProgress * 3.5 + 0.1),
                  transform: `translateY(${Math.max(0, (1 - Math.min(1, scrollProgress * 2 + 0.1)) * 20)}px)`,
                  transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
                }}>
                  <h3 className="text-2xl font-bold mb-3 text-green-900">Carbón Industrial</h3>
                  <p className="text-green-800 text-lg leading-relaxed">
                    El proceso de transformación también genera carbón con propiedades especiales que lo hacen valioso para múltiples aplicaciones industriales, desde filtración hasta procesos químicos específicos.
                  </p>
                  <p className="text-green-800 text-lg leading-relaxed">
                    Este subproducto representa un recurso sostenible que reemplaza al carbón tradicional, cuya extracción suele tener importantes impactos ambientales negativos.
                  </p>
                </div>
                <div className="lg:w-1/3 flex justify-center" style={{
                  opacity: Math.min(1, scrollProgress * 3.5),
                  transform: `translateY(${Math.max(0, (1 - Math.min(1, scrollProgress * 2)) * 20)}px)`,
                  transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
                }}>
                  <div className="w-[32rem] h-[32rem] md:w-[38rem] md:h-[38rem] relative rounded-2xl overflow-hidden">
                    <img 
                      src="/images/transformar5.jpg" 
                      alt="Carbón con propiedades industriales" 
                      className="w-full h-full rounded-2xl shadow-xl object-cover border-4 border-green-600/30"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Energía */}
            <div className="py-10 pb-0 mb-0">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/3 flex justify-center" style={{
                  opacity: Math.min(1, scrollProgress * 3.5),
                  transform: `translateY(${Math.max(0, (1 - Math.min(1, scrollProgress * 2)) * 20)}px)`,
                  transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
                }}>
                  <div className="w-96 h-96 md:w-[30rem] md:h-[30rem] relative rounded-full overflow-hidden">
                    <img 
                      src="/images/transformar6.jpg" 
                      alt="Energía eléctrica limpia" 
                      className="w-full h-full rounded-full shadow-xl object-cover border-4 border-green-600/30"
                    />
                  </div>
                </div>
                <div className="lg:w-2/3 space-y-4" style={{
                  opacity: Math.min(1, scrollProgress * 3.5 + 0.3),
                  transform: `translateY(${Math.max(0, (1 - Math.min(1, scrollProgress * 2 + 0.3)) * 20)}px)`,
                  transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
                }}>
                  <h3 className="text-2xl font-bold mb-3 text-green-900">Energía Eléctrica Limpia</h3>
                  <p className="text-green-800 text-lg leading-relaxed">
                    El gas resultante del proceso se utiliza para generar energía eléctrica limpia y renovable, que se reintegra al sistema para alimentar nuevos ciclos productivos.
                  </p>
                  <p className="text-green-800 text-lg leading-relaxed">
                    De esta manera, completamos el círculo virtuoso de la economía circular: lo que comenzó como un residuo termina siendo fuente de energía para nuevas actividades, reduciendo la huella de carbono global.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Transformar;
