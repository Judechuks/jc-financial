// Hamburger
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

// hamburger to open and close
hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// nav links to close menu
navLinks.forEach(function(navLink){
  navLink.addEventListener('click', function(){
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');  
  });
});

/*============== SAVINGS SWIPER ==============*/
let swiperSavings = new Swiper('.savings-container', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1000: {
      slidesPerView: 3,
    },
    580: {
      slidesPerView: 2,
    }
  }
});

/*============== SAVINGS SWIPER ==============*/
let swiperAbout = new Swiper('.tips-container', {
  cssMode: true,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});