# 💪 Sparta Gym Olavarría - Landing Page

Landing page moderna y responsive para **Sparta Gym Olavarría**, un gimnasio ubicado en Olavarría, Argentina. El sitio web presenta información sobre los servicios, entrenadores, comunidad y facilita el contacto directo con el gimnasio a través de WhatsApp.

## 📋 Sobre el Proyecto

Este proyecto es una landing page desarrollada para promocionar los servicios de Sparta Gym Olavarría. Incluye secciones informativas sobre:

- **Hero**: Sección principal con llamada a la acción
- **Servicios**: Información sobre los servicios ofrecidos
- **Entrenadores**: Presentación del equipo de entrenadores
- **Comunidad**: Descripción de la comunidad del gimnasio
- **Galería**: Imágenes del gimnasio y las instalaciones
- **Ubicación**: Información sobre la ubicación del gimnasio
- **Contacto**: Formulario de contacto integrado con WhatsApp
- **Botón flotante de WhatsApp**: Acceso rápido para comunicarse

## 🚀 Tecnologías Utilizadas

### Frontend
- **React** `^19.1.1` - Biblioteca de JavaScript para construir interfaces de usuario
- **Vite** `^7.1.7` - Build tool y servidor de desarrollo ultrarrápido
- **Tailwind CSS** `^4.1.17` - Framework de CSS utility-first para estilos
- **PostCSS** `^8.5.6` - Herramienta para transformar CSS
- **Autoprefixer** `^10.4.21` - Plugin de PostCSS para agregar prefijos de navegadores

### Herramientas de Desarrollo
- **ESLint** `^9.36.0` - Linter para JavaScript/React
- **PropTypes** `^15.8.1` - Validación de tipos en tiempo de ejecución para React
- **TypeScript Definitions** - Tipos para React y React DOM

### Integración
- **WhatsApp Integration** - Formulario de contacto que se comunica directamente con WhatsApp

## ✨ Características

- 🎨 Diseño moderno y responsive
- 📱 Totalmente compatible con dispositivos móviles
- ⚡ Optimizado para rendimiento con Vite
- 💬 Integración directa con WhatsApp para contacto
- 🖼️ Galería de imágenes del gimnasio
- 🗺️ Información de ubicación
- 🎯 Navegación suave entre secciones
- ♿ Accesible y semánticamente correcto

## 📦 Configuración Inicial

### Requisitos Previos

Asegúrate de tener instalado:
- **Node.js** (versión 18 o superior recomendada)
- **npm** o **yarn** como gestor de paquetes

### Instalación

1. **Clona el repositorio** (o navega al directorio del proyecto):
```bash
cd sparta-gym
```

2. **Instala las dependencias**:
```bash
npm install
```

3. **Inicia el servidor de desarrollo**:
```bash
npm run dev
```

4. **Abre tu navegador** y visita:
```
http://localhost:5173
```

## 📜 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo con Hot Module Replacement (HMR) |
| `npm run build` | Construye la aplicación para producción en la carpeta `dist` |
| `npm run preview` | Previsualiza la versión de producción localmente |
| `npm run lint` | Ejecuta ESLint para verificar la calidad del código |

## 🏗️ Estructura del Proyecto

```
sparta-gym/
├── public/              # Archivos estáticos
│   ├── fondo-gym.jpg   # Imagen de fondo
│   └── vite.svg        # Logo de Vite
├── src/
│   ├── components/     # Componentes de React
│   │   ├── Community.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   ├── Gallery.jsx
│   │   ├── Hero.jsx
│   │   ├── Location.jsx
│   │   ├── Navbar.jsx
│   │   ├── Services.jsx
│   │   ├── Trainers.jsx
│   │   └── WhatsAppButton.jsx
│   ├── App.jsx         # Componente principal
│   ├── App.css         # Estilos globales
│   ├── main.jsx        # Punto de entrada de la aplicación
│   └── index.css       # Estilos base
├── dist/               # Build de producción (generado)
├── index.html          # Template HTML principal
├── package.json        # Dependencias y scripts
├── vite.config.js      # Configuración de Vite
├── vercel.json         # Configuración de despliegue en Vercel
└── README.md           # Este archivo
```

## 🚢 Despliegue

El proyecto está configurado para despliegue en **Vercel**. El archivo `vercel.json` contiene la configuración necesaria para:

- Servir la aplicación como SPA (Single Page Application)
- Redireccionar todas las rutas a `index.html`

### Pasos para desplegar:

1. Construye el proyecto:
```bash
npm run build
```

2. Despliega en Vercel (o la plataforma de tu elección):
   - Conecta tu repositorio con Vercel
   - Vercel detectará automáticamente la configuración en `vercel.json`

## 🔧 Configuración Adicional

### WhatsApp

El número de WhatsApp está configurado en `src/App.jsx`. Para cambiarlo:

```jsx
const whatsappNumber = '5492284586577' // Cambia este número
```

### Estilos

Los estilos utilizan Tailwind CSS. Puedes personalizar los colores y temas editando:
- `src/App.css` para estilos globales
- `src/index.css` para estilos base
- Las clases de Tailwind en cada componente

## 📝 Notas

- El proyecto utiliza React 19 con las últimas características
- Los estilos están optimizados con Tailwind CSS 4
- El formulario de contacto se integra directamente con WhatsApp
- La aplicación es una SPA (Single Page Application)

## 👨‍💻 Desarrollo

Para contribuir al proyecto:

1. Haz fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y propiedad de Sparta Gym Olavarría.

---

**Desarrollado con ❤️ para Sparta Gym Olavarría**
