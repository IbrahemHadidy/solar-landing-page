"use strict";

const totalSlides = 4;
let currentHeroSlide = 1;
let heroSlideNumber = currentHeroSlide;

// Function to show the next hero content
function nextHero() {
  if (currentHeroSlide < totalSlides) {
    heroSlideNumber = currentHeroSlide + 1;
  } else {
    heroSlideNumber = 1;
  }

  // Remove active class from all hero content
  document
    .querySelectorAll(".hero-content")
    .forEach((el) => el.classList.remove("active"));

  // Add active class to the selected slide
  document
    .querySelector(`#hero-content-${heroSlideNumber}`)
    .classList.add("active");

  // Update background image
  document.querySelector(".hero").style.background = `linear-gradient(
      267deg,
      rgba(0, 0, 0, 0.7) 2.2%,
      rgba(0, 0, 0, 0.18) 58.17%
    ),
    url("../assets/images/hero-bg-${heroSlideNumber}.webp") center / cover no-repeat`;

  // Update progress bar
  document
    .querySelector(".progress-ctn progress").value = heroSlideNumber;

  currentHeroSlide = heroSlideNumber;
}

setInterval(nextHero, 8000);

background: ;