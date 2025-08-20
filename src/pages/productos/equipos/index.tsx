import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Monitor, Printer, Server, Wifi, Shield, Zap } from 'lucide-react';
import Footer from '@/components/Footer';

const ProductosEquipos = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        {/* Hero Background */}
        <div className="relative h-[500px] overflow-hidden">
          <img 
            src="/images/background-3.jpg" 
            alt="Equipos Hero"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-gray-50" />
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-8">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight tracking-tight">
                  EQUIPOS
                </h1>
                <h2 className="text-3xl lg:text-5xl font-light text-emerald-300 leading-tight tracking-tight">
                  DE IMPRESIÓN Y TECNOLOGÍA
                </h2>
              </div>
              
              {/* Description */}
              <div className="max-w-4xl mx-auto space-y-4">
                <p className="text-xl lg:text-2xl text-gray-100 leading-relaxed font-light">
                  Soluciones tecnológicas completas para tu empresa
                </p>
                <p className="text-lg lg:text-xl text-gray-200 leading-relaxed font-light max-w-3xl mx-auto">
                  Desde equipos de impresión hasta soluciones de red y monitoreo, 
                  ofrecemos tecnología de vanguardia para optimizar tus operaciones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-24">
        {/* Navegación */}
        <div className="mb-16">
          <Link 
            to="/productos" 
            className="inline-flex items-center space-x-2 text-[#2d472f] hover:text-[#4b6d3b] transition-colors font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver a Productos</span>
          </Link>
        </div>

        {/* Título principal */}
        <div className="text-center mb-20">
          <h3 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
            NUESTROS EQUIPOS
          </h3>
          <div className="w-20 h-px bg-emerald-400 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed font-light">
            Tecnología avanzada para impulsar la productividad de tu empresa
          </p>
        </div>

        {/* Grid de categorías de equipos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Equipos de Impresión */}
          <div className="space-y-6 bg-green-50/30 rounded-3xl p-8 border border-green-100/50 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-emerald-200/50 cursor-pointer group">
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-emerald-200 group-hover:scale-110">
              <Printer className="w-8 h-8 text-emerald-600 transition-all duration-300 group-hover:text-emerald-700" />
            </div>
            <h3 className="text-2xl font-medium text-gray-900 tracking-wide transition-all duration-300 group-hover:text-emerald-800">
              🖨️ EQUIPOS DE IMPRESIÓN
            </h3>
            <p className="text-gray-600 leading-relaxed font-light transition-all duration-300 group-hover:text-gray-700">
              Impresoras láser, multifuncionales, plotters y equipos especializados para diferentes necesidades empresariales.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Impresoras láser monocromáticas y color</li>
              <li>• Multifuncionales con escáner integrado</li>
              <li>• Plotters de gran formato</li>
              <li>• Equipos de producción industrial</li>
            </ul>
          </div>

          {/* Equipos de Red y Conectividad */}
          <div className="space-y-6 bg-blue-50/30 rounded-3xl p-8 border border-blue-100/50 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-blue-200/50 cursor-pointer group">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-blue-200 group-hover:scale-110">
              <Wifi className="w-8 h-8 text-blue-600 transition-all duration-300 group-hover:text-blue-700" />
            </div>
            <h3 className="text-2xl font-medium text-gray-900 tracking-wide transition-all duration-300 group-hover:text-blue-800">
              🌐 EQUIPOS DE RED
            </h3>
            <p className="text-gray-600 leading-relaxed font-light transition-all duration-300 group-hover:text-gray-700">
              Soluciones de conectividad y red para optimizar la comunicación entre dispositivos y usuarios.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Switches y routers empresariales</li>
              <li>• Access points WiFi</li>
              <li>• Cables y conectores de red</li>
              <li>• Soluciones de seguridad</li>
            </ul>
          </div>

          {/* Equipos de Monitoreo y Control */}
          <div className="space-y-6 bg-purple-50/30 rounded-3xl p-8 border border-purple-100/50 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-purple-200/50 cursor-pointer group">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-purple-200 group-hover:scale-110">
              <Monitor className="w-8 h-8 text-purple-600 transition-all duration-300 group-hover:text-purple-700" />
            </div>
            <h3 className="text-2xl font-medium text-gray-900 tracking-wide transition-all duration-300 group-hover:text-purple-800">
              📊 EQUIPOS DE MONITOREO
            </h3>
            <p className="text-gray-600 leading-relaxed font-light transition-all duration-300 group-hover:text-gray-700">
              Sistemas de control y monitoreo para gestionar eficientemente tu parque tecnológico.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Monitores de control</li>
              <li>• Sistemas de gestión centralizada</li>
              <li>• Software de monitoreo</li>
              <li>• Herramientas de diagnóstico</li>
            </ul>
          </div>
        </div>

        {/* Sección de Servicios Adicionales */}
        <section className="w-full bg-gradient-to-br from-green-50/20 to-emerald-50/10 py-24 rounded-3xl">
          <div className="container mx-auto px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
                SERVICIOS COMPLEMENTARIOS
              </h3>
              <div className="w-20 h-px bg-emerald-400 mx-auto"></div>
              <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed font-light">
                No solo vendemos equipos, también te acompañamos en su implementación y mantenimiento
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-lg font-medium text-gray-900">INSTALACIÓN Y CONFIGURACIÓN</h4>
                <p className="text-sm text-gray-600">Configuración profesional de todos los equipos</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-lg font-medium text-gray-900">CAPACITACIÓN DEL PERSONAL</h4>
                <p className="text-sm text-gray-600">Entrenamiento para tu equipo técnico</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto">
                  <Server className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-lg font-medium text-gray-900">SOPORTE TÉCNICO</h4>
                <p className="text-sm text-gray-600">Asistencia continua y mantenimiento</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="w-full bg-gradient-to-br from-white to-green-50/30 py-24 rounded-3xl">
          <div className="container mx-auto px-8 text-center">
            <h3 className="text-4xl font-light text-gray-900 mb-8 tracking-tight">
              ¿NECESITÁS EQUIPOS ESPECIALIZADOS?
            </h3>
            
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Contáctanos para asesorarte sobre la mejor solución tecnológica para tu empresa. 
                Nuestros especialistas te ayudarán a elegir los equipos más adecuados.
              </p>
            </div>

            <button className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-2xl text-lg font-medium hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Solicitar Cotización
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ProductosEquipos; 