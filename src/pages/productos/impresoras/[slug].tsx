import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Printer, Wifi, Network, Scan, Check, Phone, Mail, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import Footer from '@/components/Footer';
import { useState } from 'react';

// Datos de todas las impresoras (mismos datos que en index.tsx)
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
    compatibilidad: ['WiFi', 'Red Ethernet', 'Escáner integrado', 'Full Duplex', 'Color', 'Fax'],
    caracteristicas: {
      impresion: {
        velocidadColor: '31 ppm',
        velocidadMono: '33 ppm',
        resolucion: '2400 x 600 DPI',
        primeraPagina: 'Menos de 9.5 segundos'
      },
      conectividad: {
        wifi: 'Sí',
        ethernet: 'Sí',
        usb: 'Sí',
        movil: 'Brother Mobile Connect'
      },
      funciones: {
        escaner: 'Sí - hasta 1200 x 2400 DPI',
        copiadora: 'Sí',
        fax: 'Sí',
        duplex: 'Automático'
      },
      capacidad: {
        papel: '250 hojas',
        salida: '150 hojas'
      }
    }
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
    compatibilidad: ['WiFi', 'Red Ethernet', 'Color'],
    caracteristicas: {
      impresion: {
        velocidadColor: '31 ppm',
        velocidadMono: '33 ppm',
        resolucion: '2400 x 600 DPI',
        primeraPagina: 'Menos de 9.5 segundos'
      },
      conectividad: {
        wifi: 'Sí',
        ethernet: 'Sí',
        usb: 'Sí',
        movil: 'Brother Mobile Connect'
      },
      funciones: {
        escaner: 'No',
        copiadora: 'No',
        fax: 'No',
        duplex: 'Manual'
      },
      capacidad: {
        papel: '250 hojas',
        salida: '150 hojas'
      }
    }
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
    compatibilidad: ['WiFi', 'Red Ethernet'],
    caracteristicas: {
      impresion: {
        velocidadMono: '42 ppm',
        resolucion: '2400 x 600 DPI',
        primeraPagina: 'Menos de 8.5 segundos'
      },
      conectividad: {
        wifi: 'Sí',
        ethernet: 'Sí',
        usb: 'Sí',
        movil: 'Brother Mobile Connect'
      },
      funciones: {
        escaner: 'No',
        copiadora: 'No',
        fax: 'No',
        duplex: 'Automático'
      },
      capacidad: {
        papel: '250 hojas + 50 hojas multipropósito',
        salida: '150 hojas'
      }
    }
  },
  // Agregar el resto de las impresoras aquí con características detalladas...
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
    compatibilidad: ['WiFi', 'Red Ethernet', 'Escáner integrado'],
    caracteristicas: {
      impresion: {
        velocidadMono: '20 ppm',
        resolucion: '2400 x 600 DPI',
        primeraPagina: 'Menos de 10 segundos'
      },
      conectividad: {
        wifi: 'Sí',
        ethernet: 'Sí',
        usb: 'Sí',
        movil: 'Brother Mobile Connect'
      },
      funciones: {
        escaner: 'Sí - hasta 1200 x 2400 DPI',
        copiadora: 'Sí',
        fax: 'No',
        duplex: 'Manual'
      },
      capacidad: {
        papel: '150 hojas',
        salida: '50 hojas'
      }
    }
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
    compatibilidad: ['WiFi', 'USB'],
    caracteristicas: {
      impresion: {
        velocidadMono: '32 ppm',
        resolucion: '2400 x 600 DPI',
        primeraPagina: 'Menos de 8.5 segundos'
      },
      conectividad: {
        wifi: 'Sí',
        ethernet: 'No',
        usb: 'Sí',
        movil: 'Brother Mobile Connect'
      },
      funciones: {
        escaner: 'No',
        copiadora: 'No',
        fax: 'No',
        duplex: 'Automático'
      },
      capacidad: {
        papel: '250 hojas',
        salida: '100 hojas'
      }
    }
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
    compatibilidad: ['WiFi', 'Red Ethernet', 'Full Duplex'],
    caracteristicas: {
      impresion: {
        velocidadMono: '46 ppm',
        resolucion: '2400 x 600 DPI',
        primeraPagina: 'Menos de 8 segundos'
      },
      conectividad: {
        wifi: 'Sí',
        ethernet: 'Sí',
        usb: 'Sí',
        movil: 'Brother Mobile Connect'
      },
      funciones: {
        escaner: 'No',
        copiadora: 'No',
        fax: 'No',
        duplex: 'Automático'
      },
      capacidad: {
        papel: '250 hojas + 50 hojas multipropósito',
        salida: '150 hojas'
      }
    }
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
    compatibilidad: ['WiFi', 'Red Ethernet', 'Escáner integrado'],
    caracteristicas: {
      impresion: {
        velocidadMono: '30 ppm',
        resolucion: '2400 x 600 DPI',
        primeraPagina: 'Menos de 8.5 segundos'
      },
      conectividad: {
        wifi: 'Sí',
        ethernet: 'Sí',
        usb: 'Sí',
        movil: 'Brother Mobile Connect'
      },
      funciones: {
        escaner: 'Sí - hasta 1200 x 2400 DPI',
        copiadora: 'Sí',
        fax: 'No',
        duplex: 'Automático'
      },
      capacidad: {
        papel: '250 hojas',
        salida: '100 hojas'
      }
    }
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
    compatibilidad: ['USB'],
    caracteristicas: {
      impresion: {
        velocidadMono: '20 ppm',
        resolucion: '2400 x 600 DPI',
        primeraPagina: 'Menos de 10 segundos'
      },
      conectividad: {
        wifi: 'No',
        ethernet: 'No',
        usb: 'Sí',
        movil: 'No'
      },
      funciones: {
        escaner: 'No',
        copiadora: 'No',
        fax: 'No',
        duplex: 'Manual'
      },
      capacidad: {
        papel: '150 hojas',
        salida: '100 hojas'
      }
    }
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
    compatibilidad: ['WiFi', 'USB', 'Impresión móvil'],
    caracteristicas: {
      impresion: {
        velocidadMono: '20 ppm',
        resolucion: '2400 x 600 DPI',
        primeraPagina: 'Menos de 10 segundos'
      },
      conectividad: {
        wifi: 'Sí',
        ethernet: 'No',
        usb: 'Sí',
        movil: 'Brother Mobile Connect'
      },
      funciones: {
        escaner: 'No',
        copiadora: 'No',
        fax: 'No',
        duplex: 'Manual'
      },
      capacidad: {
        papel: '150 hojas',
        salida: '50 hojas'
      }
    }
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
    compatibilidad: ['Red Ethernet', 'Full Duplex'],
    caracteristicas: {
      impresion: {
        velocidadMono: '42 ppm',
        resolucion: '2400 x 600 DPI',
        primeraPagina: 'Menos de 8.5 segundos'
      },
      conectividad: {
        wifi: 'No',
        ethernet: 'Sí',
        usb: 'Sí',
        movil: 'No'
      },
      funciones: {
        escaner: 'No',
        copiadora: 'No',
        fax: 'No',
        duplex: 'Automático'
      },
      capacidad: {
        papel: '250 hojas + 50 hojas multipropósito',
        salida: '150 hojas'
      }
    }
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
    compatibilidad: ['Red Ethernet', 'Escáner integrado'],
    caracteristicas: {
      impresion: {
        velocidadMono: '20 ppm',
        resolucion: '2400 x 600 DPI',
        primeraPagina: 'Menos de 10 segundos'
      },
      conectividad: {
        wifi: 'No',
        ethernet: 'Sí',
        usb: 'Sí',
        movil: 'No'
      },
      funciones: {
        escaner: 'Sí - hasta 1200 x 2400 DPI',
        copiadora: 'Sí',
        fax: 'No',
        duplex: 'Manual'
      },
      capacidad: {
        papel: '150 hojas',
        salida: '50 hojas'
      }
    }
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
    compatibilidad: ['WiFi', 'Red Ethernet', 'Escáner integrado', 'Full Duplex'],
    caracteristicas: {
      impresion: {
        velocidadMono: '42 ppm',
        resolucion: '2400 x 600 DPI',
        primeraPagina: 'Menos de 8 segundos'
      },
      conectividad: {
        wifi: 'Sí',
        ethernet: 'Sí',
        usb: 'Sí',
        movil: 'Brother Mobile Connect'
      },
      funciones: {
        escaner: 'Sí - hasta 1200 x 2400 DPI',
        copiadora: 'Sí',
        fax: 'No',
        duplex: 'Automático'
      },
      capacidad: {
        papel: '250 hojas + 50 hojas multipropósito',
        salida: '150 hojas'
      }
    }
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
    compatibilidad: ['WiFi', 'Red Ethernet', 'Escáner integrado', 'Full Duplex', 'Fax'],
    caracteristicas: {
      impresion: {
        velocidadMono: '42 ppm',
        resolucion: '2400 x 600 DPI',
        primeraPagina: 'Menos de 8 segundos'
      },
      conectividad: {
        wifi: 'Sí',
        ethernet: 'Sí',
        usb: 'Sí',
        movil: 'Brother Mobile Connect'
      },
      funciones: {
        escaner: 'Sí - hasta 1200 x 2400 DPI',
        copiadora: 'Sí',
        fax: 'Sí',
        duplex: 'Automático'
      },
      capacidad: {
        papel: '250 hojas + 50 hojas multipropósito',
        salida: '150 hojas'
      }
    }
  }
];

const DetalleImpresora = () => {
  const { slug } = useParams();
  const impresora = todasImpresoras.find(p => p.slug === slug);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!impresora) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Minimalista para Error */}
        <div className="bg-gradient-to-br from-[#2d472f] to-[#4b6d3b] text-white">
          <div className="container mx-auto px-6 py-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Producto no encontrado</h1>
              <p className="text-white/90 mb-8">El producto que buscas no existe o ha sido removido</p>
              <Link 
                to="/productos/impresoras"
                className="inline-flex items-center space-x-2 bg-white text-[#2d472f] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Volver a Impresoras</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Minimalista */}
      <div className="bg-gradient-to-br from-[#2d472f] to-[#4b6d3b] text-white">
        <div className="container mx-auto px-6 py-16">
          {/* Título del producto */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {impresora.modelo}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {impresora.descripcion}
            </p>
          </div>
        </div>
      </div>

      {/* Navegación debajo del hero */}
      <div className="container mx-auto px-6 pt-8 pb-4">
        <Link 
          to="/productos/impresoras" 
          className="inline-flex items-center space-x-2 text-[#2d472f] hover:text-[#4b6d3b] transition-colors font-semibold"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Volver a Impresoras</span>
        </Link>
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
                  src={impresora.imagenes ? impresora.imagenes[currentImageIndex] : impresora.imagen} 
                  alt={`${impresora.nombre} - Vista ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Controles de navegación para múltiples imágenes */}
                {impresora.imagenes && impresora.imagenes.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImageIndex(prev => 
                        prev === 0 ? impresora.imagenes!.length - 1 : prev - 1
                      )}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setCurrentImageIndex(prev => 
                        prev === impresora.imagenes!.length - 1 ? 0 : prev + 1
                      )}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    
                    {/* Indicadores de imagen */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {impresora.imagenes.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              
              {/* Miniaturas para múltiples imágenes */}
              {impresora.imagenes && impresora.imagenes.length > 1 && (
                <div className="mt-4 flex space-x-2 overflow-x-auto">
                  {impresora.imagenes.map((imagen, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        index === currentImageIndex ? 'border-[#2d472f]' : 'border-gray-200'
                      }`}
                    >
                      <img 
                        src={imagen} 
                        alt={`${impresora.nombre} - Vista ${index + 1}`}
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
                  {impresora.nombre}
                </h2>
                <div className="flex items-center space-x-2 mb-4">
                  <Printer className="w-5 h-5 text-[#4b6d3b]" />
                  <span className="text-[#4b6d3b] font-medium">{impresora.tecnologia}</span>
                </div>
                <div className="text-2xl font-bold text-[#2d472f]">
                  {impresora.precio}
                </div>
              </div>

              {/* Características Principales */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#2d472f] mb-4">Características Principales</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold block text-gray-700">Resolución</span>
                    <span className="text-gray-600">{impresora.resolucion}</span>
                  </div>
                  <div>
                    <span className="font-semibold block text-gray-700">Velocidad</span>
                    <span className="text-gray-600">{impresora.velocidad}</span>
                  </div>
                </div>
              </div>

              {/* Compatibilidades */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#2d472f] mb-4">Conectividad y Funciones</h3>
                <div className="flex flex-wrap gap-2">
                  {impresora.compatibilidad.map((comp, idx) => (
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
        {impresora.caracteristicas && (
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-[#2d472f] mb-8 text-center">
              Especificaciones Técnicas Detalladas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Impresión */}
              <div>
                <h3 className="text-lg font-bold text-[#2d472f] mb-4 flex items-center">
                  <Printer className="w-5 h-5 mr-2" />
                  Impresión
                </h3>
                <div className="space-y-3">
                  {Object.entries(impresora.caracteristicas.impresion).map(([key, value]) => (
                    <div key={key}>
                      <span className="font-semibold block text-gray-700 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conectividad */}
              <div>
                <h3 className="text-lg font-bold text-[#2d472f] mb-4 flex items-center">
                  <Wifi className="w-5 h-5 mr-2" />
                  Conectividad
                </h3>
                <div className="space-y-3">
                  {Object.entries(impresora.caracteristicas.conectividad).map(([key, value]) => (
                    <div key={key}>
                      <span className="font-semibold block text-gray-700 capitalize">
                        {key === 'wifi' ? 'WiFi' : key === 'ethernet' ? 'Ethernet' : key === 'usb' ? 'USB' : 'Móvil'}
                      </span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Funciones */}
              <div>
                <h3 className="text-lg font-bold text-[#2d472f] mb-4 flex items-center">
                  <Scan className="w-5 h-5 mr-2" />
                  Funciones
                </h3>
                <div className="space-y-3">
                  {Object.entries(impresora.caracteristicas.funciones).map(([key, value]) => (
                    <div key={key}>
                      <span className="font-semibold block text-gray-700 capitalize">
                        {key === 'escaner' ? 'Escáner' : key}
                      </span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Capacidad */}
              <div>
                <h3 className="text-lg font-bold text-[#2d472f] mb-4 flex items-center">
                  <Network className="w-5 h-5 mr-2" />
                  Capacidad
                </h3>
                <div className="space-y-3">
                  {Object.entries(impresora.caracteristicas.capacidad).map(([key, value]) => (
                    <div key={key}>
                      <span className="font-semibold block text-gray-700 capitalize">
                        {key}
                      </span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
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

export default DetalleImpresora;
