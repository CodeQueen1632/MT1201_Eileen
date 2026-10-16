//Warmup_week7 
//Eileen

function setup() {
  createCanvas("white");
}

function draw() {
  background("0");
 if (sceneOne == 1){
  sketchScene();
 }
 else if(sceneOne === 1){
  sketchScene()
 }

function keyPressed(){
  sceneOne++;
 if(sceneOne >= numberScene){
  sceneOne = 0;
}

}

function sceneOne(){
  text()
}