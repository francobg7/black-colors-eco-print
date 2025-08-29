import React from 'react';
import { MessageCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WhatsAppButtonSecondaryProps {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'default' | 'lg';
  customMessage?: string;
  showIcon?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const WhatsAppButtonSecondary: React.FC<WhatsAppButtonSecondaryProps> = ({
  variant = 'default',
  size = 'default',
  customMessage,
  showIcon = true,
  children,
  className = ''
}) => {
  // Número secundario específico para este componente
  const secondaryPhoneNumber = '+595986759882';
  
  // Función para abrir WhatsApp con el número secundario
  const openWhatsApp = (customMessage?: string) => {
    const message = customMessage || 'Hola, me interesa obtener más información sobre sus productos y servicios de Black Colors Eco Print.';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${secondaryPhoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleClick = () => {
    openWhatsApp(customMessage);
  };

  const buttonVariants = {
    default: 'bg-green-500 hover:bg-green-600 text-white',
    outline: 'border-green-500 text-green-500 hover:bg-green-500 hover:text-white',
    ghost: 'text-green-500 hover:bg-green-50'
  };

  return (
    <Button
      onClick={handleClick}
      variant={variant === 'default' ? 'default' : variant as any}
      size={size}
      className={`${buttonVariants[variant]} ${className} transition-all duration-200 gap-2`}
      aria-label="Contactar por WhatsApp"
    >
      {showIcon && (
        <MessageCircle className={`${
          size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'
        }`} />
      )}
      {children || 'Contactar por WhatsApp'}
      <ExternalLink className="w-3 h-3 opacity-60" />
    </Button>
  );
};

export default WhatsAppButtonSecondary; 