import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Clock, Users, Star, Gift, Wrench, Camera, Tag, CheckCircle, Mail } from 'lucide-react';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import newsService from '@/services/NewsService';
import SEO from '@/components/SEO';

// Componente para mostrar imágenes en el cuerpo de la noticia
const ImagenCuerpo = ({ imagen }) => {
  return (
    <div className={`mb-8 ${imagen.ancho === 'medio' ? 'lg:w-1/2 inline-block lg:pr-4' : 'w-full'}`}>
      <div className="bg-white rounded-xl overflow-hidden shadow-md">
        <img 
          src={imagen.url} 
          alt={imagen.caption}
          className="w-full h-auto object-cover"
        />
        <div className="p-4 bg-gray-50 border-t border-gray-100">
          <p className="text-center text-gray-600 font-medium text-sm">
            {imagen.caption}
          </p>
        </div>
      </div>
    </div>
  );
};

const EventoDetalle = () => {
  const { slug } = useParams<{ slug: string }>();
  const [evento, setEvento] = useState(null);
  
  useEffect(() => {
    if (slug) {
      const eventoData = newsService.getEventoPorSlug(slug);
      setEvento(eventoData);
    }
  }, [slug]);

  if (!evento) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#2d472f] mb-4">Evento no encontrado</h1>
          <Link to="/eventos" className="text-[#4b6d3b] hover:text-[#2d472f] font-semibold">
            ← Volver a eventos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Component */}
      <SEO 
        title={evento.titulo}
        description={evento.descripcion}
        ogType="article"
        ogImage={evento.imagenPrincipal}
        keywords={`${evento.categoria}, eventos, black colors, ${evento.titulo.toLowerCase()}`}
        category={evento.categoria}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Event",
          "name": evento.titulo,
          "description": evento.descripcion,
          "image": evento.imagenPrincipal,
          "startDate": evento.fecha,
          "endDate": evento.fecha,
          "location": {
            "@type": "Place",
            "name": evento.ubicacion,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Asunción",
              "addressRegion": "Central",
              "addressCountry": "PY"
            }
          },
          "organizer": {
            "@type": "Organization",
            "name": "Black Colors",
            "url": "https://blackcolors.com.py"
          }
        }}
      />

      {/* Hero Section */}
      <div className="relative">
        {/* Hero Background - Imagen única */}
        <div className="relative h-[600px] overflow-hidden">
          <img 
            src={evento.imagenPrincipal} 
            alt={`${evento.titulo}`}
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-gray-50" />
          
          {/* Badge destacado */}
          <div className="absolute top-6 right-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              <Star className="w-4 h-4 inline mr-1" />
              {evento.categoria}
            </span>
          </div>

          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-8 pt-20">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight tracking-tight">
                  {evento.titulo}
                </h1>
                <h2 className="text-3xl lg:text-4xl font-light text-emerald-300 leading-tight tracking-tight">
                  {evento.subtitulo}
                </h2>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <p className="text-xl lg:text-2xl text-gray-100 leading-relaxed font-light">
                  {evento.descripcion}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navegación */}
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <Link 
            to="/eventos" 
            className="inline-flex items-center space-x-2 text-[#2d472f] hover:text-[#4b6d3b] transition-colors font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver a Eventos</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contenido principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Foto adicional del evento */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
              <img 
                src={evento.imagenesGaleria[1] || evento.imagenPrincipal} 
                alt={`${evento.titulo} - Vista adicional`}
                className="w-full h-[300px] object-contain bg-gray-50"
              />
              <div className="p-4 bg-gray-50 border-t border-gray-100">
                <p className="text-center text-gray-600 font-medium">
                  {evento.titulo} - Vista previa del evento
                </p>
              </div>
            </div>
            
            {/* Información del evento */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-3xl font-light text-gray-900 mb-6 tracking-tight">Información del Evento</h2>
              <div className="w-20 h-px bg-emerald-400 mb-6"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Fecha</p>
                    <p className="font-semibold text-[#2d472f] text-lg">{evento.fecha}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Horario</p>
                    <p className="font-semibold text-[#2d472f] text-lg">{evento.hora}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 sm:col-span-2">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Ubicación</p>
                    <p className="font-semibold text-[#2d472f] text-lg">{evento.ubicacion}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Asistencia</p>
                    <p className="font-semibold text-[#2d472f] text-lg">{evento.asistentes}</p>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                {evento.descripcionCompleta.split('\n\n').map((parrafo, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4 text-lg">
                    {parrafo}
                  </p>
                ))}
              </div>
              
              {/* Imágenes del cuerpo de la noticia */}
              {evento.imagenesCuerpo && evento.imagenesCuerpo.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-tight">Imágenes del evento</h3>
                  <div className="w-16 h-px bg-emerald-400 mb-6"></div>
                  <div className="flex flex-wrap">
                    {evento.imagenesCuerpo.map((imagen, index) => (
                      <ImagenCuerpo key={index} imagen={imagen} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Beneficios exclusivos */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-3xl font-light text-gray-900 mb-6 tracking-tight">Beneficios Exclusivos</h2>
              <div className="w-20 h-px bg-emerald-400 mb-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {evento.beneficios.map((beneficio, index) => {
                  const IconComponent = beneficio.icono;
                  return (
                    <div key={index} className="flex items-start space-x-4 p-6 bg-emerald-50/50 rounded-2xl border border-emerald-100">
                      <div className="bg-[#2d472f] p-3 rounded-lg">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#2d472f] mb-2 text-lg">{beneficio.titulo}</h3>
                        <p className="text-gray-700">{beneficio.descripcion}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Renovaciones */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-3xl font-light text-gray-900 mb-6 tracking-tight">Renovaciones del Local</h2>
              <div className="w-20 h-px bg-emerald-400 mb-6"></div>
              <div className="space-y-6">
                {evento.renovaciones.map((renovacion, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 border-l-4 border-emerald-500 bg-emerald-50/30 rounded-r-2xl">
                    <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-[#2d472f] mb-2 text-lg">{renovacion.titulo}</h3>
                      <p className="text-gray-700 leading-relaxed">{renovacion.descripcion}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Imágenes del cuerpo de la noticia */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-3xl font-light text-gray-900 mb-6 tracking-tight">Galería del Evento</h2>
              <div className="w-20 h-px bg-emerald-400 mb-6"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {evento.imagenesCuerpo.map((imagen, index) => (
                  <ImagenCuerpo key={index} imagen={imagen} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA Principal */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-[#2d472f] mb-4">¡Participa del evento!</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                No te pierdas esta celebración especial. Ven y disfruta de todos los beneficios.
              </p>
            </div>

            {/* Información de contacto */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-[#2d472f] mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">WhatsApp</p>
                    <p className="font-semibold text-[#2d472f]">+595 982 343 128</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-semibold text-[#2d472f]">mkt@blackcolors.com.py</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nota especial */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-3xl p-6">
              <h3 className="text-lg font-bold text-orange-800 mb-3">¡Llegá temprano!</h3>
              <p className="text-orange-700">
                Los primeros beneficios son limitados. Te recomendamos llegar desde las 9:00 AM para no perderte nada.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default EventoDetalle;
