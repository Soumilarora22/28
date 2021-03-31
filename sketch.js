
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stone1=new stone(200,340,40)
	rope1=new rope(stone1.body,{x:240,y:420})
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  detectcollision(stone1,mango1)

  treeObj.display();
  mango1.display();
stone1.display();
rope1.display();
  groundObject.display();
}
function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	rope1.fly()
}
function detectcollision(body1,body2){
	mangoBodyPosition=body2.body.position
	stoneBodyPosition=body1.body.position
	
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
   
		if(distance<body2.radius+body1.radius)
	  {
		
		  Matter.Body.setStatic(body2.body,false);
	  }
  
	}
