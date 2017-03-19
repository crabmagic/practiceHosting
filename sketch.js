//Stanford empty project

// DEFINE variables here
var player;
var myImage;
function preload(){
    myImage = loadImage('/smallGuy.png');
//Load any resources, such as images here
}

function setup() {
    createCanvas(800,600)
    player  = createSprite(300,300,50,102);
player.addImage(myImage);
//INSTANTIATE variables here

}

function draw() {

//UPDATE variables here
drawSprites()
    if(keyDown(LEFT)){
//Put what you want to happen when left is pressed in here

}

if(keyDown(RIGHT)){
//Put what you want to happen when right is pressed in here

}

}

function mouseClicked() {

//Put things you want to happen when you click the mouse in here

}
