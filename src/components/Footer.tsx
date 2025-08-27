import { Phone, Mail, MapPin } from 'lucide-react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => (
  <footer className="py-16" style={{ backgroundColor: '#4e8759' }}>
    <div className="container mx-auto px-4 sm:px-6 md:px-8">
      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-2">
          <div className="mb-4">
            <img
              src="/images/logos/logo-mejorado-removebg-preview.png"
              alt="Black Colors Logo"
              className="h-24 w-auto"
            />
          </div>
          <p className="mb-6 leading-relaxed text-lg text-gray-300">
            Líderes en soluciones de impresión<br />
            sustentable con 18 años de experiencia.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/blackcolorssrl/?locale=es_LA" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-500 flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg">
              <FaFacebook className="text-white text-2xl" />
            </a>
            <a href="https://www.instagram.com/blackcolorssrl/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-500 flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg">
              <FaInstagram className="text-white text-2xl" />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=595982343128&text=Hola%2C+me+interesa+obtener+m%C3%A1s+informaci%C3%B3n+sobre+sus+productos+y+servicios+de+Black+Colors+Eco+Print.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-500 flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg">
              <FaWhatsapp className="text-white text-2xl" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Contacto</h4>
          <div className="space-y-3">
            {[
              { icon: Phone, text: "+595 982 343 128" },
              { icon: Mail, text: "mkt@blackcolors.com.py" },
              { icon: MapPin, text: "Av Cacique Lambare &, Av. Bonifacio Ovando, Lambaré" }
            ].map((item, index) => (
                              <div key={index} className="flex items-center group hover:text-green-400 transition-colors cursor-pointer">
                  <item.icon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-green-400 group-hover:scale-110 transition-all" />
                  {item.icon === MapPin ? (
                    <a 
                      href="https://www.google.com/maps/place/Black+Colors+SRL/@-25.3418949,-57.6033821,20.33z/data=!4m15!1m8!3m7!1s0x945da9a8d88b295b:0x52aa616336df2a76!2sAv.+Bonifacio+Ovando+%26+Av.+Cacique+Lambare,+110718+Lambar%C3%A9!3b1!8m2!3d-25.3417216!4d-57.6033376!16s%2Fg%2F11hb88hyyy!3m5!1s0x945da97f3b363253:0x627551064c685d6c!8m2!3d-25.3418074!4d-57.6034078!16s%2Fg%2F11ghr6tk2c?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-green-400"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-gray-300 group-hover:text-green-400">{item.text}</span>
                  )}
                </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Productos</h4>
          <ul className="space-y-2">
            <li>
              <a href="/productos/impresoras" className="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-2 transform inline-block">
                Impresoras
              </a>
            </li>
            <li>
              <a href="/productos/cartuchos" className="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-2 transform inline-block">
                Cartuchos y Tóner
              </a>
            </li>
            <li>
              <a href="/productos/resmas" className="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-2 transform inline-block">
                Resmas Sustentables
              </a>
            </li>
            <li>
              <a href="/productos/equipos" className="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-2 transform inline-block">
                Rotuladoras y Etiquetadoras
              </a>
            </li>
            <li>
              <a href="/productos/equipos" className="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-2 transform inline-block">
                UPS y Accesorios
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Servicios</h4>
          <ul className="space-y-2">
            <li>
              <a href="/servicios/tecnico" className="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-2 transform inline-block">
                Servicio Técnico
              </a>
            </li>
            <li>
              <a href="/servicios/leasing" className="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-2 transform inline-block">
                Leasing de Equipos
              </a>
            </li>
            <li>
              <a href="/servicios/diferenciados" className="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-2 transform inline-block">
                Servicios Diferenciados
              </a>
            </li>
            <li>
              <a href="/servicios/alquileres" className="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-2 transform inline-block">
                Alquileres
              </a>
            </li>
            <li>
              <a href="/transformar" className="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-2 transform inline-block">
                Proyecto Transformar
              </a>
            </li>
            <li>
              <a href="/eventos" className="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-2 transform inline-block">
                Eventos
              </a>
            </li>
            <li>
              <a href="/contacto" className="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-2 transform inline-block">
                Contacto
              </a>
            </li>
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