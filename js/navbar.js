// Mobile menu: open/close, Esc to close, close on link tap, mark the current page.
(function () {
  var nav = document.getElementById('site-nav'), open = document.querySelector('.sc-burger'), close = document.querySelector('.sc-nav-close');
  if (!nav || !open) return;
  function set(state) {
    nav.classList.toggle('open', state);
    open.setAttribute('aria-expanded', String(state));
    document.body.style.overflow = state ? 'hidden' : '';
    if (state && close) close.focus(); else if (!state) open.focus();
  }
  open.addEventListener('click', function () { set(true); });
  if (close) close.addEventListener('click', function () { set(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nav.classList.contains('open')) set(false); });
  var here = location.pathname.split('/').pop() || 'index.html';
  nav.querySelectorAll('a').forEach(function (a) {
    if (a.getAttribute('href').split('/').pop() === here) a.setAttribute('aria-current', 'page');
    a.addEventListener('click', function () { if (nav.classList.contains('open')) { nav.classList.remove('open'); document.body.style.overflow = ''; } });
  });
})();
