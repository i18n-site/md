# i18n.site · Công cụ Dịch thuật và Xây dựng Trang Web Markdown,现已上线!

Sau hơn nửa năm phát triển, [https://i18n.site](//i18n.site) đã chính thức上线.

Hiện tại, đã triển khai hai công cụ dòng lệnh mã nguồn mở:

* `i18`: Công cụ Dịch Markdown dòng lệnh
* `i18n.site`: Trình tạo Trang tài liệu Tĩnh đa ngôn ngữ, **được tối ưu hóa cho trải nghiệm đọc**

Công cụ dịch có thể giữ nguyên hoàn hảo định dạng `Markdown`. Nó có thể phát hiện các thay đổi trong tệp và chỉ dịch các tệp đã thay đổi.

Bản dịch có thể chỉnh sửa; nếu bạn sửa đổi văn bản gốc và dịch lại bằng máy, các chỉnh sửa thủ công sẽ không bị ghi đè (nếu đoạn văn bản gốc không thay đổi).

[Nhấp vào đây để ủy quyền tự động theo dõi kho mã nguồn GitHub của i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo), **được tặng $50**.

## Nguồn gốc

Trong thời đại Internet, toàn cầu là thị trường, đa ngôn ngữ và bản địa hóa là những kỹ năng cơ bản.

Các công cụ quản lý dịch thuật hiện có đều quá phức tạp đối với các nhà phát triển phụ thuộc vào quản lý phiên bản `git`, họ vẫn ưa thích công cụ dòng lệnh.

Vì vậy, tôi đã phát triển công cụ dịch `i18` và từ đó xây dựng nên trình tạo trang tĩnh đa ngôn ngữ `i18n.site`.

![](https://p.3ti.site/1723777556.avif)

Đây chỉ là bước đầu, còn rất nhiều điều tôi muốn thực hiện.

Ví dụ, kết nối trang tài liệu tĩnh với mạng xã hội và hệ thống đăng ký email, để người dùng có thể nhận được thông báo kịp thời khi có bản cập nhật.

Hoặc ví dụ, tích hợp diễn đàn đa ngôn ngữ và hệ thống vé hỗ trợ vào bất kỳ trang web nào, để người dùng có thể giao tiếp mà không gặp rào cản.

## Mở Nguồn

Mã nguồn của giao diện trước, giao diện sau và công cụ dòng lệnh [đều là mã nguồn mở](https://i18n.site/i18n.site/c/src) (riêng mô hình dịch thuật chưa được công khai).

Các công nghệ sử dụng bao gồm:

Giao diện: [Svelte](https://svelte.dev), [Stylus](https://stylus-lang.com), [Pug](https://github.com/pugjs/pug), [Vite](https://github.com/vitejs/vite)

Công cụ dòng lệnh và backend được phát triển dựa trên Rust.

Backend: [Axum](https://github.com/tokio-rs/axum), [Tower-HTTP](https://github.com/tower-rs/tower-http/releases).

Công cụ dòng lệnh: [Engine JavaScript nhúng Boa](https://docs.rs/boa_engine), [Cơ sở dữ liệu nhúng Fjall](https://github.com/fjall-rs/fjall).

Máy chủ VPS: [Contabo](https://my.contabo.com)

Cơ sở dữ liệu: [Kvrocks](https://kvrocks.apache.org), [Mariadb](https://mariadb.org).

Gửi thư tự động bằng SMTP [Chasquid](https://github.com/albertito/chasquid).

## Liên hệ với chúng tôi

Khi một sản phẩm mới được ra mắt, sẽ không tránh khỏi những vấn đề phát sinh.

Chào mừng bạn liên hệ với chúng tôi qua diễn đàn Google: [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site)