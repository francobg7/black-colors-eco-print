import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Clock, Users, Star } from 'lucide-react';
import Footer from '@/components/Footer';

// Datos de eventos
const eventos = [
  {
    id: 1,
    titulo: 'Black Colors celebra sus 18 años',
    fecha: '23 de Agosto, 2025',
    hora: '09:00 - 16:00',
    ubicacion: 'Black Colors Lambaré - Cacique Lambaré y Bonifacio Ovando',
    descripcion: 'Un evento especial para celebrar nuestros 18 años de trayectoria en el mercado paraguayo con la reinauguración de nuestro local totalmente renovado.',
    categoria: 'Aniversario',
    destacado: true,
    imagen: '/images/eventos/black-colors2.png',
    asistentes: 'Abierto al público',
    slug: 'aniversario-18-anos-black-colors',
    beneficios: [
      'Las 10 primeras personas en traer cartuchos reciben carga gratuita',
      'Las 5 primeras en traer equipos acceden a mantenimiento preventivo sin costo',
      'Demostraciones gratuitas de equipos',
      'Descuentos de hasta 70% en impresoras nuevas',
      'Regalos, sorteos y cupones especiales'
    ],
    detallesCompletos: true
  }
];

const Eventos = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        {/* Hero Background */}
        <div className="relative h-[500px] overflow-hidden">
          <img 
            src="/images/eventos/black-colors2.png" 
            alt="Eventos Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-gray-50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight tracking-tight">EVENTOS</h1>
            <p className="text-xl lg:text-2xl text-gray-100 leading-relaxed font-light max-w-3xl text-center">
              Participa en nuestros eventos y mantente actualizado con las últimas tendencias
            </p>
          </div>
        </div>
      </div>

      {/* Navegación */}
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-[#2d472f] hover:text-[#4b6d3b] transition-colors font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver al Inicio</span>
          </Link>
        </div>

        {/* Eventos Destacados */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
              Eventos Destacados
            </h2>
            <div className="w-20 h-px bg-emerald-400 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Los eventos más importantes que no te puedes perder
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {eventos.filter(evento => evento.destacado).map((evento) => (
              <div 
                key={evento.id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Imagen */}
                  <div className="relative h-64 lg:h-auto overflow-hidden flex items-center justify-center bg-gray-100">
                    <img 
                      src={evento.imagen} 
                      alt={evento.titulo}
                      className="w-full h-auto object-contain max-h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent lg:hidden pointer-events-none"></div>
                    
                    {/* Badge destacado */}
                    <div className="absolute top-6 right-6">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        <Star className="w-4 h-4 inline mr-1" />
                        {evento.categoria}
                      </span>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-[#2d472f] mb-6 leading-tight">
                      {evento.titulo}
                    </h3>

                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                      {evento.descripcion}
                    </p>

                    {/* Beneficios especiales */}
                    {evento.beneficios && (
                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-[#2d472f] mb-4">Beneficios exclusivos:</h4>
                        <ul className="space-y-3">
                          {evento.beneficios.slice(0, 3).map((beneficio, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{beneficio}</span>
                            </li>
                          ))}
                          {evento.beneficios.length > 3 && (
                            <li className="text-emerald-600 font-medium">
                              + {evento.beneficios.length - 3} beneficios más...
                            </li>
                          )}
                        </ul>
                      </div>
                    )}

                    {/* Detalles del evento */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Fecha</p>
                          <p className="text-[#2d472f] font-medium">{evento.fecha}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <Clock className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Horario</p>
                          <p className="text-[#2d472f] font-medium">{evento.hora}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3 sm:col-span-2">
                        <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Ubicación</p>
                          <p className="text-[#2d472f] font-medium">{evento.ubicacion}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 sm:col-span-2">
                        <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <Users className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Asistencia</p>
                          <p className="text-[#2d472f] font-medium">{evento.asistentes}</p>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      {evento.detallesCompletos && (
                        <Link 
                          to={`/eventos/${evento.slug}`}
                          className="inline-flex items-center justify-center px-6 py-3 bg-[#2d472f] text-white hover:bg-[#4b6d3b] transition-colors font-semibold rounded-lg"
                        >
                          Ver detalles completos
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Próximamente */}
        {eventos.filter(evento => !evento.destacado).length === 0 && (
          <section className="text-center py-20">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">
                Próximos Eventos
              </h2>
              <div className="w-20 h-px bg-emerald-400 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Mantente atento a nuestras redes sociales para conocer los próximos eventos que tenemos preparados para ti.
              </p>
            </div>
          </section>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Eventos; 