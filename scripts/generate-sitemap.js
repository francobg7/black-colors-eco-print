import fs from 'fs';
import path from 'path';

const domain = 'https://blackcolors.com.py'; // Cambiar al dominio real
const currentDate = new Date().toISOString().split('T')[0]; // Current date for lastmod

// Estructura con todas las categorías y subcategorías
const routes = [
  // Página principal
  { path: '/', priority: '1.0', changefreq: 'weekly', lastmod: currentDate },
  
  // Productos - Categoría principal y subcategorías
  { path: '/productos/impresoras', priority: '0.9', changefreq: 'weekly', lastmod: currentDate },
  { path: '/productos/toners', priority: '0.9', changefreq: 'weekly', lastmod: currentDate },
  { path: '/productos/cartuchos', priority: '0.9', changefreq: 'weekly', lastmod: currentDate },
  { path: '/productos/resmas', priority: '0.8', changefreq: 'weekly', lastmod: currentDate },
  { path: '/productos/equipos', priority: '0.9', changefreq: 'weekly', lastmod: currentDate },
  
  // Servicios - Categoría principal y subcategorías
  { path: '/servicios/leasing', priority: '0.9', changefreq: 'weekly', lastmod: currentDate },
  { path: '/servicios/alquileres', priority: '0.9', changefreq: 'weekly', lastmod: currentDate },
  { path: '/servicios/tecnico', priority: '0.8', changefreq: 'weekly', lastmod: currentDate },
  { path: '/servicios/diferenciados', priority: '0.8', changefreq: 'weekly', lastmod: currentDate },
  
  // Otras páginas importantes
  { path: '/transformar', priority: '0.8', changefreq: 'monthly', lastmod: currentDate },
  { path: '/eventos', priority: '0.7', changefreq: 'weekly', lastmod: currentDate },
  { path: '/contacto', priority: '0.9', changefreq: 'monthly', lastmod: currentDate },
];

function generateSitemap() {
  // Asegurarse de que las URLs en el sitemap sean consistentes
  // y no tengan trailing slash (excepto la homepage)
  const formattedRoutes = routes.map(route => {
    // Conservar trailing slash solo para homepage
    const formattedPath = route.path === '/' ? route.path : route.path.replace(/\/$/, '');
    return {
      ...route,
      formattedPath
    };
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${formattedRoutes.map(route => `  <url>
    <loc>${domain}${route.formattedPath}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully');
}

// Generate the sitemap file
generateSitemap();

// Also generate a robots.txt file with improved directives
function generateRobotsTxt() {
  const robotsTxt = `# ======================================================
# Robots.txt para https://blackcolors.com.py
# Optimizado para Vercel + Vite SPA
# ======================================================

User-agent: *
# Permitir acceso normal a las páginas legítimas
Allow: /

# Bloquear rutas falsas o extensiones usadas por bots
Disallow: /*.htm$
Disallow: /*.html$
Disallow: /*.php$
Disallow: /*.asp$
Disallow: /*.aspx$
Disallow: /*?
Disallow: /*cgi-bin/
Disallow: /*tmp/
Disallow: /*admin/
Disallow: /404
Disallow: /error

# Bloquear bots de scraping o spam
User-agent: MJ12bot
Disallow: /
User-agent: AhrefsBot
Disallow: /
User-agent: DotBot
Disallow: /
User-agent: BLEXBot
Disallow: /

# Sitemap oficial
Sitemap: ${domain}/sitemap.xml
`;

  fs.writeFileSync(path.join(process.cwd(), 'public', 'robots.txt'), robotsTxt);
  console.log('robots.txt generated successfully');
}

generateRobotsTxt();
