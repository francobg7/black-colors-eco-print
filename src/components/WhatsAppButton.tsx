import React, { useState } from 'react';
import { MessageCircle, Clock } from 'lucide-react';
import { useWhatsApp } from '@/hooks/useWhatsApp';

interface WhatsAppButtonProps {
  position?: 'bottom-right' | 'bottom-left';
  customMessage?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  position = 'bottom-right',
  customMessage
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const { isBusinessHours, openWhatsApp, config } = useWhatsApp();

  const handleClick = () => {
    openWhatsApp(customMessage);
  };

  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6'
  };

  return (
    <>
      {/* Botón principal */}
      <div className={`fixed ${positionClasses[position]} z-50`}>
        <div className="relative group">
          {/* Tooltip */}
          {config.appearance.showTooltip && (
            <div
              className={`absolute ${position === 'bottom-right' ? 'right-full mr-4' : 'left-full ml-4'} bottom-0 transition-all duration-300 ${
                showTooltip ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
              }`}
            >
              <div className="bg-white shadow-lg rounded-lg p-3 border border-gray-200 min-w-max max-w-xs">
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-sm text-gray-800 font-medium">
                    ¡Contáctanos por WhatsApp!
                  </div>
                  {!isBusinessHours && config.businessHours.enabled && (
                    <Clock className="w-3 h-3 text-orange-500" />
                  )}
                </div>
                <div className="text-xs text-gray-600">
                  {isBusinessHours || !config.businessHours.enabled
                    ? 'Estamos aquí para ayudarte'
                    : 'Fuera del horario de atención'
                  }
                </div>
                {/* Flecha del tooltip */}
                <div
                  className={`absolute top-1/2 transform -translate-y-1/2 ${
                    position === 'bottom-right' 
                      ? 'left-full border-l-white border-l-8 border-y-transparent border-y-8 border-r-0' 
                      : 'right-full border-r-white border-r-8 border-y-transparent border-y-8 border-l-0'
                  }`}
                />
              </div>
            </div>
          )}

          {/* Círculos de animación */}
          {config.appearance.animationEnabled && (
            <>
              <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
              <div className="absolute inset-0 rounded-full bg-green-500 animate-pulse opacity-30"></div>
            </>
          )}

          {/* Botón */}
          <button
            onClick={handleClick}
            onMouseEnter={() => {
              setIsHovered(true);
              setShowTooltip(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
              setShowTooltip(false);
            }}
            className="relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-500/30 group"
            aria-label="Contactar por WhatsApp"
          >
            <MessageCircle
              className={`w-7 h-7 text-white transition-transform duration-300 ${
                isHovered ? 'scale-110' : 'scale-100'
              }`}
            />
            
            {/* Indicador de disponibilidad */}
            {config.appearance.showOnlineIndicator && (
              <div className={`absolute -top-1 -right-1 w-4 h-4 ${
                isBusinessHours || !config.businessHours.enabled ? 'bg-green-400' : 'bg-orange-400'
              } rounded-full flex items-center justify-center`}>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Versión expandida para pantallas pequeñas (opcional) */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <div
          className={`transition-all duration-300 ${
            isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="bg-green-500 text-white text-sm px-4 py-2 rounded-full shadow-lg mb-2 whitespace-nowrap">
            ¡Escríbenos!
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsAppButton;
