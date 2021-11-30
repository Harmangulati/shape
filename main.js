function preload(){

}
function setup(){
    canvas=createCanvas(680,400);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    circle(30, 30, 20);
    ellipse(56, 46, 55, 55);
    rect(30, 20, 55, 55);
}
function take_snapshot(){
   save('student_name.png'); 
}
function draw(){

}