//hamburger button
let navFunctions = function (event) {
  document.querySelector(".site-nav__container").classList.toggle("is-expanded");
  document.body.classList.toggle("nav-opened");
};
let hamburger = document.querySelector (".site-nav--toggle");
hamburger.addEventListener("click", navFunctions, false);

// show/hide contact
let contactShow = document.querySelector (".contact__btn--show");
contactShow.addEventListener("click", function() {
  document.querySelector(".contact-container").classList.add("is-visible");
}, false);

let contactClose = document.querySelector (".contact__btn--close");
contactClose.addEventListener("click", function() {
  document.querySelector(".contact-container").classList.remove("is-visible");
}, false);


//Desktop mediaquery
//logo scroll animation

if (matchMedia) {
  const desktop = window.matchMedia("(min-width: 1200px)");
  desktop.addListener(DesktopChange);
  DesktopChange(desktop);
}
function DesktopChange(desktop) {
  let logoAnimation = document.querySelector (".banner__animation"),
      banner = document.querySelector (".banner"),
      scrollTop = 0,
      frame = 0,
      framesTotal = 57;
if (desktop.matches) {
  document.addEventListener("scroll", function() {
    scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    frame = parseInt(scrollTop/10);
    if (frame >= 0 && frame < framesTotal) {
      logoAnimation.style.backgroundPosition = "center -" + frame*481 + "px"

    } if (frame >= 50) {
      banner.style.position = "relative",
      banner.style.top = "500px"
    } else {
      banner.style.position = "sticky",
      banner.style.top = "0"
    }
  })
}
};
//trigger animations
let animationTrigger = function () {
  let animation;
  let windowHeight;
  function init() {
    animation = document.querySelectorAll (".not-active");
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }
  function addEventHandlers() {
    window.addEventListener ("scroll", checkPosition);
    window.addEventListener ("resize", init);
  }
  function checkPosition() {
    for (let i = 0; i < animation.length; i++) {
      let positionFromTop = animation[i].getBoundingClientRect().bottom;
      if (positionFromTop - windowHeight <= 20) {
        animation[i].className = animation[i].className.replace (
          "not-active",
          "is-active"
        );
      }
  
    }
  }
  return {
    init: init
  };
};
animationTrigger().init();
