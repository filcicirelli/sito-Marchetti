/* Villa Marchetti — interazioni base */

(function () {
  'use strict';

  /* Header che cambia stato allo scroll */
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (!header) return;
    if (window.scrollY > 30) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Menu mobile */
  const toggle = document.querySelector('.nav-toggle');
  const list   = document.querySelector('.nav-list');
  if (toggle && list) {
    toggle.addEventListener('click', () => {
      const open = list.classList.toggle('is-open');
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
    list.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      list.classList.remove('is-open');
      toggle.classList.remove('is-open');
      document.body.style.overflow = '';
    }));
  }

  /* Animazioni reveal on scroll */
  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && items.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(el => io.observe(el));
  } else {
    items.forEach(el => el.classList.add('is-visible'));
  }

  /* Anno corrente nel footer */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Form contatti — fallback mailto */
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const subject = encodeURIComponent(`Richiesta evento — ${data.get('evento') || 'Villa Marchetti'}`);
      const body = encodeURIComponent(
`Nome: ${data.get('nome') || ''}
Email: ${data.get('email') || ''}
Telefono: ${data.get('telefono') || ''}
Tipologia evento: ${data.get('evento') || ''}
Data orientativa: ${data.get('data') || ''}
Numero ospiti: ${data.get('ospiti') || ''}

Messaggio:
${data.get('messaggio') || ''}`);
      window.location.href = `mailto:info@villamarchetti.it?subject=${subject}&body=${body}`;
    });
  }
})();
