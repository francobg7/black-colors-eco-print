const clientes = [
  { name: "Garden", logo: "/images/garden-logo.png" },
  { name: "Cavallaro", logo: "/images/cavallaro-logo.png" },
  { name: "Inpaco", logo: "/images/inpaco-logo.png" },
  { name: "EcoTech", logo: "/images/ecotech-logo.jpg" },
  { name: "GreenSolutions", logo: "/images/greensolutions-logo.png" },
  { name: "NatureCorp", logo: "/images/naturecorp-logo.png" },
  { name: "BioTech", logo: "/images/biotech-logo.png" },
  { name: "EcoLife", logo: "/images/ecolife-logo.png" },
  { name: "EcoPrint", logo: "/images/ecoprint-logo.png" },
  { name: "GreenPrint", logo: "/images/greenprint-logo.png" },
  { name: "BioPrint", logo: "/images/bioprint-logo.png" },
  { name: "NaturePrint", logo: "/images/natureprint-logo.png" },
  { name: "EcoCorp", logo: "/images/ecocorp-logo.png" },
  { name: "GreenCorp", logo: "/images/greencorp-logo.png" },
  { name: "BioCorp", logo: "/images/biocorp-logo.png" },
  { name: "NatureTech", logo: "/images/naturetech-logo.png" },
  { name: "EcoSolutions", logo: "/images/ecosolutions-logo.png" },
  { name: "GreenTech", logo: "/images/greentech-logo.png" },
  { name: "BioSolutions", logo: "/images/biosolutions-logo.png" },
  { name: "NatureLife", logo: "/images/naturelife-logo.png" }
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
    <div className="relative">
      {/* Primer carrusel */}
      <div className="flex animate-[scroll_30s_linear_infinite]">
        {clientes.map((cliente, index) => (
          <div key={index} className="flex-shrink-0 mx-6">
            <img
              src={cliente.logo}
              alt={cliente.name}
              className="h-16 w-auto filter grayscale opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
      {/* Segundo carrusel (duplicado para efecto continuo) */}
      <div className="flex animate-[scroll2_30s_linear_infinite] absolute top-0">
        {clientes.map((cliente, index) => (
          <div key={`duplicate-${index}`} className="flex-shrink-0 mx-6">
            <img
              src={cliente.logo}
              alt={cliente.name}
              className="h-16 w-auto filter grayscale opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
    <style>
      {`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        @keyframes scroll2 {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll2 {
          animation: scroll2 30s linear infinite;
        }
      `}
    </style>
  </section>
);

export default ClientesSection; 