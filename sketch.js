const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var castle1,castle2,castle3,castle4,castle5;
var top1;


function setup() {
  createCanvas(1200,500);
  engine = Engine.create();
  world = engine.world;
  castle1 = new Castle(350,330,90,350) ;
  castle2 = new Castle(440,350,90,300) ;
  castle3 = new Castle(535,375,100,250) ;
  castle4 = new Castle(630,350,90,300) ;
  castle5 = new Castle(720,330,90,350) ;
  top1 = new Top(350,110,10,30);
  top2 = new Top(720,110,10,30);
  top3 = new Top(535,205,10,30);
}

function draw() {
  background(0); 
  Engine.update(engine);
  line(1200,330,10,30)
  castle1.display();
  castle2.display();
  castle3.display();
  castle4.display();
  castle5.display();
  top1.display();
  top2.display();
  top3.display();
}