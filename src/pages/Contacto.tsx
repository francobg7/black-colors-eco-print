
import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Send, User, Phone as PhoneIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Footer from '@/components/Footer';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Aquí iría la lógica de envío del formulario
  };

  const asesores = [
    {
      nombre: 'Sofía Duarte',
      cargo: 'Asesora Corporativa',
      telefono: '+595 981 123 456'
    },
    {
      nombre: 'Lucas Ríos',
      cargo: 'Asesor Técnico',
      telefono: '+595 983 654 321'
    },
    {
      nombre: 'Martina Gómez',
      cargo: 'Atención Comercial',
      telefono: '+595 985 789 123'
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0f3d2e 0%, #2f9e44 50%, #3d7b4f 100%)' }}>
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-8 animate-fade-in" style={{ color: '#d7f2db' }}>
            CONTACTO
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl leading-relaxed animate-slide-up" style={{ color: '#c3e8a4' }}>
              En Black Colors combinamos tecnología, sustentabilidad y servicio personalizado para ofrecerte 
              soluciones de impresión responsables con el planeta. Eleginos porque nos importa tu negocio, 
              pero también el futuro del medio ambiente.
            </p>
          </div>
        </div>

        {/* Contact Info & Form Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <Card className="border-green-mint/20 bg-background/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold" style={{ color: '#d7f2db' }}>
                  Envianos tu consulta
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#c3e8a4' }}>
                      Nombre completo
                    </label>
                    <Input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className="bg-background/20 border-green-mint/30 text-foreground placeholder:text-green-lime/70"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#c3e8a4' }}>
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-background/20 border-green-mint/30 text-foreground placeholder:text-green-lime/70"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#c3e8a4' }}>
                      Mensaje
                    </label>
                    <Textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      className="bg-background/20 border-green-mint/30 text-foreground placeholder:text-green-lime/70 min-h-[120px]"
                      placeholder="Contanos sobre tu proyecto o consulta..."
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-scale-in">
            <div>
              <h2 className="text-3xl font-bold mb-8" style={{ color: '#c3e8a4' }}>
                Información de contacto
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-xl" style={{ background: 'rgba(195, 232, 164, 0.1)' }}>
                  <Phone className="w-6 h-6" style={{ color: '#c3e8a4' }} />
                  <div>
                    <p className="font-semibold" style={{ color: '#d7f2db' }}>Teléfono principal</p>
                    <p style={{ color: '#c3e8a4' }}>+595 21 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 rounded-xl" style={{ background: 'rgba(195, 232, 164, 0.1)' }}>
                  <MessageCircle className="w-6 h-6" style={{ color: '#c3e8a4' }} />
                  <div>
                    <p className="font-semibold" style={{ color: '#d7f2db' }}>WhatsApp</p>
                    <p style={{ color: '#c3e8a4' }}>+595 981 123 456</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 rounded-xl" style={{ background: 'rgba(195, 232, 164, 0.1)' }}>
                  <Mail className="w-6 h-6" style={{ color: '#c3e8a4' }} />
                  <div>
                    <p className="font-semibold" style={{ color: '#d7f2db' }}>Email</p>
                    <p style={{ color: '#c3e8a4' }}>info@blackcolors.com.py</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 rounded-xl" style={{ background: 'rgba(195, 232, 164, 0.1)' }}>
                  <MapPin className="w-6 h-6" style={{ color: '#c3e8a4' }} />
                  <div>
                    <p className="font-semibold" style={{ color: '#d7f2db' }}>Dirección</p>
                    <p style={{ color: '#c3e8a4' }}>Av. Mariscal López 1234, Asunción, Paraguay</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Horarios */}
            <div className="p-6 rounded-2xl" style={{ background: 'rgba(47, 158, 68, 0.2)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#d7f2db' }}>Horarios de atención</h3>
              <div className="space-y-2">
                <p style={{ color: '#c3e8a4' }}>Lunes a Viernes: 8:00 - 18:00</p>
                <p style={{ color: '#c3e8a4' }}>Sábados: 8:00 - 12:00</p>
                <p style={{ color: '#c3e8a4' }}>Domingos: Cerrado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sales Team Cards */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#c3e8a4' }}>
            Nuestro equipo de ventas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {asesores.map((asesor, index) => (
              <Card 
                key={index}
                className="border-green-mint/20 bg-background/10 backdrop-blur-sm hover-lift transition-all duration-300 hover:border-green-mint/40"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#c3e8a4' }}>
                    <User className="w-8 h-8" style={{ color: '#0f3d2e' }} />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#d7f2db' }}>
                    {asesor.nombre}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: '#c3e8a4' }}>
                    {asesor.cargo}
                  </p>
                  <div className="flex items-center justify-center space-x-2 p-3 rounded-lg" style={{ background: 'rgba(195, 232, 164, 0.1)' }}>
                    <PhoneIcon className="w-4 h-4" style={{ color: '#c3e8a4' }} />
                    <span className="font-medium" style={{ color: '#c3e8a4' }}>
                      {asesor.telefono}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#c3e8a4' }}>
            Nuestra ubicación
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-green-mint/20">
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
      </div>
      <Footer />
    </div>
  );
};

export default Contacto;
