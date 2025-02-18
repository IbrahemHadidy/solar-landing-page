"use strict";

let menuBtn;
let closeBtn;
let nav;

function setSelectors() {
  menuBtn = document.querySelector(".menu-btn");
  closeBtn = document.querySelector(".close-btn");
  nav = document.querySelector("nav");
}

setTimeout(() => {
  setSelectors();

  // Open Menu
  menuBtn.addEventListener("click", function () {
    nav.classList.add("active");
  });

  // Close Menu
  closeBtn.addEventListener("click", function () {
    nav.classList.remove("active");
  });

  // Click outside to close menu
  document.addEventListener("click", function (event) {
    if (!nav.contains(event.target) && !menuBtn.contains(event.target)) {
      nav.classList.remove("active");
    }
  });
}, 500);

