var seconds, minutes, hours;

function setup() {
  createCanvas(1000,1000);
}

function draw() {
  background(255,255,255);  
  hours = hour();
  minutes = minute();
  seconds = second();
  angleMode(DEGREES);
  secondsAngle = map(seconds, 0, 60, 0, 360);
  minutesAngle = map(minutes, 0, 60, 0, 360);
  hoursAngle = map(hours, 0, 12, 0, 360);
  textSize(30);
  fill("red");
  text("Red circle = SECONDS", 430, 50);
  fill("green");
  text("Green circle = MINUTES", 430, 80);
  fill("blue");
  text("Blue circle = HOURS", 430, 110);
  noFill();
  stroke("red");
  strokeWeight(5);
  arc(475, 490, 300, 300, secondsAngle, PI/2);
  stroke("green");
  arc(475, 490, 290,290, minutesAngle, PI/2);
  stroke("blue");
  arc(475, 490, 280, 280, hoursAngle, PI/2);
  stroke("blue");
  textSize(30);
  fill("black");
  text(hours , 420,500);
  text(minutes , 460,500);
  text(seconds , 500,500);
}