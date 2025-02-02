"use strict";

// Function to dynamically load HTML sections
function loadsection(selector, filePath) {
  const element = document.querySelector(selector);

  if (!element) {
    console.error(`Element ${selector} not found`);
    return;
  }

  fetch(filePath)
    .then((response) => response.text())
    .then((data) => {
      element.outerHTML = data;
    })
    .catch((error) => console.error(error));
}

// Load sections
loadsection("header", "./sections/header.html");
loadsection("footer", "./sections/footer.html");

loadsection(".hero", "./sections/hero.html");
loadsection(".mission", "./sections/mission.html");
loadsection(".cta", "./sections/cta.html");
loadsection(".solar-solutions", "./sections/solar-solutions.html");
loadsection(".our-approach", "./sections/our-approach.html");
loadsection(".features", "./sections/features.html");
loadsection(".our-values", "./sections/our-values.html");
loadsection(".testimonials", "./sections/testimonials.html");
