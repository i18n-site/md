# Phiên bản dự án

Lấy dự án demo làm ví dụ:

`en/demo2/v` là phiên bản hiện tại của dự án, sẽ hiển thị ở bên phải tên dự án trong cột bên.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Ở đây `en/` là mã ngôn ngữ tương ứng với ngôn ngữ nguồn được cấu hình trong `.i18n/conf.yml`.

Nếu ngôn ngữ nguồn của bạn không phải là tiếng Anh, tệp `v` nên được đặt trong thư mục của ngôn ngữ nguồn.

Chức năng duyệt qua các phiên bản lịch sử của tài liệu đang được phát triển.

Đề xuất chỉ nên thay đổi số phiên bản của tài liệu khi phát hành các bản cập nhật quan trọng (ví dụ: `v1`, `v2`) để tránh việc có quá nhiều phiên bản làm rối loạn chỉ mục của công cụ tìm kiếm.

## Sử dụng tệp `v` trống để phân chia chỉ mục các tệp của các dự án khác nhau

Trong dự án demo, ngoài `en/demo2/v`, bạn có thể thấy tệp `v` trống trong thư mục `en/blog` và `en/demo1`.

Tệp `v` trống sẽ không hiển thị trong cột bên, nhưng chỉ cần có tệp `v`, một chỉ mục độc lập sẽ được tạo cho các tệp trong thư mục và thư mục con.

Bằng cách phân chia chỉ mục của các dự án khác nhau, bạn có thể tránh việc tải tất cả các tệp của toàn bộ trang web cùng một lúc, dẫn đến việc truy cập chậm.

Ví dụ: tệp chỉ mục tương ứng với `blog` trong dự án demo là [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :