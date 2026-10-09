// Eileen Tarrats 
// My Moving Orange Kite*
let centerR = 200;
let centerD = 200;
let halfH = 100;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("lightblue");

  cloud(75,90,90,75);
  cloud(195,90,130,75);
  sun(400,10,150);
  fill("pink");
  centerD = mouseY
  quad(centerR - halfH, centerD,
       centerR,centerD - halfH,
       centerR + halfH, centerD,
       centerR, centerD + halfH);
  centerR = centerR + 1;



}
function mousePressed(){
  centerR = 200
  halfH -= random (20,50);
  if (halfH < 20){ halfH = 100;

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