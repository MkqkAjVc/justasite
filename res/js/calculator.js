$(document).ready(function () {
	var display = $('.calcdisplay')[0],
		act_num_btns = $('.act_num_btn'), // Numeric & Math act. btns 
		ac_btn = $('.btn-ac'), // 'AC' Button
		bspace_btn = $('.btn-backspace'), // '<' Button
		equ_btn = $('.btn-equ'); // '=' Button

	act_num_btns.click(function () {
		if (display.value == "0")
			display.value = "";

		display.value += this.innerHTML;
	});

	ac_btn.click(function () {
		display.value = "0";
	});

	equ_btn.click(function () {
		display.value = eval(display.value
								.replace('÷', '/')
								.replace('x', '*'));
		console.log(display.value);
	});

	bspace_btn.click(function () {
		display.value = display.value.slice(0, -1);

		if (display.value == "")
			display.value = "0";
	});
});




































//$(document).ready(function () {
// 	var display = $(".calcdisplay");
// 	var btn_backspace = $(".calcbtn.btn-backspace");
// 	$(btn_backspace).on("click", function (e) {
// 		console.log("works");
// 	})
// 	// function btnClick (e, sender) {
// 	// 	display.val(display.val() + sender.html());
// 	// 	console.log(sender);
// 	// }
// 	// btn[0].click(btnClick(btn));
// });

// $(document).ready(function () {
// 	var display = document.querySelectorAll('.calcdisplay')[0],
// 		num_btns = document.querySelectorAll('.numbtn'),
// 		act_btns = document.querySelectorAll('.actbtn'),
// 		func_btns = document.querySelectorAll('.funcbtn');
	
// 	for (var i = 0; i < num_btns.length; i++) {
// 		num_btns[i].addEventListener("click", function (e) {
// 				display.value += this.innerHTML;
// 		});
// 		act_btns[i].addEventListener("click", function (e) {
// 				display.value += this.innerHTML;
// 		});
// 	}
// });