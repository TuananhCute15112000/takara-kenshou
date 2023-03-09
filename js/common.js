gsap.registerPlugin(ScrollTrigger);
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
        console.log(1);
    } else {
        $('.header_fixed').removeClass('fixed');
    }
});

// page services
const sections = document.querySelectorAll(".content01");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });
    sections.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
            const bg = li.querySelector('.background');
            if ($(li).hasClass('active')) {
                bg.style.backgroundImage = "url('../images/services/" + current + ".jpg')";
            } else {
                test.style.backgroundImage = "none";
            }
        }
    });
});

// page about
gsap.to(".c-content_animate ", {
    duration: 0.8,
    scrollTrigger: {
        trigger: ".c-content_animate ",
        start: "top 95%",
    },
    scaleX: 0,
    transformOrigin: "right",
    ease: "none"
})
gsap.to(".c-content_animate.--1", {
    duration: 0.8,
    scrollTrigger: {
        trigger: ".c-content_animate.--1",
        start: "top 95%",
    },
    scaleX: 0,
    transformOrigin: "right",
    ease: "none"
})
gsap.to(".c-content_animate.--2", {
    duration: 0.8,
    scrollTrigger: {
        trigger: ".c-content_animate.--2",
        start: "top 96%",
    },
    scaleX: 0,
    transformOrigin: "right",
    ease: "none"
})