// Shorthand for $( document ).ready()
$(function() {
    	
   $(".thumbnail").hover(function() {
      $(this).find('.caption').toggle();
   });


});



