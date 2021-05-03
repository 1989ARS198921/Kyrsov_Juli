$(window).scroll(function(){
  var position = $(this).scrollTop();
  $('.imgHolder img').css({top:position/2});
});

$('.header').on('click','',function(){
    var top = $('section').first().position().top;
   $("html, body").animate({
                            scrollTop: top}, {easing: "swing", duration: 800
                           });
});