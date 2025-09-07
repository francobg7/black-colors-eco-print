import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { whatsappConfig } from '@/config/whatsapp';

export const useWhatsApp = (customPhoneNumber?: string) => {
  const [isBusinessHours, setIsBusinessHours] = useState(true);
  const location = useLocation();

  // Obtener mensaje específico para la página actual
  const getCurrentMessage = () => {
    const pageMessage = whatsappConfig.pageMessages[location.pathname];
    return pageMessage || whatsappConfig.defaultMessage;
  };

  // Verificar horarios de atención
  useEffect(() => {
    if (!whatsappConfig.businessHours.enabled) {
      setIsBusinessHours(true);
      return;
    }

    const checkBusinessHours = () => {
      const now = new Date();
      const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
      const day = dayNames[now.getDay()] as keyof typeof whatsappConfig.businessHours.schedule;
      const schedule = whatsappConfig.businessHours.schedule[day];
      
      if (!schedule) {
        setIsBusinessHours(false);
        return;
      }

      const currentTime = now.toTimeString().slice(0, 5);
      const isOpen = currentTime >= schedule.start && currentTime <= schedule.end;
      setIsBusinessHours(isOpen);
    };

    checkBusinessHours();
    const interval = setInterval(checkBusinessHours, 60000); // Verificar cada minuto

    return () => clearInterval(interval);
  }, []);

  // Función para abrir WhatsApp
  const openWhatsApp = (customMessage?: string) => {
    const message = customMessage || getCurrentMessage();
    const encodedMessage = encodeURIComponent(message);
    // Usar el número personalizado si se proporciona, sino usar el número de configuración
    const phoneNumber = customPhoneNumber || whatsappConfig.phoneNumber;
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return {
    isBusinessHours,
    getCurrentMessage,
    openWhatsApp,
    config: whatsappConfig,
  };
};

export default useWhatsApp;
