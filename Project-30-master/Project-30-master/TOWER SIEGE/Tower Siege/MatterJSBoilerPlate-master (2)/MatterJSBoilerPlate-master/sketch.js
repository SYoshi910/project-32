
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var rgb, color;
var score = 0;
function preload()
{
	getTime();
}

function setup() {
	createCanvas(1200, 800);
	engine = Engine.create();
	world = engine.world
	ground = new Platform(600,400);
	 
	
	box = new Target(520,345);
	box2 = new Target(600,345);
	box3 = new Target(680,345);
	box4 = new Target(560,265);
	box5 = new Target(640,265);
	box6 = new Target(600,185);

	ground2 = new Platform(950,500);

	
	box7 = new Target(870,445);
	box8 = new Target(950,445);
	box9 = new Target(1030,445);
	box10 = new Target(910,365);
	box11 = new Target(990,365);
	box12= new Target(950,285);

	

	ball = new Poly(50,160,30);
	launcher = new Launch(ball.body,{x:150,y:70});
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(rgb,rgb,rgb);
  fill("white");
  textSize(20);
  text("Score: "+score,width-150,50);
  ground2.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  ground.display();
  box.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  
  box.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  ball.display();
  launcher.display();
  drawSprites();
 // box.debug = true;
}

function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	launcher.fly();
}
function keyPressed(){
	if(keyCode == 32){
		launcher.attach(ball.body);
	}
}

async function getTime(){
	var api = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
	var apiJSON = await api.json();
	var dateTime = apiJSON.datetime;
	var hour =  dateTime.slice(11,13);
	console.log(hour);
	if(hour >= 06 && hour <= 18){
		rgb = 210;
		
	}
	else{
		rgb = 45;
	
	}
}

