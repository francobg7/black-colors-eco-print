
import React from 'react';
import Footer from '@/components/Footer';

const Leasing = () => {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0f3d2e 0%, #2f9e44 50%, #3d7b4f 100%)' }}>
      <div className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-8 animate-fade-in" style={{ color: '#d7f2db' }}>
            SERVICIO DE LEASING SUSTENTABLE
          </h1>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8 animate-slide-up">
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold" style={{ color: '#c3e8a4' }}>
                Innovación sin límites
              </h2>
              <p className="text-xl leading-relaxed" style={{ color: '#d7f2db' }}>
                Accedé a la tecnología más avanzada sin la inversión inicial. Nuestro servicio de leasing te permite 
                mantenerte actualizado mientras contribuís al cuidado del medio ambiente.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full mt-1" style={{ backgroundColor: '#c3e8a4' }}></div>
                  <p className="text-lg" style={{ color: '#d7f2db' }}>
                    <strong>Renovación constante:</strong> Equipos siempre actualizados
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full mt-1" style={{ backgroundColor: '#c3e8a4' }}></div>
                  <p className="text-lg" style={{ color: '#d7f2db' }}>
                    <strong>Gestión integral:</strong> Mantenimiento y soporte incluido
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full mt-1" style={{ backgroundColor: '#c3e8a4' }}></div>
                  <p className="text-lg" style={{ color: '#d7f2db' }}>
                    <strong>Impacto cero:</strong> Reciclaje responsable garantizado
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
                  ¿Por qué elegir leasing?
                </h3>
                <div className="space-y-4 text-left">
                  <div className="p-4 rounded-xl" style={{ background: 'rgba(47, 158, 68, 0.2)' }}>
                    <h4 className="font-semibold mb-2" style={{ color: '#d7f2db' }}>Flexibilidad financiera</h4>
                    <p style={{ color: '#c3e8a4' }}>Cuotas fijas que se adaptan a tu flujo de caja</p>
                  </div>
                  <div className="p-4 rounded-xl" style={{ background: 'rgba(47, 158, 68, 0.2)' }}>
                    <h4 className="font-semibold mb-2" style={{ color: '#d7f2db' }}>Tecnología actualizada</h4>
                    <p style={{ color: '#c3e8a4' }}>Siempre tenés acceso a los últimos modelos</p>
                  </div>
                  <div className="p-4 rounded-xl" style={{ background: 'rgba(47, 158, 68, 0.2)' }}>
                    <h4 className="font-semibold mb-2" style={{ color: '#d7f2db' }}>Responsabilidad ambiental</h4>
                    <p style={{ color: '#c3e8a4' }}>Contribuís a la economía circular</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="text-center mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-12" style={{ color: '#c3e8a4' }}>
              Beneficios del Leasing Sustentable
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl backdrop-blur-sm border hover-lift" style={{ 
                background: 'rgba(195, 232, 164, 0.1)',
                borderColor: 'rgba(195, 232, 164, 0.3)'
              }}>
                <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#c3e8a4' }}>
                  <span className="text-2xl" style={{ color: '#0f3d2e' }}>💚</span>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#d7f2db' }}>Cero Inversión Inicial</h3>
                <p style={{ color: '#c3e8a4' }}>Comenzá a usar equipos de última generación sin desembolso inicial</p>
              </div>
              
              <div className="p-8 rounded-2xl backdrop-blur-sm border hover-lift" style={{ 
                background: 'rgba(195, 232, 164, 0.1)',
                borderColor: 'rgba(195, 232, 164, 0.3)'
              }}>
                <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#c3e8a4' }}>
                  <span className="text-2xl" style={{ color: '#0f3d2e' }}>🔧</span>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#d7f2db' }}>Mantenimiento Incluido</h3>
                <p style={{ color: '#c3e8a4' }}>Soporte técnico completo durante toda la vigencia del contrato</p>
              </div>
              
              <div className="p-8 rounded-2xl backdrop-blur-sm border hover-lift" style={{ 
                background: 'rgba(195, 232, 164, 0.1)',
                borderColor: 'rgba(195, 232, 164, 0.3)'
              }}>
                <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#c3e8a4' }}>
                  <span className="text-2xl" style={{ color: '#0f3d2e' }}>♻️</span>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#d7f2db' }}>Gestión Final Responsable</h3>
                <p style={{ color: '#c3e8a4' }}>Nos hacemos cargo del reciclaje y disposición final adecuada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Leasing;
