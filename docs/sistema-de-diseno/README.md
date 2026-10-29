Modula es un estudio de diseño y desarrollo web que construye sitios modernos, rápidos y profesionales para negocios que quieren conseguir clientes, no solo existir en internet. Este sistema reúne lo que ya vive en el prototipo del sitio (colores, tipografías, componentes) y lo extiende a presentaciones y piezas gráficas. Usa el nombre «Modula» en texto corrido y «modula» en minúscula solo dentro del logo.

## Fundamentos de contenido

**Voz.** Cercana, directa y segura, sin jerga técnica. Habla al cliente de tú («Tu sitio web debería ayudarte a conseguir clientes»), nunca de usted ni de vos: escribe «Asegúrate», «Puedes», «identificas», no «Asegurate», «Podés», «identificás». El prototipo mezcla voseo; el sitio actual ya usa tuteo y esa es la regla.

**Estructura de un mensaje.** Primero el dolor del cliente, después lo que Modula hace por él. Frases cortas, verbos concretos: «atraer, convencer y convertir», «Te acompañamos», «No desaparecemos». Cuando prometes algo, nómbralo con un resultado («Rendimiento y SEO desde el inicio»), no con un adjetivo.

**Casing.** Los títulos van en mayúscula inicial de frase, sin punto salvo que sea una oración completa («De la idea a la web publicada.»). Chips, etiquetas y botones van en MAYÚSCULAS con tracking en Barlow; la mayúscula es parte del estilo, no se escribe en el texto fuente de los títulos. Las preguntas llevan signo de apertura y cierre.

**Sin emoji ni signos decorativos.** El prototipo usa emoji dentro de iconos (📱 🕸️ 📋): es un provisional, se sustituye por iconos de trazo. Separa conceptos con el punto medio (·), como en «DISEÑO · DESARROLLO · ESTRATEGIA».

**Ejemplos reales.** Titular: «Tu sitio web debería ayudarte a conseguir clientes, no solo existir en internet.» Problema: «Una mala primera impresión cuesta clientes.» Promesa: «Te entregamos una herramienta para crecer.» Cierre: «Tu próximo cliente probablemente buscará tu negocio en internet.» Pie: «Sin compromiso · Respondemos en menos de 24 h».

**Datos de contacto.** Correo: contacto@ismodula.com. Dominio: ismodula.com (los ejemplos de ventana usan `tunegocio.ismodula.com`). WhatsApp: +57 322 871 3697 (enlace wa.me/573228713697). Las cotizaciones actuales muestran un número personal: reemplázalo por este. El prototipo todavía trae modula.studio y un WhatsApp de ejemplo de Argentina: no los uses.

## Fundamentos visuales

**Color.** Fondo blanco con `tinta` como texto y tres colores protagonistas: `violeta` (marca), `rosa` (acento) y `teal` (proceso, estado positivo). `amarillo` solo como punto o blob, nunca como texto. El degradado de marca (`gradient-brand`: violeta→rosa a 135°) marca lo importante: el CTA principal, la frase de énfasis y la sección final; no se usa para fondos de tarjeta ni para bordes. Los tokens semánticos (`bg`, `text`, `text-muted`, `accent-text`, `border-subtle`) cambian entre tema claro y oscuro; los colores de marca no.

**Tipografía.** Cuatro familias con un rol fijo. Títulos y números en `display` (Bricolage Grotesque 800 con tracking −0.025em); texto en `body` (Plus Jakarta Sans); interfaz en `ui` (Barlow semibold o bold, MAYÚSCULAS con tracking); y énfasis en `serif` (Fraunces cursiva 700) solo dentro de un título, una frase por título, siempre con el degradado de marca como relleno. Un título lleva como máximo una frase en serif.

**Espaciado y layout.** Escala de 4 px (`space-*`). Secciones con 96 px de padding vertical (`space-24`) y gutters de 20 px en móvil y 32 px desde 640 px. Contenedores de 1152, 1024 o 768 px según la sección (`container-*`). Cada sección clara lleva la cuadrícula de 44 px (`grid-pitch`).

**Formas.** Todo lo interactivo es píldora (`radius-full`): botones, chips, puntos, botón flotante. Contenedores grandes con `radius-3xl` (24 px), tarjetas de valor y ventanas con `radius-2xl` (16 px). Sin bordes de color en un solo lado.

**Bordes y sombras.** Bordes de 1 px en `border-subtle` (tinta al 7%). Sombras suaves y neutras en tarjetas y ventanas; las sombras de color (`shadow-cta`, `shadow-whatsapp`) solo bajo el botón de ese mismo color. El efecto vidrio (blanco 18%, desenfoque 14 px) solo en la barra de navegación.

**Fondos e imagen.** Cuadrícula de líneas violeta al 4.5%, blobs de degradado con desenfoque de 72 px (opacidad ≤ 11%) y, en las secciones oscuras o de cierre, el degradado de 3 paradas con cuadrícula blanca al 5%. Las fotos van dentro de un `BrowserWindow` con un degradado inferior de color; evita fotos de archivo genéricas.

**Movimiento.** Aparición al hacer scroll (traslación de 28 px y fundido en 0.7 s con `cubic-bezier(0.16, 1, 0.3, 1)`, con retrasos escalonados de 80 ms), blobs que flotan (10–16 s), punto de CTA que pulsa (3 s) y hover de botones a 1.05. Todo se desactiva con `prefers-reduced-motion`.

**Estados.** Hover: botones y ventanas crecen un 5%, tarjetas suben 4 px y ganan `shadow-lg`, enlaces pasan de `text-muted` a `text`. Activo: escala 0.95. Foco: anillo sólido de 2 px en `accent-text` con 3 px de separación (este sistema lo añade; el prototipo no tenía).

## Iconografía

Aún no hay un set propio. El prototipo usa emoji en los iconos de problema y una cruz «+» de trazo de 1.4 px en el FAQ; el criterio de este sistema es un único estilo de trazo de 1.5 px, esquinas redondeadas y color heredado, dentro de un cuadrado de `radius-xl`. Los marcos de ventana usan los tres puntos de semáforo (`dot-rojo`, `dot-amarillo`, `dot-verde`), que son decorativos. El único icono de marca de terceros es el de WhatsApp.

## Accesibilidad: lo que el prototipo debe corregir

Estas combinaciones del prototipo no llegan a 4.5:1 y este sistema las deja marcadas en sus tokens:
- Texto `rosa` de 10–11 px sobre blanco: 4.1:1 → usa `rosa-texto` (4.9:1).
- Texto `teal` sobre blanco: 2.1:1 → usa `teal-texto` (4.65:1); en cifras sobre fondo teal, usa `tinta`.
- Texto blanco del botón primario en el extremo rosa del degradado: 4.1:1.
- Blanco al 40–70% sobre el degradado de cierre: baja de 4.5:1 → mínimo 80%.
- `violeta` sobre `tinta`: 2.3:1 → en tema oscuro usa `accent-text` (#A99BFF, 8.0:1).
- Cifra blanca del paso 04 sobre `naranja`: 3.3:1.

## Cómo usar este sistema

Los tokens están en `tokens.json`; las clases de componentes (prefijo `m-`) en `components/bundle.css`, que ya importa las cuatro fuentes de Google Fonts. Para el sitio, sigue `web.md`; para presentaciones, piezas de redes y documentos, sigue `presentaciones.md`. Los logos están en el grupo *Logos*. Los componentes se guían por sus propios README; la primera frase de cada uno resume su función.