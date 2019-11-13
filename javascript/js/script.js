$(document).ready(function(){

$('.pencil').click(function draw(){
    $('.doodle').toggle();
});

$( "#a" ).keypress(function() {
  console.log( "Handler for .keypress() called." );
   $('.zoetrope').toggle();
});

$('n').keypress(function(){
    $('.doodle').toggle();
});

$( "#other" ).click(function() {
  $( "#target" ).keydown();
});

   
  

});
