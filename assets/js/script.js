/* ============================================================
   Evaluación de Proyectos — Ferretería El Tornillo
   script.js  |  Versión 2.0
   ============================================================ */

/* ── ACCORDION (bloques del formulario) ── */
/**
 * Abre o cierra un bloque del formulario al hacer clic en su header.
 * @param {HTMLElement} header - El encabezado del bloque clickeado.
 */
function toggleBlock(header) {
  const block = header.closest('.form-block');
  block.classList.toggle('open');
  updateProgress();
}

/* ── PROGRESS BAR ── */
/**
 * Calcula cuántos campos del formulario están completos
 * y actualiza la barra de progreso visual.
 */
function updateProgress() {
  const selects  = document.querySelectorAll('.form-container select');
  const radNames = [
    'q3','q4','q6','q7','q8','q10',
    'q16','q17','q18','q19','q20','q21','q22','q26','q28'
  ];
  const textareas = document.querySelectorAll('.form-container textarea');

  let filled = 0;
  const total = selects.length + radNames.length + textareas.length;

  selects.forEach(s => { if (s.value) filled++; });

  radNames.forEach(name => {
    if (document.querySelector(`input[name="${name}"]:checked`)) filled++;
  });

  textareas.forEach(t => {
    if (t.value.trim().length > 3) filled++;
  });

  const pct = Math.round((filled / total) * 100);
  const bar = document.getElementById('fc-bar');
  if (bar) bar.style.width = pct + '%';
}

/* ── TABS ── */
/**
 * Muestra el panel de pestaña seleccionado y oculta el resto.
 * @param {string} id   - 'rf' o 'rnf'
 * @param {Event}  event - El evento click del botón de pestaña.
 */
function switchTab(id, event) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));

  const panel = document.getElementById('tab-' + id);
  if (panel) panel.classList.add('active');

  // Compatibilidad: se puede llamar con `event` o desde el atributo onclick con `event` global
  const btn = event ? event.currentTarget : window.event?.target;
  if (btn) btn.classList.add('active');
}

/* ── NAV + TOC: Intersection Observer ── */
/**
 * Resalta el link de navegación y la píldora del TOC
 * correspondiente a la sección visible en el viewport.
 */
(function initSectionObserver() {
  const sectionIds = ['caso', 'entrevista', 'analisis', 'requerimientos', 'okrs', 'perfiles'];

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;

        document.querySelectorAll('.nav-links a').forEach(a => {
          a.classList.toggle('act', a.getAttribute('href') === '#' + id);
        });

        document.querySelectorAll('.toc-item').forEach(a => {
          a.classList.toggle('vis', a.getAttribute('data-section') === id);
        });
      }
    });
  }, { threshold: 0.3 });

  sectionIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
})();

/* ── MOBILE MENU ── */
/**
 * Inicializa los eventos del menú mobile (hamburguesa + cierre).
 */
(function initMobileMenu() {
  const burger = document.querySelector('.nav-burger');
  const menu   = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('.mobile-menu .close-btn');

  if (burger && menu) {
    burger.addEventListener('click', () => menu.classList.toggle('open'));
  }

  if (closeBtn && menu) {
    closeBtn.addEventListener('click', () => menu.classList.remove('open'));
  }

  // Cierra el menú al hacer clic en cualquier link interno
  document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      if (menu) menu.classList.remove('open');
    });
  });
})();
