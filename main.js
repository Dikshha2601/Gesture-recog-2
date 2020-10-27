function preload() { }

function setup() {
    video = createCapture(VIDEO);
    video.position(10, 180);
    video.size(550, 500);

    canvas = createCanvas(450, 450);
    canvas.position(570, 150);

    posenet = ml5.poseNet(video, function () {
        console.log("model loaded.");
    });

    posenet.on('pose', function (results) {
        if (results.length > 0) {
           console.log(results); 
        }
        
    });
}

function draw() {
    background("#3E8C47");
}
