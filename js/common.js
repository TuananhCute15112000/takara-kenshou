
// });
// scroll
$(document).ready(function () {
    $('#scroller').click(function () {
        $('html, body').animate({
            scrollTop: $('#aboutservices').offset().top,
        }, 800);
    });
});

// menu
$(document).ready(function () {
    $('.menusp').click(function () {
        $('.menusp.box_sp').toggleClass('active');
        $('.menu').toggleClass('active');
        $('body').toggleClass('hidden');
        $('#header .menu nav').css('transition', 'all .3s linear');
    })
});
$(window).on('resize', function () {
    var win = $(window);
    if (win.width() < 992) {
        $('#header .menu nav').css('transition', 'all .3s linear');
    }
    else {
        $('body').removeClass('hidden');
        $('#header .menu nav').css('transition', 'none');
    }
});
// menu sticky

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 200) {
        $('.header_fixed').addClass('fixed');
    } else {
        $('.header_fixed').removeClass('fixed');
    }
});

// page services
const sections = document.querySelectorAll(".content01");
const shadow = document.querySelector('.animate-bg_shawdow');

const test = document.querySelector('#bg_services1');
console.log(test.offsetTop);

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        console.log(pageYOffset);
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
            var bg = document.querySelector('.animate-bg');
            var test = bg.style.backgroundImage = "url('../images/services/" + current + ".jpg')";
            bg.classList.add('active');
            shadow.classList.add('active');
        }
    });
});

// https://stackoverflow.com/questions/72957343/change-active-class-in-navbar-on-scrolling-javascript-html