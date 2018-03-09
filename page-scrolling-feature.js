$(function() {

    //Page scrolling feature - requires jQuery Easing plugin
    // You need insert class="page-scroll" in your nav <a>
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });



});