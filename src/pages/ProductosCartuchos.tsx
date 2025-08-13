
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Package, Zap, Shield } from 'lucide-react';
import Footer from '@/components/Footer';

// Datos de cartuchos Top Sales
const topSalesCartuchos = [
  {
    id: 1,
    nombre: 'Cartucho 122 XXL Color Importado',
    tecnologia: 'Cartucho de tinta importado',
    compatibilidad: 'Impresoras HP 122',
    rendimiento: 'Alto rendimiento XXL',
    precio: '150.000 Gs',
    caracteristicas: ['Alta calidad', 'Rendimiento XXL', 'Color vibrante'],
    destacado: 'Más vendido del año',
    posicion: 'grande-izquierda'
  },
  {
    id: 2,
    nombre: 'Cartucho 60XXL Color Importado',
    tecnologia: 'Cartucho de tinta importado',
    compatibilidad: 'Impresoras HP 60',
    rendimiento: 'Alto rendimiento XXL',
    precio: '160.000 Gs',
    caracteristicas: ['Alta durabilidad', 'Impresión nítida'],
    destacado: 'Todo en uno más popular',
    posicion: 'pequena-derecha-superior'
  },
  {
    id: 3,
    nombre: 'Cartucho 667 XXL Importado Color',
    tecnologia: 'Cartucho de tinta importado',
    compatibilidad: 'Impresoras HP 667',
    rendimiento: 'Alto rendimiento XXL',
    precio: '160.000 Gs',
    caracteristicas: ['Eficiencia energética', 'Bajo consumo'],
    destacado: 'Alta eficiencia',
    posicion: 'pequena-derecha-inferior'
  }
];

// Datos de todos los cartuchos
const todosCartuchos = [
  {
    id: 1,
    nombre: 'Cartucho 122 XXL Color Importado',
    imagen: '/images/cartuchos/1.jpg',
    tecnologia: 'Cartucho de tinta importado',
    compatibilidad: 'Impresoras HP 122',
    rendimiento: 'Alto rendimiento XXL',
    precio: '150.000 Gs',
    caracteristicas: ['Alta calidad', 'Rendimiento XXL', 'Color vibrante']
  },
  {
    id: 2,
    nombre: 'Cartucho 122XXL Negro Importado',
    imagen: '/images/cartuchos/2.jpg',
    tecnologia: 'Cartucho de tinta importado',
    compatibilidad: 'Impresoras HP 122',
    rendimiento: 'Alto rendimiento XXL',
    precio: '150.000 Gs',
    caracteristicas: ['Alta calidad', 'Rendimiento XXL', 'Negro intenso']
  },
  {
    id: 3,
    nombre: 'Cartucho 21 XXL Negro Importado',
    imagen: '/images/cartuchos/3.jpg',
    tecnologia: 'Cartucho de tinta importado',
    compatibilidad: 'Impresoras HP 21',
    rendimiento: 'Alto rendimiento XXL',
    precio: '150.000 Gs',
    caracteristicas: ['Alta calidad', 'Rendimiento XXL', 'Negro profesional']
  },
  {
    id: 4,
    nombre: 'Cartucho 22 XXL color importado',
    imagen: '/images/cartuchos/4.jpg',
    tecnologia: 'Cartucho de tinta importado',
    compatibilidad: 'Impresoras HP 22',
    rendimiento: 'Alto rendimiento XXL',
    precio: '160.000 Gs',
    caracteristicas: ['Alto rendimiento', 'Color profesional']
  },
  {
    id: 5,
    nombre: 'Cartucho 60XXL Color Importado',
    imagen: '/images/cartuchos/5.jpg',
    tecnologia: 'Cartucho de tinta importado',
    compatibilidad: 'Impresoras HP 60',
    rendimiento: 'Alto rendimiento XXL',
    precio: '160.000 Gs',
    caracteristicas: ['Durabilidad extrema', 'Impresión consistente']
  },
  {
    id: 6,
    nombre: 'Cartucho 60XXL Negro Importado',
    imagen: '/images/cartuchos/6.jpg',
    tecnologia: 'Cartucho de tinta importado',
    compatibilidad: 'Impresoras HP 60',
    rendimiento: 'Alto rendimiento XXL',
    precio: '150.000 Gs',
    caracteristicas: ['Eficiencia', 'Bajo costo por página']
  },
  {
    id: 7,
    nombre: 'Cartucho 61XXL Color Importado',
    imagen: '/images/cartuchos/7.jpg',
    tecnologia: 'Cartucho de tinta importado',
    compatibilidad: 'Impresoras HP 61',
    rendimiento: 'Alto rendimiento XXL',
    precio: '150.000 Gs',
    caracteristicas: ['Alta calidad', 'Rendimiento garantizado']
  },
  {
    id: 8,
    nombre: 'Cartucho 61 XXL Negro Importado',
    imagen: '/images/cartuchos/8.jpg',
    tecnologia: 'Cartucho de tinta importado',
    compatibilidad: 'Impresoras HP 61',
    rendimiento: 'Alto rendimiento XXL',
    precio: '130.000 Gs',
    caracteristicas: ['Durabilidad', 'Impresión profesional']
  },
  {
    id: 9,
    nombre: 'Cartucho 662XXL Color Importado',
    imagen: '/images/cartuchos/9.jpg',
    tecnologia: 'Cartucho de tinta importado',
    compatibilidad: 'Impresoras HP 662',
    rendimiento: 'Alto rendimiento XXL',
    precio: '150.000 Gs',
    caracteristicas: ['Eficiencia energética', 'Bajo consumo']
  },
  {
    id: 10,
    nombre: 'Cartucho 662XXL Negro Importado',
    imagen: '/images/cartuchos/10.jpg',
    tecnologia: 'Cartucho de tinta importado',
    compatibilidad: 'Impresoras HP 662',
    rendimiento: 'Alto rendimiento XXL',
    precio: '145.000 Gs',
    caracteristicas: ['Alta calidad', 'Rendimiento garantizado']
  },
  {
    id: 11,
    nombre: 'Cartucho 664XXL Color New Version Importado',
    imagen: '/images/cartuchos/11.jpg',
    tecnologia: 'Cartucho de tinta importado',
    compatibilidad: 'Impresoras HP 664',
    rendimiento: 'Alto rendimiento XXL',
    precio: '150.000 Gs',
    caracteristicas: ['Durabilidad extrema', 'Impresión consistente']
  },
  {
    id: 12,
    nombre: 'Cartucho 664XXL Negro New Version Importado',
    imagen: '/images/cartuchos/12.jpg',
    tecnologia: 'Cartucho de tinta importado',
    compatibilidad: 'Impresoras HP 664',
    rendimiento: 'Alto rendimiento XXL',
    precio: '150.000 Gs',
    caracteristicas: ['Eficiencia', 'Bajo costo por página']
  },
  {
    id: 13,
    nombre: 'Cartucho 667 XXL Importado Color',
    imagen: '/images/cartuchos/13.jpg',
    tecnologia: 'Cartucho de tinta importado',
    compatibilidad: 'Impresoras HP 667',
    rendimiento: 'Alto rendimiento XXL',
    precio: '160.000 Gs',
    caracteristicas: ['Alta calidad', 'Rendimiento garantizado']
  },
  {
    id: 14,
    nombre: 'Cartucho 667 XXL Importado Negro',
    imagen: '/images/cartuchos/14.jpg',
    tecnologia: 'Cartucho de tinta importado',
    compatibilidad: 'Impresoras HP 667',
    rendimiento: 'Alto rendimiento XXL',
    precio: '160.000 Gs',
    caracteristicas: ['Eficiencia energética', 'Bajo consumo']
  }
];

const ProductosCartuchos = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        {/* Navegación */}
        <div className="mb-8">
          <Link 
            to="/productos" 
            className="inline-flex items-center space-x-2 text-[#2d472f] hover:text-[#4b6d3b] transition-colors font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver a Productos</span>
          </Link>
        </div>

        {/* Título principal */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#2d472f]">
            CARTUCHOS
          </h1>
          <p className="text-xl sm:text-2xl text-[#4b6d3b] max-w-3xl mx-auto">
            Tóneres originales Brother para máxima calidad y durabilidad
          </p>
        </div>

        {/* Sección 1: Top Sales - Layout de dos columnas asimétricas */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2d472f] mb-4">
              Productos Estrella
            </h2>
            <p className="text-lg text-[#4b6d3b]">
              Nuestros cartuchos más vendidos y recomendados
            </p>
          </div>

          {/* Layout de dos columnas asimétricas */}
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-3 gap-6 h-[800px]">
              {/* Columna izquierda - Tarjeta grande */}
              <div className="col-span-2 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                <div className="relative h-full">
                  {/* Badge destacado */}
                  <div className="absolute top-6 right-6 z-20">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      {topSalesCartuchos[0].destacado}
                    </span>
                  </div>

                  {/* Imagen de fondo */}
                  <div className="absolute inset-0">
                    <img 
                      src="/images/cartuchos/1.jpg"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>

                  {/* Contenido */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl font-bold mb-4 group-hover:text-green-300 transition-colors">
                      {topSalesCartuchos[0].nombre}
                    </h3>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-3">
                        <Package className="w-5 h-5 text-green-300" />
                        <span className="text-green-200 font-medium">{topSalesCartuchos[0].tecnologia}</span>
                      </div>
                      
                      <div className="text-green-100">
                        <div className="font-semibold">Compatibilidad: {topSalesCartuchos[0].compatibilidad}</div>
                        <div className="font-semibold">Rendimiento: {topSalesCartuchos[0].rendimiento}</div>
                      </div>

                      {/* Precio */}
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-semibold text-green-200">Precio:</span>
                        <div className="flex space-x-2">
                          <span className="text-lg font-bold text-green-300">{topSalesCartuchos[0].precio}</span>
                        </div>
                      </div>

                      {/* Características */}
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-semibold text-green-200">Características:</span>
                        <div className="flex flex-wrap gap-2">
                          {topSalesCartuchos[0].caracteristicas.map((caract, idx) => (
                            <span key={idx} className="text-xs bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full border border-white/30">
                              {caract}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Columna derecha - Dos tarjetas apiladas */}
              <div className="col-span-1 flex flex-col gap-6">
                {/* Tarjeta superior */}
                <div className="flex-1 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                  <div className="relative h-full">
                    {/* Badge destacado */}
                    <div className="absolute top-4 right-4 z-20">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        {topSalesCartuchos[1].destacado}
                      </span>
                    </div>

                    {/* Imagen de fondo */}
                    <div className="absolute inset-0">
                      <img 
                        src="/images/cartuchos/2.jpg"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                    </div>

                    {/* Contenido */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors">
                        {topSalesCartuchos[1].nombre}
                      </h3>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Package className="w-4 h-4 text-blue-300" />
                          <span className="text-blue-200 text-sm font-medium">{topSalesCartuchos[1].tecnologia}</span>
                        </div>
                        
                        <div className="text-blue-100 text-sm">
                          <div className="font-semibold">Compatibilidad: {topSalesCartuchos[1].compatibilidad}</div>
                          <div className="font-semibold">Rendimiento: {topSalesCartuchos[1].rendimiento}</div>
                        </div>
                        
                        {/* Precio */}
                        <div className="flex items-center space-x-3">
                          <span className="text-sm font-semibold text-green-200">Precio:</span>
                          <div className="flex space-x-2">
                            <span className="text-lg font-bold text-green-300">{topSalesCartuchos[1].precio}</span>
                          </div>
                        </div>

                        {/* Características */}
                        <div className="flex items-center space-x-3">
                          <span className="text-sm font-semibold text-blue-200">Características:</span>
                          <div className="flex flex-wrap gap-2">
                            {topSalesCartuchos[1].caracteristicas.map((caract, idx) => (
                              <span key={idx} className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full border border-white/30">
                                {caract}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tarjeta inferior */}
                <div className="flex-1 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                  <div className="relative h-full">
                    {/* Badge destacado */}
                    <div className="absolute top-4 right-4 z-20">
                      <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        {topSalesCartuchos[2].destacado}
                      </span>
                    </div>

                    {/* Imagen de fondo */}
                    <div className="absolute inset-0">
                      <img 
                        src="/images/cartuchos/3.jpg"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                    </div>

                    {/* Contenido */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-red-300 transition-colors">
                        {topSalesCartuchos[2].nombre}
                      </h3>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Package className="w-4 h-4 text-red-300" />
                          <span className="text-red-200 text-sm font-medium">{topSalesCartuchos[2].tecnologia}</span>
                        </div>
                        
                        <div className="text-red-100 text-sm">
                          <div className="font-semibold">Compatibilidad: {topSalesCartuchos[2].compatibilidad}</div>
                          <div className="font-semibold">Rendimiento: {topSalesCartuchos[2].rendimiento}</div>
                        </div>

                        {/* Precio */}
                        <div className="flex items-center space-x-3">
                          <span className="text-sm font-semibold text-green-200">Precio:</span>
                          <div className="flex space-x-2">
                            <span className="text-lg font-bold text-green-300">{topSalesCartuchos[2].precio}</span>
                          </div>
                        </div>

                        {/* Características */}
                        <div className="flex items-center space-x-3">
                          <span className="text-sm font-semibold text-red-200">Características:</span>
                          <div className="flex flex-wrap gap-2">
                            {topSalesCartuchos[2].caracteristicas.map((caract, idx) => (
                              <span key={idx} className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full border border-white/30">
                                {caract}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 2: Cuadrilla general */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2d472f] mb-4">
              Catálogo Completo
            </h2>
            <p className="text-lg text-[#4b6d3b]">
              Nuestra gama completa de cartuchos Brother
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {todosCartuchos.map((cartucho) => (
              <div 
                key={cartucho.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                {/* Imagen */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={cartucho.imagen} 
                    alt={cartucho.nombre}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Contenido técnico */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#2d472f] mb-3">
                    {cartucho.nombre}
                  </h3>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Package className="w-3 h-3 text-[#4b6d3b]" />
                      <span className="text-[#4b6d3b] font-medium">{cartucho.tecnologia}</span>
                    </div>
                    
                    <div className="text-gray-600">
                      <div className="font-semibold">Compatibilidad: {cartucho.compatibilidad}</div>
                      <div className="font-semibold">Rendimiento: {cartucho.rendimiento}</div>
                    </div>

                    {/* Precio */}
                    <div className="flex items-center space-x-1">
                      <span className="text-xs font-semibold text-[#2d472f]">Precio:</span>
                      <div className="flex space-x-1">
                        <span className="text-sm font-bold text-[#4b6d3b]">{cartucho.precio}</span>
                      </div>
                    </div>

                    {/* Características */}
                    <div className="flex flex-wrap gap-1">
                      {cartucho.caracteristicas.slice(0, 2).map((caract, idx) => (
                        <span key={idx} className="text-xs bg-[#2d472f] text-white px-1.5 py-0.5 rounded">
                          {caract}
                        </span>
                      ))}
                      {cartucho.caracteristicas.length > 2 && (
                        <span className="text-xs text-[#4b6d3b]">+{cartucho.caracteristicas.length - 2} más</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ProductosCartuchos;
