/*Hader section*/
$(window).scroll(function(){
  if ($(window).scrollTop() >= 300) {
      $('nav').addClass('fixed-header');
      $('nav div').addClass('visible-title');
  }
  else {
      $('nav').removeClass('fixed-header');
      $('nav div').removeClass('visible-title');
  }
});

$(document).ready(function() {
        // Transition effect for navbar 
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 500) { 
              $('.navbar').addClass('solid');
          } else {
              $('.navbar').removeClass('solid');
          }
        });
});