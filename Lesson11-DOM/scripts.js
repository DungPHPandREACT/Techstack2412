// // Tìm kiếm 1 phần tử trong html bằng id
// const tagHTMLWithId = document.getElementById('not');
// console.log(tagHTMLWithId);

// // Tìm kiếm phần tử trong html bằng tên thẻ
// const h1 = document.getElementsByTagName('h1');
// console.log(h1);

// // Tìm kiếm phần tử trong html bằng class
// const paragraph = document.getElementsByClassName('paragraph');
// console.log(paragraph);

// // Tìm kiếm phần tử kết hợp nhiều yếu tố
// const tag = document.querySelector('h2#heading');
// console.log(tag);

// const input = document.querySelector('[type="text"]');
// console.log(input);

const h1 = document.getElementById('heading');
// Thay đổi nội dung bên trong phần tử
// h1.innerHTML = '<a href="https://google.com">Hello world!!!!</a>';

const h2 = document.querySelector('h2#heading');
// h2.innerText = '<a href="https://google.com">Xin chào thế giới</a>';
h2.style.color = 'red';
h2.style.fontSize = '50px';

const tagA = document.getElementById('tagA');
tagA.href = 'https://vnexpress.net';
console.log(tagA.href);

const youtube = document.getElementById('youtube');
youtube.setAttribute('href', 'https://vnexpress.net');

// Tạo mới 1 phần tử
const newH3 = document.createElement('h3');
newH3.innerText = 'Thẻ h3 vừa được tạo';
// Thêm vào cuối thẻ body
document.getElementById('tagDiv').appendChild(newH3);
// Xóa 1 phần tử
h1.remove();

document.getElementById('test').classList.add('test1');
document.getElementById('test').classList.remove('test');
document.getElementById('test').classList.toggle('test-toggle');

// Tạo một danh sách đồ vật yêu thích của bạn với ul#favorite-list
// và các li.favorite-list-item
// 1.  Sử dụng DOM để thay đổi nội dung của tất cả li.favorite-list-item
// thành “I love this thing”.
// 2. Sử dụng DOM để thay đổi màu chữ của các li.favorite-list-item thành màu đỏ.
const tagsLi = document.getElementsByClassName('favorite-list-item');
// tagsLi.innerText = 'I love this thing';
for (let tagLi of tagsLi) {
	tagLi.innerText = 'I love this thing';
	tagLi.style.color = 'red';
}

// 3. Nhập vào 1 đoạn text từ bàn phím.
// Thêm vào ul#favorite-list một li có nội dung là text vừa nhập vào.
const content = prompt('Nhập text');
const newTagLi = document.createElement('li');
newTagLi.innerText = content;
document.querySelector('#favorite-list').appendChild(newTagLi);

function testOnClick() {
	alert('Sự kiện click được kích hoạt');
}

document.querySelector('.paragraph').onclick = testOnClick;

document.querySelector('#favorite-list').onclick = function () {
	alert('Đây cũng là là sự kiện onclick');
};

document.getElementById('btn').addEventListener('click', function (event) {
	const value = document.getElementById('text').value;
	console.log(value);
});

document.getElementById('text').onchange = function () {
	console.log('Sự kiện onchange được kích hoạt');
};

document.getElementById('text').oninput = function () {
	console.log('Sự kiện oninput được kích hoạt');
};

function test(a) {
	a();
}

function callback() {
	console.log('đây là hàm callback');
}

test(callback);

test(function () {
	console.log('Đây cũng là callback');
});
