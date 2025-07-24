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
};

export default SustentabilidadSection;