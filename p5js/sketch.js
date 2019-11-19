console.log("sketch is connected")

// function setup() {
//   createCanvas(1500, 700);
//   background("Tomato");

// }

// function draw() {
//   ellipse(600,400, mouseX, mouseY, 50,45);
//   ellipse( mouseX, mouseY, 70, 200,)
//   ellipse(30, mouseX, mouseY, 50,45);

// }


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  setAttributes('antialias', true);
  background(181, 158, 126);
}



function draw() {
  // rotateX(frameCount * 0);
  // rotateZ(frameCount * 2);

  // rotateX(frameCount * 0.1);
  // rotateZ(frameCount * 0.8);

  // rotateX(frameCount * 3);
  // rotateZ(frameCount * 0);

  // rotateX(frameCount * 0.1);
  // rotateZ(frameCount * 0);

  // rotateX(frameCount * 15);
  // rotateZ(frameCount * 0);

  noFill()
  beginShape();
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


// function draw() {
//   orbitControl();
//   background(50);
//   strokeWeight(4);
//   stroke(255);
//   point(-25, 30);
//   point(25, 30);
//   point(25, -30);
//   point(-25, -30);

//   strokeWeight(1);
//   noFill();

//   beginShape();
//   vertex(-25, 300);
//   bezierVertex(0, 30, 25, -30, -25, -30);

//   endShape();

//   beginShape();
//   vertex(-25, 30, 20);
//   bezierVertex(25, 30, 20, 25, -30, 20, -25, -30, 20);
//   endShape();
// }


//   background(181, 158, 126);
// noFill();
// curve(5, 26, 5, 26, 73, 24, 73, 61);
// curve(5, 26, 73, 24, 73, 61, 15, 65);
// fill(255);
// ellipseMode(CENTER);
// let steps = 6;
// for (let i = 0; i <= steps; i++) {
//   let t = i / steps;
//   let x = curvePoint(5, 5, 73, 73, t);
//   let y = curvePoint(26, 26, 24, 61, t);
//   ellipse(x, y, 5, 5);
//   x = curvePoint(5, 73, 73, 15, t);
//   y = curvePoint(26, 24, 61, 65, t);
//   ellipse(x, y, 5, 5);
// }


