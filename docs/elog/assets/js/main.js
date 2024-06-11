(function ($) {

    $("a.anchor").click(function (event) {
        const href = event.target.getAttribute("href");
        $([document.documentElement, document.body]).animate(
            {scrollTop: $(href).offset().top},
            1000
        );
    });

    $(".hamburger").on("click", function () {
        $("#navbar").toggleClass("open");
    });
    
    const fixed_top = $('#navbar');
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 50) {
            fixed_top.addClass("menu-fixed animated fadeInDown");
        } else {
            fixed_top.removeClass("menu-fixed fadeInDown");
        }
    });

    if($(window).scrollTop() > 50) {
        fixed_top.addClass("menu-fixed animated fadeInDown");
    }

    Splitting();
    let wow = new WOW({
        animateClass: "animated",
        offset: 200,
    });
    wow.init();
    
})(jQuery);
