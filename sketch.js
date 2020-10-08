
let xCoord = 50; 
let dCoord = 5

function setup(){
    createCanvas(800,600);
    background(0);
}

function draw(){
    stroke(0);
    circle(xCoord,300,dCoord);
   xCoord = xCoord  + 50
   dCoord = dCoord + 5
   

}