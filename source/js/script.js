var openNavButton = document.querySelector(".main-nav__menu-button");
var closeNavIcon = document.querySelector(".main-nav__button-icon--close");
var openNavIcon = document.querySelector(".main-nav__button-icon--open");
var searchNav = document.querySelector(".main-nav__wrapper");
var isShowing = false;

searchNav.classList.add("main-nav__wrapper--hide");
if (openNavButton.classList.contains("main-nav__menu-button--hide")) {
  openNavButton.classList.remove("main-nav__menu-button--hide");
}
if (openNavIcon.classList.contains("main-nav__menu-icon--hide")) {
  openNavIcon.classList.remove("main-nav__menu-icon--hide");
}
closeNavIcon.classList.add("main-nav__menu-icon--hide");

openNavButton.addEventListener("click", function () {
  if (!isShowing) {
    if (searchNav.classList.contains("main-nav__wrapper--hide")) {
      searchNav.classList.remove("main-nav__wrapper--hide");
    }
    if (openNavButton.classList.contains("main-nav__menu-button--open")) {
      openNavButton.classList.remove("main-nav__menu-button--open");
    }
    openNavButton.classList.add("main-nav__menu-button--close");
    openNavIcon.classList.add("main-nav__menu-icon--hide");
    if (closeNavIcon.classList.contains("main-nav__menu-icon--hide")) {
      closeNavIcon.classList.remove("main-nav__menu-icon--hide");
    }
    isShowing = true;
  }
  else {
    searchNav.classList.add("main-nav__wrapper--hide");
    if (openNavButton.classList.contains("main-nav__menu-button--close")) {
      openNavButton.classList.remove("main-nav__menu-button--close");
    }
    openNavButton.classList.add("main-nav__menu-button--open");
    closeNavIcon.classList.add("main-nav__menu-icon--hide");
    if (openNavIcon.classList.contains("main-nav__menu-icon--hide")) {
      openNavIcon.classList.remove("main-nav__menu-icon--hide");
    }
    isShowing = false;
  }
});
