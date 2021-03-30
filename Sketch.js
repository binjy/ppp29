//
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var engine,world;
var slingShot
var ground;
var box,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,polygon,ground2,box17,box18,box19,box20,ground3,box21,chain;
var ground4

var score = 0


function preload(){
	
}

function setup() {
createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

//ground4 = new Ground(700,1600,5000,30)
ground = new Ground(700,400,300,30)
box = new Box(700,360,50,50)
box2 = new Box(650,360,50,50)
box3 = new Box(600,360,50,50)
box4 = new Box(750,360,50,50)
box5 = new Box(800,360,50,50)
box6 = new Box(700,310,50,50)
box7 = new Box(650,310,50,50)
ground2 = new Ground(1090,300,300,30)
box8 = new Box(750,310,50,50)
box9 = new Box(730,260,50,50)
box10 = new Box(675,260,50,50)
box11 = new Box(700,210,50,50)

box12 = new Box(1090,260,50,50)
box13 = new Box(1145,260,50,50)
box14 = new Box(1035,260,50,50)
box15 = new Box(980,260,50,50)
box16 = new Box(1199,260,50,50)
//polygon = new Polygon(100,310,50)
rock = Bodies.circle(100,300,20)
World.add(world,rock)
slingShot = new Ground(40,310,)
box17 = new Box(1090,209,50,50)
box18 = new Box(1035,209,50,50)
box19 = new Box(1145,209,50,50)
box20 = new Box(1090,159,50,50)
ground3 = new Box(200,650,10000,50)
//box21 = new Box = (50,310,10,10)
chain = new Chain(this.rock,{x:100,y:330})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 //ground4.display()
ground.display()
box.display()
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
ground2.display()
//rock.display()
ellipse(rock.position.x,rock.position.y,40,40)
box17.display()
box18.display()
 box19.display()
 box20.display()
 ground3.display()
 //box21.display()
 chain.display()

 box.score()
box2.score()
box3.score()
box4.score()
box5.score()
box6.score()
box7.score()
box8.score()
box9.score()
box10.score()
box11.score()
box12.score()
box13.score()
box14.score()
box15.score()
box16.score()
box17.score()
box18.score()
box19.score()
box20.score()
//box21.score()






text("Score:"+ score,750,40)


 
}

function keyPressed() {
	if (keyCode === 32) {
		chain.attach(this.rock)
		
	}
}

function mouseDragged(){
   Matter.Body.setPosition(this.rock,{x:mouseX,y:mouseY})

}

function mouseReleased(){
    chain.fly()
}




async function getBackgroundImg(){
    var response = await fetch('')
    var responseJSON = await response.json();
    //console.log(resonseJSON.datetime.slice(11,13));
    //2021-01-12T19:37:30.356759-07:00
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13)
    if (hour >=6&&hour <=18) {
        bg = "sprites/bg.png"
    }
    else{
        bg = "sprites/bg2.jpg"
    }
    backgroundImg = loadImage(bg)
}

