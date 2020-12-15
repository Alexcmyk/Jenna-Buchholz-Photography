const pixelsTag = document.querySelector("div.pixels");
const bodyTag = document.querySelector("body");
const progressTag = document.querySelector("div.progress");
const sections = document.querySelectorAll("section");
const clientTag = document.querySelector("div.client");
const pageTag = document.querySelector("div.page");
const headerTag = document.querySelector("header");

// Scroll pixel tag update

document.addEventListener("scroll", function () {
  const pixels = window.pageYOffset;

  if (pixels < 1) {
    pixelsTag.innerHTML = 0;
  } else {
    pixelsTag.innerHTML = `${pixels} <span>pixels</span>`;
  }
});

// Progress bar scroll

document.addEventListener("scroll", function () {
  const pixels = window.pageYOffset;
  const pageHeight = bodyTag.getBoundingClientRect().height;
  const totalScrollableDistance = pageHeight - window.innerHeight; // viewport window height

  const percentage = pixels / totalScrollableDistance;
  progressTag.style.width = `${100 * percentage}%`;
});

// Page Progress

document.addEventListener("scroll", function () {
  const pixels = window.pageYOffset;

  sections.forEach((section) => {
    if (section.offsetTop - 100 <= pixels) {
      clientTag.innerHTML = section.getAttribute("data-client");
      pageTag.innerHTML = section.getAttribute("data-page");

      if (section.hasAttribute("data-is-dark")) {
        headerTag.classList.add("white");
        progressTag.classList.add("white");
      } else {
        headerTag.classList.remove("white");
        progressTag.classList.remove("white");
      }
    }
  });
});

// Parallax scroll

document.addEventListener("scroll", function () {
  const topViewport = window.pageYOffset;
  const midViewport = topViewport + window.innerHeight / 2;
  sections.forEach((section) => {
    const topSection = section.offsetTop;
    const midSection = topSection + section.offsetHeight / 2;
    const distanceToSection = midViewport - midSection;

    const parallaxTags = section.querySelectorAll("[data-parallax]");

    parallaxTags.forEach((tag) => {
      const speed = parseFloat(tag.getAttribute("data-parallax"));
      tag.style.transform = `translate(0, ${distanceToSection * speed}px`;
    });
  });
});
