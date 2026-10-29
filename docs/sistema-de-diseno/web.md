# Sitio web: implementación

Guía para construir el sitio y las landing pages de Modula a partir de este sistema. Se hacen en **HTML, CSS y JavaScript sin librerías ni compilación**: archivos que se editan directamente y se suben tal cual al hosting. No uses React, Tailwind ni herramientas de build.

## Estructura de archivos

```
index.html        Contenido; cada sección abre con un comentario en mayúsculas
css/estilos.css   Estilos, con un índice al inicio y los tokens en la sección 1
js/main.js        Interacciones; una función por comportamiento y el arranque al final
img/              Favicon e imágenes (archivos reales, no base64)
LEEME.md          Dónde cambiar cada cosa
```

Un solo archivo de CSS y uno de JS por sitio. El código va formateado (una propiedad por línea en los bloques largos) y comentado en español.

## Tokens y fuentes

- **Tokens como variables CSS** en `:root`, con los mismos nombres de `tokens.json` (`--tinta`, `--violeta`, `--rosa`, `--teal`, `--purpura`, `--violeta-medio`, `--rosa-claro`, `--muted-oscuro`…) y los semánticos (`--bg`, `--bg-soft`, `--card`, `--text`, `--text-muted`, `--accent-text`, `--rosa-texto`, `--teal-texto`, `--border-subtle`, `--border-strong`). El tema oscuro redefine solo los semánticos, en `@media (prefers-color-scheme: dark)` y en `:root[data-theme="dark"]`. Ningún componente usa un hexadecimal suelto: siempre un token.
- **Fuentes** desde Google Fonts: Bricolage Grotesque (opsz 12–96, 600–800), Plus Jakarta Sans (400–700), Barlow (500–700) y Fraunces cursiva (600, 700). Carga solo los pesos que se usan.

## Convenciones de código

- **Clases** con el patrón `bloque__parte` y `bloque--variante` (`step__card`, `chip--rosa`, `btn--primary`).
- **Acento de una tarjeta** con las clases `acc-rosa`, `acc-purpura` y `acc-teal` (sin clase, violeta), que fijan `--acc` (texto) y `--acc-raw` (color de marca).
- **Aparición al hacer scroll** con la clase `rv` y `data-delay="1"`…`"6"` (80 ms cada paso). JS solo oculta lo que empieza fuera de pantalla, así que sin JS todo se ve.
- **Logo e iconos** en un sprite SVG al final del HTML, usados con `<use href="#id">`. El anillo del logo es `#m-ring`.
- **Datos de contacto** en constantes al inicio de `main.js` (`WHATSAPP_NUMBER`, `CONTACT_EMAIL`).

## Estructura de la página

**Nav** fija (vidrio al hacer scroll, enlace activo subrayado con el degradado) → **Hero** (chip, H1 con frase en serif degradada, párrafo, dos botones, cinta de servicios) → **Problema** (chip rosa, título fijo a la izquierda, cuatro problemas con su solución) → **Servicios** (rejilla: web, identidad visual, manual de marca, acompañamiento y próximos servicios) → **Proyecto destacado** (maqueta del sitio del cliente en una ventana y ficha de su paleta) → **Por qué Modula** (valores y comparativa) → **Proceso** (mini-ventana de etapas a la izquierda; seis pasos que se activan al hacer scroll) → **FAQ** → **Cierre** en degradado → **Footer**, más el botón flotante de WhatsApp y la ventana «Solicitar propuesta» que arma el mensaje de WhatsApp.

Cada sección usa `.band` (relleno vertical de 72–120 px) y `.wrap` (contenedor de 1152 px con gutters de 20 px en móvil y 32 px desde 640 px), con la cuadrícula de 44 px.

## Breakpoints

640 px (gutters, botones en fila), 768 px (rejilla de dos columnas), 1024 px (navegación completa, dos columnas con columna fija en problema y proceso), 1240 px (tarjetitas flotantes del hero). Diseña móvil primero.

## Decoración y movimiento

- El anillo del logo aparece solo en el logo y como ilustración dentro de las tarjetas de branding. **No se usa como fondo grande ni girando**: sobrecarga el hero y el cierre.
- Fondos: cuadrícula, hasta tres blobs por sección y el degradado de tres paradas en el cierre.
- Una animación protagonista por sección como máximo (la maqueta que se arma, la línea del proceso).
- Respeta `prefers-reduced-motion`: sin parallax, sin flotado y sin aparición.

## Reglas de implementación

- Todo botón es `<button>` o `<a>` con foco visible (anillo de 2 px en `accent-text`).
- CTAs a WhatsApp con el mensaje precargado «Hola Modula, me gustaría pedir una cotización»: +57 322 871 3697 (wa.me/573228713697). El correo, contacto@ismodula.com, se muestra como texto con botón para copiar.
- Textos en tuteo; revisa que no queden voseos («Escribinos», «Asegurate», «Podés»).
- Imágenes con `alt` descriptivo, `object-fit: cover` y `width`/`height` para evitar saltos de maquetación.
- Un solo CTA primario por pantalla.
