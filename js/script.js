//OPEN MENU

const burgerMenu = document.querySelector('.burger');
const openMenu = document.querySelector('.navbar__menu-mobile');

burgerMenu.addEventListener('click', (e) => {
    e.preventDefault();
    openMenu.classList.toggle('navbar__menu-mobile-active');
});

//MODAL

const openModal = document.querySelectorAll('.btn__open-modal')
const modalWindow = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const modalBackground = document.querySelector('.modal-background');

openModal.forEach((openModal) => {
    openModal.addEventListener('click', (e) => {
        e.preventDefault();
        modalWindow.classList.add('modal-active');
    });
  });
  modalClose && modalBackground.addEventListener('click', () => {
    modalWindow.classList.remove('modal-active');
});

//SCROLL TO TOP
const btnScrollToTop = document.querySelector('.scroll-to-top');
window.onscroll = () => {
    if(window.scrollY > 300) {
        btnScrollToTop.style.opacity = '1';
    } else {
        btnScrollToTop.style.opacity = '0';
    }
}

//THX YOU PAGE
const submitBtn = document.querySelector('button');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    setTimeout(function(){
        window.location.href = 'thank-you.html';
      }, 1000);
});

//Swiper

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2.2,
    slidesPerColumn: 2,
    spaceBetween: 30,
    slidesPerColumnFill: 'row',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        '@0.00': {
            slidesPerView: 1,
            slidesPerColumn: 2,
            spaceBetween: 10,
            slidesPerColumnFill: 'row',
        },
        '@0.75': {
            slidesPerView: 1.2,
            slidesPerColumn: 2,
            spaceBetween: 15,
            slidesPerColumnFill: 'row',
        },
        '@1.00': {
            slidesPerView: 1.5,
            slidesPerColumn: 2,
            spaceBetween: 15,
            slidesPerColumnFill: 'row',
        },
        '@1.50': {
            slidesPerView: 2.2,
            slidesPerColumn: 2,
            spaceBetween: 30,
            slidesPerColumnFill: 'row',
        },
      }
});

//ANIMATE

AOS.init();