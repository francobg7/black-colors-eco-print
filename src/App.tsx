
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";

import ProductosImpresoras from "./pages/ProductosImpresoras";
import ProductosCartuchos from "./pages/ProductosCartuchos";
import ProductosResmas from "./pages/ProductosResmas";
import Leasing from "./pages/Leasing";
import Transformar from "./pages/Transformar";
import Eventos from "./pages/Eventos";
import Contacto from "./pages/Contacto";
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
            <Route path="/productos/cartuchos" element={<ProductosCartuchos />} />
            <Route path="/productos/resmas" element={<ProductosResmas />} />
            <Route path="/leasing" element={<Leasing />} />
            <Route path="/transformar" element={<Transformar />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/contacto" element={<Contacto />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
