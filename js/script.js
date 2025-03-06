$(document).ready(function() {
    $(".property-slider").owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        dots:false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive:{
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });  
});

$(document).ready(function() {
    $(".testimonial-slider").owlCarousel({
        items: 3,
        loop: true,
        nav: false,
        dots:true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive:{
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });  
});