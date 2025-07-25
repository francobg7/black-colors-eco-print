const clientes = [
  { name: "Garden", logo: "/images/garden-logo.png" },
  { name: "Cavallaro", logo: "/images/cavallaro-logo.png" },
  { name: "Inpaco", logo: "/images/inpaco-logo.png" },
  { name: "EcoTech", logo: "/images/ecotech-logo.jpg" },
  { name: "GreenSolutions", logo: "/images/greensolutions-logo.png" },
  { name: "NatureCorp", logo: "/images/naturecorp-logo.png" },
  { name: "BioTech", logo: "/images/biotech-logo.png" },
  { name: "EcoLife", logo: "/images/ecolife-logo.png" }
];

const ClientesSection = () => (
  <section className="py-16 bg-white overflow-hidden">
    <div className="max-w-2xl mx-auto text-center mb-10">
      <h2 className="text-4xl sm:text-5xl lg:text-4xl font-bold mb-8 text-[#174C3C] text-center">
        Clientes que Confían en Nosotros
      </h2>
      <p className="text-xl text-[#388E3C] text-center mb-8">
        Empresas líderes que han confiado en Black Colors para transformar su impresión en una acción sustentable.
      </p>
    </div>
    <div className="relative">
      <div className="flex animate-[scroll_20s_linear_infinite]">
        {clientes.map((cliente, index) => (
          <div key={index} className="flex-shrink-0 mx-8">
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
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}
    </style>
  </section>
);

export default ClientesSection; 