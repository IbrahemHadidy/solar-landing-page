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

  // Update progress bar
  document
    .querySelector(".progress-ctn progress").value = heroSlideNumber;

  currentHeroSlide = heroSlideNumber;
}

setInterval(nextHero, 8000);