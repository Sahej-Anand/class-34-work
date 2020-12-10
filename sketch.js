const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var g,ball,rope,building1;
var engine, world;
function preload(){

}
function setup(){
    createCanvas(500,500);
    engine = Engine.create();
    world = engine.world;

    g= new Ground(250, 10,500, 20);
}
function draw(){
    background(0);
    Engine.update(engine);
    g.display();
}