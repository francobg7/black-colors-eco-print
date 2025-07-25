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
  <section className="py-16 bg-gray-200 overflow-hidden">
    <div className="relative">
      <div className="flex animate-marquee">
        {[...clientes, ...clientes].map((cliente, index) => (
          <div key={index} className="flex-shrink-0 mx-8 w-32 h-16 flex items-center justify-center">
            <span className="sr-only">{cliente.name} logo.</span>
            <img 
              src={cliente.logo} 
              alt={`${cliente.name} logo`}
              className="max-w-full max-h-full object-contain filter grayscale opacity-70 hover:opacity-100 transition-all duration-300"
              onError={(e) => {
                // Fallback to company name if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling!.classList.remove('hidden');
              }}
            />
            <span className="hidden text-gray-600 font-medium text-sm">
              {cliente.name}
            </span>
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