# Componente WhatsApp Button

Un componente moderno y personalizable para agregar un botón flotante de WhatsApp a tu aplicación React.

## 🚀 Características

- **Diseño moderno**: UI atractiva con animaciones suaves
- **Responsive**: Se adapta a diferentes tamaños de pantalla
- **Personalizable**: Configurable mediante archivo de configuración
- **Mensajes dinámicos**: Diferentes mensajes según la página actual
- **Horarios de atención**: Indicador visual de disponibilidad (opcional)
- **Tooltip informativo**: Muestra información al hacer hover
- **Posicionamiento flexible**: Esquina inferior derecha o izquierda
- **Accesibilidad**: Cumple con estándares de accesibilidad web

## 📁 Estructura de archivos

```
src/
├── components/
│   └── WhatsAppButton.tsx          # Componente principal
├── hooks/
│   └── useWhatsApp.ts             # Hook personalizado para lógica
└── config/
    └── whatsapp.ts                # Configuración del componente
```

## 🔧 Configuración

### Configuración básica

Edita el archivo `src/config/whatsapp.ts`:

```typescript
export const whatsappConfig = {
  // 📞 IMPORTANTE: Cambiar por el número real de tu empresa
  phoneNumber: '+595982343128', 
  
  // Mensaje predeterminado
  defaultMessage: 'Hola, me interesa obtener más información sobre sus productos y servicios.',
  
  // Configuración de apariencia
  appearance: {
    position: 'bottom-right', // 'bottom-right' | 'bottom-left'
    showTooltip: true,
    showOnlineIndicator: true,
    animationEnabled: true,
  },
};
```

### Mensajes personalizados por página

Puedes configurar mensajes específicos para diferentes rutas:

```typescript
pageMessages: {
  '/productos/impresoras': 'Hola, me interesa conocer más sobre las impresoras que ofrecen.',
  '/productos/toners': 'Hola, necesito información sobre toners compatibles.',
  '/servicios/leasing': 'Hola, me interesa el servicio de leasing de equipos.',
  // Agregar más rutas según necesites
},
```

### Horarios de atención (opcional)

Para mostrar disponibilidad según horarios:

```typescript
businessHours: {
  enabled: true, // Cambiar a true para habilitar
  timezone: 'America/Bogota',
  schedule: {
    monday: { start: '08:00', end: '18:00' },
    tuesday: { start: '08:00', end: '18:00' },
    wednesday: { start: '08:00', end: '18:00' },
    thursday: { start: '08:00', end: '18:00' },
    friday: { start: '08:00', end: '18:00' },
    saturday: { start: '09:00', end: '13:00' },
    sunday: null, // null = cerrado
  },
},
```

## 💻 Uso

### Uso básico (global)

El componente ya está integrado en `App.tsx` y aparece en todas las páginas:

```tsx
import WhatsAppButton from './components/WhatsAppButton';

// En App.tsx
<WhatsAppButton />
```

### Uso con props personalizadas

```tsx
<WhatsAppButton 
  position="bottom-left"
  customMessage="Mensaje personalizado para esta página específica"
/>
```

### Uso del hook en otros componentes

```tsx
import { useWhatsApp } from '@/hooks/useWhatsApp';

const MiComponente = () => {
  const { openWhatsApp, isBusinessHours } = useWhatsApp();
  
  return (
    <button onClick={() => openWhatsApp('Mensaje desde botón personalizado')}>
      Contactar por WhatsApp
    </button>
  );
};
```

## 🎨 Personalización de estilos

### Colores

Para cambiar los colores del botón, modifica las clases de Tailwind en `WhatsAppButton.tsx`:

```tsx
// Verde (actual)
className="bg-green-500 hover:bg-green-600"

// Azul
className="bg-blue-500 hover:bg-blue-600"

// Personalizado
className="bg-[#25D366] hover:bg-[#128C7E]" // Colores oficiales de WhatsApp
```

### Tamaño del botón

```tsx
// Pequeño
className="w-12 h-12"

// Actual
className="w-14 h-14"

// Grande
className="w-16 h-16"
```

### Posición personalizada

```tsx
// Esquina superior derecha
className="top-6 right-6"

// Centro derecha
className="top-1/2 right-6 transform -translate-y-1/2"
```

## 📱 Responsive Design

El componente incluye clases responsive:

- `md:hidden`: Oculta elementos en pantallas medianas y grandes
- `hidden md:block`: Muestra elementos solo en pantallas grandes
- Tooltip adaptativo según la posición

## ♿ Accesibilidad

- `aria-label`: Descripción del botón para lectores de pantalla
- `focus:ring`: Indicador visual de foco para navegación por teclado
- Contraste adecuado de colores
- Tamaño mínimo de 44px para touch targets

## 🐛 Solución de problemas

### El botón no aparece
1. Verifica que `WhatsAppButton` esté importado en `App.tsx`
2. Revisa la consola del navegador por errores
3. Confirma que las dependencias estén instaladas

### WhatsApp no se abre
1. Verifica el formato del número de teléfono (incluir código de país)
2. Prueba el enlace manualmente: `https://wa.me/573001234567`

### Problemas de estilo
1. Confirma que Tailwind CSS esté configurado correctamente
2. Verifica que los iconos de Lucide React estén disponibles

## 🔄 Actualizaciones futuras

### Funcionalidades planificadas:
- [ ] Soporte para múltiples números de WhatsApp
- [ ] Integración con analytics para tracking de clics
- [ ] Modo oscuro automático
- [ ] Soporte para mensajes con variables dinámicas
- [ ] Widget de chat expandible

## 📞 Configuración del número de teléfono

**IMPORTANTE**: No olvides cambiar el número de teléfono en `src/config/whatsapp.ts`:

```typescript
phoneNumber: '+57300XXXXXXX', // Reemplaza con tu número real
```

Formato requerido: `+[código_país][número_sin_espacios]`

Ejemplos:
- Colombia: `+573001234567`
- México: `+525551234567`
- España: `+34612345678`

---

¿Necesitas ayuda? ¡Usa el botón de WhatsApp! 😉
