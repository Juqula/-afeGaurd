window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
      navbar.classList.add('fixed-top');
    } else {
      navbar.classList.remove('fixed-top');
    }
  });
  