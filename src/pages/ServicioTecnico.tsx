import React from 'react';
import { CheckCircle, Wrench, Headphones, Zap, Shield, TrendingUp, Search, Package, Settings, Users, FileText, Mail } from 'lucide-react';
import Footer from '@/components/Footer';

const ServicioTecnico = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50/30 to-white">
      {/* Hero Section - Primera imagen + introducción */}
      <section className="w-full bg-gradient-to-br from-green-50/40 to-emerald-50/20">
        <div className="container mx-auto px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Primera imagen - 50% ancho */}
            <div className="relative">
              <div className="w-full h-[500px] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-blue-100 flex items-center justify-center">
                  <span className="text-gray-500 text-lg font-light tracking-wide">
                    📸 Imagen: Equipo Técnico Especializado
                  </span>
                </div>
              </div>
            </div>

            {/* Introducción del servicio */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-7xl font-light text-gray-900 leading-tight tracking-tight">
                  SERVICIO TÉCNICO
                </h1>
                <h2 className="text-4xl lg:text-5xl font-light text-[#2d472f] leading-tight tracking-tight">
                  PROFESIONAL
                </h2>
              </div>
              
              <div className="max-w-lg">
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  Soporte confiable, soluciones a medida.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed font-light mt-4">
                  Nuestro equipo técnico está altamente capacitado para ofrecer diagnósticos precisos y soluciones efectivas, ayudándote a obtener el mejor rendimiento de tus equipos.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed font-light mt-4">
                  Adaptamos cada solución a las necesidades específicas de tu empresa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Información técnica del servicio - Pantalla completa */}
      <section className="w-full bg-gradient-to-br from-white to-green-50/20 py-24">
        <div className="container mx-auto px-8">
          {/* Grid de características principales */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* Diagnóstico preciso */}
            <div className="space-y-6 bg-green-50/30 rounded-3xl p-8 border border-green-100/50">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <Search className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 tracking-wide">
                🔍 DIAGNÓSTICO PRECISO
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Nuestros especialistas detectan y resuelven fallas con rapidez y exactitud, minimizando tiempos de inactividad.
              </p>
            </div>

            {/* Repuestos originales */}
            <div className="space-y-6 bg-blue-50/30 rounded-3xl p-8 border border-blue-100/50">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Package className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 tracking-wide">
                🧩 REPUESTOS ORIGINALES
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Utilizamos exclusivamente piezas originales Brother, asegurando calidad, rendimiento y durabilidad.
              </p>
            </div>

            {/* Mantenimiento preventivo y correctivo */}
            <div className="space-y-6 bg-purple-50/30 rounded-3xl p-8 border border-purple-100/50">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Settings className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 tracking-wide">
                🔧 MANTENIMIENTO PREVENTIVO Y CORRECTIVO
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Prolongá la vida útil de tus dispositivos con mantenimientos periódicos realizados por profesionales especializados.
              </p>
            </div>
          </div>

          {/* Contratos de Servicio Técnico para Empresas */}
          <div className="bg-gradient-to-r from-green-50/50 to-emerald-100/30 rounded-3xl p-16 border border-green-200/30">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
                CONTRATOS DE SERVICIO TÉCNICO PARA EMPRESAS
              </h3>
              <div className="w-20 h-px bg-emerald-400 mx-auto"></div>
              <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed font-light">
                Soporte continuo con atención personalizada.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg text-gray-600 leading-relaxed font-light text-center">
                Ofrecemos planes diseñados para garantizar el funcionamiento óptimo de tus equipos a través de visitas técnicas programadas y cobertura completa:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center mx-auto shadow-lg border border-green-100/50">
                  <Users className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-lg font-medium text-gray-900">ATENCIÓN PERSONALIZADA</h4>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center mx-auto shadow-lg border border-green-100/50">
                  <FileText className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-lg font-medium text-gray-900">SUMINISTRO DE INSUMOS</h4>
                <p className="text-sm text-gray-600">(Tóner y tinta)</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center mx-auto shadow-lg border border-green-100/50">
                  <Wrench className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-lg font-medium text-gray-900">MANTENIMIENTOS PREVENTIVOS REGULARES</h4>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center mx-auto shadow-lg border border-green-100/50">
                  <Shield className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-lg font-medium text-gray-900">COBERTURA COMPLETA</h4>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-600 leading-relaxed font-light max-w-4xl mx-auto">
                Con Grupo HLC, tu empresa cuenta con un aliado estratégico en soluciones de impresión: eficiente, confiable y siempre disponible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="w-full bg-gradient-to-br from-white to-green-50/30 py-20">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-5xl font-light text-gray-900 mb-8 tracking-tight">
            📩 CONSULTANOS HOY Y RECIBÍ TODA LA INFORMACIÓN QUE NECESITÁS.
          </h2>
          
          <div className="flex justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl text-xl font-medium transition-colors duration-300 flex items-center space-x-3">
              <Mail className="w-6 h-6" />
              <span>👉 CONTACTANOS</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicioTecnico; 