const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var divisions=[];
var plinko=[];
var particle=[];
var divisionHeight=300
var score=0;


function setup() {
  createCanvas(800,480);
 
  engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,height,800,30);
   
    for(var k=0;k<width;k=k+80){
     divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))

    }
    
    for(var j=75;j<width;j=j+50){
     plinko.push(new Plinko(j,50))
     }
     
     for(var j=50;j<width;j=j+50){
      plinko.push(new Plinko(j,90))
      }

      for(var j=75;j<width;j=j+50){
        plinko.push(new Plinko(j,150))
        }
        
      
}

function draw() {
  background(0,0,0); 
  Engine.update(engine) ;
  ground.display();
  text("score ",+score,400,100)
 for(k=0;k<divisions.length;k++){
   divisions[k].display();
}
 
for(j=0;j<plinko.length;j++){
  plinko[j].display();
}
if(frameCount%60===0){
   particle.push(new Particle(random(100,700),10,10));
    score++;
   } 
  for (var j = 0; j < particle.length; j++) { 
  particle[j].display();
 }


}
