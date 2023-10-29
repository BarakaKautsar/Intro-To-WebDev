// code source: https://www.youtube.com/watch?v=gBzsE0oieio

const slider = document.querySelector(".slider");
const slides = Array.from(slider.children);
const nextButton = document.querySelector(".slider-button--right");
const prevButton = document.querySelector(".slider-button--left");
const slideNav = document.querySelector(".slider-nav");
const dots = Array.from(slideNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// arrange the slides next to one another
slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + "px";
});

// show and hide arrows
const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add("is-hidden");
    nextButton.classList.remove("is-hidden");
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.add("is-hidden");
  } else {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.remove("is-hidden");
  }
};

// update the nav dots
const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("slide-indicator--active");
  targetDot.classList.add("slide-indicator--active");
};

// move to slide
const moveToSlide = (slider, currentSlide, targetSlide) => {
  slider.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("active-slide");
  targetSlide.classList.add("active-slide");
};

// move slides to the left
nextButton.addEventListener("click", (e) => {
  const currentSlide = slider.querySelector(".active-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = slideNav.querySelector(".slide-indicator--active");
  const targetDot = currentDot.nextElementSibling;
  const targetIndex = slides.findIndex((slide) => slide === nextSlide);

  moveToSlide(slider, currentSlide, nextSlide);
  updateDots(currentDot, targetDot);
  hideShowArrows(slides, prevButton, nextButton, targetIndex);
});

// move slides to the right
prevButton.addEventListener("click", (e) => {
  const currentSlide = slider.querySelector(".active-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = slideNav.querySelector(".slide-indicator--active");
  const prevDot = currentDot.previousElementSibling;
  const targetIndex = slides.findIndex((slide) => slide === prevSlide);

  moveToSlide(slider, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  hideShowArrows(slides, prevButton, nextButton, targetIndex);
});

// move to slide when nav dots are clicked
slideNav.addEventListener("click", (e) => {
  const targetDot = e.target.closest("button");

  if (!targetDot) return;

  const currentSlide = slider.querySelector(".active-slide");
  const currentDot = slideNav.querySelector(".slide-indicator--active");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(slider, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  hideShowArrows(slides, prevButton, nextButton, targetIndex);
});
