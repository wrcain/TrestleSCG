document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.primary-nav');
function setNavOpen(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  mainNav.classList.toggle('open', open);
}
menuButton.addEventListener('click', () => setNavOpen(menuButton.getAttribute('aria-expanded') !== 'true'));
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setNavOpen(false)));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setNavOpen(false); });
document.querySelector('#year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    for(const entry of entries){
      if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}
    }
  }, {rootMargin: '0px 0px -35px 0px',threshold: 0.08});
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
} else { document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible')); }
