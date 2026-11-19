'use strict';

const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu-principal');
const floatingContact = document.querySelector('.floating-contact');

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menu');
  menu.classList.remove('is-open');
}

menuButton.addEventListener('click', () => {
  const nextOpen = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(nextOpen));
  menuButton.setAttribute('aria-label', nextOpen ? 'Fechar menu' : 'Abrir menu');
  menu.classList.toggle('is-open', nextOpen);
});

menu.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});

document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 760) closeMenu();
}, { passive: true });

function updateHeader() {
  header.classList.toggle('scrolled', window.scrollY > 16);
}
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

document.querySelectorAll('a[href="#"], a[href="#topo"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    closeMenu();
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
    history.replaceState(null, '', window.location.pathname + window.location.search);
  });
});

// Links work without JavaScript; this only normalizes the contextual message.
const phone = '555591120509';
document.querySelectorAll('[data-whatsapp]').forEach((link) => {
  const plan = link.dataset.plan;
  const message = plan
    ? `Olá, tenho interesse no Plano ${plan} para o desenvolvimento de uma marca`
    : 'Olá, tenho interesse no desenvolvimento de uma marca';
  link.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
});

if ('IntersectionObserver' in window) {
  const links = [...menu.querySelectorAll('a[href^="#"]')];
  const sections = links.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const link = links.find((item) => item.getAttribute('href') === `#${entry.target.id}`);
      if (!link) return;
      if (entry.isIntersecting) {
        links.forEach((item) => item.removeAttribute('aria-current'));
        link.setAttribute('aria-current', 'location');
      } else if (link.getAttribute('aria-current')) {
        link.removeAttribute('aria-current');
      }
    });
  }, { rootMargin: '-15% 0px -65% 0px' });
  sections.forEach((section) => sectionObserver.observe(section));

  const contactObserver = new IntersectionObserver(([entry]) => {
    const hide = entry.isIntersecting;
    floatingContact.classList.toggle('is-hidden', hide);
    floatingContact.tabIndex = hide ? -1 : 0;
    floatingContact.setAttribute('aria-hidden', String(hide));
  }, { threshold: 0.4 });
  contactObserver.observe(document.querySelector('#contato'));
}
