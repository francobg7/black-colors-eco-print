const clientes = [
  { name: "Garden", logo: "/images/logos/garden-logo.png" },
  { name: "Cavallaro", logo: "/images/logos/cavallaro-logo.png" },
  { name: "Inpaco", logo: "/images/logos/inpaco-logo.png" },
  { name: "EcoTech", logo: "/images/logos/ecotech-logo.jpg" },
  { name: "GreenSolutions", logo: "/images/logos/greensolutions-logo.png" },
  { name: "NatureCorp", logo: "/images/logos/naturecorp-logo.png" },
  { name: "BioTech", logo: "/images/logos/biotech-logo.png" },
  { name: "EcoLife", logo: "/images/logos/ecolife-logo.png" },
  { name: "EcoPrint", logo: "/images/logos/ecoprint-logo.png" },
  { name: "GreenPrint", logo: "/images/logos/greenprint-logo.png" }
];

const ClientesSection = () => (
  <section className="py-16 bg-white overflow-hidden relative">
    <svg className="absolute left-0 top-0 w-full h-40 z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon fill="#fff" points="0,0 100,0 100,70 70,20 0,30" />
    </svg>
    <div className="max-w-2xl mx-auto text-center mb-10 relative z-10">
      <h2 className="text-4xl sm:text-5xl lg:text-4xl font-bold mb-8 text-[#174C3C] text-center">
        Clientes que Confían en Nosotros
      </h2>
      <p className="text-xl text-[#388E3C] text-center mb-8">
        Empresas líderes que han confiado en Black Colors para transformar su impresión en una acción sustentable.
      </p>
    </div>
    
    {/* Contenedor del carrusel con scroll horizontal */}
    <div className="relative overflow-hidden">
      <div className="flex animate-scroll">
        {clientes.map((cliente, index) => (
          <div key={index} className="flex-shrink-0 w-32 h-20 mx-4 flex items-center justify-center">
            <img
              src={cliente.logo}
              alt={cliente.name}
              className="h-16 w-auto max-w-full filter grayscale opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
        {/* Duplicar los logos para crear el efecto infinito */}
        {clientes.map((cliente, index) => (
          <div key={`duplicate-${index}`} className="flex-shrink-0 w-32 h-20 mx-4 flex items-center justify-center">
            <img
              src={cliente.logo}
              alt={cliente.name}
              className="h-16 w-auto max-w-full filter grayscale opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
    
    <style>
      {`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}
    </style>
  </section>
);

export default ClientesSection; 