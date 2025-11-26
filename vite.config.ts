import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,jpg,jpeg}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'google-fonts',
            }
          },
          {
            urlPattern: /\.(png|jpg|jpeg|svg|webp)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 días
              }
            }
          }
        ]
      },
      manifest: {
        name: "Black Colors - Cartuchos Remanufacturados y Tintas Ecológicas",
        short_name: "Black Colors",
        description: "Cartuchos remanufacturados, impresoras Brother, toners y papel sustentable en Paraguay. Soluciones ecológicas de impresión con leasing y mantenimiento.",
        theme_color: "#2d472f",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        scope: "/",
        lang: "es-PY",
        categories: ["business", "productivity", "shopping"],
        icons: [
          {
            src: "/favicon-16x16.png",
            sizes: "16x16",
            type: "image/png"
          },
          {
            src: "/favicon-32x32.png", 
            sizes: "32x32",
            type: "image/png"
          },
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192", 
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png"
          }
        ],
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'robots.txt'],
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: ["lucide-react"],
          router: ["react-router-dom"],
        },
      },
    },
    assetsDir: "assets",
    copyPublicDir: true,
    cssCodeSplit: true,
    sourcemap: mode === 'development',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production'
      }
    }
  },
  publicDir: "public",
}));
