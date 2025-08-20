// Configuración del botón de WhatsApp
export const whatsappConfig = {
  // Número de teléfono (incluir código de país)
  phoneNumber: '+595982343128', // Número real de la empresa
  
  // Mensaje predeterminado
  defaultMessage: 'Hola, me interesa obtener más información sobre sus productos y servicios de Black Colors Eco Print.',
  
  // Mensajes específicos por página (opcional)
  pageMessages: {
    '/productos/impresoras': 'Hola, me interesa conocer más sobre las impresoras que ofrecen.',
    '/productos/toners': 'Hola, necesito información sobre toners compatibles.',
    '/productos/cartuchos': 'Hola, me gustaría saber sobre los cartuchos disponibles.',
    '/servicios/leasing': 'Hola, me interesa el servicio de leasing de equipos.',
    '/servicios/tecnico': 'Hola, necesito asistencia técnica para mi equipo.',
    '/transformar': 'Hola, me interesa conocer más sobre el programa de transformación.',
    '/contacto': 'Hola, me gustaría ponerme en contacto con ustedes.',
  },
  
  // Configuración de apariencia
  appearance: {
    position: 'bottom-right' as const, // 'bottom-right' | 'bottom-left'
    showTooltip: true,
    showOnlineIndicator: true,
    animationEnabled: true,
  },
  
  // Horarios de atención (opcional)
  businessHours: {
    enabled: false, // Cambiar a true para habilitar
    timezone: 'America/Bogota',
    schedule: {
      monday: { start: '08:00', end: '18:00' },
      tuesday: { start: '08:00', end: '18:00' },
      wednesday: { start: '08:00', end: '18:00' },
      thursday: { start: '08:00', end: '18:00' },
      friday: { start: '08:00', end: '18:00' },
      saturday: { start: '09:00', end: '13:00' },
      sunday: null, // null significa cerrado
    },
  },
};
