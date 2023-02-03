
// var swiper1 = new Swiper(".swiper", {
//   slidesPerView: 1,
//   spaceBetween: 10,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   autoplay: {
//     delay: 2500, // delay time in ms
//     disableOnInteraction: false, // allows autoplay to be stopped/resumed by user interaction
//   },
//   breakpoints: {
//     400: {
//       slidesPerView: 1,
//       spaceBetween: 10,
//     },
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 3,
//       spaceBetween: 40,
//     },
//     1024: {
//       slidesPerView: 5,
//       spaceBetween: 10,
//     },
//   },
// });


  AOS.init();



const arrow = document.querySelector(".arrow");
const features = document.getElementById('tofeatures');
const services = document.getElementById('to-services');
const projects = document.getElementById('to-projects');
const contact = document.getElementById('to-contact');

const homeSection = document.querySelector(".hero");
const featuresSection = document.querySelector(".features");
const servicesSection = document.querySelector(".services");
const projectsSection = document.querySelector(".project");
const contactSection = document.querySelector(".contact");

arrow.addEventListener("click", function(e) {
  e.preventDefault()
  homeSection.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
})

services.addEventListener("click", function(e) {
  e.preventDefault()
  servicesSection.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
})

projects.addEventListener("click", function(e) {
  e.preventDefault()
  projectsSection.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
})

// contact.addEventListener("click", function(e) {
//   e.preventDefault()
//   contactSection.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
// })


// modal
const quotebtn = document.querySelector(".quotebtn");
const modalQuote = document.querySelector(".modal-quote")
const closebtn = document.querySelector(".closebtn")


quotebtn.addEventListener("click", ()=> {
  modalQuote.classList.add("activeModal")
})


closebtn.addEventListener("click", ()=> {
  modalQuote.classList.remove("activeModal")
})


// carousel 
// var slider = tns({
//   container: '.my-slider',
//   items: 1,

//   responsive: {
//     640: {
//       // edgePadding: 20,
//       gutter: 20,
//       items: 2
//     },
//     700: {
//       gutter: 30
//     },
//     1200: {
//       items: 3,
//       gutter: 20,
     
//     }
//   },
//   autoplay: true,
//   controls: false,
//   autoplayTimeout: 5000,
//   autoplayButtonOutput: false,
//   "speed": 2000,
//   "nav": false,
//   "slideBy" : 1,

// });



// const slider = tns({
//   container: '.my-slider',
//   loop: true,
//   items: 1,
   
//   autoplay: true,
//   speed: 400,
//   autoplayButtonOutput: false,
//   mouseDrag: true,
//   lazyload: true,
//   controlsContainer: "#customize-controls",
//   responsive: {
//       640: {
//           items: 2,
//       },
      
//       768: {
//           items: 3,
//       }
//   }

// });

var slider = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000, // delay time in ms
    disableOnInteraction: false, // allows autoplay to be stopped/resumed by user interaction
  },
});