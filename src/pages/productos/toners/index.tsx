import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import Footer from '@/components/Footer';
import WhatsAppInlineButton from '@/components/WhatsAppInlineButton';
import { useWhatsApp } from '@/hooks/useWhatsApp';
import { useState } from 'react';



// Productos principales visibles
const mainProducts = {
  hpNegro: [
    'Toner HP 35/36/78/85A Importado',
    'Toner HP105A c/Chip Importado',
    'Toner HP 105A s/Chip Importado',
    'Toner HP 105X Importado c/Chip',
    'Toner HP 05/80 Importado',
    'Toner HP 145A Importado',
    'Toner HP 17A Importado',
    'Toner HP 30 A importado'
  ],
  hpColor: [
    'TONER HP 126/130A IMPORTADO BLACK',
    'TONER HP 126/130A IMPORTADO CYAN',
    'TONER HP 126/130A IMPORTADO MAGENTA',
    'TONER HP 126/130A IMPORTADO YELLOW',
    'Toner HP 204A Black Importado',
    'Toner HP 204A Cyan Importado',
    'Toner HP 204A Magenta Importado',
    'Toner HP 204A Yellow Importado'
  ],
  brother: [
    'Toner BROTHER TN1060 Importado',
    'Toner BROTHER TN2370/TN660 Importado',
    'Toner TN880 Importado',
    'Toner Brother TN750 Importado',
    'TONER BROTHER TN419 CYAN IMPORTADO',
    'TONER BROTHER TN419 MAGENTA IMPORTADO',
    'TONERBROTHER TN419 YELLOW IMPORTADO'
  ]
};

// Productos adicionales para la lista desplegable
const additionalProducts = [
  // HP NEGRO (resto)
  'Toner HP 48A Importado',
  'Toner HP 83A Importado',
  'Toner HP 12A Importado',
  'TONER HP 151A IMPORTADO CON CHIP',
  'Toner HP 248A importado',
  'Toner HP 26A importado',
  'Toner HP 30X Importado',
  'TONER HP 35A IMPORTADO',
  'Toner HP 58A c/ Chip Importado',
  'Toner HP 79A importado',
  'Toner HP 87A Importado',
  
  // HP COLOR (resto)
  'Toner HP 201A Black Importado',
  'Toner HP 201A Cyan Importado',
  'TONER HP 201A CYAN IMPORTADO',
  'Toner HP 201A Magenta Importado',
  'Toner HP 201A Yellow Importado',
  'Toner HP 202A Black Importado',
  'Toner HP 202A Cyan Importado',
  'Toner HP 202A Magenta Importado',
  'Toner HP 202A Yellow Importado',
  'TONER HP 206A BLACK IMPORTADO CON CHIP',
  'TONER HP 206A CYAN IMPORTADO CON CHIP',
  'TONER HP 206A MAGENTA IMPORTADO CON CHIP',
  'TONER HP 206A YELLOW IMPORTADO CON CHIP',
  'Toner HP 410A Black Importado',
  'Toner HP 410A Cyan Importado',
  'Toner HP 410A Magenta Importado',
  'Toner HP 410A Yellow Importado',
  'Toner HP 414A Black Importado',
  'Toner HP 414A Cyan Importado',
  'Toner HP 414A Magenta Importado',
  'Toner HP 414A Yellow Importado',
  'Toner HP CF410 Black importado',
  'Toner HP CF411 cyan Importado',
  'Toner HP CF412 yellow Importado',
  'Toner HP CF413 Magenta Importado',
  
  // BROTHER (resto)
  'Toner BROTHER TN450 importado',
  'Toner BOTHER TN419 Black Importado',
  
  // SAMSUNG
  'TONER SAMSUNG 115L',
  'Toner SAMSUNG 203U Importado',
  
  // MARCAS SURTIDAS
  'Toner HP 19A (Fotoconductor) Importado',
  'Unidad de Imagen HP CE314 Importado',
  'Unidad de Imagen BROTHER DR1060 Importado',
  'Unidad de Imagen BROTHER DR820 Importado',
  'Toner HP 32A Importado (Tambor de Imagen)',
  'Unidad de imagen BROTHER DR630 Importado',
  'Unidad de Imagen BROTHER DR720 Importado',
  'UNIDAD DE IMAGEN BROTHER DR 660 IMPORTADA',
  'Unidad de Imagen BROTHER TN720 Importado'
];

const ProductosToners = () => {
  const { openWhatsApp } = useWhatsApp();

  // ...existing code...
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [current32AImageIndex, setCurrent32AImageIndex] = useState(0);
  
  const toner203UImages = [
    {
      src: '/images/toners/toner-203U.png',
      alt: 'Toner 203U - Vista principal',
      label: 'Vista Principal'
    },
    {
      src: '/images/toners/toner-203U-2.png',
      alt: 'Toner 203U - Vista lateral',
      label: 'Vista Lateral'
    }
  ];

  const toner32AImages = [
    {
      src: '/images/toners/toner-32A.png',
      alt: 'Toner 32A - Vista principal',
      label: 'Vista Principal'
    },
    {
      src: '/images/toners/toner-32A-2.png',
      alt: 'Toner 32A - Vista adicional',
      label: 'Vista Adicional'
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % toner203UImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + toner203UImages.length) % toner203UImages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50/30 to-white">
      {/* Hero Section */}
      <div className="relative">
        {/* Hero Background */}
        <div className="relative h-[70vh] overflow-hidden">
          <img 
            src="/images/toners/toner-32A-hero.png" 
            alt="Toners Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-white">TONERS</h1>
            <h2 className="text-2xl lg:text-3xl font-light text-green-100 mb-6">DE ALTA CALIDAD</h2>
            <p className="text-lg max-w-2xl text-center text-white/90 leading-relaxed">
              Descubre nuestra selección especializada de toners premium para todas tus necesidades de impresión profesional
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
              Descubre nuestra selección premium de toners con la más alta calidad y rendimiento
            </p>
          </div>

          {/* Toner 105A - Card Style */}
          <div className="mb-20">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative bg-white p-12 flex items-center justify-center">
                  <div className="relative w-full max-w-md h-80">
                    <img 
                      src="/images/toners/toner-105A.jpg"
                      alt="Toner 105A"
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
                      TONER 105A
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Toner de alta calidad diseñado para ofrecer impresiones nítidas y duraderas. 
                      Perfecto para documentos profesionales y uso intensivo en oficinas.
                    </p>
                  </div>
                  
                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="text-sm font-medium text-gray-900 mb-1">Alta Capacidad</div>
                      <div className="text-xs text-gray-600">Hasta 2,300 páginas</div>
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
                      customMessage="Hola, me interesa el TONER 105A. ¿Podrían proporcionarme el precio y disponibilidad?"
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                      size="default"
                    >
                      Consultar precio
                    </WhatsAppInlineButton>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Toner 203U - Card Style */}
          <div className="mb-20">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Info Section */}
                <div className="p-12 flex flex-col justify-center lg:order-1">
                  <div className="mb-6">
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      Samsung Compatible
                    </span>
                    <h3 className="text-3xl font-light text-gray-900 mb-3">
                      TONER 203U
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Solución avanzada para impresión de alta resolución. Ideal para trabajos que requieren 
                      precisión y consistencia en cada página impresa.
                    </p>
                  </div>
                  
                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="text-sm font-medium text-gray-900 mb-1">Tecnología Avanzada</div>
                      <div className="text-xs text-gray-600">Última generación</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="text-sm font-medium text-gray-900 mb-1">Alta Resolución</div>
                      <div className="text-xs text-gray-600">Hasta 1200 DPI</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="text-sm font-medium text-gray-900 mb-1">Rendimiento</div>
                      <div className="text-xs text-gray-600">Consistente</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <WhatsAppInlineButton
                      customMessage="Hola, me interesa el TONER 203U. ¿Podrían proporcionarme el precio y disponibilidad?"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                      size="default"
                    >
                      Consultar precio
                    </WhatsAppInlineButton>
                  </div>
                </div>

                {/* Image Section with Slider */}
                <div className="relative bg-white p-8 flex items-center justify-center lg:order-2">
                  <div className="w-full max-w-lg">
                    {/* Image Slider Container */}
                    <div className="relative bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      {/* Image Display */}
                      <div className="relative h-64 w-full flex items-center justify-center overflow-hidden rounded-lg">
                        <img 
                          src={toner203UImages[currentImageIndex].src}
                          alt={toner203UImages[currentImageIndex].alt}
                          className="w-full h-full object-cover transition-all duration-300"
                        />
                      </div>
                      
                      {/* Navigation Arrows */}
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 hover:text-green-600 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                        aria-label="Imagen anterior"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 hover:text-green-600 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                        aria-label="Imagen siguiente"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                    
                    {/* Image Indicators */}
                    <div className="flex justify-center mt-4 space-x-2">
                      {toner203UImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-200 ${
                            index === currentImageIndex 
                              ? 'bg-green-500 scale-110' 
                              : 'bg-gray-300 hover:bg-gray-400'
                          }`}
                          aria-label={`Ver imagen ${index + 1}`}
                        />
                      ))}
                    </div>
                    
                    {/* Image Counter */}
                    <div className="text-center mt-2">
                      <span className="text-sm text-gray-500">
                        {currentImageIndex + 1} de {toner203UImages.length}
                      </span>
                    </div>

                    {/* Features badges */}
                    <div className="mt-6 flex flex-wrap gap-2 justify-center">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                        Compatible Samsung
                      </span>
                      <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-medium">
                        Alta capacidad
                      </span>
                      <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-medium">
                        Importado
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Toner 32A - Card Style */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image Section with Slider */}
                <div className="relative bg-white p-12 flex items-center justify-center group">
                  <div className="relative w-full max-w-md h-80 overflow-hidden rounded-lg">
                    <img 
                      src={toner32AImages[current32AImageIndex].src}
                      alt={toner32AImages[current32AImageIndex].alt}
                      className="w-full h-full object-cover drop-shadow-lg transition-transform duration-500"
                    />
                    
                    {/* Navegación del slider */}
                    <button
                      onClick={() => setCurrent32AImageIndex(current32AImageIndex === 0 ? 1 : 0)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 text-green-600 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    
                    <button
                      onClick={() => setCurrent32AImageIndex(current32AImageIndex === 0 ? 1 : 0)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 text-green-600 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    
                    {/* Indicadores */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {toner32AImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrent32AImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === current32AImageIndex
                              ? 'bg-white scale-125'
                              : 'bg-white/60 hover:bg-white/80'
                          }`}
                        />
                      ))}
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
                      TONER 32A
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Toner premium con tecnología de última generación. Garantiza resultados excepcionales 
                      para aplicaciones críticas y presentaciones importantes.
                    </p>
                  </div>
                  
                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="text-sm font-medium text-gray-900 mb-1">Premium</div>
                      <div className="text-xs text-gray-600">Máxima calidad</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="text-sm font-medium text-gray-900 mb-1">Excepcional</div>
                      <div className="text-xs text-gray-600">Resultados superiores</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="text-sm font-medium text-gray-900 mb-1">Durabilidad</div>
                      <div className="text-xs text-gray-600">Larga duración</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <WhatsAppInlineButton
                      customMessage="Hola, me interesa el TONER 32A. ¿Podrían proporcionarme el precio y disponibilidad?"
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                      size="default"
                    >
                      Consultar precio
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
              Catálogo por Marcas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Encuentra el toner perfecto según la marca de tu impresora
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* HP Negro */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4">
                      <span className="text-gray-900 font-bold text-lg">HP</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white">HP Negro</h3>
                      <p className="text-gray-300 text-sm">Toners monocromáticos</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  {mainProducts.hpNegro.slice(0, 6).map((product, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700 font-medium">{product}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      +{mainProducts.hpNegro.length - 6} modelos más
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* HP Color */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold text-lg">HP</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white">HP Color</h3>
                      <p className="text-blue-100 text-sm">Toners a color</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  {mainProducts.hpColor.slice(0, 6).map((product, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700 font-medium">{product}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      +{mainProducts.hpColor.length - 6} modelos más
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Brother */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4">
                      <span className="text-green-600 font-bold text-lg">BR</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white">Brother</h3>
                      <p className="text-green-100 text-sm">Línea completa</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  {mainProducts.brother.map((product, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 hover:bg-green-50 rounded-lg transition-colors cursor-pointer">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700 font-medium">{product}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Serie completa disponible
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Extended Catalog */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <button
                onClick={() => setShowAllProducts(!showAllProducts)}
                className="w-full p-8 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <span className="text-white text-2xl">📦</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium text-gray-900 mb-2">
                        Catálogo Completo
                      </h3>
                      <p className="text-gray-600">
                        {additionalProducts.length} modelos adicionales de toners disponibles
                      </p>
                    </div>
                  </div>
                  <div className="p-3 bg-gray-100 rounded-xl">
                    {showAllProducts ? (
                      <ChevronUp className="w-6 h-6 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-600" />
                    )}
                  </div>
                </div>
              </button>

              {/* Expanded Products List */}
              {showAllProducts && (
                <div className="border-t border-gray-100 bg-gradient-to-br from-gray-50 to-white">
                  <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
                      {additionalProducts.map((product, index) => (
                        <div key={index} className="bg-white p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 cursor-pointer">
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700 font-medium leading-relaxed">{product}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 border-2 border-dashed border-gray-200 text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-blue-600 text-2xl">🔍</span>
                      </div>
                      <h4 className="text-lg font-medium text-gray-900 mb-2">
                        ¿No encuentras el toner que necesitas?
                      </h4>
                      <p className="text-gray-600 mb-4 text-sm">
                        Contamos con más de 200 modelos disponibles. Consulta por el tuyo.
                      </p>
                      <WhatsAppInlineButton
                        customMessage="Hola, no encuentro el toner que necesito. ¿Podrían ayudarme con la disponibilidad?"
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                        size="default"
                      >
                        Consultar disponibilidad
                      </WhatsAppInlineButton>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductosToners;