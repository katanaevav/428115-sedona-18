var openNavButton = document.querySelector(".main-nav__open-nav");
var closeNavButton = document.querySelector(".main-nav__close-nav");
var searchNav = document.querySelector(".main-nav__wrapper");
var isShowing = false;

searchNav.classList.add("main-nav--hide");

openNavButton.addEventListener("click", function () {
  if (!isShowing) {
    if (searchNav.classList.contains("main-nav--hide")) {
      searchNav.classList.remove("main-nav--hide");
    }
    openNavButton.classList.add("main-nav--hide");
    isShowing = true;
  }
});

closeNavButton.addEventListener("click", function () {
  if (isShowing) {
    searchNav.classList.add("main-nav--hide");
    isShowing = false;
    if (openNavButton.classList.contains("main-nav--hide")) {
      openNavButton.classList.remove("main-nav--hide");
    }
  }
});
