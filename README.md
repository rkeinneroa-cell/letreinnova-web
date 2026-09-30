# LetreInnova Web

Landing corporativa estática hecha con **Astro + Tailwind CSS 4**.

## 1. Requisitos

- Node.js 22.12 o superior (usa una versión LTS/par: Node 22 o 24).
- VS Code recomendado.
- Extensión oficial **Astro** para VS Code (opcional, pero recomendable).

## 2. Ejecutar el proyecto

```bash
npm install
npm run dev
```

Luego abre la URL que muestra Astro (normalmente `http://localhost:4321`).

## 3. Dónde cambiar la información

Archivo principal de datos:

```text
src/data/site.ts
```

Ahí puedes cambiar:

- número de WhatsApp
- mensaje predeterminado
- datos de contacto
- servicios
- clientes
- videos
- imágenes del portafolio

## 4. Imágenes

### Logo

```text
public/images/brand/logo-letreinnova.png
```

> Se incluyó temporalmente un recorte de la imagen compartida. Lo ideal es reemplazarlo luego por el logo original PNG transparente o SVG.

### Servicios

```text
public/images/services/
```

Puedes reemplazar cada SVG por JPG/WebP/AVIF y actualizar la ruta en `src/data/site.ts`.

### Portafolio / collage

```text
public/images/portfolio/
```

### Logos de clientes

```text
public/images/clients/
```

## 5. Videos

Opción A — Archivos locales (sin backend):

```text
public/videos/
```

Ejemplo:

```text
public/videos/instalacion-01.mp4
```

Y en `src/data/site.ts`:

```ts
{ title: 'Instalación', src: '/videos/instalacion-01.mp4', poster: '/images/portfolio/trabajo-01.webp' }
```

No necesitas una base de datos ni un servicio de storage aparte, pero el archivo de video sí consume espacio/ancho de banda del hosting. Para muchos videos o videos pesados conviene alojarlos en YouTube/Facebook/Vimeo y embeberlos.

## 6. WhatsApp

Está configurado con el número visto en las referencias:

```text
918 131 967
```

Formato utilizado:

```text
51918131967
```

Puedes cambiarlo en `src/data/site.ts`.

Además hay un formulario que **no guarda datos**: construye el mensaje y abre WhatsApp.

## 7. Build para producción

```bash
npm run build
```

Astro generará:

```text
dist/
```

Esa carpeta contiene la web estática lista para desplegar.

## 8. Netlify

Configuración típica:

```text
Build command: npm run build
Publish directory: dist
```

No necesitas comprar dominio para la primera versión. Luego puedes conectar uno propio.

## Estructura

```text
src/
├─ components/
│  ├─ Header.astro
│  ├─ Hero.astro
│  ├─ Services.astro
│  ├─ Projects.astro
│  ├─ WhyUs.astro
│  ├─ Clients.astro
│  ├─ Contact.astro
│  ├─ Footer.astro
│  └─ FloatingWhatsApp.astro
├─ data/
│  └─ site.ts
├─ layouts/
│  └─ MainLayout.astro
├─ pages/
│  └─ index.astro
└─ styles/
   └─ global.css
```
