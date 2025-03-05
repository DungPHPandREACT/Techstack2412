const emptyObject = {}; // object rỗng

const variable = 'name';

const trainingCenter = {
	name: 'T3H',
	address: 'Hà Nội',
	courses: ['ReactJS', 'HTML', 'CSS'],
};
// console.log(trainingCenter);
// console.log(trainingCenter.variable); //
// console.log(trainingCenter[variable]); //
// trainingCenter['quality'] = 'Tốt';
// console.log(trainingCenter)

// delete trainingCenter.courses;
// console.log(trainingCenter);

// for(let key in trainingCenter){
//     console.log(trainingCenter[key]);
// }

// const keys = Object.keys(trainingCenter);
// console.log(keys);
// const values = Object.values(trainingCenter);
// console.log(values);

// console.log(trainingCenter.hasOwnProperty('quality'));
// console.log(trainingCenter.hasOwnProperty('name'));

// const number1 = 10;
// const number2 = 10;
// console.log(number1 === number2);

// const obj1 = {
// 	name: 'T3H',
// };
// // => abc
// const obj2 = {
// 	name: 'T3H',
// };
// // => xyz
// // console.log(obj1 === obj2);
// const obj3 = {};
// obj3.name = obj2.name;
// console.log(obj2);
// console.log(obj3);

// obj3.name = 'Trung tâm lập trình';
// console.log(obj2);
// // obj2.name = 'T3H'
// console.log(obj3);
// // obj3.name = 'Trung tâm lập trình'

// const student1 = {
// 	name: 'Nguyễn Văn A',
// };
// const arr1 = [1, 2, 3];
// const null1 = null;

// console.log(typeof student1);
// console.log(typeof arr1);
// console.log(typeof null);

// // Array.isArray
// console.log(Array.isArray(1));
// console.log(Array.isArray('abc'));
// console.log(Array.isArray(arr1));

// console.log(
// 	typeof student1 === 'object' && !Array.isArray(student1) && student1 !== null
// );

// function logger() {
// 	console.log('Hôm nay trời đẹp');
// 	console.log('Hôm nay trời mưa');
// 	console.log('Mai là thứ 2');
// 	console.log('----------------------------');
// }

// logger();
// logger();
// logger();
// logger();

// function add(a, b) {
// 	const sum = a + b;
// 	console.log(sum);

// 	return sum;
// }

// const x = add(7, 5);
// console.log('x: ', x);

// 2. Khai báo 1 function nhận đầu vào là 2 số a, b.
// Đầu ra là kết quả của phép tính (a + b)^2
// function calculate(a, b) {
// 	return (a + b) ** 2;
// }

// console.log(calculate(3, 4));

function checkNumber(number) {
	if (number < 0) {
		return 'Số âm';
	}
	if (number === 0) {
		return 'Số không';
	}

	return 'Số dương';
}

console.log(checkNumber(5));
