//Warmup_week7 
//Eileen
let sceneOne = 0
let sketchScene2 = 1
let numberScene = 2
function setup() {
  createCanvas ("400, 400");
 }

function draw() {
  background("0");
  
    textAlign (CENTER);



 if (sceneOne == 0){
 
  sketchScene();
 
}
 else if(sceneOne === 1);{
   sketchScene2();

  }
 
}

function keyPressed(){
  sceneOne++;
 if(sceneOne >= numberScene){
  sceneOne = 0;
}
 else if(sketchScene2){
 numberScene = 2;
 
 }


}

function sketchScene(){

  textSize("75");
  text("Beautiful Day", width/2, height/2);


}