# 📸 Cómo Agregar Tus Imágenes de Productos

## Pasos Rápidos

1. **Crear carpeta**: Crea una carpeta llamada `assets/images` en el mismo nivel que `index.html`

2. **Copiar imágenes**: Coloca tus 5 imágenes de kits en esa carpeta con estos nombres exactos:
   - `kit-inicio.jpg` - Kit Inicio 3000W
   - `kit-base.jpg` - Kit Base 4000W  
   - `kit-smart.jpg` - Kit Smart 5000W
   - `kit-plus.jpg` - Kit Plus 6000W
   - `kit-empresa.jpg` - Kit Empresa 15KW

3. **¡Listo!** La página automáticamente mostrará tus imágenes

## 📁 Estructura Final

```
web-innova/
├── index.html
├── styles.css
├── script.js
├── README.md
├── assets/
│   └── images/
│       ├── kit-inicio.jpg
│       ├── kit-base.jpg
│       ├── kit-smart.jpg
│       ├── kit-plus.jpg
│       └── kit-empresa.jpg
```

## 🎨 Recomendaciones de Imagen

### Tamaño del archivo
- **Mínimo**: 30KB (comprimida)
- **Máximo**: 200KB (para carga rápida)
- **Recomendado**: 80-120KB

### Dimensiones
- **Ancho**: 400px mínimo
- **Alto**: 250px mínimo
- **Relación**: 16:10 (como en tus imágenes actuales)

### Herramientas para optimizar

#### Online (Gratis)
- https://tinypng.com - Comprime PNG/JPG
- https://squoosh.app - Convertir y optimizar
- https://imagecompressor.com - Reduce tamaño

#### Línea de comando
```bash
# Con ImageMagick
convert kit-inicio.png -quality 80 -resize 400x250 kit-inicio.jpg

# Con ffmpeg
ffmpeg -i kit-inicio.png -q:v 5 kit-inicio.jpg
```

## ✨ Alternativas

Si no tienes las imágenes en formato PNG:

### Opción 1: Usar tus imágenes actuales
- Descarga los 5 PNG que ya compartiste
- Conviértelos a JPG
- Renombralos según los nombres anteriores

### Opción 2: Captura de pantalla
1. Abre cada imagen en tu navegador
2. Presiona PrtScn o usa screenshot
3. Recorta a 400x250 en Paint/Photoshop
4. Guarda como JPG

### Opción 3: Usar URLs externas
Si quieres usar imágenes online, edita `index.html`:

Busca esta línea:
```html
<img src="assets/images/kit-inicio.jpg" alt="Kit Inicio 3000W">
```

Y reemplázala con:
```html
<img src="https://tu-sitio.com/imagen.jpg" alt="Kit Inicio 3000W">
```

## 🔍 Verificar que funciona

1. Abre `index.html` en tu navegador
2. Desplázate a la sección "Nuestros Kits Solares"
3. Deberías ver tus 5 imágenes

Si no aparecen:
- Verifica que los nombres sean exactos (mayúsculas importan)
- Comprueba que estén en `assets/images/`
- Abre la consola del navegador (F12) para ver errores

## 💡 Tips Pro

### Nombre de archivos
```bash
# ✅ Correcto (sin espacios, minúsculas)
kit-inicio.jpg
kit-base.jpg

# ❌ Incorrecto (espacios, mayúsculas)
Kit Inicio.jpg
KIT-INICIO.JPG
```

### Formato
```bash
# ✅ Soportados
.jpg, .jpeg, .png, .webp

# Recomendado por velocidad
.jpg o .webp
```

### Si la imagen es muy pesada

```bash
# Reducir calidad
Las imágenes JPG de 120KB se cargan bien

# Convertir a WebP (más pequeño)
# 80% de tamaño con mejor calidad
ffmpeg -i foto.jpg -c:v libwebp -q:v 75 foto.webp
```

## 📞 Si necesitas ayuda

1. Verifica que los nombres sean exactos
2. Comprueba la consola del navegador (F12 → Console)
3. Asegúrate que la carpeta `assets/images/` exista
4. Los archivos deben estar en formato JPG o PNG

---

**Una vez agregues las imágenes, tu sitio lucirá como las muestras de rayssa.cl** ✨