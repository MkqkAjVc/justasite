$(document).ready(function () {
	var WIDTH = 1000,
		HEIGHT = 400;
	var app = new PIXI.Application({width: WIDTH, height: HEIGHT});
	app.renderer.backgroundColor = 0x55ff55;
	$("#game-wrapper").append(app.view);

	var player = new PIXI.Sprite(PIXI.Texture.fromImage('/res/js/Testgame/Idle.png'));
	player.width = 100;
	player.height = 130;
	// player.position = {x: app.renderer.x / 2, y: app.renderer.y}
	player.x = WIDTH/2-player.width;
	player.y = HEIGHT-player.height;

	var borderLeft = new PIXI.Graphics(0, 0, 20);
	borderLeft.drawRect(-1, 0, 100, HEIGHT);
	borderLeft.beginFill(0xFF0000);
	borderLeft.endFill();
	var borderRight = new PIXI.Graphics(0, 0, 20);
	borderRight.drawRect(WIDTH+1, 0, 100, HEIGHT);
	borderRight.beginFill(0xFF0000);
	borderRight.endFill();
																						// app.ticker.add(delta => gameLoop(delta));
	setInterval(gameLoop, 30);
	app.stage.addChild(player);
	app.stage.addChild(borderLeft);
	app.stage.addChild(borderRight);

	function gameLoop(delta) {
		var offsetX = 5,
			trigger = false;
		if (trigger) {
			player.x += offsetX;
		} else {
			player.x += -offsetX;
		}
		if (isCollide(player, borderLeft)) {
			trigger = true;
		} else if (isCollide(player, borderRight)) {
			trigger = false;
		}
		// console.log(player.x);
	}
// console.log(isCollide);
});