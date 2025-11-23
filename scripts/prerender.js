import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Routes to pre-render (static routes only)
const routes = [
  '/',
  '/productos/impresoras',
  '/productos/toners',
  '/productos/cartuchos',
  '/productos/resmas',
  '/productos/equipos',
  '/servicios/tecnico',
  '/servicios/leasing',
  '/servicios/alquileres',
  '/servicios/diferenciados',
  '/transformar',
  '/eventos',
  '/contacto'
];

const distDir = path.resolve(__dirname, '../dist');
const baseUrl = 'http://localhost:4173'; // Vite preview server

async function prerender() {
  console.log('🚀 Starting pre-rendering process...');
  
  // Launch browser
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Set viewport and user agent
    await page.setViewport({ width: 1200, height: 800 });
    await page.setUserAgent('Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)');

    for (const route of routes) {
      try {
        console.log(`📄 Pre-rendering: ${route}`);
        
        // Navigate to the route
        await page.goto(`${baseUrl}${route}`, {
          waitUntil: 'networkidle0',
          timeout: 30000
        });

        // Wait for React to render
        await page.waitForFunction(
          () => document.querySelector('#root')?.children.length > 0,
          { timeout: 10000 }
        );

        // Get the rendered HTML
        const html = await page.content();
        
        // Create directory structure
        const routePath = route === '/' ? '/index.html' : route + '/index.html';
        const filePath = path.join(distDir, routePath);
        const dirPath = path.dirname(filePath);
        
        // Create directory if it doesn't exist
        if (!fs.existsSync(dirPath)) {
          fs.mkdirSync(dirPath, { recursive: true });
        }

        // Clean up the HTML (remove Puppeteer-specific elements)
        const cleanedHtml = html
          .replace(/<script[^>]*puppeteer[^>]*>.*?<\/script>/gi, '')
          .replace(/data-puppeteer[^=]*="[^"]*"/gi, '');

        // Write the HTML file
        fs.writeFileSync(filePath, cleanedHtml);
        console.log(`✅ Generated: ${filePath}`);
        
      } catch (error) {
        console.error(`❌ Error pre-rendering ${route}:`, error.message);
      }
    }

  } catch (error) {
    console.error('❌ Pre-rendering failed:', error);
  } finally {
    await browser.close();
    console.log('🏁 Pre-rendering completed!');
  }
}

// Handle graceful shutdown
process.on('SIGINT', async () => {
  console.log('⏹️  Pre-rendering interrupted');
  process.exit(0);
});

process.on('unhandledRejection', (error) => {
  console.error('❌ Unhandled rejection:', error);
  process.exit(1);
});

export default prerender;

// Run if this file is executed directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  prerender().catch(console.error);
}
