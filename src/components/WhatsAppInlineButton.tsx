import React from 'react';
import { MessageCircle, ExternalLink } from 'lucide-react';
import { useWhatsApp } from '@/hooks/useWhatsApp';
import { Button } from '@/components/ui/button';

interface WhatsAppInlineButtonProps {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'default' | 'lg';
  customMessage?: string;
  showIcon?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const WhatsAppInlineButton: React.FC<WhatsAppInlineButtonProps> = ({
  variant = 'default',
  size = 'default',
  customMessage,
  showIcon = true,
  children,
  className = ''
}) => {
  const { openWhatsApp, isBusinessHours, config } = useWhatsApp();

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
      {!isBusinessHours && config.businessHours.enabled && (
        <span className="text-xs opacity-75">(Fuera de horario)</span>
      )}
      <ExternalLink className="w-3 h-3 opacity-60" />
    </Button>
  );
};

export default WhatsAppInlineButton;
