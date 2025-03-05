// 4. Cho bộ dữ liệu về users như sau: data.js
// -Nhập vào 1 số n. Hãy tìm 1 user có id bằng n
// let isExistUser1 = false;

// const n = Number(prompt('Nhập n: '));
// for (let user of users) {
// 	if (user.id === n) {
// 		console.log(user);
// 		isExistUser1 = true;
// 		break;
// 	}
// }

// if (isExistUser1 === false) {
// 	console.log('Không tìm thấy kết quả');
// }

// -Nhập vào 1 chuỗi keyword. Hãy lấy ra email của các user có tên (first_name + last_name) chứa keyword.
// let isExistUser2 = false;
// // VD: keyword = 'ana';
// // Analise Davenall

// const keyword = prompt('Nhập keyword: ');
// for (let user of users) {
// 	const fullName = user.first_name + ' ' + user.last_name;
// 	if (fullName.toLowerCase().includes(keyword.toLowerCase())) {
// 		console.log(user.email);
// 		isExistUser2 = true;
// 	}
// }

// if (isExistUser2 === false) {
// 	console.log('Không tìm thấy kết quả');
// }

// -Đếm số lượng user có age > 50.
// let count1 = 0;
// for (let user of users) {
// 	if (user.age > 50) {
// 		count1 = count1 + 1;
// 	}
// }
// console.log('Số lượng user có age > 50 là: ', count1);

// -Đếm số lượng user đã kết hôn và chưa kết hôn.
// let count2 = 0;
// for (let user of users) {
// 	if (user.is_married) {
// 		count2 = count2 + 1;
// 	}
// }
// console.log('Số lượng người đã kết hôn là: ', count2);
// console.log('Số lượng người đã chưa kết hôn là: ', users.length - count2);

// -Đếm số lượng user theo từng ngành nghề tương ứng.
//     Output:
//     {
//         "Dentist": 5,
//         "Developer": 13,
//         "Doctor": 6,
//         "Farmer": 8,
//         "Project Manager": 5,
//         "Teacher": 9,
//         "Worker" : 4
//     }

const result = {};
for (let user of users) {
	if (result.hasOwnProperty(user.job)) {
		result[user.job] = result[user.job] + 1;
	} else {
		result[user.job] = 1;
	}
	// result[user.job] = result[user.job] ? result[user.job] + 1 : 1;
}

console.log(result);
