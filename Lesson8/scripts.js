
//Ví dụ 3: Tính tổng các số chẵn trong đoạn [-30, 50].
// let sum = 0;
// for (let number = -30; number <= 50; number++) {
// 	if (number % 2 === 0) {
// 		sum = sum + number;
// 	}
// }
// console.log(sum);

//Ví dụ 4: Nhập vào số n. Tính giai thừa của số n.
// let n = prompt('Nhập n:');
// n = Number(n);
// let gt = 1;
// for (let i = 1; i <= n; i++) {
// 	gt = gt * i;
// }
// console.log(gt);

//Ví dụ 5: Nhập vào 3 số a, b, x (a < b). Tìm trong khoảng a, b số nhỏ nhất mà chia hết cho x.

let a = prompt('Nhập a: ');
a = Number(a);
let b = prompt('Nhập b: ');
b = Number(b);

if (a >= b) {
	alert('Giá trị đầu vào chưa hợp lệ');
} else {
	let x = prompt('Nhập x: ');
	x = Number(x);

	for (let i = a + 1; i < b; i++) {
		if (i % x === 0) {
			console.log(i);
            break;
		}
	}
}
