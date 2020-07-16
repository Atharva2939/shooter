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
