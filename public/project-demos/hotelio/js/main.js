/*----------theme js-----------------*/

/*====================================
01. Mobile Menu js
02. Header Search js
03. sticky
04. Loder 
05. counterUp
06. wow js
07. sidebar
08. room-suites-active
09. facilities-active 
10. suites-classic-active
11. testimonial-active
12. brand js
13. testimonial-active
14. gallary-active
15. dine-list js
16. Image Reveal Animation
17. Video Modal cursor
18. Text Effect Animation
19. Section title Js
20. Parallaxie js
21. Popup Video 
22. section border animation
23. Image Hover Effect
24. preloader js
25. Portfolio Isotope 
26. panel scrool
=====================================*/


(function ($) {
    'use strict';
    var $window = $(window); 
	var $body = $('body'); 

    // Mobile Menu js
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu",
        meanMenuOpen: "<span></span> <span></span> <span></span>",
        onePage: false,
    });

    //Header Search js
    if($('.search-box-outer').length) {
        $('.search-box-outer').on('click', function() {
            $('body').addClass('search-active');
        });
        $('.close-search').on('click', function() {
            $('body').removeClass('search-active');
        });
    }

    // sticky
    var wind = $(window);
    var sticky = $('#sticky-header');
    wind.on('scroll', function () {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });

    // Loder  //
	if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}

    // counterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // Data backgrond image
        $("[data-background]").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
        });


    /*---------------------
    WOW active js 
    --------------------- */
    new WOW().init();

    // Sidebar
    jQuery(document).ready(function (o) {
        0 < o(".offset-side-bar").length &&
            o(".offset-side-bar").on("click", function (e) {
                e.preventDefault(), e.stopPropagation(), o(".cart-group").addClass("isActive");
            }),
            0 < o(".close-side-widget").length &&
                o(".close-side-widget").on("click", function (e) {
                    e.preventDefault(), o(".cart-group").removeClass("isActive");
                }),
            0 < o(".navSidebar-button").length &&
                o(".navSidebar-button").on("click", function (e) {
                    e.preventDefault(), e.stopPropagation(), o(".info-group").addClass("isActive");
                }),
            0 < o(".close-side-widget").length &&
                o(".close-side-widget").on("click", function (e) {
                    e.preventDefault(), o(".info-group").removeClass("isActive");
                }),
            o("body").on("click", function (e) {
                o(".info-group").removeClass("isActive"), o(".cart-group").removeClass("isActive");
            }),
            o(".xs-sidebar-widget").on("click", function (e) {
                e.stopPropagation();
            }),
            0 < o(".xs-modal-popup").length &&
                o(".xs-modal-popup").magnificPopup({
                    type: "inline",
                    fixedContentPos: !2,
                    fixedBgPos: !0,
                    overflowY: "auto",
                    closeBtnInside: !2,
                    callbacks: {
                        beforeOpen: function () {
                            this.st.mainClass = "my-mfp-slide-bottom xs-promo-popup";
                        },
                    },
                });
        });

    // scroll btn
    if($('.prgoress_indicator path').length){
        var progressPath = document.querySelector('.prgoress_indicator path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
          var scroll = $(window).scrollTop();
          var height = $(document).height() - $(window).height();
          var progress = pathLength - (scroll * pathLength / height);
          progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).on('scroll', updateProgress);
        var offset = 250;
        var duration = 550;
        jQuery(window).on('scroll', function () {
          if (jQuery(this).scrollTop() > offset) {
            jQuery('.prgoress_indicator').addClass('active-progress');
          } else {
            jQuery('.prgoress_indicator').removeClass('active-progress');
          }
        });
        jQuery('.prgoress_indicator').on('click', function (event) {
          event.preventDefault();
          jQuery('html, body').animate({ scrollTop: 0 }, duration);
          return false;
        });
    }

    // Home-1 room-suites-active js
    var slider = new Swiper(".room-suites-active", {
        speed: 1500,
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay:false,
        breakpoints: {
        1920: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
        },
        // Navigation arrows
        navigation: {
        nextEl: ".slider-prev",
        prevEl: ".slider-next",
        },
    });

    // Home-3 facilities-active js
    var slider = new Swiper(".facilities-active", {
        speed: 1500,
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay:false,
        breakpoints: {
        1920: {
            slidesPerView: 2,
        },
        1400: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
        },
        // Navigation arrows
        navigation: {
        nextEl: ".slider-prev",
        prevEl: ".slider-next",
        },
    });

     // Home-3 suites-classic-active
    var slider = new Swiper(".suites-classic-active", {
        speed: 1500,
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay:false,
        breakpoints: {
        1920: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
        },
        // Navigation arrows
        navigation: {
        nextEl: ".slider-prev",
        prevEl: ".slider-next",
        },
    });

    // Home-3 brand active js
    var slider = new Swiper(".brand-active", {
        speed: 1500,
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay:false,
        breakpoints: {
        1920: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
        },
    });


    // Home-1 testimonial-active js
    var slider = new Swiper(".testimonial-active", {
        speed: 1500,
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay:false,
        breakpoints: {
        1920: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
        },
        // Navigation arrows
        navigation: {
        nextEl: ".slider-prev",
        prevEl: ".slider-next",
        },
    });

    // Home-1 classic testimonial-active classic js
    var slider = new Swiper(".testimonial-active-classic", {
        speed: 1500,
        slidesPerView: 1,
        spaceBetween:0,
        loop: true,
        autoplay:false,
        // Navigation arrows
        navigation: {
        nextEl: ".slider-prev",
        prevEl: ".slider-next",
        },
    });

    // Home-2 classic testimonial-active classic js
    var slider = new Swiper(".testimonial-resort-classic", {
        speed: 1500,
        slidesPerView: 1,
        spaceBetween:0,
        loop: true,
        autoplay:false,
        // Navigation arrows
        navigation: {
        nextEl: ".slider-prev",
        prevEl: ".slider-next",
        },
    });

    // Home-1 classic gallary-active js
    var slider = new Swiper(".gallary-active", {
        speed: 1500,
        slidesPerView: 5,
        spaceBetween: 25,
        slidesPerView: 1.5,
        centeredSlides: true,   
        loop: true,
        autoplay:false,
        breakpoints: {
        1920: {
            slidesPerView: 5,
        },
        1400: {
            slidesPerView: 5,
        },
        1200: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
        },
        // Navigation arrows
        navigation: {
        nextEl: ".slider-prev",
        prevEl: ".slider-next",
        },
    });
    
    // inner page dine-list js
    var slider = new Swiper(".dine_list", {
        speed: 1500,
        slidesPerView: 3,
        spaceBetween: 25,
        slidesPerView: 1.5,
        centeredSlides: true,   
        loop: true,
        autoplay:false,
        breakpoints: {
        1920: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
        },
        // Navigation arrows
        navigation: {
        nextEl: ".slider-prev",
        prevEl: ".slider-next",
        },
    });

    /* Image Reveal Animation */
	if ($('.reveal').length) {
        gsap.registerPlugin(ScrollTrigger);
        let revealContainers = document.querySelectorAll(".reveal");
        revealContainers.forEach((container) => {
            let image = container.querySelector("img");
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    toggleActions: "play none none none"
                }
            });
            tl.set(container, {
                autoAlpha: 1
            });
            tl.from(container, 1, {
                xPercent: -100,
                ease: Power2.out
            });
            tl.from(image, 1, {
                xPercent: 100,
                scale: 1,
                delay: -1,
                ease: Power2.out
            });
        });
    }


    // Video Modal cursor
    var v_cursor = document.getElementById("video_cursor");
    var $video_icon = $(".video__area a");

    if ($video_icon.length) {
        $video_icon.on("mousemove", function (e) {
            var x = e.clientX;
            var y = e.clientY;
            v_cursor.style.top = y + "px";
            v_cursor.style.left = x + "px";
            v_cursor.style.transform = "translate(-50%, -50%) scale(1)";
        });

        $video_icon.on("mouseout", function (e) {
            v_cursor.style.transform = "translate(-50%, -50%) scale(0)";
        });
    }
    

    /* Text Effect Animation */
	function initHeadingAnimation() {
		
		if($('.text-effect').length) {
			var textheading = $(".text-effect");

			if(textheading.length === 0) return; gsap.registerPlugin(SplitText); textheading.each(function(index, el) {
				
				el.split = new SplitText(el, { 
					type: "lines,words,chars",
					linesClass: "split-line"
				});
				
				if( $(el).hasClass('text-effect') ){
					gsap.set(el.split.chars, {
						opacity: .3,
						x: "-7",
					});
				}
				el.anim = gsap.to(el.split.chars, {
					scrollTrigger: {
						trigger: el,
						start: "top 92%",
						end: "top 60%",
						markers: false,
						scrub: 1,
					},

					x: "0",
					y: "0",
					opacity: 1,
					duration: .7,
					stagger: 0.2,
				});
				
			});
		}
		
		if ($('.text-anime-1').length) {
			let staggerAmount 	= 0.05,
				translateXValue = 0,
				delayValue 		= 0.5,
			   animatedTextElements = document.querySelectorAll('.text-anime-1');
			
			animatedTextElements.forEach((element) => {
				let animationSplitText = new SplitText(element, { type: "chars, words" });
					gsap.from(animationSplitText.words, {
					duration: 1,
					delay: delayValue,
					x: 20,
					autoAlpha: 0,
					stagger: staggerAmount,
					scrollTrigger: { trigger: element, start: "top 85%" },
					});
			});		
		}
		
		if ($('.text-anime-2').length) {				
			let	 staggerAmount 		= 0.03,
				translateXValue	= 20,
				delayValue 		= 0.1,
				easeType 			= "power2.out",
				animatedTextElements = document.querySelectorAll('.text-anime-2');
			
			animatedTextElements.forEach((element) => {
				let animationSplitText = new SplitText(element, { type: "chars, words" });
					gsap.from(animationSplitText.chars, {
						duration: 1,
						delay: delayValue,
						x: translateXValue,
						autoAlpha: 0,
						stagger: staggerAmount,
						ease: easeType,
						scrollTrigger: { trigger: element, start: "top 85%"},
					});
			});		
		}
		
		if ($('.text-anime-3').length) {		
			let	animatedTextElements = document.querySelectorAll('.text-anime-3');
			
			 animatedTextElements.forEach((element) => {
				//Reset if needed
				if (element.animation) {
					element.animation.progress(1).kill();
					element.split.revert();
				}

				element.split = new SplitText(element, {
					type: "lines,words,chars",
					linesClass: "split-line",
				});
				gsap.set(element, { perspective: 400 });

				gsap.set(element.split.chars, {
					opacity: 0,
					x: "50",
				});

				element.animation = gsap.to(element.split.chars, {
					scrollTrigger: { trigger: element,	start: "top 90%" },
					x: "0",
					y: "0",
					rotateX: "0",
					opacity: 1,
					duration: 1,
					ease: Back.easeOut,
					stagger: 0.02,
				});
			});		
		}
	}
	
	if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
            initHeadingAnimation();
        });
    } else {
        $window.on("load", initHeadingAnimation);
    }

     // Section title Js
    if ($(window).width() > 576 && $(".char-animation").length > 0) {
        let char_come = gsap.utils.toArray(".char-animation");
        char_come.forEach(splitTextLine => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: splitTextLine,
                    start: "top 90%",
                    end: "bottom 60%",
                    scrub: false,
                    markers: false,
                    toggleActions: "play none none none",
                },
            });

            const itemSplitted = new SplitText(splitTextLine, {
                type: "chars, words",
            });
            gsap.set(splitTextLine, {
                perspective: 300
            });
            itemSplitted.split({
                type: "chars, words"
            });
            tl.from(itemSplitted.chars, {
                duration: 1,
                delay: 0.5,
                x: 100,
                autoAlpha: 0,
                stagger: 0.05,
            });
        });
    }

	/* Parallaxie js */
	var $parallaxie = $('.parallaxie');
	if($parallaxie.length && ($window.width() > 991))
	{
		if ($window.width() > 768) {
			$parallaxie.parallaxie({
				speed: 0.55,
				offset: 0,
			});
		}
	}

    /* Popup Video */
	if ($('.popup-video').length) {
		$('.popup-video').magnificPopup({
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: true
		});
	}

    // section border animation
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(".section-border",
    { scaleX: 0, transformOrigin: "left center" },
    {
        scaleX: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
        trigger: ".section-border",
        start: "top 80%",
        toggleActions: "play none none reverse",
        }
    }
    );

    ScrollTrigger.create({
    start: "top 80%",
    end: "bottom 60%",
    onLeaveBack: () => {
        gsap.to(".section-border", {
        scaleX: 0,
        transformOrigin: "right center",
        duration: 1,
        ease: "power2.inOut"
        });
    }
    });


	/* Image Hover Effect js */
	const dataItemHover = () =>{
		const initHoverEffect = (container, images) => {
			const hoverInstance = new hoverEffect({
				parent: container.get(0),
				intensity: container.data("intensity") || undefined,
				speedIn: container.data("speedin") || undefined,
				speedOut: container.data("speedout") || undefined,
				easing: container.data("easing") || undefined,
				hover: container.data("hover") || undefined,
				image1: images.eq(0).attr("src"),
				image2: images.eq(0).attr("src"),
				displacementImage: "assets/images/demo-image/image-effect.jpg",
				imagesRatio:  images[0].width / images[0].height,
				hover: false
			});
			
			container.closest(".data-item-hover")
				.on("mouseenter", () => hoverInstance.next())
				.on("mouseleave", () => hoverInstance.previous());
		};

		const setupHoverAnimations = () => {
			$(".data-img-hover").each(function () {
				const currentContainer = $(this);
				const imageElements = currentContainer.find("img");
				const firstImage = imageElements.eq(0);

				if (firstImage[0].complete) {
					initHoverEffect(currentContainer, imageElements);
				} else {
					firstImage.on("load", () => {
						initHoverEffect(currentContainer, imageElements);
					});
				}
			});
		};

		setupHoverAnimations();
	}

	// Call this function when page loads
	$(document).on("ready", function () {
		dataItemHover();
	});
	/* Image Hover Effect End */

    // hotel room suites classic panel scrool
    $window.on("load", function () {
        gsap.registerPlugin(ScrollTrigger);

        var width = window.innerWidth;
        var panels = gsap.utils.toArray(".panel-item");

        var endEl = document.querySelector(".panel-area");
        if (!endEl) {
            return;
        }

        panels.forEach(function (panel, i) {
            gsap.set(panel, { zIndex: i });

            ScrollTrigger.create({
                trigger: panel,
                start: "top 10%",
                end:
                    width >= 1600
                    ? "bottom 90%"
                    : width >= 1400
                    ? "bottom 160%"
                    : "bottom 170%",
                endTrigger: endEl,
                pin: true,
                pinSpacing: false,
                scrub: 1,
                markers: false,
            });
        });
    });

    
    // hotel room suites section panel scrool
    $window.on("load", function () {
        gsap.registerPlugin(ScrollTrigger);

        var width = window.innerWidth;
        var panels = gsap.utils.toArray(".panel-item-2");

        var endEl = document.querySelector(".panel-area-2");
        if (!endEl) {
            return;
        }

        panels.forEach(function (panel, i) {
            gsap.set(panel, { zIndex: i });

            ScrollTrigger.create({
                trigger: panel,
                start: "top 10%",
                end:
                    width >= 1600
                    ? "bottom 95%"
                    : width >= 1400
                    ? "bottom 170%"
                    : "bottom 175%",
                endTrigger: endEl,
                pin: true,
                pinSpacing: false,
                scrub: 1,
                markers: false,
            });
        });
    });

                           
})(jQuery);