# 🚀 Guía de Despliegue

Tu página web está lista. Aquí hay varias opciones para ponerla en línea.

## 🥇 OPCIÓN 1: Netlify (Recomendado - MÁS FÁCIL)

### Paso 1: Preparar archivos
1. Asegúrate que tu carpeta `web-innova` tenga:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `assets/images/` (con tus 5 imágenes)

### Paso 2: Crear cuenta
1. Ve a https://netlify.com
2. Haz clic en "Sign up"
3. Usa Google, GitHub o email

### Paso 3: Desplegar
**Opción A: Drag & Drop (Más fácil)**
1. En Netlify, arrastra la carpeta `web-innova` al área de upload
2. ¡Listo! Tu sitio estará en línea en 30 segundos

**Opción B: GitHub (Automático)**
1. Sube tu carpeta a GitHub
2. Conecta el repositorio a Netlify
3. Cada push actualiza automáticamente

### Resultado
```
https://tu-proyecto-12345.netlify.app
```

## 🥈 OPCIÓN 2: Vercel

### Paso 1: Preparar
Misma estructura que Netlify

### Paso 2: Crear cuenta
1. Ve a https://vercel.com
2. Regístrate con GitHub/Google/Email

### Paso 3: Desplegar
1. Sube proyecto a GitHub
2. Importa repositorio en Vercel
3. Click en "Deploy"

### Resultado
```
https://tu-proyecto.vercel.app
```

## 🥉 OPCIÓN 3: GitHub Pages (Gratis, Permanente)

### Paso 1: Crear repositorio
```bash
git init
git add .
git commit -m "Innova Tech Solar Website"
git branch -M main
git remote add origin https://github.com/tu-usuario/innova-tech-solar.git
git push -u origin main
```

### Paso 2: Habilitar GitHub Pages
1. Ve a Settings del repositorio
2. Busca "Pages"
3. Selecciona "Deploy from a branch"
4. Selecciona `main` branch
5. Guarda

### Resultado
```
https://tu-usuario.github.io/innova-tech-solar
```

## 📱 OPCIÓN 4: Tu Propio Servidor/Hosting

Si tienes hosting contratado (GoDaddy, HostGator, etc):

### Por FTP:
1. Abre cliente FTP (FileZilla, WinSCP)
2. Conecta con credenciales de hosting
3. Sube toda la carpeta `web-innova` a `public_html/`
4. Accede a tu dominio

### Por Administrador de Archivos:
1. Login en panel de control del hosting
2. Abre File Manager
3. Sube archivos a `public_html/`

### Resultado
```
https://tudominio.com
```

## 🔗 Conectar tu Dominio

### Si usas Netlify o Vercel:
1. Compra dominio (GoDaddy, Namecheap, etc)
2. En tu panel Netlify/Vercel → Domain settings
3. Añade tu dominio personalizado
4. Actualiza DNS (Netlify te da las instrucciones)

### Si usas hosting tradicional:
1. Compra dominio
2. En hosting, apunta dominio a servidor
3. Sube archivos vía FTP
4. Listo

## 📧 Integrar Formulario de Contacto

El formulario actual no envía emails. Opciones:

### Opción A: Formspree (Gratis, Recomendado)
1. Ve a https://formspree.io
2. Haz login
3. Crea nuevo formulario
4. Copia tu ID
5. En `index.html`, busca `<form class="contact-form">`
6. Agrega `action="https://formspree.io/f/TU_ID"` y `method="POST"`

**Código resultante:**
```html
<form class="contact-form" action="https://formspree.io/f/xyzabc" method="POST">
    <input type="text" name="name" placeholder="Tu nombre" required>
    <input type="email" name="email" placeholder="Tu email" required>
    <input type="tel" name="phone" placeholder="Tu teléfono" required>
    <select name="kit" required>
        <option value="">Selecciona un kit</option>
        ...
    </select>
    <textarea name="message" placeholder="Mensaje adicional" rows="4"></textarea>
    <button type="submit" class="btn-primary">Enviar Solicitud</button>
</form>
```

### Opción B: EmailJS (Más control)
1. Ve a https://www.emailjs.com
2. Regístrate gratis
3. Sigue tutoriales para integrar con JavaScript
4. Los emails van a tu correo automáticamente

### Opción C: Usar Netlify Forms (Si despliegas en Netlify)
```html
<form name="contact" method="POST" netlify>
    <input type="text" name="name" placeholder="Tu nombre" required>
    <input type="email" name="email" placeholder="Tu email" required>
    ...
</form>
```

## ✅ Checklist Pre-Despliegue

Antes de publicar, verifica:

- [ ] Todas las 5 imágenes están en `assets/images/`
- [ ] Los nombres de archivos son exactos (minúsculas, sin espacios)
- [ ] El teléfono está actualizado en la sección de contacto
- [ ] El email es correcto
- [ ] Los precios son actuales
- [ ] Las características describen tus productos
- [ ] La calculadora calcula correctamente
- [ ] La página se ve bien en móvil (responsivo)
- [ ] Los botones funcionan
- [ ] El formulario está configurado para recibir emails

## 🔍 Probar Antes de Desplegar

### Localmente
```bash
cd web-innova
python -m http.server 8000
# Abre http://localhost:8000 en tu navegador
```

### Verificar en móvil
1. Desde tu PC, abre DevTools (F12)
2. Haz clic en icono móvil
3. Simula diferentes dispositivos

## 📊 Monitoreo Post-Despliegue

Después de desplegar:

### Google Analytics (Gratis)
1. Ve a https://analytics.google.com
2. Crea cuenta
3. Copia código de seguimiento
4. Agrega a `<head>` en `index.html`
5. Monitorea visitantes, clics, etc

### Google Search Console
1. Ve a https://search.google.com/search-console
2. Verifica tu dominio
3. Monitorea apariciones en Google

## 🎯 Dominio Personalizado (Importante)

**Sin dominio personalizado:**
```
https://tu-proyecto.netlify.app (no profesional)
```

**Con dominio personalizado:**
```
https://innovacorporation.tech (profesional)
```

### Costo de dominio
- **Primer año**: $7-15 USD
- **Años siguientes**: $10-15 USD
- **Dónde**: GoDaddy, Namecheap, Google Domains

### ROI
Un cliente solar vale $20M+, dominio cuesta $10. Vale 100% la pena.

## 📞 Soporte

Si tienes problemas:

1. **Imágenes no aparecen**
   - Verifica nombres exactos
   - Verifica ruta `assets/images/`
   - Abre consola (F12) para ver errores

2. **Página no carga**
   - Verifica que todos los archivos estén en la carpeta
   - Comprueba que no hay errores de sintaxis
   - Intenta en otro navegador

3. **Formulario no funciona**
   - Verifica que integraste Formspree/EmailJS
   - Comprueba email de confirmación
   - Revisa spam/correo no deseado

---

**¡Tu página está lista para conquistar el mercado solar!** 🌞