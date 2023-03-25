
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground, right, left

function preload()
{
	
}

function setup() {
	createCanvas(600, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(300, 390, 600, 20)
    
	left = new Ground(415, 380, 10, 100)
	right = new Ground(500, 380, 10, 100)

	ball = Bodies.circle(200,100,30)
	World.add(world, ball)



	Engine.run(engine);
  rectMode(CENTER)

}


function draw() {
	
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x, ball.position.y, 30, 30)
ground.blue()
left.blue()
right.blue()

  drawSprites();
 

}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0, y:0},{x:0.07, y:-0.07})
	}
}


