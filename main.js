const clickMenu = () => {
    const toggler = document.querySelector('.burguer');
    const menu = document.querySelector('.navbar-links');
    toggler.classList.toggle('rotate');
    menu.classList.toggle('active');
  }

// condicion que al tocar en cualquier parte de la pantalla se cierre el menu.
  document.addEventListener('click', (event) => {
      const toggler = document.querySelector('.burguer');
      const menu = document.querySelector('.navbar-links');
  
    if (!menu.contains(event.target) && !toggler.contains(event.target)) {
    menu.classList.remove('active');
    toggler.classList.remove('rotate');
    }
  });


  // funcion para boton scroll hacia el inicio.
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    var scrollToTopBtn = document.querySelector(".scroll-to-top");
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  }

  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }