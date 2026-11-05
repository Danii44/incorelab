/*----------custom js-----------------*/

  
(function ($) {
    'use strict';

    // Testi list 
    jQuery(document).ready(function($){

        $('.gallary-list').owlCarousel({
            loop: true,
            margin: 0,
            center: true, 
            autoplay: true,
            nav:true,
            autoplayTimeout: 10000,
            autoplayHoverPause: true,
            navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
            nav: true,
            dots: false,
            smartSpeed:1600,
            responsive: {
                0:   { items: 1 },
                600: { items: 2 },
                1000:{ items: 3 },
                1300:{ items: 4 }
            }
        });
    
    });                      

    // Gsap Fade-Animation Js
    const fadeArrayup = gsap.utils.toArray(".gs_fade_anim");
    fadeArrayup.forEach((t, e) => {
        var r = "bottom",
            a = 1,
            o = 1,
            i = 50,
            s = .5,
            l = "power2.out";
        t.getAttribute("data-fade-offset") && (i = t.getAttribute("data-fade-offset")), t.getAttribute("data-duration") && (o = t.getAttribute("data-duration")), t.getAttribute("data-fade-from") && (r = t.getAttribute("data-fade-from")), t.getAttribute("data-on-scroll") && (a = t.getAttribute("data-on-scroll")), t.getAttribute("data-delay") && (s = t.getAttribute("data-delay")), t.getAttribute("data-ease") && (l = t.getAttribute("data-ease")), 1 == a ? ("top" == r && gsap.from(t, {
            y: -i,
            opacity: 0,
            ease: l,
            duration: o,
            delay: s,
            scrollTrigger: {
                trigger: t,
                start: "top 110%"
            }
        }), "left" == r && gsap.from(t, {
            x: -i,
            opacity: 0,
            ease: l,
            duration: o,
            delay: s,
            scrollTrigger: {
                trigger: t,
                start: "top 110%"
            }
        }), "bottom" == r && gsap.from(t, {
            y: i,
            opacity: 0,
            ease: l,
            duration: o,
            delay: s,
            scrollTrigger: {
                trigger: t,
                start: "top 110%"
            }
        }), "right" == r && gsap.from(t, {
            x: i,
            opacity: 0,
            ease: l,
            duration: o,
            delay: s,
            scrollTrigger: {
                trigger: t,
                start: "top 110%"
            }
        }), "in" == r && gsap.from(t, {
            opacity: 0,
            ease: l,
            duration: o,
            delay: s,
            scrollTrigger: {
                trigger: t,
                start: "top 110%"
            }
        })) : ("top" == r && gsap.from(t, {
            y: -i,
            opacity: 0,
            ease: l,
            duration: o,
            delay: s
        }), "left" == r && gsap.from(t, {
            x: -i,
            opacity: 0,
            ease: l,
            duration: o,
            delay: s
        }), "bottom" == r && gsap.from(t, {
            y: i,
            opacity: 0,
            ease: l,
            duration: o,
            delay: s
        }), "right" == r && gsap.from(t, {
            x: i,
            opacity: 0,
            ease: l,
            duration: o,
            delay: s
        }), "in" == r && gsap.from(t, {
            opacity: 0,
            ease: l,
            duration: o,
            delay: s
        }))
    });


    // Portfolio Isotope 
    $('.image_load').imagesLoaded(function () {

        if ($.fn.isotope) {

            var $portfolio = $('.image_load');

            $portfolio.isotope({

                itemSelector: '.grid-item',

                filter: '*',

                resizesContainer: true,

                layoutMode: 'masonry',

                transitionDuration: '0.8s'

            });
            $('.menu-filtering li').on('click', function () {

                $('.menu-filtering li').removeClass('current_menu_item');

                $(this).addClass('current_menu_item');

                var selector = $(this).attr('data-filter');

                $portfolio.isotope({

                    filter: selector,

                });

            });

        };
    });
    

})(jQuery);



(function($){
    function floatLabel(inputType){
        $(inputType).each(function(){
        var $this = $(this);
        // on focus add cladd active to label
        $this.focus(function(){
            $this.next().addClass("active");
        });
        //on blur check field and remove class if needed
        $this.blur(function(){
            if($this.val() === '' || $this.val() === 'blank'){
            $this.next().removeClass();
            }
        });
        });
    }
    // just add a class of "floatLabel to the input field!"
    floatLabel(".floatLabel");
})(jQuery);







