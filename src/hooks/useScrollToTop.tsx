import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Asegurar que el scroll se resetee inmediatamente
    window.scrollTo(0, 0);
    
    // También aplicar scroll suave después de un pequeño delay
    // para asegurar que el contenido se haya renderizado
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname]);
};
