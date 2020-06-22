const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground;
var head;
var main
var headImage;
var enemy,enemyImage
var bullets;
var score;
function preload(){
headImage=loadImage("triangle2.png")
enemyImage=loadImage("circle.png")
}
function setup(){
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

//     box1 = new Box(200,300,50,100);
//   box2= new Box(200,100,50,100);
//     ground= new Ground(200,390,400,20);
    //head=Bodies.rectangle(200,200,20,20);
    //World.add(world,head);
main=createSprite(200,200,20,20)
main.addImage("player",headImage)
main.scale=0.1

enemy=createSprite(200,200,20,20)
enemy.addImage("enemy",enemyImage)
enemy.scale=0.1

function draw(){
    background(125);
   Engine.update(engine);
   text("score"+score,300,50)
//     box1.display();
//     box2.display();
//    ground.display();

  // triangleMode(CENTER)
//fill("blue")
//   rect(200,200,20,20)
enemy.x=Math.round(random(0,400))
enemy.y=Math.round(random(0,400))
enemy.velocityX=Math.round(random(-3,3))
enemy.velocityY=Math.round(random(-3,3))
}
   if(keyCode===RIGHT_ARROW){
       console.log("bye")
       main.velocityX=3
   }
   if(keyCode===LEFT_ARROW){
    console.log("bye")
    main.velocityX=-3
}
if(keyCode===32){
bullets=createSprite(main.x,main.y,10,10)
bullets.velocityX=3;
bullets.velocityY=3;
}
if(bullets.collide(enemy)){
    score+=50;
}
if(enemy.collide(main)){
    score-=30;
}
  // display();
  drawSprites()
}
function keyPressed(){
    if(keyCode===UP_ARROW){
        console.log("hi");
    }
}

var gameState="Start"
var james,cloud;
var cloudImage;
var player;
var enemy1,enemy2,enemy3,enemy4,enemy5;
var goonsImage;
var playerImage;
var elephant,elephantImage;
var bullet;
var health;
var health2;
var bg,backgroundImage;
var counter=0;
var block,block1,block2,block3,block4,block5,block6;
var grass;
var bomb,bombImage,fruit,fruit2,fruitImage;
var animal,animalImage
var player2;
function preload(){
  cloudImage=loadImage("shooter.png")
  playerImage=loadImage("player1.png")
  goonsImage=loadImage("enemy.png")
  elephantImage=loadImage("elephant.png")
  backgroundImage=loadImage("jungle.png")
  grass=loadImage("grass.jpg")
  bombImage=loadImage("bomb.png")
  fruitImage=loadImage("apple.png")
  animalImage=loadImage("monkey.png")
}
function setup() {
  createCanvas(1200,600);
  bg=createSprite(600,500,1200,600)
  bg.addImage("jungle",backgroundImage)
  bg.addImage("grass",grass)
  bg.scale=2;
  health=createSprite(100,50,100,20);
 health.visible=false
  elephant=createSprite(1100,300,50,50);
  elephant.addImage("elephant",elephantImage);
  elephant.scale=0.03
  elephant.visible=false
  james=createSprite(400, 200, 50, 50);
  james.addImage("cloud",cloudImage)
  james.scale=0.5;
  player=createSprite(200,200,50,50)
  player.addImage("player2",playerImage);
  player.visible=false
  player.scale=0.3
  player2=createSprite(100,500,50,50)
  player2.addImage("player",playerImage);
  player2.visible=false
  player2.scale=0.1
  enemy1=createSprite(500,100,50,50)
  enemy1.addImage("enemy1",goonsImage);
  enemy1.visible=false
  enemy1.scale=0.1
  bullet1=createSprite(enemy1.x,enemy1.y,10,10)
  bullet1.visible=false
  enemy2=createSprite(700,300,50,50)
  enemy2.addImage("enemy2",goonsImage);
  enemy2.visible=false
  enemy2.scale=0.1
  bullet2=createSprite(enemy2.x,enemy2.y,10,10)
  bullet2.visible=false
  enemy3=createSprite(400,400,50,50)
  enemy3.addImage("enemy3",goonsImage);
  enemy3.visible=false
  enemy3.scale=0.1
  bullet3=createSprite(enemy3.x,enemy3.y,10,10)
  bullet3.visible=false
  enemy4=createSprite(900,500,50,50)
  enemy4.addImage("enemy4",goonsImage);
  enemy4.visible=false
  enemy4.scale=0.1
  bullet4=createSprite(enemy4.x,enemy4.y,10,10)
  bullet4.visible=false
  // for(var i=1;i<=5;i++){
  //   enemy1.x=random(300,700)
  //  }
block=createSprite(400,200,400,30)
block.visible=false
block1=createSprite(400,400,400,30)
block1.visible=false
block2=createSprite(600,70,30,300)
block2.visible=false;
block3=createSprite(600,550,30,300)
block3.visible=false
block4=createSprite(850,300,250,80)
block4.visible=false
block5=createSprite(800,200,30,180)
block5.visible=false
block6=createSprite(700,500,200,30)
block6.visible=false
block7=createSprite(1100,120,250,30)
block7.visible=false
block8=createSprite(950,420,30,300)
block8.visible=false
block9=createSprite(150,0,30,150)
block9.visible=false
//block9.velocityY=3;
block10=createSprite(1000,500,100,50)
block10.visible=false
//block10.velocityX=3;
bomb1=new Group();
monkey=createSprite(1100,500,50,50)
monkey.addImage("monkey",animalImage)
monkey.scale=0.3
monkey.visible=false
}

function draw() {
  background("blue");
  edges=createEdgeSprites();
  health.shapeColor="red"
  drawSprites();
  if(gameState==="Start"){
  textSize(20);
    text("My brother was killed by an elephant",240,35);
    text("I am coming to take his revenge",240,50)
    textSize(30)
    fill("blue")
    text("press space to start",600,400)
  }
  if(keyDown("SPACE")&& gameState==="Start"){
    gameState="Level1";
    james.visible=false;
  }
if(gameState==="Level1"){
  
  health.visible=true
  player.visible=true;
  enemy1.visible=true
  enemy1.velocityY=Math.round(random(-4,4))
 enemy2.visible=true
 enemy2.velocityY=Math.round(random(-4,4))
 enemy3.visible=true
 enemy3.velocityY=Math.round(random(-4,4))
 enemy4.visible=true
 enemy4.velocityY=Math.round(random(-4,0))
elephant.visible=true
if(frameCount%30===0){
  bullet1.visible=true
  bullet1.shapeColor="red"
  bullet1.velocityX=-3
  bullet2.visible=true
  bullet2.shapeColor="red"
  bullet2.velocityX=-3
  bullet3.visible=true
  bullet3.shapeColor="red"
  bullet3.velocityX=-3
  bullet4.visible=true
  bullet4.shapeColor="red"
  bullet4.velocityX=-3
}
if(keyCode===UP_ARROW){
  player.velocityY=-3
}
if(keyCode===DOWN_ARROW){
  player.velocityY=3;
}
if(keyDown("SPACE")&& gameState==="Level1"){
  bullet=createSprite(player.x,player.y,10,10)
  bullet.shapeColor="blue"
  bullet.velocityX=3
  bullet.velocityY=0
}
if(bullet.collide(enemy1)){
  enemy1.destroy()
  bullet.destroy()
  bullet1.destroy();
  counter+=1;
}

if(bullet.collide(enemy2)){
  enemy2.destroy();
  bullet.destroy();
  bullet2.destroy();
  counter+=1;
}
if(bullet.collide(enemy3)){
  enemy3.destroy();
  bullet.destroy();
  bullet3.destroy()
  counter+=1;
}
if(bullet.collide(enemy4)){
  enemy4.destroy();
  bullet.destroy();
  bullet4.destroy();
  counter+=1;
}
if(bullet1.collide(player)|| bullet2.collide(player)||bullet3.collide(player)||bullet4.collide(player)){
  health.width-=10
}
if(counter===3){
  bullet.destroy();
  player.x=650;
  player.y=300;
  player.velocityY=0;
  elephant.x=550;
  elephant.y=300;
  text("Press enter to go to next level",800,300)
}
if(keyDown("ENTER")&& gameState==="Level1"){
  gameState="Level2"
}
}
if(gameState==="Level2"){
 player.visible=false
  player2.visible=true
  block.visible=true;
  block1.visible=true
  block2.visible=true
  block3.visible=true
  block4.visible=true
  block5.visible=true
  block6.visible=true
  block7.visible=true
  block8.visible=true
  block9.visible=true
  // block9.velocityY=3;
  // block9.velocityX=0;
   block9.collide(edges[2],velocity)
  //block9.bounceOff(edges[3])
  block10.visible=true
  // block10.velocityX=3;
  // block.velocityY=0;
  //block10.bounceOff(edges[1])
   //block10.bounceOff(block8)
  elephant.visible=false
  player.scale=0.2
  bg.changeImage("grass",grass)
  monkey.visible=true
  // if(bomb1.isTouching(player)){
  //   health.width-=10
  // }
  if(keyDown(UP_ARROW)){
    player2.velocityY=-3
   player2.velocityX=0;
  }
  if(keyCode===DOWN_ARROW){
    player2.velocityY=3
    player2.velocityX=0;
  }
  if(keyCode===RIGHT_ARROW){
    player2.velocityX=3
    player2.velocityY=0;
  }
  if((keyCode===LEFT_ARROW)){
    player2.velocityX=-3
    player2.velocityY=0
  }
  life();
  spawnBomb();
}
}
function life(){
  fruit=createSprite(530,160,50,50)
  fruit.addImage("fruit",fruitImage)
  fruit.scale=0.1;
  
  fruit2=createSprite(650,550,50,50)
  fruit2.addImage("fruit2",fruitImage);
  fruit2.scale=0.1;
  if(player.isTouching(fruit)){
    fruit.destroy()
    health.width+=20
  }
    if(player.isTouching(fruit2)){
      fruit2.destroy();
      health.width+=20;
  }
}
function spawnBomb(){
if(frameCount%100===0){
  bomb=createSprite(0,0,50,50)
  bomb1.add(bomb)
bomb.addImage("bomb",bombImage)
  bomb.x=Math.round(random(200,1200))
  bomb.velocityY=3
  bomb.scale=0.2
}
}
function velocity(){
  block9.velocityY=3
  block9.bounceOff(edges[3])
}
function playerCollide(){
  if(player2.collide(block)|| player2.collide(block1)||player2.collide(block1)|| player2.collide(block1)|)
}
// set player visiblity false,collide,scaling,image collide-gameState3