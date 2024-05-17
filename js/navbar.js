document.addEventListener('DOMContentLoaded', function () {
  var navbarToggler = document.querySelector('.navbar-toggler');
  var overlay = document.querySelector('.overlay');

  navbarToggler.addEventListener('click', function () {
    var isOpen = navbarToggler.getAttribute('aria-expanded');
    if (isOpen === 'true') {
      overlay.style.display = 'block'; // Afișează overlay-ul
      document.body.style.overflow = 'hidden';
    } else {
      overlay.style.display = 'none'; // Ascunde overlay-ul
      document.body.style.overflow = 'auto';
    }
  });
});
