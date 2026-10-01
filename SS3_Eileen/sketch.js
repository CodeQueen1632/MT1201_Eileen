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


centerD = mouseY
  quad(centerR - halfH, centerD,
       centerR,centerD - halfH,
       centerR + halfH, centerD,
       centerR, centerD + halfH);
 centerR = centerR + 1;



}
function mousePressed(){
  centerR = 200

}




