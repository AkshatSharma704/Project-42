var hr,min,sec;
var secAngle, minAngle, hrAngle;

function setup() {
  createCanvas(800,400);
  hr = hour();
  min = minute();
  sec = second();
}

function draw() {
  background(0);
  translate(0,0);
  
  //rotating the hour hand
  hrAngle = map(hr%12,0,12,0,360);
  arc(0,0,100,50,0,hrAngle);
  push();
  angleMode(CENTER);
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(70);
  line(0,0,10,0);
  pop();

  //rotating the minute hand
  minAngle = map(min,0,60,0,360);
  arc(0,0,100,50,0,minAngle);
  push();
  angleMode(CENTER);
  rotate(minAngle);
  stroke("red");
  strokeWeight(70);
  line(0,0,100,0);
  pop();

  //rotating the second hand
  secAngle = map(sec,0,60,0,360);
  arc(0,0,100,50,0,secAngle);
  push();
  angleMode(CENTER);
  rotate(secAngle);
  stroke("yellow");
  strokeWeight(70);
  line(0,0,100,0);
  pop();

  

  drawSprites();
}
