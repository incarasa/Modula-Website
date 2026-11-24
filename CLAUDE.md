# Sitio web de Modula — contexto para Claude

Modula es un estudio de diseño y desarrollo web (Colombia) que hace sitios web y branding (logo, identidad visual y manual de marca) para negocios. Este repositorio es su sitio principal, publicado en ismodula.com.

## Reglas del proyecto

- **Stack: HTML, CSS y JavaScript puros.** Sin React, Tailwind, librerías ni pasos de compilación. Los archivos se editan y se despliegan tal cual. No propongas migrar a un framework.
- **Un archivo por tipo:** `index.html` (contenido), `css/estilos.css` (estilos), `js/main.js` (interacciones). No crees archivos CSS o JS nuevos sin una razón clara.
- **Cambios pequeños y en el lugar.** Edita lo que se pide sin reescribir secciones enteras ni reformatear lo que no cambió.
- **Mantén los comentarios de sección** en los tres archivos y el índice al inicio de `estilos.css`; si añades una sección, añádela también al índice.
- Lee `README.md` para saber dónde vive cada cosa.

## Sistema de diseño

La fuente de verdad es `docs/sistema-de-diseno/` (copia del sistema «Modula»). Léelo antes de cambios visuales:

- `README.md`: voz, color, tipografía, formas, movimiento y accesibilidad.
- `web.md`: cómo se construye el sitio (estructura, convenciones, breakpoints).
- `tokens.json`: valores exactos de color, espaciado, radios y sombras.
- `componente-*.md`: reglas del logo, botones, tarjetas y chips.

El sitio web es **solo tema claro, por decisión de Modula**. La guía del sistema de diseño (`docs/sistema-de-diseno/README.md`, `tokens.json`) todavía describe un tema oscuro para otras piezas (presentaciones, piezas gráficas): no lo traigas al sitio.

Lo esencial:

- **Colores** siempre con los tokens de la sección 1 de `estilos.css` (`var(--violeta)`, `var(--text-muted)`…), nunca hexadecimales sueltos en los componentes. **Un solo tema, claro:** no hay modo oscuro (`color-scheme: light` en `:root` y en la meta del `<head>`); no añadas bloques `prefers-color-scheme` ni `data-theme`.
- **Texto de color:** usa `--accent-text`, `--rosa-texto`, `--teal-texto` y `--purpura-texto`; `rosa` y `teal` puros no llegan a 4.5:1 sobre blanco.
- **Tipografías:** títulos en Bricolage Grotesque 800, texto en Plus Jakarta Sans, chips/botones/etiquetas en Barlow MAYÚSCULAS con tracking, y como máximo una frase por título en Fraunces cursiva con el degradado (clase `.em`).
- **Íconos de contacto:** además de WhatsApp (`#i-wa`), se permiten Instagram (`#i-instagram`) y el sobre de correo (`#i-mail`), solo en el footer y en la información de contacto. Todos van en el sprite y en `currentColor`.
- **Formas:** todo lo interactivo es píldora; tarjetas con radio de 16–24 px; sin bordes de color en un solo lado; sin emoji.
- **Logo:** «m» + anillo de nueve festones (`#m-ring` en el sprite) + «dula». El anillo no se usa como fondo grande ni girando.
- **Movimiento:** aparición al hacer scroll con la clase `rv` y `data-delay`; una animación protagonista por sección como máximo; todo se apaga con `prefers-reduced-motion`.
- **Un solo botón primario** (degradado) por pantalla.

## Voz y textos

- Español de Colombia, **tuteo** («Escríbenos», «Puedes», «Asegúrate»). Nunca voseo («Escribinos», «Podés») ni usted.
- Primero el problema del cliente, luego lo que hace Modula. Frases cortas y concretas; promesas con resultados, no con adjetivos.
- Títulos en mayúscula inicial de frase. Separa conceptos con el punto medio (·).
- «Modula» en el texto; «modula» en minúscula solo dentro del logo.

## Contacto

- WhatsApp: +57 322 871 3697. El número y el mensaje están en `js/main.js` (`WHATSAPP_NUMBER`, `WHATSAPP_MESSAGE`); todo enlace con `data-whatsapp` los usa. No hay formularios: los botones de propuesta abren WhatsApp directamente.
- Instagram: @is.modula (https://www.instagram.com/is.modula/). Está en el footer y como `sameAs` en el JSON-LD del `<head>`; si cambia, actualiza los dos.
- Correo: contacto@ismodula.com. Dominio: ismodula.com (los ejemplos usan `tunegocio.ismodula.com`).
- No uses modula.studio ni números de ejemplo.

## Proyectos y contenido

- **NutriSenda** (bienestar corporativo: charlas y refrigerios saludables). Modula hizo su marca completa (logo, isotipos, manual, paleta, tipografías, ilustraciones, fotografía) y su sitio, ya publicado en https://nutrisenda.co. Su código está en la carpeta hermana `../nutrisenda-landing`: úsala como fuente de textos e imágenes para la maqueta. Sus colores y fuentes solo se usan dentro de su maqueta (`.ns` en el CSS).
- Los precios no se publican: el trabajo es a medida y se cotiza tras una conversación.
- Servicios futuros (anunciados como «En camino»): papelería, piezas para redes y gestión de redes por suscripción.

## Rendimiento

- No uses `filter: blur()` ni `backdrop-filter` en elementos grandes o animados en móvil: en iPhone dejan el hero en blanco al cargar y retrasan el menú. Para manchas de color usa `radial-gradient` (como `.blob`); el vidrio de la barra y el menú solo va desde 1024 px; debajo, la barra usa `--glass-solid` y el menú `--bg` (opaco).
- Las fuentes de Modula están en `fonts/` (woff2, subconjunto latin) y se declaran en la sección 0 de `estilos.css`, con respaldos ajustados (`size-adjust`) para que el texto no salte. No vuelvas a cargarlas desde Google Fonts. Si cambias un archivo de `fonts/`, cámbiale el nombre: `vercel.json` lo guarda en caché un año como inmutable.
- **CSS, JS e imágenes sin caché larga.** `vercel.json` les pone `public, max-age=0, must-revalidate`: el navegador pregunta en cada visita si hay versión nueva, y Vercel responde 304 (sin volver a descargar) si no cambió. Con la caché de un día que había antes, quien ya había entrado siguió viendo el `estilos.css` viejo después de publicar (el footer nuevo salía sin estilos). Estos archivos cambian sin cambiar de nombre; las fuentes no, por eso solo ellas tienen caché de un año.
- **El `?v=2` de `estilos.css` y `main.js`** en `index.html` se añadió una sola vez, para que los navegadores que aún guardaban la versión con la regla de un día bajaran la nueva de inmediato. Con la regla actual **no hace falta cambiar ese número en cada publicación**; solo súbelo si algún día vuelve a haber una caché larga para CSS o JS.
- El titular del hero (h1) no lleva animación de entrada: es lo que mide Google como contenido principal (LCP).
- Mantén las etiquetas Open Graph y `twitter:card` del `<head>` de `index.html`, con `og:image` en URL absoluta. La imagen `img/og-modula.png` (1200 × 630) se genera desde `og/og-card.html`; si cambia el dominio, actualiza `og:url` y `og:image`.

## SEO

- **Una sola URL oficial: https://ismodula.com.** El `canonical`, las etiquetas Open Graph, el JSON-LD, `robots.txt` y `sitemap.xml` usan siempre ese dominio. `vercel.json` redirige (301) modula-website-ten.vercel.app a ismodula.com; no enlaces a dominios de Vercel.
- **Sitemap al día:** al crear una página, añádela a `sitemap.xml` y actualiza `lastmod` de las que cambien.
- **Cada página con lo suyo:** `<title>`, meta description (menos de 155 caracteres, en tuteo) y `<link rel="canonical">` propios. En la portada, `og:description` repite la meta description.
- **Ubicación:** Modula es un estudio remoto con base en Bogotá que atiende clientes en toda Colombia. En textos y datos estructurados di «Bogotá» y «toda Colombia».
- **Nunca publiques una dirección física** (calle, oficina ni código postal): no hay oficina. En el JSON-LD (`ProfessionalService`), `address` lleva solo ciudad, región y país.

## Pendientes

- Cuando haya más proyectos, la sección «Proyecto destacado» puede pasar a varios casos.

## Antes de terminar un cambio

- Abre `index.html` en el navegador y revisa escritorio y móvil (~390 px): sin scroll horizontal y con los textos legibles. El sitio solo tiene tema claro: no hace falta probarlo en oscuro.
- Revisa que no queden voseos ni datos de contacto viejos.
