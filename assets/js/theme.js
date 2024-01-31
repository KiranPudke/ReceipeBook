"use strict";

const $HTML = document.documentElement;
const isDark = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;

  // setting initial theme
if (sessionStorage.getItem("theme")) {
  $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
  $HTML.dataset.theme = isDark ? "dark" : "light";
}

// theme toggle function
let isPressed = false;

const changeTheme = function () {
    isPressed = isPressed  ? false : true;
    this.setAttribute("aria-pressed", isPressed);
    $HTML.setAttribute("data-theme", ($HTML.dataset.theme === "light") ? 
    "dark" : "light");
    sessionStorage.setItem("theme",$HTML.dataset.theme);
}

// event listener
window.addEventListener("load", function () {
    const $themeBtn = document.querySelector("[data-theme-btn]");
    $themeBtn.addEventListener("click", changeTheme);
});

