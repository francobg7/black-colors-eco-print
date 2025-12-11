import { Helmet } from 'react-helmet-async';

interface FAQItem {
  question: string;
  answer: string;
}

interface LocalBusinessInfo {
  name?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  geo?: {
    latitude?: number;
    longitude?: number;
  };
  openingHours?: string[];
  priceRange?: string;
  paymentAccepted?: string[];
  currenciesAccepted?: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  keywords?: string;
  structuredData?: Record<string, any>; // For JSON-LD structured data
  alternateUrls?: { hrefLang: string; href: string }[]; // For internationalization
  noIndex?: boolean; // For pages we don't want indexed
  category?: string; // For categorizing content
  lang?: string; // For specifying page language
  includeNavigation?: boolean; // Whether to include site navigation schema
  navigationContext?: 'home' | 'productos' | 'servicios' | 'page'; // Context for navigation
  faqItems?: FAQItem[]; // FAQ schema data
  localBusiness?: LocalBusinessInfo; // Enhanced local business data
  // Product specific props (without pricing - for catalog only)
  product?: {
    name: string;
    image: string;
    description: string;
    sku?: string;
    brand?: string;
    category?: string;
  };
  // Service specific props (without pricing - for catalog only)
  service?: {
    name: string;
    image?: string;
    description: string;
    provider?: string;
    serviceType?: string;
    areaServed?: string;
  };
}

const SEO = ({
  title,
  description,
  canonicalUrl = 'https://blackcolors.com.py',
  ogType = 'website',
  ogImage = '/images/logos/logo-og.jpg',
  keywords = 'cartuchos, toners reciclables Paraguay, impresoras Brother, toners, papel sustentable, leasing impresoras, servicio técnico Asunción, tintas ecológicas, papel NAT',
  structuredData,
  alternateUrls,
  noIndex = false,
  category,
  lang = 'es-PY',
  includeNavigation = false,
  navigationContext = 'page',
  faqItems,
  localBusiness,
  product,
  service,
}: SEOProps) => {
  const siteUrl = canonicalUrl.endsWith('/') 
    ? canonicalUrl.slice(0, -1) 
    : canonicalUrl;

  // Asegurarnos que la URL canónica sea consistente y no tenga trailing slashes
  let currentUrl = '';
  
  if (typeof window !== 'undefined') {
    // Eliminar trailing slash si existe (excepto para la página principal)
    const path = window.location.pathname === '/' 
      ? '/' 
      : window.location.pathname.replace(/\/$/, '');
    currentUrl = `${siteUrl}${path}`;
  } else {
    currentUrl = siteUrl;
  }

  // Generate JSON-LD structured data for the website
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Black Colors',
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/busqueda?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };

  // Enhanced Local Business schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}#business`,
    name: localBusiness?.name || 'Black Colors',
    alternateName: 'Black Colors SRL',
    description: 'Distribuidor oficial de impresoras Brother, toners ecológicos, cartuchos remanufacturados y servicios de impresión sustentable en Paraguay',
    url: siteUrl,
    logo: `${siteUrl}/images/logos/black_colors-negro_color.png`,
    image: [
      `${siteUrl}/images/logos/black_colors-negro_color.png`,
      `${siteUrl}/images/nosotros-section.webp`,
      `${siteUrl}/images/hero-impresoras.png`
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: localBusiness?.address?.streetAddress || 'Zona Centro',
      addressLocality: localBusiness?.address?.addressLocality || 'Asunción',
      addressRegion: localBusiness?.address?.addressRegion || 'Central',
      addressCountry: localBusiness?.address?.addressCountry || 'PY'
    },
    geo: localBusiness?.geo ? {
      '@type': 'GeoCoordinates',
      latitude: localBusiness.geo.latitude,
      longitude: localBusiness.geo.longitude
    } : undefined,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+595-982-343-128',
        contactType: 'customer service',
        email: 'mkt@blackcolors.com.py',
        areaServed: 'PY',
        availableLanguage: ['Spanish', 'English'],
        contactOption: 'TollFree'
      },
      {
        '@type': 'ContactPoint',
        telephone: '+595-986-759-882',
        contactType: 'sales',
        areaServed: 'PY',
        availableLanguage: ['Spanish'],
        serviceArea: {
          '@type': 'AdministrativeArea',
          name: 'Paraguay'
        }
      }
    ],
    openingHoursSpecification: localBusiness?.openingHours ? localBusiness.openingHours.map(hours => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours
    })) : [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '13:00'
      }
    ],
    priceRange: localBusiness?.priceRange || '$$',
    paymentAccepted: localBusiness?.paymentAccepted || ['Cash', 'Credit Card', 'Bank Transfer', 'Check'],
    currenciesAccepted: localBusiness?.currenciesAccepted || 'PYG,USD',
    serviceArea: {
      '@type': 'AdministrativeArea',
      name: 'Paraguay'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Catálogo de Productos y Servicios Black Colors',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Impresoras Brother',
            category: 'Impresoras'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Toners Ecológicos',
            category: 'Consumibles'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Alquiler de Impresoras',
            category: 'Servicios'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Leasing Sustentable',
            category: 'Servicios'
          }
        }
      ]
    },
    keywords: 'alquiler de impresoras, tintas ecológicas, toners ecológicos, equipos de impresión, impresión ecológica, black colors, blackcolors, sustentabilidad impresora, Brother Paraguay, cartuchos remanufacturados',
    sameAs: [
      'https://www.facebook.com/blackcolorssrl/',
      'https://www.instagram.com/blackcolorssrl/'
    ],
    foundingDate: '2010',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: 15
    },
    slogan: 'Soluciones Integrales de Impresión Sustentable'
  };

  // Product schema (if product data is provided)
  const productSchema = product ? {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.image.startsWith('http') ? product.image : `${siteUrl}${product.image}`,
    description: product.description,
    ...(product.sku && { sku: product.sku }),
    ...(product.brand && { brand: {
      '@type': 'Brand',
      name: product.brand
    }})
  } : null;

  // Service schema (if service data is provided)
  const serviceSchema = service ? {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: service.provider || 'Black Colors',
      url: siteUrl
    },
    ...(service.serviceType && { serviceType: service.serviceType }),
    ...(service.areaServed && { areaServed: service.areaServed }),
    ...(service.image && { 
      image: service.image.startsWith('http') ? service.image : `${siteUrl}${service.image}` 
    })
  } : null;

  // Site Navigation schema (if navigation is included)
  const navigationSchema = includeNavigation ? {
    '@context': 'https://schema.org',
    '@type': 'SiteNavigationElement',
    name: 'Navegación Principal Black Colors',
    url: siteUrl,
    hasPart: [
      {
        '@type': 'SiteNavigationElement',
        name: 'Inicio',
        url: siteUrl,
        description: 'Página principal de Black Colors - Soluciones integrales de impresión sustentable'
      },
      {
        '@type': 'SiteNavigationElement',
        name: 'Productos',
        url: `${siteUrl}/productos`,
        description: 'Catálogo completo de productos de impresión',
        hasPart: [
          {
            '@type': 'SiteNavigationElement',
            name: 'Impresoras',
            url: `${siteUrl}/productos/impresoras`,
            description: 'Impresoras láser, inkjet y multifuncionales para oficina y empresa'
          },
          {
            '@type': 'SiteNavigationElement',
            name: 'Toners',
            url: `${siteUrl}/productos/toners`,
            description: 'Toners originales y compatibles para todas las marcas de impresoras'
          },
          {
            '@type': 'SiteNavigationElement',
            name: 'Equipos',
            url: `${siteUrl}/productos/equipos`,
            description: 'Equipos de oficina: scanners, destructoras, etiquetadoras y UPS'
          },
          {
            '@type': 'SiteNavigationElement',
            name: 'Cartuchos',
            url: `${siteUrl}/productos/cartuchos`,
            description: 'Cartuchos de tinta originales y remanufacturados'
          },
          {
            '@type': 'SiteNavigationElement',
            name: 'Resmas Sustentables',
            url: `${siteUrl}/productos/resmas`,
            description: 'Papel ecológico y sustentable para oficina'
          }
        ]
      },
      {
        '@type': 'SiteNavigationElement',
        name: 'Servicios',
        url: `${siteUrl}/servicios`,
        description: 'Servicios profesionales de impresión y tecnología',
        hasPart: [
          {
            '@type': 'SiteNavigationElement',
            name: 'Alquileres',
            url: `${siteUrl}/servicios/alquileres`,
            description: 'Alquiler de impresoras y equipos de oficina'
          },
          {
            '@type': 'SiteNavigationElement',
            name: 'Leasing Sustentable',
            url: `${siteUrl}/servicios/leasing`,
            description: 'Financiamiento y leasing de equipos con enfoque sustentable'
          },
          {
            '@type': 'SiteNavigationElement',
            name: 'Servicio Técnico',
            url: `${siteUrl}/servicios/tecnico`,
            description: 'Reparación y mantenimiento especializado de impresoras y equipos'
          },
          {
            '@type': 'SiteNavigationElement',
            name: 'Servicios Diferenciados',
            url: `${siteUrl}/servicios/diferenciados`,
            description: 'Servicios personalizados y soluciones integrales'
          }
        ]
      },
      {
        '@type': 'SiteNavigationElement',
        name: 'Proyecto Transformar',
        url: `${siteUrl}/transformar`,
        description: 'Iniciativa de impresión sustentable y responsabilidad ambiental'
      },
      {
        '@type': 'SiteNavigationElement',
        name: 'Eventos',
        url: `${siteUrl}/eventos`,
        description: 'Eventos, ferias y actividades de Black Colors'
      },
      {
        '@type': 'SiteNavigationElement',
        name: 'Contacto',
        url: `${siteUrl}/contacto`,
        description: 'Información de contacto y ubicación'
      }
    ]
  } : null;

  // FAQ schema (if FAQ items are provided)
  const faqSchema = faqItems && faqItems.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  } : null;

  return (
    <Helmet>
      {/* Metadatos básicos */}
      <html lang={lang} />
      <title>{title} | Black Colors</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {category && <meta name="category" content={category} />}
      
      {/* Robots directives */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      
      {/* Enlaces canónicos */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Alternate language URLs */}
      {alternateUrls?.map(({ hrefLang, href }) => (
        <link key={hrefLang} rel="alternate" hrefLang={hrefLang} href={href} />
      ))}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={`${title} | Black Colors`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="Black Colors" />
      <meta property="og:locale" content="es_PY" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={`${title} | Black Colors`} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Mobile Specific */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Structured Data - JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      
      {/* Product Schema (if applicable) */}
      {productSchema && (
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      )}
      
      {/* Service Schema (if applicable) */}
      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      )}
      
      {/* Site Navigation Schema (if applicable) */}
      {navigationSchema && (
        <script type="application/ld+json">
          {JSON.stringify(navigationSchema)}
        </script>
      )}
      
      {/* FAQ Schema (if applicable) */}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
      
      {/* Custom structured data (if provided) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
