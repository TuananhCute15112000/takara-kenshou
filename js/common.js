
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