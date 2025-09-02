
import { CheckCircle, Shield, TrendingUp, Printer, Package, Recycle, Download, FileText } from 'lucide-react';
import Footer from '@/components/Footer';
import WhatsAppButtonSecondary from '@/components/WhatsAppButtonSecondary';

const Leasing = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50/30 to-white">
      {/* Hero Section - Nueva estructura con imagen */}
      <div className="relative">
        {/* Hero Background */}
        <div className="relative h-[600px] overflow-hidden">
          <img 
            src="/images/leasing.jpg" 
            alt="Leasing Sustentable Hero"
            className="w-full h-full object-cover"
          />
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-8 pt-20">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              {/* Main Title */}
              <div className="space-y-4 animate-fade-in">
                <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight tracking-tight animate-fade-in-up" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 4px 4px 8px rgba(0,0,0,0.6), 6px 6px 12px rgba(0,0,0,0.4)' }}>
                  LEASING SUSTENTABLE
                </h1>
                <h2 className="text-3xl lg:text-5xl font-bold text-emerald-300 leading-tight tracking-tight animate-fade-in-up animation-delay-200" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 4px 4px 8px rgba(0,0,0,0.6)' }}>
                  DE IMPRESORAS
                </h2>
              </div>
              
              {/* Description */}
              <div className="max-w-4xl mx-auto space-y-4 animate-fade-in animation-delay-300">
                <p className="text-xl lg:text-2xl text-gray-100 leading-relaxed font-bold animate-fade-in-up animation-delay-400" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9), 4px 4px 8px rgba(0,0,0,0.7), 6px 6px 12px rgba(0,0,0,0.5)' }}>
                  Transformá tu Empresa en un Modelo de Sustentabilidad
                </p>
                <p className="text-lg lg:text-xl text-gray-200 leading-relaxed font-bold max-w-3xl mx-auto animate-fade-in-up animation-delay-500" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9), 4px 4px 8px rgba(0,0,0,0.7), 6px 6px 12px rgba(0,0,0,0.5)' }}>
                  En un mundo cada vez más enfocado en la sostenibilidad, las empresas tienen la oportunidad y la responsabilidad de adoptar prácticas que no solo optimicen sus costos operativos, sino que también generen un impacto positivo en el medio ambiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introducción del servicio */}
      <section className="w-full bg-white py-24">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-600 leading-relaxed font-bold">
              Por eso, en BlackColors desarrollamos una solución integral de leasing sustentable de impresoras, pensada para organizaciones comprometidas con la eficiencia, el ahorro y el cuidado del planeta.
            </p>
          </div>

          {/* ¿Qué ofrecemos? */}
          <div className="text-center mb-20">
            <h3 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              ¿QUÉ OFRECEMOS?
            </h3>
            <div className="w-20 h-px bg-emerald-400 mx-auto"></div>
          </div>

          {/* Grid de servicios principales */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* Alquiler de Impresoras */}
            <div className="space-y-6 bg-green-50/30 rounded-3xl p-8 border border-green-100/50 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="w-full h-48 rounded-2xl overflow-hidden mb-6">
                <img 
                  src="/images/servicios/alquileres/hero.jpg" 
                  alt="Impresora de Alta Calidad" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Printer className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 text-center">
                🖨️ Alquiler de Impresoras de Alta Calidad
              </h4>
              <p className="text-gray-600 leading-relaxed font-bold text-center">
                Ponemos a tu disposición equipos confiables y de última generación, como las impresoras Brother HL-1200, ideales para oficinas modernas que buscan rendimiento constante y bajo mantenimiento. No necesitas realizar una inversión inicial elevada. Solo pagás por el uso, sin preocuparte por fallas, recambios ni obsolescencia.
              </p>
            </div>

            {/* Insumos Siempre Disponibles */}
            <div className="space-y-6 bg-blue-50/30 rounded-3xl p-8 border border-blue-100/50 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="w-full h-48 rounded-2xl overflow-hidden mb-6">
                <img 
                  src="/images/servicios/leasing/box-medio.jpeg" 
                  alt="Insumos de Impresión" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Package className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 text-center">
                🧃 Insumos Siempre Disponibles
              </h4>
              <p className="text-gray-600 leading-relaxed font-bold text-center">
                Nos encargamos del suministro continuo de cartuchos y resmas, eliminando la necesidad de que gestiones múltiples proveedores. Te asegurás de contar siempre con materiales de calidad, optimizados para el rendimiento de los equipos, lo que se traduce en una menor huella de carbono y una mayor eficiencia.
              </p>
            </div>

            {/* Gestión Responsable de Desechos */}
            <div className="space-y-6 bg-purple-50/30 rounded-3xl p-8 border border-purple-100/50 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="w-full h-48 rounded-2xl overflow-hidden mb-6">
                <img 
                  src="/images/reciclaje-icon.png" 
                  alt="Reciclaje Responsable" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Recycle className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 text-center">
                ♻️ Gestión Responsable de los Desechos
              </h4>
              <p className="text-gray-600 leading-relaxed font-bold text-center">
                Uno de los pilares de nuestro servicio es el manejo sustentable de los residuos. Todo lo que utilizás desde cartuchos hasta componentes entra en un sistema de trazabilidad de desechos, con una gestión final adecuada y segura. Así, garantizamos que nada termine en vertederos sin tratamiento, contribuyendo activamente a una economía circular.
              </p>
            </div>
          </div>

          {/* Nueva sección de descarga de PDF */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-6 text-white shadow-2xl border border-emerald-200/20">
              <div className="flex items-center justify-between gap-8">
                {/* Icono y contenido principal */}
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-left">
                    <h4 className="text-2xl font-bold mb-2">
                      📋 Descarga Nuestro Brochure Completo
                    </h4>
                    <p className="text-lg text-emerald-50 leading-relaxed">
                      Obtené información detallada sobre nuestro servicio de leasing sustentable, beneficios y precios.
                    </p>
                  </div>
                </div>
                
                {/* Botón de descarga */}
                <div className="flex-shrink-0">
                  <a 
                    href="/pdf/Impresion-sustentable.pdf" 
                    download="Impresion-sustentable.pdf"
                    className="inline-flex items-center gap-3 bg-white text-emerald-600 px-6 py-3 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-emerald-50 focus:outline-none focus:ring-4 focus:ring-white/30"
                  >
                    <Download className="w-5 h-5" />
                    Descargar PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección ¿Por qué elegirnos? */}
      <section className="w-full bg-gradient-to-br from-green-50/20 to-emerald-50/10 py-24">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <h3 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              ¿POR QUÉ ELEGIR NUESTRO LEASING SUSTENTABLE?
            </h3>
            <div className="w-20 h-px bg-emerald-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">Ahorro Garantizado</h4>
              <p className="text-gray-600 leading-relaxed font-bold">
                Eliminás gastos imprevistos de reparación, compra de insumos y renovación de equipos.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">Eficiencia Operativa</h4>
              <p className="text-gray-600 leading-relaxed font-bold">
                Mantenemos tus equipos en condiciones óptimas con soporte técnico incluido.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">Compromiso Ambiental Real</h4>
              <p className="text-gray-600 leading-relaxed font-bold">
                No se trata solo de imprimir, sino de hacerlo de forma consciente, con procesos alineados a los Objetivos de Desarrollo Sostenible (ODS).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección final de contacto */}
      <section className="w-full bg-white py-24">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              ¿LISTO PARA DAR EL PASO HACIA LA SOSTENIBILIDAD?
            </h3>
            <div className="w-20 h-px bg-emerald-400 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-relaxed font-bold mb-8">
              Contáctanos hoy y te asesoramos sin compromiso. Juntos, podemos lograr un modelo de trabajo más eficiente, económico y alineado con los desafíos ambientales de nuestro tiempo.
            </p>
            
            <WhatsAppButtonSecondary
              customMessage="Hola, me interesa el servicio de leasing sustentable de impresoras."
              className="bg-emerald-500 hover:bg-emerald-600 shadow-lg px-8 py-3 text-lg"
              size="lg"
            >
              Solicitar Información de Leasing
            </WhatsAppButtonSecondary>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Leasing;
