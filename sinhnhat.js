// Ẩn toàn bộ nội dung và hiển thị ảnh mới sau 15 giây
setTimeout(() => {
    // Ẩn nội dung hiện tại
    document.querySelectorAll('.anhxinchao1, .message-container, .anhxinchao').forEach(element => {
        element.style.display = 'none';
    });

    // Hiển thị thiệp 1
    document.querySelector('.thiep1').classList.remove('hidden');
}, 10000);

// Khi nhấn vào thiệp 1, chuyển sang thiệp 2 và hiển thị nút button
document.querySelector('.thiep1').addEventListener('click', () => {
    document.querySelector('.thiep1').classList.add('hidden'); // Ẩn thiệp 1
    document.querySelector('.thiep2').classList.remove('hidden'); // Hiển thị thiệp 2

    // Hiển thị nút button
    document.querySelector('.action-button').classList.remove('hidden');
});

// Khi nhấn nút button, ẩn thiệp 2 và hiển thị các phần tử mới
document.querySelector('.action-button').addEventListener('click', () => {
    // Ẩn thiệp 2 và nút button
    document.querySelector('.thiep2').classList.add('hidden');
    document.querySelector('.action-button').classList.add('hidden');

    // Hiển thị các phần tử mới
    document.querySelector('.han').classList.remove('hidden');
    document.querySelector('.caunoi').classList.remove('hidden');
    document.querySelector('.anh').classList.remove('hidden');

    // Hiển thị ảnh chi tiết thay phiên nhau
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.anhchitiet');

    function showNextImage() {
        // Ẩn ảnh hiện tại
        images[currentImageIndex].style.display = 'none';

        // Tính chỉ mục ảnh tiếp theo
        currentImageIndex = (currentImageIndex + 1) % images.length;

        // Hiển thị ảnh tiếp theo
        images[currentImageIndex].style.display = 'block';
    }

    // Hiển thị ảnh chi tiết đầu tiên
    images[currentImageIndex].style.display = 'block';

    // Chuyển đổi ảnh mỗi 3 giây
    setInterval(showNextImage, 3000);
});
