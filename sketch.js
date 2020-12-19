function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
  //tick.loop();
}

function draw() {
  background(0);
  fill("yellow");
  textSize(20);
  textAlign(CENTER);
  text("The TICK-TOCK Clock", 200,20);  
  
  let hr = hour();
  let mn = minute();
  let sc = second();
  
  text("Current Time= "+hr+":"+mn+":"+sc,200,380);
  
  translate(200,200);
  rotate(-90);

  //seconds
  strokeWeight(8);
  stroke("blue");
  noFill();
  var sec = map(sc,0,60,0,360);
  arc(0,0,300,300,0,sec);

  push();
  rotate(sec);
  strokeWeight(7);
  stroke("blue");
  line(0,0,100,0);
  pop();

  //minutes
  strokeWeight(8);
  stroke("green");
  noFill();
  var min = map(mn,0,60,0,360);
  arc(0,0,280,280,0,min);

  push();
  rotate(min);
  strokeWeight(7);
  stroke("green");
  line(0,0,75,0);
  pop();

  //hours
  strokeWeight(8);
  stroke("red");
  noFill();
  var h = map(hr%12,0,12,0,360);
  arc(0,0,260,260,0,h);

  push();
  rotate(h);
  strokeWeight(7);
  stroke("red");
  line(0,0,50,0);
  pop();

  //point
  push();
  stroke("white");
  point(0,0);
  pop();

}