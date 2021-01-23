const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var Hexagon;

function preload() {
    bg = loadImage("Bg.jpg")
}

function setup() {
  var canvas = createCanvas(1000, 350);
  engine = Engine.create();
  world = engine.world;

  Ground = new ground(600, 339, 1200, 10);
  Ground2 = new ground(400, 310, 280, 10);
  Ground3 = new ground(750, 220, 200, 10);

  Hexagon = new hexagon(100, 200, 50, 50, PI / 2);

  Rope = new rope(Hexagon.body, { x: 100, y: 200 });

  //Blocks for first platform

  //bottom row
  Block1 = new blockorange(310, 299, 30, 40);
  Block2 = new blockorange(340, 299, 30, 40);
  Block3 = new blockorange(370, 299, 30, 40);
  Block4 = new blockorange(400, 299, 30, 40);
  Block5 = new blockorange(430, 299, 30, 40);
  Block6 = new blockorange(460, 299, 30, 40);
  Block7 = new blockorange(490, 299, 30, 40);
  

  //Middle row
  Block8 = new blockmaroon(340, 269, 30, 40);
  Block9 = new blockmaroon(370, 269, 30, 40);
  Block10 = new blockmaroon(400, 269, 30, 40);
  Block11 = new blockmaroon(430, 269, 30, 40);
  Block12 = new blockmaroon(460, 269, 30, 40);

  //Top row
  Block13 = new blockblue(370, 219, 30, 40);
  Block14 = new blockblue(400, 219, 30, 40);
  Block15 = new blockblue(430, 219, 30, 40);

  //Top Triangle
  triange1 = new blocktriangle(400, 155, 40, 40, PI / 2);

  
  //Blocks fo second platform

  //Bottem row
  Block16 = new blockmaroon(690, 200, 30, 40);
  Block17 = new blockmaroon(720, 200, 30, 40);
  Block18 = new blockmaroon(750, 200, 30, 40);
  Block19 = new blockmaroon(780, 200, 30, 40);
  Block20 = new blockmaroon(810, 200, 30, 40);

  //Middle row
  Block21 = new blockorange(720, 160, 30, 40);
  Block22 = new blockorange(750, 160, 30, 40);
  Block23 = new blockorange(780, 160, 30, 40);

  //Top triangle
  triange2 = new blocktriangle(750, 110, 40, 40, PI / 2);
}

function draw() {
  background(0);
  
  textSize(25);
  fill("#038DC8")
  text("Drag the hexagonal stone and release it, to lanch it towards the block",90,20);
  text("Press space to have another chance", 270, 50);

  Engine.update(engine);
  
  //Platforms
  Ground.display();
  Ground2.display();
  Ground3.display();
  
  //Hexagon and Rope
  Hexagon.display();
  Rope.display();

  //Blocks of first platform
  Block1.display();
  Block2.display();
  Block3.display();
  Block4.display();
  Block5.display();
  Block6.display();
  Block7.display();
  

  Block8.display();
  Block9.display();
  Block10.display();
  Block11.display();
  Block12.display();

  Block13.display();
  Block14.display();
  Block15.display();

  //Blocks of second platform
  Block16.display();
  Block17.display();
  Block18.display();
  Block19.display();
  Block20.display();

  Block21.display();
  Block22.display();
  Block23.display();

  triange1.display();
  triange2.display();
}


function mouseDragged() {
  Matter.Body.setPosition(Hexagon.body, { x: mouseX, y: mouseY });
}


function mouseReleased() {
  Rope.fly();
}


function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(Hexagon.body, { x: 100, y: 200 });
    Rope.attacher(Hexagon.body)
  }
}
