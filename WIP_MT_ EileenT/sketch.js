//WIP_MT_EileenT
// this is my Mid Term Project*
let centerR = 200
let centerD = 200
let sizeH = 50
let time = "M"

function setup() {
  createCanvas(600, 600);
}
function draw(){
 if (time == "M"){
  MorningScene();

 }
else if(time == "A"){
  AfternoonScene();

}
else if(time == "N"){
  NightScene();

}

}


function MorningScene() {
   
  background("lightblue");
 strokeWeight(10);
  fill(196, 164, 132);
  square(150,250,200);
  fill("coral");  
  triangle(150,250,250,150,350,250);
 strokeWeight(5);


  // adding two windows to the house
  fill("white");
  square(175,275,50);
  fill("white"); 
  square(270,275,50);
  fill("red"); 
  rect(223,350,50,100);
  stroke("tan");
  strokeWeight(5); 
  cloud(75,90,90,75);
  cloud(195,90,130,75);
  fill("lightyellow");
  sun(500,10,150);
  Kite();
}
  //the kite 
  function Kite(){
    fill ("blue");
  let topx = centerR - sizeH;
  let topy = centerD;
  let rightx = centerR;
  let righty = centerD - sizeH; 
  let bottomx = centerR + sizeH;
  let bottomy = centerD
  let leftx = centerR;
  let lefty = centerD + sizeH
 
 
    centerD = mouseY
    quad(topx, topy,
       rightx,righty,
       bottomx, bottomy,
       leftx, lefty);
  centerR = centerR + 1;

  if(centerR > sizeH + width ){
    centerR = 0
  }
  
  stroke("tan");
  strokeWeight(5);

  //giving the kite it cross lines* 

  line(topx,topy,bottomx,bottomy);
  line(leftx,lefty,rightx,righty);

}
function mousePressed(){
  centerR = 0}

function keyPressed(){
  if(key == "m"){
    time = "M"
    
  }
  else if (key == "a"){
    time = "A"
  } 
  else if(key == "n"){
    time = "N"}

} 


function sun(sunx,suny,sunw){
  push()
  fill("yellow");
stroke("goldenrod"); 
  circle(sunx,suny,sunw);
  pop()
}

function cloud(skyX,skyY,skyW,skyH){
  push();
  noStroke()
  fill("white");
  ellipse(skyX,skyY,skyW,skyH);
  ellipse(skyX + skyW /2,skyY + skyH /3.5,skyW /2,skyH /2);
  pop()
}

function AfternoonScene(){

 
  background("lightgray");
 strokeWeight(10);
  fill(196, 164, 132);
  square(150,250,200);
  fill("coral");  
  triangle(150,250,250,150,350,250);
  strokeWeight(5);
  
  acloud(75,90,90,75);
  
  acloud(195,90,130,75);
  fill("orange");
  sun(500,10,150);
  Kite();
}
  function acloud(skyX,skyY,skyW,skyH){
  push();
  noStroke()
  fill("gray");
  ellipse(skyX,skyY,skyW,skyH);
  ellipse(skyX + skyW /2,skyY + skyH /3.5,skyW /2,skyH /2);
  pop()

  function sun(sunx,suny,sunw){
  push()
  fill("orange");
stroke("goldenrod"); 
  circle(sunx,suny,sunw);
  pop()
}


  // adding two windows to the house
  fill("pink");
  square(175,275,50);
  fill("pink"); 
  square(270,275,50);
  fill("red"); 
  rect(223,350,50,100);
  stroke("brown");
  strokeWeight(5); 
  fill ("gray");
  cloud(75,90,90,75);
  cloud(195,90,130,75);
  fill("orange");
  sun(500,10,150);
  Kite(); 
}
function NightScene(){
 
  background("gray");
 strokeWeight(10);
  fill("blue");
  square(150,250,200);
  fill("black");  
  triangle(150,250,250,150,350,250);
  strokeWeight(5); 
  fill("lightgray")
  cloud(75,90,90,75);
  fill("lightgray")
  cloud(195,90,130,75);
  fill("gray");
  sun(500,10,150);
  Kite(); 
}
{
  // adding two windows to the house
  fill("gray");
  square(175,275,50);
  fill("gray"); 
  square(270,275,50);
  fill("red"); 
  rect(223,350,50,100);
  stroke("tan");
  strokeWeight(5); 
  fill("gray")
  cloud(75,90,90,75);
  cloud(195,90,130,75);
   fill("gray");
  sun(500,10,150);
  Kite(); 
}
