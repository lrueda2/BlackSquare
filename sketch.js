
let part;
let color = 0;

var a=0;
var direction = "right";

var spot = {
  x: 100,
  y: 50,
};

var col = {
  r: 255,
  g: 0,
  b: 0,
};

let c = 100;
let d = 100;

var e = 20;
var speed = 1;

var angle = 0;

var angInc = 1;

let value = 0;

var offset = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  part = 1;

  //part 2
  c = -690;
	
}

function draw(){

  if (part == 1) {
  //mouse move change shade of color
  background(color);

  // random sqaure background
  col.r = random(100, 255);
  col.g = 0;
  col.b = random(100, 190);

  spot.x = random(-450, width);
  spot.y = random(-350, height);
  // noStroke();
  fill(col.r, col.g, col.b, 300);
  square(spot.x, spot.y, 50, 50);
  
  // Draw moving square up & down, left & right itself
  fill(155);
  //square move up & down
  square(300, a, 80, 55);
  square(-500, a, 80, 55);
  //square move left & right
  square(a, -350, 125);
  square(a, 350, -125);

    if (direction=="right") {
      a=a+3;
    }
    if (direction=="left") {
      a=a-3;
    }
    if (a>=500) {
      direction = "left";
    }
    if (a<=-450) {
      direction = "right";
    }

  // Draw moving 3D box
  fill(255);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(120);

  //next page
  } else if (part == 2) {
  background(255);
  //draw black square background
    fill(0);
    rect(-765, -375, 175, 175);
    rect(-415, -375, 175, 175);
    rect(-65, -375, 175, 175);
    rect(285, -375, 175, 175);
    rect(635, -375, 175, 175);

    rect(-590, -200, 175, 175);
    rect(-240, -200, 175, 175);
    rect(110, -200, 175, 175);
    rect(460, -200, 175, 175);

    rect(-765, -25, 175, 175);
    rect(-415, -25, 175, 175);
    rect(-65, -25, 175, 175);
    rect(285, -25, 175, 175);
    rect(635, -25, 175, 175);

    rect(-590, 150, 175, 175);
    rect(-240, 150, 175, 175);
    rect(110, 150, 175, 175);
    rect(460, 150, 175, 175);
 
 	rect(-765, 325, 175, 175);
    rect(-415, 325, 175, 175);
    rect(-65, 325, 175, 175);
    rect(285, 325, 175, 175);
    rect(635, 325, 175, 175);


  	//draw mouse square
	push();
	translate(mouseX, mouseY);
	angleMode(DEGREES);
	rotate(angle);

	fill(0,0,200);
	rectMode(CENTER);
	noStroke();
	rect(0,0,e,e);
	
	if(e > 200){
		speed = -speed;
	} else if(e < 0){
		speed = -speed;
	}
	pop();


	push();
	
	translate(200,200);
	rotate(-angle);
	rectMode(CENTER);
	fill(200,0,0);
	rect(0,0,50,50);
	
	pop();
	e = e + speed;
	angle = angle + angInc;

	// colorfull square train
	strokeWeight(4);
	stroke(255);

	for (var f = 0; f <= width; f += 25) {
		fill(random(255), 0, random(255));
		rect(f + offset, 150, 25, 25);
		rect(-350, f + offset, 25, 25);

	if (offset >= windowWidth){
   	offset = -600; 
  	}

  	if (offset <= -windowWidth){
  	 offset = 600; 
  	}

   	if (offset >= windowHeight){
   	offset = -350; 
  	}
	}

	offset = offset + 1;

  //draw moving keyarrow mouse
  fill('rgb(0,0,255)');
  square(c, d, 90, 90);

  
  if (c >= windowWidth){
   c = -600; 
  }

  if (c <= -windowWidth){
   c = 600; 
  }

  if (d >= windowHeight){
   d = -350; 
  }

  if (d <= -windowHeight){
   d = 350; 
  }

  	if (keyIsDown(LEFT_ARROW)) {
  		c = c - 5;
			
	}

	if (keyIsDown(RIGHT_ARROW)) {
		c = c + 5;

	}

	if (keyIsDown(UP_ARROW)) {
		d = d - 10;
	}

	if (keyIsDown(DOWN_ARROW)) {
		d = d + 10;
	}

  } 

}

function keyPressed() {
  if (keyCode === 32){
  	part = 2;
  }
}  

function mouseMoved() {
  color = color + 5;
  if (color > 255) {
    color = 0;
  }
}

function mousePressed(){
	angInc = -angInc;
	 loop();

}
