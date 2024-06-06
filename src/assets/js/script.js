/*-----------------------------------------------------------------

Template Name: Agenshark - Startup Agency HTML Template
Author:  Gramentheme
Author URI: https://themeforest.net/user/gramentheme/portfolio
Developer: Kawser Ahmed Roni
Version: 1.0.0
Description: Gratech - IT Service HTML5 Template

-------------------------------------------------------------------
CSS TABLE OF CONTENTS
-------------------------------------------------------------------

01. preloader
02. header
03. swiper slider
04. animated text with swiper slider
05. shop products count
06. image src change
07. hide & show a div
08. isotope
09. add class & remove class
10. magnificPopup
11. back to top
12. data backgrund
13. coundown by click
14. remove products
15. wow animation

------------------------------------------------------------------*/

(function ($) {
	("use strict");

	// Color theme area start here ***
	function setThemeColor(color) {
		const root = document.documentElement;
		root.setAttribute("data-theme", color);
	}
	// Color theme area end here ***

	// Preloader area start here ***
	var windowOn = $(window);
	windowOn.on("load", function () {
		$("#loading").fadeOut(500);
	});
	// Preloader area end here ***

	// Header area start here ***
	// Mobile menu
	$(".header-area nav").meanmenu();

	// Menu Fixed
	var fixed_top = $(".header-area");
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 50) {
			fixed_top.addClass("menu-fixed animated fadeInDown");
		} else {
			fixed_top.removeClass("menu-fixed fadeInDown");
		}
	});
	// Header area end here ***

	// Gsap Animation area start here ***
	// $(function () {
	// 	gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

	// 	ScrollTrigger.normalizeScroll(false);

	// 	let smoother = ScrollSmoother.create({
	// 		smooth: 2,
	// 		effects: true,
	// 		content: ".ScrollSmoother-content",
	// 	});
	// });
	// Gsap Animation area end here ***

	// Mouse move paralax area end here ***
	if ($(window).width() > 780) {
		$(".paralax__animation").mousemove(function (e) {
			$("[data-depth]").each(function () {
				var depth = $(this).data("depth");
				var amountMovedX = (e.pageX * -depth) / 4;
				var amountMovedY = (e.pageY * -depth) / 4;

				$(this).css({
					transform:
						"translate3d(" +
						amountMovedX +
						"px," +
						amountMovedY +
						"px, 0)",
				});
			});
		});
	}
	// Mouse move paralax area end here ***

	// Type text area start here ***
	$(document).ready(function () {
		const words = ["Developer", "Desinger", "Companies"];
		let index = 0;
		let letterIndex = 0;
		let direction = 1;
		let currentWord = words[0];
		let interval;

		function typeWriter() {
			const word = words[index];
			if (letterIndex < word.length) {
				$("#typing-text").text(
					$("#typing-text").text() + word.charAt(letterIndex)
				);
				letterIndex++;
			} else {
				clearInterval(interval);
				interval = setInterval(eraseText, 150); // Delay between typing and erasing
			}
		}

		function eraseText() {
			if (letterIndex >= 0) {
				const text = currentWord.substring(0, letterIndex);
				$("#typing-text").text(text);
				letterIndex--;
			} else {
				clearInterval(interval);
				index = (index + direction) % words.length;
				if (index < 0) index = words.length - 1;
				currentWord = words[index];
				interval = setInterval(typeWriter, 150); // Delay before typing next word
			}
		}

		interval = setInterval(typeWriter, 150); // Initial delay before typing starts
	});
	// Type text area end here ***

	// Story slider area start here ***
	var swiper = new Swiper(".story__slider", {
		spaceBetween: 45,
		speed: 500,
		scrollbar: {
			el: ".swiper-scrollbar",
		},
	});
	// Story slider area start here ***

	// Service slider area start here ***
	var swiper = new Swiper(".service-four__slider", {
		spaceBetween: 40,
		speed: 500,
		scrollbar: {
			el: ".service-four__scrollbar",
		},
		breakpoints: {
			991: {
				slidesPerView: 2,
			},
		},
	});

	var swiper = new Swiper(".service-four__slider-item2", {
		spaceBetween: 40,
		speed: 500,
		scrollbar: {
			el: ".service-four__scrollbar-item2",
		},
		breakpoints: {
			991: {
				slidesPerView: 2,
			},
		},
	});

	var swiper = new Swiper(".service-four__slider-item3", {
		spaceBetween: 40,
		speed: 500,
		scrollbar: {
			el: ".service-four__scrollbar-item3",
		},
		breakpoints: {
			991: {
				slidesPerView: 2,
			},
		},
	});

	var swiper = new Swiper(".service-four__slider-item4", {
		spaceBetween: 40,
		speed: 500,
		scrollbar: {
			el: ".service-four__scrollbar-item4",
		},
		breakpoints: {
			991: {
				slidesPerView: 2,
			},
		},
	});

	var swiper = new Swiper(".service-four__slider-item5", {
		spaceBetween: 40,
		speed: 500,
		scrollbar: {
			el: ".service-four__scrollbar-item5",
		},
		breakpoints: {
			991: {
				slidesPerView: 2,
			},
		},
	});
	// Service slider area end here ***

	// Testimonial slider area start here ***
	var swiper = new Swiper(".testimonial__slider", {
		loop: "true",
		spaceBetween: 30,
		speed: 400,
		pagination: {
			el: ".testimonial__dot",
			type: "fraction",
		},
		navigation: {
			nextEl: ".testimonial__arry-next",
			prevEl: ".testimonial__arry-prev",
		},
	});

	var swiper = new Swiper(".testimonial-two__slider", {
		loop: "true",
		spaceBetween: 30,
		speed: 500,
		centeredSlides: true,
		pagination: {
			el: ".testimonial-two__dot",
			clickable: true,
		},
		navigation: {
			nextEl: ".testimonial-two__arry-next",
			prevEl: ".testimonial-two__arry-prev",
		},
		breakpoints: {
			1500: {
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: 3,
			},
			767: {
				slidesPerView: 2,
			},
		},
	});

	var swiper = new Swiper(".testimonial-three__slider", {
		loop: "true",
		spaceBetween: 60,
		speed: 500,
		pagination: {
			el: ".testimonial-three__dot",
			clickable: true,
		},
		navigation: {
			nextEl: ".testimonial-three__arry-next",
			prevEl: ".testimonial-three__arry-prev",
		},
		breakpoints: {
			991: {
				slidesPerView: 2,
			},
		},
	});

	var swiper = new Swiper(".testimonial-four__slider", {
		spaceBetween: 24,
		speed: 500,
		pagination: {
			el: ".team-four__dot",
			clickable: true,
		},
		navigation: {
			nextEl: ".testimonial-four__arry-next",
			prevEl: ".testimonial-four__arry-prev",
		},
		scrollbar: {
			el: ".testimonial-four__scrollbar",
		},
		breakpoints: {
			991: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 2,
			},
		},
	});
	// Testimonial slider area end here ***

	// Blog slider area start here ***
	var swiper = new Swiper(".blog__slider", {
		loop: "true",
		spaceBetween: 24,
		speed: 500,
		navigation: {
			nextEl: ".blog__arry-next",
			prevEl: ".blog__arry-prev",
		},
		breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 2,
			},
			767: {
				slidesPerView: 2,
			},
		},
	});
	// Blog slider area end here ***

	// Team slider area start here ***
	var swiper = new Swiper(".team__slider", {
		loop: "true",
		spaceBetween: 24,
		speed: 500,
		pagination: {
			el: ".team__dot",
			clickable: true,
		},
		navigation: {
			nextEl: ".team__arry-next",
			prevEl: ".team__arry-prev",
		},
		breakpoints: {
			1200: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 3,
			},
			767: {
				slidesPerView: 2,
			},
		},
	});

	var swiper = new Swiper(".team-four__slider", {
		spaceBetween: 24,
		speed: 500,
		pagination: {
			el: ".team-four__dot",
			clickable: true,
		},
		navigation: {
			nextEl: ".team-four__arry-next",
			prevEl: ".team-four__arry-prev",
		},
		scrollbar: {
			el: ".swiper-scrollbar",
		},
		breakpoints: {
			1200: {
				slidesPerView: 4,
			},
			991: {
				slidesPerView: 3,
			},
			575: {
				slidesPerView: 2,
			},
		},
	});
	// Team slider area end here ***

	// Hover over the elements with the class "service__item"
	$(".service__item").hover(
		// Function to run when the mouse enters the element
		function () {
			// Remove the "active" class from all elements
			$(".service__item").removeClass("active");
			// Add the "active" class to the currently hovered element
			$(this).addClass("active");
		}
	);
	// Hover add & remove js area end here ***

	// Background image area start here ***
	$("[data-background").each(function () {
		$(this).css(
			"background-image",
			"url( " + $(this).attr("data-background") + "  )"
		);
	});
	// Background image area end here ***

	// Video popup area start here ***
	$(".video-popup").magnificPopup({
		type: "iframe",
		iframe: {
			markup:
				'<div class="mfp-iframe-scaler">' +
				'<div class="mfp-close"></div>' +
				'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
				"</div>",

			patterns: {
				youtube: {
					index: "youtube.com/",

					id: "v=",

					src: "https://www.youtube.com/embed/%id%?autoplay=1",
				},
				vimeo: {
					index: "vimeo.com/",
					id: "/",
					src: "//player.vimeo.com/video/%id%?autoplay=1",
				},
				gmaps: {
					index: "//maps.google.",
					src: "%id%&output=embed",
				},
			},

			srcAction: "iframe_src",
		},
	});
	// Video popup area end here ***

	// Coundawn area start here ***
	var targetDate = new Date("2024-07-12 00:00:00").getTime();
	var countdownInterval = setInterval(function () {
		var currentDate = new Date().getTime();
		var remainingTime = targetDate - currentDate;

		if (remainingTime <= 0) {
			clearInterval(countdownInterval);
			// Display a message or perform any action when the countdown timer reaches zero
			$("#countdown-container").text("Countdown has ended!");
		} else {
			var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
			var hours = Math.floor(
				(remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			var minutes = Math.floor(
				(remainingTime % (1000 * 60 * 60)) / (1000 * 60)
			);
			var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

			// Pad single-digit values with leading zeros
			$("#day").text(days.toString().padStart(2, "0"));
			$("#hour").text(hours.toString().padStart(2, "0"));
			$("#min").text(minutes.toString().padStart(2, "0"));
			$("#sec").text(seconds.toString().padStart(2, "0"));
		}
	}, 1000);
	// Coundawn area end here ***

	// Counter up area start here ***
	$(".count").counterUp({
		delay: 50,
		time: 1500,
	});
	// Counter up area end here ***

	// Back to top btn area start here ***
	$(window).scroll(function () {
		if ($(this).scrollTop() > 20) {
			$("#back-top").addClass("show");
		} else {
			$("#back-top").removeClass("show");
		}
	});
	$("#back-top").click(function () {
		$("html, body").animate({ scrollTop: 0 }, 800);
		return false;
	});
	// Back to top btn area end here ***

	// WOW Animatin area start here ***
	Splitting();
	wow = new WOW({
		animateClass: "animated",
		offset: 100,
	});
	wow.init();
	// WOW Animatin area start here ***
})(jQuery);
