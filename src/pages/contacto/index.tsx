
import { MapPin, User, Phone, Clock, Building } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import WhatsAppInlineButton from '@/components/WhatsAppInlineButton';
import Footer from '@/components/Footer';
import MapComponent from '@/components/MapComponent';

const Contacto = () => {


  return (
    <div className="min-h-screen bg-[#0f3d2e]">
      {/* Hero Section */}
      <div className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/servicio-dif.jpg)',
            filter: 'brightness(0.25)'
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="animate-fadeIn">
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-extrabold mb-8 text-white tracking-tighter">
              CONTACTO <span className="text-emerald-400">DIRECTO</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-10">
              <span className="font-semibold">Tu éxito es nuestro compromiso.</span> Estamos aquí para brindarte 
              soluciones personalizadas que impulsen la eficiencia y sostenibilidad de tu negocio.
            </p>
            
            {/* Número de teléfono grande */}
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-300 tracking-wide mb-4">
                +595 982 343 128
              </h2>
              <WhatsAppInlineButton
                customMessage="Hola, me gustaría recibir más información sobre los servicios de Black Colors."
                className="bg-emerald-500 hover:bg-emerald-400 shadow-lg text-lg py-3 px-8"
                size="lg"
              >
                Contáctanos por WhatsApp
              </WhatsAppInlineButton>
            </div>
          </div>
        </div>

        {/* Decorative bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f3d2e] to-transparent" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20">
        
        {/* Sobre nosotros - Sección para foto de empresa */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">CONÓCENOS</h2>
            <div className="w-24 h-1 bg-emerald-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Imagen de la empresa */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-emerald-400/30">
                <img 
                  src="/images/nosotros2.jpg" 
                  alt="Black Colors Eco Print" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-emerald-500 p-4 rounded-lg shadow-xl">
                <Building className="w-10 h-10 text-white" />
              </div>
            </div>
            
            {/* Descripción */}
            <div>
              <h3 className="text-3xl font-bold text-emerald-300 mb-6">Impulsando la sostenibilidad en cada impresión</h3>
              <p className="text-xl text-gray-200 leading-relaxed mb-8">
                En Black Colors, combinamos tecnología avanzada con un compromiso inquebrantable por el medio ambiente.
                Nuestro equipo de expertos está listo para transformar tu experiencia de impresión en una 
                solución eficiente, económica y amigable con el planeta.
              </p>
              <div className="flex space-x-2">
                <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-medium">Calidad</span>
                <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-medium">Sostenibilidad</span>
                <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-medium">Innovación</span>
              </div>
            </div>
          </div>
        </div>

        {/* Información adicional */}
        <div className="mb-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">INFORMACIÓN DE CONTACTO</h2>
            <div className="w-24 h-1 bg-emerald-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Contacto directo */}
            <Card className="border-emerald-200/20 bg-white/10 backdrop-blur-md hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-emerald-500/20 mb-6">
                    <Phone className="w-8 h-8 text-emerald-300" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-6 text-white">
                    Contacto directo
                  </h3>
                  
                  <p className="text-3xl font-bold text-emerald-300 mb-3">
                    +595 982 343 128
                  </p>
                  
                  <WhatsAppInlineButton
                    customMessage="Hola, me gustaría recibir más información sobre los servicios de Black Colors."
                    className="bg-emerald-500 hover:bg-emerald-400 mt-4 shadow-lg"
                    size="default"
                  >
                    Enviar mensaje
                  </WhatsAppInlineButton>
                  
                  <p className="mt-6 text-emerald-100">
                    También puedes escribirnos al correo:
                    <br />
                    <a href="mailto:mkt@blackcolors.com.py" className="text-emerald-300 hover:underline">
                      mkt@blackcolors.com.py
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-rows-2 gap-6">
              {/* Horarios */}
              <Card className="border-emerald-200/20 bg-white/10 backdrop-blur-md hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-emerald-500/20 flex-shrink-0">
                      <Clock className="w-6 h-6 text-emerald-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-white">
                        Horarios de atención
                      </h3>
                      <div className="space-y-2 text-emerald-100">
                        <p>Lunes a Viernes: 8:00 - 18:00</p>
                        <p>Sábados: 8:00 - 12:00</p>
                        <p>Domingos: Cerrado</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Ubicación */}
              <Card className="border-emerald-200/20 bg-white/10 backdrop-blur-md hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-emerald-500/20 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-emerald-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-white">
                        Nuestra ubicación
                      </h3>
                      <p className="text-emerald-100">
                        Av Cacique Lambare & Av. Bonifacio Ovando, Lambaré, Paraguay
                      </p>
                      <a 
                        href="https://maps.app.goo.gl/66zbM6BrGcKQqHaV6?g_st=ipc" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-emerald-300 hover:text-emerald-400 hover:underline"
                      >
                        Ver en Google Maps
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Mapa - Usando Leaflet (más confiable con marcadores) */}
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-emerald-200/20 mb-10">
          <MapComponent />
          <div className="py-2 px-4 bg-emerald-800/30 text-center">
            <a 
              href="https://www.openstreetmap.org/?mlat=-25.341705587703785&amp;mlon=-57.6033648846568#map=17/-25.341705/-57.603364"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-300 hover:text-emerald-400 hover:underline"
            >
              Ver mapa más grande
            </a>
          </div>
        </div>
        
        {/* CTA Final */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            ¿Listo para transformar tu experiencia de impresión?
          </h3>
          <p className="text-lg text-emerald-100 mb-8 max-w-3xl mx-auto">
            Nuestro equipo está disponible para ayudarte a encontrar la solución ideal para tu empresa.
            Contáctanos hoy mismo y descubre la diferencia de Black Colors Eco Print.
          </p>
          <WhatsAppInlineButton
            customMessage="Hola, me gustaría recibir más información sobre los servicios de Black Colors."
            className="bg-emerald-500 hover:bg-emerald-400 shadow-lg px-8 py-3 text-lg"
            size="lg"
          >
            Comienza ahora
          </WhatsAppInlineButton>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacto;
