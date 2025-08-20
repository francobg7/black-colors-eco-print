import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import WhatsAppButton from "./components/WhatsAppButton";
import Index from "./pages/Index";

// Importaciones de productos
import ProductosImpresoras from "./pages/productos/impresoras/index";
import DetalleImpresora from "./pages/productos/impresoras/[slug]";
import ProductosCartuchos from "./pages/productos/cartuchos/index";
import ProductosToners from "./pages/productos/toners/index";
import ProductosResmas from "./pages/productos/resmas/index";

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
        <div>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/productos/impresoras" element={<ProductosImpresoras />} />
            <Route path="/productos/impresoras/:slug" element={<DetalleImpresora />} />
            <Route path="/productos/toners" element={<ProductosToners />} />
            <Route path="/productos/cartuchos" element={<ProductosCartuchos />} />
            <Route path="/productos/resmas" element={<ProductosResmas />} />
            <Route path="/servicios/tecnico" element={<ServicioTecnico />} />
            <Route path="/servicios/leasing" element={<Leasing />} />
            <Route path="/servicios/alquileres" element={<Alquileres />} />
            <Route path="/servicios/diferenciados" element={<ServiciosDiferenciados />} />
            <Route path="/transformar" element={<Transformar />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
