
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Footer from '@/components/Footer';

const Transformar = () => {
  // Placeholder images for the carousel
  const carouselImages = [
    "/images/transformar2.jpg",
    "/images/transformar3.jpg",
    "/images/transformar4.jpg",
    "/images/transformar5.jpg",
    "/images/trasnformar6.jpg",
    "/images/transformar1.jpg",
  ];

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0f3d2e 0%, #2f9e44 50%, #3d7b4f 100%)' }}>
      <div className="container mx-auto px-6 py-20">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-8 animate-fade-in" style={{ color: '#d7f2db' }}>
            PROYECTO TRANSFORMAR
          </h1>
        </div>

        {/* First part of content */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6 text-lg leading-relaxed animate-slide-up" style={{ color: '#c3e8a4' }}>
            <p>
              En Black Colors, creemos que la sustentabilidad no debe ser un simple concepto, sino una acción concreta, medible y transformadora. Por eso, junto a nuestro aliado estratégico Enerpy, hemos desarrollado el <span className="font-semibold" style={{ color: '#d7f2db' }}>Proyecto Transformar</span>: una iniciativa innovadora que redefine el destino de los residuos de impresión.
            </p>
            <p>
              Este proyecto nace con un propósito claro: cerrar el ciclo de vida de los productos de impresión y darles un nuevo propósito. A través de la tecnología exclusiva <span className="font-semibold" style={{ color: '#d7f2db' }}>RMO (Reactor Modular Orgánico)</span> de Enerpy, recolectamos residuos como cartuchos vacíos, toners usados, papeles contaminados y otros desechos vinculados al proceso de impresión, y los transformamos en nuevas formas de energía limpia y aprovechable.
            </p>
            <p>
              El proceso consiste en la descomposición térmica controlada de los residuos, sin necesidad de incineración ni emisiones tóxicas. A través de esta tecnología de vanguardia, los materiales desechados se convierten en:
            </p>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <Carousel className="w-full">
            <CarouselContent>
              {carouselImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <img 
                        src={image} 
                        alt={`Transformación sustentable ${index + 1}`}
                        className="w-full h-48 sm:h-72 md:h-96 lg:h-[500px] object-cover object-center transition-transform duration-500 hover:scale-105 max-h-[500px] max-w-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* Second part of content */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-lg leading-relaxed animate-slide-up" style={{ color: '#c3e8a4' }}>
            {/* List of transformations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="p-6 rounded-xl backdrop-blur-sm border" style={{ 
                background: 'rgba(195,232,164,0.1)',
                borderColor: 'rgba(195,232,164,0.3)'
              }}>
                <h3 className="font-bold text-xl mb-2" style={{ color: '#d7f2db' }}>Combustible líquido reutilizable</h3>
                <p className="text-sm" style={{ color: '#c3e8a4' }}>Energía limpia para procesos industriales</p>
              </div>
              
              <div className="p-6 rounded-xl backdrop-blur-sm border" style={{ 
                background: 'rgba(195,232,164,0.1)',
                borderColor: 'rgba(195,232,164,0.3)'
              }}>
                <h3 className="font-bold text-xl mb-2" style={{ color: '#d7f2db' }}>Carbón con propiedades industriales</h3>
                <p className="text-sm" style={{ color: '#c3e8a4' }}>Material útil para diversas aplicaciones</p>
              </div>
              
              <div className="p-6 rounded-xl backdrop-blur-sm border" style={{ 
                background: 'rgba(195,232,164,0.1)',
                borderColor: 'rgba(195,232,164,0.3)'
              }}>
                <h3 className="font-bold text-xl mb-2" style={{ color: '#d7f2db' }}>Gas para procesos energéticos</h3>
                <p className="text-sm" style={{ color: '#c3e8a4' }}>Combustible limpio y eficiente</p>
              </div>
              
              <div className="p-6 rounded-xl backdrop-blur-sm border" style={{ 
                background: 'rgba(195,232,164,0.1)',
                borderColor: 'rgba(195,232,164,0.3)'
              }}>
                <h3 className="font-bold text-xl mb-2" style={{ color: '#d7f2db' }}>Energía eléctrica limpia y renovable</h3>
                <p className="text-sm" style={{ color: '#c3e8a4' }}>Que se reintegra al sistema para generar valor</p>
              </div>
            </div>

            <p>
              Esta transformación no solo evita que toneladas de residuos terminen en vertederos, sino que también convierte la contaminación potencial en recursos útiles para la industria y la sociedad. De esta forma, contribuimos activamente a la economía circular, impulsando un modelo de producción y consumo responsable, eficiente y con impacto ambiental positivo.
            </p>

            {/* Final message */}
            <div className="text-center mt-16 p-8 rounded-2xl backdrop-blur-sm border" style={{ 
              background: 'rgba(47,158,68,0.2)',
              borderColor: 'rgba(215,242,219,0.3)'
            }}>
              <div className="space-y-4">
                <h2 className="text-xl sm:text-3xl font-bold" style={{ color: '#d7f2db' }}>
                  En Black Colors no solo imprimimos.
                </h2>
                <p className="text-lg sm:text-xl font-semibold" style={{ color: '#c3e8a4' }}>
                  Transformamos residuos en energía.
                </p>
                <p className="text-base sm:text-lg" style={{ color: '#d7f2db' }}>
                  Impulsamos un futuro donde cada impresión tenga un propósito más grande.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Transformar;
