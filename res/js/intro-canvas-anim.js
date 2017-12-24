$(document).ready(function () {
	var canvas = document.getElementById('intro-canvas');
	var ctx = canvas.getContext('2d');

	var gun = ctx.fillRect(115, 135, 100, 20);
	var head = ctx.fillRect(40, 120, 75, 50);
	var body = ctx.fillRect(10, 170, 150, 75);

	var target = ctx.fillRect(490, 30, 90, 250);

	ctx.moveTo(215, 145);
	ctx.lineWidth = '3';
	ctx.strokeStyle = 'red';
		for(var i = 215; i <= 490; i+=1){
			setTimeout(function () {
				ctx.lineTo(i, 141);
				ctx.stroke();
			}, 10000)
		}
});