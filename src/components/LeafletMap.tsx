import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Solución para el problema de los íconos de Leaflet en producción
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/images/marker-icon-2x.png',
  iconUrl: '/images/marker-icon.png',
  shadowUrl: '/images/marker-shadow.png',
});

// Definición del componente para TypeScript
interface LeafletMapProps {}

const LeafletMap: React.FC<LeafletMapProps> = () => {
  useEffect(() => {
    // Coordenadas de Black Colors
    const position: [number, number] = [-25.341705587703785, -57.6033648846568];
    
    // Crear el mapa
    const map = L.map('map').setView(position, 16);
    
    // Agregar la capa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Agregar el marcador usando las opciones predeterminadas
    const marker = L.marker(position).addTo(map);
    marker.bindPopup('Black Colors Eco Print<br>Av Cacique Lambare & Av. Bonifacio Ovando').openPopup();
    
    // Limpiar al desmontar
    return () => {
      map.remove();
    };
  }, []);
  
  return <div id="map" style={{ height: '500px', width: '100%' }} />;
};

export default LeafletMap;
