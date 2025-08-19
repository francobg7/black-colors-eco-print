import { Link } from 'react-router-dom';
import { ArrowLeft, Printer } from 'lucide-react';
import Footer from '@/components/Footer';
import { useState } from 'react';

// Datos de impresoras Top Sales

// Datos de todas las impresoras
const todasImpresoras = [
  {
    id: 1,
    nombre: 'BROTHER MFC-L8900 DW',
    modelo: 'MFC-L8900 DW',
    descripcion: 'Impresora Multifuncional Láser Color c/Red/Wifi Full Duplex Fax',
    slug: 'brother-mfc-l8900-dw',
    imagen: '/images/impresoras/BROTHER-MFC-L8900-DW.jpg',
    tecnologia: 'Láser color',
    resolucion: '2400 x 600 DPI',
    velocidad: '31 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['WiFi', 'Red Ethernet', 'Escáner integrado', 'Full Duplex', 'Color', 'Fax']
  },
  {
    id: 2,
    nombre: 'BROTHER MFC-L8360 DW',
    modelo: 'MFC-L8360 DW',
    descripcion: 'Impresora Láser Color c/Red/Wifi',
    slug: 'brother-mfc-l8360-dw',
    imagen: '/images/impresoras/BROTHER-MFC-L8360-DW.jpg',
    tecnologia: 'Láser color',
    resolucion: '2400 x 600 DPI',
    velocidad: '31 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['WiFi', 'Red Ethernet', 'Color']
  },
  {
    id: 3,
    nombre: 'BROTHER HL-L5210 DW',
    modelo: 'HL-L5210 DW',
    descripcion: 'Impresora Láser Monocromática con Red/Wifi',
    slug: 'brother-hl-l5210-dw',
    imagen: '/images/impresoras/BROTHER-HL-5210-DN.jpg',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '42 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['WiFi', 'Red Ethernet']
  },
  {
    id: 4,
    nombre: 'BROTHER DCP-1617 NW',
    modelo: 'DCP-1617 NW',
    descripcion: 'Impresora Multifuncional Láser Monocromática con Red/Wifi',
    slug: 'brother-dcp-1617-nw',
    imagen: '/images/impresoras/imgi_167_brother-dcp1617nw.jpg',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '20 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['WiFi', 'Red Ethernet', 'Escáner integrado']
  },
  {
    id: 5,
    nombre: 'BROTHER HL-L2360 DW',
    modelo: 'HL-L2360 DW',
    descripcion: 'Impresora Láser Monocromática con Wifi',
    slug: 'brother-hl-l2360-dw',
    imagen: '/images/impresoras/BROTHER-HL-L2360-DW.png',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '32 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['WiFi', 'USB']
  },
  {
    id: 6,
    nombre: 'BROTHER HL-L6415 DW',
    modelo: 'HL-L6415 DW',
    descripcion: 'Impresora Láser Monocromática con Red/Wifi',
    slug: 'brother-hl-l6415-dw',
    imagen: '/images/impresoras/imgi_2_hll6415dw_main.png',
    imagenes: [
      '/images/impresoras/imgi_2_hll6415dw_main.png',
      '/images/impresoras/imgi_4_hll6415dw_right.png',
      '/images/impresoras/imgi_7_hll6415dw_2.png'
    ],
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '46 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['WiFi', 'Red Ethernet', 'Full Duplex']
  },
  {
    id: 7,
    nombre: 'BROTHER DCP-L2540 DW',
    modelo: 'DCP-L2540 DW',
    descripcion: 'Impresora Multifuncional Láser Monocromática con Red/Wifi',
    slug: 'brother-dcp-l2540-dw',
    imagen: '/images/impresoras/BROTHER-DCP-L2540-DW.jpg',
    imagenes: [
      '/images/impresoras/BROTHER-DCP-L2540-DW.jpg',
      '/images/impresoras/BROTHER-DCP-L2540-DW2.jpg'
    ],
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '30 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['WiFi', 'Red Ethernet', 'Escáner integrado']
  },
  {
    id: 8,
    nombre: 'BROTHER HL-1200',
    modelo: 'HL-1200',
    descripcion: 'Impresora Láser Monocromática',
    slug: 'brother-hl-1200',
    imagen: '/images/impresoras/imgi_152_hl-1200_1.jpg',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '20 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['USB']
  },
  {
    id: 9,
    nombre: 'BROTHER HL-1212W',
    modelo: 'HL-1212W',
    descripcion: 'Impresora Multifuncional Láser Monocromática con Wifi',
    slug: 'brother-hl-1212w',
    imagen: '/images/impresoras/BROTHER-HL-1212WIFI.png',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '20 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['WiFi', 'USB', 'Impresión móvil']
  },
  {
    id: 10,
    nombre: 'BROTHER HL-5210 DN',
    modelo: 'HL-5210 DN',
    descripcion: 'Impresora Láser Monocromática con Red Full Duplex',
    slug: 'brother-hl-5210-dn',
    imagen: '/images/impresoras/BROTHER-HL-5210-DN.jpg',
    imagenes: [
      '/images/impresoras/BROTHER-HL-5210-DN.jpg',
      '/images/impresoras/imgi_32_Brother-5210dn-700x804.png'
    ],
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '42 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['Red Ethernet', 'Full Duplex']
  },
  {
    id: 11,
    nombre: 'BROTHER DCP-1610 DN',
    modelo: 'DCP-1610 DN',
    descripcion: 'Impresora Multifuncional Láser Monocromática con Red',
    slug: 'brother-dcp-1610-dn',
    imagen: '/images/impresoras/BROTHER-DCP-1610-DN.png',
    imagenes: [
      '/images/impresoras/BROTHER-DCP-1610-DN.png',
      '/images/impresoras/BROTHER-DCP-1610-DN2.png'
    ],
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '20 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['Red Ethernet', 'Escáner integrado']
  },
  {
    id: 12,
    nombre: 'BROTHER DCP-L5660 DN',
    modelo: 'DCP-L5660 DN',
    descripcion: 'Impresora Multifuncional Láser Monocromática con Red/Wifi Full Duplex',
    slug: 'brother-dcp-l5660-dn',
    imagen: '/images/impresoras/imgi_20_5660-245x281.jpg',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '42 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['WiFi', 'Red Ethernet', 'Escáner integrado', 'Full Duplex']
  },
  {
    id: 13,
    nombre: 'BROTHER MFC-L5915 DW',
    modelo: 'MFC-L5915 DW',
    descripcion: 'Impresora Multifuncional Láser Monocromática con Red/Wifi Full Duplex + Fax',
    slug: 'brother-mfc-l5915-dw',
    imagen: '/images/impresoras/imgi_3_mfc-l5915dw-front.jpg',
    imagenes: [
      '/images/impresoras/imgi_3_mfc-l5915dw-front.jpg',
      '/images/impresoras/imgi_4_mfc-l5915dw-right.jpg'
    ],
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '42 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['WiFi', 'Red Ethernet', 'Escáner integrado', 'Full Duplex', 'Fax']
  }
];

const ProductosImpresoras = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filterCategories = {
    all: 'Todas las impresoras',
    mono: 'Láser monocromática',
    color: 'Láser color',
    multifuncional: 'Multifuncional',
    wifi: 'Con WiFi'
  };

  const filteredImpresoras = todasImpresoras.filter(impresora => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'mono') return impresora.tecnologia.toLowerCase().includes('láser monocromática');
    if (selectedFilter === 'color') return impresora.tecnologia.toLowerCase().includes('láser color');
    if (selectedFilter === 'multifuncional') return impresora.nombre.toLowerCase().includes('mfc') || impresora.nombre.toLowerCase().includes('dcp');
    if (selectedFilter === 'wifi') return impresora.compatibilidad.some(comp => comp.toLowerCase().includes('wifi'));
    
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
            <Link 
              key={impresora.id}
              to={`/productos/impresoras/${impresora.slug}`}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group block"
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
                <h3 className="text-lg font-bold text-[#2d472f] mb-2 group-hover:text-[#4b6d3b] transition-colors">
                  {impresora.nombre}
                </h3>
                
                <p className="text-sm text-gray-600 mb-3">
                  {impresora.descripcion}
                </p>

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
                    <span className="text-lg font-bold text-[#2d472f]">{impresora.precio}</span>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {impresora.compatibilidad.slice(0, 3).map((comp, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs bg-[#e8f5e9] text-[#2d472f] px-3 py-1 rounded-full font-medium"
                      >
                        {comp}
                      </span>
                    ))}
                    {impresora.compatibilidad.length > 3 && (
                      <span className="text-xs text-gray-500 px-3 py-1">
                        +{impresora.compatibilidad.length - 3} más
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductosImpresoras;
