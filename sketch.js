const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
const Constraint = Matter.Constraint
var engine,world




function setup() {
  createCanvas(800,800);
engine = Engine.create()
world = engine.world
ground = new Ground(400,800,800,30)
box1 = new Box(600,200,60,60);
box2 = new Box(600,200,60,60);
box3 = new Box(600,200,60,60);
box4 = new Box(600,200,60,60);
box5 = new Box(600,200,60,60);
box6 = new Box(600,200,60,60);
box7 = new Box(600,200,60,60);
box8 = new Box(600,200,60,60);
box9 = new Box(600,200,60,60);
box10 = new Box(600,200,60,60);
box11 = new Box(500,200,60,60);
box12 = new Box(500,200,60,60);
box13 = new Box(500,200,60,60);
box14 = new Box(500,200,60,60);
box15 = new Box(500,200,60,60);
box16 = new Box(500,200,60,60);
box17 = new Box(500,200,60,60);
box18 = new Box(500,200,60,60);
box19 = new Box(500,200,60,60);
box20 = new Box(500,200,60,60);
ball = new Ball(300,500,70,70);
rope = new Rope(ball.body,{x:300,y:300})

}

function draw() {
  background(220);
Engine.update(engine)

ground.display()
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
box14.display()
box15.display()
box16.display()
box17.display()
box18.display()
box19.display()
box20.display()
ball.display()
rope.display()

}
function mouseDragged(){
 Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY}) 
}