
import React from 'react';
import { CheckCircle, Wrench, Headphones, Zap, Shield, TrendingUp, Printer, Package, Recycle, Users, FileText, Mail } from 'lucide-react';
import Footer from '@/components/Footer';

const Leasing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50/30 to-white">
      {/* Hero Section - Nueva estructura con imagen */}
      <section className="w-full bg-gradient-to-br from-green-50/40 to-emerald-50/20 py-32">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Contenido del hero */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-7xl font-light text-gray-900 leading-tight tracking-tight">
                  LEASING SUSTENTABLE
                </h1>
                <h2 className="text-4xl lg:text-5xl font-light text-[#2d472f] leading-tight tracking-tight">
                  DE IMPRESORAS
                </h2>
              </div>
              
              <div className="max-w-lg">
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  Transformá tu Empresa en un Modelo de Sustentabilidad
                </p>
                <p className="text-lg text-gray-600 leading-relaxed font-light mt-4">
                  En un mundo cada vez más enfocado en la sostenibilidad, las empresas tienen la oportunidad —y la responsabilidad— de adoptar prácticas que no solo optimicen sus costos operativos, sino que también generen un impacto positivo en el medio ambiente.
                </p>
              </div>

              {/* Botón de contacto */}
              <div className="pt-8">
                <button className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-2xl text-lg font-medium hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Solicitar Leasing Sustentable
                </button>
              </div>
            </div>

            {/* Imagen del hero */}
            <div className="relative">
              <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/leasing.jpg" 
                  alt="Leasing Sustentable de Impresoras" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introducción del servicio */}
      <section className="w-full bg-white py-24">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Por eso, en BlackColors desarrollamos una solución integral de leasing sustentable de impresoras, pensada para organizaciones comprometidas con la eficiencia, el ahorro y el cuidado del planeta.
            </p>
          </div>

          {/* ¿Qué ofrecemos? */}
          <div className="text-center mb-20">
            <h3 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
              ¿QUÉ OFRECEMOS?
            </h3>
            <div className="w-20 h-px bg-emerald-400 mx-auto"></div>
          </div>

          {/* Grid de servicios principales */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* Alquiler de Impresoras */}
            <div className="space-y-6 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="w-full h-48 rounded-2xl overflow-hidden mb-6">
                <img 
                  src="/images/impresoras/1.jpg" 
                  alt="Impresora de Alta Calidad" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Printer className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="text-2xl font-medium text-gray-900 text-center">
                🖨️ Alquiler de Impresoras de Alta Calidad
              </h4>
              <p className="text-gray-600 leading-relaxed font-light text-center">
                Ponemos a tu disposición equipos confiables y de última generación, como las impresoras Brother HL-1200, ideales para oficinas modernas que buscan rendimiento constante y bajo mantenimiento. No necesitas realizar una inversión inicial elevada. Solo pagás por el uso, sin preocuparte por fallas, recambios ni obsolescencia.
              </p>
            </div>

            {/* Insumos Siempre Disponibles */}
            <div className="space-y-6 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="w-full h-48 rounded-2xl overflow-hidden mb-6">
                <img 
                  src="/images/cartuchos/portada.jpg" 
                  alt="Insumos de Impresión" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Package className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="text-2xl font-medium text-gray-900 text-center">
                🧃 Insumos Siempre Disponibles
              </h4>
              <p className="text-gray-600 leading-relaxed font-light text-center">
                Nos encargamos del suministro continuo de cartuchos y resmas, eliminando la necesidad de que gestiones múltiples proveedores. Te asegurás de contar siempre con materiales de calidad, optimizados para el rendimiento de los equipos, lo que se traduce en una menor huella de carbono y una mayor eficiencia.
              </p>
            </div>

            {/* Gestión Responsable de Desechos */}
            <div className="space-y-6 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer">
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
              <h4 className="text-2xl font-medium text-gray-900 text-center">
                ♻️ Gestión Responsable de los Desechos
              </h4>
              <p className="text-gray-600 leading-relaxed font-light text-center">
                Uno de los pilares de nuestro servicio es el manejo sustentable de los residuos. Todo lo que utilizás —desde cartuchos hasta componentes— entra en un sistema de trazabilidad de desechos, con una gestión final adecuada y segura. Así, garantizamos que nada termine en vertederos sin tratamiento, contribuyendo activamente a una economía circular.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Por qué elegir nuestro leasing sustentable? */}
      <section className="w-full bg-gradient-to-br from-green-50/20 to-emerald-50/10 py-24">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
              ¿POR QUÉ ELEGIR NUESTRO LEASING SUSTENTABLE?
            </h3>
            <div className="w-20 h-px bg-emerald-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="text-lg font-medium text-gray-900">Ahorro Garantizado</h4>
              <p className="text-sm text-gray-600">Eliminás gastos imprevistos de reparación, compra de insumos y renovación de equipos.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto">
                <TrendingUp className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="text-lg font-medium text-gray-900">Eficiencia Operativa</h4>
              <p className="text-sm text-gray-600">Mantenemos tus equipos en condiciones óptimas con soporte técnico incluido.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="text-lg font-medium text-gray-900">Compromiso Ambiental Real</h4>
              <p className="text-sm text-gray-600">No se trata solo de imprimir, sino de hacerlo de forma consciente, con procesos alineados a los Objetivos de Desarrollo Sostenible (ODS).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impacto Real, No Promesas Vacías */}
      <section className="w-full bg-white py-24">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Contenido */}
            <div className="max-w-2xl space-y-8">
              <h3 className="text-4xl font-light text-gray-900 tracking-tight">
                IMPACTO REAL, NO PROMESAS VACÍAS
              </h3>
              <div className="w-20 h-px bg-emerald-400"></div>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                <p>
                  Tu empresa puede hacer la diferencia. Con cada hoja que imprimís bajo nuestro sistema, estás apoyando una red de logística inversa, reutilización y reciclaje que disminuye considerablemente el impacto ecológico de las actividades de oficina.
                </p>
                <p>
                  Al convertirte en parte de nuestro ecosistema sustentable, no solo accedés a tecnología de impresión avanzada, sino que también te posicionás como un actor clave en la transformación verde del mundo empresarial.
                </p>
              </div>
            </div>

            {/* Imagen de impacto ambiental */}
            <div className="relative">
              <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/clean-energy.jpg" 
                  alt="Energía Limpia y Sustentabilidad" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="w-full bg-gradient-to-br from-green-50/30 to-emerald-50/20 py-24">
        <div className="container mx-auto px-8 text-center">
          <h3 className="text-4xl font-light text-gray-900 mb-8 tracking-tight">
            ¿LISTO PARA DAR EL PASO HACIA LA SOSTENIBILIDAD?
          </h3>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Contáctanos hoy y te asesoramos sin compromiso. Juntos, podemos lograr un modelo de trabajo más eficiente, económico y alineado con los desafíos ambientales de nuestro tiempo.
            </p>
          </div>

          <button className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-2xl text-lg font-medium hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            Contactar Ahora
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Leasing;
