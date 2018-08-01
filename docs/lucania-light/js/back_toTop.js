// BY KAREN GRIGORYAN

$(document).ready(function() {
    /******************************
        BOTTOM SCROLL TOP BUTTON
     ******************************/
  
    // declare variable
    var scrollTop = $("#back-to-top");
  
    $(window).scroll(function() {
      // declare variable
      var topPos = $(this).scrollTop();
  
      // if user scrolls down - show scroll to top button
      if (topPos > 1080) {
        $(scrollTop).css("display", "block");
  
      } else {
        $(scrollTop).css("display", "none");
      }
  
    }); // scroll END
  
    //Click event to scroll to top
    $(scrollTop).click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 600);

      return false;
  
    }); // click() scroll top EMD
  
});