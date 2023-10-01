const zoom = document.querySelector("#title-image");
const minZoom = 1;
const maxZoom = 2;

addEventListener("scroll", (e) => {
  const vh = window.innerHeight / 100;
  const scrollTop = document.documentElement.scrollTop;
  const start = 10 * vh;
  const stop = 50 * vh;
  if (scrollTop > start && scrollTop < stop) {
    const scale = Math.min(1.7, 1 + (scrollTop - start) / 500);
    zoom.style.transform = `scale(${scale})`;
  }
});
