// 2. Khai báo 1 function với đầu vào là 3 số a, b, c.
// Kiểm tra xem a, b, c có tạo thành 3 cạnh của tam giác không.
// Nếu tạo thành tam giác, đầu ra là true. Ngược lại, đầu ra là false.

// Định lý: Trong một tam giác, độ dài của một cạnh bất kỳ luôn nhỏ hơn tổng độ dài 2 cạnh còn lại

// a = 3
// b = 4
// c = 5
// 3 < 4 + 5 => 3 < 9 => true
// 4 < 3 + 5 => 4 < 8 => true
// 5 < 3 + 4 => 5 < 7 => true

function checkTriangle(a, b, c) {
	if (a < b + c && b < a + c && c < a + b) {
		return true;
	}
	return false;
}

const result = checkTriangle(3, 4, 5);
console.log(result);
