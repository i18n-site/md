# Phiên Bản Dự Án

Lấy dự án demo làm ví dụ:

`en/demo2/v` là số phiên bản hiện tại của dự án, sẽ được hiển thị ở bên phải tên dự án trong đường viền thanh bên.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Đây `en/` là mã ngôn ngữ tương ứng với ngôn ngữ nguồn dịch được cấu hình `.i18n/conf.yml` .

Nếu ngôn ngữ nguồn của bạn không phải là tiếng Anh thì tệp `v` sẽ được đặt trong thư mục dự án của ngôn ngữ nguồn của bạn. 

Khả năng duyệt các phiên bản lịch sử của tài liệu đang được phát triển.

Bạn chỉ nên sửa đổi số phiên bản của tài liệu khi phát hành các bản cập nhật lớn (chẳng hạn như `v1` , `v2` ) để tránh làm lộn xộn các trang được công cụ tìm kiếm lập chỉ mục do có quá nhiều số phiên bản.

## Sử Dụng Các Tệp `v` Trống Để Phân Chia Chỉ Mục Tệp Cho Các Dự Án Khác Nhau

Trong dự án demo, ngoài `en/demo2/v` , bạn cũng có thể thấy nội dung của thư mục `en/blog` và `en/demo1` trống `v` files.

Empty `v` sẽ không được hiển thị trong đường viền thanh bên, nhưng miễn là tệp `v` tồn tại, một chỉ mục độc lập sẽ được tạo cho các tệp trong thư mục và thư mục con.

Bằng cách chia nhỏ chỉ mục của các dự án khác nhau, bạn có thể tránh được việc truy cập chậm do tải chỉ mục của tất cả các tệp trong toàn bộ trang web cùng một lúc.

Ví dụ: trong dự án demo `blog` tệp chỉ mục tương ứng là [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :

