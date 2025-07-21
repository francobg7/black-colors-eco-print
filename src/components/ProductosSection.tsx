import React from 'react';
import { Printer, Package, FileText } from 'lucide-react';

const productos = [
  {
    icon: <Printer className="w-12 h-12 text-green-200" />, 
    titulo: "Impresoras",
    descripcion: "Principalmente de marca Brother, disponibles para venta y leasing con mantenimiento incluido."
  },
  {
    icon: <Package className="w-12 h-12 text-green-200" />, 
    titulo: "Cartuchos y Toners",
    descripcion: "Originales, genéricos y XL para las principales marcas del mercado."
  },
  {
    icon: <FileText className="w-12 h-12 text-green-200" />, 
    titulo: "Resmas Sustentables",
    descripcion: "Papel marca Nat con certificación de origen responsable y trazabilidad ambiental."
  }
];

const ProductosSection = () => (
  <section className="py-10 md:py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #2f9e44 0%, #0f3d2e 100%)' }}>
    <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
      <div className="grid lg:grid-cols-5 gap-8 items-center">
        <div className="lg:col-span-3 relative">
          <div className="absolute inset-0 rounded-3xl blur-2xl" style={{ background: 'linear-gradient(135deg, rgba(195,232,164,0.2), rgba(47,158,68,0.2))' }}></div>
          <img 
            src="/images/productos.png" 
            alt="Productos Black Colors - Impresora Brother y papel sustentable NAT"
            className="w-full h-48 sm:h-72 md:h-96 lg:h-[600px] object-cover rounded-3xl shadow-2xl relative z-10"
          />
        </div>
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl sm:text-4xl lg:text-4xl font-bold mb-12 text-center lg:text-left" style={{ color: '#d7f2db' }}>
            Nuestros Productos
          </h2>
          <div className="space-y-6">
            {productos.map((producto, index) => (
              <div 
                key={index}
                className={`backdrop-blur-sm p-6 rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group ${index === 1 ? 'ml-0 md:ml-8' : index === 2 ? 'ml-0 md:ml-16' : ''}`}
                style={{ 
                  background: `linear-gradient(135deg, rgba(61,123,79,0.8), rgba(47,158,68,0.8))`,
                  transform: `translateX(${index * 20}px)` 
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-4 rounded-xl group-hover:bg-green-400/40 transition-colors" style={{ background: 'rgba(47,158,68,0.3)' }}>
                    {producto.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-green-200 transition-colors" style={{ color: '#d7f2db' }}>
                      {producto.titulo}
                    </h3>
                    <p className="leading-relaxed" style={{ color: '#c3e8a4' }}>
                      {producto.descripcion}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProductosSection; 