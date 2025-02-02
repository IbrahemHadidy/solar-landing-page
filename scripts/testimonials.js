"use strict";

let currentTestimonialSlide = 1;
const totalTestimonialSlides = 5;

function changeSlide(slideNumber) {
  if (slideNumber < 1 || slideNumber > totalTestimonialSlides) return;

  // Update text
  document
    .querySelectorAll(".what-they-say-text")
    .forEach((el) => el.classList.remove("active"));
  document
    .getElementById(`what-they-say-${slideNumber}`)
    .classList.add("active");

  // Update person
  document
    .querySelectorAll(".testimonials-carousel-bottom-left")
    .forEach((el) => el.classList.remove("active"));
  document
    .getElementById(`testimonials-person-${slideNumber}`)
    .classList.add("active");

  // Update indicators
  document
    .querySelectorAll(".indicator-dot")
    .forEach((el) => el.classList.remove("active"));
  document
    .getElementById(`indicator-dot-${slideNumber}`)
    .classList.add("active");

  currentTestimonialSlide = slideNumber;
}

function previousSlide() {
  let newSlide = currentTestimonialSlide - 1;
  if (newSlide < 1) newSlide = totalTestimonialSlides;
  changeSlide(newSlide);
}

function nextSlide() {
  let newSlide = currentTestimonialSlide + 1;
  if (newSlide > totalTestimonialSlides) newSlide = 1;
  changeSlide(newSlide);
}

function interval() {
  clearInterval(interval);
  interval = setInterval(() => {
    nextSlide();
  }, 5000);
}

function stopInterval() {
  clearInterval(interval);
}

function startInterval() {
  clearInterval(interval);
  interval = setInterval(() => {
    nextSlide();
  }, 5000);
}

startInterval();