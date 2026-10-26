// Contact form. The static site has no server, so the enquiry is sent through
// WhatsApp (or the visitor's email app) with the details pre-filled.
(function () {
  var form = document.getElementById('enquiry-form');
  if (!form) return;
  var WA = '2349036165264', MAIL = 'spotlesscare2service@gmail.com';

  function val(n) { return form.elements[n].value.trim(); }
  function valid() {
    var ok = true;
    ['name', 'phone', 'service', 'details'].forEach(function (n) {
      var f = form.elements[n], bad = !f.value.trim();
      f.closest('.fld').classList.toggle('bad', bad); if (bad) ok = false;
    });
    var em = form.elements.email, badMail = em.value.trim() && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em.value.trim());
    em.closest('.fld').classList.toggle('bad', !!badMail); if (badMail) ok = false;
    return ok;
  }
  function message() {
    return 'Hello Spotless Care, I would like a quotation.\n\nName: ' + val('name') +
      '\nPhone/WhatsApp: ' + val('phone') + (val('email') ? '\nEmail: ' + val('email') : '') +
      '\nService needed: ' + val('service') + '\n\nSpace and schedule: ' + val('details');
  }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!valid()) { var b = form.querySelector('.bad input,.bad select,.bad textarea'); if (b) b.focus(); return; }
    window.open('https://wa.me/' + WA + '?text=' + encodeURIComponent(message()), '_blank', 'noopener');
  });
  document.getElementById('send-email').addEventListener('click', function () {
    if (!valid()) return;
    location.href = 'mailto:' + MAIL + '?subject=' + encodeURIComponent('Website enquiry — ' + val('service')) + '&body=' + encodeURIComponent(message());
  });
  var q = new URLSearchParams(location.search).get('service');
  if (q) form.elements.service.value = q;
})();
