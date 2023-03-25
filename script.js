var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var particles = [];

for (var i = 0; i < 100; i++) {
	particles.push({
		x: Math.random() * canvas.width,
		y: Math.random() * canvas.height,
		radius: Math.random() * 3 + 1,
		color: "rgba(255, 255, 255, 0.5)",
		speedX: Math.random() * 3 - 1.5,
		speedY: Math.random() * 3 - 1.5
	});
}
function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	for (var i = 0; i < particles.length; i++) {
		ctx.beginPath();
		ctx.arc(particles[i].x, particles[i].y, particles[i].radius, 0, Math.PI * 2);
		ctx.fillStyle = particles[i].color;
		ctx.fill();
		particles[i].x += particles[i].speedX;
		particles[i].y += particles[i].speedY;
		if (particles[i].x < -50) particles[i].x = canvas.width + 50;
		if (particles[i].y < -50) particles[i].y = canvas.height + 50;
		if (particles[i].x > canvas.width + 50) particles[i].x = -50;
		if (particles[i].y > canvas.height + 50) particles[i].y = -50;
	}
}
setInterval(draw, 30);
