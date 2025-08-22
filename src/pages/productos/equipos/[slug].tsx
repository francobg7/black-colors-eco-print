import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { Battery, Check, ChevronLeft, ChevronRight, Mail, MapPin, Network, Phone, Scan, Scissors, Tag, Trash2, Wifi } from 'lucide-react';
import Footer from '@/components/Footer';
import WhatsAppInlineButton from '@/components/WhatsAppInlineButton';
import { useWhatsApp } from '@/hooks/useWhatsApp';

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
    nombre: 'Destructor de Documentos Fellowes LX41 4x12mm',
    modelo: 'LX41',
    descripcion: 'Destructora 4x12mm. Fellowes 4300701.',
    slug: 'destructor-fellowes-lx41',
    imagen: '/images/destructora/Fellowes2.jpg.webp',
    categoria: 'Destructora de papel',
    tecnologia: 'Corte en partículas 4x12mm',
    resolucion: 'N/A',
    velocidad: 'Hasta 11 hojas',
    precio: 'Consultar precio',
    compatibilidad: ['Papel A4', 'Grapas', 'Clips', 'Tarjetas de crédito'],
    caracteristicas: {
      destruccion: {
        tipoCorte: 'Corte en partículas 4x12mm (Din P-4)',
        capacidad: 'Hasta 11 hojas',
        velocidad: 'Hasta 11 hojas',
        primeraHoja: 'Inmediata',
        nivelSeguridad: 'Din P-4'
      },
      conectividad: {
        usb: 'No',
        wifi: 'No',
        ethernet: 'No',
        movil: 'No'
      },
      funciones: {
        motor: 'Motor de alta durabilidad',
        bandeja: 'Capacidad 18L',
        seguridad: 'Bloqueo de seguridad para evitar accidentes',
        autoOff: 'Sí',
        tiempoUso: '5 minutos continuos con 30 minutos de enfriamiento'
      },
      capacidad: {
        papel: 'Hasta 11 hojas',
        bandeja: '18L',
        ciclo: 'Uso ocasional en hogar y oficina',
        cabezal: 'Cabezal extraíble para vaciar papelera'
      },
      fisicas: {
        peso: '5.1kg',
        dimensiones: '40x31x22cm',
        color: 'Negro'
      },
      especificaciones: {
        peso: '5.1kg',
        dimensiones: '40x31x22cm',
        capacidad: '11 hojas',
        origen: 'Estados Unidos'
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
    descripcion: 'Scanner de Documentos Portátil compacto con alimentación por USB',
    descripcionLarga: 'Scanner compacto ideal para profesionales móviles y oficinas pequeñas. Alimentado por cable USB, permite escaneo directo a memoria USB. Compatible con documentos de diversos tamaños y materiales. Su diseño portátil de 1,36 kg lo hace perfecto para trabajar desde cualquier lugar.',
    slug: 'brother-ads-1200',
    imagen: '/images/scanners/ads-1200.png',
    imagenes: [
      '/images/scanners/ads-1200-3.png',
      '/images/scanners/ads-1200.png',
      '/images/scanners/ads-1200-2.png',
      
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
        ethernet: 'No',
        movil: 'Brother Mobile Connect',
        escaneoDirecto: 'a PC, USB, correo electrónico, FTP, carpetas de red, nube',
        pantalla: 'Táctil a color 2,8"'
      },
      documentos: {
        tipos: 'papel normal, reciclado, grueso, tarjetas de presentación y plástico',
        tamanoMinimo: '51 mm de ancho',
        tamanoMaximo: '215,9 mm de ancho / hasta 863 mm de largo (una hoja)',
        adf: 'hasta 20 hojas'
      },
      funciones: {
        adf: 'Hasta 20 hojas',
        platina: 'No',
        duplex: 'Manual',
        memoria: '512 MB'
      },
      capacidad: {
        papel: 'Hasta 20 hojas',
        memoria: '512 MB',
        ciclo: 'Hasta 2000 páginas'
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
      '/images/scanners/scanner-ads-2200.png',
      
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
        wifi: 'No',
        ethernet: 'No',
        escaneoDirecto: 'a PC, USB (hasta 64 GB), OCR, email, archivo'
      },
      documentos: {
        tipos: 'papel normal, reciclado, grueso, tarjetas de presentación y plástico',
        tamanoMinimo: '51 mm de ancho',
        tamanoMaximo: '215,9 mm de ancho / hasta 355,6 mm de largo',
        modoExtendido: 'hasta 5000 mm de largo',
        adf: 'hasta 50 hojas'
      },
      funciones: {
        adf: '50 hojas',
        platina: 'No',
        duplex: 'Automático',
        memoria: '512 MB'
      },
      capacidad: {
        papel: 'Hasta 50 hojas',
        memoria: '512 MB',
        ciclo: 'Uso intensivo de oficina'
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

const DetalleEquipo = () => {
  const { slug } = useParams();
  const equipo = todosEquipos.find(p => p.slug === slug);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { isBusinessHours } = useWhatsApp();

  // Obtener las imágenes del producto
  const productImages = equipo?.imagenes || [equipo?.imagen].filter(Boolean);

  const nextImage = () => {
    if (productImages && productImages.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
    }
  };

  const prevImage = () => {
    if (productImages && productImages.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
    }
  };

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
        {/* Botón para volver a equipos */}
        <div className="mb-8">
          <Link 
            to="/productos/equipos"
            className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-md text-[#2d472f] px-6 py-3 rounded-xl font-semibold hover:bg-white hover:shadow-lg transition-all duration-300 border border-[#2d472f]/20"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Volver a Equipos</span>
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Galería de Imágenes del Producto */}
            <div className="relative">
              {/* Imagen Principal */}
              <div className="relative h-96 lg:h-full overflow-hidden rounded-lg">
                <img 
                  src={productImages && productImages.length > 0 ? productImages[currentImageIndex] : equipo.imagen} 
                  alt={`${equipo.nombre} - Vista ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Controles de navegación si hay múltiples imágenes */}
                {productImages && productImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                    
                    {/* Indicadores de imagen */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {productImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all ${
                            index === currentImageIndex 
                              ? 'bg-white scale-125' 
                              : 'bg-white/50 hover:bg-white/80'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              
              {/* Miniaturas si hay múltiples imágenes */}
              {productImages && productImages.length > 1 && (
                <div className="mt-4 flex space-x-2 overflow-x-auto">
                  {productImages.map((imagen, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentImageIndex 
                          ? 'border-[#2d472f] scale-105' 
                          : 'border-gray-200 hover:border-[#4b6d3b]'
                      }`}
                    >
                      <img 
                        src={imagen} 
                        alt={`${equipo.nombre} - Miniatura ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
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
                <WhatsAppInlineButton 
                  customMessage={`Hola, estoy interesado en obtener más información sobre ${equipo.nombre} (modelo ${equipo.modelo}). ¿Podrían enviarme una cotización?`}
                  className="flex-1 justify-center py-3 px-6 rounded-xl font-semibold text-base"
                >
                  Solicitar Cotización
                </WhatsAppInlineButton>
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
              {(equipo.caracteristicas.impresion || equipo.caracteristicas.destruccion || equipo.caracteristicas.proteccion || equipo.caracteristicas.escaneado || equipo.caracteristicas.portabilidad) && (
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
                     equipo.caracteristicas.escaneado ? 'Escaneo' :
                     equipo.caracteristicas.portabilidad ? 'Portabilidad' : 'Características'}
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(equipo.caracteristicas.impresion || equipo.caracteristicas.destruccion || equipo.caracteristicas.proteccion || equipo.caracteristicas.escaneado || equipo.caracteristicas.portabilidad || {}).map(([key, value]) => (
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
                           key === 'resolucionOptica' ? 'Resolución Óptica' :
                           key === 'resolucionInterpolada' ? 'Resolución Interpolada' :
                           key === 'profundidadColor' ? 'Profundidad de Color' :
                           key === 'escalaGrises' ? 'Escala de Grises' :
                           key === 'velocidad' ? 'Velocidad' :
                           key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className="text-gray-600">{String(value)}</span>
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

              {/* Documentos (para scanners) */}
              {equipo.caracteristicas.documentos && (
                <div>
                  <h3 className="text-lg font-bold text-[#2d472f] mb-4 flex items-center">
                    <Scan className="w-5 h-5 mr-2" />
                    Documentos Soportados
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(equipo.caracteristicas.documentos).map(([key, value]) => (
                      <div key={key}>
                        <span className="font-semibold block text-gray-700 capitalize">
                          {key === 'tipos' ? 'Tipos de Papel' : 
                           key === 'tamanoMinimo' ? 'Tamaño Mínimo' : 
                           key === 'tamanoMaximo' ? 'Tamaño Máximo' : 
                           key === 'adf' ? 'ADF (Alimentador)' : key}
                        </span>
                        <span className="text-gray-600 text-sm">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Consumo (para scanners) */}
              {equipo.caracteristicas.consumo && (
                <div>
                  <h3 className="text-lg font-bold text-[#2d472f] mb-4 flex items-center">
                    <Battery className="w-5 h-5 mr-2" />
                    Consumo Eléctrico
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(equipo.caracteristicas.consumo).map(([key, value]) => (
                      <div key={key}>
                        <span className="font-semibold block text-gray-700 capitalize">
                          {key === 'escaneando' ? 'Escaneando' : 
                           key === 'espera' ? 'En Espera' : 
                           key === 'apagado' ? 'Apagado' : key}
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
                          {key === 'wifi' ? 'WiFi' : 
                           key === 'ethernet' ? 'Ethernet' : 
                           key === 'usb' ? 'USB' : 
                           key === 'movil' ? 'Móvil' :
                           key === 'interfaz' ? 'Interfaz' :
                           key === 'escaneoDirecto' ? 'Escaneo Directo' :
                           key === 'controlRemoto' ? 'Control Remoto' : key}
                        </span>
                        <span className="text-gray-600 text-sm">{value}</span>
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
                        <span className="text-gray-600">{String(value)}</span>
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
                        <span className="text-gray-600">{String(value)}</span>
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
                        <span className="text-gray-600">{String(value)}</span>
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
                        <span className="text-gray-600">{String(value)}</span>
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
              <p className="opacity-90">mkt@blackcolors.com.py</p>
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