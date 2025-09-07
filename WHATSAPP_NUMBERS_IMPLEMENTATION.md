# Implementación de Números de WhatsApp Dinámicos

## Descripción
Se implementó un sistema que permite usar diferentes números de WhatsApp dependiendo de la página donde se encuentre el usuario.

## Funcionalidad

### Número Principal (Default)
- **Número:** +595982343128
- **Uso:** En todas las páginas por defecto

### Número Secundario
- **Número:** +595986759882
- **Uso:** Específicamente en las siguientes páginas:
  - `/servicios/leasing`
  - `/servicios/alquileres`

## Archivos Modificados

### 1. `src/hooks/useWhatsApp.ts`
- Modificado para aceptar un parámetro `customPhoneNumber` opcional
- La función `openWhatsApp` ahora usa el número personalizado si se proporciona

### 2. `src/components/WhatsAppButton.tsx`
- Añadida prop `customPhoneNumber` opcional
- El hook `useWhatsApp` ahora recibe el número personalizado

### 3. `src/App.tsx`
- Creado componente `WhatsAppButtonWrapper` que detecta la ruta actual
- Aplica automáticamente el número secundario en las páginas de leasing y alquileres
- Usa `useLocation` para determinar qué número usar

## Cómo Funciona

1. **Detección de Ruta**: El componente `WhatsAppButtonWrapper` usa `useLocation()` para obtener la ruta actual
2. **Evaluación**: Compara la ruta actual con una lista de rutas que requieren el número secundario
3. **Aplicación**: Si la ruta coincide, pasa el número secundario al componente `WhatsAppButton`
4. **Fallback**: Si no coincide, usa el número principal por defecto

## Componentes de WhatsApp

### WhatsAppButton (Flotante)
- Botón flotante que aparece en todas las páginas
- Número dinámico según la página actual
- **Leasing/Alquileres:** +595986759882
- **Otras páginas:** +595982343128

### WhatsAppButtonSecondary (Inline)
- Botón inline usado específicamente en las páginas de leasing y alquileres
- **Siempre usa:** +595986759882
- Se mantiene independiente del sistema dinámico

## Resultado Final

En las páginas `/servicios/leasing` y `/servicios/alquileres`:
- **Botón flotante:** Usa número secundario (+595986759882)
- **Botón inline:** Usa número secundario (+595986759882)

En todas las demás páginas:
- **Botón flotante:** Usa número principal (+595982343128)
