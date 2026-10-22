//Eileen T
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
  cloud(75,90,90,75,"lightskyblue");
  cloud(195,90,130,75,"skyblue");
  fill("lightyellow");
  sun(500,10,150);
  Kite("white","purple");
}
  //the kite 
  function Kite(colora, colorb){
    push()
    fill (colora);
    stroke(colorb);
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

  
  strokeWeight(5);

  //giving the kite it cross lines* 

  line(topx,topy,bottomx,bottomy);
  line(leftx,lefty,rightx,righty);
  pop()
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

function cloud(skyX,skyY,skyW,skyH, color){
  push();
  noStroke()
  fill(color);
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
  fill("pink");
  square(175,275,50);
  fill("pink"); 
  square(270,275,50);
  fill("red"); 
  rect(223,350,50,100);
  stroke("brown");
  strokeWeight(5); 
  fill ("gray");
  cloud(75,90,90,75,"coral");
  cloud(195,90,130,75, "coral");
  cloud(290,90, 230,75, "coral");
  fill("orange");
  sun(500,10,150);
  Kite("sienna","tomato");
}
    

  function sun(sunx,suny,sunw){
  push()
  fill("orange");
stroke("goldenrod"); 
  circle(sunx,suny,sunw);
  pop()
}
  function moon(moonx,moony,moonw){
    push()
    fill("slateblue");
    noStroke();
    circle(moonx,moony,moonw);
    pop()
    
  }

 

function NightScene(){
 
  background("gray");
 strokeWeight(10);
  fill("blue");
  square(150,250,200);
  fill("black");  
  triangle(150,250,250,150,350,250);
  strokeWeight(5); 
  
  


  // adding two windows to the house
  fill("gray");
  square(175,275,50);

  square(270,275,50);
  fill("red"); 
  rect(223,350,50,100);
  stroke("tan");
  strokeWeight(5); 
  fill("gray")
  cloud(75,90,90,75,"silver");
  cloud(195,90,130,75,"silver");
  cloud(290,90, 230,75, "silver");
   fill("gray");
  moon(500,10,150);
  Kite("lightyellow","salmon"); 
}

