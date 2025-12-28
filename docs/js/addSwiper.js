document.addEventListener("DOMContentLoaded", function () {
    let bannerSwiper = new Swiper(".bannerSwiper", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        
        speed: 1000,
        slidesPerView: 1,
        
        pagination: {
            el: ".bannerSwiper .sw-pagination",
            clickable: true,
        },
    });
    let aboutSwiper = new Swiper(".aboutSwiper", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        speed: 1000,
        slidesPerView: 1,
        pagination: {
            el: ".aboutSwiper .sw-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".aboutSwiper .sw-next-btn",
            prevEl: ".aboutSwiper .sw-prev-btn",
        },
    });
    if (document.getElementById('isAdmin')) {
        console.log('addSwiper.js finish work');
    }
});