// 1. Khai báo 1 function với đầu vào là 3 số a, b, c (a khác 0).
// Hãy tìm nghiệm của phương trình a.x^2 + b.x + c = 0 và đưa ra kết quả dưới dạng 1
// mảng gồm các nghiệm của phương trình.

// TH1: x1 = value1, x2 = value2 (2 nghiệm phân biệt)
// TH2: x1 = x2 = value (nghiệm kép)
// TH3: vô nghiệm

function calculate(a, b, c) {
	if (a === 0) {
		return null;
	}

	const delta = b ** 2 - 4 * a * c;
	if (delta < 0) {
		return [];
	} else if (delta === 0) {
		const value = -b / (2 * a);
		return [value];
	} else {
		const value1 = (-b + Math.sqrt(delta)) / (2 * a);
		const value2 = (-b - Math.sqrt(delta)) / (2 * a);

		return [value1, value2];
	}
}

let input1 = prompt('Nhập giá trị a: ');
let input2 = prompt('Nhập giá trị b: ');
let input3 = prompt('Nhập giá trị c: ');

input1 = Number(input1);
input2 = Number(input2);
input3 = Number(input3);

const result = calculate(input1, input2, input3);

// In ra kết quả và diễn đạt cho người dùng hiểu
if (result === null) {
	console.log('Đây không phải là phương trình bậc 2');
} else if (result.length === 0) {
	console.log('Phương trình vô nghiệm');
} else if (result.length === 1) {
	console.log('Phương trình có nghiệm két là: ', result[0]);
} else {
	const x1 = result[0];
	const x2 = result[1];
	const log =
		'Phương trình có 2 nghiệm phân biệt: x1 = ' + x1 + ' và x2 = ' + x2;
	console.log(log);
}
