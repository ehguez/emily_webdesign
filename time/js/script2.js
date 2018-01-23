//BACKGROUND, shiftig gradient code  I got from https://codepen.io/quasimondo/pen/lDdrF
//BLUE
var colors = new Array(
  [20,38,62],
  [8,44,90],
  [21,65,120],
  [15,91,186],
  [175,210,255],
  [39,119,220],
  [211,230,254],
  [91,148,220],
  [37,80,136]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.003;

function updateGradient()
{
  
  if ( $===undefined ) return;
  
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('#gradient-blue').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
   background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,10);
// END BACKGROUND CODE

//HOVER FUNCTION
$(document).ready(function(){
  $('#circle-1').hover(function(){
    $('#image-1').toggle();});

    $('#circle-2').hover(function(){
    $('#image-2').toggle();});

    $('#circle-3').hover(function(){
    $('#image-3').toggle();});

    $('#circle-4').hover(function(){
    $('#image-4').toggle();});

    $('#circle-5').hover(function(){
    $('#image-5').toggle();});

    $('#circle-6').hover(function(){
    $('#image-6').toggle();});

    $('#circle-7').hover(function(){
    $('#image-7').toggle();});

    $('#circle-8').hover(function(){
    $('#image-8').toggle();});  

    $('#circle-9').hover(function(){
    $('#image-9').toggle();});

    $('#circle-10').hover(function(){
    $('#image-10').toggle();});

    $('#circle-11').hover(function(){
    $('#image-11').toggle();});

    $('#circle-12').hover(function(){
    $('#image-12').toggle();});
});

//BODY CLICK FUNCTION
$(document).ready(function(){
    $('body').dblclick(function(){
        window.location.replace("index.html");
  });
});

//I know there are *so many bugs* in this..
//Need more time with Javascrip / Jquery to make this good code
