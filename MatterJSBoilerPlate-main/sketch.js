const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;

var ball 


function setup() {
  createCanvas(1600,700);
  engine = Engine.create();
  world = engine.world;
  
 

 ground =new Ground(width/2,670,width,20);
  right = new Ground(1350,600,20,120);
  left = new Ground(1100,600,20,120);
 

 var ball_option={
   restitution:0.95,
   friction:0.75}
  ball = Bodies.circle(200,100,30,ball_option)
 World.add(world,ball)
  rectMode(CENTER);
  ellipseMode(RADIUS);

}

function draw() 
{
  background(51);
  ground.show();
  
  left.show();
  right.show();
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,30)
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.08,y:-0.08})
  }
}