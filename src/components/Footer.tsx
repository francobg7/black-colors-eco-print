import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => (
  <footer className="py-16 bg-black">
    <div className="container mx-auto px-4 sm:px-6 md:px-8">
      <div className="grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <h3 className="text-3xl font-bold mb-4 text-white">Black Colors</h3>
          <p className="mb-6 leading-relaxed text-lg text-gray-300">
            Líderes en soluciones de impresión sustentable con 18 años de experiencia en el mercado.
          </p>
          <div className="flex space-x-4">
            {['FB', 'IG', 'WA'].map((social, index) => (
              <div key={index} className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-500 flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg">
                <span className="font-bold text-white">{social}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Contacto</h4>
          <div className="space-y-3">
            {[
              { icon: Phone, text: "+595 21 123-456" },
              { icon: Mail, text: "info@blackcolors.py" },
              { icon: MapPin, text: "Asunción, Paraguay" }
            ].map((item, index) => (
              <div key={index} className="flex items-center group hover:text-green-400 transition-colors cursor-pointer">
                <item.icon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-green-400 group-hover:scale-110 transition-all" />
                <span className="text-gray-300 group-hover:text-green-400">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Enlaces</h4>
          <ul className="space-y-2">
            {['Productos', 'Leasing', 'Sustentabilidad', 'Contacto'].map((link, index) => (
              <li key={index}>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-2 transform inline-block">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8 text-center">
        <p className="text-gray-400">&copy; 2025 Black Colors. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
);

export default Footer; 