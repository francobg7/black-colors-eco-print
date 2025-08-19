import React from 'react';
import { CheckCircle, Wrench, Headphones, Zap, Shield, TrendingUp, Search, Package, Settings, Users, FileText, Mail } from 'lucide-react';
import Footer from '@/components/Footer';

const ServicioTecnico = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50/30 to-white">
      {/* Hero Section - Nueva estructura */}
      <section className="w-full bg-gradient-to-br from-green-50/40 to-emerald-50/20 py-32">
        <div className="container mx-auto px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-light text-gray-900 leading-tight tracking-tight">
                SERVICIO TÉCNICO
              </h1>
              <h2 className="text-4xl lg:text-5xl font-light text-[#2d472f] leading-tight tracking-tight">
                PROFESIONAL
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                Soporte confiable, soluciones a medida para tu empresa.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-light mt-4">
                Nuestro equipo técnico está altamente capacitado para ofrecer diagnósticos precisos y soluciones efectivas, ayudándote a obtener el mejor rendimiento de tus equipos.
              </p>
            </div>

            {/* Botón de contacto */}
            <div className="pt-8">
              <button className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-2xl text-lg font-medium hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Solicitar Servicio Técnico
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Servicios Principales */}
      <section className="w-full bg-white py-24">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <h3 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
              NUESTROS SERVICIOS
            </h3>
            <div className="w-20 h-px bg-emerald-400 mx-auto"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed font-light">
              Soluciones integrales para mantener tus equipos funcionando al máximo rendimiento
            </p>
          </div>

          {/* Grid de características principales */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* Diagnóstico preciso */}
            <div className="space-y-6 bg-green-50/30 rounded-3xl p-8 border border-green-100/50 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-emerald-200/50 cursor-pointer group">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-emerald-200 group-hover:scale-110">
                <Search className="w-8 h-8 text-emerald-600 transition-all duration-300 group-hover:text-emerald-700" />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 tracking-wide transition-all duration-300 group-hover:text-emerald-800">
                🔍 DIAGNÓSTICO PRECISO
              </h3>
              <p className="text-gray-600 leading-relaxed font-light transition-all duration-300 group-hover:text-gray-700">
                Nuestros especialistas detectan y resuelven fallas con rapidez y exactitud, minimizando tiempos de inactividad.
              </p>
            </div>

            {/* Repuestos originales */}
            <div className="space-y-6 bg-green-50/30 rounded-3xl p-8 border border-green-100/50 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-emerald-200/50 cursor-pointer group">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-emerald-200 group-hover:scale-110">
                <Package className="w-8 h-8 text-emerald-600 transition-all duration-300 group-hover:text-emerald-700" />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 tracking-wide transition-all duration-300 group-hover:text-emerald-800">
                🧩 REPUESTOS ORIGINALES
              </h3>
              <p className="text-gray-600 leading-relaxed font-light transition-all duration-300 group-hover:text-gray-700">
                Utilizamos exclusivamente piezas originales Brother, asegurando calidad, rendimiento y durabilidad.
              </p>
            </div>

            {/* Mantenimiento preventivo y correctivo */}
            <div className="space-y-6 bg-green-50/30 rounded-3xl p-8 border border-green-100/50 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-emerald-200/50 cursor-pointer group">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-emerald-200 group-hover:scale-110">
                <Settings className="w-8 h-8 text-emerald-600 transition-all duration-300 group-hover:text-emerald-700" />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 tracking-wide transition-all duration-300 group-hover:text-emerald-800">
                🔧 MANTENIMIENTO PREVENTIVO Y CORRECTIVO
              </h3>
              <p className="text-gray-600 leading-relaxed font-light transition-all duration-300 group-hover:text-gray-700">
                Prolongá la vida útil de tus dispositivos con mantenimientos periódicos realizados por profesionales especializados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Contratos de Servicio Técnico */}
      <section className="w-full bg-gradient-to-br from-green-50/20 to-emerald-50/10 py-24">
        <div className="container mx-auto px-8">
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
                Con BlackColors, tu empresa cuenta con un aliado estratégico en soluciones de impresión: eficiente, confiable y siempre disponible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nueva sección para más información */}
      <section className="w-full bg-white py-24">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
              ¿POR QUÉ ELEGIRNOS?
            </h3>
            <div className="w-20 h-px bg-emerald-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <h4 className="text-2xl font-medium text-gray-900">Experiencia y Profesionalismo</h4>
              <p className="text-gray-600 leading-relaxed font-light">
                Más de 15 años de experiencia en el sector de impresión y tecnología, con un equipo de técnicos certificados y en constante formación.
              </p>
              <p className="text-gray-600 leading-relaxed font-light">
                Trabajamos con las mejores marcas del mercado, especializándonos en equipos Brother para garantizar la máxima calidad en cada intervención.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-2xl font-medium text-gray-900">Respuesta Rápida y Eficiente</h4>
              <p className="text-gray-600 leading-relaxed font-light">
                Entendemos que el tiempo es dinero en tu empresa. Por eso ofrecemos tiempos de respuesta garantizados y soluciones inmediatas.
              </p>
              <p className="text-gray-600 leading-relaxed font-light">
                Nuestro servicio técnico está disponible para emergencias y mantenimientos programados, adaptándonos a tus horarios de trabajo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicioTecnico; 