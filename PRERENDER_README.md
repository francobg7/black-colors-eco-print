# Pre-rendering Setup for SEO

This project now includes automated pre-rendering to improve SEO and Google indexing for your Vite + React SPA.

## How it Works

1. **Build Process**: When you run `npm run build`, the system:
   - Generates the sitemap
   - Builds your React app
   - Starts a local preview server
   - Uses Puppeteer to visit each route
   - Captures the fully rendered HTML
   - Saves static HTML files for each route

2. **Routes Pre-rendered**:
   - `/` (Homepage)
   - `/productos/impresoras`
   - `/productos/toners` 
   - `/productos/cartuchos`
   - `/productos/resmas`
   - `/productos/equipos`
   - `/servicios/tecnico`
   - `/servicios/leasing`
   - `/servicios/alquileres`
   - `/servicios/diferenciados`
   - `/transformar`
   - `/eventos`
   - `/contacto`

## Scripts Available

- `npm run build` - Full build with pre-rendering (production)
- `npm run build:only` - Build without pre-rendering 
- `npm run build:legacy` - Legacy build command (same as build:only)
- `npm run prerender` - Run pre-rendering only (requires existing build and preview server)

## Benefits for SEO

✅ **Google can see your content**: Static HTML is served immediately
✅ **Faster loading**: Pre-rendered pages load instantly
✅ **Better Core Web Vitals**: Improved performance metrics
✅ **Meta tags visible**: SEO tags are in the HTML source
✅ **Social media sharing**: Open Graph tags work correctly

## Important Notes

- **Dynamic routes** (like `/productos/impresoras/:slug`) are NOT pre-rendered automatically
- Pre-rendering only happens during build, not development
- The process takes longer but improves SEO significantly
- All your existing functionality remains unchanged

## Adding New Routes

To add a new static route for pre-rendering:

1. Edit `scripts/prerender.js`
2. Add your route to the `routes` array
3. Run `npm run build` to regenerate

## Troubleshooting

If pre-rendering fails:
1. Check that all your routes load without errors in development
2. Ensure your components handle SSR-like conditions (no `window` access during initial render)
3. Check the console output for specific error messages

## File Structure

```
scripts/
├── prerender.js          # Core pre-rendering logic
├── build-with-prerender.js  # Build orchestration
└── generate-sitemap.js   # Existing sitemap generation
```

This setup maintains your existing development workflow while dramatically improving SEO performance.
