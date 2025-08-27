import Footer from '@/components/Footer';
import WhatsAppInlineButton from '@/components/WhatsAppInlineButton';
import { useWhatsApp } from '@/hooks/useWhatsApp';

// Productos principales destacados
const mainProducts = {
  cartuchos: [
    'Cartucho 122 XXL Color Importado',
    'Cartucho 122XXL Negro Importado',
    'Cartucho 21 XXL Negro Importado',
    'Cartucho 22 XXL color importado',
    'Cartucho 60XXL Color Importado',
    'Cartucho 60XXL Negro Importado',
    'Cartucho 61XXL Color Importado',
    'Cartucho 61 XXL Negro Importado',
    'Cartucho 662XXL Color Importado',
    'Cartucho 662XXL Negro Importado',
    'Cartucho 664XXL Color New Version Importado',
    'Cartucho 664XXL Negro New Version Importado',
    'Cartucho 667 XXL Importado Color',
    'Cartucho 667 XXL Importado Negro'
  ]
};

const ProductosCartuchos = () => {
  const { openWhatsApp } = useWhatsApp();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50/30 to-white">
      {/* Hero Section */}
      <div className="relative">
        {/* Hero Background */}
        <div className="relative h-[70vh] overflow-hidden">
          <img 
            src="/images/hero-cartuchos.png" 
            alt="Cartuchos Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 4px 4px 8px rgba(0,0,0,0.6), 6px 6px 12px rgba(0,0,0,0.4)' }}>CARTUCHOS</h1>
            <h2 className="text-2xl lg:text-3xl font-light text-green-100 mb-6" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 4px 4px 8px rgba(0,0,0,0.6)' }}>DE ALTA CALIDAD XXL</h2>
            <p className="text-lg max-w-2xl text-center text-white/90 leading-relaxed font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9), 4px 4px 8px rgba(0,0,0,0.7), 6px 6px 12px rgba(0,0,0,0.5)' }}>
              Descubre nuestra selección especializada de cartuchos XXL premium para todas tus necesidades de impresión
            </p>
          </div>
        </div>
      </div>

      {/* Products Showcase Section */}
      <section className="w-full bg-white py-20">
        <div className="container mx-auto px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
              Productos Destacados
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre nuestra selección premium de cartuchos XXL con la más alta calidad y rendimiento
            </p>
          </div>

          {/* Cartucho 664 - Card Style */}
          <div className="mb-20">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative bg-white p-12 flex items-center justify-center">
                  <div className="relative w-full max-w-md h-80">
                    <img 
                      src="/images/cartuchos/cartucho-664.jpeg"
                      alt="Cartucho 664 XXL"
                      className="w-full h-full object-cover rounded-lg drop-shadow-lg"
                    />
                    <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Destacado
                    </div>
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      HP Compatible
                    </span>
                    <h3 className="text-3xl font-light text-gray-900 mb-3">
                      CARTUCHO 664 XXL
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Cartucho de alta capacidad XXL diseñado para ofrecer impresiones nítidas y duraderas. 
                      Perfecto para documentos profesionales y uso intensivo en oficinas.
                    </p>
                  </div>
                  
                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="text-sm font-medium text-gray-900 mb-1">Alta Capacidad XXL</div>
                      <div className="text-xs text-gray-600">Hasta 11x más impresiones</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="text-sm font-medium text-gray-900 mb-1">Calidad Premium</div>
                      <div className="text-xs text-gray-600">Impresión profesional</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="text-sm font-medium text-gray-900 mb-1">Fácil Instalación</div>
                      <div className="text-xs text-gray-600">Plug & play</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <WhatsAppInlineButton
                      customMessage="Hola, me gustaría consultar la disponibilidad de cartuchos XXL."
                      className="bg-green-600 hover:bg-green-700 text-white"
                      size="default"
                    >
                      Consultar disponibilidad
                    </WhatsAppInlineButton>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cartucho 667 - Card Style */}
          <div className="mb-20">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Info Section */}
                <div className="p-12 flex flex-col justify-center lg:order-1">
                  <div className="mb-6">
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      HP Compatible
                    </span>
                    <h3 className="text-3xl font-light text-gray-900 mb-3">
                      CARTUCHO 667 XXL
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Solución avanzada para impresión de alta resolución. Ideal para trabajos que requieren 
                      precisión y consistencia en cada página impresa con capacidad extendida XXL.
                    </p>
                  </div>
                  
                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="text-sm font-medium text-gray-900 mb-1">Tecnología Avanzada</div>
                      <div className="text-xs text-gray-600">Nueva versión</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="text-sm font-medium text-gray-900 mb-1">Alta Resolución</div>
                      <div className="text-xs text-gray-600">Hasta 1200 DPI</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="text-sm font-medium text-gray-900 mb-1">XXL Capacidad</div>
                      <div className="text-xs text-gray-600">9x más tinta</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <WhatsAppInlineButton
                      customMessage="Hola, me gustaría consultar la disponibilidad del cartucho 667 XXL."
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      size="default"
                    >
                      Consultar disponibilidad
                    </WhatsAppInlineButton>
                  </div>
                </div>

                {/* Image Section */}
                <div className="relative bg-white p-8 flex items-center justify-center lg:order-2">
                  <div className="w-full max-w-lg">
                    <div className="relative bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <img 
                        src="/images/cartuchos/cartucho-667.jpeg"
                        alt="Cartucho 667 XXL"
                        className="w-full h-80 object-cover rounded-lg"
                      />
                      <div className="absolute -top-3 -right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        XXL
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cartucho 662 - Card Style */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative bg-white p-12 flex items-center justify-center group">
                  <div className="relative w-full max-w-md h-80 overflow-hidden rounded-lg">
                    <img 
                      src="/images/cartuchos/cartucho-662.jpeg"
                      alt="Cartucho 662 XXL"
                      className="w-full h-full object-cover drop-shadow-lg transition-transform duration-500"
                    />
                    <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </div>
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      HP Compatible
                    </span>
                    <h3 className="text-3xl font-light text-gray-900 mb-3">
                      CARTUCHO 662 XXL
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Cartucho premium con tecnología de última generación. Garantiza resultados excepcionales 
                      para aplicaciones críticas y presentaciones importantes con capacidad XXL extendida.
                    </p>
                  </div>
                  
                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="text-sm font-medium text-gray-900 mb-1">Secado Rápido</div>
                      <div className="text-xs text-gray-600">Resistente al agua</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="text-sm font-medium text-gray-900 mb-1">Durabilidad</div>
                      <div className="text-xs text-gray-600">Sin decoloración</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="text-sm font-medium text-gray-900 mb-1">Sellado al Vacío</div>
                      <div className="text-xs text-gray-600">Máxima seguridad</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <WhatsAppInlineButton
                      customMessage="Hola, me gustaría consultar la disponibilidad del cartucho 664 XXL."
                      className="bg-green-600 hover:bg-green-700 text-white"
                      size="default"
                    >
                      Consultar disponibilidad
                    </WhatsAppInlineButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Catalog Section */}
      <section className="w-full bg-gradient-to-br from-gray-50 to-gray-100/50 py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
              Catálogo de Cartuchos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nuestra gama completa de cartuchos XXL para máximo rendimiento
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              {/* Header Section */}
              <div className="bg-gradient-to-r from-green-600 via-green-700 to-emerald-600 p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-6 border border-white/30">
                      <span className="text-white text-2xl">🖨️</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Cartuchos XXL Premium</h3>
                      <p className="text-green-100">Compatible con impresoras HP • Alta capacidad • Calidad garantizada</p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">14</div>
                      <div className="text-green-100 text-sm">Modelos</div>
                    </div>
                    <div className="w-px h-12 bg-white/30"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">XXL</div>
                      <div className="text-green-100 text-sm">Capacidad</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Products Grid */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {mainProducts.cartuchos.map((product, index) => (
                    <div key={index} className="group flex items-center space-x-4 p-4 bg-gray-50 hover:bg-green-50 rounded-xl transition-all duration-200 cursor-pointer border border-gray-100 hover:border-green-200 hover:shadow-md">
                      <div className="w-12 h-12 bg-green-100 group-hover:bg-green-200 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                        <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                      </div>
                      <div className="flex-1">
                        <span className="text-gray-800 font-medium text-sm leading-tight block">{product}</span>
                        <span className="text-gray-500 text-xs mt-1 block">Compatible HP • Sellado al vacío</span>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Features Bar */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="flex items-center justify-center space-x-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-lg">💧</span>
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-gray-900 text-sm">Alta Capacidad</div>
                        <div className="text-gray-600 text-xs">Hasta 9x más tinta</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-lg">✅</span>
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-gray-900 text-sm">100% Compatible</div>
                        <div className="text-gray-600 text-xs">Garantía de funcionamiento</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-lg">📦</span>
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-gray-900 text-sm">Sellado al Vacío</div>
                        <div className="text-gray-600 text-xs">Máxima protección</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Action Section */}
                <div className="text-center pt-6 border-t border-gray-200">
                  <p className="text-gray-600 mb-6 text-sm">
                    ¿Necesitás ayuda para encontrar el cartucho correcto para tu impresora?
                  </p>
                  <div className="flex justify-center">
                    <WhatsAppInlineButton
                      customMessage="Hola, necesito ayuda para encontrar el cartucho correcto para mi impresora."
                      className="bg-green-600 hover:bg-green-700 text-white"
                      size="default"
                    >
                      📞 Consultar disponibilidad
                    </WhatsAppInlineButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Information Section */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-3">
              Información Técnica
            </h2>
            <p className="text-gray-600">
              Todo lo que necesitás saber sobre nuestros cartuchos XXL
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Capacidad de tinta */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-lg">💧</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900">Capacidad de tinta</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-500">•</span>
                  <span>Hasta 9 veces superior al cartucho estándar</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-500">•</span>
                  <span>Más de 1.000 páginas por cartucho</span>
                </li>
              </ul>
            </div>

            {/* Compatibilidad */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-lg">🔧</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900">Compatibilidad</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">•</span>
                  <span>Compatible con HP/Brother/Epson</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">•</span>
                  <span>Instalación simple y rápida</span>
                </li>
              </ul>
            </div>

            {/* Rendimiento optimizado */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-lg">⚡</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900">Rendimiento</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-purple-500">•</span>
                  <span>Hasta 11x más impresiones</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-500">•</span>
                  <span>Calidad constante sin manchas</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-8 bg-gray-900 rounded-xl p-6 text-center text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex flex-col items-center">
                <span className="text-xl mb-1">🖤</span>
                <p>Cartuchos compatibles</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl mb-1">📦</span>
                <p>Sellados al vacío</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl mb-1">🖨️</span>
                <p>Hasta 11x más rendimiento</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Commitment Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-light text-gray-900 mb-3">
                Compromiso con el medio ambiente 🌍
              </h2>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-gray-200 mb-6">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white text-xl">⚠️</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-red-600 mb-3">No tires tus cartuchos ni toners usados en el basurero.</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Estos contienen metales pesados y sustancias tóxicas que pueden contaminar el suelo y el agua, 
                    intoxicando durante décadas, poniendo en riesgo la salud de las personas y el ecosistema.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white text-xl">♻️</span>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    En Black Colors nos encargamos de reciclarlos de manera responsable: transformamos los cartuchos 
                    utilizados en carbón, gas y combustible, evitando que se conviertan en residuos contaminantes y aportando a un 
                    futuro más limpio y sustentable.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-700 mb-4">
                ¿Tienes cartuchos o toners usados? ¡Contáctanos para más información sobre nuestro programa de reciclaje!
              </p>
              <WhatsAppInlineButton
                customMessage="Hola, estoy interesado en el programa de reciclaje de cartuchos. Quiero más información."
                className="bg-green-600 hover:bg-green-700 text-white"
                size="default"
              >
                Reciclar cartuchos
              </WhatsAppInlineButton>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductosCartuchos;
