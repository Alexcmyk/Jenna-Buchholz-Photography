const pixelsTag = document.querySelector("div.pixels");

document.addEventListener("scroll", function () {
  const pixels = window.pageYOffset;

  if (pixels < 1) {
    pixelsTag.innerHTML = 0;
  } else {
    pixelsTag.innerHTML = `${pixels} <span>pixels</span>`;
  }
});
