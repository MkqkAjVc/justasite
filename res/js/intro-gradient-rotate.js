$(document).ready(function (){
	var i = 1;
	setInterval(function () {
		i+=3;
		$(".intro-anim").css("background", "linear-gradient(" + i + "deg, #00ff00, #ff0000)")
		if (i > 360) {
			i = 1;
		}
	}, 10)
});