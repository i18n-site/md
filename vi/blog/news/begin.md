---

brief: |
  Hiện tại, hai công cụ dòng lệnh nguồn mở đã được triển khai: i18 (công cụ dịch dòng lệnh MarkDown) và i18n.site (trình tạo trang tài liệu tĩnh đa ngôn ngữ)

---


# i18n.site · Công Cụ Dịch Thuật Và Xây Dựng Trang Web MarkDown Hiện Đã Trực Tuyến!

Sau hơn nửa năm phát triển, [https://i18n.site](//i18n.site)

Hiện tại, hai công cụ dòng lệnh nguồn mở được triển khai:

* `i18` : MarkDown Công cụ dịch dòng lệnh
* `i18n.site` : Trình tạo trang tài liệu tĩnh đa ngôn ngữ, **được tối ưu hóa cho trải nghiệm đọc**

Bản dịch có thể duy trì hoàn hảo định dạng `Markdown` . Có thể xác định các sửa đổi tệp và chỉ dịch các tệp có thay đổi.

Bản dịch có thể chỉnh sửa được; nếu bạn sửa đổi văn bản gốc và dịch lại bằng máy, những sửa đổi thủ công đối với bản dịch sẽ không bị ghi đè (nếu đoạn này của văn bản gốc chưa được sửa đổi).

➤ Nhấn vào đây để ủy quyền và tự động theo dõi **$50** [viện github của i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo)

## Nguồn Gốc

Trong thời đại Internet, cả thế giới là một thị trường, đa ngôn ngữ và bản địa hóa là những kỹ năng cơ bản.

Các công cụ quản lý dịch thuật hiện có quá nặng đối với các lập trình viên dựa vào quản lý phiên bản `git` , họ vẫn thích dòng lệnh hơn.

Vì vậy, tôi đã phát triển công cụ dịch thuật `i18` và xây dựng trình tạo trang tĩnh đa ngôn ngữ `i18n.site` dựa trên công cụ dịch thuật.

![](https://p.3ti.site/1723777556.avif)

Đây chỉ là sự khởi đầu, còn nhiều việc phải làm.

Ví dụ: bằng cách kết nối trang tài liệu tĩnh với phương tiện truyền thông xã hội và đăng ký email, người dùng có thể liên lạc kịp thời khi các bản cập nhật được phát hành.

Ví dụ: các diễn đàn đa ngôn ngữ và hệ thống lệnh sản xuất có thể được nhúng vào bất kỳ trang web nào, cho phép người dùng giao tiếp mà không gặp rào cản.

## Nguồn Mở

[Các mã front-end, back-end và dòng lệnh đều là mã nguồn mở](https://i18n.site/i18n.site/c/src) (mô hình dịch chưa phải là mã nguồn mở).

Ngăn xếp công nghệ được sử dụng như sau:

Giao diện [svelte](https://svelte.dev) , [stylus](https://stylus-lang.com) , [pug](https://github.com/pugjs/pug) , [vite](https://github.com/vitejs/vite)

Dòng lệnh và phần phụ trợ được phát triển dựa trên Rust.

phía sau [axum](https://github.com/tokio-rs/axum) , [tower-http](https://github.com/tower-rs/tower-http/releases) .

Dòng lệnh [được js Engine boa_engine](https://docs.rs/boa_engine) , [cơ sở dữ liệu được nhúng fjall](https://github.com/fjall-rs/fjall) .

máy chủ VPS [contabo](https://my.contabo.com)

cơ sở dữ liệu [kvrocks](https://kvrocks.apache.org) , [mariadb](https://mariadb.org) .

Gửi thư tới tự xây [chasquid](https://github.com/albertito/chasquid) SMTP

## Liên Hệ Với Chúng Tôi

Khi sản phẩm mới được tung ra thị trường, vấn đề là điều không thể tránh khỏi.

Vui lòng liên hệ với chúng tôi qua Diễn đàn [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) :