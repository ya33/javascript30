
const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let startX = 0;
let startY = 0;
let color = 1;
let width = 1;
let direction = true;
// ctx.fillStyle = 'green';
// ctx.fillRect(10, 10, 100, 100);

const draw = (event) => {
  if (!isDrawing) return;
  // console.log(event);
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.strokeStyle = `hsl(${color}, 100%, 50%)`;
  ctx.lineWidth = width;
  ctx.stroke();
  [startX, startY] = [event.offsetX, event.offsetY];
  color++;
  if (color >= 360) {
    color = 0;
  }
  if (direction){
    width++;
  } else {
    width--;
  }
  if (width >150 || width < 1) {
    direction = !direction;
  }
};

// console.log(ctx);
canvas.addEventListener('mousedown', (event) => {
  isDrawing = true;
  [startX, startY] = [event.offsetX, event.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
canvas.addEventListener('mousemove', draw);
