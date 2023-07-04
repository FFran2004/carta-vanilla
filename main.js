handleMenuIconClick = () => {
  document.body.classList.toggle("open");
}

hideMenu = () => {
  document.body.classList.remove("open");
}

// funcion para boton scroll hacia el inicio.
function redirectInicio() {
  window.location.href = "#";
}

//funcion para animacion de imagen
window.addEventListener('scroll', function() {
  var logoImg = document.getElementById('logo-img');
  var scrollDownPixels = 200; // Número de píxeles hacia abajo para activar la animación

  if (window.scrollY > scrollDownPixels) {
    logoImg.classList.add('animate__animated', 'animate__fadeInLeftBig'); // Agrega la clase 'animate' al elemento
  }
});
