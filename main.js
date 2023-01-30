
var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 2500, // delay time in ms
    disableOnInteraction: false, // allows autoplay to be stopped/resumed by user interaction
  },
  breakpoints: {
    400: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
});

// nav

// const opennav = document.querySelector(".menu-hamburger")
// const close = document.querySelector(".close")
// const nav = document.querySelector(".nav-container")

// opennav.addEventListener("click", function() {
//   nav.classList.toggle("active")

// })

