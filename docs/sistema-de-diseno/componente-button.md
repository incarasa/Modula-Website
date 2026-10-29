Botones en píldora completa (`radius-full`), Barlow en mayúsculas. El primario lleva el degradado de marca con sombra de color; el secundario es un contorno fino; sobre la sección final, uno blanco y uno de contorno claro.

**Qué debes proporcionar.** Una etiqueta imperativa en segunda persona de tú («Solicita una propuesta», «Conoce el proceso»), nunca voseo («Solicitá»); un destino (`href` o acción de scroll); y, si es el CTA principal de la pantalla, el punto pulsante al inicio.

**Reglas**
- Un solo primario por pantalla; el resto, secundario. En la barra de navegación va en tamaño pequeño (`m-btn--sm`).
- Hover: escala 1.05; activo: 0.95. Con `prefers-reduced-motion`, sin escala.
- Texto `on-brand` (blanco) sobre el degradado: contraste 4.1:1 en el extremo rosa, bajo AA para 11 px bold. Mantenerlo es una decisión de marca; si necesitas AA estricto, usa el botón blanco sobre fondo oscuro o acorta el degradado hacia el violeta.
- Sobre el degradado final, el botón blanco lleva texto `tinta` (19:1) y un punto teal.
- El botón de WhatsApp usa `whatsapp` con texto blanco (2.0:1) solo porque es el color oficial del servicio y el icono es el mensaje; si le añades etiqueta, hazla en `tinta` o aumenta su tamaño y peso.
- Foco por teclado: anillo sólido de 2 px en `accent-text` con 3 px de separación (añadido en este sistema).