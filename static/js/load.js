;(function($) {
    console.log('aaa')
    $(window).on('load', function() {
        $("#slider").responsiveSlides({
            auto: true,
            speed: 500,
            namespace: "callbacks",
            pager: true,
        })
    });
})(jQuery);