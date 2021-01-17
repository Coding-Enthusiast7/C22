const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground, ball;

function setup(){
  engine = Engine.create();
  world = engine.world;
  createCanvas(400, 400);

  var object_options = {
    isStatic: true
  }

  ground = Bodies.rectangle(200, 390, 400, 20, object_options);
  World.add(world, ground);

  var ball_options={
    restitution:0.5
  }

  ball = Bodies.circle(200, 100, 20, ball_options);
  World.add(world,ball);





  
}
function draw(){
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  fill("brown");
 rect(ground.position.x, ground.position.y, 400, 20);

 ellipseMode(RADIUS);
 fill("white");
 ellipse(ball.position.x, ball.position.y, 20, 20)

 }


