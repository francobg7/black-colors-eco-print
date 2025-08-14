import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Clock, Users, Star } from 'lucide-react';
import Footer from '@/components/Footer';

const ServiciosDiferenciados = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100">
      <div className="container mx-auto px-6 py-8">
        {/* Navegación */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-[#2d472f] hover:text-[#4b6d3b] transition-colors font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver a Servicios</span>
          </Link>
        </div>

        {/* Título principal */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#2d472f]">
            SERVICIOS DIFERENCIADOS
          </h1>
          <p className="text-xl sm:text-2xl text-[#4b6d3b] max-w-3xl mx-auto">
            Soluciones personalizadas y servicios especializados para tu empresa
          </p>
        </div>

        {/* Contenido principal */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-[#2d472f] mb-6">
              Nuestros Servicios Especializados
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ofrecemos una amplia gama de servicios diferenciados para satisfacer las necesidades específicas de tu empresa.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#2d472f] mb-3">Consultoría Tecnológica</h3>
                <p className="text-gray-600">Asesoramiento especializado en soluciones de impresión y tecnología sustentable.</p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#2d472f] mb-3">Mantenimiento Preventivo</h3>
                <p className="text-gray-600">Servicios de mantenimiento para optimizar el rendimiento de tus equipos.</p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#2d472f] mb-3">Capacitación</h3>
                <p className="text-gray-600">Programas de entrenamiento para tu equipo en el uso de nuevas tecnologías.</p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#2d472f] mb-3">Soporte Técnico</h3>
                <p className="text-gray-600">Asistencia técnica especializada disponible 24/7 para tu empresa.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServiciosDiferenciados; 