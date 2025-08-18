import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Wrench, Clock, Shield, Users, Star, CheckCircle } from 'lucide-react';
import Footer from '@/components/Footer';

const ServicioTecnico = () => {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0f3d2e 0%, #2f9e44 50%, #3d7b4f 100%)' }}>
      <div className="container mx-auto px-6 py-20">
        {/* Navegación */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-[#d7f2db] hover:text-[#c3e8a4] transition-colors font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver a Servicios</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-8 animate-fade-in" style={{ color: '#d7f2db' }}>
            SERVICIO TÉCNICO
          </h1>
          <p className="text-xl sm:text-2xl text-[#c3e8a4] max-w-4xl mx-auto">
            Soporte técnico especializado y mantenimiento preventivo para tu equipamiento de impresión
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8 animate-slide-up">
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold" style={{ color: '#c3e8a4' }}>
                Expertos en tecnología de impresión
              </h2>
              <p className="text-xl leading-relaxed" style={{ color: '#d7f2db' }}>
                Nuestro equipo técnico especializado garantiza el funcionamiento óptimo de tus equipos 
                con servicio rápido, eficiente y respetuoso con el medio ambiente.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 mt-1" style={{ color: '#c3e8a4' }} />
                  <p className="text-lg" style={{ color: '#d7f2db' }}>
                    <strong>Respuesta inmediata:</strong> Soporte técnico 24/7
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 mt-1" style={{ color: '#c3e8a4' }} />
                  <p className="text-lg" style={{ color: '#d7f2db' }}>
                    <strong>Mantenimiento preventivo:</strong> Evitamos fallas antes de que ocurran
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 mt-1" style={{ color: '#c3e8a4' }} />
                  <p className="text-lg" style={{ color: '#d7f2db' }}>
                    <strong>Reparaciones sustentables:</strong> Uso de repuestos reciclados
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div 
                className="rounded-3xl p-8 text-center backdrop-blur-sm border"
                style={{ 
                  background: 'rgba(195, 232, 164, 0.1)',
                  borderColor: 'rgba(195, 232, 164, 0.3)'
                }}
              >
                <h3 className="text-xl sm:text-3xl font-bold mb-6" style={{ color: '#c3e8a4' }}>
                  ¿Por qué elegirnos?
                </h3>
                <div className="space-y-4 text-left">
                  <div className="p-4 rounded-xl" style={{ background: 'rgba(47, 158, 68, 0.2)' }}>
                    <h4 className="font-semibold mb-2" style={{ color: '#d7f2db' }}>Experiencia certificada</h4>
                    <p style={{ color: '#c3e8a4' }}>Técnicos certificados por los principales fabricantes</p>
                  </div>
                  <div className="p-4 rounded-xl" style={{ background: 'rgba(47, 158, 68, 0.2)' }}>
                    <h4 className="font-semibold mb-2" style={{ color: '#d7f2db' }}>Garantía extendida</h4>
                    <p style={{ color: '#c3e8a4' }}>Todos nuestros servicios incluyen garantía</p>
                  </div>
                  <div className="p-4 rounded-xl" style={{ background: 'rgba(47, 158, 68, 0.2)' }}>
                    <h4 className="font-semibold mb-2" style={{ color: '#d7f2db' }}>Compromiso ambiental</h4>
                    <p style={{ color: '#c3e8a4' }}>Prácticas sustentables en cada intervención</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="text-center mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-12" style={{ color: '#c3e8a4' }}>
              Nuestros Servicios Técnicos
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl backdrop-blur-sm border hover-lift" style={{ 
                background: 'rgba(195, 232, 164, 0.1)',
                borderColor: 'rgba(195, 232, 164, 0.3)'
              }}>
                <Wrench className="w-16 h-16 mx-auto mb-6" style={{ color: '#c3e8a4' }} />
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#d7f2db' }}>Mantenimiento Preventivo</h3>
                <p style={{ color: '#c3e8a4' }}>
                  Revisiones programadas para mantener tus equipos funcionando al máximo rendimiento
                </p>
              </div>
              
              <div className="p-8 rounded-2xl backdrop-blur-sm border hover-lift" style={{ 
                background: 'rgba(195, 232, 164, 0.1)',
                borderColor: 'rgba(195, 232, 164, 0.3)'
              }}>
                <Shield className="w-16 h-16 mx-auto mb-6" style={{ color: '#c3e8a4' }} />
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#d7f2db' }}>Reparaciones</h3>
                <p style={{ color: '#c3e8a4' }}>
                  Solución rápida y eficiente de cualquier problema técnico que pueda surgir
                </p>
              </div>
              
              <div className="p-8 rounded-2xl backdrop-blur-sm border hover-lift" style={{ 
                background: 'rgba(195, 232, 164, 0.1)',
                borderColor: 'rgba(195, 232, 164, 0.3)'
              }}>
                <Users className="w-16 h-16 mx-auto mb-6" style={{ color: '#c3e8a4' }} />
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#d7f2db' }}>Capacitación</h3>
                <p style={{ color: '#c3e8a4' }}>
                  Entrenamiento para tu equipo en el uso y mantenimiento de los equipos
                </p>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold" style={{ color: '#c3e8a4' }}>Características del Servicio</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#c3e8a4' }}></div>
                  <span style={{ color: '#d7f2db' }}>Respuesta en menos de 4 horas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#c3e8a4' }}></div>
                  <span style={{ color: '#d7f2db' }}>Técnicos certificados y experimentados</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#c3e8a4' }}></div>
                  <span style={{ color: '#d7f2db' }}>Repuestos originales y reciclados</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#c3e8a4' }}></div>
                  <span style={{ color: '#d7f2db' }}>Garantía en todos los servicios</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold" style={{ color: '#c3e8a4' }}>Equipos que Atendemos</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#c3e8a4' }}></div>
                  <span style={{ color: '#d7f2db' }}>Impresoras láser y de inyección</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#c3e8a4' }}></div>
                  <span style={{ color: '#d7f2db' }}>Multifuncionales y copiadoras</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#c3e8a4' }}></div>
                  <span style={{ color: '#d7f2db' }}>Escáneres y dispositivos de red</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#c3e8a4' }}></div>
                  <span style={{ color: '#d7f2db' }}>Equipos de todas las marcas</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center p-12 rounded-3xl backdrop-blur-sm border" style={{ 
            background: 'rgba(195, 232, 164, 0.1)',
            borderColor: 'rgba(195, 232, 164, 0.3)'
          }}>
            <h3 className="text-3xl font-bold mb-6" style={{ color: '#c3e8a4' }}>
              ¿Necesitás asistencia técnica?
            </h3>
            <p className="text-xl mb-8" style={{ color: '#d7f2db' }}>
              Contactanos para coordinar una visita o solicitar soporte remoto
            </p>
            <Link to="/contacto">
              <button className="px-8 py-4 bg-[#2f9e44] hover:bg-[#3d7b4f] text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105">
                Solicitar Servicio Técnico
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicioTecnico; 