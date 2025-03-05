document.getElementById('url').onchange = function () {
	const newUrl = document.getElementById('url').value;
	document.getElementById('image').src = newUrl;
};

document.getElementById('width').oninput = function () {
	const newWidth = document.getElementById('width').value;
	document.getElementById('image').style.width = newWidth + 'px';
};

document.getElementById('height').oninput = function () {
	const newHeight = document.getElementById('height').value;
	document.getElementById('image').style.height = newHeight + 'px';
};

document.getElementById('radius').oninput = function () {
	const newRadius = document.getElementById('radius').value;
	document.getElementById('image').style.borderRadius = newRadius + 'px';
};

document.getElementById('alt').oninput = function () {
	const newAlt = document.getElementById('alt').value;
	document.getElementById('image').setAttribute('alt', newAlt);
};
