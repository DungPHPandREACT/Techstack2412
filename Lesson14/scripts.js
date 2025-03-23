// if (typeof Storage !== undefined) {
// 	// alert('Trình duyệt có hỗ trợ sử dụng local storage');
// } else {
// 	// alert('Trình duyệt không hỗ trợ sử dụng local storage');
// }

// // CRUD
// // local storage
// // C: create
// // Cách 1: sử dụng hàm setItem
// localStorage.setItem('PI', 3.14);
// // Cách 2: sử dụng theo kiểu object
// localStorage.name = 'T3H';
// localStorage['address'] = 'HN';
// // local storage không hỗ trợ lưu trữ trực tiếp kiểu dữ liệu tham chiếu
// // Nếu muốn lưu trữ kiểu dữ liệu tham chiếu vào trong local storage thì phải chuyển đổi sang định dạng JSON
// // JSON.stringify(object) => chuyển đổi object sang định json
// // JSON.parse(data) => chuyển đổi từ định dạng json về kiểu dữ liệu ban đầu
// const student = {
// 	name: 'Trần Thị B',
// 	age: 18,
// };
// localStorage.student = JSON.stringify(student);

// // R: read
// // Cách 1: sử dụng hàm getItem
// const PI = localStorage.getItem('PI');
// // Cách 2: thao tác giống như object
// const name = localStorage.name;
// let studentSaved = localStorage.getItem('student');
// studentSaved = JSON.parse(studentSaved);
// console.log(PI);
// console.log(name);
// console.log(studentSaved);
// console.log(studentSaved.name);

// // U: update
// localStorage.setItem('PI', 100);

// // D: delete
// // Cách 1: xóa theo key chỉ định
// localStorage.removeItem('name');
// // Cách 2: thao tác giống object
// delete localStorage.address;
// // Cách 3: Xóa toàn bộ dữ liệu trong local storage
// localStorage.clear();

// session storage
// sessionStorage.setItem('key', 'Hello');

// cookie
// document.cookie = 'PI=3.14';

// viết hàm lấy giá trị của cookie
function getValueCookie(key) {
	let value = document.cookie;
	value = value.split(';');

	for (let element of value) {
		element = element.trim(); // loại bỏ khoảng trắng dư thừa ở đầu chuỗi và cuối chuỗi
		element = element.split('=');
		if (element[0] === key) {
			return element[1];
		}
	}

	return null;
}

console.log(getValueCookie('address'));
console.log(getValueCookie('username'));
