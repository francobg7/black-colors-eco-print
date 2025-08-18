
import React from 'react';
import { CheckCircle, Wrench, Headphones, Zap, Shield, TrendingUp } from 'lucide-react';
import Footer from '@/components/Footer';

const Leasing = () => {
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
                    📸 Imagen: Equipos de Tecnología Sustentable
                  </span>
                </div>
              </div>
            </div>

            {/* Introducción del servicio */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-7xl font-light text-gray-900 leading-tight tracking-tight">
                  LEASING SUSTENTABLE
                </h1>
                <h2 className="text-4xl lg:text-5xl font-light text-[#2d472f] leading-tight tracking-tight">
                  DE TECNOLOGÍA
                </h2>
                <h3 className="text-3xl lg:text-4xl font-light text-gray-600 leading-tight tracking-tight">
                  RESPONSABLE
                </h3>
              </div>
              
              <div className="max-w-lg">
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  Un servicio de leasing integral donde tu empresa accede a la tecnología más avanzada sin inversión inicial. 
                  Nos encargamos de la gestión completa, mantenimiento y reciclaje responsable. 
                  Sin costos ocultos, sin impacto ambiental.
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
            {/* Equipos de última generación */}
            <div className="space-y-6 bg-green-50/30 rounded-3xl p-8 border border-green-100/50">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">💻</span>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 tracking-wide">
                EQUIPOS DE ÚLTIMA GENERACIÓN
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Acceso a la tecnología más avanzada y eficiente del mercado sin necesidad de inversión inicial.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Impresoras:</strong> Láser y multifuncionales de alta velocidad</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Escáneres:</strong> Tecnología de reconocimiento avanzado</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Copiadoras:</strong> Sistemas de impresión profesional</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Equipos de red:</strong> Soluciones de conectividad integral</span>
                </li>
              </ul>
            </div>

            {/* Gestión integral incluida */}
            <div className="space-y-6 bg-blue-50/30 rounded-3xl p-8 border border-blue-100/50">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Wrench className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 tracking-wide">
                GESTIÓN INTEGRAL INCLUIDA
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Mantenimiento preventivo, soporte técnico y gestión de suministros incluidos en el contrato.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Mantenimiento:</strong> Preventivo y correctivo incluido</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Suministros:</strong> Tóner, papel y consumibles</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Soporte:</strong> Técnico especializado 24/7</span>
                </li>
              </ul>
            </div>

            {/* Reciclaje responsable */}
            <div className="space-y-6 bg-purple-50/30 rounded-3xl p-8 border border-purple-100/50">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">♻️</span>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 tracking-wide">
                RECICLAJE RESPONSABLE
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Gestión final del ciclo de vida de los equipos con prácticas sustentables y certificadas.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Desmontaje:</strong> Separación de componentes reciclables</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Reciclaje:</strong> Materiales procesados responsablemente</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Disposición:</strong> Final segura y certificada</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Certificación:</strong> Cumplimiento de estándares ambientales</span>
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
                <h4 className="text-lg font-medium text-gray-900">SIN INVERSIÓN INICIAL</h4>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center mx-auto shadow-lg border border-green-100/50">
                  <TrendingUp className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-lg font-medium text-gray-900">TECNOLOGÍA SIEMPRE ACTUALIZADA</h4>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center mx-auto shadow-lg border border-green-100/50">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-lg font-medium text-gray-900">GESTIÓN COMPLETA INCLUIDA</h4>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center mx-auto shadow-lg border border-green-100/50">
                  <Zap className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-lg font-medium text-gray-900">IMPACTO AMBIENTAL CERO</h4>
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
                  FINANCIAMIENTO FLEXIBLE
                </h2>
                <h3 className="text-3xl font-light text-[#2d472f] leading-tight tracking-tight">
                  Y PERSONALIZADO
                </h3>
              </div>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                <p>
                  Nuestras opciones de leasing se adaptan a las necesidades específicas de tu empresa y flujo de caja.
                </p>
                <p>
                  Contratos flexibles desde 12 hasta 60 meses, con opciones de renovación y actualización de equipos.
                </p>
                <p>
                  Sin costos ocultos, sin penalizaciones por cancelación anticipada y con opciones de compra al final del contrato.
                </p>
              </div>
            </div>

            {/* Segunda imagen - 50% ancho */}
            <div className="relative">
              <div className="w-full h-[500px] bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <span className="text-gray-500 text-lg font-light tracking-wide">
                    📸 Imagen: Contratos y Financiamiento
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
            ¿INTERESADO EN NUESTRO LEASING?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Contáctanos para obtener más información sobre nuestras opciones de leasing sustentable 
            y cómo podemos adaptar el servicio a las necesidades específicas de tu empresa.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-green-50/40 rounded-2xl p-8 text-left border border-green-100/50">
              <h3 className="text-2xl font-medium text-gray-900 mb-4 tracking-wide">
                LEASING DE EQUIPOS
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Tecnología de última generación disponible para leasing a corto y largo plazo.
              </p>
            </div>
            
            <div className="bg-green-50/40 rounded-2xl p-8 text-left border border-green-100/50">
              <h3 className="text-2xl font-medium text-gray-900 mb-4 tracking-wide">
                FINANCIAMIENTO SUSTENTABLE
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Soluciones financieras que promueven la responsabilidad ambiental y la innovación.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Leasing;
