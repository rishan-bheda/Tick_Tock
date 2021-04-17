var hr, mn, sc, scAngle, mnAngle, hrAngle, plswork;

function setup() {

    createCanvas(800,400);

}

function draw() {

    background(0); 

    hr = hour();
    mn = minute();
    sc = second();

    angleMode(DEGREES);

    plswork = hr%12;

    scAngle = map(sc, 0, 60, 0, 360);
    mnAngle = map(mn, 0, 60, 0, 360);
    hrAngle = map(plswork, 0, 12, 0, 360);

    console.log(mouseX);

    translate(400,200);

    //making arks

    push()
    noFill();
    stroke(255,0,0);
    strokeWeight(7);  
    arc(0,0,300,300,270,scAngle-90, OPEN);
    pop()

    push()
    noFill();
    stroke(0,255,0);
    strokeWeight(7);  
    arc(0,0,325,325,270,mnAngle-90, OPEN);
    pop()

    push()
    noFill();
    stroke(0,0,255);
    strokeWeight(7);  
    arc(0,0,350,350,270,hrAngle-90, OPEN);
    pop()

    //making lines

    push()
    rotate(scAngle - 90);
    stroke(255,0,0);
    strokeWeight(7);
    noFill()
    line(0,0,125,0);
    pop();

    push()
    rotate(mnAngle - 90);
    stroke(0,255,0);
    strokeWeight(7);
    line(0,0,90,0);
    pop();

    push()
    rotate(hrAngle - 90);
    stroke(0,0,255);
    strokeWeight(7);
    line(0,0,70,0);
    pop();
    
    drawSprites();

}