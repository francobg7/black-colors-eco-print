import { useEffect, useState } from 'react';
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
    <div className="relative min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center min-h-[60vh] px-4 py-20 text-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero-transformar.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 25%',
        }}
      >
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg leading-tight tracking-tight">
            PROYECTO <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-500">TRANSFORMAR</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-white drop-shadow-lg mb-8 leading-relaxed">
            Redefine el destino de los residuos de impresión, convirtiendo lo que otros consideran desecho en recursos valiosos para el futuro.
          </p>
        </div>
      </section>

      {/* Contenido principal */}
      <div className="relative z-10 text-green-900">
        {/* Sección de introducción */}
        <section className="container mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
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
            <div className="lg:w-1/2 flex justify-center" style={{
              opacity: Math.min(1, scrollProgress * 5 + 0.6),
              transform: `translateY(${Math.max(0, (1 - Math.min(1, scrollProgress * 3 + 0.6)) * 20)}px)`,
              transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
            }}>
              <img 
                src="/images/transformar-1.jpg" 
                alt="Transformación sustentable" 
                className="rounded-2xl shadow-xl h-[350px] md:h-[450px] object-cover w-full max-w-lg"
              />
            </div>
          </div>
        </section>

        {/* Sección de Proceso */}
        <section className="py-16 border-t border-b border-green-700/30 bg-green-50/30">
          <div className="container mx-auto px-6">
            <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2 flex justify-center" style={{
                opacity: Math.min(1, scrollProgress * 4 + 0.4),
                transform: `translateY(${Math.max(0, (1 - Math.min(1, scrollProgress * 2.5 + 0.4)) * 20)}px)`,
                transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
              }}>
                <img 
                  src="/images/rmo-image.jpg" 
                  alt="Proceso de transformación" 
                  className="rounded-2xl shadow-xl h-[350px] md:h-[450px] object-cover w-full max-w-lg object-center"
                />
              </div>
              <div className="lg:w-1/2 space-y-6" style={{
                opacity: Math.min(1, scrollProgress * 4 + 0.3),
                transform: `translateY(${Math.max(0, (1 - Math.min(1, scrollProgress * 2.5 + 0.3)) * 20)}px)`,
                transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
              }}>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-900">El Proceso de Transformación</h2>
                <p className="text-lg leading-relaxed text-green-800">
                  A través de la tecnología exclusiva <span className="font-semibold text-green-900">RMO (Reactor Modular Orgánico)</span> de Enerpy, recolectamos residuos como cartuchos vacíos, toners usados, papeles contaminados y otros desechos vinculados al proceso de impresión.
                </p>
                <p className="text-lg leading-relaxed text-green-800">
                  El proceso consiste en la descomposición térmica controlada de los residuos, sin necesidad de incineración ni emisiones tóxicas. Esta transformación no solo evita que toneladas de residuos terminen en vertederos, sino que también convierte la contaminación potencial en recursos útiles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de subproductos y resultados */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-green-900 text-center">
              Resultados del Proceso
            </h2>
            
            {/* Combustible */}
            <div className="mb-24">
              <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-2/5 flex justify-center" style={{
                  opacity: Math.min(1, scrollProgress * 3.5 + 0.2),
                  transform: `translateY(${Math.max(0, (1 - Math.min(1, scrollProgress * 2 + 0.2)) * 20)}px)`,
                  transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
                }}>
                  <div className="w-[28rem] h-[28rem] md:w-[32rem] md:h-[32rem] relative rounded-full overflow-hidden">
                    <img 
                      src="/images/trash-gas.png" 
                      alt="Combustible líquido reutilizable" 
                      className="w-full h-full rounded-full shadow-xl object-cover border-4 border-green-600/30"
                    />
                  </div>
                </div>
                <div className="lg:w-3/5 space-y-5" style={{
                  opacity: Math.min(1, scrollProgress * 3.5 + 0.3),
                  transform: `translateY(${Math.max(0, (1 - Math.min(1, scrollProgress * 2 + 0.3)) * 20)}px)`,
                  transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
                }}>
                  <h3 className="text-3xl font-bold mb-6 text-green-900">Combustible Líquido Reutilizable</h3>
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
            <div className="py-12 border-t border-b border-green-700/30 bg-green-50/30 mb-24">
              <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
                <div className="lg:w-3/5 space-y-5" style={{
                  opacity: Math.min(1, scrollProgress * 3.5 + 0.1),
                  transform: `translateY(${Math.max(0, (1 - Math.min(1, scrollProgress * 2 + 0.1)) * 20)}px)`,
                  transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
                }}>
                  <h3 className="text-3xl font-bold mb-6 text-green-900">Carbón Industrial</h3>
                  <p className="text-green-800 text-lg leading-relaxed">
                    El proceso de transformación también genera carbón con propiedades especiales que lo hacen valioso para múltiples aplicaciones industriales, desde filtración hasta procesos químicos específicos.
                  </p>
                  <p className="text-green-800 text-lg leading-relaxed">
                    Este subproducto representa un recurso sostenible que reemplaza al carbón tradicional, cuya extracción suele tener importantes impactos ambientales negativos.
                  </p>
                </div>
                <div className="lg:w-2/5 flex justify-center" style={{
                  opacity: Math.min(1, scrollProgress * 3.5),
                  transform: `translateY(${Math.max(0, (1 - Math.min(1, scrollProgress * 2)) * 20)}px)`,
                  transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
                }}>
                  <div className="w-full h-[32rem] md:h-[38rem] relative rounded-2xl overflow-hidden">
                    <img 
                      src="/images/carbon-1.jpg" 
                      alt="Carbón con propiedades industriales" 
                      className="w-full h-full rounded-2xl shadow-xl object-cover object-center border-4 border-green-600/30"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Energía */}
            <div>
              <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-2/5 flex justify-center" style={{
                  opacity: Math.min(1, scrollProgress * 3.5),
                  transform: `translateY(${Math.max(0, (1 - Math.min(1, scrollProgress * 2)) * 20)}px)`,
                  transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
                }}>
                  <div className="w-[28rem] h-[28rem] md:w-[32rem] md:h-[32rem] relative rounded-full overflow-hidden">
                    <img 
                      src="/images/clean-energy.jpg" 
                      alt="Energía eléctrica limpia" 
                      className="w-full h-full rounded-full shadow-xl object-cover border-4 border-green-600/30"
                    />
                  </div>
                </div>
                <div className="lg:w-3/5 space-y-5" style={{
                  opacity: Math.min(1, scrollProgress * 3.5 + 0.3),
                  transform: `translateY(${Math.max(0, (1 - Math.min(1, scrollProgress * 2 + 0.3)) * 20)}px)`,
                  transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
                }}>
                  <h3 className="text-3xl font-bold mb-6 text-green-900">Energía Eléctrica Limpia</h3>
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
        </section>
      </div>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Transformar;
