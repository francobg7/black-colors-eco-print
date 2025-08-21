import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const usePreventScrollRestoration = () => {
  const location = useLocation();

  useEffect(() => {
    // Disable browser's scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Force scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname, location.search]);

  useEffect(() => {
    // Cleanup: restore browser's default behavior when component unmounts
    return () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, []);
};
