import { Link, useParams } from 'react-router-dom';
import { Scissors, Trash2, Battery, Tag, Scan, Check, Phone, Mail, MapPin, ChevronLeft, ChevronRight, Wifi, Network } from 'lucide-react';
import Footer from '@/components/Footer';
import { useState } from 'react';

// Datos de todos los equipos (mismos datos que en index.tsx)
const todosEquipos = [
  // ROTULADORAS PORTÁTILES
  {
    id: 1,
    nombre: 'ROTULADORA BROTHER PTH110',
    modelo: 'PTH110',
    descripcion: 'Rotuladora portátil de fácil uso. Ideal para el hogar y oficina.',
    descripcionLarga: 'La PT-H110 es ideal para la casa, la oficina en el hogar y para usar en cualquier lugar. Presenta un teclado QWERTY con teclas de un solo toque y pantalla gráfica con vista previa. Personalización fácil con 3 fuentes, 14 encuadres y más de 250 símbolos. Etiquetas de 1 o 2 renglones, guarda hasta 15 etiquetas en memoria, usa cintas "TZe" duraderas y funciona con 6 baterías AAA (no incluidas) o adaptador CA opcional.',
    slug: 'rotuladora-brother-pth110',
    imagen: '/images/rotuladoras/pth110/rotuladora.png',
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
    imagen: '/images/rotuladoras/verde-agua/pth110-turqueza.jpg',
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
    caracteristicas: {
      destruccion: {
        tipoCorte: 'Corte en tiras',
        capacidad: 'Hasta 8 hojas',
        velocidad: 'Hasta 8 hojas',
        primeraHoja: 'Inmediata'
      },
      conectividad: {
        usb: 'No',
        wifi: 'No',
        ethernet: 'No',
        movil: 'No'
      },
      funciones: {
        motor: '120W',
        bandeja: 'Capacidad 20L',
        seguridad: 'Nivel P-1',
        autoOff: 'Sí'
      },
      capacidad: {
        papel: 'Hasta 8 hojas',
        bandeja: '20L',
        ciclo: 'Hasta 100 hojas/día'
      }
    }
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
    caracteristicas: {
      impresion: {
        resolucion: '300 DPI',
        velocidad: 'Hasta 8 cms/seg',
        primeraPagina: 'Menos de 3 segundos',
        tipoCinta: 'QL (6mm a 62mm)'
      },
      conectividad: {
        usb: 'Sí',
        wifi: 'No',
        ethernet: 'No',
        movil: 'No'
      },
      funciones: {
        software: 'P-touch Editor',
        memoria: '16 MB RAM',
        pantalla: 'No',
        teclado: 'No'
      },
      capacidad: {
        cintas: '6mm a 62mm',
        memoria: '16 MB RAM',
        laminado: 'Sí'
      }
    }
  },

  // SCANNERS
  {
    id: 8,
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
    caracteristicas: {
      escaneo: {
        resolucion: 'Hasta 600 DPI',
        velocidad: 'Hasta 20 ppm',
        primeraPagina: 'Menos de 5 segundos',
        formato: 'A4, A5, A6, Oficio'
      },
      conectividad: {
        usb: 'Sí',
        wifi: 'Sí',
        ethernet: 'No',
        movil: 'Brother Mobile Connect'
      },
      funciones: {
        adf: '20 hojas',
        platina: 'Sí',
        duplex: 'Manual',
        memoria: '32 MB RAM'
      },
      capacidad: {
        papel: 'Hasta 20 hojas',
        memoria: '32 MB RAM',
        ciclo: 'Hasta 1000 páginas'
      }
    }
  },
  {
    id: 9,
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
    caracteristicas: {
      escaneo: {
        resolucion: 'Hasta 600 DPI',
        velocidad: 'Hasta 25 ppm',
        primeraPagina: 'Menos de 4 segundos',
        formato: 'A4, A5, A6, Oficio'
      },
      conectividad: {
        usb: 'Sí',
        wifi: 'Sí',
        ethernet: 'No',
        movil: 'Brother Mobile Connect'
      },
      funciones: {
        adf: '30 hojas',
        platina: 'Sí',
        duplex: 'Manual',
        memoria: '64 MB RAM'
      },
      capacidad: {
        papel: 'Hasta 30 hojas',
        memoria: '64 MB RAM',
        ciclo: 'Hasta 2000 páginas'
      }
    }
  },
  {
    id: 10,
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
    caracteristicas: {
      escaneo: {
        resolucion: 'Hasta 600 DPI',
        velocidad: 'Hasta 30 ppm',
        primeraPagina: 'Menos de 3 segundos',
        formato: 'A4, A5, A6, Oficio'
      },
      conectividad: {
        usb: 'Sí',
        wifi: 'Sí',
        ethernet: 'Sí',
        movil: 'Brother Mobile Connect'
      },
      funciones: {
        adf: '50 hojas',
        platina: 'Sí',
        duplex: 'Manual',
        memoria: '128 MB RAM'
      },
      capacidad: {
        papel: 'Hasta 50 hojas',
        memoria: '128 MB RAM',
        ciclo: 'Hasta 5000 páginas'
      }
    }
  }
];

const DetalleEquipo = () => {
  const { slug } = useParams();
  const equipo = todosEquipos.find(p => p.slug === slug);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!equipo) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section for Error */}
        <div className="relative">
          {/* Hero Background */}
          <div className="relative h-[400px] overflow-hidden">
            <img 
              src="/images/equipos/portada-equipos.jpg" 
              alt="Equipos Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-gray-50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
              <h1 className="text-4xl font-bold mb-4">Producto no encontrado</h1>
              <p className="text-xl text-center mb-8">El producto que buscas no existe o ha sido removido</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Función para obtener el icono según la categoría
  const getCategoryIcon = (categoria: string) => {
    switch (categoria) {
      case 'Rotuladoras portátiles':
        return <Scissors className="w-5 h-5" />;
      case 'Destructora de papel':
        return <Trash2 className="w-5 h-5" />;
      case 'UPS Polaris':
        return <Battery className="w-5 h-5" />;
      case 'Etiquetadoras':
        return <Tag className="w-5 h-5" />;
      case 'Scanners':
        return <Scan className="w-5 h-5" />;
      default:
        return <Scissors className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section similar to index */}
      <div className="relative">
        {/* Hero Background */}
        <div className="relative h-[400px] overflow-hidden">
          <img 
            src={equipo.imagen} 
            alt={`${equipo.nombre} Hero`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-gray-50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              {equipo.modelo}
            </h1>
            <p className="text-xl max-w-3xl text-center mb-8">
              {equipo.descripcion}
            </p>
          </div>
        </div>
      </div>



      {/* Contenido Principal */}
      <div className="container mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Galería de Imágenes del Producto */}
            <div className="relative">
              {/* Imagen Principal */}
              <div className="relative h-96 lg:h-full overflow-hidden rounded-lg">
                <img 
                  src={equipo.imagen} 
                  alt={`${equipo.nombre} - Vista principal`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Información del Producto */}
            <div className="p-8">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-[#2d472f] mb-2">
                  {equipo.nombre}
                </h2>
                <div className="flex items-center space-x-2 mb-4">
                  {getCategoryIcon(equipo.categoria)}
                  <span className="text-[#4b6d3b] font-medium">{equipo.tecnologia}</span>
                </div>
                <div className="text-2xl font-bold text-[#2d472f]">
                  {equipo.precio}
                </div>
              </div>

              {/* Características Principales */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#2d472f] mb-4">Características Principales</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {equipo.resolucion !== 'N/A' && (
                    <div>
                      <span className="font-semibold block text-gray-700">Resolución</span>
                      <span className="text-gray-600">{equipo.resolucion}</span>
                    </div>
                  )}
                  {equipo.velocidad !== 'N/A' && (
                    <div>
                      <span className="font-semibold block text-gray-700">Velocidad</span>
                      <span className="text-gray-600">{equipo.velocidad}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Compatibilidades */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#2d472f] mb-4">Conectividad y Funciones</h3>
                <div className="flex flex-wrap gap-2">
                  {equipo.compatibilidad.map((comp, idx) => (
                    <span 
                      key={idx} 
                      className="flex items-center space-x-2 bg-[#e8f5e9] text-[#2d472f] px-4 py-2 rounded-full font-medium"
                    >
                      <Check className="w-4 h-4" />
                      <span>{comp}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Botones de Acción */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-[#2d472f] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#4b6d3b] transition-colors">
                  Solicitar Cotización
                </button>
                <button className="flex-1 border-2 border-[#2d472f] text-[#2d472f] px-6 py-3 rounded-xl font-semibold hover:bg-[#2d472f] hover:text-white transition-colors">
                  Más Información
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Especificaciones Técnicas Detalladas */}
        {equipo.caracteristicas && (
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-[#2d472f] mb-8 text-center">
              Especificaciones Técnicas Detalladas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {/* Sección principal según el tipo de equipo */}
              {(equipo.caracteristicas.impresion || equipo.caracteristicas.destruccion || equipo.caracteristicas.proteccion || equipo.caracteristicas.escaneo || equipo.caracteristicas.portabilidad) && (
                <div>
                  <h3 className="text-lg font-bold text-[#2d472f] mb-4 flex items-center">
                    {equipo.categoria === 'Rotuladoras portátiles' || equipo.categoria === 'Etiquetadoras' ? (
                      <Scissors className="w-5 h-5 mr-2" />
                    ) : equipo.categoria === 'Destructora de papel' ? (
                      <Trash2 className="w-5 h-5 mr-2" />
                    ) : equipo.categoria === 'UPS Polaris' ? (
                      <Battery className="w-5 h-5 mr-2" />
                    ) : equipo.categoria === 'Scanners' ? (
                      <Scan className="w-5 h-5 mr-2" />
                    ) : (
                      <Scissors className="w-5 h-5 mr-2" />
                    )}
                    {equipo.caracteristicas.impresion ? 'Impresión' : 
                     equipo.caracteristicas.destruccion ? 'Destrucción' :
                     equipo.caracteristicas.proteccion ? 'Protección' :
                     equipo.caracteristicas.escaneo ? 'Escaneo' : 
                     equipo.caracteristicas.portabilidad ? 'Portabilidad' : 'Características'}
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(equipo.caracteristicas.impresion || equipo.caracteristicas.destruccion || equipo.caracteristicas.proteccion || equipo.caracteristicas.escaneo || equipo.caracteristicas.portabilidad || {}).map(([key, value]) => (
                      <div key={key}>
                        <span className="font-semibold block text-gray-700 capitalize">
                          {key === 'peso' ? 'Peso' : 
                           key === 'dimensiones' ? 'Dimensiones' : 
                           key === 'energia' ? 'Energía' : 
                           key === 'color' ? 'Color' :
                           key === 'capacidad' ? 'Capacidad' :
                           key === 'bateria' ? 'Batería' :
                           key === 'tipo' ? 'Tipo' :
                           key === 'tiempoRecarga' ? 'Tiempo de Recarga' :
                           key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Eléctrica (para UPS) */}
              {equipo.caracteristicas.electrica && (
                <div>
                  <h3 className="text-lg font-bold text-[#2d472f] mb-4 flex items-center">
                    <Battery className="w-5 h-5 mr-2" />
                    Especificaciones Eléctricas
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(equipo.caracteristicas.electrica).map(([key, value]) => (
                      <div key={key}>
                        <span className="font-semibold block text-gray-700 capitalize">
                          {key === 'entrada' ? 'Entrada' : 
                           key === 'salida' ? 'Salida' : 
                           key === 'ondaSalida' ? 'Onda de Salida' : 
                           key === 'tiempoTransferencia' ? 'Tiempo de Transferencia' : key}
                        </span>
                        <span className="text-gray-600 text-sm">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Indicadores (para UPS) */}
              {equipo.caracteristicas.indicadores && (
                <div>
                  <h3 className="text-lg font-bold text-[#2d472f] mb-4 flex items-center">
                    <Check className="w-5 h-5 mr-2" />
                    Indicadores y Alarmas
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(equipo.caracteristicas.indicadores).map(([key, value]) => (
                      <div key={key}>
                        <span className="font-semibold block text-gray-700 capitalize">
                          {key === 'led' ? 'LED' : 
                           key === 'alarmas' ? 'Alarmas Sonoras' : 
                           key === 'display' ? 'Display Digital' : key}
                        </span>
                        <span className="text-gray-600 text-sm">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Funcionalidad (para rotuladoras) */}
              {equipo.caracteristicas.funcionalidad && (
                <div>
                  <h3 className="text-lg font-bold text-[#2d472f] mb-4 flex items-center">
                    <Check className="w-5 h-5 mr-2" />
                    Funcionalidad
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(equipo.caracteristicas.funcionalidad).map(([key, value]) => (
                      <div key={key}>
                        <span className="font-semibold block text-gray-700 capitalize">
                          {key === 'teclado' ? 'Teclado' : 
                           key === 'pantalla' ? 'Pantalla' : 
                           key === 'teclas' ? 'Teclas' : 
                           key === 'fuentes' ? 'Fuentes' : 
                           key === 'encuadres' ? 'Encuadres' : 
                           key === 'marcos' ? 'Marcos' : 
                           key === 'bordes' ? 'Bordes' : 
                           key === 'simbolos' ? 'Símbolos' : 
                           key === 'memoria' ? 'Memoria' : key}
                        </span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Conectividad */}
              {equipo.caracteristicas.conectividad && (
                <div>
                  <h3 className="text-lg font-bold text-[#2d472f] mb-4 flex items-center">
                    <Wifi className="w-5 h-5 mr-2" />
                    Conectividad
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(equipo.caracteristicas.conectividad).map(([key, value]) => (
                      <div key={key}>
                        <span className="font-semibold block text-gray-700 capitalize">
                          {key === 'wifi' ? 'WiFi' : key === 'ethernet' ? 'Ethernet' : key === 'usb' ? 'USB' : 'Móvil'}
                        </span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Funciones */}
              {equipo.caracteristicas.funciones && (
                <div>
                  <h3 className="text-lg font-bold text-[#2d472f] mb-4 flex items-center">
                    <Check className="w-5 h-5 mr-2" />
                    Funciones
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(equipo.caracteristicas.funciones).map(([key, value]) => (
                      <div key={key}>
                        <span className="font-semibold block text-gray-700 capitalize">
                          {key === 'adf' ? 'ADF' : key === 'platina' ? 'Platina' : key === 'duplex' ? 'Dúplex' : key === 'memoria' ? 'Memoria' : key === 'bateria' ? 'Batería' : key === 'pantalla' ? 'Pantalla' : key === 'teclado' ? 'Teclado' : key === 'software' ? 'Software' : key === 'motor' ? 'Motor' : key === 'bandeja' ? 'Bandeja' : key === 'seguridad' ? 'Seguridad' : key === 'autoOff' ? 'Auto Off' : key === 'tiempoRespaldo' ? 'Tiempo Respaldo' : key === 'proteccion' ? 'Protección' : key === 'salidas' ? 'Salidas' : key === 'tiempo' ? 'Tiempo' : key === 'laminado' ? 'Laminado' : key === 'ciclo' ? 'Ciclo' : key}
                        </span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Capacidad */}
              {equipo.caracteristicas.capacidad && (
                <div>
                  <h3 className="text-lg font-bold text-[#2d472f] mb-4 flex items-center">
                    <Network className="w-5 h-5 mr-2" />
                    Capacidad
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(equipo.caracteristicas.capacidad).map(([key, value]) => (
                      <div key={key}>
                        <span className="font-semibold block text-gray-700 capitalize">
                          {key === 'cintas' ? 'Cintas' : key === 'papel' ? 'Papel' : key === 'memoria' ? 'Memoria' : key === 'bateria' ? 'Batería' : key === 'bandeja' ? 'Bandeja' : key === 'ciclo' ? 'Ciclo' : key === 'salidas' ? 'Salidas' : key === 'tiempo' ? 'Tiempo' : key === 'laminado' ? 'Laminado' : key}
                        </span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Compatibilidad (para rotuladoras) */}
              {equipo.caracteristicas.compatibilidad && (
                <div>
                  <h3 className="text-lg font-bold text-[#2d472f] mb-4 flex items-center">
                    <Check className="w-5 h-5 mr-2" />
                    Compatibilidad
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(equipo.caracteristicas.compatibilidad).map(([key, value]) => (
                      <div key={key}>
                        <span className="font-semibold block text-gray-700 capitalize">
                          {key === 'cintas' ? 'Cintas' : 
                           key === 'etiquetas' ? 'Etiquetas' : 
                           key === 'memoria' ? 'Memoria' : 
                           key === 'resistencia' ? 'Resistencia' : 
                           key === 'cintaInicial' ? 'Cinta Inicial' : key}
                        </span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Protecciones (para UPS) */}
              {equipo.caracteristicas.protecciones && (
                <div>
                  <h3 className="text-lg font-bold text-[#2d472f] mb-4 flex items-center">
                    <Check className="w-5 h-5 mr-2" />
                    Protecciones
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(equipo.caracteristicas.protecciones).map(([key, value]) => (
                      <div key={key}>
                        <span className="font-semibold block text-gray-700 capitalize">
                          {key === 'descarga' ? 'Contra Descarga' : 
                           key === 'sobrecarga' ? 'Contra Sobrecarga' : 
                           key === 'restriccion' ? 'Restricción' : key}
                        </span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Físicas (para UPS) */}
              {equipo.caracteristicas.fisicas && (
                <div>
                  <h3 className="text-lg font-bold text-[#2d472f] mb-4 flex items-center">
                    <Network className="w-5 h-5 mr-2" />
                    Características Físicas
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(equipo.caracteristicas.fisicas).map(([key, value]) => (
                      <div key={key}>
                        <span className="font-semibold block text-gray-700 capitalize">
                          {key === 'dimensiones' ? 'Dimensiones' : 
                           key === 'peso' ? 'Peso' : 
                           key === 'ambiente' ? 'Condiciones Ambientales' : key}
                        </span>
                        <span className="text-gray-600 text-sm">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Garantía (si existe) */}
              {equipo.caracteristicas.garantia && (
                <div>
                  <h3 className="text-lg font-bold text-[#2d472f] mb-4 flex items-center">
                    <Check className="w-5 h-5 mr-2" />
                    Garantía
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold block text-gray-700">Garantía</span>
                      <span className="text-gray-600">{equipo.caracteristicas.garantia}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Sección de Contacto */}
        <div className="mt-12 bg-gradient-to-r from-[#2d472f] to-[#4b6d3b] rounded-2xl text-white p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">¿Interesado en este producto?</h2>
            <p className="text-lg opacity-90">
              Contáctanos para obtener más información y precios especiales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Teléfono</h3>
              <p className="opacity-90">+595 21 123 456</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="opacity-90">info@blackcolors.com.py</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Ubicación</h3>
              <p className="opacity-90">Asunción, Paraguay</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DetalleEquipo; 