
import { MapPin, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import WhatsAppInlineButton from '@/components/WhatsAppInlineButton';
import Footer from '@/components/Footer';

const Contacto = () => {
  const asesores = [
    {
      nombre: 'Sofía Duarte',
      cargo: 'Asesora Corporativa',
      telefono: '+595982343128',
      especialidad: 'Soluciones empresariales y corporativas'
    },
    {
      nombre: 'Lucas Ríos',
      cargo: 'Asesor Técnico',
      telefono: '+595982343128',
      especialidad: 'Soporte técnico y mantenimiento'
    },
    {
      nombre: 'Martina Gómez',
      cargo: 'Atención Comercial',
      telefono: '+595982343128',
      especialidad: 'Ventas y asesoramiento general'
    }
  ];

  const handleWhatsAppClick = (telefono: string, nombre: string) => {
    const message = `Hola ${nombre}, me gustaría recibir más información sobre los servicios de Black Colors.`;
    const whatsappUrl = `https://wa.me/${telefono}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0f3d2e]">
      {/* Hero Section */}
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image - You'll need to add the actual image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/contact-hero-bg.jpg)',
            filter: 'brightness(0.3)'
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-[5rem] font-bold mb-6 text-white">
            CONTACTO <span className="text-emerald-400">DIRECTO</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Conecta con nuestro equipo de expertos y descubre cómo podemos transformar 
            tu experiencia de impresión en una solución más eficiente y sostenible.
          </p>
        </div>

        {/* Decorative bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f3d2e] to-transparent" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20">
        {/* Asesores Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {asesores.map((asesor, index) => (
            <Card 
              key={index}
              className="border-emerald-200/20 bg-white/10 backdrop-blur-md hover:bg-white/15 transition-all duration-300"
            >
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center bg-emerald-100">
                  <User className="w-10 h-10 text-emerald-800" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {asesor.nombre}
                </h3>
                
                <p className="text-lg font-medium mb-2 text-emerald-200">
                  {asesor.cargo}
                </p>
                
                <p className="text-sm mb-6 text-emerald-100">
                  {asesor.especialidad}
                </p>

                <WhatsAppInlineButton
                  customMessage={`Hola ${asesor.nombre}, me gustaría recibir más información sobre los servicios de Black Colors.`}
                  className="w-full bg-emerald-500 hover:bg-emerald-400"
                  size="lg"
                >
                  Contactar por WhatsApp
                </WhatsAppInlineButton>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Información adicional */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Horarios */}
          <Card className="border-emerald-200/20 bg-white/10 backdrop-blur-md">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Horarios de atención
              </h3>
              <div className="space-y-3 text-lg text-emerald-100">
                <p>Lunes a Viernes: 8:00 - 18:00</p>
                <p>Sábados: 8:00 - 12:00</p>
                <p>Domingos: Cerrado</p>
              </div>
            </CardContent>
          </Card>

          {/* Ubicación */}
          <Card className="border-emerald-200/20 bg-white/10 backdrop-blur-md">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Nuestra ubicación
              </h3>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-emerald-300 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg text-emerald-100">
                    Av. Mariscal López 1234
                    <br />
                    Asunción, Paraguay
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mapa */}
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-emerald-200/20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.1885897755814!2d-57.575926!3d-25.2637399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da5d6d7e3b6b7%3A0x8b8b8b8b8b8b8b8b!2sAv.%20Mariscal%20L%C3%B3pez%2C%20Asunci%C3%B3n%2C%20Paraguay!5e0!3m2!1ses!2sus!4v1234567890123"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Black Colors"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacto;
