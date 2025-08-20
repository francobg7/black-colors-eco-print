import React from 'react';
import { CheckCircle, Wrench, Headphones, Zap, Shield, TrendingUp } from 'lucide-react';
import Footer from '@/components/Footer';

const ServiciosDiferenciados = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50/30 to-white">
      {/* Hero Section with integrated information */}
      <div className="relative">
        {/* Hero Background */}
        <div className="relative h-[600px] overflow-hidden">
          <img 
            src="/images/background-2.jpg" 
            alt="Servicios Diferenciados Hero"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-gray-50" />
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-8 pt-20">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              {/* Main Title */}
              <div className="space-y-4 animate-fade-in">
                <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight tracking-tight animate-fade-in-up">
                  SERVICIOS DIFERENCIADOS
                </h1>
                <h2 className="text-3xl lg:text-5xl font-light text-emerald-300 leading-tight tracking-tight animate-fade-in-up animation-delay-200">
                  Y ESPECIALIZADOS
                </h2>
                <h3 className="text-2xl lg:text-4xl font-light text-emerald-200 leading-tight tracking-tight animate-fade-in-up animation-delay-300">
                  PARA TU EMPRESA
                </h3>
              </div>
              
              {/* Description */}
              <div className="max-w-4xl mx-auto space-y-4 animate-fade-in animation-delay-400">
                <p className="text-xl lg:text-2xl text-gray-100 leading-relaxed font-light animate-fade-in-up animation-delay-500">
                  Un servicio personalizado donde tu empresa recibe soluciones a medida de sus necesidades específicas
                </p>
                <p className="text-lg lg:text-xl text-gray-200 leading-relaxed font-light max-w-3xl mx-auto animate-fade-in-up animation-delay-600">
                  Nos encargamos de la consultoría, capacitación y soporte especializado. 
                  Sin soluciones genéricas, sin servicios estándar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
            <div className="space-y-6 bg-green-50/30 rounded-3xl p-8 border border-green-100/50 transition-all duration-300 ease-in-out hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-200/50 hover:-translate-y-2 hover:border-green-200">
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
            <div className="space-y-6 bg-blue-50/30 rounded-3xl p-8 border border-blue-100/50 transition-all duration-300 ease-in-out hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-200/50 hover:-translate-y-2 hover:border-blue-200">
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
            <div className="space-y-6 bg-purple-50/30 rounded-3xl p-8 border border-purple-100/50 transition-all duration-300 ease-in-out hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-200/50 hover:-translate-y-2 hover:border-purple-200">
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

          {/* Software Especializado de Gestión de Impresoras */}
          <section className="w-full bg-gradient-to-br from-blue-50/30 to-indigo-100/20 py-24 rounded-3xl">
            <div className="container mx-auto px-8">
              {/* Header de la sección */}
              <div className="text-center mb-20">
                <h3 className="text-5xl font-light text-gray-900 mb-4 tracking-tight">
                  SOFTWARE ESPECIALIZADO DE GESTIÓN
                </h3>
                <h4 className="text-4xl font-light text-emerald-600 mb-6 tracking-tight">
                  IMPRESORAS Y TINTAS
                </h4>
                <div className="w-24 h-px bg-emerald-400 mx-auto mb-8"></div>
                <p className="text-xl text-gray-600 leading-relaxed font-light max-w-4xl mx-auto">
                  El software de gestión de impresoras de BlackColors ofrece a los proveedores de servicios y departamentos de TI una visión completa y detallada de todos los dispositivos de impresión conectados a la red. Este innovador sistema de software se distingue por sus funcionalidades avanzadas.
                </p>
              </div>

              {/* Grid de funcionalidades principales */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                {/* Información detallada sobre el rendimiento */}
                <div className="bg-white/80 rounded-3xl p-8 border border-blue-100/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                      <TrendingUp className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="text-2xl font-medium text-gray-900 tracking-wide">
                      INFORMACIÓN DETALLADA SOBRE EL RENDIMIENTO
                    </h4>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed font-light">
                    Proporciona métricas precisas sobre el estado de cada equipo de impresión, tales como el número de páginas impresas, los días restantes hasta que los consumibles (como tinta y tóner) se agoten, entre otros datos cruciales para la planificación de mantenimiento y reposición.
                  </p>
                </div>

                {/* Alertas inteligentes y personalizables */}
                <div className="bg-white/80 rounded-3xl p-8 border border-blue-100/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                      <Zap className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="text-2xl font-medium text-gray-900 tracking-wide">
                      ALERTAS INTELIGENTES Y PERSONALIZABLES
                    </h4>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed font-light">
                    El software genera alertas únicamente cuando es absolutamente necesario, reduciendo significativamente las falsas alarmas y mejorando la eficiencia operativa. Estas alertas están diseñadas para ser proactivas y están orientadas a optimizar la gestión de los dispositivos sin generar notificaciones innecesarias.
                  </p>
                </div>

                {/* Inventario automático */}
                <div className="bg-white/80 rounded-3xl p-8 border border-blue-100/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="text-2xl font-medium text-gray-900 tracking-wide">
                      INVENTARIO AUTOMÁTICO
                    </h4>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed font-light">
                    Realiza un inventario en tiempo real de todos los dispositivos de impresión conectados a la red, permitiendo una visibilidad completa del parque de equipos, sin necesidad de intervenciones manuales, lo que facilita la gestión de recursos y la optimización de operaciones.
                  </p>
                </div>

                {/* Diagnósticos remotos */}
                <div className="bg-white/80 rounded-3xl p-8 border border-blue-100/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                      <Wrench className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="text-2xl font-medium text-gray-900 tracking-wide">
                      DIAGNÓSTICOS REMOTOS
                    </h4>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed font-light">
                    A través de esta funcionalidad, se pueden realizar diagnósticos detallados de los equipos de forma remota, lo que reduce considerablemente la necesidad de visitas técnicas presenciales. Esto no solo reduce costos operativos, sino que también mejora la rapidez en la resolución de problemas y la satisfacción del cliente.
                  </p>
                </div>
              </div>

              {/* Resumen final */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-50/50 to-indigo-100/30 rounded-3xl p-12 border border-blue-200/30">
                  <p className="text-xl text-gray-700 leading-relaxed font-light max-w-4xl mx-auto">
                    Este servicio diferenciado está diseñado para ofrecer una gestión eficiente, reducción de costos operativos y mejorar la experiencia de los clientes, asegurando que los equipos de impresión operen siempre en condiciones óptimas.
                  </p>
                </div>
              </div>
            </div>
          </section>


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