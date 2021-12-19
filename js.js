$(document).ready(function(){
    $('#zoomimg').css("cursor","pointer");
    $('#zoomimg').animate({width: "50%", height: "50%"}, 'slow');
  
    setTimeout(function() {
      $('#zoomimg').animate({width: "28%"}, 'slow');
    }, 1000 ); 
  });