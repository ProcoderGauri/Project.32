
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var ground1,ball;
var mango1,mango2,mango3,mango4,mango5,mango6;
var treeimg,boyimg;
var tree1;
var string;
var backgroundImg;


function preload()
{
	boyimg=loadImage("Project 28 pics/boy.png");
	treeimg=loadImage("Project 28 pics/tree.png");
	getTime();
	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	
	ground1=new Ground(width/2,600,width,20);
	ball=new Stone (235,420,30); 
    string=new Slingshot (ball.body,{x:235,y:420});
    

	

//create 10 mangoes
//mango up to 6


    mango1= new Mango(1100,180,50);
	mango2= new Mango(1160,200,50);
	mango3=new Mango(1010,340,50);
	mango4= new Mango(1000,270,50);
	mango5= new Mango(1120,300,50);
	mango6=new Mango(1080,230,50);
    mango7= new Mango(1199,280,50);
	
	
	
	





//boy


//slingShot



	Engine.run(engine);
  
}


function draw() {
	if(backgroundImg){
		background(backgroundImg);
		}
  rectMode(CENTER);
  
  textSize(25);
  text("Press space to get a second cahnce to play!!",50 ,50);
  image(boyimg ,200,340,200,300);
  image(treeimg,900,85,395,590);
``

ground1.display();
ball.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
string.display();

  drawSprites();


 detectcollision(ball,mango1);
 detectcollision(ball,mango2);
 detectcollision(ball,mango3);
 detectcollision(ball,mango4);
 detectcollision(ball,mango5);
 detectcollision(ball,mango6);





  //collision
 function detectcollision(lball,lmango){
mangoBodyPosition=lmango.body.position
ballBodyPosition=lball.body.position
var distance=dist(ballBodyPosition.x, ballBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	  
		  if(distance<=lmango.r+lball.r)
		{
		 
			Matter.Body.setStatic(lmango.body,false);
		}
 }
}

//mouse dragged
function mouseDragged(){
	Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY}) 
}
//released
function mouseReleased(){
	string.fly();
}
function keyPressed() {
		if (keyCode=== 32) {
	//	Matter.Body.setPosition(ball.body, {x:235, y:420}) 
		  string.attach(ball.body);
		 
		}
	  }
	  async function getTime(){
		var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
		var responseJson= await response.json();
		console.log(responseJson);
		var time= (responseJson.datetime);
		var hour=time.slice(11,13);
		if(hour>=5 && hour<18){
		bg= "Project 28 pics/bg.png"
		}
		else{
			bg= "Project 28 pics/bg2.jpg"
		}
		backgroundImg= loadImage(bg);
		}
	
	 
	  
	
	  
