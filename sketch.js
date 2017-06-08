

function setup() {
  createCanvas(500,500);
  snowFlake = createSprite(random(500),-random(100),5,5);

  snowFlakes = Group();
    snowFlakes.add(snowFlake);
}

function draw() {
  background(179, 224, 255, 50)
  fill(255);
  noStroke();
  rect(0,450,500,50);
  strokeWeight(2);
  stroke(0);
  ellipse(250,400,150,150);
  ellipse(250,275,125,125);
  ellipse(250,165,100,100);
  snowFlakes.add(createSprite(random(500),-random(100),5,5));
  for (var i = 0; i < snowFlakes.length ; i++) {
    snowFlakes.get(i).shapeColor = color(random(255),random(255),random(255));
    snowFlakes.get(i).position.y += 5;
}
  drawSprites();





  strokeWeight(5);
  stroke(255, 117, 26);
  line(250,165,280,170);

  stroke(10);
  line(225,142.5,225,157.5);
  line(270,142.5,270,157.5);
  line(200,250,150,300);
  line(300,250,350,300);

  stroke(0);
  strokeWeight(10);
  noFill();
  rect(0,0,500,500);
}
