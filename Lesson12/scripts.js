// Xây dựng chương trình quản lý kho hàng như sau:
// -Cửa hàng gồm các thông tin: tên kho hàng, địa chỉ, người sở hữu, các mặt hàng trong kho.
// -Mỗi mặt hàng gồm: mã mặt hàng, tên, loại mặt hàng, giá cả.

const storage = {
	name: 'Fake Storage',
	address: 'HN',
	owner: 'Dung Tien',
	description: 'Mô tả kho hàng',
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

// Thông tin kho hàng
const nameStorage = document.getElementById('name_storage');
const addressStorage = document.getElementById('address_storage');
const ownerStorage = document.getElementById('owner_storage');
const descriptionStorage = document.getElementById('description_storage');

// Các form input trong modal cập nhật thông tin kho hàng
const inputNameStorage = document.getElementById('input_name_storage');
const inputAddressStorage = document.getElementById('input_address_storage');
const inputOwnerStorage = document.getElementById('input_owner_storage');
const inputDescriptionStorage = document.getElementById(
	'input_description_storage'
);

// Các button
// Button cập nhật thông tin kho hàng
const btnUpdateStorage = document.getElementById('btn_update_storage');

// Bootstrap
const myModal = new bootstrap.Modal('#staticBackdrop', {
	keyboard: false,
});

// Hàm in ra thông tin kho hàng dựa trên dữ liệu
function printInformationStorage() {
	descriptionStorage.innerText = storage.description;
	nameStorage.innerText = storage.name;
	addressStorage.innerText = storage.address;
	ownerStorage.innerText = storage.owner;
}
printInformationStorage();

// -Mô tả chi tiết
// Sửa thông tin kho hàng → Yêu cầu nhập lại tên kho hàng, địa chỉ, người sở hữu. In ra thông tin mới của kho hàng sau khi cập nhật giá trị mới.
btnUpdateStorage.onclick = function () {
	const newNameStorage = inputNameStorage.value;
	const newAddressStorage = inputAddressStorage.value;
	const newOwnerStorage = inputOwnerStorage.value;
	const newDescriptionStorage = inputDescriptionStorage.value;

	storage.name = newNameStorage;
	storage.address = newAddressStorage;
	storage.owner = newOwnerStorage;
	storage.description = newDescriptionStorage;

	printInformationStorage();
	myModal.hide();
};

// Tạo mặt hàng trong kho → Yêu cầu nhập mã mặt hàng, tên, loại, giá cả. In ra thông tin các mặt hàng đang có trong kho. Nếu mã mặt hàng đã tồn tại → yêu cầu nhập lại.
// Tìm kiếm mặt hàng = 3 → Yêu cầu nhập từ khóa tìm kiếm. In ra thông tin các mặt hàng có tên chứa từ khóa tìm kiếm.  Nếu không có từ khóa tìm kiếm → in ra toàn bộ mặt hàng.
// Ý nghĩa: Xóa mặt hàng = 4 → Yêu cầu nhập mã mặt hàng. Xóa mặt hàng có mã tương ứng. Nếu không tìm thấy mã mặt hàng cần xóa → kết thúc.
