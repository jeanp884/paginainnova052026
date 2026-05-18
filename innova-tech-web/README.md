# Innova Tech - Sitio Web Corporativo

Sitio web corporativo para Innova Tech, especialista en soluciones de ingeniería eléctrica para sectores comercial, industrial y utilities.

## Características

- ✅ Estructura completa del sitio web (HOME, SERVICIOS, PORTFOLIO, CONTACTO, etc.)
- ✅ Responsive Design (Mobile-First)
- ✅ Paleta de colores corporativa
- ✅ Componentes reutilizables (Header, Footer, Cards, etc.)
- ✅ Filtrado dinámico en Portfolio
- ✅ Formulario de contacto
- ✅ Páginas de casos de estudio
- ✅ Secciones expandibles para servicios

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel (Recomendado)

## Instalación

### Requisitos Previos
- Node.js 18+ 
- npm o yarn

### Pasos de Instalación

1. **Instalar Node.js** (si no lo tienes):
   - Descarga desde [nodejs.org](https://nodejs.org/)
   - Ejecuta el instalador y sigue las instrucciones

2. **Navegar al directorio del proyecto**:
   ```bash
   cd "D:\OneDrive - Innova tech\Documentos\02 APP CLAUDE\innova-tech-web"
   ```

3. **Instalar dependencias**:
   ```bash
   npm install
   ```

4. **Ejecutar servidor de desarrollo**:
   ```bash
   npm run dev
   ```

5. **Abrir en navegador**:
   - Ve a `http://localhost:3000`

## Estructura del Proyecto

```
innova-tech-web/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página HOME
│   ├── globals.css         # Estilos globales
│   ├── servicios/
│   │   └── page.tsx        # Página SERVICIOS
│   ├── comercial/
│   │   └── page.tsx        # Landing COMERCIAL
│   ├── industrial/
│   │   └── page.tsx        # Landing INDUSTRIAL
│   ├── utilities/
│   │   └── page.tsx        # Landing UTILITIES
│   ├── portfolio/
│   │   ├── page.tsx        # Grid de PORTFOLIO
│   │   └── [id]/
│   │       └── page.tsx    # Página de caso individual
│   ├── empresa/
│   │   └── page.tsx        # Página EMPRESA
│   └── contacto/
│       └── page.tsx        # Página CONTACTO
├── components/
│   ├── Header.tsx          # Navegación principal
│   ├── Footer.tsx          # Pie de página
│   ├── HeroSection.tsx     # Sección hero reutilizable
│   ├── ServiceCard.tsx     # Tarjeta de servicio
│   ├── CaseCard.tsx        # Tarjeta de caso
│   └── ExpandableSection.tsx # Sección expandible
├── package.json
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

## Páginas Disponibles

| Página | Ruta | Descripción |
|--------|------|-------------|
| HOME | `/` | Página principal con servicios y casos destacados |
| SERVICIOS | `/servicios` | Detalle de los 3 servicios principales |
| COMERCIAL | `/comercial` | Landing para sector comercial |
| INDUSTRIAL | `/industrial` | Landing para sector industrial |
| UTILITIES | `/utilities` | Landing para sector utilities |
| PORTFOLIO | `/portfolio` | Grid de proyectos con filtros |
| CASO INDIVIDUAL | `/portfolio/[id]` | Detalle de un proyecto específico |
| EMPRESA | `/empresa` | Información sobre Innova Tech |
| CONTACTO | `/contacto` | Formulario de contacto |

## Customización

### Colores Corporativos
Edita `tailwind.config.js` para cambiar los colores:
```javascript
colors: {
  'innova-primary': '#1F4788',    // Azul principal
  'innova-secondary': '#2E75B6',  // Azul secundario
  'innova-tertiary': '#4472C4',   // Azul terciario
  'innova-accent': '#FF8C00',     // Naranja para CTAs
}
```

### Información de Contacto
Actualiza `app/contacto/page.tsx` con:
- Teléfono
- Email
- Dirección
- Horarios

### Casos de Estudio
Añade nuevos casos en `app/portfolio/page.tsx` en el array `cases`.

## Compilación para Producción

```bash
npm run build
npm start
```

## Deployment

### En Vercel (Recomendado)

1. Push del código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Importa el repositorio
4. Vercel detectará automáticamente Next.js
5. Deploy automático en cada push

### Otros Hosts

El proyecto es compatible con cualquier host que soporte Node.js.

## Próximas Mejoras

- [ ] Sistema de CMS para gestionar casos
- [ ] Blog/Recursos técnicos
- [ ] Chat en vivo con equipo
- [ ] Integración con Google Analytics
- [ ] Formularios con validación de servidor
- [ ] Galería de imágenes para casos
- [ ] Certificado SSL
- [ ] CDN para imágenes

## Soporte

Para preguntas o soporte técnico sobre el sitio web, contacta a:
- **Email**: info@innova-tech.com
- **Teléfono**: +58 (424) 555-5555

## Licencia

© 2024 Innova Tech. Todos los derechos reservados.
