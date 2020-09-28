var monkey,monkeyImage;
var banana,bananaImage;
var obstacle,obstacleImage;
var scene,sceneImage; 

function preload(){
  scene=loadImage("jungle.jpg")
  
  monkey=loadImage("Monkey_01.png","Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
  banana=loadImage("Banana.png")
  obstacle_img=loadImage("stone.png")
}


function setup() {
  createCanvas(600,300);
  
  banana=createSprite(200,200,50,50);
  banana.addImage(banana.png);
}


function draw(){
 background(255); 
 monkey.createSprite=(200,200,50,50)
}