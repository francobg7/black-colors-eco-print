import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Clock, Users, Star, Gift, Wrench, Camera, Tag, CheckCircle, Mail } from 'lucide-react';
import Footer from '@/components/Footer';

// Datos detallados del evento
const eventosDetallados = {
  'aniversario-18-anos-black-colors': {
    id: 1,
    titulo: 'Black Colors celebra sus 18 años',
    subtitulo: 'Reinauguración de nuestro local totalmente renovado',
    fecha: '23 de Agosto, 2025',
    hora: '09:00 - 16:00',
    ubicacion: 'Black Colors Lambaré - Cacique Lambaré y Bonifacio Ovando',
    descripcion: 'Este sábado 23 de agosto, Black Colors festeja sus 18 años de trayectoria en el mercado paraguayo con un evento especial en su local de Lambaré, donde además presentará la remodelación total de sus instalaciones.',
    categoria: 'Aniversario',
    destacado: true,
    imagenPrincipal: '/images/eventos/black-colors2.png',
    imagenesGaleria: [
      '/images/eventos/black-colors2.png ',
      '/images/eventos/black-colors1.png',
      '/images/eventos/3.jpg'
    ],
    asistentes: 'Abierto al público',
    descripcionCompleta: `La renovación abarca todo el espacio de atención al cliente, pensado para brindar una experiencia más cómoda y ágil a quienes visitan la empresa. El área de servicio técnico también fue modernizada, con mayor capacidad para atender equipos de todas las marcas y ofrecer diagnósticos y mantenimientos de manera más eficiente.

La fachada externa y el estacionamiento fueron completamente remodelados, logrando un acceso más seguro, práctico y atractivo para clientes y visitantes.

Black Colors reafirma así su compromiso con la innovación, el servicio de calidad y la cercanía con sus clientes, en un año donde también impulsa fuertemente sus proyectos de sustentabilidad y leasing de impresoras.

La empresa invita a toda su comunidad de clientes, aliados y amigos a participar de esta gran fiesta, donde el protagonista será el cliente.`,
    
    beneficios: [
      {
        icono: Gift,
        titulo: 'Carga gratuita de cartuchos',
        descripcion: 'Las 10 primeras personas en traer sus cartuchos recibirán una carga gratuita'
      },
      {
        icono: Wrench,
        titulo: 'Mantenimiento preventivo sin costo',
        descripcion: 'Las 5 primeras en traer sus equipos accederán a un mantenimiento preventivo sin costo'
      },
      {
        icono: Camera,
        titulo: 'Demostraciones gratuitas',
        descripcion: 'Demostraciones gratuitas de equipos, donde los asistentes podrán conocer de cerca las nuevas tecnologías en impresión'
      },
      {
        icono: Tag,
        titulo: 'Descuentos especiales',
        descripcion: 'Descuentos de hasta el 70% en impresoras y equipos totalmente nuevos'
      },
      {
        icono: Gift,
        titulo: 'Sorteos y regalos',
        descripcion: 'Durante toda la jornada se realizarán regalos, sorteos y entrega de cupones especiales'
      }
    ],

    renovaciones: [
      {
        titulo: 'Área de Atención al Cliente',
        descripcion: 'Espacio renovado para brindar una experiencia más cómoda y ágil'
      },
      {
        titulo: 'Servicio Técnico Modernizado',
        descripcion: 'Mayor capacidad para atender equipos de todas las marcas con diagnósticos eficientes'
      },
      {
        titulo: 'Fachada y Estacionamiento',
        descripcion: 'Acceso más seguro, práctico y atractivo para clientes y visitantes'
      }
    ]
  }
};

const EventoDetalle = () => {
  const { slug } = useParams<{ slug: string }>();
  const evento = slug ? eventosDetallados[slug as keyof typeof eventosDetallados] : null;

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
      {/* Hero Section */}
      <div className="relative">
        {/* Hero Background */}
        <div className="relative h-[600px] overflow-hidden">
          <img 
            src={evento.imagenPrincipal} 
            alt={evento.titulo}
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
