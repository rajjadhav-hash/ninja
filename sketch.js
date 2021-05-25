var bg,bgImage;
var ninja,ninjaImg;
var ground;
var logImg,wallImg,fireImg,dragonImg,horrorImg;
var vegiesImg,capsicumImg;
var obstacle;
var obs=[]
var enemy;
var enemies=[]
function preload(){
  bgImage=loadImage("jungle.jpg");
  ninjaImg=loadAnimation("Run0.png","Run1.png","Run2.png","Run3.png","Run4.png","Run5.png","Run6.png","Run7.png","Run8.png","Run9.png");
  logImg=loadImage("log.png");
  wallImg=loadImage("bricks.png");
  fireImg=loadImage("log2.png");
  dragonImg=loadImage("dragon.png");
  vegiesImg=loadImage("veggies.png");
  capsicumImg=loadImage("capsicum.png");
  horrorImg=loadImage("horror.png");
}
function setup() {
  createCanvas(1500,750);
  bg=createSprite(750,375);
  bg.addImage(bgImage);
  bg.scale=0.4;;
  bg.velocityX=-7;
  ninja=createSprite(100,500,20,20);
  ninja.addAnimation("run",ninjaImg);
  ninja.scale=0.5;
 // ninja.velocityX=3;
  ground=createSprite(650,720,2600,10);
  ground.velocityX=-3;
  ground.visible=false;
  //bg.x=bg.width/2;
}

function draw() {
  background(255,255,255);
  if(bg.x<350){
    bg.x=650;
  }  
  if(ground.x<0){
    ground.x=650;
  }
  ninja.collide(ground);
  if(keyDown("space")){
    ninja.velocityY=-10;
  }
  ninja.velocityY=ninja.velocityY+1;
  spawnObstacles();
  spawnEnemies();
  drawSprites();
}
function spawnObstacles(){
if(frameCount%80===0){
obstacle=createSprite(1500,680,10,10);
obstacle.velocityX=-6;
var num=round(random(1,3))
switch(num){
  case 1:obstacle.addImage(logImg);
  obstacle.scale=0.2;
  break;

  case 2:obstacle.addImage(fireImg);
  obstacle.scale=0.1;
  break;

 

  case 3:obstacle.addImage(wallImg);
  obstacle.scale=0.05;
  break;

  
}
obstacle.lifetime=300;
obs.push(obstacle);
}

}
function spawnEnemies(){
  if(frameCount%60===0){
    enemy=createSprite(1500,680,10,10);
    enemy.velocityX=-6;
    var num1=round(random(1,2))
    switch(num1){
      case 1:enemy.addImage(dragonImg);
      enemy.scale=0.2;
      break;
      case 2:enemy.addImage(horrorImg);
      enemy.scale=0.05;
      break;
    }
    enemy.y=random(50,350)
    enemies.push(enemy);
  }
}

