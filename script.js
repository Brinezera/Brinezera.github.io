document.addEventListener("DOMContentLoaded", function() {
  const prevButton = document.querySelector(".carousel-prev");
  const nextButton = document.querySelector(".carousel-next");
  const carouselContainer = document.querySelector(".carousel-container");

  prevButton.addEventListener("click", function() {
    carouselContainer.scroll({
      left: carouselContainer.scrollLeft - carouselContainer.offsetWidth,
      behavior: "smooth"
    });
  });

  nextButton.addEventListener("click", function() {
    carouselContainer.scroll({
      left: carouselContainer.scrollLeft + carouselContainer.offsetWidth,
      behavior: "smooth"
    });
  });
});
