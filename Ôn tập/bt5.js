// 5. Xây dựng chương trình quản lý kho hàng như sau:
// -Cửa hàng gồm các thông tin: tên kho hàng, địa chỉ, người sở hữu, các mặt hàng trong kho.
// -Mỗi mặt hàng gồm: mã mặt hàng, tên, loại mặt hàng, giá cả.

const storage = {
	name: 'Fake Storage',
	address: 'HN',
	owner: 'Dung Tien',
	items: [
		{
			id: 1,
			name: 'Product 1',
			category: 'Furniture',
			price: 20,
		},
		{
			id: 2,
			name: 'Product 2',
			category: 'Device',
			price: 110,
		},
		{
			id: 3,
			name: 'Product 3',
			category: 'Cloth',
			price: 2,
		},
	],
};

// -Mô tả chi tiết
// +action = 1 → Yêu cầu nhập lại tên kho hàng, địa chỉ, người sở hữu.
// In ra thông tin mới của kho hàng sau khi cập nhật giá trị mới.
function updateStorage() {
	const newName = prompt('Nhập lại tên kho hàng: ');
	const newAddress = prompt('Nhập lại địa chỉ kho hàng: ');
	const newOwner = prompt('Nhập lại người sở hữu');
	storage.name = newName;
	storage.address = newAddress;
	storage.owner = newOwner;

	console.log('Thông tin sau khi được cập nhật: ', storage);
}

// +action = 2 → Yêu cầu nhập mã mặt hàng, tên, loại, giá cả.
// In ra thông tin các mặt hàng đang có trong kho. Nếu mã mặt hàng đã tồn tại → yêu cầu nhập lại.
// Hàm kiểm tra xem id đã tồn tại chưa
function checkExistId(id) {
	for (let i = 0; i < storage.items.length; i++) {
		if (storage.items[i].id === id) {
			// Nếu tìm thấy thì trả về i (index)
			return i;
		}
	}

	// Nếu không tìm thấy thì trả về -1
	return -1;
}

function createItem() {
	let itemId;
	for (; true; ) {
		itemId = prompt('Nhập mã mặt hàng: ');
		itemId = Number(itemId);
		if (checkExistId(itemId) === -1) {
			break;
		}
	}

	const itemName = prompt('Nhập tên mặc hàng: ');
	const itemCategory = prompt('Nhập loại mặt hàng: ');
	const itemPrice = prompt('Nhập giá mặt hàng');

	const newItem = {
		id: itemId,
		name: itemName,
		category: itemCategory,
		price: itemPrice,
	};

	storage.items.push(newItem);
	console.log('Danh sách mặt hàng mới cập nhật: ', storage.items);
}

// +action = 3 → Yêu cầu nhập từ khóa tìm kiếm.
// In ra thông tin các mặt hàng có tên chứa từ khóa tìm kiếm.  Nếu không có từ khóa tìm kiếm → in ra toàn bộ mặt hàng.
function findItem() {
	const keyword = prompt('Nhập từ khóa: ');
	let isExistedItem = false;
	for (let item of storage.items) {
		if (item.name.toLowerCase().includes(keyword.toLowerCase())) {
			console.log(item);
			isExistedItem = true;
		}
	}

	if (isExistedItem === false) {
		console.log('Danh sách toàn bộ mặt hàng: ', storage.items);
	}
}

// +action = 4 → Yêu cầu nhập mã mặt hàng.
// Xóa mặt hàng có mã tương ứng.
// Nếu không tìm thấy mã mặt hàng cần xóa → kết thúc.
function deleteItem() {
	const itemId = Number(prompt('Nhập mã mặt hàng'));
	const index = checkExistId(itemId);
	console.log('index: ', index);

	if (index !== -1) {
		storage.items.splice(index, 1);
		console.log('Danh sách mặt hàng mới cập nhật: ', storage.items);
	} else {
		console.log('Không tìm thấy mặt hàng tương ứng');
	}
}

// *Xây dựng chương trình tương tác với kho hàng. Nhập vào action là yêu cầu ứng với các thao tác:
//     Action 1 -> Ý nghĩa: Sửa thông tin kho hàng
//     Action 2 -> Ý nghĩa: Tạo mặt hàng trong kho
//     Action 3 -> Ý nghĩa: Tìm kiếm mặt hàng
//     Action 4 -> Ý nghĩa: Xóa mặt hàng
//     Action 0 -> Ý nghĩa: Thoát chương trình
// -Sau khi thực hiện xong mỗi thao tác, nhập lại action để thực hiện các thao tác khác.
for (; true; ) {
	const action = Number(prompt('Nhập hành động: '));
	console.log('action :', action);
	if (action === 1) {
		updateStorage();
	} else if (action === 2) {
		createItem();
	} else if (action === 3) {
		findItem();
	} else if (action === 4) {
		deleteItem();
	} else {
		break;
	}
}

// deleteItem();
