// Eileen Tarrats 
// My Moving Orange Kite*
let centerR = 200;
let centerD = 200;
let halfH = 100;
function setup() {
  createCanvas(400, 400);
  fill("orange"); 
}
// giving the kite, its frame * 
function draw() {
  background("lightblue");
  let topx = centerR - halfH;
  let topy = centerD;
  let rightx = centerR;
  let righty = centerD - halfH; 
  let bottomx = centerR + halfH;
  let bottomy = centerD
  let leftx = centerR;
  let lefty = centerD + halfH
  cloud(75,90,90,75);
  cloud(195,90,130,75);
  sun(400,10,150);
  centerD = mouseY
  quad(topx, topy,
       rightx,righty,
       bottomx, bottomy,
       leftx, lefty);
  centerR = centerR + 1;
  if(centerR > halfH + 400){
    centerR = 100
  }
  
  stroke("black");
  strokeWeight(5);

  //giving the kite it cross lines* 
  line(topx,topy,bottomx,bottomy);
  line(leftx,lefty,rightx,righty);

  //allow the use of the mousePressed as well as the keyPressed to interact with the viewer.*
}
function mousePressed(){
  centerR = 200

}
function keyPressed(){
  
  if (key==" "){

    fill("purple");
  }
  else if(key=="r"){
   fill("red");
  }
  else if(key=="o"){
    fill("orange"); 
  }
  else{fill("white"); 

  }
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


