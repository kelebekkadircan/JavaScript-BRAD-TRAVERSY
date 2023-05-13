const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Draw Rectangle
ctx.fillStyle='green';
ctx.fillRect(10,10,150,100);

// Draw circle
ctx.fillStyle ='red'
ctx.arc(300, 300, 100, 0,Math.PI * 2 );
ctx.fill();

// Draw lines

ctx.beginPath();
ctx.strokeStyle = 'orange';
ctx.lineWidth = 3;
ctx.moveTo(10, 10);
ctx.lineTo(300, 300);
ctx.stroke();

// Draw Text

ctx.font = '30px Arial';
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'blue';
ctx.fillText('Hello World',300,100,300);
ctx.strokeText('Hello World',300,500,300);



