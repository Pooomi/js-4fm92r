const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath ();
ctx.lineWidth = 5;
ctx.strokeStyle = "black";
ctx.fillStyle = "white";
ctx.strokeRect (0,0, 500, 400);
ctx.stroke ();
ctx.fill();


// Definition Schläger Links
function SchlägerLinks() {
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.fillRect(20, 150, 10, 100);
}

// Definition Schläger Rechts
function SchlägerRechts() {
  ctx.beginPath();
  ctx.fillStyle = "blue";
  ctx.fillRect(470, 150, 10, 100);
}

// Definition Ball
function Ball() {
  ctx.fillStyle = "green";
  ctx.arc (250, 200, 10, 0, 2 * Math.PI)
  ctx.fill();
}

//Punktestand
function Punktestand() {
  i = 0
  ii = 0
  ctx.font = '20px sans-serif';
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.fillText(i + ":" + ii, 250, 200);
}

// Hier startet das eigentliche Programm
SchlägerLinks();
SchlägerRechts ();
Ball ();
Punktestand ();