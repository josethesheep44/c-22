
const Engine = Matter.Engine
const World = Matter.World;
const Bodies = Matter.Bodies;

var theEngi
var theWorld

var ball
var ground

function setup() {
  createCanvas(400,400);
  theEngi = Engine.create();
  theWorld =theEngi.world
  var groundStuff={
   isStatic:true
  }
  ground = Bodies.rectangle(200,400,400,1,groundStuff);
  World.add (theWorld,ground);
  
  var ballStuff={
   restitution:1.0
  }
  ball = Bodies.circle(200,200,80,ballStuff);
  World.add (theWorld,ball);
  console.log(ball);
}

function draw() {
  background("blue");
  Engine.update(theEngi);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  rect (ground.position.x,ground.position.y,400,20);

  ellipse (ball.position.x,ball.position.y,20,20)
  
 
}

