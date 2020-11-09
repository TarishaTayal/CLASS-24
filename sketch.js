const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box3;
var pig,log,bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(550,350,50,50);
    box2 = new Box(750,350,50,50);
    box3= new Box(550,300,50,50);
    ground = new Ground(600,390,1200,20)
    pig= new Pig(650,350);
    log=new Log (650,300,300,PI/2);
    bird=new Bird(150,200);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    ground.display();
    pig.display();
    log.display();
    bird.display();
}