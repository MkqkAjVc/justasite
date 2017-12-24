// $(document).ready(function () {
// 	var display = $(".calcdisplay");
// 	var btn = $(".calcbtn");
// 	function btnClick (e, sender) {
// 		display.val(display.val() + sender.html());
// 		console.log(sender);
// 	}
// 	btn[0].click(btnClick(btn));
// });








































$(document).ready(function () {
	var display = document.querySelectorAll('.calcdisplay')[0];
	var btns = document.querySelectorAll('.calcbtn');
	// function btnClick (e, sender) {
	// 	display.value += sender.textContent;
	// 	// console.log(sender);
	// }
	
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function (e) {
			display.value += btns[i].textContent;
		})
	}
});
