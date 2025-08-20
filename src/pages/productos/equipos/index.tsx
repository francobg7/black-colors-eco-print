import { Link } from 'react-router-dom';
import { ArrowLeft, Monitor, Printer, Server, Wifi, Shield, Zap, Scissors, Trash2, Battery, Tag, Scan } from 'lucide-react';
import Footer from '@/components/Footer';
import { useState } from 'react';

// Datos de todos los equipos
const todosEquipos = [
  // ROTULADORAS PORTÁTILES
  {
    id: 1,
    nombre: 'BROTHER P-touch PT-D200',
    modelo: 'PT-D200',
    descripcion: 'Rotuladora Portátil de Etiquetas',
    slug: 'brother-p-touch-pt-d200',
    imagen: '/images/equipos/rotuladora-pt-d200.jpg',
    categoria: 'Rotuladoras portátiles',
    tecnologia: 'Impresión térmica',
    resolucion: '180 DPI',
    velocidad: 'Hasta 5 cms/seg',
    precio: 'Consultar precio',
    compatibilidad: ['USB', 'Batería recargable', 'Pantalla LCD'],
    memoria: '8 MB RAM',
    procesador: 'Pantalla LCD 2 líneas',
    bandeja: 'Cintas de 3.5mm a 12mm',
    cicloMensual: 'Ilimitado',
    insumos: 'Cintas TZe (3.5mm a 12mm) | Batería Li-ion recargable'
  },
  {
    id: 2,
    nombre: 'BROTHER P-touch PT-D400',
    modelo: 'PT-D400',
    descripcion: 'Rotuladora Portátil Profesional',
    slug: 'brother-p-touch-pt-d400',
    imagen: '/images/equipos/rotuladora-pt-d400.jpg',
    categoria: 'Rotuladoras portátiles',
    tecnologia: 'Impresión térmica',
    resolucion: '180 DPI',
    velocidad: 'Hasta 5 cms/seg',
    precio: 'Consultar precio',
    compatibilidad: ['USB', 'Batería recargable', 'Pantalla LCD', 'Teclado QWERTY'],
    memoria: '16 MB RAM',
    procesador: 'Pantalla LCD 4 líneas',
    bandeja: 'Cintas de 3.5mm a 18mm',
    cicloMensual: 'Ilimitado',
    insumos: 'Cintas TZe (3.5mm a 18mm) | Batería Li-ion recargable'
  },
  {
    id: 3,
    nombre: 'BROTHER P-touch PT-D600',
    modelo: 'PT-D600',
    descripcion: 'Rotuladora Portátil de Alto Rendimiento',
    slug: 'brother-p-touch-pt-d600',
    imagen: '/images/equipos/rotuladora-pt-d600.jpg',
    categoria: 'Rotuladoras portátiles',
    tecnologia: 'Impresión térmica',
    resolucion: '180 DPI',
    velocidad: 'Hasta 5 cms/seg',
    precio: 'Consultar precio',
    compatibilidad: ['USB', 'Batería recargable', 'Pantalla LCD', 'Teclado QWERTY', 'WiFi'],
    memoria: '32 MB RAM',
    procesador: 'Pantalla LCD 6 líneas',
    bandeja: 'Cintas de 3.5mm a 24mm',
    cicloMensual: 'Ilimitado',
    insumos: 'Cintas TZe (3.5mm a 24mm) | Batería Li-ion recargable'
  },

  // DESTRUCTORA DE PAPEL
  {
    id: 4,
    nombre: 'BROTHER DS-120',
    modelo: 'DS-120',
    descripcion: 'Destructora de Papel Personal',
    slug: 'brother-ds-120',
    imagen: '/images/equipos/destructora-ds-120.jpg',
    categoria: 'Destructora de papel',
    tecnologia: 'Corte en tiras',
    resolucion: 'N/A',
    velocidad: 'Hasta 8 hojas',
    precio: 'Consultar precio',
    compatibilidad: ['Papel A4', 'Grapas', 'Clips'],
    memoria: 'N/A',
    procesador: 'Motor de 120W',
    bandeja: 'Capacidad 20L',
    cicloMensual: 'Hasta 100 hojas/día',
    insumos: 'Bolsa de residuos incluida'
  },
  {
    id: 5,
    nombre: 'BROTHER DS-740D',
    modelo: 'DS-740D',
    descripcion: 'Destructora de Papel de Oficina',
    slug: 'brother-ds-740d',
    imagen: '/images/equipos/destructora-ds-740d.jpg',
    categoria: 'Destructora de papel',
    tecnologia: 'Corte en partículas',
    resolucion: 'N/A',
    velocidad: 'Hasta 10 hojas',
    precio: 'Consultar precio',
    compatibilidad: ['Papel A4', 'Grapas', 'Clips', 'Tarjetas de crédito'],
    memoria: 'N/A',
    procesador: 'Motor de 200W',
    bandeja: 'Capacidad 30L',
    cicloMensual: 'Hasta 500 hojas/día',
    insumos: 'Bolsa de residuos incluida'
  },
  {
    id: 6,
    nombre: 'BROTHER DS-940DW',
    modelo: 'DS-940DW',
    descripcion: 'Destructora de Papel Profesional',
    slug: 'brother-ds-940dw',
    imagen: '/images/equipos/destructora-ds-940dw.jpg',
    categoria: 'Destructora de papel',
    tecnologia: 'Corte en partículas',
    resolucion: 'N/A',
    velocidad: 'Hasta 12 hojas',
    precio: 'Consultar precio',
    compatibilidad: ['Papel A4', 'Grapas', 'Clips', 'Tarjetas', 'CDs/DVDs'],
    memoria: 'N/A',
    procesador: 'Motor de 300W',
    bandeja: 'Capacidad 50L',
    cicloMensual: 'Hasta 1000 hojas/día',
    insumos: 'Bolsa de residuos incluida'
  },
  {
    id: 7,
    nombre: 'BROTHER DS-1200DW',
    modelo: 'DS-1200DW',
    descripcion: 'Destructora de Papel Industrial',
    slug: 'brother-ds-1200dw',
    imagen: '/images/equipos/destructora-ds-1200dw.jpg',
    categoria: 'Destructora de papel',
    tecnologia: 'Corte en partículas',
    resolucion: 'N/A',
    velocidad: 'Hasta 20 hojas',
    precio: 'Consultar precio',
    compatibilidad: ['Papel A4', 'Grapas', 'Clips', 'Tarjetas', 'CDs/DVDs', 'Papel continuo'],
    memoria: 'N/A',
    procesador: 'Motor de 500W',
    bandeja: 'Capacidad 100L',
    cicloMensual: 'Hasta 5000 hojas/día',
    insumos: 'Bolsa de residuos incluida'
  },

  // UPS POLARIAS
  {
    id: 8,
    nombre: 'POLARIAS UPS-1000VA',
    modelo: 'UPS-1000VA',
    descripcion: 'UPS de 1000VA con Protección de Batería',
    slug: 'polarias-ups-1000va',
    imagen: '/images/equipos/ups-1000va.jpg',
    categoria: 'UPS Polarias',
    tecnologia: 'UPS Line-Interactive',
    resolucion: 'N/A',
    velocidad: 'N/A',
    precio: 'Consultar precio',
    compatibilidad: ['PC', 'Monitor', 'Router', 'Modem'],
    memoria: 'N/A',
    procesador: 'Microcontrolador integrado',
    bandeja: 'N/A',
    cicloMensual: 'N/A',
    insumos: 'Batería de plomo-ácido sellada'
  },
  {
    id: 9,
    nombre: 'POLARIAS UPS-1500VA',
    modelo: 'UPS-1500VA',
    descripcion: 'UPS de 1500VA con Protección Avanzada',
    slug: 'polarias-ups-1500va',
    imagen: '/images/equipos/ups-1500va.jpg',
    categoria: 'UPS Polarias',
    tecnologia: 'UPS Line-Interactive',
    resolucion: 'N/A',
    velocidad: 'N/A',
    precio: 'Consultar precio',
    compatibilidad: ['PC', 'Monitor', 'Router', 'Modem', 'Impresora'],
    memoria: 'N/A',
    procesador: 'Microcontrolador integrado',
    bandeja: 'N/A',
    cicloMensual: 'N/A',
    insumos: 'Batería de plomo-ácido sellada'
  },

  // ETIQUETADORAS
  {
    id: 10,
    nombre: 'BROTHER QL-800',
    modelo: 'QL-800',
    descripcion: 'Etiquetadora de Escritorio Profesional',
    slug: 'brother-ql-800',
    imagen: '/images/equipos/etiquetadora-ql-800.jpg',
    categoria: 'Etiquetadoras',
    tecnologia: 'Impresión térmica',
    resolucion: '300 DPI',
    velocidad: 'Hasta 8 cms/seg',
    precio: 'Consultar precio',
    compatibilidad: ['USB', 'PC', 'Mac', 'Software P-touch Editor'],
    memoria: '16 MB RAM',
    procesador: 'Procesador integrado',
    bandeja: 'Cintas de 6mm a 62mm',
    cicloMensual: 'Ilimitado',
    insumos: 'Cintas QL (6mm a 62mm) | Cintas de laminado'
  },

  // SCANNERS
  {
    id: 11,
    nombre: 'BROTHER ADS-1200',
    modelo: 'ADS-1200',
    descripcion: 'Scanner de Documentos Portátil',
    slug: 'brother-ads-1200',
    imagen: '/images/equipos/scanner-ads-1200.jpg',
    categoria: 'Scanners',
    tecnologia: 'Scanner de documentos',
    resolucion: 'Hasta 600 DPI',
    velocidad: 'Hasta 20 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['USB', 'WiFi', 'PC', 'Mac', 'Android', 'iOS'],
    memoria: '32 MB RAM',
    procesador: 'Procesador ARM',
    bandeja: 'ADF de 20 hojas',
    cicloMensual: 'Hasta 1000 páginas',
    insumos: 'N/A'
  },
  {
    id: 12,
    nombre: 'BROTHER ADS-1700W',
    modelo: 'ADS-1700W',
    descripcion: 'Scanner de Documentos WiFi',
    slug: 'brother-ads-1700w',
    imagen: '/images/equipos/scanner-ads-1700w.jpg',
    categoria: 'Scanners',
    tecnologia: 'Scanner de documentos',
    resolucion: 'Hasta 600 DPI',
    velocidad: 'Hasta 25 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['USB', 'WiFi', 'PC', 'Mac', 'Android', 'iOS', 'Cloud'],
    memoria: '64 MB RAM',
    procesador: 'Procesador ARM',
    bandeja: 'ADF de 30 hojas',
    cicloMensual: 'Hasta 2000 páginas',
    insumos: 'N/A'
  },
  {
    id: 13,
    nombre: 'BROTHER ADS-2200',
    modelo: 'ADS-2200',
    descripcion: 'Scanner de Documentos de Alto Rendimiento',
    slug: 'brother-ads-2200',
    imagen: '/images/equipos/scanner-ads-2200.jpg',
    categoria: 'Scanners',
    tecnologia: 'Scanner de documentos',
    resolucion: 'Hasta 600 DPI',
    velocidad: 'Hasta 30 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['USB', 'WiFi', 'Red Ethernet', 'PC', 'Mac', 'Cloud'],
    memoria: '128 MB RAM',
    procesador: 'Procesador ARM dual-core',
    bandeja: 'ADF de 50 hojas',
    cicloMensual: 'Hasta 5000 páginas',
    insumos: 'N/A'
  }
];

const ProductosEquipos = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filterCategories = {
    all: 'Todos los equipos',
    'rotuladoras-portatiles': 'Rotuladoras portátiles',
    'destructora-papel': 'Destructora de papel',
    'ups-polarias': 'UPS Polarias',
    'etiquetadoras': 'Etiquetadoras',
    'scanners': 'Scanners'
  };

  const filteredEquipos = todosEquipos.filter(equipo => {
    if (selectedFilter === 'all') return true;
    
    if (selectedFilter === 'rotuladoras-portatiles') {
      return equipo.categoria === 'Rotuladoras portátiles';
    }
    
    if (selectedFilter === 'destructora-papel') {
      return equipo.categoria === 'Destructora de papel';
    }
    
    if (selectedFilter === 'ups-polarias') {
      return equipo.categoria === 'UPS Polarias';
    }
    
    if (selectedFilter === 'etiquetadoras') {
      return equipo.categoria === 'Etiquetadoras';
    }
    
    if (selectedFilter === 'scanners') {
      return equipo.categoria === 'Scanners';
    }
    
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with integrated search */}
      <div className="relative">
        {/* Hero Background */}
        <div className="relative h-[500px] overflow-hidden">
          <img 
            src="/images/equipos/portada-equipos.jpg" 
            alt="Equipos Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-gray-50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-5xl font-bold mb-4">EQUIPOS</h1>
            <p className="text-xl max-w-2xl text-center mb-12">
              Descubre nuestra línea completa de equipos tecnológicos para todas tus necesidades
            </p>
          </div>
        </div>

        {/* Floating Filter Card */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2 w-full px-4">
          <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold text-[#2d472f] text-center mb-6">Filtrar Equipos</h2>
            
            {/* Categorías de equipos */}
            <div className="flex flex-wrap gap-3 justify-center">
              {Object.entries(filterCategories).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setSelectedFilter(key)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
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
      <div className="container mx-auto px-6 pt-40 pb-16">
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
          {filteredEquipos.map((equipo) => (
            <Link 
              key={equipo.id}
              to={`/productos/equipos/${equipo.slug}`}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group block"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden rounded-t-xl">
                <img 
                  src={equipo.imagen} 
                  alt={equipo.nombre}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#2d472f] mb-2 group-hover:text-[#4b6d3b] transition-colors">
                  {equipo.nombre}
                </h3>
                
                <p className="text-sm text-gray-600 mb-3">
                  {equipo.descripcion}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    {equipo.categoria === 'Rotuladoras portátiles' && <Scissors className="w-4 h-4 text-[#4b6d3b]" />}
                    {equipo.categoria === 'Destructora de papel' && <Trash2 className="w-4 h-4 text-[#4b6d3b]" />}
                    {equipo.categoria === 'UPS Polarias' && <Battery className="w-4 h-4 text-[#4b6d3b]" />}
                    {equipo.categoria === 'Etiquetadoras' && <Tag className="w-4 h-4 text-[#4b6d3b]" />}
                    {equipo.categoria === 'Scanners' && <Scan className="w-4 h-4 text-[#4b6d3b]" />}
                    <span className="text-[#4b6d3b] font-medium">{equipo.tecnologia}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    {equipo.resolucion !== 'N/A' && (
                      <div>
                        <span className="font-semibold block">Resolución</span>
                        {equipo.resolucion}
                      </div>
                    )}
                    {equipo.velocidad !== 'N/A' && (
                      <div>
                        <span className="font-semibold block">Velocidad</span>
                        {equipo.velocidad}
                      </div>
                    )}
                  </div>

                  {/* Información adicional técnica */}
                  {(equipo.memoria || equipo.bandeja || equipo.cicloMensual) && (
                    <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded-lg">
                      {equipo.memoria && equipo.memoria !== 'N/A' && (
                        <div className="mb-1">
                          <span className="font-semibold">Memoria:</span> {equipo.memoria}
                        </div>
                      )}
                      {equipo.bandeja && equipo.bandeja !== 'N/A' && (
                        <div className="mb-1">
                          <span className="font-semibold">Bandeja:</span> {equipo.bandeja}
                        </div>
                      )}
                      {equipo.cicloMensual && equipo.cicloMensual !== 'N/A' && (
                        <div>
                          <span className="font-semibold">Ciclo:</span> {equipo.cicloMensual}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Price */}
                  <div className="mt-4">
                    <span className="text-lg font-bold text-[#2d472f]">{equipo.precio}</span>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {equipo.compatibilidad.slice(0, 3).map((comp, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs bg-[#e8f5e9] text-[#2d472f] px-3 py-1 rounded-full font-medium"
                      >
                        {comp}
                      </span>
                    ))}
                    {equipo.compatibilidad.length > 3 && (
                      <span className="text-xs text-gray-500 px-3 py-1">
                        +{equipo.compatibilidad.length - 3} más
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

export default ProductosEquipos; 