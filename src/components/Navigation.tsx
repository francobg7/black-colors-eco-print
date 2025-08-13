
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [productosMenuOpen, setProductosMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const navItems = [
    { name: 'INICIO', path: '/' },
    { name: 'PRODUCTOS', path: '/productos', hasSubmenu: true },
    { name: 'LEASING', path: '/leasing' },
    { name: 'PROYECTO TRANSFORMAR', path: '/transformar' },
    { name: 'EVENTOS', path: '/eventos' },
    { name: 'CONTACTO', path: '/contacto' }
  ];

  const productosSubmenu = [
    { name: 'IMPRESORAS', path: '/productos/impresoras' },
    { name: 'CARTUCHOS Y TÓNERS', path: '/productos/cartuchos' },
    { name: 'RESMAS SUSTENTABLES', path: '/productos/resmas' }
  ];

  const isActive = (path: string) => location.pathname === path;

  // Cierra el menú móvil al navegar
  const handleNavClick = () => {
    setMenuOpen(false);
    setProductosMenuOpen(false);
  };

  // Cierra el menú de productos al hacer click fuera
  const handleProductosClick = () => {
    setProductosMenuOpen(!productosMenuOpen);
  };

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

  // Cierra el menú de productos si se hace click fuera
  React.useEffect(() => {
    if (!productosMenuOpen) return;
    const handleClick = (e: MouseEvent) => {
      const menu = document.getElementById('productos-menu-panel');
      if (menu && !menu.contains(e.target as Node)) {
        setProductosMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [productosMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'backdrop-blur-md shadow-lg' : 'bg-white/10 backdrop-blur-sm'
    }`}
    style={{
      backgroundColor: isScrolled ? '#2d472f' : 'transparent'
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
                  <li key={item.name} className="relative">
                    {item.hasSubmenu ? (
                      <div className="relative">
                        <button
                          onClick={handleProductosClick}
                          className={`transition-all duration-300 hover:scale-105 flex items-center gap-1 ${
                            isActive(item.path)
                              ? 'font-semibold border-b-2 border-current pb-1'
                              : 'hover:opacity-75'
                          }`}
                          style={{
                            color: isScrolled 
                              ? (isActive(item.path) ? '#d7f2db' : '#c3e8a4')
                              : (isActive(item.path) ? '#ffffff' : '#f3f4f6'),
                            textShadow: isScrolled ? 'none' : '1px 1px 2px rgba(0,0,0,0.3)'
                          }}
                        >
                          {item.name}
                          <svg 
                            className={`w-4 h-4 transition-transform duration-300 ${productosMenuOpen ? 'rotate-180' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        
                        {/* Submenú de productos */}
                        {productosMenuOpen && (
                          <div
                            id="productos-menu-panel"
                            className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-green-200/20 animate-fade-in"
                          >
                            <div className="py-2">
                              {productosSubmenu.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.path}
                                  onClick={() => setProductosMenuOpen(false)}
                                  className={`block px-4 py-3 text-sm transition-all duration-200 hover:bg-green-50 ${
                                    isActive(subItem.path) 
                                      ? 'bg-green-100 text-green-800 font-medium' 
                                      : 'text-gray-700 hover:text-green-700'
                                  }`}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className={`transition-all duration-300 hover:scale-105 ${
                          isActive(item.path)
                            ? 'font-semibold border-b-2 border-current pb-1'
                            : 'hover:opacity-75'
                        }`}
                        style={{
                          color: isScrolled 
                            ? (isActive(item.path) ? '#d7f2db' : '#c3e8a4')
                            : (isActive(item.path) ? '#ffffff' : '#f3f4f6'),
                          textShadow: isScrolled ? 'none' : '1px 1px 2px rgba(0,0,0,0.3)'
                        }}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <div className="block md:hidden">
              <button 
                className={`rounded p-2 transition-all duration-300 ${
                  isScrolled
                    ? 'bg-green-600/20 text-green-100 hover:bg-green-600/30'
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
                  strokeWidth={2}
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
              ? '#2d472f'
              : '#2d472f'
          }}
        >
          <div className="w-full max-w-sm px-4 mt-8">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasSubmenu ? (
                  <div className="border-b border-green-200/30">
                    <button
                      onClick={() => setProductosMenuOpen(!productosMenuOpen)}
                      className={`block w-full text-center py-4 text-lg font-medium transition-all duration-200 hover:bg-green-600/20 ${
                        isActive(item.path) 
                          ? 'bg-green-600/30 font-semibold' 
                          : ''
                      }`}
                      style={{
                        color: isActive(item.path) ? '#d7f2db' : '#c3e8a4'
                      }}
                    >
                      {item.name}
                      <svg 
                        className={`w-5 h-5 ml-2 inline transition-transform duration-300 ${productosMenuOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Submenú móvil de productos */}
                    {productosMenuOpen && (
                      <div className="bg-green-600/10 border-l-4 border-green-400/50">
                        {productosSubmenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            onClick={handleNavClick}
                            className={`block w-full text-center py-3 text-base transition-all duration-200 ${
                              isActive(subItem.path) 
                                ? 'bg-green-600/30 font-medium' 
                                : 'hover:bg-green-600/20'
                            }`}
                            style={{
                              color: isActive(subItem.path) ? '#d7f2db' : '#a7f3d0'
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    onClick={handleNavClick}
                    className={`block w-full text-center py-4 text-lg font-medium border-b transition-all duration-200 ${
                      isActive(item.path) 
                        ? 'bg-green-600/30 font-semibold' 
                        : 'hover:bg-green-600/20'
                    }`}
                    style={{
                      color: isActive(item.path) ? '#d7f2db' : '#c3e8a4',
                      borderColor: 'rgba(195,232,164,0.3)'
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
