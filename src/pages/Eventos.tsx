import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Clock, Users, Star } from 'lucide-react';
import Footer from '@/components/Footer';

// Datos de eventos
const eventos = [
  {
    id: 1,
    titulo: 'Expo Tecnología 2024',
    fecha: '15 de Marzo, 2024',
    hora: '09:00 - 18:00',
    ubicacion: 'Centro de Convenciones Asunción',
    descripcion: 'La feria tecnológica más importante del país. Descubre las últimas innovaciones en impresión y tecnología sustentable.',
    categoria: 'Feria Tecnológica',
    destacado: true,
    imagen: '/images/eventos/expo-tecnologia.jpg',
    asistentes: '500+',
    precio: 'Gratuito'
  },
  {
    id: 2,
    titulo: 'Workshop: Impresión Sustentable',
    fecha: '22 de Marzo, 2024',
    hora: '14:00 - 17:00',
    ubicacion: 'Black Colors Showroom',
    descripcion: 'Aprende sobre las mejores prácticas de impresión ecológica y cómo reducir el impacto ambiental en tu empresa.',
    categoria: 'Workshop',
    destacado: false,
    imagen: '/images/eventos/workshop-sustentable.jpg',
    asistentes: '30',
    precio: '50.000 Gs'
  },
  {
    id: 3,
    titulo: 'Lanzamiento Brother 2024',
    fecha: '5 de Abril, 2024',
    hora: '19:00 - 22:00',
    ubicacion: 'Hotel Sheraton Asunción',
    descripcion: 'Presentación exclusiva de la nueva línea de impresoras Brother con tecnología de vanguardia.',
    categoria: 'Lanzamiento',
    destacado: true,
    imagen: '/images/eventos/lanzamiento-brother.jpg',
    asistentes: '200',
    precio: '100.000 Gs'
  },
  {
    id: 4,
    titulo: 'Networking Empresarial',
    fecha: '12 de Abril, 2024',
    hora: '18:00 - 21:00',
    ubicacion: 'Cámara de Comercio Paraguaya',
    descripcion: 'Encuentro de profesionales del sector tecnológico para crear conexiones y oportunidades de negocio.',
    categoria: 'Networking',
    destacado: false,
    imagen: '/images/eventos/networking.jpg',
    asistentes: '80',
    precio: '75.000 Gs'
  },
  {
    id: 5,
    titulo: 'Conferencia: Futuro de la Impresión',
    fecha: '20 de Abril, 2024',
    hora: '10:00 - 16:00',
    ubicacion: 'Universidad Católica',
    descripcion: 'Conferencia magistral sobre las tendencias y el futuro de la industria de la impresión.',
    categoria: 'Conferencia',
    destacado: false,
    imagen: '/images/eventos/conferencia-futuro.jpg',
    asistentes: '150',
    precio: '120.000 Gs'
  },
  {
    id: 6,
    titulo: 'Expo Black Colors',
    fecha: '28 de Abril, 2024',
    hora: '09:00 - 20:00',
    ubicacion: 'Shopping del Sol',
    descripcion: 'Nuestra exposición anual con descuentos especiales, demostraciones y sorteos.',
    categoria: 'Exposición',
    destacado: true,
    imagen: '/images/eventos/expo-black-colors.jpg',
    asistentes: '1000+',
    precio: 'Gratuito'
  }
];

const Eventos = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        {/* Navegación */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-[#2d472f] hover:text-[#4b6d3b] transition-colors font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver al Inicio</span>
          </Link>
        </div>

        {/* Título principal */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#2d472f]">
            EVENTOS
          </h1>
          <p className="text-xl sm:text-2xl text-[#4b6d3b] max-w-3xl mx-auto">
            Participa en nuestros eventos y mantente actualizado con las últimas tendencias
          </p>
        </div>

        {/* Eventos Destacados */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2d472f] mb-4">
              Eventos Destacados
            </h2>
            <p className="text-lg text-[#4b6d3b]">
              Los eventos más importantes que no te puedes perder
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {eventos.filter(evento => evento.destacado).map((evento) => (
              <div 
                key={evento.id}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group"
              >
                {/* Imagen */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={evento.imagen} 
                    alt={evento.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Badge destacado */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      <Star className="w-4 h-4 inline mr-1" />
                      Destacado
                    </span>
                  </div>

                  {/* Categoría */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium border border-white/30">
                      {evento.categoria}
                    </span>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#2d472f] mb-4 group-hover:text-[#4b6d3b] transition-colors">
                    {evento.titulo}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {evento.descripcion}
                  </p>

                  {/* Detalles del evento */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-[#4b6d3b]" />
                      <span className="text-[#2d472f] font-medium">{evento.fecha}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-[#4b6d3b]" />
                      <span className="text-[#2d472f] font-medium">{evento.hora}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-[#4b6d3b]" />
                      <span className="text-[#2d472f] font-medium">{evento.ubicacion}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-[#4b6d3b]" />
                      <span className="text-[#2d472f] font-medium">{evento.asistentes} asistentes</span>
                    </div>
                  </div>

                  {/* Precio y CTA */}
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#4b6d3b]">
                      {evento.precio}
                    </span>
                    <button className="bg-[#2d472f] text-white px-6 py-2 rounded-lg hover:bg-[#4b6d3b] transition-colors font-semibold">
                      Inscribirse
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Todos los Eventos */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2d472f] mb-4">
              Todos los Eventos
            </h2>
            <p className="text-lg text-[#4b6d3b]">
              Explora nuestra agenda completa de eventos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventos.map((evento) => (
              <div 
                key={evento.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                {/* Imagen */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={evento.imagen} 
                    alt={evento.titulo}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Contenido */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs bg-[#2d472f] text-white px-2 py-1 rounded">
                      {evento.categoria}
                    </span>
                    {evento.destacado && (
                      <Star className="w-4 h-4 text-yellow-500" />
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-[#2d472f] mb-3">
                    {evento.titulo}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {evento.descripcion}
                  </p>

                  {/* Detalles compactos */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-3 h-3 text-[#4b6d3b]" />
                      <span className="text-[#2d472f]">{evento.fecha}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-3 h-3 text-[#4b6d3b]" />
                      <span className="text-[#2d472f]">{evento.ubicacion}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Users className="w-3 h-3 text-[#4b6d3b]" />
                      <span className="text-[#2d472f]">{evento.asistentes}</span>
                  </div>
                  </div>

                  {/* Precio y CTA */}
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-[#4b6d3b]">
                      {evento.precio}
                    </span>
                    <button className="bg-[#2d472f] text-white px-4 py-1 rounded text-sm hover:bg-[#4b6d3b] transition-colors">
                      Ver más
                    </button>
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

export default Eventos; 