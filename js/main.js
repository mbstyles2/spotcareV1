// Header photo marquee: duplicate the strip once so the -50% scroll loops seamlessly.
(function () {
  var track = document.querySelector('.sc-marquee-track');
  if (!track) return;
  Array.prototype.slice.call(track.children).forEach(function (n) {
    var c = n.cloneNode(true); c.setAttribute('aria-hidden', 'true'); track.appendChild(c);
  });
})();
