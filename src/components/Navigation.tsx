
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'PRODUCTOS', path: '/productos' },
    { name: 'LEASING', path: '/leasing' },
    { name: 'TRANSFORMAR', path: '/transformar' },
    { name: 'CONTACTO', path: '/contacto' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b" 
         style={{ 
           background: 'linear-gradient(135deg, rgba(195,232,164,0.95) 0%, rgba(215,242,219,0.95) 100%)', 
           borderColor: 'rgba(47,158,68,0.2)' 
         }}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:scale-105 transition-transform duration-300">
            <img 
              src="/lovable-uploads/ada240f7-591d-4fa1-9682-d596b5ac3541.png" 
              alt="Black Colors Logo" 
              className="h-12 w-auto"
            />
          </Link>
          
          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-lg font-semibold transition-all duration-300 hover:scale-105 ${
                  isActive(item.path) 
                    ? 'border-b-2 pb-1' 
                    : 'hover:text-opacity-80'
                }`}
                style={{
                  color: isActive(item.path) ? '#0f3d2e' : '#2f9e44',
                  borderColor: isActive(item.path) ? '#0f3d2e' : 'transparent'
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="p-2 rounded-md"
              style={{ color: '#2f9e44' }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
