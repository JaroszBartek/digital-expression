let hamburger = document.querySelector (".site-nav--toggle");
hamburger.addEventListener("click", function() {
  document.querySelector(".header").classList.toggle("is-expanded");
}, false)
