let blue, red, green, orange;
// let img;

// function preload(){
// img= loadImage("leaves.png");
// }

function setup() {
  createCanvas(8.5 * 72, 11 * 72);
  pixelDensity(1);
  
  //set the color layers
  blue = new Riso("BLUE");
  red = new Riso ("RED");
  green = new Riso ("GREEN");
  orange = new Riso ("ORANGE");
  
  //prevent looping in draw
  noLoop();
}

function draw() {
  background(220);
  clearRiso();
}
  
function draw() {  
  beginShape();
  background(33,33,33);
  strokeWeight(30);
  stroke(456,34,456);

  vertex(0,-220);
  // bezierVertex(0, -190, 2, -190, 0, -180);
  vertex(0,-180)
 // vertex(5, -180);
  vertex(35, -30);
  vertex(35, 200);
  vertex(33, 220);
  vertex(38, 280);
  bezierVertex(15, 290, -50, 300, -90, 280);
  vertex(-83, 220);
  vertex(-85, 200);
  vertex(-85, -30);
  vertex(-35, -180);
  vertex(-35, -220);
  vertex(0,-220)
  // bezierVertex(20, 20, 20, 75, 30, 20);
  endShape();


 beginShape();
 fill(456,0, 34,456);

 vertex(60,40)
 vertex(60,240)
 vertex(140,260)
 vertex(140,60)
 vertex(60,40)
 // second plane
 vertex(90,-50)
 vertex(180,-60)
 vertex(150,30)
 vertex(60,40)
 vertex(150,30)
 vertex(230,45)
 vertex(140,60)
 vertex(230,45)
 vertex(230,230)
 vertex(140,260)
 endShape();


 beginShape();
 vertex(-330,30)
 vertex(-330,-100)
 vertex(-340,-105)
 vertex(-340,-115)
 // vertex(-310,-120)
 vertex(-280,-115)
 vertex(-280,-105)
 vertex(-290,-100)
 vertex(-290,30)
 vertex(-240,130)
 vertex(-240, 270)
 vertex(-310, 280)
 vertex(-380, 270)
 vertex(-380, 120)
 vertex(-330,30)
 endShape();

beginShape();
 vertex(-480, 200)
 vertex(-480,0)
 vertex(-440,-220)
 vertex(-440,-290)
 vertex(-405,-290)
 vertex(-405,-220)
 vertex(-365,-0)
 vertex(-365,200)
 vertex(-420,210)
 vertex(-480, 200)
 endShape();

beginShape();
 vertex(-320, 200)
 vertex(-320,0)
 vertex(-280,-220)
 vertex(-280,-290)
 vertex(-245,-290)
 vertex(-245,-220)
 vertex(-205,-0)
 vertex(-205,200)
 vertex(-260,210)
 vertex(-320, 200)
 endShape();


beginShape();
 vertex(-180, 190)
 vertex(-120,-180)
 vertex(-180,-270)
 vertex(-170,-280)
 vertex(-120,-280)
 vertex(0,-230)
 vertex(20,-230)
 vertex(40,-210)
 vertex(40,-200)
 vertex(90,-160)
 vertex(60,-30)
 vertex(30,-10)
 vertex(60,190)
 vertex(45,200)
 vertex(-165,200)
 vertex(-180,190)
 endShape();

 beginShape(); 
 vertex(40,-200)
 vertex(40,-200)
 vertex(90,-160)
 vertex(60,-30)
 vertex(30,-10)
 vertex(60,190)
 vertex(45,200)
 vertex(-165,200)
 vertex(-180,190)
 endShape();
}

  
  
  //extract color info
  let reds = extractRGBChannel(img, "red");
  let blues = extractRGBChannel(img, "blue");
  let greens = extractRGBChannel(img, "green");

  //set origins or anchor points in the center
  blue.imageMode(CENTER);
  red.imageMode(CENTER);
  green.imageMode(CENTER);
  orange.imageMode(CENTER);
  
  //copy blue channel info to riso obejct 
  orange.image(blues, width/2, height/2, img.width/2, img.height/2);
  red.image(reds, width/2, height/2, img.width/2, img.height/2);
  green.image(greens, width/2, height/2, img.width/2, img.height/2);
  
  drawRiso();

function keyPressed(){

  if (keyCode === 82){
  console.log("letter R");
  exportRiso();
}

}