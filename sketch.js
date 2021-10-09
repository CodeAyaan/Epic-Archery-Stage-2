const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerbase,playerarcher,playerarrow;
 
var arrows = []
var arrow;
var computerbase,computerplayer, computerarcher,computerarrow;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

   
  computerbase = new ComputerBase(200,500,200,200);
playerbase = new PlayerBase(1200,500,200,200);
player = new Player(1200,220,200,400);
computerplayer = new ComputerPlayer(100,200,200,400);
playerarcher = new PlayerArcher(200,200,220,220);
 playerarrow = new PlayerArrow(500,200,200,100);
 computerarcher = new ComputerArcher(200,200,220,220);
 computerarrow = new ComputerArrow(500,200,200,100);
  //Create Player Archer Object

   
   
  //Create an arrow Object
  
  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  computerbase.display();
playerbase.display();
player.display();
computerplayer.display();
playerarcher.display();
playerarrow.display();  
computerarcher.display();

  //Display arrow();
  
  //if Space (32) key is pressed call shoot function of playerArrow
   
    //Call shoot() function and pass angle of playerArcher
     
}
 

