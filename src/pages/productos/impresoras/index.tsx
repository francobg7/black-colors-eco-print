import { Link } from 'react-router-dom';
import { Printer } from 'lucide-react';
import Footer from '@/components/Footer';
import { useState } from 'react';
import SEO from '@/components/SEO';

// Datos de impresoras Top Sales

// Datos de todas las impresoras
const todasImpresoras = [
  // IMPRESORAS LÁSER MONOCROMÁTICAS
  {
    id: 1,
    nombre: 'BROTHER HL-1200',
    modelo: 'HL-1200',
    descripcion: 'Impresora Láser Monocromática',
    slug: 'brother-hl-1200',
    imagen: '/images/impresoras/imgi_152_hl-1200_1.jpg',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '21 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['USB'],
    memoria: '1 MB RAM',
    procesador: '200 MHz',
    bandeja: '150 hojas',
    cicloMensual: '10.000 páginas',
    insumos: 'Toner TN-1060 (1.000) | Cilindro DR-1060 (10.000)'
  },
  {
    id: 2,
    nombre: 'BROTHER HL-1212W',
    modelo: 'HL-1212W',
    descripcion: 'Impresora Láser Monocromática con WiFi',
    slug: 'brother-hl-1212w',
    imagen: '/images/impresoras/BROTHER-HL-1212WIFI.png',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '21 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['WiFi', 'USB', 'Impresión móvil'],
    memoria: '1 MB RAM',
    procesador: '200 MHz',
    bandeja: '150 hojas',
    cicloMensual: '10.000 páginas',
    insumos: 'Toner TN-1060 (1.000) | Cilindro DR-1060 (10.000)'
  },
  {
    id: 3,
    nombre: 'BROTHER HL-L2320D',
    modelo: 'HL-L2320D',
    descripcion: 'Impresora Láser Monocromática',
    slug: 'brother-hl-l2320d',
    imagen: '/images/impresoras/BROTHER-HL-L2320D.png',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '30 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['USB', 'Dúplex automático'],
    memoria: '8 MB RAM',
    procesador: '266 MHz',
    bandeja: '250 hojas',
    cicloMensual: '10.000 páginas',
    insumos: 'Toner TN-2370 (2.600) | Cilindro DR-2340 (12.000)'
  },
  {
    id: 4,
    nombre: 'BROTHER HL-L2360DW',
    modelo: 'HL-L2360DW',
    descripcion: 'Impresora Láser Monocromática con WiFi',
    slug: 'brother-hl-l2360-dw',
    imagen: '/images/impresoras/BROTHER-HL-L2360-DW.png',
    tecnologia: 'Láser monocromática',
    resolucion: '2400 x 600 DPI',
    velocidad: '32 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['WiFi', 'Red Ethernet', 'USB', 'Dúplex automático'],
    memoria: '32 MB RAM',
    procesador: '266 MHz',
    bandeja: '250 hojas',
    cicloMensual: '10.000 páginas',
    insumos: 'Toner TN-2370 (2.600) | Cilindro DR-2340 (12.000)'
  },
  {
    id: 5,
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
    memoria: '256 MB RAM',
    procesador: '1,2 GHz',
    bandeja: '250 hojas + multipropósito 100 hojas',
    cicloMensual: '90.000 páginas',
    insumos: 'TN-3609XL (6.000) | TN-3609XXL (11.000) | TN-3619 (18.000) | DR-3609 (75.000)'
  },
  {
    id: 6,
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
    memoria: '256 MB RAM',
    procesador: '1,2 GHz',
    bandeja: '250 hojas + multipropósito 100 hojas',
    cicloMensual: '90.000 páginas',
    insumos: 'TN-3609XL (6.000) | TN-3609XXL (11.000) | TN-3619 (18.000) | DR-3609 (75.000)'
  },
  {
    id: 7,
    nombre: 'BROTHER HL-L6415DW',
    modelo: 'HL-L6415DW',
    descripcion: 'Impresora Láser Monocromática con Red/WiFi',
    slug: 'brother-hl-l6415-dw',
    imagen: '/images/impresoras/imgi_2_hll6415dw_main.png',
    imagenes: [
      '/images/impresoras/imgi_2_hll6415dw_main.png',
      '/images/impresoras/imgi_4_hll6415dw_right.png',
      '/images/impresoras/imgi_7_hll6415dw_2.png'
    ],
    tecnologia: 'Láser monocromática',
    resolucion: '1200 x 1200 DPI',
    velocidad: '50 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['WiFi', 'Red Ethernet', 'USB', 'Dúplex automático'],
    memoria: '1 GB RAM',
    procesador: '1,2 GHz',
    bandeja: '520 hojas + multipropósito 100 hojas',
    cicloMensual: '160.000 páginas',
    insumos: 'TN-3609XL (6.000) | TN-3609XXL (11.000) | TN-3619 (18.000) | TN-3619XL (25.000) | DR-3609 (75.000)'
  },

  // MULTIFUNCIÓN LÁSER MONOCROMÁTICAS
  {
    id: 8,
    nombre: 'BROTHER DCP-1617NW',
    modelo: 'DCP-1617NW',
    descripcion: 'Multifuncional Láser Monocromática con Red/WiFi',
    slug: 'brother-dcp-1617-nw',
    imagen: '/images/impresoras/imgi_167_brother-dcp1617nw.jpg',
    tecnologia: 'Láser monocromática multifuncional',
    resolucion: '2400 x 600 DPI',
    velocidad: '21 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['WiFi', 'Red Ethernet', 'USB', 'Escáner integrado', 'ADF', 'Platina A4'],
    memoria: '32 MB RAM',
    procesador: '200 MHz',
    bandeja: '150 hojas',
    cicloMensual: '10.000 páginas',
    insumos: 'TN-1060 (1.000) | DR-1060 (10.000)'
  },
  {
    id: 9,
    nombre: 'BROTHER DCP-L2540DW',
    modelo: 'DCP-L2540DW',
    descripcion: 'Multifuncional Láser Monocromática con Red/WiFi',
    slug: 'brother-dcp-l2540-dw',
    imagen: '/images/impresoras/BROTHER-DCP-L2540-DW.jpg',
    imagenes: [
      '/images/impresoras/BROTHER-DCP-L2540-DW.jpg',
      '/images/impresoras/BROTHER-DCP-L2540-DW2.jpg'
    ],
    tecnologia: 'Láser monocromática multifuncional',
    resolucion: '2400 x 600 DPI',
    velocidad: '30 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['WiFi', 'Red Ethernet', 'USB', 'Escáner integrado', 'ADF', 'Dúplex automático', 'Platina A4'],
    memoria: '32 MB RAM',
    procesador: '200 MHz',
    bandeja: '250 hojas',
    cicloMensual: '10.000 páginas',
    insumos: 'TN-2370 (2.600) | DR-2340 (12.000)'
  },
  {
    id: 10,
    nombre: 'BROTHER DCP-L2660DW',
    modelo: 'DCP-L2660DW',
    descripcion: 'Multifuncional Láser Monocromática con Red/WiFi',
    slug: 'brother-dcp-l2660-dw',
    imagen: '/images/impresoras/BROTHER-DCP-L2660DW.jpg',
    tecnologia: 'Láser monocromática multifuncional',
    resolucion: '1200 x 1200 DPI',
    velocidad: '34-36 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['WiFi', 'Red Ethernet', 'USB', 'Escáner integrado', 'ADF', 'Dúplex automático', 'Platina A4'],
    memoria: '256 MB RAM',
    procesador: '600 MHz',
    bandeja: '250 + 100 hojas',
    cicloMensual: '35.000 páginas',
    insumos: 'TN-860XL (3.000) | DR-860 (15.000)'
  },
  {
    id: 11,
    nombre: 'BROTHER DCP-1610DN',
    modelo: 'DCP-1610DN',
    descripcion: 'Multifuncional Láser Monocromática con Red',
    slug: 'brother-dcp-1610-dn',
    imagen: '/images/impresoras/BROTHER-DCP-1610-DN.png',
    imagenes: [
      '/images/impresoras/BROTHER-DCP-1610-DN.png',
      '/images/impresoras/BROTHER-DCP-1610-DN2.png'
    ],
    tecnologia: 'Láser monocromática multifuncional',
    resolucion: '2400 x 600 DPI',
    velocidad: '20 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['Red Ethernet', 'USB', 'Escáner integrado'],
    bandeja: '150 hojas',
    cicloMensual: '10.000 páginas',
    insumos: 'TN-1060 (1.000) | DR-1060 (10.000)'
  },
  {
    id: 12,
    nombre: 'BROTHER DCP-L5610DN',
    modelo: 'DCP-L5610DN',
    descripcion: 'Multifuncional Láser Monocromática con Red',
    slug: 'brother-dcp-l5610-dn',
    imagen: '/images/impresoras/BROTHER-DCP-L5610DN.png',
    tecnologia: 'Láser monocromática multifuncional',
    resolucion: '1200 x 1200 DPI',
    velocidad: '48-50 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['Red Ethernet', 'USB', 'Escáner integrado', 'ADF', 'Dúplex automático', 'Platina hasta Oficio Legal'],
    memoria: '512 MB RAM',
    procesador: '1,2 GHz',
    bandeja: '250 + 100 hojas',
    cicloMensual: '90.000 páginas',
    insumos: 'TN-3609XL (6.000) | TN-3609XXL (11.000) | TN-3619 (18.000) | DR-3609 (75.000)'
  },
  {
    id: 13,
    nombre: 'BROTHER DCP-L5660DN',
    modelo: 'DCP-L5660DN',
    descripcion: 'Multifuncional Láser Monocromática con Red Full Duplex',
    slug: 'brother-dcp-l5660-dn',
    imagen: '/images/impresoras/imgi_20_5660-245x281.jpg',
    tecnologia: 'Láser monocromática multifuncional',
    resolucion: '1200 x 1200 DPI',
    velocidad: '48-50 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['Red Ethernet', 'USB', 'Escáner integrado', 'ADF', 'Full Duplex', 'Platina hasta Oficio Legal'],
    memoria: '512 MB RAM',
    procesador: '1,2 GHz',
    bandeja: '250 + 100 hojas',
    cicloMensual: '90.000 páginas',
    insumos: 'TN-3609XL (6.000) | TN-3609XXL (11.000) | TN-3619 (18.000) | DR-3609 (75.000)'
  },
  {
    id: 14,
    nombre: 'BROTHER MFC-L5915DW',
    modelo: 'MFC-L5915DW',
    descripcion: 'Multifuncional Láser Monocromática con Red/WiFi Full Duplex + Fax',
    slug: 'brother-mfc-l5915-dw',
    imagen: '/images/impresoras/imgi_3_mfc-l5915dw-front.jpg',
    imagenes: [
      '/images/impresoras/imgi_3_mfc-l5915dw-front.jpg',
      '/images/impresoras/imgi_4_mfc-l5915dw-right.jpg'
    ],
    tecnologia: 'Láser monocromática multifuncional',
    resolucion: '1200 x 1200 DPI',
    velocidad: '50-52 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['WiFi', 'Red Ethernet', 'USB', 'Escáner integrado', 'ADF', 'Full Duplex', 'Fax', 'Platina Oficio Legal'],
    memoria: '512 MB RAM',
    procesador: '1,2 GHz',
    bandeja: '250 + 100 hojas',
    cicloMensual: '90.000 páginas',
    insumos: 'TN-3609XL (6.000) | TN-3609XXL (11.000) | TN-3619 (18.000) | DR-3609 (75.000)'
  },
  {
    id: 15,
    nombre: 'BROTHER MFC-L6915DW',
    modelo: 'MFC-L6915DW',
    descripcion: 'Multifuncional Láser Monocromática con Red/WiFi Full Duplex + Fax',
    slug: 'brother-mfc-l6915-dw',
    imagen: '/images/impresoras/BROTHER-MFC-L69150DW.jpg',
    tecnologia: 'Láser monocromática multifuncional',
    resolucion: '1200 x 1200 DPI',
    velocidad: '50-52 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['WiFi', 'Red Ethernet', 'USB', 'Escáner integrado', 'ADF 80 hojas', 'Full Duplex', 'Fax', 'Platina Oficio'],
    memoria: '2 GB RAM',
    procesador: '1,2 GHz',
    bandeja: '550 + 100 hojas',
    cicloMensual: '160.000 páginas',
    insumos: 'TN-3609XL (6.000) | TN-3609XXL (11.000) | TN-3619 (18.000) | TN-3619XL (25.000) | DR-3609 (75.000)'
  },

  // IMPRESORAS LÁSER COLOR
  {
    id: 16,
    nombre: 'BROTHER HL-L8360CDW',
    modelo: 'HL-L8360CDW',
    descripcion: 'Impresora Láser Color con Red/WiFi',
    slug: 'brother-hl-l8360-cdw',
    imagen: '/images/impresoras/BROTHER-HL-L8360CDW.jpg',
    tecnologia: 'Láser color',
    resolucion: '2400 x 600 DPI',
    velocidad: '33 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['WiFi', 'Red Ethernet', 'USB', 'Dúplex automático', 'Color'],
    memoria: '512 MB RAM',
    procesador: '800 MHz',
    bandeja: '250 hojas',
    cicloMensual: '60.000 páginas',
    insumos: 'TN419BK (9.000) | TN419C (9.000) | TN419M (9.000) | TN419Y (9.000) | DR-411CL (25.000)'
  },

  // MULTIFUNCIÓN LÁSER COLOR
  {
    id: 17,
    nombre: 'BROTHER MFC-L8900DW',
    modelo: 'MFC-L8900DW',
    descripcion: 'Multifuncional Láser Color con Red/WiFi Full Duplex + Fax',
    slug: 'brother-mfc-l8900-dw',
    imagen: '/images/impresoras/BROTHER-MFC-L8900-DW.jpg',
    tecnologia: 'Láser color multifuncional',
    resolucion: '2400 x 600 DPI',
    velocidad: '33 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['WiFi', 'Red Ethernet', 'USB', 'Escáner integrado', 'ADF', 'Full Duplex', 'Fax', 'Color', 'Platina Oficio'],
    memoria: '512 MB RAM',
    procesador: '800 MHz',
    bandeja: '250 hojas',
    cicloMensual: '60.000 páginas',
    insumos: 'TN419BK (9.000) | TN419C (9.000) | TN419M (9.000) | TN419Y (9.000) | DR-411CL (25.000)'
  },
  {
    id: 18,
    nombre: 'BROTHER MFC-L8360DW',
    modelo: 'MFC-L8360DW',
    descripcion: 'Multifuncional Láser Color con Red/WiFi',
    slug: 'brother-mfc-l8360-dw',
    imagen: '/images/impresoras/BROTHER-MFC-L8360-DW.jpg',
    tecnologia: 'Láser color multifuncional',
    resolucion: '2400 x 600 DPI',
    velocidad: '31 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['WiFi', 'Red Ethernet', 'USB', 'Escáner integrado', 'Color'],
    memoria: '512 MB RAM',
    procesador: '800 MHz',
    bandeja: '250 hojas',
    cicloMensual: '60.000 páginas',
    insumos: 'TN419BK (9.000) | TN419C (9.000) | TN419M (9.000) | TN419Y (9.000) | DR-411CL (25.000)'
  },

  // MULTIFUNCIÓN LED COLOR
  {
    id: 19,
    nombre: 'BROTHER Multifunción LED Color',
    modelo: 'LED Color',
    descripcion: 'Multifuncional LED Color con Red/WiFi 5GHz',
    slug: 'brother-led-color',
    imagen: '/images/impresoras/BROTHER-HL-L8360CDW.jpg',
    tecnologia: 'LED color multifuncional',
    resolucion: '2400 x 600 DPI',
    velocidad: '27 ppm',
    precio: 'Consultar precio',
    compatibilidad: ['WiFi 5GHz', 'Red Ethernet', 'USB', 'Escáner integrado', 'ADF', 'Color', 'Platina A4'],
    memoria: '512 MB RAM',
    procesador: '800 MHz',
    bandeja: '250 hojas',
    cicloMensual: '40.000 páginas',
    insumos: 'TN219XLBK (3.000) | TN219XLC (2.300) | TN219XLM (2.300) | TN219XLY (2.300) | DR-219CL (20.000)'
  },

  // MULTIFUNCIÓN INKJET (TINTA CONTINUA)
  {
    id: 20,
    nombre: 'BROTHER DCP-T220',
    modelo: 'DCP-T220',
    descripcion: 'Multifuncional Inkjet Tinta Continua',
    slug: 'brother-dcp-t220',
    imagen: '/images/impresoras/BROTHER-DCP-T220.png',
    tecnologia: 'Inkjet tinta continua',
    resolucion: '6000 x 1200 DPI',
    velocidad: '28 ppm Negro / 11 ppm Color',
    precio: 'Consultar precio',
    compatibilidad: ['USB', 'Escáner integrado', 'Color', 'Platina A4'],
    memoria: '64 MB RAM',
    bandeja: '150 hojas + MP 1 hoja',
    insumos: 'BTD60BK (7.500) | BT5001C (5.000) | BT5001M (5.000) | BT5001Y (5.000)'
  },
  {
    id: 21,
    nombre: 'BROTHER DCP-T420W',
    modelo: 'DCP-T420W',
    descripcion: 'Multifuncional Inkjet Tinta Continua con WiFi',
    slug: 'brother-dcp-t420w',
    imagen: '/images/impresoras/BROTHER-DCP-T420W.jpg',
    tecnologia: 'Inkjet tinta continua',
    resolucion: '6000 x 1200 DPI',
    velocidad: '28 ppm Negro / 11 ppm Color',
    precio: 'Consultar precio',
    compatibilidad: ['WiFi', 'USB', 'Escáner integrado', 'Color', 'Platina A4'],
    memoria: '64 MB RAM',
    bandeja: '150 hojas + MP 1 hoja',
    insumos: 'BTD60BK (7.500) | BT5001C (5.000) | BT5001M (5.000) | BT5001Y (5.000)'
  },
  {
    id: 22,
    nombre: 'BROTHER DCP-T720DW',
    modelo: 'DCP-T720DW',
    descripcion: 'Multifuncional Inkjet Tinta Continua con WiFi y Dúplex',
    slug: 'brother-dcp-t720dw',
    imagen: '/images/impresoras/BROTHER-DCP-T720DW.png',
    tecnologia: 'Inkjet tinta continua',
    resolucion: '6000 x 1200 DPI',
    velocidad: '30 ppm Negro / 26 ppm Color',
    precio: 'Consultar precio',
    compatibilidad: ['WiFi', 'USB', 'Escáner integrado', 'ADF', 'Dúplex automático', 'Color', 'Platina A4'],
    memoria: '128 MB RAM',
    bandeja: '150 hojas + MP 1 hoja',
    insumos: 'BTD60BK (7.500) | BT5001C (5.000) | BT5001M (5.000) | BT5001Y (5.000)'
  },
  {
    id: 23,
    nombre: 'BROTHER DCP-T820DW',
    modelo: 'DCP-T820DW',
    descripcion: 'Multifuncional Inkjet Tinta Continua con Red/WiFi y Dúplex',
    slug: 'brother-dcp-t820dw',
    imagen: '/images/impresoras/BROTHER-DCP-T820DW.jpg',
    tecnologia: 'Inkjet tinta continua',
    resolucion: '6000 x 1200 DPI',
    velocidad: '30 ppm Negro / 26 ppm Color',
    precio: 'Consultar precio',
    compatibilidad: ['WiFi', 'Red Ethernet', 'USB', 'Escáner integrado', 'ADF', 'Dúplex automático', 'Color', 'Platina A4'],
    memoria: '128 MB RAM',
    bandeja: '150 hojas + MP 80 hojas',
    insumos: 'BTD60BK (7.500) | BT5001C (5.000) | BT5001M (5.000) | BT5001Y (5.000)'
  },
  {
    id: 24,
    nombre: 'BROTHER MFC-T4500DW',
    modelo: 'MFC-T4500DW',
    descripcion: 'Multifuncional Inkjet Tinta Continua A3 con Red/WiFi y Fax',
    slug: 'brother-mfc-t4500dw',
    imagen: '/images/impresoras/BROTHER-MFC-T4500DW.png',
    tecnologia: 'Inkjet tinta continua A3',
    resolucion: '6000 x 1200 DPI',
    velocidad: '35 ppm Negro / 27 ppm Color',
    precio: 'Consultar precio',
    compatibilidad: ['WiFi', 'Red Ethernet', 'USB', 'Escáner integrado', 'Dúplex hasta A4', 'Fax', 'Color', 'Platina A3', 'Impresión A3'],
    memoria: '128 MB RAM',
    bandeja: '250 hojas + MP 100 hojas',
    insumos: 'BTD60BK (7.500) | BT5001C (5.000) | BT5001M (5.000) | BT5001Y (5.000)'
  },

  // MULTIFUNCIÓN INKJET (CARTUCHO)
  {
    id: 25,
    nombre: 'BROTHER MFC-J6955DW',
    modelo: 'MFC-J6955DW',
    descripcion: 'Multifuncional Inkjet A3 con Red/WiFi y Full Dúplex',
    slug: 'brother-mfc-j6955dw',
    imagen: '/images/impresoras/BROTHER-MFC-J6955DW.jpg',
    tecnologia: 'Inkjet cartucho A3',
    resolucion: '6000 x 1200 DPI',
    velocidad: '30 ppm Negro / 30 ppm Color',
    precio: 'Consultar precio',
    compatibilidad: ['WiFi', 'Red Ethernet', 'USB', 'Escáner integrado', 'Full Duplex A3', 'Fax', 'Color', 'Platina A3', 'Impresión A3'],
    memoria: '512 MB RAM',
    bandeja: '2x250 hojas + MP 100 hojas',
    insumos: 'LC406XL BK (6.000) | LC406XLC (5.000) | LC406XLM (5.000) | LC406XLY (5.000)'
  },

  // PLOTTER DE CORTE
  {
    id: 26,
    nombre: 'BROTHER ScanNCut SDX125',
    modelo: 'SDX125',
    descripcion: 'Plotter de corte con escáner incorporado para manualidades y diseño textil',
    slug: 'brother-scanncut-sdx125',
    imagen: '/images/impresoras/BROTHER-SCANNCUT-SDX125-3.png',
    imagenes: [
      '/images/impresoras/BROTHER-SCANNCUT-SDX125.png',
      '/images/impresoras/BROTHER-SCANNCUT-SDX125-2.png',
      '/images/impresoras/BROTHER-SCANNCUT-SDX125-3.png'
    ],
    tecnologia: 'Plotter de corte con escáner',
    resolucion: '600 DPI (escáner)',
    velocidad: 'Corte rápido y silencioso',
    precio: 'Consultar precio',
    compatibilidad: ['WiFi', 'Escáner incorporado 600 DPI', 'Pantalla táctil LCD 5"', 'Brother Canvas Web App', 'Independiente (sin PC)'],
    memoria: '682 patrones precargados',
    procesador: 'Pantalla táctil LCD a color 5"',
    bandeja: 'Área de corte 12" x 12" (con rollo hasta 30cm x 178cm)',
    cicloMensual: 'Grosor máximo de corte: hasta 3mm',
    insumos: 'Cuchilla automática incluida | Tapetes de corte 12" x 12" | Accesorios opcionales según material',
    especificaciones: {
      areaTrabajo: '12" x 12" estándar',
      areaMaxima: '30 cm x 178 cm (con alimentador de rollo)',
      grosorMaximo: 'Hasta 3 mm',
      materiales: 'Papel, cartulina, vinilo, vinil textil, acetato, goma eva, madera balsa, imán, tela algodón, silicón flexible',
      funciones: ['Corte', 'Dibujo', 'Escaneo', 'Realce (accesorio opcional)'],
      capacitacion: 'Curso gratuito incluido'
    }
  }
];

const ProductosImpresoras = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  // SEO variables
  const seoTitle = "Impresoras Brother | Láser, Inkjet, Multifunción";
  const seoDescription = "Amplia gama de impresoras Brother para oficina y hogar. Equipos láser, multifunción, tinta continua y más. Distribuidores oficiales con soporte técnico.";

  const filterCategories = {
    all: 'Todas las impresoras',
    'laser-mono': 'Láser Monocromática',
    'laser-color': 'Láser Color',
    'multifuncion-mono': 'Multifunción Monocromática',
    'multifuncion-color': 'Multifunción Color',
    'inkjet-continua': 'Inkjet Tinta Continua',
    'inkjet-cartucho': 'Inkjet Cartucho',
    'led-color': 'LED Color',
    'plotter-corte': 'ScanNCut Plotter de Corte'
  };

  const filteredImpresoras = todasImpresoras.filter(impresora => {
    if (selectedFilter === 'all') return true;
    
    if (selectedFilter === 'laser-mono') {
      return impresora.tecnologia.toLowerCase().includes('láser monocromática') && 
             !impresora.tecnologia.toLowerCase().includes('multifuncional');
    }
    
    if (selectedFilter === 'laser-color') {
      return impresora.tecnologia.toLowerCase().includes('láser color') && 
             !impresora.tecnologia.toLowerCase().includes('multifuncional');
    }
    
    if (selectedFilter === 'multifuncion-mono') {
      return impresora.tecnologia.toLowerCase().includes('láser monocromática multifuncional');
    }
    
    if (selectedFilter === 'multifuncion-color') {
      return impresora.tecnologia.toLowerCase().includes('láser color multifuncional');
    }
    
    if (selectedFilter === 'inkjet-continua') {
      return impresora.tecnologia.toLowerCase().includes('inkjet tinta continua');
    }
    
    if (selectedFilter === 'inkjet-cartucho') {
      return impresora.tecnologia.toLowerCase().includes('inkjet cartucho');
    }
    
    if (selectedFilter === 'led-color') {
      return impresora.tecnologia.toLowerCase().includes('led color');
    }
    
    if (selectedFilter === 'plotter-corte') {
      return impresora.tecnologia.toLowerCase().includes('plotter de corte');
    }
    
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title={seoTitle}
        description={seoDescription}
        keywords="impresoras, impresoras láser, impresoras multifunción, plotters, ScanNCut, Brother, impresoras tinta continua, impresoras para empresas, equipos de oficina, impresión"
        ogImage="/images/impresoras/portada.jpg"
        category="Impresoras"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": todasImpresoras.slice(0, 10).map((impresora, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "Product",
              "name": impresora.nombre,
              "description": impresora.descripcion,
              "image": `https://blackcolors.com.py${impresora.imagen}`,
              "brand": {
                "@type": "Brand",
                "name": "Brother"
              },
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "priceCurrency": "PYG",
                "price": "Consultar",
                "seller": {
                  "@type": "Organization",
                  "name": "Black Colors Eco Print"
                }
              }
            }
          }))
        }}
      />
      {/* Hero Section with integrated search */}
      <div className="relative">
        {/* Hero Background */}
        <div className="relative h-[500px] overflow-hidden">
          <img 
            src="/images/impresoras/portada.jpg" 
            alt="Impresoras Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-5xl font-bold mb-4">IMPRESORAS</h1>
            <p className="text-xl max-w-2xl text-center mb-12">
              Descubre nuestra línea completa de impresoras Brother para todas tus necesidades
            </p>
          </div>
        </div>

        {/* Floating Filter Card */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2 w-full px-4">
          <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold text-[#4e8759] text-center mb-6">Filtrar Impresoras</h2>
            
            {/* Categorías de tecnología */}
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
                <h3 className="text-lg font-bold text-[#4e8759] mb-2 group-hover:text-[#4b6d3b] transition-colors">
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

                  {/* Información adicional técnica */}
                  {(impresora.memoria || impresora.bandeja || impresora.cicloMensual) && (
                    <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded-lg">
                      {impresora.memoria && (
                        <div className="mb-1">
                          <span className="font-semibold">Memoria:</span> {impresora.memoria}
                        </div>
                      )}
                      {impresora.bandeja && (
                        <div className="mb-1">
                          <span className="font-semibold">Bandeja:</span> {impresora.bandeja}
                        </div>
                      )}
                      {impresora.cicloMensual && (
                        <div>
                          <span className="font-semibold">Ciclo:</span> {impresora.cicloMensual}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Price */}
                  <div className="mt-4">
                    <span className="text-lg font-bold text-[#4e8759]">{impresora.precio}</span>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {impresora.compatibilidad.slice(0, 3).map((comp, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs bg-[#e8f5e9] text-[#4e8759] px-3 py-1 rounded-full font-medium"
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
