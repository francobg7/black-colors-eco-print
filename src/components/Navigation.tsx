
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const navItems = [
    { name: 'PRODUCTOS', path: '/productos' },
    { name: 'LEASING', path: '/leasing' },
    { name: 'TRANSFORMAR', path: '/transformar' },
    { name: 'CONTACTO', path: '/contacto' }
  ];

  const isActive = (path: string) => location.pathname === path;

  // Cierra el menú móvil al navegar
  const handleNavClick = () => setMenuOpen(false);

  // Detecta el scroll para cambiar el estilo del navbar
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cierra el menú si se hace click fuera
  React.useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e: MouseEvent) => {
      const menu = document.getElementById('mobile-menu-panel');
      if (menu && !menu.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'backdrop-blur-md shadow-lg' : 'bg-white/10 backdrop-blur-sm'
    }`}
    style={{
      backgroundColor: isScrolled ? 'rgba(214,223,196,1)' : 'transparent'
    }}>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link to="/" className="block hover:scale-105 transition-transform duration-300">
              <span className="sr-only">Black Colors Home</span>
              <img
                src="/images/logo-mejorado-removebg-preview.png"
                alt="Black Colors Logo"
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className={`transition-all duration-300 hover:scale-105 ${
                        isActive(item.path)
                          ? 'font-semibold border-b-2 border-current pb-1'
                          : 'hover:opacity-75'
                      }`}
                      style={{
                        color: isScrolled 
                          ? (isActive(item.path) ? '#0d9488' : '#6b7280')
                          : (isActive(item.path) ? '#ffffff' : '#f3f4f6'),
                        textShadow: isScrolled ? 'none' : '1px 1px 2px rgba(0,0,0,0.3)'
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <div className="block md:hidden">
              <button 
                className={`rounded p-2 transition-all duration-300 ${
                  isScrolled
                    ? 'bg-gray-100 text-gray-600 hover:text-gray-600/75'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
                onClick={() => setMenuOpen((open) => !open)}
                aria-label="Abrir menú"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <div
          id="mobile-menu-panel"
          className="md:hidden fixed inset-0 z-50 flex flex-col items-center justify-start pt-16 backdrop-blur-lg animate-fade-in"
          style={{
            background: isScrolled 
              ? 'rgba(214,223,196,255)'
              : 'rgba(214,223,196,255)'
          }}
        >
          <div className="w-full max-w-sm px-4 mt-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleNavClick}
                className={`block w-full text-center py-4 text-lg font-medium border-b transition-all duration-200 ${
                  isActive(item.path) 
                    ? 'text-teal-600 bg-teal-50 font-semibold' 
                    : 'text-gray-600 hover:text-teal-600 hover:bg-gray-50'
                }`}
                style={{
                  borderColor: 'rgba(107,114,128,0.2)'
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
