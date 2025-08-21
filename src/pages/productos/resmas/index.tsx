
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Leaf, Recycle, Award, Shield, TreePine, FileText, Package, Users, Mail } from 'lucide-react';
import Footer from '@/components/Footer';

const ProductosResmas = () => {
  return (
    <div className="min-h-screen bg-gray-50">
     
      {/* Hero Section */}
      <div className="relative">
        {/* Hero Background */}
        <div className="relative h-[500px] overflow-hidden">
          <img 
            src="/images/resmas/nat-hero.png" 
            alt="Resmas Sustentables BlackColors"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-green-50/90" />
        </div>
      </div>

      {/* Main Content */}
      <div className="pb-16">
        {/* Introducción del producto */}
        <section className="w-full bg-white py-24">
          <div className="container mx-auto px-8">
            {/* Título principal */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">RESMAS</h1>
              <h2 className="text-4xl font-light text-emerald-600 mb-8">SUSTENTABLES</h2>
            </div>

            <div className="max-w-4xl mx-auto text-center mb-16">
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                En BlackColors, entendemos que cada elección cuenta. Por eso, desarrollamos una línea completa de resmas sustentables que combinan calidad premium con responsabilidad ambiental, para que tu empresa pueda operar de manera eficiente mientras contribuye a la preservación del planeta.
              </p>
            </div>

            <div className="max-w-4xl mx-auto text-center mb-16">
              <p className="text-xl text-emerald-700 font-medium">
                Papel Ecológico Certificado para un Futuro más Sostenible
              </p>
            </div>

            {/* Nuestra Línea de Productos */}
            <div className="text-center mb-20">
              <h3 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
                NUESTRA LÍNEA DE PRODUCTOS
              </h3>
              <div className="w-20 h-px bg-emerald-400 mx-auto"></div>
            </div>

          {/* Grid de productos */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* Resma A4 Executive */}
            <div className="space-y-6 bg-green-50/30 rounded-3xl p-8 border border-green-100/50 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="w-full h-48 rounded-2xl overflow-hidden mb-6">
                <img 
                  src="/images/resmas/A4-executive.webp" 
                  alt="Resma A4 Executive" 
                  className="w-full h-full object-contain bg-white"
                />
              </div>
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="text-2xl font-medium text-gray-900 text-center">
                📄 Resma A4 Executive
              </h4>
              <p className="text-gray-600 leading-relaxed font-light text-center">
                Papel de alta calidad formato A4, ideal para documentos oficiales, presentaciones e impresiones de uso diario. Fabricado con fibras recicladas y procesos eco-friendly que garantizan excelente blancura y resistencia.
              </p>
            </div>

            {/* Resma Oficio Executive */}
            <div className="space-y-6 bg-blue-50/30 rounded-3xl p-8 border border-blue-100/50 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="w-full h-48 rounded-2xl overflow-hidden mb-6">
                <img 
                  src="/images/resmas/oficio-executive.webp" 
                  alt="Resma Oficio Executive" 
                  className="w-full h-full object-contain bg-white"
                />
              </div>
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Package className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="text-2xl font-medium text-gray-900 text-center">
                📋 Resma Oficio Executive
              </h4>
              <p className="text-gray-600 leading-relaxed font-light text-center">
                Formato oficio perfecto para contratos, informes legales y documentación empresarial. Ofrece mayor superficie de impresión manteniendo los más altos estándares de calidad y sostenibilidad ambiental.
              </p>
            </div>

            {/* Resmas NAT */}
            <div className="space-y-6 bg-purple-50/30 rounded-3xl p-8 border border-purple-100/50 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="w-full h-48 rounded-2xl overflow-hidden mb-6">
                <img 
                  src="/images/resmas/nat-resmas.webp" 
                  alt="Resmas NAT - 100% Caña de Azúcar" 
                  className="w-full h-full object-contain bg-white"
                />
              </div>
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TreePine className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="text-2xl font-medium text-gray-900 text-center">
                🌱 Resmas NAT
              </h4>
              <p className="text-gray-600 leading-relaxed font-light text-center">
                Papel revolucionario 100% caña de azúcar, libre de fibra de árbol y blanqueadores químicos. Certificado por norma IRAM 3134 y Producto Yungas, con huella de carbono casi neutral. La misma calidad de impresión que las hojas convencionales, cuidando el medio ambiente.
              </p>
            </div>
            </div>
          </div>
        </section>
      </div>

      {/* Sección NAT - Tecnología Innovadora */}
      <section className="w-full bg-gradient-to-br from-amber-50/20 to-yellow-50/10 py-24">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Imagen de NAT */}
            <div className="relative">
              <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/resmas/nat-resmas.webp" 
                  alt="Papel NAT - 100% Caña de Azúcar" 
                  className="w-full h-full object-contain bg-white"
                />
              </div>
            </div>

            {/* Contenido sobre NAT */}
            <div className="max-w-2xl space-y-8">
              <h3 className="text-4xl font-light text-gray-900 tracking-tight">
                NAT: REVOLUCIÓN EN PAPEL SUSTENTABLE
              </h3>
              <div className="w-20 h-px bg-amber-400"></div>
              
              <div className="space-y-6">
                <div className="bg-white/70 rounded-2xl p-6 border border-amber-100">
                  <h4 className="text-xl font-medium text-gray-900 mb-3 flex items-center">
                    🌾 100% Caña de Azúcar
                  </h4>
                  <p className="text-gray-600 leading-relaxed font-light">
                    Papel completamente libre de fibra de árbol, elaborado exclusivamente con caña de azúcar. Una alternativa revolucionaria que preserva nuestros bosques.
                  </p>
                </div>

                <div className="bg-white/70 rounded-2xl p-6 border border-amber-100">
                  <h4 className="text-xl font-medium text-gray-900 mb-3 flex items-center">
                    🏆 Certificaciones de Excelencia
                  </h4>
                  <p className="text-gray-600 leading-relaxed font-light">
                    Certificado por norma <strong>IRAM 3134</strong> y con certificación <strong>Producto Yungas</strong>, garantizando los más altos estándares de calidad y sustentabilidad.
                  </p>
                </div>

                <div className="bg-white/70 rounded-2xl p-6 border border-amber-100">
                  <h4 className="text-xl font-medium text-gray-900 mb-3 flex items-center">
                    🌍 Huella de Carbono Casi Neutral
                  </h4>
                  <p className="text-gray-600 leading-relaxed font-light">
                    Libre de blanqueadores químicos y con un proceso de producción que minimiza el impacto ambiental, manteniendo la misma calidad de impresión que las hojas convencionales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso Innovador NAT */}
      <section className="w-full bg-white py-24">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
              TECNOLOGÍA INNOVADORA NAT
            </h3>
            <div className="w-20 h-px bg-amber-400 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-amber-50/50 to-yellow-50/30 rounded-3xl p-12 border border-amber-100/50">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Recycle className="w-10 h-10 text-amber-600" />
                </div>
                <h4 className="text-2xl font-medium text-gray-900 mb-4">
                  Proceso de Reutilización Revolucionario
                </h4>
              </div>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light text-center">
                <p>
                  La producción del papel NAT se basa en una <strong>tecnología innovadora</strong> que transforma la industria papelera tradicional.
                </p>
                <p className="text-xl text-amber-700 font-medium">
                  Nuestro proceso permite reutilizar el agua y la fibra de caña hasta <strong>seis veces</strong>
                </p>
                <p>
                  Esta metodología revolucionaria no solo reduce drasticamente el desperdicio de recursos, sino que también minimiza el consumo de agua y energía, creando un ciclo de producción verdaderamente sustentable.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">6x</div>
                  <div className="text-sm text-gray-600">Reutilización de recursos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">0%</div>
                  <div className="text-sm text-gray-600">Fibra de árbol</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">100%</div>
                  <div className="text-sm text-gray-600">Caña de azúcar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Por qué elegir nuestras resmas sustentables? */}
      <section className="w-full bg-gradient-to-br from-green-50/20 to-emerald-50/10 py-24">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
              ¿POR QUÉ ELEGIR NUESTRAS RESMAS SUSTENTABLES?
            </h3>
            <div className="w-20 h-px bg-emerald-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto">
                <Recycle className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="text-lg font-medium text-gray-900">100% Libre de Árboles</h4>
              <p className="text-sm text-gray-600">NAT: fabricado exclusivamente con caña de azúcar, preservando nuestros bosques y reduciendo significativamente el impacto ambiental.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="text-lg font-medium text-gray-900">Certificación IRAM 3134</h4>
              <p className="text-sm text-gray-600">Certificado por norma IRAM 3134 y Producto Yungas, garantizando procesos sustentables y calidad premium.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="text-lg font-medium text-gray-900">Calidad Premium</h4>
              <p className="text-sm text-gray-600">Excelente blancura, resistencia y compatibilidad con todo tipo de impresoras.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto">
                <Leaf className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="text-lg font-medium text-gray-900">Sin Blanqueadores Químicos</h4>
              <p className="text-sm text-gray-600">NAT: proceso libre de blanqueadores químicos y cloro elemental, protegiendo ecosistemas acuáticos y la salud.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="text-lg font-medium text-gray-900">Larga Durabilidad</h4>
              <p className="text-sm text-gray-600">Papel resistente al paso del tiempo, ideal para archivos y documentos importantes.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="text-lg font-medium text-gray-900">Responsabilidad Social</h4>
              <p className="text-sm text-gray-600">Cada compra apoya cadenas de reciclaje y programas de sustentabilidad local.</p>
            </div>
          </div>
        </div>
      </section>

      
      <Footer />
    </div>
  );
};

export default ProductosResmas;
