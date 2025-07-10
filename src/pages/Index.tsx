import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Recycle, Shield, Award, Printer, Package, FileText, Users, Phone, Mail, MapPin, CheckCircle, ArrowRight, Wrench, RotateCcw, Headphones, Zap } from 'lucide-react';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeQuadrant, setActiveQuadrant] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productos = [
    {
      icon: <Printer className="w-12 h-12 text-green-200" />,
      titulo: "Impresoras",
      descripcion: "Principalmente de marca Brother, disponibles para venta y leasing con mantenimiento incluido."
    },
    {
      icon: <Package className="w-12 h-12 text-green-200" />,
      titulo: "Cartuchos y Toners",
      descripcion: "Originales, genéricos y XL para las principales marcas del mercado."
    },
    {
      icon: <FileText className="w-12 h-12 text-green-200" />,
      titulo: "Resmas Sustentables",
      descripcion: "Papel marca Nat con certificación de origen responsable y trazabilidad ambiental."
    }
  ];

  const compromisosData = [
    {
      icon: <Recycle className="w-16 h-16" />,
      titulo: "Gestión de Residuos",
      descripcion: "Recolección y transformación responsable de todos los residuos de impresión.",
      color: "rgba(47,158,68,0.9)"
    },
    {
      icon: <Shield className="w-16 h-16" />,
      titulo: "Trazabilidad",
      descripcion: "Productos con origen responsable y seguimiento completo del ciclo de vida.",
      color: "rgba(195,232,164,0.9)"
    },
    {
      icon: <CheckCircle className="w-16 h-16" />,
      titulo: "Gestión Final Positiva",
      descripcion: "Únicos en Paraguay con gestión final ambientalmente responsable de residuos.",
      color: "rgba(61,123,79,0.9)"
    },
    {
      icon: <Award className="w-16 h-16" />,
      titulo: "ISO 14001",
      descripcion: "Ayudamos a nuestros clientes a alcanzar esta certificación ambiental.",
      color: "rgba(215,242,219,0.9)"
    }
  ];

  const clientes = [
    "Garden", "Cavallaro", "Inpaco", "EcoTech", "GreenSolutions", "NatureCorp", "BioTech", "EcoLife"
  ];

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0f3d2e 0%, #2f9e44 50%, #3d7b4f 100%)' }}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(15,61,46,0.9) 0%, rgba(47,158,68,0.8) 50%, rgba(61,123,79,0.9) 100%)' }}></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518495973542-4542c06a5843')] bg-cover bg-center opacity-20"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute w-96 h-96 rounded-full blur-3xl animate-pulse"
            style={{ 
              background: 'rgba(195,232,164,0.1)',
              transform: `translateY(${scrollY * 0.5}px)`,
              top: '20%',
              left: '10%'
            }}
          ></div>
          <div 
            className="absolute w-64 h-64 rounded-full blur-2xl animate-pulse"
            style={{ 
              background: 'rgba(215,242,219,0.1)',
              transform: `translateY(${scrollY * -0.3}px)`,
              top: '60%',
              right: '15%'
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 
                className="text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in"
                style={{ 
                  color: '#d7f2db',
                  transform: `translateY(${Math.max(0, 50 - scrollY * 0.1)}px)` 
                }}
              >
                Black Colors: <span style={{ background: 'linear-gradient(135deg, #c3e8a4, #2f9e44)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Impresión Sustentable</span> para un Futuro Verde
              </h1>
              <p 
                className="text-2xl mb-8 leading-relaxed"
                style={{ 
                  color: '#c3e8a4',
                  transform: `translateY(${Math.max(0, 30 - scrollY * 0.08)}px)` 
                }}
              >
                Convertí tu impresión en una acción por el planeta con nuestras soluciones integrales de impresión sustentable y economía circular.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button 
                  size="lg" 
                  className="px-10 py-4 text-xl border-0 shadow-2xl transition-all duration-300 transform hover:scale-105 group"
                  style={{ 
                    background: 'linear-gradient(135deg, #2f9e44, #3d7b4f)',
                    color: '#d7f2db'
                  }}
                >
                  Conocer Productos
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-10 py-4 text-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                  style={{ 
                    borderColor: '#c3e8a4',
                    color: '#c3e8a4',
                    background: 'rgba(61,123,79,0.3)'
                  }}
                >
                  Servicio de Leasing
                </Button>
              </div>
            </div>
            <div 
              className="relative"
              style={{ transform: `translateY(${scrollY * -0.2}px)` }}
            >
              <div className="absolute inset-0 rounded-full opacity-30 animate-pulse blur-xl" style={{ background: 'rgba(195,232,164,0.2)' }}></div>
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                alt="Sostenibilidad y tecnología"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #3d7b4f 0%, #2f9e44 100%)' }}>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 
                className="text-5xl font-bold mb-8"
                style={{ 
                  color: '#d7f2db',
                  transform: `scale(${Math.min(1.2, 1 + scrollY * 0.0005)})` 
                }}
              >
                Quiénes Somos
              </h2>
              <div className="space-y-6 text-xl leading-relaxed" style={{ color: '#c3e8a4' }}>
                <p className="animate-fade-in">
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
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86" 
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

      {/* Nuestros Productos - Angular Design */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #2f9e44 0%, #0f3d2e 100%)' }}>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9')] bg-cover bg-center opacity-15"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            {/* Left side - Large image */}
            <div className="lg:col-span-3 relative">
              <div className="absolute inset-0 rounded-3xl blur-2xl" style={{ background: 'linear-gradient(135deg, rgba(195,232,164,0.2), rgba(47,158,68,0.2))' }}></div>
              <img 
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b" 
                alt="Tecnología sustentable"
                className="w-full h-96 lg:h-[600px] object-cover rounded-3xl shadow-2xl relative z-10"
              />
            </div>
            
            {/* Right side - Angular product blocks */}
            <div className="lg:col-span-2 space-y-8">
              <h2 
                className="text-5xl font-bold mb-12 text-center lg:text-left"
                style={{ 
                  color: '#d7f2db',
                  transform: `translateX(${Math.min(0, -50 + scrollY * 0.1)}px)` 
                }}
              >
                Nuestros Productos
              </h2>
              
              <div className="space-y-6">
                {productos.map((producto, index) => (
                  <div 
                    key={index}
                    className={`backdrop-blur-sm p-6 rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group ${
                      index === 1 ? 'ml-8' : index === 2 ? 'ml-16' : ''
                    }`}
                    style={{ 
                      background: `linear-gradient(135deg, rgba(61,123,79,0.8), rgba(47,158,68,0.8))`,
                      transform: `translateX(${index * 20}px) translateY(${Math.max(0, 30 - scrollY * 0.05)}px)` 
                    }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-4 rounded-xl group-hover:bg-green-400/40 transition-colors" style={{ background: 'rgba(47,158,68,0.3)' }}>
                        {producto.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold mb-3 group-hover:text-green-200 transition-colors" style={{ color: '#d7f2db' }}>
                          {producto.titulo}
                        </h3>
                        <p className="leading-relaxed" style={{ color: '#c3e8a4' }}>
                          {producto.descripcion}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicio de Leasing - Redesigned */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f3d2e 0%, #3d7b4f 100%)' }}>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615729947596-a598e5de0ab3')] bg-cover bg-center opacity-15"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-bold mb-8 animate-fade-in" style={{ color: '#d7f2db' }}>
                Servicio de Leasing Sustentable
              </h2>
              <p className="text-2xl mb-12 leading-relaxed" style={{ color: '#c3e8a4' }}>
                Nuestro servicio de leasing incluye alquiler de equipos con mantenimiento completo y reposición de insumos.
              </p>
              
              <div>
                <h3 className="text-2xl font-semibold mb-8" style={{ color: '#d7f2db' }}>Beneficios principales:</h3>
                <div className="space-y-6">
                  {[
                    { icon: Wrench, text: "Mantenimiento incluido." },
                    { icon: RotateCcw, text: "Reposición automática de insumos." },
                    { icon: Headphones, text: "Seguimiento técnico y soporte al cliente." },
                    { icon: Zap, text: "Equipos actualizados según necesidad del cliente." }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-4 group transform hover:translate-x-2 transition-all duration-300"
                      style={{ 
                        animationDelay: `${index * 0.2}s`,
                        animation: `fade-in 0.8s ease-out forwards`
                      }}
                    >
                      <div className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110" style={{ background: 'rgba(47,158,68,0.3)' }}>
                        <item.icon className="w-6 h-6" style={{ color: '#c3e8a4' }} />
                      </div>
                      <p className="text-xl font-medium" style={{ color: '#d7f2db' }}>
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl blur-2xl" style={{ background: 'linear-gradient(135deg, rgba(195,232,164,0.2), rgba(47,158,68,0.2))' }}></div>
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c" 
                alt="Oficina moderna con equipos de impresión"
                className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Compromiso con la Sustentabilidad - Circular Infographic */}
      <section className="py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #2f9e44 0%, #0f3d2e 100%)' }}>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b')] bg-cover bg-center opacity-10"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 rounded-full animate-pulse top-10 left-10" style={{ background: 'rgba(195,232,164,0.05)' }}></div>
          <div className="absolute w-64 h-64 rounded-full animate-pulse bottom-10 right-10" style={{ background: 'rgba(215,242,219,0.05)' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold mb-4" style={{ color: '#d7f2db' }}>Compromiso con la Sustentabilidad</h2>
            <div className="w-32 h-2 mx-auto rounded-full" style={{ background: 'linear-gradient(135deg, #c3e8a4, #2f9e44)' }}></div>
          </div>

          {/* Circular Infographic - Puzzle Pieces */}
          <div className="flex justify-center items-center">
            <div className="relative w-[700px] h-[700px]">
              {/* Central icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full shadow-2xl flex items-center justify-center z-30" style={{ background: 'linear-gradient(135deg, #c3e8a4, #2f9e44)' }}>
                <Leaf className="w-16 h-16 animate-pulse" style={{ color: '#0f3d2e' }} />
              </div>

              {/* Puzzle pieces */}
              {compromisosData.map((compromiso, index) => {
                const isActive = activeQuadrant === index;
                const rotation = index * 90;
                
                return (
                  <div
                    key={index}
                    className={`absolute w-80 h-80 cursor-pointer transition-all duration-700 ease-out ${
                      isActive ? 'scale-110 z-20' : 'hover:scale-105'
                    }`}
                    style={{
                      transform: `rotate(${rotation}deg) ${isActive ? 'scale(1.1)' : 'scale(1)'}`,
                      transformOrigin: 'center center',
                      top: '50%',
                      left: '50%',
                      marginTop: '-160px',
                      marginLeft: '-160px'
                    }}
                    onMouseEnter={() => setActiveQuadrant(index)}
                    onMouseLeave={() => setActiveQuadrant(-1)}
                  >
                    {/* Puzzle piece shape */}
                    <div 
                      className="w-full h-full relative transition-all duration-700"
                      style={{
                        clipPath: index === 0 ? 'polygon(50% 50%, 100% 0%, 100% 50%)' :
                                  index === 1 ? 'polygon(50% 50%, 100% 50%, 100% 100%)' :
                                  index === 2 ? 'polygon(50% 50%, 50% 100%, 0% 100%)' :
                                  'polygon(50% 50%, 0% 50%, 0% 0%)',
                        background: isActive 
                          ? `linear-gradient(135deg, ${compromiso.color}, rgba(195,232,164,0.8))` 
                          : `linear-gradient(135deg, ${compromiso.color}, rgba(61,123,79,0.7))`,
                        filter: isActive ? 'brightness(1.2)' : 'brightness(1)',
                        boxShadow: isActive ? '0 20px 40px rgba(47,158,68,0.3)' : '0 10px 20px rgba(0,0,0,0.2)'
                      }}
                    >
                      {/* Content container */}
                      <div 
                        className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
                        style={{
                          transform: `rotate(-${rotation}deg)`,
                          transformOrigin: 'center center'
                        }}
                      >
                        <div className={`mb-4 transition-all duration-300 ${
                          isActive ? 'scale-125' : ''
                        }`} style={{ color: '#0f3d2e' }}>
                          {compromiso.icon}
                        </div>
                        <h3 className="font-bold text-xl mb-3 leading-tight" style={{ color: '#0f3d2e' }}>
                          {compromiso.titulo}
                        </h3>
                        <p className={`text-sm leading-tight transition-all duration-300 ${
                          isActive ? 'opacity-100' : 'opacity-90'
                        }`} style={{ color: '#0f3d2e' }}>
                          {compromiso.descripcion}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Clientes - Carrusel */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #3d7b4f 0%, #0f3d2e 100%)' }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4" style={{ color: '#d7f2db' }}>Clientes que Confían en Nosotros</h2>
            <p className="text-xl" style={{ color: '#c3e8a4' }}>
              Grandes empresas confían en nuestras soluciones de impresión sustentable. Algunos de nuestros clientes más destacados:
            </p>
          </div>
          
          {/* Carrusel animado */}
          <div className="relative overflow-hidden">
            <div className="flex animate-[scroll_20s_linear_infinite] space-x-8">
              {[...clientes, ...clientes].map((cliente, index) => (
                <div key={index} className="flex-shrink-0">
                  <div className="backdrop-blur-sm rounded-2xl p-8 min-w-[200px] text-center hover:scale-105 transition-transform duration-300 shadow-xl" style={{ background: 'linear-gradient(135deg, rgba(61,123,79,0.6), rgba(47,158,68,0.6))' }}>
                    <div className="text-3xl font-bold" style={{ color: '#d7f2db' }}>{cliente}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16" style={{ background: 'linear-gradient(135deg, #0f3d2e 0%, #000000 100%)' }}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-4" style={{ color: '#d7f2db' }}>Black Colors</h3>
              <p className="mb-6 leading-relaxed text-lg" style={{ color: '#c3e8a4' }}>
                Líderes en soluciones de impresión sustentable con 18 años de experiencia en el mercado.
              </p>
              <div className="flex space-x-4">
                {['FB', 'IG', 'LI'].map((social, index) => (
                  <div key={index} className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg" style={{ background: 'linear-gradient(135deg, #2f9e44, #3d7b4f)' }}>
                    <span className="font-bold" style={{ color: '#d7f2db' }}>{social}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4" style={{ color: '#d7f2db' }}>Contacto</h4>
              <div className="space-y-3">
                {[
                  { icon: Phone, text: "+595 21 123-456" },
                  { icon: Mail, text: "info@blackcolors.py" },
                  { icon: MapPin, text: "Asunción, Paraguay" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center group hover:text-green-300 transition-colors cursor-pointer">
                    <item.icon className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" style={{ color: '#c3e8a4' }} />
                    <span style={{ color: '#c3e8a4' }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4" style={{ color: '#d7f2db' }}>Enlaces</h4>
              <ul className="space-y-2">
                {['Productos', 'Leasing', 'Sustentabilidad', 'Contacto'].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="transition-colors duration-300 hover:translate-x-2 transform inline-block" style={{ color: '#c3e8a4' }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center" style={{ borderColor: '#3d7b4f', color: '#c3e8a4' }}>
            <p>&copy; 2024 Black Colors. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
