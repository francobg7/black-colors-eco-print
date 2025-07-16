
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Recycle, Shield, Award, Printer, Package, FileText, Users, Phone, Mail, MapPin, CheckCircle, ArrowRight, Wrench, RotateCcw, Headphones, Zap } from 'lucide-react';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(-1);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Trigger hero animation on load
    setTimeout(() => setHeroLoaded(true), 200);
    
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

  const pilaresSustentabilidad = [
    {
      icon: <Recycle className="w-12 h-12" />,
      titulo: "Gestión de Residuos",
      descripcion: "Recolección y transformación responsable de todos los residuos de impresión.",
      color: "#3d7b4f"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      titulo: "Trazabilidad", 
      descripcion: "Productos con origen responsable y seguimiento completo del ciclo de vida.",
      color: "#c3e8a4"
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      titulo: "Gestión Final Positiva",
      descripcion: "Únicos en Paraguay con gestión final ambientalmente responsable de residuos.",
      color: "#d7f2db"
    },
    {
      icon: <Award className="w-12 h-12" />,
      titulo: "ISO 14001",
      descripcion: "Ayudamos a nuestros clientes a alcanzar esta certificación ambiental.",
      color: "#2f9e44"
    }
  ];

  const clientes = [
    "Garden", "Cavallaro", "Inpaco", "EcoTech", "GreenSolutions", "NatureCorp", "BioTech", "EcoLife"
  ];

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0f3d2e 0%, #2f9e44 50%, #3d7b4f 100%)' }}>
      {/* Hero Section - Updated with new background image */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/heor-pic.jpeg')] bg-cover bg-center"></div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(15,61,46,0.7) 0%, rgba(47,158,68,0.6) 50%, rgba(61,123,79,0.7) 100%)' }}></div>
        
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
                className={`text-3xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight transition-all duration-1500 ease-out ${
                  heroLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                }`}
                style={{ 
                  color: '#ffffff',
                  textShadow: '3px 3px 6px rgba(0,0,0,0.8)',
                  transform: `translateY(${Math.max(0, 50 - scrollY * 0.1)}px)` 
                }}
              >
                Black Colors: <span 
                  className={`transition-all duration-1800 delay-300 ease-out ${
                    heroLoaded ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
                  }`}
                  style={{ 
                    color: '#c3e8a4',
                    textShadow: '3px 3px 6px rgba(0,0,0,0.9)',
                    display: 'inline-block'
                  }}
                >
                  Impresión Sustentable
                </span> para un Futuro Verde
              </h1>
              <p 
                className={`text-2xl mb-8 leading-relaxed transition-all duration-1200 delay-500 ease-out ${
                  heroLoaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                }`}
                style={{ 
                  color: '#ffffff',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                  transform: `translateY(${Math.max(0, 30 - scrollY * 0.08)}px)` 
                }}
              >
                Convertí tu impresión en una acción por el planeta con nuestras soluciones integrales de impresión sustentable y economía circular.
              </p>
              <div className={`flex flex-col sm:flex-row gap-6 transition-all duration-1000 delay-700 ease-out ${
                heroLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              }`}>
                <Link to="/productos">
                  <Button 
                    size="lg" 
                    className="px-10 py-4 text-xl border-0 shadow-2xl transition-all duration-300 transform hover:scale-105 group"
                    style={{ 
                      background: 'linear-gradient(135deg, #2f9e44, #3d7b4f)',
                      color: '#ffffff'
                    }}
                  >
                    Conocer Productos
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/leasing">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-10 py-4 text-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                    style={{ 
                      borderColor: '#ffffff',
                      color: '#ffffff',
                      background: 'rgba(255,255,255,0.1)',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
                    }}
                  >
                    Servicio de Leasing
                  </Button>
                </Link>
              </div>
            </div>
            <div 
              className={`relative transition-all duration-1300 delay-400 ease-out ${
                heroLoaded ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
              }`}
              style={{ transform: `translateY(${scrollY * -0.2}px)` }}
            >
              <div className="absolute inset-0 rounded-full opacity-30 animate-pulse blur-xl" style={{ background: 'rgba(195,232,164,0.2)' }}></div>
              <img 
                src="/images/productos.png" 
                alt="Productos Black Colors - Impresoras, tinta, toner y resmas sustentables"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section className="py-10 md:py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #3d7b4f 0%, #2f9e44 100%)' }}>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 
                className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-8"
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
                src="/images/nostros.jpg"
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

      {/* Nuestros Productos - Updated with new image */}
      <section className="py-10 md:py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #2f9e44 0%, #0f3d2e 100%)' }}>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9')] bg-cover bg-center opacity-15"></div>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3 relative">
              <div className="absolute inset-0 rounded-3xl blur-2xl" style={{ background: 'linear-gradient(135deg, rgba(195,232,164,0.2), rgba(47,158,68,0.2))' }}></div>
              <img 
                src="/images/MAPSArtboard 2.jpg" 
                alt="Productos Black Colors - Impresora Brother y papel sustentable NAT"
                className="w-full h-48 sm:h-72 md:h-96 lg:h-[600px] object-cover rounded-3xl shadow-2xl relative z-10"
              />
            </div>
            
            <div className="lg:col-span-2 space-y-8">
              <h2 
                className="text-2xl sm:text-4xl lg:text-4xl font-bold mb-12 text-center lg:text-left"
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
                      index === 1 ? 'ml-0 md:ml-8' : index === 2 ? 'ml-0 md:ml-16' : ''
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

      {/* Servicio de Leasing - Updated with light green background */}
      <section className="py-10 md:py-20 relative overflow-hidden" style={{ background: '#a7f3d0' }}>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8 animate-slide-up">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-8 animate-fade-in" style={{ color: '#0f3d2e' }}>
                Servicio de Leasing Sustentable
              </h2>
              <p className="text-2xl mb-12 leading-relaxed" style={{ color: '#1f2937' }}>
                Nuestro servicio de leasing incluye alquiler de equipos con mantenimiento completo y reposición de insumos.
              </p>
              
              <div>
                <h3 className="text-2xl font-semibold mb-8" style={{ color: '#0f3d2e' }}>Beneficios principales:</h3>
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
                      <div className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110" style={{ background: 'rgba(15,61,46,0.2)' }}>
                        <item.icon className="w-6 h-6" style={{ color: '#0f3d2e' }} />
                      </div>
                      <p className="text-xl font-medium" style={{ color: '#1f2937' }}>
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/leasing.jpg"
                alt="Servicio de Leasing"
                className="rounded-2xl shadow-2xl w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Compromiso con la Sustentabilidad */}
      <section className="py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f3d2e 0%, #2f9e44 100%)' }}>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="text-center mb-8 md:mb-20">
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-8" style={{ color: '#d7f2db' }}>
              Compromiso con la Sustentabilidad
            </h2>
            <div className="w-32 h-2 mx-auto rounded-full" style={{ background: 'linear-gradient(135deg, #c3e8a4, #2f9e44)' }}></div>
          </div>

          {/* Clean Circular Design */}
          <div className="flex justify-center items-center">
            <div className="relative w-[600px] h-[600px]">
              {/* Central Logo */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full flex items-center justify-center z-30 shadow-2xl" style={{ background: 'linear-gradient(135deg, #2f9e44, #3d7b4f)' }}>
                <Leaf className="w-16 h-16 animate-pulse" style={{ color: '#d7f2db' }} />
              </div>

              {/* 4 Circular Sections */}
              {pilaresSustentabilidad.map((pilar, index) => {
                const isActive = activeSection === index;
                const angle = (index * 90) - 45; // Start from top-right
                const radius = 200;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                
                return (
                  <div
                    key={index}
                    className="absolute w-72 h-72 cursor-pointer transition-all duration-700 ease-out"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) ${isActive ? 'scale(1.1)' : 'scale(1)'}`,
                      zIndex: isActive ? 20 : 10
                    }}
                    onMouseEnter={() => setActiveSection(index)}
                    onMouseLeave={() => setActiveSection(-1)}
                  >
                    <div 
                      className="w-full h-full rounded-full flex flex-col items-center justify-center text-center p-8 shadow-2xl transition-all duration-700 backdrop-blur-sm border-2"
                      style={{
                        background: isActive 
                          ? `linear-gradient(135deg, ${pilar.color}ee, rgba(47,158,68,0.9))` 
                          : `linear-gradient(135deg, ${pilar.color}cc, rgba(61,123,79,0.8))`,
                        borderColor: isActive ? '#d7f2db' : 'transparent',
                        boxShadow: isActive 
                          ? `0 20px 40px ${pilar.color}66, 0 0 40px ${pilar.color}44` 
                          : '0 10px 30px rgba(0,0,0,0.3)',
                        filter: isActive ? 'brightness(1.2)' : 'brightness(1)'
                      }}
                    >
                      <div className={`mb-6 transition-all duration-300 ${isActive ? 'scale-125' : ''}`} style={{ color: index === 1 || index === 2 ? '#0f3d2e' : '#d7f2db' }}>
                        {pilar.icon}
                      </div>
                      <h3 className={`font-bold text-xl mb-4 leading-tight transition-all duration-300 ${isActive ? 'scale-105' : ''}`} style={{ color: index === 1 || index === 2 ? '#0f3d2e' : '#d7f2db' }}>
                        {pilar.titulo}
                      </h3>
                      <p className={`text-sm leading-relaxed transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-85'}`} style={{ color: index === 1 || index === 2 ? '#0f3d2e' : '#c3e8a4' }}>
                        {pilar.descripcion}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Clientes */}
      <section className="py-10 md:py-20" style={{ background: 'linear-gradient(135deg, #c3e8a4 0%, #d7f2db 50%, #c3e8a4 100%)' }}>
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-4xl lg:text-4xl font-bold mb-4" style={{ color: '#0f3d2e' }}>
              Clientes que Confían en Nosotros
            </h2>
            <p className="text-xl" style={{ color: '#3d7b4f' }}>
              Grandes empresas confían en nuestras soluciones de impresión sustentable. Algunos de nuestros clientes más destacados:
            </p>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="flex animate-[scroll_20s_linear_infinite] space-x-8">
              {[...clientes, ...clientes].map((cliente, index) => (
                <div key={index} className="flex-shrink-0">
                  <div className="rounded-2xl p-8 min-w-[200px] text-center hover:scale-105 transition-transform duration-300 shadow-xl backdrop-blur-sm" style={{ background: 'rgba(47,158,68,0.8)' }}>
                    <div className="text-3xl font-bold" style={{ color: '#d7f2db' }}>{cliente}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-4 text-white">Black Colors</h3>
              <p className="mb-6 leading-relaxed text-lg text-gray-300">
                Líderes en soluciones de impresión sustentable con 18 años de experiencia en el mercado.
              </p>
              <div className="flex space-x-4">
                {['FB', 'IG', 'LI', 'WA'].map((social, index) => (
                  <div key={index} className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-500 flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg">
                    <span className="font-bold text-white">{social}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-white">Contacto</h4>
              <div className="space-y-3">
                {[
                  { icon: Phone, text: "+595 21 123-456" },
                  { icon: Mail, text: "info@blackcolors.py" },
                  { icon: MapPin, text: "Asunción, Paraguay" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center group hover:text-green-400 transition-colors cursor-pointer">
                    <item.icon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-green-400 group-hover:scale-110 transition-all" />
                    <span className="text-gray-300 group-hover:text-green-400">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-white">Enlaces</h4>
              <ul className="space-y-2">
                {['Productos', 'Leasing', 'Sustentabilidad', 'Contacto'].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-2 transform inline-block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 Black Colors. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
