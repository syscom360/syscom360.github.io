(function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 54)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });


    $(document).ready(function() {
      $(".hamburger").click(function() {
        $(this).toggleClass("active");
      });
    });

    
 // Closes responsive menu when a scroll trigger link is clicked
 $('.js-scroll-trigger').click(function() {
  $('.navbar-collapse').collapse('hide');
});

$("#home").delay(100).animate({"opacity": "1"}, 700);

})(jQuery);