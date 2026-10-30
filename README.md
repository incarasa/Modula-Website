# Sitio web de Modula

Sitio estático en HTML, CSS y JavaScript, sin librerías ni pasos de compilación. Se edita con cualquier editor y se sube tal cual al hosting.

## Archivos

```
index.html        Todo el contenido (textos, secciones, enlaces)
css/estilos.css   Todos los estilos, con un índice al inicio
js/main.js        Interacciones (menú, animaciones, proceso, preguntas, enlaces de WhatsApp)
img/              Favicon, icono de iPhone, imagen para compartir e imágenes del caso NutriSenda
og/               Fuente de la imagen para compartir (og-card.html → img/og-modula.png)
fonts/            Fuentes de Modula en woff2 (se declaran al inicio de css/estilos.css)
vercel.json       Caché del navegador en Vercel y redirección del dominio de Vercel a ismodula.com
robots.txt        Permite a los buscadores rastrear todo y les indica el sitemap
sitemap.xml       Páginas del sitio para Google (añade cada página nueva)
docs/             Copia del sistema de diseño de Modula
CLAUDE.md         Contexto del proyecto para Claude Code
```

## Cambios frecuentes

| Quiero cambiar…                    | Dónde                                                                 |
| ---------------------------------- | --------------------------------------------------------------------- |
| Un texto                           | `index.html`. Cada sección empieza con un comentario en mayúsculas.   |
| El número o el mensaje de WhatsApp | `js/main.js` (`WHATSAPP_NUMBER`, `WHATSAPP_MESSAGE`). Todos los enlaces con `data-whatsapp` lo usan. |
| El correo                          | Cierre y footer de `index.html` (`mailto:`)                            |
| El enlace de Instagram             | Footer de `index.html` (marcado como PENDIENTE)                        |
| Un color de marca                  | Sección 1 de `css/estilos.css` (tokens)                                |
| Una pregunta frecuente             | Copia un bloque `.faq__item` y cambia sus `id`                         |
| Un paso del proceso                | Copia un `<li class="step">` y ajusta `step--N` y `data-phase`         |

## Convenciones

- **Clases.** `bloque__parte` y `bloque--variante` (por ejemplo `step__card`, `chip--rosa`).
- **Color de acento de una tarjeta.** Sin clase es violeta; `acc-rosa`, `acc-purpura` o `acc-teal` lo cambian.
- **Animación de entrada.** Añade la clase `rv` a cualquier elemento para que aparezca al hacer scroll; `data-delay="1"` a `"6"` lo retrasa de 80 en 80 ms.
- **Botones de WhatsApp.** Añade `data-whatsapp` a cualquier enlace. Para un mensaje distinto: `data-whatsapp="Hola Modula, quiero un manual de marca"`.
- **Iconos y logo.** Están en el sprite al final de `index.html` y se usan con `<svg><use href="#i-check"/></svg>`.
- **Movimiento reducido.** Si el visitante lo pide en su sistema, todas las animaciones se desactivan.

## Publicar

Sube la carpeta completa (con `index.html` en la raíz) a tu hosting. Para probar en tu computador, abre `index.html` en el navegador.
