import React from 'react';
import { Recycle, MapPin, Leaf } from 'lucide-react';

// Componente de círculo de sustentabilidad con diseño tipo reciclaje
const CircularSustainabilityIcon = ({ icon: Icon, title, description, position }) => {
  const positionClasses = {
    top: 'absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
    bottomLeft: 'absolute bottom-8 left-8 transform -translate-x-1/2 translate-y-1/2',
    bottomRight: 'absolute bottom-8 right-8 transform translate-x-1/2 translate-y-1/2'
  };

  return (
    <div className={`${positionClasses[position]} text-center`}>
      <div className="bg-white rounded-full p-6 shadow-lg border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl">
        <div className="w-16 h-16 mx-auto mb-4 bg-green-50 rounded-full flex items-center justify-center">
          <Icon className="text-green-600 text-2xl" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2 max-w-48">
          {title}
        </h3>
        <p className="text-gray-600 text-sm max-w-52 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

// Componente de flecha curva
const CurvedArrow = ({ type }) => {
  const arrowPaths = {
    topToBottomLeft: "M 50 10 A 35 35 0 0 0 18 65",
    bottomLeftToBottomRight: "M 18 65 A 35 35 0 0 0 82 65", 
    bottomRightToTop: "M 82 65 A 35 35 0 0 0 50 10"
  };

  return (
    <svg 
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 100 100"
    >
      <defs>
        <marker id={`arrowhead-${type}`} markerWidth="10" markerHeight="7" 
         refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#16a34a" />
        </marker>
      </defs>
      <path
        d={arrowPaths[type]}
        stroke="#16a34a"
        strokeWidth="2"
        fill="none"
        strokeDasharray="5,5"
        markerEnd={`url(#arrowhead-${type})`}
        className="animate-pulse"
      />
    </svg>
  );
};

const features = [
  {
    title: 'Gestión Responsable de Residuos',
    description: 'Recolectamos y transformamos todos los residuos de impresión, reduciendo el impacto ambiental.',
    icon: Recycle,
    position: 'top'
  },
  {
    title: 'Trazabilidad Transparente',
    description: 'Seguimiento completo del ciclo de vida de cada producto desde su origen hasta su disposición final.',
    icon: MapPin,
    position: 'bottomLeft'
  },
  {
    title: 'Impacto Ambiental Positivo',
    description: 'Productos diseñados para el cuidado del medioambiente con materiales reciclables y procesos sostenibles.',
    icon: Leaf,
    position: 'bottomRight'
  }
];

const SustentabilidadSection = () => {
	return (
		<section
			className="bg-gradient-to-br from-green-50 to-white py-20 px-4 md:px-8 lg:px-20"
			id="sustentabilidad"
		>
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
						🌱 Compromiso con la Sustentabilidad
					</h2>
					<p className="text-gray-600 text-lg max-w-3xl mx-auto">
						Nuestro enfoque circular garantiza un impacto positivo en el medioambiente a través de procesos responsables y sostenibles.
					</p>
				</div>

				{/* Contenedor circular principal */}
				<div className="flex justify-center">
					<div className="relative w-[500px] h-[500px] md:w-[600px] md:h-[600px]">
						{/* Círculo de referencia invisible para guía */}
						<div className="absolute inset-8 rounded-full border border-green-100 opacity-30"></div>
						
						{/* Círculo central decorativo */}
						<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-green-100 rounded-full flex items-center justify-center shadow-lg">
							<div className="text-2xl">♻️</div>
						</div>

						{/* Flechas curvas conectoras */}
						<CurvedArrow type="topToBottomLeft" />
						<CurvedArrow type="bottomLeftToBottomRight" />
						<CurvedArrow type="bottomRightToTop" />

						{/* Elementos de sustentabilidad */}
						{features.map((feature, index) => (
							<CircularSustainabilityIcon
								key={index}
								icon={feature.icon}
								title={feature.title}
								description={feature.description}
								position={feature.position}
							/>
						))}
					</div>
				</div>

				{/* Texto adicional */}
				<div className="text-center mt-16">
					<p className="text-gray-700 text-lg font-medium">
						Un ciclo continuo de responsabilidad ambiental
					</p>
				</div>
			</div>
		</section>
	);
  const [activeSection, setActiveSection] = useState(-1);

  return (
    <section className="py-32 relative overflow-hidden" style={{ background: '#2d472f' }}>
      <svg className="absolute left-0 top-0 w-full h-40 z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill="#2d472f" points="0,0 100,0 100,70 70,20 0,30" />
      </svg>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-8 md:mb-20">
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-8" style={{ color: '#d7f2db' }}>
            Compromiso con la Sustentabilidad
          </h2>
          <div className="w-32 h-2 mx-auto rounded-full" style={{ background: 'linear-gradient(135deg, #c3e8a4, #2f9e44)' }}></div>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative w-[600px] h-[600px] max-w-full max-h-[70vw]">
            {/* Central Logo */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full flex items-center justify-center z-30 shadow-2xl bg-white/80">
              <img src="/images/logo-mejorado-removebg-preview.png" alt="Logo Black Colors" className="w-24 h-24 object-contain" />
            </div>
            {/* 4 Circular Sections */}
            {pilaresSustentabilidad.map((pilar, index) => {
              const isActive = activeSection === index;
              const angle = (index * 90) - 45; // Start from top-right
              const radius = 250; // Más grande
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              return (
                <div
                  key={index}
                  className="absolute w-96 h-96 cursor-pointer transition-all duration-700 ease-out"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) ${isActive ? 'scale(1.12)' : 'scale(1)'}`,
                    zIndex: isActive ? 20 : 10
                  }}
                  onMouseEnter={() => setActiveSection(index)}
                  onMouseLeave={() => setActiveSection(-1)}
                >
                  <div 
                    className="w-full h-full rounded-full flex flex-col items-center justify-center text-center p-12 shadow-2xl transition-all duration-700 backdrop-blur-sm border-2"
                    style={{
                      background: isActive 
                        ? `linear-gradient(135deg, ${pilar.color}ee, rgba(47,158,68,0.9))` 
                        : `linear-gradient(135deg, ${pilar.color}cc, rgba(61,123,79,0.8))`,
                      borderColor: isActive ? '#d7f2db' : 'transparent',
                      boxShadow: isActive 
                        ? `0 20px 40px ${pilar.color}66, 0 0 40px ${pilar.color}44` 
                        : '0 10px 30px rgba(0,0,0,0.3)',
                      filter: isActive ? 'brightness(1.2)' : 'brightness(1)'
                    }}
                  >
                    <div className={`mb-8 transition-all duration-300 ${isActive ? 'scale-150' : 'scale-125'}`} style={{ color: index === 1 || index === 2 ? '#0f3d2e' : '#d7f2db' }}>
                      {React.cloneElement(pilar.icon, { className: 'w-20 h-20' })}
                    </div>
                    <h3 className={`font-bold text-3xl mb-6 leading-tight transition-all duration-300 ${isActive ? 'scale-110' : ''}`} style={{ color: index === 1 || index === 2 ? '#0f3d2e' : '#d7f2db' }}>
                      {pilar.titulo}
                    </h3>
                    <p className={`text-lg leading-relaxed transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-85'}`} style={{ color: index === 1 || index === 2 ? '#0f3d2e' : '#c3e8a4' }}>
                      {pilar.descripcion}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <svg className="absolute left-0 bottom-0 w-full h-40 z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill="#2d472f" points="0,100 0,30 30,80 100,60 100,100" />
      </svg>
    </section>
  );
};

export default SustentabilidadSection;