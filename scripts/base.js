$(document).ready(function () {
    // Write current year of copyright
    var date = new Date();
    $("#year").text(date.getFullYear());

    $('.our-expansions-slide').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    // Show navbar on click event when screen width is for mobiles
    $(".collapse-button").click(function () {
        if ($(".main-nav").hasClass("nav-responsive")) {
            $(".main-nav").removeClass("nav-responsive");
        }
        else {
            $(".main-nav").addClass("nav-responsive");
        }
    });


    // Animate move to the section of page User clicked
    $(".menu-item").click(function () {
        if ($('.main-nav').hasClass('nav-responsive'))
            $(".main-nav").removeClass("nav-responsive");

        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    $('#scroll-top').on('click', function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });

});

