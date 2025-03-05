const buttons = document.querySelectorAll('button');

for (let button of buttons) {
	button.onclick = function () {
		button.parentNode.parentNode.remove();
	};
}
