# Cài Đặt Và Sử Dụng

## windows Đầu Tiên Cài Đặt git bash

windows Hệ thống, vui lòng [nhấp vào đây để tải xuống và cài đặt trước `git bash`](https://git-scm.com/download/win)

Chạy các hoạt động tiếp theo trong `git bash`

## Cài Đặt

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Định Cấu Hình Mã Thông Báo Dịch

Truy cập Nhấp để sao chép mã thông báo [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Create `~/.config/i18n.site.yml` dán nội dung đã sao chép vào đó, nội dung như sau:

```
token: YOUR_API_TOKEN
```

Ngoài ra, bạn [i18n.site/payBill](//i18n.site/payBill) ràng buộc thẻ tín dụng để thanh toán (không cần nạp tiền, website sẽ tự động trừ phí theo mức sử dụng, [xem trang chủ để biết giá](/#price) ).

## Sử Dụng

### Dự Án Demo

Vui lòng tham khảo dự [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) demo để tìm hiểu cấu hình dịch `i18`

Người dùng ở Trung Quốc có thể sao chép [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Sau khi nhân bản, hãy vào thư mục và chạy `i18`

### Cấu Trúc Thư Mục

Cấu trúc thư mục kho mẫu như sau

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Thư mục `en` chứa các tệp demo đã dịch, đây chỉ là một ví dụ và có thể bị xóa.

### Chạy Dịch

Nhập thư mục và chạy `i18`

### Thêm Tập Tin Vào Kho Lưu Trữ

Ngoài việc dịch, chương trình cũng sẽ tạo ra các tệp sau, vui lòng thêm chúng vào kho lưu trữ.

```
.i18n/hash
.i18n/cache/.gitignore
```

Trong số đó, nội dung : `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Điều này có nghĩa là bỏ qua tất cả các tệp trong thư mục `.i18n/cache/` (ngoại trừ `.i18n/cache/.gitignore` ).

Nếu phần mềm kiểm soát phiên bản của bạn không có `git` , vui lòng bỏ qua nó theo cấu hình này.

## Tập Tin Cấu Hình

`.i18n/conf.yml` là file cấu hình của công cụ dịch dòng lệnh `i18`

Nội dung như sau:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Ngôn Ngữ Nguồn &

Trong tệp cấu hình, cấp dưới của `fromTo`

`en` là ngôn ngữ nguồn, `zh ja ko de fr` là ngôn ngữ đích của bản dịch.

Mã ngôn ngữ xem [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Ví dụ bạn muốn dịch tiếng Trung sang tiếng Anh thì viết lại dòng này `zh: en`

Nếu bạn muốn dịch sang tất cả các ngôn ngữ được hỗ trợ, vui lòng để trống sau `:` Ví dụ

```
i18n:
  fromTo:
    en:
```

### Bỏ Qua Tập Tin

Theo mặc định, tất cả các tệp bắt đầu bằng `.md` và `.yml` trong thư mục ngôn ngữ nguồn sẽ được dịch.

Nếu bạn muốn bỏ qua một số tệp nhất định và không dịch chúng (chẳng hạn như các bản nháp chưa hoàn thành), bạn có thể sử dụng cấu hình trường `ignore`

`ignore` Sử dụng cú pháp tương tự như `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Ví dụ: trong tệp cấu hình ở trên `_* ` nghĩa là các tệp bắt đầu bằng `_` sẽ không được dịch.

## Quy Tắc Dịch Thuật

### Người Biên Tập Bản Dịch Không Được Thêm Bớt Dòng

Bản dịch có thể chỉnh sửa được. Sửa đổi văn bản gốc và dịch lại bằng máy, những sửa đổi thủ công đối với bản dịch sẽ không bị ghi đè (nếu đoạn này của văn bản gốc chưa được sửa đổi).

Nhưng xin lưu ý rằng các dòng của bản dịch và văn bản gốc phải tương ứng với nhau. Tức là không thêm bớt dòng khi biên dịch bản dịch. Nếu không, nó sẽ gây nhầm lẫn trong bộ đệm chỉnh sửa bản dịch.

Nếu có sự cố xảy ra, vui lòng tham khảo [Câu hỏi thường gặp để biết giải pháp.](/i18/qa#H1)

### `YAML` Dịch

Công cụ dòng lệnh sẽ tìm tất cả các tệp kết thúc bằng `.yml` trong thư mục tệp ngôn ngữ nguồn và dịch chúng.

* Lưu ý rằng hậu tố tên tệp phải là `.yml` (không phải `.yaml` ).

Công cụ này chỉ dịch các giá trị từ điển trong `.yml` , không dịch các khóa từ điển.

Ví dụ `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

sẽ được dịch là `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Bản dịch của `YAML` cũng có thể được sửa đổi thủ công (nhưng không thêm hoặc xóa các phím hoặc dòng trong bản dịch).

Dựa trên `YAML` Translation, bạn có thể dễ dàng xây dựng các giải pháp quốc tế cho nhiều ngôn ngữ lập trình khác nhau.

## Cách Sử Dụng Nâng Cao

### Thư Mục Con Dịch

Miễn là bạn tạo `.i18n/conf.yml` (không cần phải bắt đầu từ mẫu dự án demo mỗi lần), `i18` sẽ hoạt động tốt.

Công cụ dòng lệnh sẽ tìm cấu hình `.i18n/conf.yml` trong tất cả các thư mục con và dịch nó.

Các dự án sử dụng kiến ​​trúc [monorepo](//monorepo.tools) có thể chia các tệp ngôn ngữ thành các thư mục con.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Thư Mục Cài Đặt Tùy Chỉnh

Nó sẽ được cài đặt vào `/usr/local/bin`

Nếu `/usr/local/bin` không có quyền ghi, nó sẽ được cài đặt vào `~/.bin` .

Đặt các biến môi trường `TO` Bạn có thể xác định thư mục cài đặt, ví dụ :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
