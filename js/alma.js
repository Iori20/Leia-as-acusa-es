const canvas = document.getElementById('alma');
const ctx = canvas.getContext('2d');

//define uma imagem
var img = new Image();
img.src = 'arma.jpg';
//Define o carregamento da imagem e a posição inicial
ctx.drawImage(img, 350, 500);


// Por a altura da linha
ctx.lineWidth = 10;
// Dentes
ctx.beginPath();
ctx.moveTo(50, 330);
ctx.lineTo(150, 330);
ctx.lineTo(200, 550);
ctx.fillStyle = "red";
ctx.closePath();
ctx.fill();
ctx.beginPath();
ctx.moveTo(50, 880);
ctx.lineTo(150, 880);
ctx.lineTo(200, 660);
ctx.fillStyle = "red";
ctx.closePath();
ctx.fill();
ctx.moveTo(300, 880);
ctx.lineTo(380, 800);
ctx.lineTo(480, 880);
ctx.fillStyle = "red";
ctx.closePath();
ctx.fill();
ctx.moveTo(160, 880);
ctx.lineTo(260, 800);
ctx.lineTo(340, 880);
ctx.fillStyle = "red";
ctx.closePath();
ctx.fill();
ctx.moveTo(440, 880);
ctx.lineTo(520, 800);
ctx.lineTo(620, 880);
ctx.fillStyle = "red";
ctx.closePath();
ctx.fill();
ctx.moveTo(580, 880);
ctx.lineTo(640, 800);
ctx.lineTo(760, 880);
ctx.fillStyle = "red";
ctx.closePath();
ctx.fill();
ctx.moveTo(720, 880);
ctx.lineTo(760, 800);
ctx.lineTo(900, 880);
ctx.fillStyle = "red";
ctx.closePath();
ctx.fill();
ctx.moveTo(860, 880);
ctx.lineTo(900, 800);
ctx.lineTo(1040, 880);
ctx.fillStyle = "red";
ctx.closePath();
ctx.fill();
ctx.moveTo(1000, 880);
ctx.lineTo(1040, 800);
ctx.lineTo(1180, 880);
ctx.fillStyle = "red";
ctx.closePath();
ctx.fill();
ctx.moveTo(1140, 880);
ctx.lineTo(1180, 800);
ctx.lineTo(1320, 880);
ctx.fillStyle = "red";
ctx.closePath();
ctx.fill();
ctx.moveTo(1280, 880);
ctx.lineTo(1320, 800);
ctx.lineTo(1460, 880);
ctx.fillStyle = "red";
ctx.closePath();
ctx.fill();

ctx.moveTo(300, 330);
ctx.lineTo(380, 550);
ctx.lineTo(480, 330);
ctx.fillStyle = "red";
ctx.closePath();
ctx.fill();
ctx.moveTo(160, 330);
ctx.lineTo(260, 550);
ctx.lineTo(340, 330);
ctx.fillStyle = "red";
ctx.closePath();
ctx.fill();
ctx.moveTo(440, 330);
ctx.lineTo(520, 550);
ctx.lineTo(620, 330);
ctx.fillStyle = "red";
ctx.closePath();
ctx.fill();
ctx.moveTo(580, 330);
ctx.lineTo(640, 550);
ctx.lineTo(760, 330);
ctx.fillStyle = 'red';
ctx.closePath();
ctx.fill();
ctx.moveTo(720, 330);
ctx.lineTo(760, 550);
ctx.lineTo(900, 330);
ctx.fillStyle = "red";
ctx.closePath();
ctx.fill();
ctx.moveTo(860, 330);
ctx.lineTo(900, 550);
ctx.lineTo(1040, 330);
ctx.fillStyle = "red";
ctx.closePath();
ctx.fill();
ctx.moveTo(1000, 330);
ctx.lineTo(1040, 550);
ctx.lineTo(1180, 330);
ctx.fillStyle = "red";
ctx.closePath();
ctx.fill();
ctx.moveTo(1140, 330);
ctx.lineTo(1180, 550);
ctx.lineTo(1320, 350);
ctx.fillStyle = "red";
ctx.closePath();
ctx.fill();
ctx.moveTo(1280, 330);
ctx.lineTo(1320, 550);
ctx.lineTo(1460, 330);
ctx.fillStyle = "red";
ctx.closePath();
ctx.fill();

// Texto vermelho e assustador
ctx.font = "100px Arial";
ctx.fillText("魂の貪欲者", 780, 90);

//Olhos 
const circle = new Path2D();
circle.arc(650, 210, 106, 0, 2 * Math.PI);
ctx.fillStyle= 'red';
ctx.fill(circle);

//olho extras usando gradiente
var gradient = ctx.createRadialGradient(110,90,30, 100,100,70);
gradient.addColorStop(0, 'red');
gradient.addColorStop(1, 'black');

ctx.fillStyle = gradient;
ctx.fillRect(20, 20, 160, 160);

//ctx.quadraticCurveTo(cpx, cpy, x, y);
ctx.beginPath();
ctx.moveTo(20, 110);
ctx.quadraticCurveTo(230, 150, 250, 20);
ctx.stroke();
