var swiper = new Swiper(".slide-content", {
  slidesPerView: 1,
  spaceBetween: 30,
  centerSlide: true,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Add the following code to adjust the position of the navigation buttons
swiper.on('init', function () {
  var nextButton = document.querySelector('.swiper-button-next');
  var prevButton = document.querySelector('.swiper-button-prev');

  nextButton.style.top = "calc(50% - 20px)"; // Adjust the vertical position
  nextButton.style.right = "50%"; // Adjust the horizontal position

  prevButton.style.top = "calc(50% - 20px)"; // Adjust the vertical position
  prevButton.style.left = "50%"; // Adjust the horizontal position
});
