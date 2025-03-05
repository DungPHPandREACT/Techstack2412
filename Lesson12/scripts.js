// Xây dựng chương trình quản lý kho hàng như sau:
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
// Sửa thông tin kho hàng → Yêu cầu nhập lại tên kho hàng, địa chỉ, người sở hữu. In ra thông tin mới của kho hàng sau khi cập nhật giá trị mới.

// Tạo mặt hàng trong kho → Yêu cầu nhập mã mặt hàng, tên, loại, giá cả. In ra thông tin các mặt hàng đang có trong kho. Nếu mã mặt hàng đã tồn tại → yêu cầu nhập lại.
// Tìm kiếm mặt hàng = 3 → Yêu cầu nhập từ khóa tìm kiếm. In ra thông tin các mặt hàng có tên chứa từ khóa tìm kiếm.  Nếu không có từ khóa tìm kiếm → in ra toàn bộ mặt hàng.
// Ý nghĩa: Xóa mặt hàng = 4 → Yêu cầu nhập mã mặt hàng. Xóa mặt hàng có mã tương ứng. Nếu không tìm thấy mã mặt hàng cần xóa → kết thúc.
