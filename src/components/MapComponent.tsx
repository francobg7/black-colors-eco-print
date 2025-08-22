import { useEffect, useState, lazy, Suspense } from 'react';

// Cargar Leaflet dinámicamente (solo del lado del cliente)
const LeafletMap = lazy(() => import('../components/LeafletMap'));

const MapComponent = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Si no está montado (renderizado en servidor), mostrar un espacio reservado
  if (!isMounted) {
    return <div style={{ height: "500px", background: "#0f3d2e" }}></div>;
  }

  // Solo renderizar el mapa en el cliente
  return (
    <Suspense fallback={<div style={{ height: "500px", background: "#0f3d2e" }}></div>}>
      <LeafletMap />
    </Suspense>
  );
};

export default MapComponent;
