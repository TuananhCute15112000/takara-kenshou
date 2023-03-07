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

    const swiper2 = new Swiper(".swiper2", {
        autoplay: {
            delay: 0, // 途切れなくループ
            disableOnInteraction: false, //ユーザーがスワイプなどの操作しても止まらない
        },
        loop: true, // ループ有効
        spaceBetween: 70,
        // loopedSlides: 14, //設定すると途中で止まる
        slidesPerView: 2, // 一度に表示する枚数
        speed: 5000, // ループの時間
        allowTouchMove: false, // スワイプ無効
        breakpoints: {
            320: {
                spaceBetween: 15,
                slidesPerView: 1.3, // 一度に表示する枚数
            },
            992: {
                spaceBetween: 30,
            },
            1500: {
                spaceBetween: 40,
            },
          },
    });
});