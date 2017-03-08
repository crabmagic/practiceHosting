function setup() {
createCanvas(800,600);
}
var xLocation = 100;
function draw() {
rect(xLocation ,100,50,50);
xLocation = xLocation + 1;

if(xLocation  > 50    ){
  rect(0,0,100,100);
}
}
