import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Wrench, Headphones, Zap, Shield, TrendingUp } from 'lucide-react';
import Footer from '@/components/Footer';

const Alquileres = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navegación superior */}
      <div className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-8 py-6">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-3 text-gray-700 hover:text-[#2d472f] transition-colors font-medium tracking-wide"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm uppercase tracking-widest">Volver a Servicios</span>
          </Link>
        </div>
      </div>

      {/* Hero Section - Primera imagen + introducción */}
      <section className="w-full bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Primera imagen - 50% ancho */}
            <div className="relative">
              <div className="w-full h-[500px] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-blue-100 flex items-center justify-center">
                  <span className="text-gray-500 text-lg font-light tracking-wide">
                    📸 Imagen: Equipos de Impresión Profesionales
                  </span>
                </div>
              </div>
            </div>

            {/* Introducción del servicio */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-7xl font-light text-gray-900 leading-tight tracking-tight">
                  SERVICIO INTEGRAL
                </h1>
                <h2 className="text-4xl lg:text-5xl font-light text-[#2d472f] leading-tight tracking-tight">
                  DE ALQUILER
                </h2>
                <h3 className="text-3xl lg:text-4xl font-light text-gray-600 leading-tight tracking-tight">
                  DE IMPRESORAS
                </h3>
              </div>
              
              <div className="max-w-lg">
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  Un servicio todo incluido donde tu empresa solo se preocupa por imprimir. 
                  Nos encargamos de suministros, mantenimiento y soporte técnico especializado. 
                  Sin costos ocultos, sin sorpresas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Información técnica del servicio - Pantalla completa */}
      <section className="w-full bg-white py-24">
        <div className="container mx-auto px-8">
          {/* Encabezado de sección */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
              ¿QUÉ INCLUYE NUESTRO SERVICIO?
            </h2>
            <div className="w-24 h-px bg-gray-300 mx-auto"></div>
          </div>

          {/* Grid de características principales */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* Suministros completos */}
            <div className="space-y-6">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🧃</span>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 tracking-wide">
                SUMINISTROS COMPLETOS
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Cubrimos el 100% de los insumos necesarios para que tus impresoras funcionen sin interrupciones.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Tóner:</strong> Reposición automática y a tiempo</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Drum:</strong> Reemplazo según ciclo de vida útil</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Kit de fusor:</strong> Sustitución para calidad constante</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Bandejas y rodillos:</strong> Reemplazo por desgaste</span>
                </li>
              </ul>
            </div>

            {/* Mantenimiento garantizado */}
            <div className="space-y-6">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <Wrench className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 tracking-wide">
                MANTENIMIENTO GARANTIZADO
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Mantenimientos programados para prevenir fallas y asegurar el rendimiento óptimo.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Preventivo mensual:</strong> Inspección y limpieza interna</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Correctivo:</strong> Intervención inmediata con repuestos originales</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Firmware:</strong> Actualizaciones automáticas</span>
                </li>
              </ul>
            </div>

            {/* Soporte técnico avanzado */}
            <div className="space-y-6">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
                <Headphones className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 tracking-wide">
                SOPORTE TÉCNICO AVANZADO
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Control remoto, monitoreo en tiempo real y asistencia técnica especializada 24/7.
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
                  <span><strong>Gestión centralizada:</strong> Reportes de uso y eficiencia</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Multiplataforma:</strong> Windows, macOS y Linux</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Beneficios destacados */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-16">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
                ¿POR QUÉ ELEGIR ESTE SERVICIO?
              </h3>
              <div className="w-20 h-px bg-gray-400 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <Shield className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-lg font-medium text-gray-900">SIN INVERSIÓN INICIAL</h4>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <TrendingUp className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-lg font-medium text-gray-900">SIN GESTIÓN DE INVENTARIO</h4>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-lg font-medium text-gray-900">SIN COSTOS IMPREVISTOS</h4>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <Zap className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-lg font-medium text-gray-900">MAYOR EFICIENCIA OPERATIVA</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segunda imagen + información complementaria */}
      <section className="w-full bg-gray-50 py-24">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Información complementaria */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-5xl font-light text-gray-900 leading-tight tracking-tight">
                  GESTIÓN INTELIGENTE
                </h2>
                <h3 className="text-3xl font-light text-[#2d472f] leading-tight tracking-tight">
                  DEL PARQUE DE IMPRESIÓN
                </h3>
              </div>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                <p>
                  Nuestro sistema de monitoreo inteligente te proporciona control total sobre tu infraestructura de impresión.
                </p>
                <p>
                  Accede a reportes detallados de uso, eficiencia por equipo y área, y optimiza el rendimiento de tu empresa.
                </p>
                <p>
                  Toma decisiones informadas basadas en datos reales y maximiza la productividad de tu equipo.
                </p>
              </div>
            </div>

            {/* Segunda imagen - 50% ancho */}
            <div className="relative">
              <div className="w-full h-[500px] bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <span className="text-gray-500 text-lg font-light tracking-wide">
                    📸 Imagen: Servicio Técnico y Monitoreo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="w-full bg-white py-20">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-5xl font-light text-gray-900 mb-8 tracking-tight">
            ¿INTERESADO EN NUESTRO SERVICIO?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Contáctanos para obtener más información sobre nuestras opciones de alquiler 
            y cómo podemos adaptar el servicio a las necesidades específicas de tu empresa.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 text-left">
              <h3 className="text-2xl font-medium text-gray-900 mb-4 tracking-wide">
                ALQUILER DE IMPRESORAS
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Equipos de impresión de alta calidad disponibles para alquiler a corto y largo plazo.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 text-left">
              <h3 className="text-2xl font-medium text-gray-900 mb-4 tracking-wide">
                ALQUILER DE EQUIPOS
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Soluciones tecnológicas completas para eventos y proyectos temporales.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Alquileres; 