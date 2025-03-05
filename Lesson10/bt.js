// 4. Cho mảng đa chiều biểu thị mức độ tăng trưởng của 1 công ty qua các quý và năm tương ứng.
// Dữ liệu của năm: theo hàng.
// Dữ liệu của quý: theo cột.
const growth = [
	[5, 8, 9, 16], // Năm 1
	[2, 7, 1, 9], // Năm 2
	[5, 6, 8, 12], // Năm 3
	[10, 2, 1, 8], // Năm 4
	[20, 4, 9, 1], // Năm 5
];

// -Tạo mảng mới gồm các phần tử có giá trị là trung bình tăng trưởng của từng năm
// (Tính trung bình theo hàng).
// const avgGrowth = [];
// for (let data of growth) {
// 	let sum = 0;
// 	for (let element of data) {
// 		sum += element;
// 	}
// 	const avg = sum / data.length;
// 	avgGrowth.push(avg);
// }
// console.log(avgGrowth);

// -Tìm giá trị tăng trưởng trung bình theo năm lớn nhất.
// let maxGrowth = avgGrowth[0];
// for (let element of avgGrowth) {
// 	if (element > maxGrowth) {
// 		maxGrowth = element;
// 	}
// }
// console.log('Max: ', maxGrowth);

// -Tìm giá trị tăng trưởng theo quý lớn nhất.
let max = growth[0][0];
for (let dataRow of growth) {
	for (let dataCol of dataRow) {
		if (dataCol > max) {
			max = dataCol;
		}
	}
}
console.log(max);

// -Tính giá trị tăng trưởng trung bình theo quý của các năm (Tính trung bình theo cột).
const avg = [];
for (let i = 0; i < growth[0].length; i++) {
	let sum = 0;
	let rows = growth.length;
	for (let j = 0; j < rows; j++) {
		sum += growth[j][i];
	}
	avg.push(sum / rows);
}
console.log(avg);
