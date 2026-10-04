# LetreInnova Web

Sitio web corporativo estático para **LetreInnova — Publicidad que vende**, desarrollado con **Astro + Tailwind CSS 4**.

La web presenta los servicios de la empresa, proyectos realizados, información corporativa, clientes y un formulario de cotización conectado con WhatsApp.

## 1. Requisitos

- Node.js
- npm
- VS Code recomendado
- Extensión oficial de Astro para VS Code opcional

Comprobar versiones:

```bash
node -v
npm -v
```

## 2. Instalar y ejecutar

Instalar las dependencias del proyecto:

```bash
npm install
```

Iniciar el proyecto en modo desarrollo:

```bash
npm run dev
```

Astro mostrará normalmente una URL como:

```text
http://localhost:4321
```

## 3. Dónde cambiar la información

La información principal del sitio se encuentra en:

```text
src/data/site.ts
```

Desde este archivo se puede modificar:

- número de WhatsApp
- mensaje predeterminado
- correo electrónico
- redes sociales
- servicios
- imágenes de servicios
- proyectos
- clientes
- rutas de imágenes

---

## 4. Imágenes

La estructura principal de imágenes es:

```text
public/images/
├── brand/
├── clients/
├── hero/
├── projects/
│   ├── thumbs/
│   └── full/
└── services/
```

### Proyectos

- `thumbs/`: imágenes ligeras usadas en la galería Bento.
- `full/`: imágenes de mayor resolución usadas en el lightbox.

### Servicios

Las imágenes exclusivas de servicios se almacenan en:

```text
public/images/services/
```

Si una fotografía ya existe optimizada en `projects/thumbs`, se puede reutilizar sin duplicar el archivo.

---

## 5. Optimización de imágenes

El proyecto utiliza **Sharp** localmente para reducir el peso de las fotografías y convertirlas a WebP.

Optimizar imágenes de proyectos:

```bash
npm run optimize-images
```

Optimizar imágenes exclusivas de servicios:

```bash
npm run optimize-services
```

## Sharp se utiliza únicamente durante desarrollo y no aumenta el peso de la web publicada.

## 6. WhatsApp y contacto

La web utiliza WhatsApp en:

- botón de cotización del Header
- formulario de contacto
- Footer
- botón flotante

El formulario no almacena información ni necesita backend.

Construye el mensaje con los datos ingresados y abre WhatsApp para que el usuario lo envíe.

La configuración se encuentra en:

```text
src/data/site.ts
```

## 7. Build y despliegue

Generar la versión de producción:

```bash
npm run build
```

Astro creará:

```text
dist/
```

Para revisar el build localmente antes de publicarlo:

```bash
npm run preview
```

Actualmente el sitio se despliega manualmente en Netlify subiendo la carpeta:

```text
dist/
```

Si posteriormente se conecta un repositorio Git:

```text
Build command: npm run build
Publish directory: dist
```

## 8. Estructura principal

```text
src/
├── components/
│   ├── Header.astro
│   ├── Hero.astro
│   ├── Services.astro
│   ├── Projects.astro
│   ├── WhyUs.astro
│   ├── Clients.astro
│   ├── Contact.astro
│   ├── Footer.astro
│   └── FloatingWhatsApp.astro
├── data/
│   └── site.ts
├── layouts/
│   └── MainLayout.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css
```

## Pendientes

- agregar logos reales de clientes
- revisar responsive final
- comprobar enlaces de redes sociales y WhatsApp
- ejecutar `npm run build`
- revisar con `npm run preview`
- desplegar la versión final en Netlify
