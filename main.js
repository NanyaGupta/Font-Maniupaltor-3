rightWristX=0;
leftWristX=0;
difference=0;


function setup()  {
    video = createCapture(VIDEO);
    video.size(525, 525);

    canvas = createCanvas(525,525);
    canvas.position(560,150);
}

function modelLoaded(){
   console.log('Posenet has Intializied Successfully!');
}

function draw() {
    background('#800000');
    fill('#FFC0CB');
    textSize(139 px);
}

function text(){
    text("Hello World!", 20,200)
}

function gotPoses(results) {
    if(results.length > 0){
       console.log(results);
       console.log("leftWristX = " + leftWristX + " rightWristX =  " + rightWristX);

     leftWristX= results[0].pose.leftWrist.x;
     rightWristX= results[0].pose.rightWrist.x;
     difference = floor(leftWristX - rightWristX);

     console.log("leftWrist = " + leftWristX + " rightWrist" + rightWristX + " difference" + difference);
    }
}