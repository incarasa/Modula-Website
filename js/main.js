/* ==========================================================================
   MODULA — Interacciones del sitio
   Sin librerías. Cada bloque es una función independiente: si no la
   necesitas, borra la función y su llamada al final del archivo.
   ========================================================================== */

/* --- Datos de contacto (cámbialos aquí) --- */
const WHATSAPP_NUMBER = "573228713697";
const WHATSAPP_MESSAGE = "Hola Modula, me gustaría pedir una propuesta para mi negocio.";

/* ¿El visitante pidió menos movimiento en su sistema? */
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;


/* --------------------------------------------------------------------------
   1. Navegación: fondo de vidrio al hacer scroll, menú móvil y enlace activo
   -------------------------------------------------------------------------- */
function setupNav() {
  const nav = document.getElementById("nav");
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");

  // Fondo de vidrio en cuanto la página se mueve
  const updateNavBackground = () => nav.classList.toggle("is-scrolled", window.scrollY > 12);
  window.addEventListener("scroll", updateNavBackground, { passive: true });
  updateNavBackground();

  // Menú móvil
  burger.addEventListener("click", () => setMobileMenu(menu.hidden));
  menu.addEventListener("click", (event) => {
    if (event.target.closest("a, button")) setMobileMenu(false);
  });

  // Subraya el enlace de la sección que está en pantalla
  const links = document.querySelectorAll(".nav__link");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === "#" + entry.target.id);
      });
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  links.forEach((link) => {
    const section = document.querySelector(link.getAttribute("href"));
    if (section) observer.observe(section);
  });
}

function setMobileMenu(open) {
  const nav = document.getElementById("nav");
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");
  menu.hidden = !open;
  nav.classList.toggle("is-open", open);
  burger.setAttribute("aria-expanded", String(open));
  burger.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
}


/* --------------------------------------------------------------------------
   2. Aparición al hacer scroll (elementos con la clase .rv)
   Solo oculta lo que empieza fuera de pantalla; lo demás se ve de una vez.
   -------------------------------------------------------------------------- */
function setupReveal() {
  if (prefersReducedMotion) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.remove("rv-pre");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

  document.querySelectorAll(".rv").forEach((element) => {
    const startsBelowScreen = element.getBoundingClientRect().top > window.innerHeight * 0.92;
    if (startsBelowScreen) {
      element.classList.add("rv-pre");
      observer.observe(element);
    }
  });
}


/* --------------------------------------------------------------------------
   3. Hero: el contenido sube y se desvanece al hacer scroll (desde 1024 px)
   -------------------------------------------------------------------------- */
function setupHeroParallax() {
  const hero = document.getElementById("heroInner");
  if (prefersReducedMotion || !window.matchMedia("(min-width: 1024px)").matches) return;

  let waiting = false;
  window.addEventListener("scroll", () => {
    if (waiting) return;
    waiting = true;
    requestAnimationFrame(() => {
      waiting = false;
      const y = window.scrollY;
      if (y > 900) return;
      hero.style.transform = `translateY(${y * 0.22}px)`;
      hero.style.opacity = String(1 - Math.min(y / 600, 1) * 0.85);
    });
  }, { passive: true });
}


/* --------------------------------------------------------------------------
   4. Luz que sigue al cursor en las tarjetas con la clase .spot
   Solo con mouse o trackpad: en pantallas táctiles no hay cursor que seguir.
   -------------------------------------------------------------------------- */
function setupCardSpotlight() {
  if (!window.matchMedia("(hover: hover)").matches) return;

  document.querySelectorAll(".spot").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const box = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${event.clientX - box.left}px`);
      card.style.setProperty("--my", `${event.clientY - box.top}px`);
    });
  });
}


/* --------------------------------------------------------------------------
   5. Maqueta de servicios: anima solo mientras está en pantalla
   -------------------------------------------------------------------------- */
function setupBuildAnimation() {
  const build = document.getElementById("build");
  if (!build || prefersReducedMotion) return;

  new IntersectionObserver((entries) => {
    entries.forEach((entry) => build.classList.toggle("play", entry.isIntersecting));
  }, { threshold: 0.3 }).observe(build);
}


/* --------------------------------------------------------------------------
   6. Proceso: los pasos se activan al hacer scroll y la mini-ventana avanza
   Cada paso lleva data-phase (0–3) con la etapa a la que pertenece.
   -------------------------------------------------------------------------- */
const PHASE_NAMES = ["Descubrimiento", "Diseño", "Desarrollo", "Lanzamiento"];

function setupProcess() {
  const list = document.getElementById("steps");
  const steps = [...list.querySelectorAll(".step")];
  const lineFill = document.getElementById("stepsFill");
  const trackers = [...document.querySelectorAll(".trk")];
  const currentStage = document.getElementById("nowStage");

  // Cuántos pasos tiene cada etapa
  const stepsPerPhase = [0, 0, 0, 0];
  steps.forEach((step) => stepsPerPhase[Number(step.dataset.phase)]++);

  function update() {
    // Un paso está activo cuando su número pasa el 62% de la altura de la pantalla
    const activationLine = window.innerHeight * 0.62;
    let lastActive = -1;

    steps.forEach((step, index) => {
      const number = step.querySelector(".step__n").getBoundingClientRect();
      const active = prefersReducedMotion || number.top + number.height / 2 < activationLine;
      step.classList.toggle("on", active);
      if (active) lastActive = index;
    });
    steps.forEach((step, index) => step.classList.toggle("now", index === lastActive));

    // Línea vertical de color
    const box = list.getBoundingClientRect();
    const progress = prefersReducedMotion ? 1 : clamp((activationLine - box.top - 28) / (box.height - 56), 0, 1);
    lineFill.style.setProperty("--fill", `${progress * 100}%`);

    // Barras de la mini-ventana
    const donePerPhase = [0, 0, 0, 0];
    steps.forEach((step) => {
      if (step.classList.contains("on")) donePerPhase[Number(step.dataset.phase)]++;
    });

    let currentPhase = 0;
    trackers.forEach((tracker, phase) => {
      const fraction = donePerPhase[phase] / stepsPerPhase[phase];
      tracker.querySelector(".trk__bar i").style.setProperty("--p", `${fraction * 100}%`);
      tracker.classList.toggle("done", fraction >= 1);
      if (fraction > 0) currentPhase = phase;
    });

    const isLastStep = lastActive === steps.length - 1;
    currentStage.textContent = isLastStep ? "Acompañamiento" : PHASE_NAMES[currentPhase];
  }

  let waiting = false;
  const onScroll = () => {
    if (waiting) return;
    waiting = true;
    requestAnimationFrame(() => { waiting = false; update(); });
  };

  // Solo escucha el scroll mientras la sección está en pantalla
  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        window.addEventListener("scroll", onScroll, { passive: true });
      } else {
        window.removeEventListener("scroll", onScroll);
      }
      update();
    });
  }).observe(document.getElementById("proceso"));

  window.addEventListener("resize", update);
  update();
}


/* --------------------------------------------------------------------------
   7. Preguntas frecuentes (acordeón)
   -------------------------------------------------------------------------- */
function setupFaq() {
  document.querySelectorAll(".faq__q").forEach((button) => {
    button.addEventListener("click", () => {
      const open = button.getAttribute("aria-expanded") !== "true";
      button.setAttribute("aria-expanded", String(open));
      button.closest(".faq__item").classList.toggle("open", open);
    });
  });
}


/* --------------------------------------------------------------------------
   8. Enlaces de WhatsApp
   Todo enlace con el atributo data-whatsapp abre el chat con el mensaje
   de WHATSAPP_MESSAGE. Si un botón necesita otro mensaje, ponlo como valor:
   data-whatsapp="Hola Modula, quiero un manual de marca"
   -------------------------------------------------------------------------- */
function setupWhatsAppLinks() {
  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    const message = link.dataset.whatsapp || WHATSAPP_MESSAGE;
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  });
}


/* --- Utilidades --- */
function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}


/* --- Arranque --- */
document.documentElement.classList.add("js");
setupNav();
setupReveal();
setupHeroParallax();
setupCardSpotlight();
setupBuildAnimation();
setupProcess();
setupFaq();
setupWhatsAppLinks();
