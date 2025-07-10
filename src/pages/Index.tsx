
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Recycle, Shield, Award, Printer, Package, FileText, Users, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

const Index = () => {
  const productos = [
    {
      icon: <Printer className="w-8 h-8 text-green-600" />,
      titulo: "Impresoras",
      descripcion: "Principalmente de marca Brother, disponibles para venta y leasing con mantenimiento incluido."
    },
    {
      icon: <Package className="w-8 h-8 text-green-600" />,
      titulo: "Cartuchos y Toners",
      descripcion: "Originales, genéricos y XL para las principales marcas del mercado."
    },
    {
      icon: <FileText className="w-8 h-8 text-green-600" />,
      titulo: "Resmas Sustentables",
      descripcion: "Papel marca Nat con certificación de origen responsable y trazabilidad ambiental."
    }
  ];

  const compromisosData = [
    {
      icon: <Recycle className="w-8 h-8 text-white" />,
      titulo: "Gestión de Residuos",
      descripcion: "Recolección y transformación responsable de todos los residuos de impresión."
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      titulo: "Trazabilidad",
      descripcion: "Productos con origen responsable y seguimiento completo del ciclo de vida."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      titulo: "Gestión Final Positiva",
      descripcion: "Únicos en Paraguay con gestión final ambientalmente responsable de residuos."
    },
    {
      icon: <Award className="w-8 h-8 text-white" />,
      titulo: "ISO 14001",
      descripcion: "Ayudamos a nuestros clientes a alcanzar esta certificación ambiental."
    }
  ];

  const clientes = [
    "Garden", "Cavallaro", "Inpaco", "EcoTech", "GreenSolutions", "NatureCorp"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Black Colors: <span className="text-green-600">Impresión Sustentable</span> para un Futuro Verde
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Convertí tu impresión en una acción por el planeta con nuestras soluciones integrales de impresión sustentable y economía circular.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
                  Conocer Productos
                </Button>
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg">
                  Servicio de Leasing
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843" 
                alt="Sostenibilidad y tecnología"
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Quiénes Somos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Quiénes Somos</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Con <span className="font-semibold text-green-600">18 años de experiencia</span> en el mercado, Black Colors se ha consolidado como líder en soluciones de impresión. Nuestra filosofía es clara:
                </p>
                <blockquote className="text-2xl font-medium text-green-700 italic border-l-4 border-green-500 pl-6 my-8">
                  "Nunca damos un no, resolvemos lo que el cliente necesita"
                </blockquote>
                <p>
                  Grandes empresas como <span className="font-semibold">Garden, Cavallaro, Inpaco</span> y muchas más confían en nuestra trayectoria y compromiso con la excelencia.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86" 
                alt="Equipo Black Colors"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">18</div>
                <div className="text-sm">Años de experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros Productos */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Productos</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {productos.map((producto, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                <CardContent className="p-8 text-center">
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    {producto.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{producto.titulo}</h3>
                  <p className="text-gray-600 leading-relaxed">{producto.descripcion}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Servicio de Leasing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Servicio de Leasing Sustentable</h2>
            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
              Nuestro servicio de leasing incluye alquiler de equipos con mantenimiento completo y reposición de insumos.
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Mantenimiento Incluido</h4>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Reposición de Insumos</h4>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Garantía Total</h4>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Sustentable</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compromiso con la Sustentabilidad */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Compromiso con la Sustentabilidad</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {compromisosData.map((compromiso, index) => (
              <div key={index} className="text-center">
                <div className="bg-white bg-opacity-20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                  {compromiso.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{compromiso.titulo}</h3>
                <p className="text-green-100 leading-relaxed">{compromiso.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Clientes que Confían en Nosotros</h2>
            <p className="text-xl text-gray-600">
              Grandes empresas confían en nuestras soluciones de impresión sustentable. Algunos de nuestros clientes más destacados:
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientes.map((cliente, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-2xl font-bold text-gray-800">{cliente}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Black Colors</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Líderes en soluciones de impresión sustentable con 18 años de experiencia en el mercado.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">FB</span>
                </div>
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">IG</span>
                </div>
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">LI</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-green-400" />
                  <span className="text-gray-400">+595 21 123-456</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-green-400" />
                  <span className="text-gray-400">info@blackcolors.py</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-green-400" />
                  <span className="text-gray-400">Asunción, Paraguay</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition-colors">Productos</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Leasing</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Sustentabilidad</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Contacto</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Black Colors. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
