import React, { useEffect } from 'react';
import { useWindowSize } from '../hooks/useWindowSize'; // Asegúrate de crear este hook

const pilaresSustentabilidad = [
	{
		titulo: 'Gestión de Residuos',
		descripcion: 'Recolección y transformación responsable de todos los residuos de impresión.',
		img: '/images/pieza-1.png',
		posicion: { x: '-50%', y: '-52%' },
		textoPos: { top: '-20%', left: '-45%' }
	},
	{
		titulo: 'Trazabilidad',
		descripcion: 'Productos con origen responsable y seguimiento completo del ciclo de vida.',
		img: '/images/pieza-2.png',
		posicion: { x: '50%', y: '-52%' },
		textoPos: { top: '-20%', right: '-55%' }
	},
	{
		titulo: 'Gestión Final Positiva',
		descripcion: 'Únicos en Paraguay con gestión final ambientalmente responsable de residuos.',
		img: '/images/pieza-3.png',
		posicion: { x: '-50%', y: '52%' },
		textoPos: { bottom: '-30%', left: '-40%' }
	},
	{
		titulo: 'ISO 14001',
		descripcion: 'Ayudamos a nuestros clientes a alcanzar esta certificación ambiental.',
		img: '/images/pieza-4.png',
		posicion: { x: '50%', y: '52%' },
		textoPos: { bottom: '-15%', right: '-55%' }
	}
];

const SustentabilidadSection = () => {
	const { width } = useWindowSize();
	const isMobile = width < 768;
	
	// Añadir una clase personalizada de animación lenta al tailwind
	useEffect(() => {
		const style = document.createElement('style');
		style.innerHTML = `
			@keyframes pulse-slow {
				0%, 100% { opacity: 0.7; }
				50% { opacity: 0.3; }
			}
			.animate-pulse-slow {
				animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
			}
		`;
		document.head.appendChild(style);
		
		// Cleanup function
		return () => {
			document.head.removeChild(style);
		};
	}, []);

	return (
		<section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
		{/* SVG de transición desde la sección de leasing (color verde) */}
		<svg
			className="absolute left-0 top-0 w-full h-40 z-10"
			viewBox="0 0 100 100"
			preserveAspectRatio="none"
		>
			<polygon fill="#4e8759" points="0,0 100,0 100,70 70,20 0,30" />
		</svg>

			{/* Imagen de fondo - sin superposición verde */}
			<div 
				className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
				style={{ 
					backgroundImage: 'url(/images/background-1.jpg)',
					backgroundAttachment: 'fixed', // Efecto de paralaje para mayor impacto visual
				}}
			>
				{/* Superposición neutra para mejorar la legibilidad sin alterar los colores */}
				<div className="absolute inset-0 bg-black/20"></div>
			</div>
			
			{/* Elementos decorativos - reducir opacidad para que no compitan con la imagen */}
			<div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-5">
				<div className="absolute w-64 h-64 rounded-full bg-green-500/20 -top-20 -left-20"></div>
				<div className="absolute w-96 h-96 rounded-full bg-green-500/10 bottom-10 right-10"></div>
				<div className="absolute w-40 h-40 rounded-full bg-green-500/20 top-1/2 left-1/4"></div>
			</div>
			
			<div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 max-w-7xl">
				<div className="flex flex-col lg:flex-row items-center lg:items-center justify-center gap-6 md:gap-8">
					{/* Columna izquierda: Título grande y contenido */}
					<div className="w-full md:w-2/5 lg:w-2/5  flex-col items-center lg:items-start text-center lg:text-left pl-0 mb-8 lg:mb-12">
						<h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 text-green-950">
							Compromiso con la <span className="text-green-700">Sustentabilidad</span>
						</h2>
						<div className="w-24 h-1 bg-green-700 mb-6 mx-auto lg:mx-0"></div>
						<p className="text-xl md:text-2xl lg:text-2xl text-green-800 leading-relaxed max-w-md mb-6">
							En Black Colors nos comprometemos con prácticas sostenibles para cuidar el medio ambiente. Nuestro enfoque integral asegura que cada etapa de nuestro proceso sea ambientalmente responsable.
						</p>
						<p className="text-xl md:text-2xl lg:text-2xl text-green-800 leading-relaxed max-w-md">
							Trabajamos con nuestros clientes para implementar soluciones que reducen el impacto ambiental y promueven un futuro más verde para todos.
						</p>
					</div>

					{/* Columna derecha: Mostrar círculo en desktop, cards en mobile */}
					{isMobile ? (
						// Mobile: Mostrar cards en grid
						<div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
							{pilaresSustentabilidad.map((pilar, index) => (
								<div key={index} className="bg-white/70 rounded-lg p-4 shadow-md hover:shadow-lg transition-all">
									<div className="flex items-center mb-3">
										<div className="w-12 h-12 mr-3 flex-shrink-0">
											<img src={pilar.img} alt={pilar.titulo} className="w-full h-full object-contain" />
										</div>
										<h3 className="text-lg font-bold text-green-800">{pilar.titulo}</h3>
									</div>
									<p className="text-sm text-green-700">{pilar.descripcion}</p>
								</div>
							))}
						</div>
					) : (
						// Desktop: Mantener el círculo
						<div className="relative w-full md:w-[550px] lg:w-[600px] h-[500px] md:h-[550px] lg:h-[600px] max-w-full mx-auto md:mx-0 md:-mt-12">
							{/* Círculo decorativo de fondo */}
							<div className="absolute w-[85%] h-[85%] md:w-[90%] md:h-[90%] rounded-full border-4 border-green-200/30 top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
							
							{/* Círculo central */}
							<div className="absolute top-[57%] left-[70%] w-26 h-26 md:w-28 md:h-28 lg:w-42 lg:h-42 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white/80 rounded-full p-3 shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-white">
								<img
									src="/images/reciclaje-icon.png"
									alt="Logo central"
									className="w-full h-full object-contain"
								/>
							</div>

							{/* Piezas del círculo */}
							{pilaresSustentabilidad.map((pilar, index) => (
								<React.Fragment key={index}>
									<div
										className="absolute cursor-pointer group"
										style={{
											left: '48%',
											top: '36%',
											transform: `translate(${pilar.posicion.x}, ${pilar.posicion.y})`,
											width: '44%',
											height: '42%',
											zIndex: 10
										}}
									>
										<img
											src={pilar.img}
											alt={pilar.titulo}
											className="w-full h-full object-contain transition-all duration-300 filter hover:brightness-110 hover:drop-shadow-lg hover:scale-110 group-hover:scale-110"
										/>
										
										{/* Texto externo */}
										<div
											className="absolute w-full md:w-48 max-w-[80%] md:max-w-[70%] transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:transform group-hover:scale-105"
											style={{
												...pilar.textoPos,
												color: '#0f3d2e',
												zIndex: 30
											}}
										>
											<h3 className="text-base md:text-lg font-bold mb-0 md:mb-1 group-hover:text-green-700 transition-colors drop-shadow-lg">{pilar.titulo}</h3>
											<p className="text-[19px] md:text-m leading-tight md:leading-snug text-green-800 drop-shadow-lg hidden md:block">{pilar.descripcion}</p>
										</div>
									</div>
								</React.Fragment>
							))}
						</div>
					)}
				</div>
			</div>
      <svg className="absolute left-0 bottom-0 w-full h-32" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ zIndex: 2 }}>
      <polygon fill="#fff" points="0,100 0,30 30,80 100,60 100,100" />
    </svg>
		</section>
	);
};

export default SustentabilidadSection;
