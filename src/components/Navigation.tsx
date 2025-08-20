
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [productosMenuOpen, setProductosMenuOpen] = React.useState(false);
  const [serviciosMenuOpen, setServiciosMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const navItems = [
    { name: 'INICIO', path: '/' },
    { name: 'PRODUCTOS', path: '/productos', hasSubmenu: true },
    { name: 'SERVICIOS', path: '/servicios', hasSubmenu: true },
    { name: 'PROYECTO TRANSFORMAR', path: '/transformar' },
    { name: 'EVENTOS', path: '/eventos' },
    { name: 'CONTACTO', path: '/contacto' }
  ];

  const productosSubmenu = [
    { name: 'IMPRESORAS', path: '/productos/impresoras' },
    { name: 'TONERS', path: '/productos/toners' },
    { name: 'CARTUCHOS', path: '/productos/cartuchos' },
    { name: 'RESMAS SUSTENTABLES', path: '/productos/resmas' },
    { name: 'EQUIPOS', path: '/productos/equipos' }
  ];

  const serviciosSubmenu = [
    { name: 'SERVICIO TECNICO', path: '/servicios/tecnico' },
    { name: 'LEASING SUSTENTABLE', path: '/servicios/leasing' },
    { name: 'ALQUILERES', path: '/servicios/alquileres' },
    { name: 'SERVICIOS DIFERENCIADOS', path: '/servicios/diferenciados' }
  ];

  const isActive = (path: string) => location.pathname === path;

  // Cierra el menú móvil al navegar
  const handleNavClick = () => {
    setMenuOpen(false);
    setProductosMenuOpen(false);
    setServiciosMenuOpen(false);
  };

  // Cierra todos los menús
  const closeAllMenus = () => {
    setMenuOpen(false);
    setProductosMenuOpen(false);
    setServiciosMenuOpen(false);
  };

  // Cierra el menú de productos al hacer click fuera
  const handleProductosClick = () => {
    setProductosMenuOpen(!productosMenuOpen);
    setServiciosMenuOpen(false);
  };

  // Cierra el menú de servicios al hacer click fuera
  const handleServiciosClick = () => {
    setServiciosMenuOpen(!serviciosMenuOpen);
    setProductosMenuOpen(false);
  };

  // Detecta el scroll para cambiar el estilo del navbar
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquea el scroll del body cuando el menú móvil está abierto
  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  // Cierra el menú si se hace click fuera
  React.useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e: MouseEvent | TouchEvent) => {
      const menu = document.getElementById('mobile-menu-panel');
      const button = e.target as Element;
      
      // No cerrar si se hace click en el botón del menú o dentro del menú
      if (menu && !menu.contains(button) && !button.closest('[aria-label*="menú"]')) {
        setMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
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

  // Cierra el menú de servicios si se hace click fuera
  React.useEffect(() => {
    if (!serviciosMenuOpen) return;
    const handleClick = (e: MouseEvent) => {
      const menu = document.getElementById('servicios-menu-panel');
      if (menu && !menu.contains(e.target as Node)) {
        setServiciosMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [serviciosMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'backdrop-blur-md shadow-lg' : 'bg-white/10 backdrop-blur-sm'
    }`}
    style={{
      backgroundColor: isScrolled ? '#2d472f' : 'transparent',
      minHeight: '3.5rem',
      width: '100vw',
      position: 'fixed'
    }}>
      <div className="mx-auto max-w-screen-xl px-3 sm:px-4 md:px-6 lg:px-8 w-full">
        <div className="flex h-14 sm:h-16 md:h-20 items-center justify-between w-full">
          {/* Logo Section */}
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link to="/" className="block hover:scale-105 transition-transform duration-300">
              <span className="sr-only">Black Colors Home</span>
              <img
                src="/images/logo-mejorado-removebg-preview.png"
                alt="Black Colors Logo"
                className="h-12 sm:h-14 md:h-16 w-auto"
              />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8 lg:gap-12">
            <nav aria-label="Global">
              <ul className="flex items-center gap-4 lg:gap-6 text-xs lg:text-sm">
                {navItems.map((item) => (
                  <li key={item.name} className="relative">
                    {item.hasSubmenu ? (
                      <div className="relative">
                        <button
                          onClick={item.name === 'PRODUCTOS' ? handleProductosClick : handleServiciosClick}
                          className={`transition-all duration-300 hover:scale-105 flex items-center gap-0.5 lg:gap-1 ${
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
                            className={`w-4 h-4 transition-transform duration-300 ${
                              (item.name === 'PRODUCTOS' && productosMenuOpen) || (item.name === 'SERVICIOS' && serviciosMenuOpen) ? 'rotate-180' : ''
                            }`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {/* Submenú de productos */}
                        {item.name === 'PRODUCTOS' && productosMenuOpen && (
                          <div
                            id="productos-menu-panel"
                            className="absolute top-full left-0 mt-2 w-48 sm:w-56 md:w-64 bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-green-200/20 animate-fade-in"
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
                        {/* Submenú de servicios */}
                        {item.name === 'SERVICIOS' && serviciosMenuOpen && (
                          <div
                            id="servicios-menu-panel"
                            className="absolute top-full left-0 mt-2 w-48 sm:w-56 md:w-64 bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-green-200/20 animate-fade-in"
                          >
                            <div className="py-2">
                              {serviciosSubmenu.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.path}
                                  onClick={() => setServiciosMenuOpen(false)}
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
          </div>
          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center">
            {/* Mobile Menu Button */}
            <button 
              className={`relative rounded-lg p-2 sm:p-2.5 transition-all duration-300 ${
                isScrolled
                  ? 'bg-green-600/20 text-green-100 hover:bg-green-600/30'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              style={{ zIndex: 70 }}
            >
              <div className="relative w-6 h-6">
                <span className={`absolute block h-0.5 w-6 transform transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-2.5' : '-translate-y-2'
                } ${isScrolled ? 'bg-green-100' : 'bg-white'}`}></span>
                <span className={`absolute block h-0.5 w-6 transform transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : 'opacity-100'
                } ${isScrolled ? 'bg-green-100' : 'bg-white'}`}></span>
                <span className={`absolute block h-0.5 w-6 transform transition-all duration-300 ${
                  menuOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-2'
                } ${isScrolled ? 'bg-green-100' : 'bg-white'}`}></span>
              </div>
            </button>
          </div>
        </div>
        {/* Mobile Menu Panel */}
        {menuOpen && (
          <div
            id="mobile-menu-panel"
            className="fixed inset-0 z-[60] flex flex-col items-center justify-start pt-16 sm:pt-20 backdrop-blur-lg animate-fade-in overflow-y-auto md:hidden"
            style={{
              background: 'rgba(45, 71, 47, 0.98)',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              width: '100vw',
              height: '100vh'
            }}
          >
            <div className="w-full max-w-full px-2 sm:px-4 py-2 sm:py-4 space-y-1 sm:space-y-2" style={{ minHeight: '100vh' }}>
              {/* Close button for mobile menu */}
              <div className="flex justify-end mb-4">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-green-200 hover:text-white transition-colors p-2"
                  aria-label="Cerrar menú"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasSubmenu ? (
                    <div className="border-b border-green-200/30">
                      <button
                        onClick={() => {
                          if (item.name === 'PRODUCTOS') {
                            setProductosMenuOpen(!productosMenuOpen);
                          } else if (item.name === 'SERVICIOS') {
                            setServiciosMenuOpen(!serviciosMenuOpen);
                          }
                        }}
                        className={`block w-full text-left px-4 py-3 sm:py-4 text-base sm:text-lg font-medium transition-all duration-200 hover:bg-green-600/20 ${
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
                          className={`w-5 h-5 ml-2 inline transition-transform duration-300 ${
                            (item.name === 'PRODUCTOS' && productosMenuOpen) || (item.name === 'SERVICIOS' && serviciosMenuOpen) ? 'rotate-180' : ''
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {/* Submenú móvil de productos */}
                      <div className={`overflow-hidden transition-all duration-300 ${
                        item.name === 'PRODUCTOS' && productosMenuOpen ? 'max-h-[300px]' : 'max-h-0'
                      }`}>
                        <div className="bg-green-600/10 border-l-2 sm:border-l-4 border-green-400/50">
                          {productosSubmenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              onClick={handleNavClick}
                              className={`block w-full px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base transition-all duration-200 ${
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
                      </div>
                      {/* Submenú móvil de servicios */}
                      <div className={`overflow-hidden transition-all duration-300 ${
                        item.name === 'SERVICIOS' && serviciosMenuOpen ? 'max-h-[300px]' : 'max-h-0'
                      }`}>
                        <div className="bg-green-600/10 border-l-2 sm:border-l-4 border-green-400/50">
                          {serviciosSubmenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              onClick={handleNavClick}
                              className={`block w-full px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base transition-all duration-200 ${
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
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={handleNavClick}
                      className={`block w-full px-4 py-3 sm:py-4 text-base sm:text-lg font-medium border-b transition-all duration-200 ${
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
      </div>
    </header>
  );
};

export default Navigation;
    
