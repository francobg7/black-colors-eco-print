import { Helmet } from 'react-helmet-async';

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
  // Product specific props
  product?: {
    name: string;
    image: string;
    description: string;
    sku?: string;
    brand?: string;
    price?: number;
    priceCurrency?: string;
    availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
    category?: string;
  };
  // Service specific props
  service?: {
    name: string;
    image?: string;
    description: string;
    provider?: string;
    serviceType?: string;
    areaServed?: string;
    price?: number;
    priceCurrency?: string;
  };
}

const SEO = ({
  title,
  description,
  canonicalUrl = 'https://blackcolors.com.py',
  ogType = 'website',
  ogImage = '/images/logos/logo-og.jpg',
  keywords = 'impresoras, toners, cartuchos, leasing sustentable, alquileres, servicio técnico',
  structuredData,
  alternateUrls,
  noIndex = false,
  category,
  lang = 'es-PY',
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

  // Organization schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Black Colors',
    url: siteUrl,
          logo: `${siteUrl}/images/logos/black_colors-negro_color.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+595-982-343-128',
      contactType: 'customer service',
      email: 'mkt@blackcolors.com.py',
      areaServed: 'PY',
      availableLanguage: ['Spanish', 'English']
    },
    sameAs: [
      'https://www.facebook.com/blackcolorssrl/',
      'https://www.instagram.com/blackcolorssrl/'
    ]
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
    }}),
    ...(product.price && { 
      offers: {
        '@type': 'Offer',
        price: product.price,
        priceCurrency: product.priceCurrency || 'PYG',
        availability: `https://schema.org/${product.availability || 'InStock'}`,
        url: currentUrl
      }
    })
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
    }),
    ...(service.price && {
      offers: {
        '@type': 'Offer',
        price: service.price,
        priceCurrency: service.priceCurrency || 'PYG',
      }
    })
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
        {JSON.stringify(organizationSchema)}
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
