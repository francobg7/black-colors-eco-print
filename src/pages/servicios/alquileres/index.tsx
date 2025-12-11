import { CheckCircle, Wrench, Headphones, Zap, Shield, TrendingUp } from 'lucide-react';
import Footer from '@/components/Footer';
import WhatsAppButtonSecondary from '@/components/WhatsAppButtonSecondary';
import SEO from '@/components/SEO';

const Alquileres = () => {
  return (
    <>
      <SEO
        title="Alquiler de Impresoras - Servicio Flexible y Económico"
        description="Alquila impresoras Brother con servicio técnico incluido. Planes flexibles mensuales, mantenimiento y soporte técnico garantizado. Sin inversión inicial."
        keywords="alquiler impresoras, renta impresoras, alquiler equipos oficina, impresoras Brother alquiler, servicio técnico incluido, planes mensuales, alquiler impresoras Asunción"
        ogImage="/images/servicios/alquileres/hero-alquileres.webp"
        category="Servicios"
        includeNavigation={true}
        navigationContext="servicios"
        service={{
          name: "Alquiler de Impresoras",
          description: "Servicio de alquiler de impresoras con mantenimiento y soporte técnico incluido",
          provider: "Black Colors",
          serviceType: "Alquiler de equipos",
          areaServed: "Paraguay"
        }}
        faqItems={[
          {
            question: '¿Cuánto cuesta alquilar una impresora por mes?',
            answer: 'Los precios de alquiler varían según el modelo y funcionalidades. Tenemos planes desde impresoras básicas monocromáticas hasta multifuncionales a color. Incluyen mantenimiento, soporte técnico y consumibles básicos. Solicita tu cotización personalizada.'
          },
          {
            question: '¿El alquiler incluye servicio técnico y mantenimiento?',
            answer: 'Sí, todos nuestros planes de alquiler incluyen mantenimiento preventivo, servicio técnico especializado y soporte in-situ. Garantizamos el funcionamiento óptimo del equipo durante todo el período de alquiler.'
          },
          {
            question: '¿Puedo alquilar impresoras por períodos cortos?',
            answer: 'Ofrecemos alquileres flexibles desde 1 mes hasta contratos anuales. Para eventos especiales, proyectos temporales o necesidades estacionales, tenemos opciones de alquiler a corto plazo con entrega y retiro incluidos.'
          },
          {
            question: '¿Qué pasa si la impresora alquilada se daña?',
            answer: 'Como parte del servicio, nos hacemos cargo de todas las reparaciones sin costo adicional. Si el equipo requiere reparación mayor, proporcionamos un reemplazo inmediato para que no interrumpas tus operaciones.'
          }
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-green-50/30 to-white">
      {/* Hero Section with integrated information */}
      <div className="relative">
        {/* Hero Background */}
        <div className="relative h-[600px] overflow-hidden">
          <img 
            src="/images/servicios/alquileres/hero-alquileres.webp" 
            alt="Alquileres Hero"
            className="w-full h-full object-cover"
          />
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-8 pt-20">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              {/* Main Title */}
              <div className="space-y-4 animate-fade-in">
                <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight tracking-tight animate-fade-in-up" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 4px 4px 8px rgba(0,0,0,0.6), 6px 6px 12px rgba(0,0,0,0.4)' }}>
                  SERVICIO DE ALQUILER
                </h1>
                <h2 className="text-3xl lg:text-5xl font-bold text-emerald-300 leading-tight tracking-tight animate-fade-in-up animation-delay-200" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 4px 4px 8px rgba(0,0,0,0.6)' }}>
                  DE IMPRESORAS
                </h2>
              </div>
              
              {/* Description */}
              <div className="max-w-4xl mx-auto space-y-4 animate-fade-in animation-delay-400">
                <p className="text-xl lg:text-2xl text-gray-100 leading-relaxed font-bold animate-fade-in-up animation-delay-500" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9), 4px 4px 8px rgba(0,0,0,0.7), 6px 6px 12px rgba(0,0,0,0.5)' }}>
                  Un servicio todo incluido donde tu empresa solo se preocupa por imprimir
                </p>
                <p className="text-lg lg:text-xl text-gray-200 leading-relaxed font-bold max-w-3xl mx-auto animate-fade-in-up animation-delay-600" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9), 4px 4px 8px rgba(0,0,0,0.7), 6px 6px 12px rgba(0,0,0,0.5)' }}>
                  Nos encargamos de suministros, mantenimiento y soporte técnico especializado. 
                  Sin costos ocultos, sin sorpresas.
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
            <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              ¿QUÉ INCLUYE NUESTRO SERVICIO?
            </h2>
            <div className="w-24 h-px bg-emerald-300 mx-auto"></div>
          </div>

          {/* Grid de características principales */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* Suministros completos */}
            <div className="space-y-6 bg-green-50/30 rounded-3xl p-8 border border-green-100/50 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-green-50/50 cursor-pointer">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🧃</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 tracking-wide">
                SUMINISTROS COMPLETOS
              </h3>
              <p className="text-gray-600 leading-relaxed font-bold">
                Cubrimos el 100% de los insumos necesarios para que tus impresoras funcionen sin interrupciones.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="font-bold"><strong>Tóner:</strong> Reposición automática y a tiempo</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="font-bold"><strong>Drum:</strong> Reemplazo según ciclo de vida útil</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="font-bold"><strong>Kit de fusor:</strong> Sustitución para calidad constante</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="font-bold"><strong>Bandejas y rodillos:</strong> Reemplazo por desgaste</span>
                </li>
              </ul>
            </div>

            {/* Mantenimiento garantizado */}
            <div className="space-y-6 bg-blue-50/30 rounded-3xl p-8 border border-blue-100/50 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-blue-50/50 cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Wrench className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 tracking-wide">
                MANTENIMIENTO GARANTIZADO
              </h3>
              <p className="text-gray-600 leading-relaxed font-bold">
                Mantenimientos programados para prevenir fallas y asegurar el rendimiento óptimo.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="font-bold"><strong>Preventivo mensual:</strong> Inspección y limpieza interna</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="font-bold"><strong>Correctivo:</strong> Intervención inmediata con repuestos originales</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="font-bold"><strong>Firmware:</strong> Actualizaciones automáticas</span>
                </li>
              </ul>
            </div>

            {/* Soporte técnico avanzado */}
            <div className="space-y-6 bg-purple-50/30 rounded-3xl p-8 border border-purple-100/50 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-purple-50/50 cursor-pointer">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Headphones className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 tracking-wide">
                SOPORTE TÉCNICO AVANZADO
              </h3>
              <p className="text-gray-600 leading-relaxed font-bold">
                Control remoto, monitoreo en tiempo real y asistencia técnica especializada 24/7.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="font-bold"><strong>Monitoreo remoto:</strong> Estado de equipos en tiempo real</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="font-bold"><strong>Asistencia 24/7:</strong> Técnicos capacitados disponibles</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="font-bold"><strong>Gestión centralizada:</strong> Reportes de uso y eficiencia</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="font-bold"><strong>Multiplataforma:</strong> Windows, macOS y Linux</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Beneficios destacados */}
          <div className="bg-gradient-to-r from-green-50/50 to-emerald-100/30 rounded-3xl p-16 border border-green-200/30">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                ¿POR QUÉ ELEGIR ESTE SERVICIO?
              </h3>
              <div className="w-20 h-px bg-emerald-400 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center mx-auto shadow-lg border border-green-100/50">
                  <Shield className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">SIN INVERSIÓN INICIAL</h4>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center mx-auto shadow-lg border border-green-100/50">
                  <TrendingUp className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">SIN GESTIÓN DE INVENTARIO</h4>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center mx-auto shadow-lg border border-green-100/50">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">SIN COSTOS IMPREVISTOS</h4>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center mx-auto shadow-lg border border-green-100/50">
                  <Zap className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">MAYOR EFICIENCIA OPERATIVA</h4>
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
                <h2 className="text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                  GESTIÓN INTELIGENTE
                </h2>
                <h3 className="text-3xl font-bold text-[#2d472f] leading-tight tracking-tight">
                  DEL PARQUE DE IMPRESIÓN
                </h3>
              </div>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-bold">
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
              <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl border-2 border-emerald-100/40">
                <img 
                  src="/images/servicios/alquileres/gestion-inteligente.jpg" 
                  alt="Servicio Técnico y Monitoreo" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-start p-6">
                  <span className="text-white text-lg font-medium tracking-wide">
                    Monitoreo en tiempo real de su parque de impresoras
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
          <h2 className="text-5xl font-bold text-gray-900 mb-8 tracking-tight">
            ¿INTERESADO EN NUESTRO SERVICIO?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-bold">
            Contáctanos para obtener más información sobre nuestras opciones de alquiler 
            y cómo podemos adaptar el servicio a las necesidades específicas de tu empresa.
          </p>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-green-50/40 rounded-2xl p-10 text-center border border-green-100/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 tracking-wide">
                ALQUILER DE IMPRESORAS
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed font-bold">
                Equipos de impresión de alta calidad disponibles para alquiler a corto y largo plazo.
              </p>
              
              <WhatsAppButtonSecondary
                customMessage="Hola, me interesa el servicio de alquiler de impresoras."
                className="bg-emerald-500 hover:bg-emerald-600 shadow-lg px-8 py-3 text-lg mt-6"
                size="lg"
              >
                Solicitar Información de Alquiler
              </WhatsAppButtonSecondary>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default Alquileres; 