$(function () {

    //top slider
    $('#top_slider').carousel({
        intevral: 4000
    });
    //promo slider
    $('#promo_slider').carousel({
        intevral: 3000
    });
    //mobile menu 
    mobileMenu();
    // count
    $('.timer').countTo();
    //scroll
    if(document.documentElement.clientWidth<480){
       $('.logo-wrapper').hide();
    }else {
        $('.logo-wrapper').show();
    }


});

//change height of header
$(window).bind('scroll', function (event) {

    if ($(window).scrollTop() > 20) {

        $('.main-header').addClass('header-short');
        $('.main-logo img').css('max-height', 28);

    } else {

        $('.main-header').removeClass('header-short');
        $('.main-logo img').css('max-height', 42);
    }

});
//menu moblie

function mobileMenu() {
    $('#mobile-icon').on('click', function (e) {
        e.preventDefault();
        $('#main-nav-mobile').show();
    });
    $('#mobile-close').on('click', function (e) {
        e.preventDefault();
        $('#main-nav-mobile').hide();
    });

}
