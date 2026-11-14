// Menú accesible: funciona con clic en móvil y teclado/ratón en computadora.
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.site-nav');
  const toggle = document.querySelector('.menu-toggle');
  if (!nav || !toggle) return;
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.querySelector('.menu-label').textContent = open ? 'Cerrar' : 'Menú';
    toggle.querySelector('.menu-icon').textContent = open ? '✕' : '☰';
  });
  document.querySelectorAll('.nav-trigger').forEach(button => {
    button.addEventListener('click', () => {
      const group = button.closest('.nav-group');
      const open = group.classList.toggle('open');
      button.setAttribute('aria-expanded', String(open));
      document.querySelectorAll('.nav-group').forEach(other => {
        if (other !== group) {
          other.classList.remove('open');
          const trigger = other.querySelector('.nav-trigger');
          if (trigger) trigger.setAttribute('aria-expanded', 'false');
        }
      });
    });
  });
  document.addEventListener('click', event => {
    if (!nav.contains(event.target)) {
      nav.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.querySelector('.menu-label').textContent = 'Menú';
      toggle.querySelector('.menu-icon').textContent = '☰';
      document.querySelectorAll('.nav-group').forEach(group => {
        group.classList.remove('open');
        const trigger = group.querySelector('.nav-trigger');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      });
    }
  });
});
