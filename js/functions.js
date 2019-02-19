$(window).on('load', function () {
    $(function () {
        if (document.cookie.indexOf('popup') >= 0) {
            $('#newsletter_popup').hide();
        } else {
            $('#newsletter_popup').show();
        }
    });
});
$(document).ready(function () {
    $('#newsletter_popup a').on('click', function () {
        var cookietime = 1;
        var days = new Date();
        days.setTime(days.getTime() + (cookietime * 24 * 60 * 60 * 1000));
        var expires = "expires=" + days.toUTCString();
        document.cookie = 'cookieName=news_popup; expires=' + expires + ';path=/';
        $('#newsletter_popup').hide();
    });
    $(".slider").slick({
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        autoplay: true,

        responsive: [
            {
                breakpoint: 667,
                settings: {
                    adaptiveHeight: true,
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                    arrows: false,
                }
            }
        ]
    });
    $(".new_this_week_slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 667,
                settings: {
                    rows: 1,
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    });
    //shopping bag
    $('.icon_bag, .bag_info').on('click', function () {
        $('.bag_total').css('display', 'block');
    });
    $('.bag_total > button').on('click', function () {
        $('.bag_total').css('display', 'none');
    });

    $('.newsletter a').on('click', function () {
        $('#newsletter_popup').show();
    })
    $('#newsletter_popup .close').on('click', function () {
        $('#newsletter_popup').hide();
    })
    //header fixed on scroll
    $(function () {
        var stickykHeader = 100;
        $(window).scroll(function () {
            let scroll = getCurrentScroll();
            let stickyNav = $('nav');
            if ($("header").css('position') == 'fixed') {
                if (scroll >= stickykHeader) {
                    $('header').addClass('sticky');
                    $('.mobile_wrapper').insertAfter('.middle_container > h1');
                    if ($('#search-box-input').val().length > 0) {
                        $('#search').animate({ left: '-232px' }, 0)
                        setTimeout(function () {
                            $('#search').addClass('shadow');
                        }, 500);
                        $('.search_back').removeClass('expand');
                    } else {
                        $('#search').removeClass('shadow');
                    }
                }
                else {
                    $('header').removeClass('sticky');
                    $('.mobile_wrapper').insertAfter('header > .outer_container');
                    if (!$('header').hasClass('sticky') && !$('.search_back').hasClass('expand') === true) {
                        $('#search').animate({ left: '0px' }, 0).removeClass('shadow');
                        $('.search_back').addClass('expand');
                    }
                }
            }
        });
        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }
    });
    // mobile menu
    $(function () {
        $('.navbar-toggle').click(function () {
            if ($('.navbar-toggle').hasClass('area-expanded') == true) {
                $('.mobile_menu').animate({ left: '-255px' }, 600);
                $('.wrapper').animate({ left: '0' }, 600);
                $('.navbar-toggle').removeClass('area-expanded');
                $('.navbar-toggle').css('background-color', 'white');
                $('.navbar-toggle').css('color', '#00a388');
            } else {
                $('.navbar-toggle').addClass('area-expanded');
                $('.mobile_menu').animate({ left: '-255px' }, 600);
                $('.wrapper').animate({ left: '255px' }, 600);
                $('.navbar-toggle').css('background-color', '#00a388');
                $('.navbar-toggle').css('color', 'white');
            }
        });
        $('nav ul.main_cats > li > span').click(function () {
            $(this).next().css('display', 'block').animate({ right: '10px' }, 600);
            $('nav').addClass('darken');
        });
        $('.bm_menu').click(function () {
            $('nav').removeClass('darken');
            $(this).parents('.dropdown').animate({ right: '-245px' }, 600);
        });
    });
    //clearing the results
    $('.btn-clear-search').on('click', function () {
        $('#search-box-input').val('');
        $('#result').hide();
        $('#result ul').empty().parent('div').hide();;
        $('.btn-clear-search').hide();
        event.preventDefault();
    });
    // search bar expand - header fixed
    $('.search_back').on('click', function () {
        if ($('header').hasClass('sticky') && $(this).hasClass('expand') === true) {
            $('#search').animate({ left: '-232px' }, 600)
            setTimeout(function () {
                $('#search').addClass('shadow');
            }, 500);
            $(this).removeClass('expand');
        } else {
            $('#search').animate({ left: '0px' }, 600).removeClass('shadow');
            $('.btn-clear-search').hide();
            $(this).addClass('expand');
            $('#search-box-input').val('');
            $('#result').hide();
        }
    });
    //back to top
    var offset = 90;
    var duration = 500;
    $(window).scroll(function () {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(duration);
        } else {
            $('.back-to-top').fadeOut(duration);
        }
    });
    $('.back-to-top').click(function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    })
});