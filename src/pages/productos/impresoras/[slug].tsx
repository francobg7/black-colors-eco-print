import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Printer, Wifi, Network, Scan, Check, Phone, Mail, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import Footer from '@/components/Footer';
import WhatsAppInlineButton from '@/components/WhatsAppInlineButton';
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
    nombre: 'BROTHER HL-L5210DN',
    modelo: 'HL-L5210DN',
    descripcion: 'Impresora Láser Monocromática con Red',
    slug: 'brother-hl-l5210-dn',
    imagen: '/images/impresoras/BROTHER-HL-5210-DN.jpg',
    imagenes: [
      '/images/impresoras/BROTHER-HL-5210-DN.jpg',
      '/images/impresoras/imgi_32_Brother-5210dn-700x804.png'
    ],
    tecnologia: 'Láser monocromática',
    resolucion: '1200 x 1200 DPI',
    velocidad: '48 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['Red Ethernet', 'USB', 'Dúplex automático'],
    caracteristicas: {
      impresion: {
        velocidadMono: '48 ppm',
        resolucion: '1200 x 1200 DPI',
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
        papel: '250 hojas + multipropósito 100 hojas',
        salida: '150 hojas'
      }
    }
  },
  {
    id: 30,
    nombre: 'BROTHER HL-L5210DW',
    modelo: 'HL-L5210DW',
    descripcion: 'Impresora Láser Monocromática con Red/WiFi',
    slug: 'brother-hl-l5210-dw',
    imagen: '/images/impresoras/BROTHER-HL-5210-DN.jpg',
    tecnologia: 'Láser monocromática',
    resolucion: '1200 x 1200 DPI',
    velocidad: '48 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['WiFi', 'Red Ethernet', 'USB', 'Dúplex automático'],
    caracteristicas: {
      impresion: {
        velocidadMono: '48 ppm',
        resolucion: '1200 x 1200 DPI',
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
        papel: '250 hojas + multipropósito 100 hojas',
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
  },
  // Impresoras Láser Monocromáticas adicionales
  {
    id: 14,
    nombre: 'BROTHER HL-L2320D',
    modelo: 'HL-L2320D',
    descripcion: 'Impresora Láser Monocromática con Dúplex Automático',
    slug: 'brother-hl-l2320d',
    imagen: '/images/impresoras/BROTHER-HL-L2320D.png',
    imagenes: [
      '/images/impresoras/BROTHER-HL-L2320D.png',
      '/images/impresoras/BROTHER-HL-L2320D-2.png'
    ],
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '30 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['USB', 'Dúplex Automático'],
    caracteristicas: {
      impresion: {
        velocidadMono: '30 ppm',
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
        duplex: 'Automático'
      },
      capacidad: {
        papel: '250 hojas',
        salida: '100 hojas'
      }
    }
  },
  {
    id: 15,
    nombre: 'BROTHER DCP-L2660DW',
    modelo: 'DCP-L2660DW',
    descripcion: 'Multifunción Láser Monocromática con Red/WiFi',
    slug: 'brother-dcp-l2660dw',
    imagen: '/images/impresoras/BROTHER-DCP-L2660DW.jpg',
    imagenes: [
      '/images/impresoras/BROTHER-DCP-L2660DW.jpg',
      '/images/impresoras/BROTHER-DCP-L2660DW-2.jpg'
    ],
    tecnologia: 'Láser monocromática',
    resolucion: '1200 x 1200 DPI',
    velocidad: '34-36 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['WiFi', 'Red Ethernet', 'Escáner integrado', 'Dúplex Automático'],
    caracteristicas: {
      impresion: {
        velocidadMono: '34-36 ppm',
        resolucion: '1200 x 1200 DPI',
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
        papel: '250 hojas + 100 hojas multipropósito',
        salida: '150 hojas'
      }
    }
  },
  {
    id: 16,
    nombre: 'BROTHER DCP-L5610DN',
    modelo: 'DCP-L5610DN',
    descripcion: 'Multifunción Láser Monocromática con Red',
    slug: 'brother-dcp-l5610dn',
    imagen: '/images/impresoras/BROTHER-DCP-L5610DN.png',
    imagenes: [
      '/images/impresoras/BROTHER-DCP-L5610DN.png',
      '/images/impresoras/BROTHER-DCP-L5610DN-2.png'
    ],
    tecnologia: 'Láser monocromática',
    resolucion: '1200 x 1200 DPI',
    velocidad: '48-50 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['Red Ethernet', 'Escáner integrado', 'Dúplex Automático'],
    caracteristicas: {
      impresion: {
        velocidadMono: '48-50 ppm',
        resolucion: '1200 x 1200 DPI',
        primeraPagina: 'Menos de 8 segundos'
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
        duplex: 'Automático'
      },
      capacidad: {
        papel: '250 hojas + 100 hojas multipropósito',
        salida: '150 hojas'
      }
    }
  },
  {
    id: 17,
    nombre: 'BROTHER MFC-L59150DW',
    modelo: 'MFC-L59150DW',
    descripcion: 'Multifunción Láser Monocromática con Red/WiFi Full Dúplex + Fax',
    slug: 'brother-mfc-l59150dw',
    imagen: '/images/impresoras/BROTHER-MFC-L59150DW.jpg',
    imagenes: [
      '/images/impresoras/BROTHER-MFC-L59150DW.jpg',
      '/images/impresoras/BROTHER-MFC-L59150DW-2.jpg'
    ],
    tecnologia: 'Láser monocromática',
    resolucion: '1200 x 1200 DPI',
    velocidad: '50-52 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['WiFi', 'Red Ethernet', 'Escáner integrado', 'Full Duplex', 'Fax'],
    caracteristicas: {
      impresion: {
        velocidadMono: '50-52 ppm',
        resolucion: '1200 x 1200 DPI',
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
        duplex: 'Full Dúplex'
      },
      capacidad: {
        papel: '250 hojas + 100 hojas multipropósito',
        salida: '150 hojas'
      }
    }
  },
  {
    id: 18,
    nombre: 'BROTHER MFC-L69150DW',
    modelo: 'MFC-L69150DW',
    descripcion: 'Multifunción Láser Monocromática con Red/WiFi Full Dúplex + Fax',
    slug: 'brother-mfc-l69150dw',
    imagen: '/images/impresoras/BROTHER-MFC-L69150DW.jpg',
    imagenes: [
      '/images/impresoras/BROTHER-MFC-L69150DW.jpg',
      '/images/impresoras/BROTHER-MFC-L69150DW-2.jpg'
    ],
    tecnologia: 'Láser monocromática',
    resolucion: '1200 x 1200 DPI',
    velocidad: '50-52 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['WiFi', 'Red Ethernet', 'Escáner integrado', 'Full Duplex', 'Fax'],
    caracteristicas: {
      impresion: {
        velocidadMono: '50-52 ppm',
        resolucion: '1200 x 1200 DPI',
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
        duplex: 'Full Dúplex'
      },
      capacidad: {
        papel: '550 hojas + 100 hojas multipropósito',
        salida: '150 hojas'
      }
    }
  },
  // Impresoras Láser Color
  {
    id: 19,
    nombre: 'BROTHER HL-L8360CDW',
    modelo: 'HL-L8360CDW',
    descripcion: 'Impresora Láser Color con Red/WiFi',
    slug: 'brother-hl-l8360cdw',
    imagen: '/images/impresoras/BROTHER-HL-L8360CDW.jpg',
    imagenes: [
      '/images/impresoras/BROTHER-HL-L8360CDW.jpg',
      '/images/impresoras/BROTHER-HL-L8360CDW-2.jpg'
    ],
    tecnologia: 'Láser color',
    resolucion: '2400 x 600 DPI',
    velocidad: '33 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['WiFi', 'Red Ethernet', 'Color', 'Dúplex Automático'],
    caracteristicas: {
      impresion: {
        velocidadColor: '33 ppm',
        velocidadMono: '33 ppm',
        resolucion: '2400 x 600 DPI',
        primeraPagina: 'Menos de 9 segundos'
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
        papel: '250 hojas',
        salida: '150 hojas'
      }
    }
  },
  // Multifunción Inkjet (Tinta Continua)
  {
    id: 20,
    nombre: 'BROTHER DCP-T220',
    modelo: 'DCP-T220',
    descripcion: 'Multifunción Inkjet con Sistema de Tinta Continua',
    slug: 'brother-dcp-t220',
    imagen: '/images/impresoras/BROTHER-DCP-T220.png',
    imagenes: [
      '/images/impresoras/BROTHER-DCP-T220.png',
      '/images/impresoras/BROTHER-DCP-T220-2.png'
    ],
    tecnologia: 'Inkjet',
    resolucion: '6000 x 1200 DPI',
    velocidad: '28 ppm Negro / 11 ppm Color',
    precio: 'Consultar precio',
    compatibilidad: ['USB', 'Escáner integrado', 'Color', 'Tinta Continua'],
    caracteristicas: {
      impresion: {
        velocidadMono: '28 ppm',
        velocidadColor: '11 ppm',
        resolucion: '6000 x 1200 DPI',
        primeraPagina: 'Menos de 10 segundos'
      },
      conectividad: {
        wifi: 'No',
        ethernet: 'No',
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
    id: 21,
    nombre: 'BROTHER DCP-T420W',
    modelo: 'DCP-T420W',
    descripcion: 'Multifunción Inkjet con Sistema de Tinta Continua y WiFi',
    slug: 'brother-dcp-t420w',
    imagen: '/images/impresoras/BROTHER-DCP-T420W.jpg',
    imagenes: [
      '/images/impresoras/BROTHER-DCP-T420W.jpg',
      '/images/impresoras/BROTHER-DCP-T420W-2.jpg',
      '/images/impresoras/BROTHER-DCP-T420W-3.jpg'
    ],
    tecnologia: 'Inkjet',
    resolucion: '6000 x 1200 DPI',
    velocidad: '28 ppm Negro / 11 ppm Color',
    precio: 'Consultar precio',
    compatibilidad: ['USB', 'WiFi', 'Escáner integrado', 'Color', 'Tinta Continua'],
    caracteristicas: {
      impresion: {
        velocidadMono: '28 ppm',
        velocidadColor: '11 ppm',
        resolucion: '6000 x 1200 DPI',
        primeraPagina: 'Menos de 10 segundos'
      },
      conectividad: {
        wifi: 'Sí',
        ethernet: 'No',
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
    id: 22,
    nombre: 'BROTHER DCP-T720DW',
    modelo: 'DCP-T720DW',
    descripcion: 'Multifunción Inkjet con Sistema de Tinta Continua, WiFi y Dúplex',
    slug: 'brother-dcp-t720dw',
    imagen: '/images/impresoras/BROTHER-DCP-T720DW.png',
    imagenes: [
      '/images/impresoras/BROTHER-DCP-T720DW.png',
      '/images/impresoras/BROTHER-DCP-T720DW-2.jpg',
      '/images/impresoras/BROTHER-DCP-T720DW-3.jpg'
    ],
    tecnologia: 'Inkjet',
    resolucion: '6000 x 1200 DPI',
    velocidad: '30 ppm Negro / 26 ppm Color',
    precio: 'Consultar precio',
    compatibilidad: ['USB', 'WiFi', 'Escáner integrado', 'Color', 'Tinta Continua', 'Dúplex Automático'],
    caracteristicas: {
      impresion: {
        velocidadMono: '30 ppm',
        velocidadColor: '26 ppm',
        resolucion: '6000 x 1200 DPI',
        primeraPagina: 'Menos de 10 segundos'
      },
      conectividad: {
        wifi: 'Sí',
        ethernet: 'No',
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
        papel: '150 hojas',
        salida: '50 hojas'
      }
    }
  },
  {
    id: 23,
    nombre: 'BROTHER DCP-T820DW',
    modelo: 'DCP-T820DW',
    descripcion: 'Multifunción Inkjet con Sistema de Tinta Continua, Red/WiFi y Dúplex',
    slug: 'brother-dcp-t820dw',
    imagen: '/images/impresoras/BROTHER-DCP-T820DW.jpg',
    imagenes: [
      '/images/impresoras/BROTHER-DCP-T820DW.jpg',
      '/images/impresoras/BROTHER-DCP-T820DW-2.jpg'
    ],
    tecnologia: 'Inkjet',
    resolucion: '6000 x 1200 DPI',
    velocidad: '30 ppm Negro / 26 ppm Color',
    precio: 'Consultar precio',
    compatibilidad: ['USB', 'WiFi', 'Red Ethernet', 'Escáner integrado', 'Color', 'Tinta Continua', 'Dúplex Automático'],
    caracteristicas: {
      impresion: {
        velocidadMono: '30 ppm',
        velocidadColor: '26 ppm',
        resolucion: '6000 x 1200 DPI',
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
        duplex: 'Automático'
      },
      capacidad: {
        papel: '150 hojas',
        salida: '80 hojas'
      }
    }
  },
  {
    id: 24,
    nombre: 'BROTHER MFC-T4500DW',
    modelo: 'MFC-T4500DW',
    descripcion: 'Multifunción Inkjet A3 con Sistema de Tinta Continua, Red/WiFi y Fax',
    slug: 'brother-mfc-t4500dw',
    imagen: '/images/impresoras/BROTHER-MFC-T4500DW.png',
    imagenes: [
      '/images/impresoras/BROTHER-MFC-T4500DW.png',
      '/images/impresoras/BROTHER-MFC-T4500DW-2.png'
    ],
    tecnologia: 'Inkjet',
    resolucion: '6000 x 1200 DPI',
    velocidad: '35 ppm Negro / 27 ppm Color',
    precio: 'Consultar precio',
    compatibilidad: ['USB', 'WiFi', 'Red Ethernet', 'Escáner integrado', 'Color', 'Tinta Continua', 'A3', 'Fax'],
    caracteristicas: {
      impresion: {
        velocidadMono: '35 ppm',
        velocidadColor: '27 ppm',
        resolucion: '6000 x 1200 DPI',
        primeraPagina: 'Menos de 10 segundos'
      },
      conectividad: {
        wifi: 'Sí',
        ethernet: 'Sí',
        usb: 'Sí',
        movil: 'Brother Mobile Connect'
      },
      funciones: {
        escaner: 'Sí - hasta A3',
        copiadora: 'Sí - hasta A3',
        fax: 'Sí',
        duplex: 'Hasta A4'
      },
      capacidad: {
        papel: '250 hojas + 100 hojas multipropósito',
        salida: '100 hojas'
      }
    }
  },
  {
    id: 25,
    nombre: 'BROTHER MFC-J6955DW',
    modelo: 'MFC-J6955DW',
    descripcion: 'Multifunción Inkjet A3 con Cartucho, Red/WiFi y Full Dúplex + Fax',
    slug: 'brother-mfc-j6955dw',
    imagen: '/images/impresoras/BROTHER-MFC-J6955DW.jpg',
    imagenes: [
      '/images/impresoras/BROTHER-MFC-J6955DW.jpg',
      '/images/impresoras/BROTHER-MFC-J6955DW-2.jpg'
    ],
    tecnologia: 'Inkjet',
    resolucion: '6000 x 1200 DPI',
    velocidad: '30 ppm Negro / 30 ppm Color',
    precio: 'Consultar precio',
    compatibilidad: ['USB', 'WiFi', 'Red Ethernet', 'Escáner integrado', 'Color', 'A3', 'Full Duplex', 'Fax'],
    caracteristicas: {
      impresion: {
        velocidadMono: '30 ppm',
        velocidadColor: '30 ppm',
        resolucion: '6000 x 1200 DPI',
        primeraPagina: 'Menos de 10 segundos'
      },
      conectividad: {
        wifi: 'Sí',
        ethernet: 'Sí',
        usb: 'Sí',
        movil: 'Brother Mobile Connect'
      },
      funciones: {
        escaner: 'Sí - hasta A3',
        copiadora: 'Sí - hasta A3',
        fax: 'Sí',
        duplex: 'Full Dúplex hasta A3'
      },
      capacidad: {
        papel: '2x250 hojas + 100 hojas multipropósito',
        salida: '100 hojas'
      }
    }
  },
  {
    id: 26,
    nombre: 'BROTHER HL-L5210DW',
    modelo: 'HL-L5210DW',
    descripcion: 'Impresora Láser Monocromática con Red/WiFi',
    slug: 'brother-hl-l5210-dw',
    imagen: '/images/impresoras/BROTHER-HL-5210-DN.jpg',
    tecnologia: 'Láser monocromática',
    resolucion: '1200 x 1200 DPI',
    velocidad: '48 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['WiFi', 'Red Ethernet', 'USB', 'Dúplex automático'],
    caracteristicas: {
      impresion: {
        velocidadMono: '48 ppm',
        resolucion: '1200 x 1200 DPI',
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
        papel: '250 hojas + multipropósito 100 hojas',
        salida: '150 hojas'
      }
    }
  },
  {
    id: 27,
    nombre: 'BROTHER DCP-1617NW',
    modelo: 'DCP-1617NW',
    descripcion: 'Multifuncional Láser Monocromática con Red/WiFi',
    slug: 'brother-dcp-1617-nw',
    imagen: '/images/impresoras/imgi_167_brother-dcp1617nw.jpg',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '21 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['WiFi', 'Red Ethernet', 'USB', 'Escáner integrado', 'ADF', 'Platina A4'],
    caracteristicas: {
      impresion: {
        velocidadMono: '21 ppm',
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
    id: 28,
    nombre: 'BROTHER MFC-L8360DW',
    modelo: 'MFC-L8360DW',
    descripcion: 'Multifuncional Láser Color con Red/WiFi',
    slug: 'brother-mfc-l8360-dw',
    imagen: '/images/impresoras/BROTHER-MFC-L8360-DW.jpg',
    tecnologia: 'Láser color',
    resolucion: '2400 x 600 DPI',
    velocidad: '31 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['WiFi', 'Red Ethernet', 'USB', 'Escáner integrado', 'Color'],
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
    id: 29,
    nombre: 'BROTHER Multifunción LED Color',
    modelo: 'LED Color',
    descripcion: 'Multifuncional LED Color con Red/WiFi 5GHz',
    slug: 'brother-led-color',
    imagen: '/images/impresoras/BROTHER-HL-L8360CDW.jpg',
    tecnologia: 'LED color',
    resolucion: '2400 x 600 DPI',
    velocidad: '27 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['WiFi 5GHz', 'Red Ethernet', 'USB', 'Escáner integrado', 'ADF', 'Color', 'Platina A4'],
    caracteristicas: {
      impresion: {
        velocidadColor: '27 ppm',
        velocidadMono: '27 ppm',
        resolucion: '2400 x 600 DPI',
        primeraPagina: 'Menos de 9 segundos'
      },
      conectividad: {
        wifi: 'Sí - 5GHz',
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
        papel: '250 hojas',
        salida: '100 hojas'
      }
    }
  },
  {
    id: 30,
    nombre: 'BROTHER ScanNCut SDX125',
    modelo: 'SDX125',
    descripcion: 'Plotter de corte con escáner incorporado para manualidades y diseño textil',
    slug: 'brother-scanncut-sdx125',
    imagen: '/images/impresoras/BROTHER-SCANNCUT-SDX125.png',
    imagenes: [
      '/images/impresoras/BROTHER-SCANNCUT-SDX125-3.png',
      '/images/impresoras/BROTHER-SCANNCUT-SDX125.png',
      '/images/impresoras/BROTHER-SCANNCUT-SDX125-2.png',
      
    ],
    tecnologia: 'Plotter de corte',
    resolucion: '600 DPI (escáner)',
    velocidad: 'Corte rápido y silencioso',
    precio: 'Consultar precio',
    compatibilidad: ['WiFi', 'Escáner incorporado 600 DPI', 'Pantalla táctil LCD 5"', 'Brother Canvas Web App', 'Independiente (sin PC)'],
    caracteristicas: {
      corte: {
        grosorMaximo: 'Hasta 3 mm',
        areaTrabajo: '12" x 12" estándar',
        areaMaxima: '30 cm x 178 cm (con alimentador de rollo)',
        cuchilla: 'Automática con ajuste de profundidad y presión'
      },
      conectividad: {
        wifi: 'Sí',
        ethernet: 'No',
        usb: 'Sí',
        movil: 'Brother Canvas Web App'
      },
      funciones: {
        escaner: 'Sí - 600 DPI hasta 12" x 12"',
        copiadora: 'No',
        fax: 'No',
        duplex: 'No'
      },
      especiales: {
        corte: 'Papel, cartulina, vinilo, vinil textil, acetato, goma eva, madera balsa, imán, tela algodón, silicón flexible',
        dibujo: 'Sí (con accesorios)',
        realce: 'Sí (accesorio opcional)',
        independiente: 'Funciona sin conexión a PC'
      },
      capacidad: {
        patrones: '682 patrones precargados',
        pantalla: 'LCD táctil a color 5"'
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
        {/* Hero Section for Error */}
        <div className="relative">
          {/* Hero Background */}
          <div className="relative h-[400px] overflow-hidden">
            <img 
              src="/images/impresoras/portada.jpg" 
              alt="Impresoras Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-gray-50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
              <h1 className="text-4xl font-bold mb-4">Producto no encontrado</h1>
              <p className="text-xl text-center mb-8">El producto que buscas no existe o ha sido removido</p>
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
      {/* Hero Section similar to index */}
      <div className="relative">
        {/* Hero Background */}
        <div className="relative h-[400px] overflow-hidden">
          <img 
            src={impresora.imagenes ? impresora.imagenes[0] : impresora.imagen} 
            alt={`${impresora.nombre} Hero`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-gray-50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              {impresora.modelo}
            </h1>
            <p className="text-xl max-w-3xl text-center mb-8">
              {impresora.descripcion}
            </p>
          </div>
        </div>

      </div>

      {/* Navigation Button - Centered above main content */}
      <div className="container mx-auto px-6 pt-8 pb-4">
        <div className="flex justify-left">
          <Link 
            to="/productos/impresoras" 
            className="inline-flex items-center space-x-2 bg-white text-[#2d472f] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg border border-gray-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver a Impresoras</span>
          </Link>
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
                <WhatsAppInlineButton
                  customMessage={`Hola, me gustaría solicitar una cotización para la impresora ${impresora.nombre}.`}
                  className="flex-1 bg-[#2d472f] text-white hover:bg-[#4b6d3b] transition-colors"
                  size="default"
                >
                  Solicitar Cotización
                </WhatsAppInlineButton>
                <WhatsAppInlineButton
                  customMessage={`Hola, necesito más información sobre la impresora ${impresora.nombre}.`}
                  className="flex-1 border-2 border-[#2d472f] text-[#2d472f] hover:bg-[#2d472f] hover:text-white transition-colors"
                  size="default"
                >
                  Más Información
                </WhatsAppInlineButton>
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {/* Sección principal (Impresión o Corte) */}
              {(impresora.caracteristicas.impresion || impresora.caracteristicas.corte) && (
                <div>
                  <h3 className="text-lg font-bold text-[#2d472f] mb-4 flex items-center">
                    <Printer className="w-5 h-5 mr-2" />
                    {impresora.caracteristicas.impresion ? 'Impresión' : 'Corte'}
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(impresora.caracteristicas.impresion || impresora.caracteristicas.corte || {}).map(([key, value]) => (
                      <div key={key}>
                        <span className="font-semibold block text-gray-700 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Conectividad */}
              {impresora.caracteristicas.conectividad && (
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
              )}

              {/* Funciones */}
              {impresora.caracteristicas.funciones && (
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
              )}

              {/* Capacidad */}
              {impresora.caracteristicas.capacidad && (
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
              )}

              {/* Funciones Especiales (para ScanNCut) */}
              {impresora.caracteristicas.especiales && (
                <div>
                  <h3 className="text-lg font-bold text-[#2d472f] mb-4 flex items-center">
                    <Check className="w-5 h-5 mr-2" />
                    Especiales
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(impresora.caracteristicas.especiales).map(([key, value]) => (
                      <div key={key}>
                        <span className="font-semibold block text-gray-700 capitalize">
                          {key}
                        </span>
                        <span className="text-gray-600 text-sm">{value}</span>
                      </div>
                    ))}
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
              <p className="opacity-90">+595 982 343 128</p>
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
