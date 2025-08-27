import { Link } from 'react-router-dom';
import { Scissors, Trash2, Battery, Tag, Scan } from 'lucide-react';
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
    nombre: 'Destructor de Documentos Fellowes LX41 4x12mm',
    modelo: 'LX41',
    descripcion: 'Destructora 4x12mm. Fellowes 4300701.',
    slug: 'destructor-fellowes-lx41',
    imagen: '/images/destructora/Fellowes.jpg.webp',
    categoria: 'Destructora de papel',
    tecnologia: 'Corte en partículas 4x12mm',
    resolucion: 'N/A',
    velocidad: 'Hasta 11 hojas',
    precio: 'Consultar precio',
    compatibilidad: ['Papel A4', 'Grapas', 'Clips', 'Tarjetas de crédito'],
    memoria: 'N/A',
    procesador: 'Motor de alta durabilidad',
    bandeja: 'Capacidad 18L',
    cicloMensual: 'Uso ocasional en hogar y oficina',
    insumos: 'Cabezal extraíble para vaciar papelera'
  },

  // UPS POLARIS
  {
    id: 5,
    nombre: 'UPS INTERACTIVA 800 VA',
    modelo: 'XION 800',
    descripcion: 'UPS versátil y compacta, ideal para proteger PC o notebooks de bajo consumo.',
    descripcionLarga: 'Estos equipos son versátiles y de pequeño tamaño, ideales para proteger tu PC, notebook o dispositivos de bajo consumo. Representan una solución económica con excelente relación costo-beneficio. Permiten cuidar tus datos ante cortes de energía, brindando tiempo para guardar tu trabajo y apagar correctamente tu equipo. No apta para impresoras.',
    slug: 'ups-interactiva-800-va-xion-800',
    imagen: '/images/ups/800/1224.png',
    categoria: 'UPS Polaris',
    tecnologia: 'UPS Line-Interactive',
    resolucion: 'N/A',
    velocidad: 'N/A',
    precio: 'Consultar precio',
    compatibilidad: ['PC', 'Notebook', 'Dispositivos de bajo consumo'],
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
        led: 'Verde (normal), Amarilla (batería), Roja (falla)',
        alarmas: 'Batería: Bip cada 10s, Batería baja: Bip cada 1s, Sobrecarga: Bip cada 0.5s, Falla: Bip continuo'
      },
      protecciones: {
        descarga: 'Sí',
        sobrecarga: 'Sí',
        restriccion: 'No apta para impresoras'
      },
      fisicas: {
        dimensiones: '298x101x142 mm',
        peso: '4.7 kg',
        ambiente: '0°C-40°C / 0%-90% HR (sin condensación)'
      }
    }
  },
  {
    id: 6,
    nombre: 'UPS INTERACTIVA 2 KVA',
    modelo: 'XION 2000',
    descripcion: 'UPS con display digital, ideal para proteger equipos de hogar u oficina.',
    descripcionLarga: 'La UPS XION 2000 es ideal para proteger tus equipos con autonomía suficiente para guardar datos y apagar tu sistema ante cortes de energía. Incorpora un display digital que muestra en tiempo real la tensión, frecuencia, carga de batería y autonomía, todo en forma clara y sencilla.',
    slug: 'ups-interactiva-2-kva-xion-2000',
    imagen: '/images/ups/2kva/frente.jpg',
    categoria: 'UPS Polaris',
    tecnologia: 'UPS Line-Interactive',
    resolucion: 'N/A',
    velocidad: 'N/A',
    precio: 'Consultar precio',
    compatibilidad: ['PC', 'Notebook', 'Equipos de hogar', 'Equipos de oficina'],
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
        led: 'Verde (normal), Amarilla (batería), Roja (falla)',
        alarmas: 'Batería: Bip cada 10s, Batería baja: Bip cada 1s, Sobrecarga: Bip cada 0.5s, Falla: Bip continuo',
        display: 'Digital en tiempo real (tensión, frecuencia, carga de batería, autonomía)'
      },
      protecciones: {
        descarga: 'Sí',
        sobrecarga: 'Sí',
        restriccion: 'No apta para impresoras'
      },
      fisicas: {
        dimensiones: '380x158x198 mm',
        peso: '10.5 kg',
        ambiente: '0°C-40°C / 0%-90% HR (sin condensación)'
      }
    }
  },

  // ETIQUETADORAS
  {
    id: 7,
    nombre: 'BROTHER QL-800',
    modelo: 'QL-800',
    descripcion: 'Etiquetadora de Escritorio Profesional',
    slug: 'brother-ql-800',
    imagen: '/images/etiquetadora/ql-800.jpg',
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
    id: 8,
    nombre: 'BROTHER ADS-1200',
    modelo: 'ADS-1200',
    descripcion: 'Scanner de Documentos Portátil compacto con alimentación por USB',
    descripcionLarga: 'Scanner compacto ideal para profesionales móviles y oficinas pequeñas. Alimentado por cable USB, permite escaneo directo a memoria USB. Compatible con documentos de diversos tamaños y materiales. Su diseño portátil de 1,36 kg lo hace perfecto para trabajar desde cualquier lugar.',
    slug: 'brother-ads-1200',
    imagen: '/images/scanners/ads-1200.png',
    imagenes: [
      '/images/scanners/ads-1200.png',
      '/images/scanners/ads-1200-2.png',
      '/images/scanners/ads-1200-3.png'
    ],
    categoria: 'Scanners',
    tecnologia: 'Scanner de documentos portátil',
    resolucion: '600 x 600 dpi (óptica) / hasta 1200 x 1200 dpi (interpolada)',
    velocidad: 'Hasta 17 ppm (monocromo/color)',
    precio: 'Consultar precio',
    compatibilidad: ['USB 3.0', 'PC', 'Mac', 'Memoria USB', 'Diversos tipos de papel'],
    memoria: '256 MB',
    procesador: 'Controlador integrado',
    bandeja: 'ADF de hasta 20 hojas',
    cicloMensual: 'Hasta 1000 páginas diarias',
    insumos: 'Cable USB incluido (alimentación y datos)',
    caracteristicas: {
      escaneado: {
        resolucionOptica: '600 x 600 dpi',
        resolucionInterpolada: 'hasta 1200 x 1200 dpi',
        profundidadColor: 'Entrada 48 bits / Salida 24 bits',
        escalaGrises: '256 niveles',
        velocidad: 'hasta 17 ppm (monocromo y color)'
      },
      conectividad: {
        interfaz: 'USB 3.0 (alimentación por cable USB incluida)',
        escaneoDirecto: 'a memoria USB (máx. 128 GB, FAT32/exFAT)',
        controlRemoto: 'desde PC (no tiene pantalla propia)'
      },
      documentos: {
        tipos: 'papel normal, reciclado, grueso, tarjetas de presentación y plástico',
        tamanoMinimo: '51 mm de ancho',
        tamanoMaximo: '215,9 mm de ancho / hasta 863 mm de largo (una hoja)',
        adf: 'hasta 20 hojas'
      },
      consumo: {
        escaneando: 'aprox. 8 W',
        espera: '3,2 W',
        apagado: '0,1 W'
      },
      fisicas: {
        peso: '1,36 kg',
        caracteristica: 'Compacto y portátil',
        memoria: '256 MB'
      }
    }
  },
  {
    id: 9,
    nombre: 'BROTHER ADS-1700W',
    modelo: 'ADS-1700W',
    descripcion: 'Scanner de Documentos WiFi con pantalla táctil a color',
    descripcionLarga: 'Scanner avanzado con conectividad WiFi y pantalla táctil a color de 2,8". Ideal para oficinas que requieren flexibilidad de conectividad y facilidad de uso. Permite escaneo directo a múltiples destinos sin necesidad de PC, incluyendo correo electrónico, FTP, carpetas de red y servicios en la nube.',
    slug: 'brother-ads-1700w',
    imagen: '/images/scanners/ads-1700.png',
    imagenes: [
      '/images/scanners/ads-1700.png',
      '/images/scanners/ads-1700-2.png'
    ],
    categoria: 'Scanners',
    tecnologia: 'Scanner de documentos con WiFi',
    resolucion: '600 x 600 dpi (óptica) / hasta 1200 x 1200 dpi (interpolada)',
    velocidad: 'Hasta 25 ppm (monocromo/color)',
    precio: 'Consultar precio',
    compatibilidad: ['USB 3.0', 'WiFi', 'WiFi Direct', 'PC', 'Mac', 'Android', 'iOS', 'Cloud', 'Correo electrónico', 'FTP'],
    memoria: '512 MB',
    procesador: 'Controlador integrado con pantalla táctil',
    bandeja: 'ADF de hasta 20 hojas',
    cicloMensual: 'Hasta 2000 páginas diarias',
    insumos: 'Cable USB incluido',
    caracteristicas: {
      escaneado: {
        resolucionOptica: '600 x 600 dpi',
        resolucionInterpolada: 'hasta 1200 x 1200 dpi',
        profundidadColor: 'Entrada 48 bits / Salida 24 bits',
        escalaGrises: '256 niveles',
        velocidad: 'hasta 25 ppm (monocromo y color)'
      },
      conectividad: {
        usb: 'USB 3.0',
        wifi: 'WiFi (infraestructura y WiFi Direct)',
        escaneoDirecto: 'a PC, USB, correo electrónico, FTP, carpetas de red, nube',
        pantalla: 'Táctil a color 2,8"'
      },
      documentos: {
        tipos: 'papel normal, reciclado, grueso, tarjetas de presentación y plástico',
        tamanoMinimo: '51 mm de ancho',
        tamanoMaximo: '215,9 mm de ancho / hasta 863 mm de largo (una hoja)',
        adf: 'hasta 20 hojas'
      },
      consumo: {
        escaneando: 'aprox. 9 W',
        espera: '4,5 W',
        apagado: '0,1 W'
      },
      fisicas: {
        peso: '1,41 kg',
        caracteristica: 'Diseño compacto con controles táctiles',
        memoria: '512 MB'
      }
    }
  },
  {
    id: 10,
    nombre: 'BROTHER ADS-2200',
    modelo: 'ADS-2200',
    descripcion: 'Scanner de Documentos de Alto Rendimiento con escaneo dúplex',
    descripcionLarga: 'Scanner ADS-2200 de Brother ofrece alta velocidad de escaneo con funcionalidad dúplex para digitalizar documentos a doble cara en una sola pasada. Diseño compacto ideal para oficina y uso intensivo. Permite escaneo directo a PC, USB, email y archivo con OCR. Compatible con documentos de diversos tamaños y materiales.',
    slug: 'brother-ads-2200',
    imagen: '/images/scanners/ads-2200.png',
    imagenes: [
      '/images/scanners/ads-2200.png',
      
    ],
    categoria: 'Scanners',
    tecnologia: 'Scanner de documentos con dúplex automático',
    resolucion: '600 x 600 dpi (óptica) / hasta 1200 x 1200 dpi (interpolada)',
    velocidad: 'Hasta 35 ppm / 70 ipm (dúplex)',
    precio: 'Consultar precio',
    compatibilidad: ['USB 2.0 Hi-Speed', 'PC', 'USB (hasta 64 GB)', 'OCR', 'Email', 'Archivo'],
    memoria: '512 MB',
    procesador: 'Procesador integrado de alto rendimiento',
    bandeja: 'ADF de 50 hojas',
    cicloMensual: 'Para uso intensivo de oficina',
    insumos: 'N/A',
    caracteristicas: {
      escaneado: {
        resolucionOptica: '600 x 600 dpi',
        resolucionInterpolada: 'hasta 1200 x 1200 dpi',
        profundidadColor: 'Entrada 48 bits / Salida 24 bits',
        escalaGrises: '256 niveles',
        velocidad: 'hasta 35 ppm / 70 ipm (dúplex)'
      },
      conectividad: {
        usb: 'USB 2.0 Hi-Speed',
        escaneoDirecto: 'a PC, USB (hasta 64 GB), OCR, email, archivo'
      },
      documentos: {
        tipos: 'papel normal, reciclado, grueso, tarjetas de presentación y plástico',
        tamanoMinimo: '51 mm de ancho',
        tamanoMaximo: '215,9 mm de ancho / hasta 355,6 mm de largo',
        modoExtendido: 'hasta 5000 mm de largo',
        adf: 'hasta 50 hojas'
      },
      consumo: {
        escaneando: 'aprox. 23 W',
        espera: '5 W',
        suspension: '1,6 W',
        apagado: '0,1 W'
      },
      fisicas: {
        peso: '2,6 kg',
        dimensiones: '299 × 145 × 141 mm',
        caracteristica: 'Diseño compacto para oficina y uso intensivo'
      }
    }
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
            src="/images/hero-equipos.png" 
            alt="Equipos Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-5xl font-bold mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 4px 4px 8px rgba(0,0,0,0.6), 6px 6px 12px rgba(0,0,0,0.4)' }}>EQUIPOS</h1>
            <p className="text-xl max-w-2xl text-center mb-12 font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9), 4px 4px 8px rgba(0,0,0,0.7), 6px 6px 12px rgba(0,0,0,0.5)' }}>
              Descubre nuestra línea completa de equipos tecnológicos para todas tus necesidades
            </p>
          </div>
        </div>

        {/* Floating Filter Card */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2 w-full px-4">
          <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold text-[#4e8759] text-center mb-6">Filtrar Equipos</h2>
            
            {/* Categorías de equipos */}
            <div className="flex flex-wrap gap-3 justify-center">
              {Object.entries(filterCategories).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setSelectedFilter(key)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    selectedFilter === key
                      ? 'bg-[#4e8759] text-white shadow-lg shadow-[#4e8759]/20 scale-105'
                      : 'bg-white/80 text-[#4e8759] hover:bg-[#4e8759]/10 border-2 border-[#4e8759]/10 hover:scale-105'
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
                <h3 className="text-lg font-bold text-[#4e8759] mb-2 group-hover:text-[#4b6d3b] transition-colors">
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
                    <span className="text-lg font-bold text-[#4e8759]">{equipo.precio}</span>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {equipo.compatibilidad.slice(0, 3).map((comp, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs bg-[#e8f5e9] text-[#4e8759] px-3 py-1 rounded-full font-medium"
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