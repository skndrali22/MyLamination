let searchBtn = document.querySelector('.search-icon');
let searchDrawer = document.querySelector('#search-drawer');
let closeDrawer = document.querySelector('.close-drawer')

searchBtn.onclick = () => {
    searchDrawer.classList.add('active-search')
}
closeDrawer.onclick = () => {
    searchDrawer.classList.remove('active-search')
}

let navBtn = document.querySelector('.mbl-nav-btn');
let navbar = document.querySelector('.link-items');
let closeNav = document.querySelector('.nav-close');

navBtn.addEventListener('click', () => {
    navbar.classList.add('show-nav');
});

closeNav.addEventListener('click', () => {
    navbar.classList.remove('show-nav');
});

window.addEventListener('click', (event) => {
    if (!event.target.closest('.mbl-nav-btn') && !event.target.closest('.menu-list')) {
        navbar.classList.remove('show-nav');
    }
});

let dropDownBtn = document.querySelector('.dropdown-btn-mbl');
let DropDownMenu = document.querySelector('.dropdown-mbl-sub-menu');
let dropDownArrow = document.querySelector('.dropdown-btn-mbl svg');

  dropDownBtn.onclick = ()=>{
    DropDownMenu.classList.toggle('open-menu');
    dropDownArrow.classList.toggle('rotate-arrow');
  }

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    centeredSlides: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    }
});

var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0:{
            slidesPerView: 1
        },
        550:{
            slidesPerView: 2
        },
        990:{
            slidesPerView: 3
        }
    }
});