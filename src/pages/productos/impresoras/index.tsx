import { Link } from 'react-router-dom';
import { ArrowLeft, Printer } from 'lucide-react';
import Footer from '@/components/Footer';
import { useState } from 'react';

// Datos de impresoras Top Sales
const topSalesImpresoras = [
  {
    id: 1,
    nombre: 'IMPRESORA BROTHER HL1212W',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '20 ppm',
    precio: '1.130.000 Gs',
    compatibilidad: ['WiFi', 'USB', 'Impresión móvil'],
    destacado: 'Más vendida del año',
    posicion: 'grande-izquierda'
  },
  {
    id: 2,
    nombre: 'IMPRESORA LASER BROTHER HL L2360DW',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '32 ppm',
    precio: '2.360.000 Gs',
    compatibilidad: ['WiFi', 'USB', 'Duplex automático'],
    destacado: 'Todo en uno más popular',
    posicion: 'pequena-derecha-superior'
  },
  {
    id: 3,
    nombre: 'MULTIF BROTHER DCP1617NW',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '16 ppm',
    precio: '2.055.000 Gs',
    compatibilidad: ['WiFi', 'USB', 'Escáner integrado'],
    destacado: 'Alta eficiencia',
    posicion: 'pequena-derecha-inferior'
  }
];

// Datos de todas las impresoras
const todasImpresoras = [
  {
    id: 1,
    nombre: 'IMPRESORA BROTHER HL1212W',
    imagen: '/images/impresoras/1.jpg',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '20 ppm',
    precio: '1.130.000 Gs',
    compatibilidad: ['WiFi', 'USB', 'Impresión móvil']
  },
  {
    id: 2,
    nombre: 'IMPRESORA LASER BROTHER HL L2360DW',
    imagen: '/images/impresoras/2.jpg',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '32 ppm',
    precio: '2.360.000 Gs',
    compatibilidad: ['WiFi', 'USB', 'Duplex automático']
  },
  {
    id: 3,
    nombre: 'IMPRESORA BROTHER HLL5210DN',
    imagen: '/images/impresoras/3.jpg',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '26 ppm',
    precio: '3.545.000 Gs',
    compatibilidad: ['Red Ethernet', 'Duplex automático']
  },
  {
    id: 4,
    nombre: 'IMPRESORA BROTHER HLL6415DW',
    imagen: '/images/impresoras/4.jpg',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '42 ppm',
    precio: '6.545.000 Gs',
    compatibilidad: ['WiFi', 'USB', 'Duplex automático']
  },
  {
    id: 5,
    nombre: 'IMPRESORA BROTHER HLL5210DW',
    imagen: '/images/impresoras/5.jpg',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '26 ppm',
    precio: '4.990.000 Gs',
    compatibilidad: ['WiFi', 'USB', 'Duplex automático']
  },
  {
    id: 6,
    nombre: 'MULTIF COLOR BROTHER DCP-T220-',
    imagen: '/images/impresoras/6.jpg',
    tecnologia: 'Inyección de tinta color',
    resolucion: '4800 x 1200 DPI',
    velocidad: '27 ppm',
    precio: '1.630.000 Gs',
    compatibilidad: ['USB', 'Escáner integrado', 'Color']
  },
  {
    id: 7,
    nombre: 'MULTIF COLOR BROTHER DCP-T420W',
    imagen: '/images/impresoras/7.jpg',
    tecnologia: 'Inyección de tinta color',
    resolucion: '4800 x 1200 DPI',
    velocidad: '27 ppm',
    precio: '1.980.000 Gs',
    compatibilidad: ['WiFi', 'USB', 'Escáner integrado', 'Color']
  },
  {
    id: 8,
    nombre: 'MULTIF COLOR BROTHER MFCTA500DW SERIAL',
    imagen: '/images/impresoras/8.jpg',
    tecnologia: 'Inyección de tinta color',
    resolucion: '4800 x 1200 DPI',
    velocidad: '27 ppm',
    precio: '7.325.000 Gs',
    compatibilidad: ['WiFi', 'USB', 'Escáner integrado', 'Color', 'Fax']
  },
  {
    id: 9,
    nombre: 'MULTIF BROTHER DCP1617NW',
    imagen: '/images/impresoras/9.jpg',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '16 ppm',
    precio: '2.055.000 Gs',
    compatibilidad: ['WiFi', 'USB', 'Escáner integrado']
  },
  {
    id: 10,
    nombre: 'MULTIF BROTHER DCPL.2660DW (DCPL2660DW)',
    imagen: '/images/impresoras/10.jpg',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '30 ppm',
    precio: '3.278.000 Gs',
    compatibilidad: ['WiFi', 'USB', 'Escáner integrado', 'Duplex automático']
  },
  {
    id: 11,
    nombre: 'MULTIF BROTHER DCPL2540DW',
    imagen: '/images/impresoras/11.jpg',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '30 ppm',
    precio: '3.115.000 Gs',
    compatibilidad: ['WiFi', 'USB', 'Escáner integrado', 'Duplex automático']
  },
  {
    id: 12,
    nombre: 'MULTIF BROTHER DCPL5610DN',
    imagen: '/images/impresoras/12.jpg',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '42 ppm',
    precio: '6.160.000 Gs',
    compatibilidad: ['Red Ethernet', 'Escáner integrado', 'Duplex automático']
  },
  {
    id: 13,
    nombre: 'MULTIF BROTHER DCPL5660DN',
    imagen: '/images/impresoras/13.jpg',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '42 ppm',
    precio: '6.961.000 Gs',
    compatibilidad: ['Red Ethernet', 'Escáner integrado', 'Duplex automático']
  },
  {
    id: 14,
    nombre: 'MULTIF BROTHER MFCL6900DW',
    imagen: '/images/impresoras/14.jpg',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '42 ppm',
    precio: '11.150.000 Gs',
    compatibilidad: ['WiFi', 'USB', 'Escáner integrado', 'Duplex automático', 'Fax']
  },
  {
    id: 15,
    nombre: 'MULTIF BROTHER MFCL6915DW',
    imagen: '/images/impresoras/15.jpg',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '42 ppm',
    precio: '11.150.000 Gs',
    compatibilidad: ['WiFi', 'USB', 'Escáner integrado', 'Duplex automático', 'Fax']
  },
  {
    id: 16,
    nombre: 'IMPRESORA COLOR BROTHER HLL8360CDW',
    imagen: '/images/impresoras/16.jpg',
    tecnologia: 'Láser color',
    resolucion: '2400 x 600 DPI',
    velocidad: '31 ppm',
    precio: '6.995.000 Gs',
    compatibilidad: ['WiFi', 'USB', 'Duplex automático', 'Color']
  },
  {
    id: 17,
    nombre: 'MULTIF COLOR BROTHER DCPL.3560CDW',
    imagen: '/images/impresoras/17.jpg',
    tecnologia: 'Láser color',
    resolucion: '2400 x 600 DPI',
    velocidad: '31 ppm',
    precio: '7.305.000 Gs',
    compatibilidad: ['WiFi', 'USB', 'Escáner integrado', 'Duplex automático', 'Color']
  },
  {
    id: 18,
    nombre: 'MULTIF COLOR BROTHER MFCL8900CDW',
    imagen: '/images/impresoras/18.jpg',
    tecnologia: 'Láser color',
    resolucion: '2400 x 600 DPI',
    velocidad: '31 ppm',
    precio: '10.525.000 Gs',
    compatibilidad: ['WiFi', 'USB', 'Escáner integrado', 'Duplex automático', 'Color', 'Fax']
  }
];

const ProductosImpresoras = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filterCategories = {
    all: 'Todas las impresoras',
    mono: 'Impresora láser monocromática',
    color: 'Impresora láser color',
    tank: 'Tanque de tinta continua color',
    scanncut: 'Impresora ScanNCut'
  };

  const filteredImpresoras = todasImpresoras.filter(impresora => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'mono') return impresora.tecnologia.toLowerCase().includes('láser monocromática');
    if (selectedFilter === 'color') return impresora.tecnologia.toLowerCase().includes('láser color');
    if (selectedFilter === 'tank') return impresora.tecnologia.toLowerCase().includes('inyección de tinta');
    if (selectedFilter === 'scanncut') return impresora.nombre.toLowerCase().includes('scanncut');
    
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with integrated search */}
      <div className="relative">
        {/* Hero Background */}
        <div className="relative h-[500px] overflow-hidden">
          <img 
            src="/images/impresoras/portada.jpg" 
            alt="Impresoras Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-gray-50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-5xl font-bold mb-4">IMPRESORAS</h1>
            <p className="text-xl max-w-2xl text-center mb-12">
              Descubre nuestra línea completa de impresoras Brother para todas tus necesidades
            </p>
          </div>
        </div>

        {/* Floating Filter Card */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2 w-full px-4">
          <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold text-[#2d472f] text-center mb-6">Impresoras</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {Object.entries(filterCategories).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setSelectedFilter(key)}
                  className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    selectedFilter === key
                      ? 'bg-[#2d472f] text-white shadow-lg shadow-[#2d472f]/20 scale-105'
                      : 'bg-white/80 text-[#2d472f] hover:bg-[#2d472f]/10 border-2 border-[#2d472f]/10 hover:scale-105'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-32 pb-16">
        {/* Navegación */}
        <div className="mb-16">
          <Link 
            to="/productos" 
            className="inline-flex items-center space-x-2 text-[#2d472f] hover:text-[#4b6d3b] transition-colors font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver a Productos</span>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredImpresoras.map((impresora) => (
            <div 
              key={impresora.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden rounded-t-xl">
                <img 
                  src={impresora.imagen} 
                  alt={impresora.nombre}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#2d472f] mb-3 group-hover:text-[#4b6d3b] transition-colors">
                  {impresora.nombre}
                </h3>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Printer className="w-4 h-4 text-[#4b6d3b]" />
                    <span className="text-[#4b6d3b] font-medium">{impresora.tecnologia}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <div>
                      <span className="font-semibold block">Resolución</span>
                      {impresora.resolucion}
                    </div>
                    <div>
                      <span className="font-semibold block">Velocidad</span>
                      {impresora.velocidad}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-4">
                    <span className="text-2xl font-bold text-[#2d472f]">{impresora.precio}</span>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {impresora.compatibilidad.map((comp, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs bg-[#e8f5e9] text-[#2d472f] px-3 py-1 rounded-full font-medium"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductosImpresoras;
