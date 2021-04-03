var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;
var PLAY=1;
var END=0;
var gameState=PLAY;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(500,600);
// Moving background
path=createSprite(250,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(400,550,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  

cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();

}

function draw() {

  background(0);
  if(gameState===PLAY){
    
  
  boy.x = World.mouseX;
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2; 
  }
 var rand=Math.round(random(1,3))
 if(rand===1){
   createCash();
  }
   else if(rand===2){
    createDiamonds();        
    }
   else{
   createJwellery();
   }
    
  
    createSword();

    if (cashG.isTouching(boy)) {
      //cashG.destroyEach();
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
       treasureCollection=treasureCollection+50;
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
       treasureCollection=treasureCollection+50;
      
    }else{
      if(swordGroup.isTouching(boy)) {
        swordGroup.destroyEach();
        gameState=END;
    }
  }
    if(cashG.isTouching(boy)){
    cashG.destroyEach();
    treasureCollection=treasureCollection+50;
    }
  }
  else if(gameState===END){
    cashG.destroyEach()
    diamondsG.destroyEach()
    jwelleryG.destroyEach()
    boy.addAnimation("SahilRunning",endImg);
    boy.scale=1
    boy.x=250
    boy.y=300
    path.velocityY=0
  }
  
  drawSprites();
  textSize(20);
  fill("black");
  text("Treasure: "+ treasureCollection,150,30);
  
   
}

function createCash() {
  if (World.frameCount % 100 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 5;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 100 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 5;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 100 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 5;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 150 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 5;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}