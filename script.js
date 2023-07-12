document.addEventListener("DOMContentLoaded", function() {
  const prevButton = document.querySelector(".carousel-prev");
  const nextButton = document.querySelector(".carousel-next");
  const carouselContainer = document.querySelector(".carousel-container");

  prevButton.addEventListener("click", function() {
    carouselContainer.scrollBy({
      left: -carouselContainer.offsetWidth,
      behavior: "smooth"
    });
  });

  nextButton.addEventListener("click", function() {
    carouselContainer.scrollBy({
      left: carouselContainer.offsetWidth,
      behavior: "smooth"
    });
  });

  carouselContainer.addEventListener("scroll", function() {
    const currentScroll = carouselContainer.scrollLeft;
    const maxScroll = carouselContainer.scrollWidth - carouselContainer.offsetWidth;
    
    if (currentScroll === 0) {
      prevButton.style.display = "none";
    } else {
      prevButton.style.display = "block";
    }
    
    if (currentScroll === maxScroll) {
      nextButton.style.display = "none";
    } else {
      nextButton.style.display = "block";
    }
  });
});
