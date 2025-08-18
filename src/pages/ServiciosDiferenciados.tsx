import React from 'react';
import { CheckCircle, Wrench, Headphones, Zap, Shield, TrendingUp } from 'lucide-react';
import Footer from '@/components/Footer';

const ServiciosDiferenciados = () => {
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
                    📸 Imagen: Servicios Especializados y Consultoría
                  </span>
                </div>
              </div>
            </div>

            {/* Introducción del servicio */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-7xl font-light text-gray-900 leading-tight tracking-tight">
                  SERVICIOS DIFERENCIADOS
                </h1>
                <h2 className="text-4xl lg:text-5xl font-light text-[#2d472f] leading-tight tracking-tight">
                  Y ESPECIALIZADOS
                </h2>
                <h3 className="text-3xl lg:text-4xl font-light text-gray-600 leading-tight tracking-tight">
                  PARA TU EMPRESA
                </h3>
              </div>
              
              <div className="max-w-lg">
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  Un servicio personalizado donde tu empresa recibe soluciones a medida de sus necesidades específicas. 
                  Nos encargamos de la consultoría, capacitación y soporte especializado. 
                  Sin soluciones genéricas, sin servicios estándar.
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
            {/* Consultoría especializada */}
            <div className="space-y-6 bg-green-50/30 rounded-3xl p-8 border border-green-100/50">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">📋</span>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 tracking-wide">
                CONSULTORÍA ESPECIALIZADA
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Análisis profundo de tus necesidades y desarrollo de soluciones personalizadas para optimizar tu infraestructura.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Auditoría:</strong> Evaluación completa de tu parque de impresión</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Optimización:</strong> Recomendaciones para mejorar eficiencia</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Planificación:</strong> Estrategia de crecimiento tecnológico</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Implementación:</strong> Acompañamiento en la ejecución</span>
                </li>
              </ul>
            </div>

            {/* Capacitación personalizada */}
            <div className="space-y-6 bg-blue-50/30 rounded-3xl p-8 border border-blue-100/50">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 tracking-wide">
                CAPACITACIÓN PERSONALIZADA
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Programas de entrenamiento diseñados específicamente para tu equipo y tus equipos tecnológicos.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Uso avanzado:</strong> Funcionalidades completas de equipos</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Mantenimiento básico:</strong> Cuidado preventivo por usuarios</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Resolución de problemas:</strong> Soluciones rápidas y efectivas</span>
                </li>
              </ul>
            </div>

            {/* Soporte técnico premium */}
            <div className="space-y-6 bg-purple-50/30 rounded-3xl p-8 border border-purple-100/50">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Headphones className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 tracking-wide">
                SOPORTE TÉCNICO PREMIUM
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Asistencia técnica de nivel superior con respuesta prioritaria y técnicos dedicados para tu empresa.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Respuesta prioritaria:</strong> Atención inmediata para clientes premium</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Técnicos dedicados:</strong> Especialistas asignados a tu cuenta</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Monitoreo avanzado:</strong> Control proactivo de equipos</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Reportes personalizados:</strong> Informes adaptados a tus necesidades</span>
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
                <h4 className="text-lg font-medium text-gray-900">SOLUCIONES A MEDIDA</h4>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center mx-auto shadow-lg border border-green-100/50">
                  <TrendingUp className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-lg font-medium text-gray-900">EXPERTOS ESPECIALIZADOS</h4>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center mx-auto shadow-lg border border-green-100/50">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-lg font-medium text-gray-900">ATENCIÓN PRIORITARIA</h4>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center mx-auto shadow-lg border border-green-100/50">
                  <Zap className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-lg font-medium text-gray-900">RESULTADOS GARANTIZADOS</h4>
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
                  SOLUCIONES INTEGRALES
                </h2>
                <h3 className="text-3xl font-light text-[#2d472f] leading-tight tracking-tight">
                  Y PERSONALIZADAS
                </h3>
              </div>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                <p>
                  Nuestro equipo de especialistas analiza cada caso de forma individual para desarrollar soluciones únicas.
                </p>
                <p>
                  Combinamos tecnología avanzada con experiencia sectorial para maximizar la eficiencia de tu empresa.
                </p>
                <p>
                  Acompañamos tu crecimiento tecnológico con servicios que evolucionan junto a tus necesidades.
                </p>
              </div>
            </div>

            {/* Segunda imagen - 50% ancho */}
            <div className="relative">
              <div className="w-full h-[500px] bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <span className="text-gray-500 text-lg font-light tracking-wide">
                    📸 Imagen: Consultoría y Análisis Especializado
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
            ¿NECESITÁS SOLUCIONES ESPECIALIZADAS?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Contáctanos para analizar tus necesidades específicas y desarrollar soluciones personalizadas 
            que impulsen la eficiencia y productividad de tu empresa.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-green-50/40 rounded-2xl p-8 text-left border border-green-100/50">
              <h3 className="text-2xl font-medium text-gray-900 mb-4 tracking-wide">
                CONSULTORÍA ESPECIALIZADA
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Análisis profundo y soluciones personalizadas para optimizar tu infraestructura tecnológica.
              </p>
            </div>
            
            <div className="bg-green-50/40 rounded-2xl p-8 text-left border border-green-100/50">
              <h3 className="text-2xl font-medium text-gray-900 mb-4 tracking-wide">
                CAPACITACIÓN PERSONALIZADA
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Programas de entrenamiento diseñados específicamente para tu equipo y equipos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiciosDiferenciados; 