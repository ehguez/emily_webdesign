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

}

function draw() {
  background(181, 158, 126);
  noFill();
  beginShape();
  vertex(0,-220);
    bezierVertex(0, -190, 2, -190, 0, -180);

  // vertex(5, -180);
  vertex(35, -30);
  vertex(35, 200);
  vertex(33, 220);
  vertex(38, 280);
  bezierVertex(15, 290, -50, 300, -90, 280);


  // bezierVertex(20, 20, 20, 75, 30, 20);

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


