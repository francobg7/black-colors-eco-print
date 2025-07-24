import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => (
  <footer className="py-16" style={{ backgroundColor: '#2d472f' }}>
    <div className="container mx-auto px-4 sm:px-6 md:px-8">
      <div className="grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="mb-4">
            <img
              src="/images/logo-mejorado-removebg-preview.png"
              alt="Black Colors Logo"
              className="h-24 w-auto"
            />
          </div>
          <p className="mb-6 leading-relaxed text-lg" style={{ color: '#c3e8a4' }}>
            Líderes en soluciones de impresión sustentable con 18 años de experiencia en el mercado.
          </p>
          <div className="flex space-x-4">
            {['FB', 'IG', 'LI', 'WA'].map((social, index) => (
              <div key={index} className="w-12 h-12 rounded-full hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg flex items-center justify-center"
                   style={{ backgroundColor: '#3d7b4f' }}
                   onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2f9e44'}
                   onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3d7b4f'}>
                <span className="font-bold" style={{ color: '#d7f2db' }}>{social}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4" style={{ color: '#d7f2db' }}>Contacto</h4>
          <div className="space-y-3">
            {[
              { icon: Phone, text: "+595 21 123-456" },
              { icon: Mail, text: "info@blackcolors.py" },
              { icon: MapPin, text: "Asunción, Paraguay" }
            ].map((item, index) => (
              <div key={index} className="flex items-center group hover:text-green-400 transition-colors cursor-pointer">
                <item.icon className="w-5 h-5 mr-3 group-hover:scale-110 transition-all" style={{ color: '#c3e8a4' }} />
                <span style={{ color: '#c3e8a4' }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4" style={{ color: '#d7f2db' }}>Enlaces</h4>
          <ul className="space-y-2">
            {['Productos', 'Leasing', 'Sustentabilidad', 'Contacto'].map((link, index) => (
              <li key={index}>
                <a href="#" className="transition-colors duration-300 hover:translate-x-2 transform inline-block"
                   style={{ color: '#c3e8a4' }}
                   onMouseEnter={(e) => e.currentTarget.style.color = '#d7f2db'}
                   onMouseLeave={(e) => e.currentTarget.style.color = '#c3e8a4'}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t mt-12 pt-8 text-center" style={{ borderColor: '#3d7b4f' }}>
        <p style={{ color: '#c3e8a4' }}>&copy; 2024 Black Colors. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
);

export default Footer; 