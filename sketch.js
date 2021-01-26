
let leftBuffer;
let rightBuffer;
let hr,min,sec;
let scAngle,minAngle,hrAngle;

function preload()
{
  bg=loadImage("escape room.jpg");
}

function setup() {
    // 800 x 400 (double width to make room for each "sub-canvas")
    createCanvas(windowWidth-200, windowHeight-200);

    // Create both of your off-screen graphics buffers
    leftBuffer = createGraphics(width/2,height);
    rightBuffer = createGraphics(width/2,height);
}

function draw() {
    drawLeftBuffer();
    drawRightBuffer();
  
    image(leftBuffer, 0, 0);
    image(rightBuffer, width/2, 0);
    angleMode(DEGREES);
    translate(3*(width/4),height/2+20);
    rotate(-90);
    

    hr=hour();
    min=minute();
    sec=second();

    
    scAngle=map(sec,0,60,0,360);
    minAngle=map(min,0,60,0,360);
    hrAngle=map(hr%12,0,12,0,360);
    
    
    push();
    rotate(scAngle);
    stroke("#F93822FF");
    strokeWeight(10);
    line(0,0,100,0);
    pop();

    push();
    rotate(hrAngle);
    stroke("#FDD20EFF");
    strokeWeight(10);
    line(0,0,60,0);
    pop();

    push();
    rotate(minAngle);
    stroke("#343148FF");
    strokeWeight(10);
    line(0,0,80,0);
    pop();

    strokeWeight(10);
    noFill();
    stroke("#FDD20EFF");
    arc(0,0, 240,240, 0, hrAngle);
    stroke("#343148FF");
    arc(0,0, 260,260, 0, minAngle);
    stroke("#F93822FF");
    arc(0,0, 280,280, 0, scAngle);

}

function drawLeftBuffer() {
    leftBuffer.background(bg);
    leftBuffer.fill(255, 255, 255);
    leftBuffer.textSize(20);
    leftBuffer.textAlign(CENTER);
    leftBuffer.text("You can escape only when the clock strikes 12", width/4, 50);
}

function drawRightBuffer() {
    rightBuffer.background("beige");
    rightBuffer.fill(0, 0, 0);
    rightBuffer.textSize(32);
    rightBuffer.textAlign(CENTER);
    rightBuffer.text("Clock",width/4, 50);
}