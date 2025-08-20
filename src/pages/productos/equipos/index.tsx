import { Link } from 'react-router-dom';
import { ArrowLeft, Monitor, Printer, Server, Wifi, Shield, Zap, Scissors, Trash2, Battery, Tag, Scan } from 'lucide-react';
import Footer from '@/components/Footer';
import { useState } from 'react';

// Datos de todos los equipos
const todosEquipos = [
  // ROTULADORAS PORTÁTILES
  {
    id: 1,
    nombre: 'ROTULADORA BROTHER PTH110',
    modelo: 'PTH110',
    descripcion: 'Rotuladora portátil de fácil uso. Ideal para el hogar y oficina.',
    descripcionLarga: 'La PT-H110 es ideal para la casa, la oficina en el hogar y para usar en cualquier lugar. Presenta un teclado QWERTY con teclas de un solo toque y pantalla gráfica con vista previa. Personalización fácil con 3 fuentes, 14 encuadres y más de 250 símbolos. Etiquetas de 1 o 2 renglones, guarda hasta 15 etiquetas en memoria, usa cintas "TZe" duraderas y funciona con 6 baterías AAA (no incluidas) o adaptador CA opcional.',
    slug: 'rotuladora-brother-pth110',
    imagen: '/images/rotuladoras/pth110/pth110gris_1.png',
    categoria: 'Rotuladoras portátiles',
    tecnologia: 'Impresión térmica',
    resolucion: '180 DPI',
    velocidad: 'Hasta 5 cms/seg',
    precio: 'Consultar precio',
    compatibilidad: ['Teclado QWERTY', 'Vista previa gráfica', 'Cintas TZe', 'Baterías AAA'],
    memoria: '15 etiquetas en memoria',
    procesador: 'Teclado QWERTY con teclas de un solo toque',
    bandeja: 'Cintas TZe de hasta 12 mm',
    cicloMensual: 'Ilimitado',
    insumos: 'Cintas TZe (hasta 12 mm) | 6 baterías AAA (no incluidas) | Adaptador CA opcional',
    caracteristicas: {
      portabilidad: {
        peso: 'Ligera y portátil',
        dimensiones: '29 cm x 19 cm x 10,5 cm',
        energia: '6 baterías AAA o adaptador CA opcional'
      },
      funcionalidad: {
        teclado: 'QWERTY fácil de usar',
        pantalla: 'Vista previa gráfica antes de imprimir',
        teclas: 'Teclas de acceso rápido a estilos',
        fuentes: '3 fuentes disponibles',
        encuadres: '14 encuadres',
        simbolos: 'Más de 250 símbolos'
      },
      compatibilidad: {
        cintas: 'Cintas TZe de hasta 12 mm',
        etiquetas: '1 o 2 renglones',
        memoria: 'Guarda hasta 15 etiquetas'
      }
    }
  },
  {
    id: 2,
    nombre: 'ROTULADORA BROTHER PTH110PK',
    modelo: 'PTH110PK',
    descripcion: 'Rotuladora de etiquetas rosa con teclado QWERTY y cintas resistentes.',
    descripcionLarga: 'Utiliza etiquetas de tela y laminadas duraderas, resistentes al sol, agua y temperatura. Ideal para cocina, jardín y manualidades. Tiene 3 fuentes, 14 marcos, más de 250 símbolos, y permite guardar hasta 15 etiquetas para reimpresión rápida. Compatible con cintas de hasta 12 mm.',
    slug: 'rotuladora-brother-pth110pk',
    imagen: '/images/rotuladoras/rosada/rosa.jpg',
    categoria: 'Rotuladoras portátiles',
    tecnologia: 'Impresión térmica',
    resolucion: '180 DPI',
    velocidad: 'Hasta 5 cms/seg',
    precio: 'Consultar precio',
    compatibilidad: ['Cintas TZE', 'Teclado QWERTY', 'Etiquetas resistentes', 'Memoria interna'],
    memoria: '15 etiquetas en memoria',
    procesador: 'Teclado QWERTY',
    bandeja: 'Cintas TZE de hasta 12 mm',
    cicloMensual: 'Ilimitado',
    insumos: 'Cintas TZE (hasta 12 mm) | 6 pilas AAA | Etiquetas de tela y laminadas',
    caracteristicas: {
      portabilidad: {
        peso: 'Ligera y portátil',
        dimensiones: '29 cm x 19 cm x 10,5 cm',
        energia: '6 pilas AAA',
        color: 'Rosado'
      },
      funcionalidad: {
        teclado: 'QWERTY fácil de usar',
        pantalla: 'Vista previa gráfica',
        fuentes: '3 fuentes disponibles',
        marcos: '14 marcos',
        simbolos: 'Más de 250 símbolos',
        memoria: 'Guarda hasta 15 etiquetas'
      },
      compatibilidad: {
        cintas: 'Cintas TZE de hasta 12 mm',
        etiquetas: 'Etiquetas de tela y laminadas',
        resistencia: 'Resistente al sol, agua y temperatura'
      },
      garantia: '1 año por defectos de fabricación'
    }
  },
  {
    id: 3,
    nombre: 'ROTULADORA BROTHER PTH110TB (VERDE AGUA)',
    modelo: 'PTH110TB',
    descripcion: 'Rotuladora electrónica portátil verde agua, fácil de usar.',
    descripcionLarga: 'Diseñada para organizar espacios del hogar u oficina. Tiene teclado QWERTY, pantalla con vista previa y teclas estilo PC de un solo toque. Funciona con 6 pilas AAA o adaptador CA opcional. Incluye cinta inicial de 12 mm negra sobre blanco.',
    slug: 'rotuladora-brother-pth110tb',
    imagen: '/images/rotuladoras/verde-agua/pth110-turqueza3.jpg',
    categoria: 'Rotuladoras portátiles',
    tecnologia: 'Impresión térmica',
    resolucion: '180 DPI',
    velocidad: 'Hasta 5 cms/seg',
    precio: 'Consultar precio',
    compatibilidad: ['Teclado QWERTY', 'Vista previa', 'Teclas estilo PC', 'Cinta inicial incluida'],
    memoria: '15 etiquetas en memoria',
    procesador: 'Teclado QWERTY con teclas estilo PC',
    bandeja: 'Cintas de hasta 12 mm de ancho',
    cicloMensual: 'Ilimitado',
    insumos: 'Cinta inicial 12 mm negra sobre blanco | 6 pilas AAA | Adaptador CA opcional',
    caracteristicas: {
      portabilidad: {
        peso: 'Ligera y portátil',
        dimensiones: '29 cm x 19 cm x 10,5 cm',
        energia: '6 pilas AAA o adaptador CA opcional',
        color: 'Verde agua'
      },
      funcionalidad: {
        teclado: 'QWERTY con teclas estilo PC',
        pantalla: 'Vista previa antes de imprimir',
        teclas: 'Teclas de un solo toque',
        fuentes: '3 fuentes disponibles',
        bordes: '14 bordes',
        simbolos: 'Más de 250 símbolos',
        memoria: 'Almacena hasta 15 etiquetas'
      },
      compatibilidad: {
        cintas: 'Cintas de hasta 12 mm de ancho',
        etiquetas: '1 o 2 líneas de texto',
        cintaInicial: 'Cinta inicial de 12 mm negra sobre blanco incluida'
      }
    }
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

  // UPS POLARIS
  {
    id: 8,
    nombre: 'UPS INTERACTIVA 800 VA',
    modelo: 'XION 800',
    descripcion: 'UPS versátil y compacta, ideal para proteger PC o notebooks de bajo consumo.',
    descripcionLarga: 'Estos equipos son versátiles y de pequeño tamaño, ideales para proteger tu PC, notebook o dispositivos de bajo consumo. Representan una solución económica con excelente relación costo-beneficio. Permiten cuidar tus datos ante cortes de energía, brindando tiempo para guardar tu trabajo y apagar correctamente tu equipo. No apta para impresoras.',
    slug: 'ups-interactiva-800-va-xion-800',
    imagen: '/images/ups/800/1224.png',
    categoria: 'UPS Polaris',
    tecnologia: 'UPS Line-Interactive CON BATERIA REFORZADA 12V 9A',
    resolucion: 'N/A',
    velocidad: 'N/A',
    precio: 'Consultar precio',
    compatibilidad: ['PC', 'Notebook', 'Dispositivos de bajo consumo', 'Protección de datos'],
    memoria: 'N/A',
    procesador: 'Microcontrolador integrado',
    bandeja: 'N/A',
    cicloMensual: 'N/A',
    insumos: 'Batería 12V9AH sellada libre de mantenimiento',
    caracteristicas: {
      proteccion: {
        capacidad: '480W',
        bateria: '12V9AH x 1',
        tipo: 'Sellada libre de mantenimiento',
        tiempoRecarga: '6-8 horas al 90%'
      },
      electrica: {
        entrada: '220-240V~ 50/60 Hz 5.2A máx., Rango: 162-290V',
        salida: 'Línea y Batería: 220VAC ±10%',
        ondaSalida: 'Senoidal modificada',
        tiempoTransferencia: '2-6 ms'
      },
      indicadores: {
        ledVerde: 'Normal',
        ledAmarillo: 'Batería',
        ledRojo: 'Falla',
        alarmas: 'Batería: Bip cada 10s, Batería baja: Bip cada 1s, Sobrecarga: Bip cada 0.5s, Falla: Bip continuo'
      },
      especificaciones: {
        descarga: 'Sí',
        sobrecarga: 'Sí',
        dimensiones: '298x101x142 mm',
        peso: '4.7 kg',
        ambiente: '0°C-40°C / 0%-90% HR (sin condensación)',
        restriccion: 'No apta para impresoras'
      }
    }
  },
  {
    id: 9,
    nombre: 'UPS INTERACTIVA 2 KVA',
    modelo: 'XION 2000',
    descripcion: 'UPS con display digital, ideal para proteger equipos de hogar u oficina.',
    descripcionLarga: 'La UPS XION 2000 es ideal para proteger tus equipos con autonomía suficiente para guardar datos y apagar tu sistema ante cortes de energía. Incorpora un display digital que muestra en tiempo real la tensión, frecuencia, carga de batería y autonomía, todo en forma clara y sencilla.',
    slug: 'ups-interactiva-2-kva-xion-2000',
    imagen: '/images/ups/2kva/frente.jpg',
    categoria: 'UPS Polaris',
    tecnologia: 'UPS Line-Interactive CON 2 BATERIAS REFORZADAS 12V 9A',
    resolucion: 'N/A',
    velocidad: 'N/A',
    precio: 'Consultar precio',
    compatibilidad: ['PC', 'Notebook', 'Equipos de hogar y oficina', 'Display digital', 'Protección de datos'],
    memoria: 'N/A',
    procesador: 'Microcontrolador integrado con display digital',
    bandeja: 'N/A',
    cicloMensual: 'N/A',
    insumos: 'Batería 12V9AH x 2 selladas libres de mantenimiento',
    caracteristicas: {
      proteccion: {
        capacidad: '1200W',
        bateria: '12V9AH x 2',
        tipo: 'Sellada libre de mantenimiento',
        tiempoRecarga: '6-8 horas al 90%'
      },
      electrica: {
        entrada: '220-240V~ 50/60Hz, 10A máx., Rango: 162-290V',
        salida: 'Línea y Batería: 220VAC ±10%',
        tiempoTransferencia: '2-6 ms'
      },
      indicadores: {
        ledVerde: 'Normal',
        ledAmarillo: 'Batería',
        ledRojo: 'Falla',
        display: 'Digital en tiempo real (tensión, frecuencia, carga de batería, autonomía)',
        alarmas: 'Batería: Bip cada 10s, Batería baja: Bip cada 1s, Sobrecarga: Bip cada 0.5s, Falla: Bip continuo'
      },
      especificaciones: {
        descarga: 'Sí',
        sobrecarga: 'Sí',
        dimensiones: '380x158x198 mm',
        peso: '10.5 kg',
        ambiente: '0°C-40°C / 0%-90% HR (sin condensación)',
        restriccion: 'No apta para impresoras'
      }
    }
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
    'ups-polaris': 'UPS Polaris',
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
    
    if (selectedFilter === 'ups-polaris') {
      return equipo.categoria === 'UPS Polaris';
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
                    {equipo.categoria === 'UPS Polaris' && <Battery className="w-4 h-4 text-[#4b6d3b]" />}
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