import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import WhatsAppButton from "./components/WhatsAppButton";
import PageTransition from "./components/PageTransition";
import Index from "./pages/Index";

// Importaciones de productos
import ProductosImpresoras from "./pages/productos/impresoras/index";
import DetalleImpresora from "./pages/productos/impresoras/[slug]";
import ProductosCartuchos from "./pages/productos/cartuchos/index";
import ProductosToners from "./pages/productos/toners/index";
import ProductosResmas from "./pages/productos/resmas/index";
import ProductosEquipos from "./pages/productos/equipos/index";
import DetalleEquipo from "./pages/productos/equipos/[slug]";

// Importaciones de servicios
import Leasing from "./pages/servicios/leasing/index";
import Alquileres from "./pages/servicios/alquileres/index";
import ServiciosDiferenciados from "./pages/servicios/diferenciados/index";
import ServicioTecnico from "./pages/servicios/tecnico/index";

// Otras páginas
import Transformar from "./pages/transformar/index";
import Eventos from "./pages/eventos/index";
import Contacto from "./pages/contacto/index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<PageTransition><Index /></PageTransition>} />
            <Route path="/productos/impresoras" element={<PageTransition><ProductosImpresoras /></PageTransition>} />
            <Route path="/productos/impresoras/:slug" element={<PageTransition><DetalleImpresora /></PageTransition>} />
            <Route path="/productos/toners" element={<PageTransition><ProductosToners /></PageTransition>} />
            <Route path="/productos/cartuchos" element={<PageTransition><ProductosCartuchos /></PageTransition>} />
            <Route path="/productos/resmas" element={<PageTransition><ProductosResmas /></PageTransition>} />
            <Route path="/productos/equipos" element={<PageTransition><ProductosEquipos /></PageTransition>} />
            <Route path="/productos/equipos/:slug" element={<PageTransition><DetalleEquipo /></PageTransition>} />
            <Route path="/servicios/tecnico" element={<PageTransition><ServicioTecnico /></PageTransition>} />
            <Route path="/servicios/leasing" element={<PageTransition><Leasing /></PageTransition>} />
            <Route path="/servicios/alquileres" element={<PageTransition><Alquileres /></PageTransition>} />
            <Route path="/servicios/diferenciados" element={<PageTransition><ServiciosDiferenciados /></PageTransition>} />
            <Route path="/transformar" element={<PageTransition><Transformar /></PageTransition>} />
            <Route path="/eventos" element={<PageTransition><Eventos /></PageTransition>} />
            <Route path="/contacto" element={<PageTransition><Contacto /></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </div>
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
