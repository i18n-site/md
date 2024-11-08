# Phiên Bản Dự Án

Lấy dự án demo làm ví dụ:

`en/demo2/v` là số phiên bản hiện tại của dự án, số này sẽ được hiển thị ở bên phải tên dự án trong đường viền thanh bên.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Ở đây `en/` là mã ngôn ngữ tương ứng với ngôn ngữ nguồn dịch được cấu hình bằng `.i18n/conf.yml` .

Nếu ngôn ngữ nguồn của bạn không phải là tiếng Anh thì tệp `v` sẽ được đặt trong thư mục dự án của ngôn ngữ nguồn của bạn.

Khả năng duyệt các phiên bản lịch sử của tài liệu đang được phát triển.

Bạn chỉ nên sửa đổi số phiên bản của tài liệu khi các bản cập nhật lớn được phát hành (chẳng hạn như `v1` , `v2` ) để tránh có quá nhiều số phiên bản gây lộn xộn trong các trang được công cụ tìm kiếm lập chỉ mục.

## Sử Dụng Các Tệp `v` Trống Để Phân Chia Chỉ Mục Tệp Của Các Dự Án Khác Nhau

Trong dự án demo, ngoài `en/demo2/v` , bạn cũng có thể thấy có `v` tệp trống trong thư mục `en/blog` và `en/demo1` .

Số `v` trống sẽ không được hiển thị trong đường viền thanh bên, nhưng miễn là có tệp `v` , một chỉ mục độc lập sẽ được tạo cho các tệp trong thư mục và thư mục con.

Bằng cách chia nhỏ chỉ mục của các dự án khác nhau, bạn có thể tránh được việc truy cập chậm do tải chỉ mục của tất cả các tệp trong toàn bộ trang web cùng một lúc.

Ví dụ: tệp chỉ mục tương ứng với `blog` trong dự án demo là [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :