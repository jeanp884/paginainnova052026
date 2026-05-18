# Innova Tech Solar - Página Web

Sitio web moderno y responsivo para promocionar kits solares de Innova Tech Solar.

## 📁 Estructura del Proyecto

```
web-innova/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript interactivo
├── assets/
│   └── images/         # Imágenes de productos
└── README.md           # Este archivo
```

## 🎨 Características

✅ Diseño moderno y responsivo  
✅ Calculadora de ahorro interactiva  
✅ Galería de 5 kits solares  
✅ Sección de características  
✅ Formulario de contacto  
✅ Animaciones suaves  
✅ Navegación sticky  
✅ Paleta de colores profesional

## 🖼️ Imágenes Necesarias

Necesitas colocar estas imágenes en `assets/images/`:

1. **kit-inicio.jpg** - Kit Inicio 3000W
2. **kit-base.jpg** - Kit Base 4000W
3. **kit-smart.jpg** - Kit Smart 5000W
4. **kit-plus.jpg** - Kit Plus 6000W
5. **kit-empresa.jpg** - Kit Empresa 15KW

### Dimensiones recomendadas:
- Ancho: 400px
- Alto: 250px
- Formato: JPG o PNG
- Tamaño: 100-150KB cada una

## 🎨 Personalización

### Colores
Los colores están definidos en CSS variables en `styles.css`:

```css
--primary: #0066cc;        /* Azul principal */
--accent: #ff9500;          /* Naranja acentos */
--success: #10b981;        /* Verde */
```

### Textos
Edita directamente en `index.html`:
- Encabezados
- Descripciones
- Precios
- Características

### Datos de Contacto
Busca en `index.html`:
- Teléfono
- Email
- Ubicación

## 🚀 Cómo Ejecutar Localmente

### Opción 1: Python
```bash
cd web-innova
python -m http.server 8000
# Abre http://localhost:8000
```

### Opción 2: Node.js (http-server)
```bash
npm install -g http-server
cd web-innova
http-server -p 8000
```

### Opción 3: Live Server (VS Code)
- Instala la extensión "Live Server"
- Click derecho en `index.html`
- Selecciona "Open with Live Server"

## 📱 Responsivo

La página es totalmente responsivo para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1200px+)

## 📊 Calculadora de Ahorro

La calculadora calcula automáticamente:
- Ahorro mensual: consumo (kWh) × $140/kWh
- Ahorro anual: ahorro mensual × 12

Puedes modificar la tasa de electricidad en `script.js`:

```javascript
const ELECTRICITY_RATE = 140; // Cambiar aquí
```

## 📝 Formulario de Contacto

El formulario actual es funcional pero requiere un backend para procesar emails.

### Opciones para procesar formularios:

1. **Formspree** (Recomendado)
   - Sitio: https://formspree.io
   - Gratis hasta 50 envíos/mes

2. **EmailJS**
   - Sitio: https://www.emailjs.com
   - JavaScript puro, sin backend

3. **Netlify Forms**
   - Si despliegas en Netlify
   - Formularios gratis

## 🌐 Despliegue

### Opción 1: Netlify (Recomendado)
1. Push a GitHub
2. Conecta repo a Netlify
3. Deploy automático

### Opción 2: Vercel
1. Push a GitHub
2. Importa en Vercel
3. Deploy con un click

### Opción 3: GitHub Pages
1. Crea repo
2. Push a `main` branch
3. Habilita GitHub Pages en settings

### Opción 4: Servidor Web
- Sube archivos vía FTP
- Configura dominio
- Listo

## 🔧 Tecnologías

- HTML5 semántico
- CSS3 con variables y Grid
- JavaScript vanilla (sin dependencias)
- Font Awesome para iconos
- Google Fonts compatible

## 📞 Soporte

Para cambios o mejoras, necesitarías:

- Agregar más productos
- Integrar con CMS
- Añadir blog
- Sistema de carrito
- Pasarela de pagos

## 📄 Licencia

Uso personal y comercial permitido.

---

**Desarrollado con ❤️ para Innova Tech Solar**