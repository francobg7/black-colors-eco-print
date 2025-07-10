
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Recycle, Shield, Award, Printer, Package, FileText, Users, Phone, Mail, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

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
      position: { top: '10%', left: '10%' }
    },
    {
      icon: <Shield className="w-16 h-16" />,
      titulo: "Trazabilidad",
      descripcion: "Productos con origen responsable y seguimiento completo del ciclo de vida.",
      position: { top: '10%', right: '10%' }
    },
    {
      icon: <CheckCircle className="w-16 h-16" />,
      titulo: "Gestión Final Positiva",
      descripcion: "Únicos en Paraguay con gestión final ambientalmente responsable de residuos.",
      position: { bottom: '10%', left: '10%' }
    },
    {
      icon: <Award className="w-16 h-16" />,
      titulo: "ISO 14001",
      descripcion: "Ayudamos a nuestros clientes a alcanzar esta certificación ambiental.",
      position: { bottom: '10%', right: '10%' }
    }
  ];

  const clientes = [
    "Garden", "Cavallaro", "Inpaco", "EcoTech", "GreenSolutions", "NatureCorp", "BioTech", "EcoLife"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-emerald-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-800/90 via-emerald-700/80 to-teal-800/90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518495973542-4542c06a5843')] bg-cover bg-center opacity-20"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse"
            style={{ 
              transform: `translateY(${scrollY * 0.5}px)`,
              top: '20%',
              left: '10%'
            }}
          ></div>
          <div 
            className="absolute w-64 h-64 bg-emerald-300/10 rounded-full blur-2xl animate-pulse"
            style={{ 
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
                className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in"
                style={{ transform: `translateY(${Math.max(0, 50 - scrollY * 0.1)}px)` }}
              >
                Black Colors: <span className="text-green-300 bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">Impresión Sustentable</span> para un Futuro Verde
              </h1>
              <p 
                className="text-2xl text-green-100 mb-8 leading-relaxed"
                style={{ transform: `translateY(${Math.max(0, 30 - scrollY * 0.08)}px)` }}
              >
                Convertí tu impresión en una acción por el planeta con nuestras soluciones integrales de impresión sustentable y economía circular.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button 
                  size="lg" 
                  className="bg-green-500 hover:bg-green-400 text-white px-10 py-4 text-xl border-0 shadow-2xl hover:shadow-green-400/25 transition-all duration-300 transform hover:scale-105 group"
                >
                  Conocer Productos
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-green-300 text-green-100 hover:bg-green-700/30 hover:border-green-200 px-10 py-4 text-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                >
                  Servicio de Leasing
                </Button>
              </div>
            </div>
            <div 
              className="relative"
              style={{ transform: `translateY(${scrollY * -0.2}px)` }}
            >
              <div className="absolute inset-0 bg-green-400/20 rounded-full opacity-30 animate-pulse blur-xl"></div>
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
      <section className="py-20 bg-gradient-to-r from-green-800 to-emerald-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 
                className="text-5xl font-bold text-white mb-8"
                style={{ transform: `scale(${Math.min(1.2, 1 + scrollY * 0.0005)})` }}
              >
                Quiénes Somos
              </h2>
              <div className="space-y-6 text-xl text-green-100 leading-relaxed">
                <p className="animate-fade-in">
                  Con <span className="font-semibold text-green-300 text-2xl">18 años de experiencia</span> en el mercado, Black Colors se ha consolidado como líder en soluciones de impresión. Nuestra filosofía es clara:
                </p>
                <blockquote className="text-3xl font-medium text-green-200 italic border-l-4 border-green-400 pl-6 my-8 transform hover:scale-105 transition-transform duration-300">
                  "Nunca damos un no, resolvemos lo que el cliente necesita"
                </blockquote>
                <p>
                  Grandes empresas como <span className="font-semibold text-green-300">Garden, Cavallaro, Inpaco</span> y muchas más confían en nuestra trayectoria y compromiso con la excelencia.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-2xl blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86" 
                alt="Equipo Black Colors"
                className="rounded-2xl shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-8 rounded-2xl shadow-2xl z-20">
                <div className="text-4xl font-bold">18</div>
                <div className="text-lg">Años de experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros Productos - Angular Design */}
      <section className="py-20 bg-gradient-to-bl from-emerald-800 via-green-700 to-teal-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9')] bg-cover bg-center opacity-15"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            {/* Left side - Large image */}
            <div className="lg:col-span-3 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-3xl blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b" 
                alt="Tecnología sustentable"
                className="w-full h-96 lg:h-[600px] object-cover rounded-3xl shadow-2xl relative z-10"
              />
            </div>
            
            {/* Right side - Angular product blocks */}
            <div className="lg:col-span-2 space-y-8">
              <h2 
                className="text-5xl font-bold text-white mb-12 text-center lg:text-left"
                style={{ transform: `translateX(${Math.min(0, -50 + scrollY * 0.1)}px)` }}
              >
                Nuestros Productos
              </h2>
              
              <div className="space-y-6">
                {productos.map((producto, index) => (
                  <div 
                    key={index}
                    className={`bg-gradient-to-r from-green-600/80 to-emerald-600/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-400/25 group ${
                      index === 1 ? 'ml-8' : index === 2 ? 'ml-16' : ''
                    }`}
                    style={{ 
                      transform: `translateX(${index * 20}px) translateY(${Math.max(0, 30 - scrollY * 0.05)}px)` 
                    }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-500/30 p-4 rounded-xl group-hover:bg-green-400/40 transition-colors">
                        {producto.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-green-200 transition-colors">
                          {producto.titulo}
                        </h3>
                        <p className="text-green-100 leading-relaxed">
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

      {/* Servicio de Leasing */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-emerald-700 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615729947596-a598e5de0ab3')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-white mb-8">Servicio de Leasing Sustentable</h2>
            <p className="text-2xl text-green-100 mb-12 leading-relaxed">
              Nuestro servicio de leasing incluye alquiler de equipos con mantenimiento completo y reposición de insumos.
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: CheckCircle, title: "Mantenimiento Incluido" },
                { icon: Package, title: "Reposición de Insumos" },
                { icon: Shield, title: "Garantía Total" },
                { icon: Leaf, title: "Sustentable" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="group transform hover:scale-110 transition-all duration-300"
                >
                  <div className="bg-green-500/30 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-400/40 group-hover:rotate-12 transition-all duration-300">
                    <item.icon className="w-10 h-10 text-green-200" />
                  </div>
                  <h4 className="font-semibold text-white text-lg">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compromiso con la Sustentabilidad - Círculo Dinámico */}
      <section className="py-32 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b')] bg-cover bg-center opacity-10"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-green-400/5 rounded-full animate-pulse top-10 left-10"></div>
          <div className="absolute w-64 h-64 bg-emerald-300/5 rounded-full animate-pulse bottom-10 right-10"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-white mb-4">Compromiso con la Sustentabilidad</h2>
            <div className="w-32 h-2 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full"></div>
          </div>

          {/* Círculo dinámico central */}
          <div className="flex justify-center items-center">
            <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px]">
              {/* Círculo central */}
              <div className="absolute inset-8 bg-gradient-to-br from-green-600/40 to-emerald-600/40 rounded-full backdrop-blur-sm border-4 border-green-400/30 shadow-2xl">
                <div className="absolute inset-4 bg-gradient-to-tr from-green-500/20 to-emerald-500/20 rounded-full animate-pulse"></div>
              </div>

              {/* Cuadrantes del círculo */}
              {compromisosData.map((compromiso, index) => (
                <div
                  key={index}
                  className={`absolute w-40 h-40 lg:w-48 lg:h-48 cursor-pointer group transition-all duration-500 ${
                    activeQuadrant === index ? 'scale-110 z-20' : 'hover:scale-105'
                  }`}
                  style={compromiso.position}
                  onMouseEnter={() => setActiveQuadrant(index)}
                  onMouseLeave={() => setActiveQuadrant(-1)}
                >
                  <div className={`w-full h-full bg-gradient-to-br from-green-500/80 to-emerald-600/80 rounded-2xl shadow-2xl backdrop-blur-sm border-2 border-green-400/40 p-6 text-center flex flex-col items-center justify-center transition-all duration-500 ${
                    activeQuadrant === index 
                      ? 'shadow-green-400/50 border-green-300 bg-gradient-to-br from-green-400/90 to-emerald-500/90' 
                      : 'group-hover:shadow-green-400/30'
                  }`}>
                    <div className={`text-white mb-3 transition-all duration-300 ${
                      activeQuadrant === index ? 'scale-110' : ''
                    }`}>
                      {compromiso.icon}
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2 leading-tight">
                      {compromiso.titulo}
                    </h3>
                    <p className={`text-green-100 text-sm leading-tight transition-all duration-300 ${
                      activeQuadrant === index ? 'opacity-100' : 'opacity-80'
                    }`}>
                      {compromiso.descripcion}
                    </p>
                  </div>
                </div>
              ))}

              {/* Centro del círculo */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-2xl flex items-center justify-center">
                <Leaf className="w-12 h-12 text-white animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clientes - Carrusel */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-emerald-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Clientes que Confían en Nosotros</h2>
            <p className="text-xl text-green-200">
              Grandes empresas confían en nuestras soluciones de impresión sustentable. Algunos de nuestros clientes más destacados:
            </p>
          </div>
          
          {/* Carrusel animado */}
          <div className="relative overflow-hidden">
            <div className="flex animate-[scroll_20s_linear_infinite] space-x-8">
              {[...clientes, ...clientes].map((cliente, index) => (
                <div key={index} className="flex-shrink-0">
                  <div className="bg-gradient-to-r from-green-600/60 to-emerald-600/60 backdrop-blur-sm rounded-2xl p-8 min-w-[200px] text-center hover:scale-105 transition-transform duration-300 shadow-xl">
                    <div className="text-3xl font-bold text-white">{cliente}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-green-900 to-black py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-4 text-white">Black Colors</h3>
              <p className="text-green-300 mb-6 leading-relaxed text-lg">
                Líderes en soluciones de impresión sustentable con 18 años de experiencia en el mercado.
              </p>
              <div className="flex space-x-4">
                {['FB', 'IG', 'LI'].map((social, index) => (
                  <div key={index} className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg">
                    <span className="text-white font-bold">{social}</span>
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
                  <div key={index} className="flex items-center group hover:text-green-300 transition-colors cursor-pointer">
                    <item.icon className="w-5 h-5 mr-3 text-green-400 group-hover:scale-110 transition-transform" />
                    <span className="text-green-200">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-white">Enlaces</h4>
              <ul className="space-y-2">
                {['Productos', 'Leasing', 'Sustentabilidad', 'Contacto'].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-green-200 hover:text-green-300 transition-colors duration-300 hover:translate-x-2 transform inline-block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-green-700 mt-12 pt-8 text-center text-green-300">
            <p>&copy; 2024 Black Colors. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
