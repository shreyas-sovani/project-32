

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var score=0;
var backGroundImage;
function preload()
{
	backGD();

}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
pol=new Polygon(200,150,50,50)

ground1=new Ground(600,450,300,20);
ground2=new Ground(600,690,1200,20);

sling=new Slingshot(pol.body,{x:100,y:200});



//layer 1


box1=new Box(490,440,30,40);
box2=new Box(520,440,30,40);
box3=new Box(550,440,30,40);
box4=new Box(580,440,30,40);
box5=new Box(610,440,30,40);
box6=new Box(640,440,30,40);
box7=new Box(670,440,30,40);
box8=new Box(700,440,30,40);


//layer 2
//push();
//fill(255,192,203);
box9=new Box(510,370,30,40);
box10=new Box(540,370,30,40);
box11=new Box(570,370,30,40);
box12=new Box(600,370,30,40);
box13=new Box(630,370,30,40);
box14=new Box(660,370,30,40);
box15=new Box(690,370,30,40);
//pop();
//layer 3

box16=new Box(520,340,30,40);
box17=new Box(550,340,30,40);
box18=new Box(580,340,30,40);
box19=new Box(610,340,30,40);
box20=new Box(640,340,30,40);
box21=new Box(670,340,30,40);

//layer 4


box22=new Box(530,290,30,40);
box23=new Box(560,290,30,40);
box24=new Box(590,290,30,40);
box25=new Box(620,290,30,40);
box26=new Box(650,290,30,40);

//layer 5

box27=new Box(540,250,30,40);
box28=new Box(570,250,30,40);
box29=new Box(600,250,30,40);
box30=new Box(630,250,30,40);

//layer 6

box31=new Box(550,200,30,40);
box32=new Box(580,200,30,40);
box33=new Box(610,200,30,40);

//layer 7

box34=new Box(565,150,30,40);
box35=new Box(595,150,30,40);

//layer 8

box36=new Box(575,110,30,40);




	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
 if(backGroundImage){
  background(backGroundImage);
 }

  
  
pol.display();
ground1.display();
ground2.display();
sling.display();

push();
fill(135,206,234)

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
pop();


push();
fill(255,192,203)
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
pop();

push();
fill(63,224,208);
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
pop();

push();
fill("white");
box22.display();
box23.display();
box24.display();
box25.display();
box26.display();
pop();

push();
fill("lightGreen")
box27.display();
box28.display();
box29.display();
box30.display();
pop();

push();
fill("red");
box31.display();
box32.display();
box33.display();
pop();

push();
fill("purple")
box34.display();
box35.display();
pop();

push();
fill("orange")
box36.display();
pop();



box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();
box8.score();
box9.score();
box10.score();
box11.score();
box12.score();
box13.score();
box14.score();
box15.score();
box16.score();
box17.score();
box18.score();
box19.score();
box20.score();
box21.score();
box22.score();
box23.score();
box24.score();
box25.score();
box26.score();
box27.score();
box28.score();
box29.score();
box30.score();
box31.score();
box32.score();
box33.score();
box34.score();
box35.score();
box36.score();


 drawSprites();
 textSize(20);
 
 //text("Press 'SPACE' to get a second chance",400,50);
text("Score : "+score,400,50);
}


function mouseDragged(){

Matter.Body.setPosition(pol.body,{x:mouseX,y:mouseY});

}


function mouseReleased(){

sling.fly();


}


function keyPressed(){

if(keyCode===32){

sling.attach(pol.body);

}


}

async function backGD(){

var come=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
var comeJSON= await come.json();

var datetime=comeJSON.datetime;
var hour=datetime.slice(11,13);

console.log(hour);

if(hour>=6 && hour<=18){

	backGround="bg.png"


}
else{
	backGround="bg2.jpg"
}

backGroundImage=loadImage(backGround);

}









