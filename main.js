function preload(){

}

function setup() {
    canvas = createCanvas(900,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    image(video, 110 , 250 , 900 , 480);

    circle(70, 70, 100);
    circle(70, 170, 100);
    circle(70, 270, 100);
    circle(70, 370, 100);
    square(130,30,60);
    square(200,30,60);
    square(270,30,60);
    square(340,30,60);
    square(410,30,60);
    square(480,30,60);
    square(550,30,60);
    square(620,30,60);
    circle(745,70,100);
    circle(745,170,100);
    circle(745,270,100);
    circle(745,370,100);
    square(130,350,60);
    square(200,350,60);
    square(270,350,60);
    square(340,350,60);
    square(410,350,60);
    square(480,350,60);
    square(550,350,60);
    square(620,350,60);
}

function take_snapshot(){
    save('aditi.png');
}




