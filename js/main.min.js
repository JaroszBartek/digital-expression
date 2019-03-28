//hamburger button
const navFunctions = () => {
  document.querySelector(".site-nav__container").classList.toggle("is-expanded");
  document.body.classList.toggle("nav-opened");
};
const hamburger = document.querySelector (".site-nav--toggle");
hamburger.addEventListener("click", navFunctions);

const navItems = document.querySelectorAll (".site-nav__item");
  for (let i=0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", navFunctions);
  };

//logo scroll animation
  //Desktop mediaquery
if (matchMedia) {
  const desktop = window.matchMedia("(min-width: 1200px)");
  desktop.addListener(desktopChange);
  desktopChange(desktop);
}
function desktopChange(desktop) {
  const logoAnimation = document.querySelector (".banner__animation"),
        banner = document.querySelector (".banner");
    let scrollTop = 0,
        frame = 0,
        framesTotal = 57;
  if (desktop.matches) {
    document.addEventListener("scroll", () => {
      scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
      frame = parseInt(scrollTop/10);
      if (frame >= 0 && frame < framesTotal) {
        logoAnimation.style.backgroundPosition = `center -${frame*481}px`;
        (frame >= 50) ? banner.classList.add("offset") : banner.classList.remove("offset");
      }
    })
  }
};
//trigger animations
const animationTrigger = () => {
  let animation,
      windowHeight;
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
        animation[i].className = animation[i].className.replace ("not-active", "is-active");
      }
    }
  }
  return {
    init: init
  };
};
animationTrigger().init();

// show/hide contact
const contactShow = document.querySelector (".contact__btn--show");
contactShow.addEventListener("click", () => {
  document.querySelector(".contact-container").classList.add("is-visible");
});

const contactClose = document.querySelector (".contact__btn--close");
contactClose.addEventListener("click", function() {
  document.querySelector(".contact-container").classList.remove("is-visible");
});
