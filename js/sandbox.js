var canvas,
    ctx;
    // ballX = 75;
    // ballSpeedX = 5;

window.onload = function() {
    canvas = document.getElementById('c');
    ctx = canvas.getContext('2d');

    // variables
    var frames = 30;
    setInterval(update, 1000/frames);
}

function draw() {
    // Draw rectangle
    // ctx.fillStyle = 'black';
    // ctx.fillRect(0, 0, canvas.width, canvas.height);

    // draw circle
    // ctx.fillStyle = 'white';
    // ctx.beginPath();
    // ctx.arc(ballX, 100, 10, 0, Math.PI*2, true);
    // ctx.fill();
}

function update() {
    // ballX += ballSpeedX;

    // check if ballX is > canvas.width


    draw();
}
