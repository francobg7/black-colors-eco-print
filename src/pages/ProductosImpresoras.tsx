
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Wifi, Usb, Monitor, Printer } from 'lucide-react';
import Footer from '@/components/Footer';

// Datos de impresoras Top Sales
const topSalesImpresoras = [
  {
    id: 1,
    nombre: 'Brother HL-L2350DW',
    imagen: '/images/impresoras/brother-hl-l2350dw.jpg',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '32 ppm',
    conectividad: ['Wi-Fi', 'USB', 'Ethernet'],
    compatibilidad: ['AirPrint', 'Google Cloud Print', 'Mopria'],
    destacado: 'Más vendida del año',
    posicion: 'grande-izquierda'
  },
  {
    id: 2,
    nombre: 'Brother MFC-L2710DW',
    imagen: '/images/impresoras/brother-mfc-l2710dw.jpg',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '30 ppm',
    conectividad: ['Wi-Fi', 'USB', 'Ethernet'],
    compatibilidad: ['AirPrint', 'Google Cloud Print', 'Mopria'],
    destacado: 'Todo en uno más popular',
    posicion: 'pequena-derecha-superior'
  },
  {
    id: 3,
    nombre: 'Brother HL-L2370DW',
    imagen: '/images/impresoras/brother-hl-l2370dw.jpg',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '32 ppm',
    conectividad: ['Wi-Fi', 'USB', 'Ethernet'],
    compatibilidad: ['AirPrint', 'Google Cloud Print', 'Mopria'],
    destacado: 'Alta eficiencia',
    posicion: 'pequena-derecha-inferior'
  }
];

// Datos de todas las impresoras
const todasImpresoras = [
  {
    id: 1,
    nombre: 'Brother HL-L2350DW',
    imagen: '/images/impresoras/brother-hl-l2350dw.jpg',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '32 ppm',
    conectividad: ['Wi-Fi', 'USB', 'Ethernet'],
    compatibilidad: ['AirPrint', 'Google Cloud Print', 'Mopria']
  },
  {
    id: 2,
    nombre: 'Brother MFC-L2710DW',
    imagen: '/images/impresoras/brother-mfc-l2710dw.jpg',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '30 ppm',
    conectividad: ['Wi-Fi', 'USB', 'Ethernet'],
    compatibilidad: ['AirPrint', 'Google Cloud Print', 'Mopria']
  },
  {
    id: 3,
    nombre: 'Brother DCP-L2550DW',
    imagen: '/images/impresoras/brother-dcp-l2550dw.jpg',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '30 ppm',
    conectividad: ['Wi-Fi', 'USB', 'Ethernet'],
    compatibilidad: ['AirPrint', 'Google Cloud Print', 'Mopria']
  },
  {
    id: 4,
    nombre: 'Brother HL-L2370DW',
    imagen: '/images/impresoras/brother-hl-l2370dw.jpg',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '32 ppm',
    conectividad: ['Wi-Fi', 'USB', 'Ethernet'],
    compatibilidad: ['AirPrint', 'Google Cloud Print', 'Mopria']
  },
  {
    id: 5,
    nombre: 'Brother MFC-L2750DW',
    imagen: '/images/impresoras/brother-mfc-l2750dw.jpg',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '30 ppm',
    conectividad: ['Wi-Fi', 'USB', 'Ethernet'],
    compatibilidad: ['AirPrint', 'Google Cloud Print', 'Mopria']
  },
  {
    id: 6,
    nombre: 'Brother DCP-L2570DW',
    imagen: '/images/impresoras/brother-dcp-l2570dw.jpg',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '30 ppm',
    conectividad: ['Wi-Fi', 'USB', 'Ethernet'],
    compatibilidad: ['AirPrint', 'Google Cloud Print', 'Mopria']
  },
  {
    id: 7,
    nombre: 'Brother HL-L2390DW',
    imagen: '/images/impresoras/brother-hl-l2390dw.jpg',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '32 ppm',
    conectividad: ['Wi-Fi', 'USB', 'Ethernet'],
    compatibilidad: ['AirPrint', 'Google Cloud Print', 'Mopria']
  },
  {
    id: 8,
    nombre: 'Brother MFC-L2770DW',
    imagen: '/images/impresoras/brother-mfc-l2770dw.jpg',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '30 ppm',
    conectividad: ['Wi-Fi', 'USB', 'Ethernet'],
    compatibilidad: ['AirPrint', 'Google Cloud Print', 'Mopria']
  },
  {
    id: 9,
    nombre: 'Brother DCP-L2590DW',
    imagen: '/images/impresoras/brother-dcp-l2590dw.jpg',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '30 ppm',
    conectividad: ['Wi-Fi', 'USB', 'Ethernet'],
    compatibilidad: ['AirPrint', 'Google Cloud Print', 'Mopria']
  },
  {
    id: 10,
    nombre: 'Brother HL-L2395DW',
    imagen: '/images/impresoras/brother-hl-l2395dw.jpg',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '32 ppm',
    conectividad: ['Wi-Fi', 'USB', 'Ethernet'],
    compatibilidad: ['AirPrint', 'Google Cloud Print', 'Mopria']
  },
  {
    id: 11,
    nombre: 'Brother MFC-L2775DW',
    imagen: '/images/impresoras/brother-mfc-l2775dw.jpg',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '30 ppm',
    conectividad: ['Wi-Fi', 'USB', 'Ethernet'],
    compatibilidad: ['AirPrint', 'Google Cloud Print', 'Mopria']
  },
  {
    id: 12,
    nombre: 'Brother DCP-L2595DW',
    imagen: '/images/impresoras/brother-dcp-l2595dw.jpg',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '30 ppm',
    conectividad: ['Wi-Fi', 'USB', 'Ethernet'],
    compatibilidad: ['AirPrint', 'Google Cloud Print', 'Mopria']
  }
];

const ProductosImpresoras = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        {/* Navegación */}
        <div className="mb-8">
          <Link 
            to="/productos" 
            className="inline-flex items-center space-x-2 text-[#2d472f] hover:text-[#4b6d3b] transition-colors font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver a Productos</span>
          </Link>
        </div>

        {/* Título principal */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#2d472f]">
            IMPRESORAS
          </h1>
          <p className="text-xl sm:text-2xl text-[#4b6d3b] max-w-3xl mx-auto">
            Tecnología de impresión sustentable para tu empresa
          </p>
        </div>

        {/* Sección 1: Top Sales - Layout de dos columnas asimétricas */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2d472f] mb-4">
              Productos Estrella
            </h2>
            <p className="text-lg text-[#4b6d3b]">
              Nuestras impresoras más vendidas y recomendadas
            </p>
          </div>

          {/* Layout de dos columnas asimétricas */}
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-3 gap-6 h-[800px]">
              {/* Columna izquierda - Tarjeta grande */}
              <div className="col-span-2 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                <div className="relative h-full">
                  {/* Badge destacado */}
                  <div className="absolute top-6 right-6 z-20">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      {topSalesImpresoras[0].destacado}
                    </span>
                  </div>

                  {/* Imagen de fondo */}
                  <div className="absolute inset-0">
                    <img 
                      src="/images/impresoras/1.jpg"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>

                  {/* Contenido */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl font-bold mb-4 group-hover:text-green-300 transition-colors">
                      {topSalesImpresoras[0].nombre}
                    </h3>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-3">
                        <Printer className="w-5 h-5 text-green-300" />
                        <span className="text-green-200 font-medium">{topSalesImpresoras[0].tecnologia}</span>
                      </div>
                      
                      <div className="text-green-100">
                        <div className="font-semibold">Resolución: {topSalesImpresoras[0].resolucion}</div>
                        <div className="font-semibold">Velocidad: {topSalesImpresoras[0].velocidad}</div>
                      </div>

                      {/* Conectividad */}
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-semibold text-green-200">Conectividad:</span>
                        <div className="flex space-x-2">
                          {topSalesImpresoras[0].conectividad.map((conn, idx) => (
                            <div key={idx} className="flex items-center space-x-1">
                              {conn === 'Wi-Fi' && <Wifi className="w-4 h-4 text-green-300" />}
                              {conn === 'USB' && <Usb className="w-4 h-4 text-green-300" />}
                              {conn === 'Ethernet' && <Monitor className="w-4 h-4 text-green-300" />}
                              <span className="text-xs text-green-200">{conn}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Compatibilidad */}
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-semibold text-green-200">Compatibilidad:</span>
                        <div className="flex flex-wrap gap-2">
                          {topSalesImpresoras[0].compatibilidad.map((comp, idx) => (
                            <span key={idx} className="text-xs bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full border border-white/30">
                              {comp}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Columna derecha - Dos tarjetas apiladas */}
              <div className="col-span-1 flex flex-col gap-6">
                {/* Tarjeta superior */}
                <div className="flex-1 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                  <div className="relative h-full">
                    {/* Badge destacado */}
                    <div className="absolute top-4 right-4 z-20">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        {topSalesImpresoras[1].destacado}
                      </span>
                    </div>

                    {/* Imagen de fondo */}
                    <div className="absolute inset-0">
                      <img 
                        src="/images/impresoras/2.jpg"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                    </div>

                    {/* Contenido */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors">
                        {topSalesImpresoras[1].nombre}
                      </h3>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Printer className="w-4 h-4 text-blue-300" />
                          <span className="text-blue-200 text-sm font-medium">{topSalesImpresoras[1].tecnologia}</span>
                        </div>
                        
                        <div className="text-blue-100 text-sm">
                          <div className="font-semibold">Resolución: {topSalesImpresoras[1].resolucion}</div>
                          <div className="font-semibold">Velocidad: {topSalesImpresoras[1].velocidad}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tarjeta inferior */}
                <div className="flex-1 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                  <div className="relative h-full">
                    {/* Badge destacado */}
                    <div className="absolute top-4 right-4 z-20">
                      <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        {topSalesImpresoras[2].destacado}
                      </span>
                    </div>

                    {/* Imagen de fondo */}
                    <div className="absolute inset-0">
                      <img 
                        src="/images/impresoras/3.jpg"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                    </div>

                    {/* Contenido */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-red-300 transition-colors">
                        {topSalesImpresoras[2].nombre}
                      </h3>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Printer className="w-4 h-4 text-red-300" />
                          <span className="text-red-200 text-sm font-medium">{topSalesImpresoras[2].tecnologia}</span>
                        </div>
                        
                        <div className="text-red-100 text-sm">
                          <div className="font-semibold">Resolución: {topSalesImpresoras[2].resolucion}</div>
                          <div className="font-semibold">Velocidad: {topSalesImpresoras[2].velocidad}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 2: Cuadrilla general */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2d472f] mb-4">
              Catálogo Completo
            </h2>
            <p className="text-lg text-[#4b6d3b]">
              Nuestra gama completa de impresoras Brother
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {todasImpresoras.map((impresora) => (
              <div 
                key={impresora.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                {/* Imagen */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={impresora.imagen} 
                    alt={impresora.nombre}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Contenido técnico */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#2d472f] mb-3">
                    {impresora.nombre}
                  </h3>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Printer className="w-3 h-3 text-[#4b6d3b]" />
                      <span className="text-[#4b6d3b] font-medium">{impresora.tecnologia}</span>
                    </div>
                    
                    <div className="text-gray-600">
                      <div className="font-semibold">Resolución: {impresora.resolucion}</div>
                      <div className="font-semibold">Velocidad: {impresora.velocidad}</div>
                    </div>

                    {/* Conectividad */}
                    <div className="flex items-center space-x-1">
                      <span className="text-xs font-semibold text-[#2d472f]">Conectividad:</span>
                      <div className="flex space-x-1">
                        {impresora.conectividad.slice(0, 2).map((conn, idx) => (
                          <span key={idx} className="text-xs text-[#4b6d3b]">{conn}</span>
                        ))}
                        {impresora.conectividad.length > 2 && (
                          <span className="text-xs text-[#4b6d3b]">+{impresora.conectividad.length - 2}</span>
                        )}
                      </div>
                    </div>

                    {/* Compatibilidad */}
                    <div className="flex flex-wrap gap-1">
                      {impresora.compatibilidad.slice(0, 2).map((comp, idx) => (
                        <span key={idx} className="text-xs bg-[#2d472f] text-white px-1.5 py-0.5 rounded">
                          {comp}
                        </span>
                      ))}
                      {impresora.compatibilidad.length > 2 && (
                        <span className="text-xs text-[#4b6d3b]">+{impresora.compatibilidad.length - 2} más</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ProductosImpresoras;
