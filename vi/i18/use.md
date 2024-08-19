# Cài đặt và sử dụng

## Trên Windows, trước tiên cài đặt Git Bash

Trên hệ thống Windows, vui lòng [ nhấp vào đây để tải xuống và cài đặt `git bash` ](https://git-scm.com/download/win).

Chạy các thao tác tiếp theo trong `git bash`.

## Cài Đặt

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Cấu hình mã thông báo dịch

Truy cập [ i18n.site/token ](//i18n.site/token) và nhấp để sao chép mã thông báo

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Tạo tệp `~/.config/i18n.site.yml`, sau đó dán nội dung đã sao chép vào đó, nội dung như sau:

```
token: YOUR_API_TOKEN
```

Ngoài ra, cần đăng nhập vào [ i18n.site/payBill ](//i18n.site/payBill) và liên kết thẻ tín dụng thanh toán (không cần nạp tiền, hệ thống sẽ tự động tính phí theo mức sử dụng, [xem giá tại trang chủ](/#price)).

## Sử dụng

### Dự Án Demo

Vui lòng tham khảo dự án demo [ github.com/i18n-site/demo.i18 ](//github.com/i18n-site/demo.i18) để học cách cấu hình `i18` dịch.

Người dùng ở Trung Quốc có thể sao chép [ atomgit.com/i18n/demo.i18 ](//atomgit.com/i18n/demo.i18)

Sau khi sao chép, vào thư mục và chạy `i18` để hoàn thành việc dịch.

### Cấu Trúc Thư Mục

Cấu trúc thư mục của kho mẫu như sau:

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Các tệp demo đã dịch trong thư mục `en` chỉ là ví dụ và có thể xóa bỏ.

### Chạy dịch

Vào thư mục và chạy `i18` để dịch.

### Thêm tệp vào kho lưu trữ

Chương trình sẽ tạo ra các tệp sau và vui lòng thêm chúng vào kho lưu trữ.

```
.i18n/hash
.i18n/cache/.gitignore
```

Trong đó, nội dung của tệp `.i18n/cache/.gitignore` như sau:

```
**/*
!**/.gitignore
```

Điều này có nghĩa là tất cả các tệp trong thư mục `.i18n/cache/` (ngoại trừ `.i18n/cache/.gitignore`) sẽ bị bỏ qua.

Nếu phần mềm kiểm soát phiên bản của bạn không phải là `git`, vui lòng cấu hình bỏ qua theo cách này.

## Tệp cấu hình

`.i18n/conf.yml` là tệp cấu hình cho công cụ dịch dòng lệnh `i18`

Nội dung như sau:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Ngôn ngữ nguồn và ngôn ngữ dịch

Trong tệp cấu hình, các mục con của `fromTo`:

`en` là ngôn ngữ nguồn, `zh ja ko de fr` là các ngôn ngữ dịch.

Mã ngôn ngữ xem [ i18n.site/i18/LANG_CODE ](https://i18n.site/i18/LANG_CODE).

Ví dụ, nếu bạn muốn dịch tiếng Trung sang tiếng Anh, hãy viết lại dòng này `zh: en`.

Nếu bạn muốn dịch sang tất cả các ngôn ngữ được hỗ trợ, vui lòng để trống sau `:`. Ví dụ:

```
i18n:
  fromTo:
    en:
```

Bạn có thể định cấu hình `fromTo` khác nhau cho các thư mục con khác nhau / Một minh họa được viết như sau:

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

Trong bảng cấu hình này, ngôn ngữ nguồn của thư mục `blog` là `zh`, còn ngôn ngữ nguồn của tệp `blog/your_file_name.md` là `ja`.

### Bỏ qua tệp

Theo mặc định, tất cả các tệp có đuôi `.md` và `.yml` trong thư mục ngôn ngữ nguồn sẽ được dịch.

Nếu bạn muốn bỏ qua một số tệp không cần dịch (ví dụ như các bản nháp chưa hoàn thành), bạn có thể cấu hình bằng trường `ignore`.

`ignore` sử dụng cú pháp [globset](https://docs.rs/globset/latest/globset/#syntax) tương tự như tệp `.gitignore`.

Ví dụ: `_*` trong tệp cấu hình ở trên có nghĩa là các tệp bắt đầu bằng `_` sẽ không được dịch.

## Quy tắc dịch

### Không được thêm hoặc bớt dòng trong bản dịch

Bản dịch có thể chỉnh sửa. Khi sửa đổi văn bản gốc và dịch lại bằng máy, các chỉnh sửa thủ công trong bản dịch sẽ không bị ghi đè (nếu đoạn văn bản gốc chưa được sửa đổi).

Nhưng请注意, các dòng của bản dịch và văn bản gốc phải tương ứng. Nghĩa là không được thêm hoặc bớt dòng trong quá trình dịch. Nếu không, sẽ gây ra sự nhầm lẫn trong bộ nhớ cache của bản dịch.

Nếu xảy ra sự cố, vui lòng tham khảo [ các giải pháp trong phần câu hỏi thường gặp ](/i18/qa#H1)

### `YAML` bản dịch

Công cụ dòng lệnh sẽ tìm tất cả các tệp có đuôi `.yml` trong thư mục ngôn ngữ nguồn và dịch chúng.

* Lưu ý rằng tên tệp phải kết thúc bằng `.yml` (không phải `.yaml`).

Công cụ chỉ dịch các giá trị của từ điển trong `.yml`, không dịch các khóa của từ điển.

Ví dụ `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

sẽ được dịch thành `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Bản dịch của `YAML` cũng có thể được chỉnh sửa thủ công (nhưng không nên thêm hoặc xóa các phím hoặc dòng trong bản dịch).

Dựa trên bản dịch `YAML`, bạn có thể dễ dàng xây dựng các giải pháp quốc tế hóa cho nhiều ngôn ngữ lập trình khác nhau.

## Cách sử dụng nâng cao

### Dịch thư mục con

Chỉ cần tạo `.i18n/conf.yml` (không cần bắt đầu từ mẫu dự án mỗi lần), `i18` sẽ hoạt động bình thường.

Công cụ dòng lệnh sẽ tìm thấy và dịch tất cả các tệp cấu hình `.i18n/conf.yml` trong các thư mục con.

Các dự án sử dụng kiến trúc [monorepo](//monorepo.tools) có thể chia các tệp ngôn ngữ thành các thư mục con.

![](https://p.3ti.site/1719910016.avif)

### Thư mục cài đặt tùy chỉnh

Theo mặc định, sẽ cài đặt vào `/usr/local/bin`.

Nếu `/usr/local/bin` không có quyền ghi, sẽ cài đặt vào `~/.bin`.

Thiết lập biến môi trường `TO` để xác định thư mục cài đặt, ví dụ:

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```