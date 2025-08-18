import React from 'react';
import { CheckCircle, Wrench, Headphones, Zap, Shield, TrendingUp } from 'lucide-react';
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
                  ESPECIALIZADO
                </h2>
                <h3 className="text-3xl lg:text-4xl font-light text-gray-600 leading-tight tracking-tight">
                  Y MANTENIMIENTO
                </h3>
              </div>
              
              <div className="max-w-lg">
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  Un servicio técnico integral donde tu empresa solo se preocupa por operar. 
                  Nos encargamos del mantenimiento preventivo, reparaciones y soporte técnico especializado. 
                  Sin interrupciones, sin fallas, sin preocupaciones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Información técnica del servicio - Pantalla completa */}
      <section className="w-full bg-gradient-to-br from-white to-green-50/20 py-24">
        <div className="container mx-auto px-8">
          {/* Encabezado de sección */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
              ¿QUÉ INCLUYE NUESTRO SERVICIO?
            </h2>
            <div className="w-24 h-px bg-emerald-300 mx-auto"></div>
          </div>

          {/* Grid de características principales */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* Mantenimiento preventivo */}
            <div className="space-y-6 bg-green-50/30 rounded-3xl p-8 border border-green-100/50">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <Wrench className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 tracking-wide">
                MANTENIMIENTO PREVENTIVO
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Mantenimientos programados para prevenir fallas y asegurar el rendimiento óptimo de tus equipos.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Mensual:</strong> Inspección y limpieza interna completa</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Trimestral:</strong> Revisión de componentes críticos</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Semestral:</strong> Calibración y ajustes de precisión</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Anual:</strong> Revisión completa del sistema</span>
                </li>
              </ul>
            </div>

            {/* Reparaciones garantizadas */}
            <div className="space-y-6 bg-blue-50/30 rounded-3xl p-8 border border-blue-100/50">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 tracking-wide">
                REPARACIONES GARANTIZADAS
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Intervenciones técnicas inmediatas con repuestos originales y garantía extendida en todos los servicios.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Respuesta rápida:</strong> Intervención en menos de 4 horas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Repuestos originales:</strong> Calidad garantizada en cada reparación</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Garantía extendida:</strong> Cobertura completa en todos los trabajos</span>
                </li>
              </ul>
            </div>

            {/* Soporte técnico avanzado */}
            <div className="space-y-6 bg-purple-50/30 rounded-3xl p-8 border border-purple-100/50">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Headphones className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 tracking-wide">
                SOPORTE TÉCNICO AVANZADO
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Control remoto, monitoreo en tiempo real y asistencia técnica especializada disponible 24/7.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Monitoreo remoto:</strong> Estado de equipos en tiempo real</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Asistencia 24/7:</strong> Técnicos capacitados disponibles</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Diagnóstico remoto:</strong> Identificación de problemas sin desplazamiento</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Capacitación incluida:</strong> Entrenamiento para tu equipo</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Beneficios destacados */}
          <div className="bg-gradient-to-r from-green-50/50 to-emerald-100/30 rounded-3xl p-16 border border-green-200/30">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
                ¿POR QUÉ ELEGIR ESTE SERVICIO?
              </h3>
              <div className="w-20 h-px bg-emerald-400 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center mx-auto shadow-lg border border-green-100/50">
                  <Shield className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-lg font-medium text-gray-900">RESPUESTA INMEDIATA</h4>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center mx-auto shadow-lg border border-green-100/50">
                  <TrendingUp className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-lg font-medium text-gray-900">PREVENCIÓN DE FALLAS</h4>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center mx-auto shadow-lg border border-green-100/50">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-lg font-medium text-gray-900">GARANTÍA EXTENDIDA</h4>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center mx-auto shadow-lg border border-green-100/50">
                  <Zap className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-lg font-medium text-gray-900">TÉCNICOS CERTIFICADOS</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segunda imagen + información complementaria */}
      <section className="w-full bg-gradient-to-br from-emerald-50/30 to-green-50/20 py-24">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Información complementaria */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-5xl font-light text-gray-900 leading-tight tracking-tight">
                  TÉCNICOS ESPECIALIZADOS
                </h2>
                <h3 className="text-3xl font-light text-[#2d472f] leading-tight tracking-tight">
                  Y CERTIFICADOS
                </h3>
              </div>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                <p>
                  Nuestro equipo técnico cuenta con certificaciones de los principales fabricantes y años de experiencia.
                </p>
                <p>
                  Realizamos diagnósticos precisos y soluciones efectivas para mantener tus equipos funcionando al máximo rendimiento.
                </p>
                <p>
                  Capacitamos a tu personal para que puedan realizar mantenimientos básicos y optimizar el uso de la tecnología.
                </p>
              </div>
            </div>

            {/* Segunda imagen - 50% ancho */}
            <div className="relative">
              <div className="w-full h-[500px] bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <span className="text-gray-500 text-lg font-light tracking-wide">
                    📸 Imagen: Técnicos Trabajando en Equipos
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="w-full bg-gradient-to-br from-white to-green-50/30 py-20">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-5xl font-light text-gray-900 mb-8 tracking-tight">
            ¿NECESITÁS ASISTENCIA TÉCNICA?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Contáctanos para coordinar una visita técnica o solicitar soporte remoto. 
            Nuestros técnicos especializados están disponibles para resolver cualquier problema.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-green-50/40 rounded-2xl p-8 text-left border border-green-100/50">
              <h3 className="text-2xl font-medium text-gray-900 mb-4 tracking-wide">
                MANTENIMIENTO PREVENTIVO
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Servicios programados para mantener tus equipos funcionando al máximo rendimiento.
              </p>
            </div>
            
            <div className="bg-green-50/40 rounded-2xl p-8 text-left border border-green-100/50">
              <h3 className="text-2xl font-medium text-gray-900 mb-4 tracking-wide">
                REPARACIONES URGENTES
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Intervenciones técnicas inmediatas con garantía y repuestos originales.
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