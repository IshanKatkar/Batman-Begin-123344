const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var thunder1,thunder2,thunder3,thunder4;
var thunderbolt;
var thunderFrame;

var drops = [];
var maxDrops=100;

function preload(){

  thunder1=loadImage("images/thunderbolt/1.png")
  thunder2=loadImage("images/thunderbolt/2.png")
  thunder3=loadImage("images/thunderbolt/3.png")
  thunder4=loadImage("images/thunderbolt/4.png")
   
}

function setup(){
    createCanvas(600,700);
    engine = Engine.create();
    world = engine.world;
    
    umbrella = new Umbrella(200,500);
    
    if(frameCount%150===0){

        for(var i=0;i<maxDrops;i++){

            drops.push(new Drop( random(0,600),random(0,600)) )
              
            
        }
    }


        
}

function draw(){

    background(0)

if(frameCount%80===0){
   
    thunderFrame=frameCount;
    thunderbolt=createSprite(random(10,370),random(10,40),10,10)
   var rand= Math.round(random(1,4))
   if(rand===1){
       thunderbolt.addImage(thunder1)
   }
   
   else  if(rand===2){
    thunderbolt.addImage(thunder2)
}
else  if(rand===3){
    thunderbolt.addImage(thunder3)
}
else {
    thunderbolt.addImage(thunder4)
}
thunderbolt.scale=random(0.3,0.6);
}

if(thunderFrame+10===frameCount&&thunderbolt){

    thunderbolt.destroy();
}
         
    umbrella.display();
    for(var i=0;i<maxDrops;i++){
        drops[i].display();
        drops[1].update();}
    
        drawSprites();
}   

