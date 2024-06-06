// Gsap Animation area start here ***
$(function () {
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

	gsap.to(".about-line", {
		scrollTrigger: {
			trigger: ".about-line",
			scrub: true,
		},
		x: 300,
		duration: 3,
		rotation: 360,
	});
});
// Gsap Animation area end here ***
