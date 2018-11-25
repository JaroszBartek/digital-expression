//hamburger button
let hamburger = document.querySelector (".site-nav--toggle");
hamburger.addEventListener("click", function() {
  document.querySelector(".site-nav__container").classList.toggle("is-expanded");
}, false)

// show/hide contact
let contactShow = document.querySelector (".contact__btn--show");
contactShow.addEventListener("click", function() {
  document.querySelector(".contact-container").classList.add("is-visible");
}, false);

let contactClose = document.querySelector (".contact__btn--close");
contactClose.addEventListener("click", function() {
  document.querySelector(".contact-container").classList.remove("is-visible");
}, false)
