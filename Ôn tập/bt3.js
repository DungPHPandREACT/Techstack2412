// 3. Khai báo 1 function với đầu vào là day, month, year.
// Kiểm tra xem 3 giá trị đó có tạo thành 1 ngày, tháng năm hợp lệ không.

function isValidDate(day, month, year) {
	// Kiểm tra điều kiện cơ bản
	if (year <= 0 || month < 1 || month > 12 || day < 1) {
		return false;
	}

	// Số ngày tối đa trong mỗi tháng
	const daysInMonth = [
		31, // Tháng 1: có 31 ngày
		isLeapYear(year) ? 29 : 28, // Tháng 2: năm nhuận có 29 ngày, năm không nhuận có 28 ngày
		31, // Tháng 3: có 31 ngày
		30, // Tháng 4: có 30 ngày
		31, // Tháng 5: có 31 ngày
		30, // Tháng 6: có 30 ngày
		31, // Tháng 7: có 31 ngày
		31, // Tháng 8: có 31 ngày
		30, // Tháng 9: có 30 ngày
		31, // Tháng 10: có 31 ngày
		30, // Tháng 11: có 30 ngày
		31, // Tháng 12: có 31 ngày
	];

	// Kiểm tra ngày có hợp lệ so với tháng và năm không
	return day <= daysInMonth[month - 1];
}

// 📅 Hàm kiểm tra năm nhuận
function isLeapYear(year) {
	return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

// 🔎 Ví dụ kiểm tra
console.log(isValidDate(29, 2, 2024)); // true (Năm nhuận)
console.log(isValidDate(31, 4, 2023)); // false (Tháng 4 chỉ có 30 ngày)
console.log(isValidDate(31, 12, 2023)); // true (Ngày cuối năm)
console.log(isValidDate(30, 2, 2023)); // false (Tháng 2 không nhuận)
console.log(isValidDate(15, 13, 2023)); // false (Tháng 13 không tồn tại)
