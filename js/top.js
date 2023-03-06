$(document).ready(function () {
    Splitting();
    "use strict";
    // swiper
    var swiper = new Swiper(".mySwiper", {
        centeredSlides: true,
        effect: 'fade',
        speed: 1000,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
});