const pixelsTag = document.querySelector("div.pixels");
const bodyTag = document.querySelector("body");
const progressTag = document.querySelector("div.progress");
const sections = document.querySelectorAll("section");
const clientTag = document.querySelector("div.client");
const pageTag = document.querySelector("div.page");

document.addEventListener("scroll", function () {
  const pixels = window.pageYOffset;

  if (pixels < 1) {
    pixelsTag.innerHTML = 0;
  } else {
    pixelsTag.innerHTML = `${pixels} <span>pixels</span>`;
  }

  const pageHeight = bodyTag.getBoundingClientRect().height;
  const totalScroll = pageHeight - window.innerHeight;
  const percentage = pixels / totalScroll;
  progressTag.style.width = `${100 * percentage}%`;

  sections.forEach((section) => {
    if (section.offsetTop - 100 <= pixels) {
      clientTag.innerHTML = section.getAttribute("data-client");
      pageTag.innerHTML = section.getAttribute("data-page");
    }
  });
});
