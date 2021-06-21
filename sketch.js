const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boy_img, boy;

var snow =[];

function preload(){
  background_image = loadImage("snow2.jpg");
  boy_img = loadImage("snowboy.png"); 
}

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  boy = createSprite(1050, 500, 50, 50);
  boy.addImage(boy_img); 
  boy.scale=0.05;

  Engine.update(engine);

}

function draw() {
  background(background_image);  

  Engine.update(engine);


  if(frameCount%60===0){
    snow.push(new Snow(random(50,1150),10,50));
  }

  

if(keyDown("LEFT_ARROW")){
  boy.x = boy.x -5;
}
if(keyDown("RIGHT_ARROW")){
  boy.x = boy.x + 5;
}

for (var m = 0; m < snow.length; m++) {
  snow[m].display();
}

  drawSprites();
}

