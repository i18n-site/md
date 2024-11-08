# Cài Đặt Và Sử Dụng

## windows Đầu Tiên Cài Đặt git bash

windows Hệ thống, vui lòng [nhấp vào đây để tải xuống và cài đặt `git bash` trước](https://git-scm.com/download/win) .

Chạy các hoạt động tiếp theo trong `git bash` .

## Cài Đặt

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Định Cấu Hình Mã Thông Báo Dịch

Truy cập Nhấp để sao chép mã thông báo [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Tạo `~/.config/i18n.site.yml` , dán nội dung đã sao chép vào đó, nội dung như sau:

```
token: YOUR_API_TOKEN
```

Ngoài ra, bạn cần ràng buộc thẻ tín dụng thanh toán trong [i18n.site/payBill](//i18n.site/payBill) (Không cần nạp tiền, website sẽ tự động trừ phí theo mức sử dụng, [xem trang chủ để biết giá](/#price) ).

## Sử Dụng

### Dự Án Demo

Vui lòng tham khảo dự án demo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) tìm hiểu cấu hình của `i18` dịch.

Người dùng ở Trung Quốc có thể sao chép [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Sau khi nhân bản, nhập thư mục và chạy `i18` để hoàn thành bản dịch.

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

Các file demo đã dịch trong thư mục `en` chỉ là ví dụ và có thể xóa đi.

### Chạy Dịch

Nhập thư mục và chạy `i18` để dịch.

Ngoài bản dịch, chương trình cũng sẽ tạo thư mục `.i18n/data` , vui lòng thêm nó vào kho lưu trữ.

Sau khi dịch tệp mới, một tệp dữ liệu mới sẽ được tạo trong thư mục này. Hãy nhớ nối thêm `git add . ` .

## Tệp Cấu Hình

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

Trong tệp cấu hình, cấp dưới của `fromTo` :

`en` là ngôn ngữ nguồn, `zh ja ko de fr` là ngôn ngữ đích của bản dịch.

Mã ngôn ngữ xem [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Ví dụ bạn muốn dịch tiếng Trung sang tiếng Anh thì viết lại dòng này `zh: en` .

Nếu bạn muốn dịch sang tất cả các ngôn ngữ được hỗ trợ, vui lòng để trống sau `:` . Ví dụ

```
i18n:
  fromTo:
    en:
```

Bạn có thể định cấu hình `fromTo` khác nhau cho các thư mục con khác nhau / Một minh họa được viết như sau :

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

Trong bảng cấu hình này, ngôn ngữ nguồn của bản dịch danh mục `blog` là `zh` và ngôn ngữ nguồn của bản dịch danh mục `blog/your_file_name.md` là `ja` .

### Hình Ảnh/Liên Kết Đa Ngôn Ngữ

Khi URL trong hình ảnh và liên kết trong `replace:` và `MarkDown` (và thuộc tính `src` và `href` của nhúng `HTML` ) được định cấu hình ở `.i18n/conf.yml` với tiền tố này, mã ngôn ngữ nguồn trong URL sẽ được thay thế bằng mã ngôn ngữ của bản dịch ( [ngôn ngữ danh sách mã](/i18/LANG_CODE) ).

Ví dụ: cấu hình của bạn như sau:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` là từ điển, khóa là tiền tố URL cần thay thế và giá trị là quy tắc thay thế.

Ý nghĩa của việc thay thế quy tắc `ko de uk>ru zh-TW>zh >en` ở trên là `ko de` sử dụng hình ảnh của mã ngôn ngữ của mình, `zh-TW` và `zh` sử dụng hình ảnh của `zh` , `uk` sử dụng hình ảnh của `ru` và các ngôn ngữ khác (như `ja` ) sử dụng hình ảnh mặc định là `en` .

Ví dụ: tệp nguồn tiếng Pháp ( `fr` ) của `MarkDown` như sau :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Tệp tiếng Anh ( `en` ) được dịch và tạo như sau :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Ở đây, `/en/` trong mã ngôn ngữ nguồn được thay thế bằng `/zh/` trong ngôn ngữ đích.

Lưu ý : Phải có số `/` trước và sau mã ngôn ngữ của văn bản được thay thế trong URL.

> [!TIP]
> Nếu `- /` được định cấu hình trong `url:` , chỉ các đường dẫn tương đối mới được khớp, nhưng các URL bắt đầu bằng `//` sẽ không khớp.
>
> Nếu một số liên kết của tên miền muốn được thay thế và một số liên kết không muốn bị thay thế, bạn có thể sử dụng các tiền tố khác nhau như `[x](//x.com/en/)` và `[x](https://x.com/en/)` để phân biệt.

### Bỏ Qua Tập Tin

Theo mặc định, tất cả các tệp bắt đầu bằng `.md` và `.yml` trong thư mục ngôn ngữ nguồn sẽ được dịch.

Nếu bạn muốn bỏ qua một số tệp nhất định và không dịch chúng (chẳng hạn như các bản nháp chưa hoàn thành), bạn có thể định cấu hình nó bằng trường `ignore` .

`ignore` sử dụng [globset](https://docs.rs/globset/latest/globset/#syntax) pháp giống như tệp `.gitignore` .

Ví dụ: `_* ` trong tệp cấu hình ở trên có nghĩa là các tệp bắt đầu bằng `_` sẽ không được dịch.

## Quy Tắc Dịch Thuật

### Người Dịch Không Được Thêm Bớt Dòng

Bản dịch có thể chỉnh sửa được. Sửa đổi văn bản gốc và dịch lại bằng máy, những sửa đổi thủ công đối với bản dịch sẽ không bị ghi đè (nếu đoạn này của văn bản gốc chưa được sửa đổi).

> [!WARN]
> Phải có sự tương ứng một-một giữa các dòng của bản dịch và văn bản gốc. Tức là không thêm bớt dòng khi biên dịch bản dịch. Nếu không, nó sẽ gây nhầm lẫn trong bộ đệm chỉnh sửa bản dịch.

Nếu có sự cố xảy ra, vui lòng tham khảo [Câu hỏi thường gặp để biết giải pháp.](/i18/qa#H1)

### `YAML` Bản Dịch

Công cụ dòng lệnh sẽ tìm tất cả các tệp kết thúc bằng `.yml` trong thư mục tệp ngôn ngữ nguồn và dịch chúng.

* Lưu ý rằng hậu tố tên tệp phải là `.yml` (không phải `.yaml` ).

Công cụ chỉ dịch các giá trị từ điển về `.yml` chứ không dịch các khóa từ điển.

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

Bản dịch số `YAML` cũng có thể được sửa đổi thủ công (nhưng không được thêm hoặc xóa phím hoặc dòng trong bản dịch).

Dựa trên `YAML` bản dịch, bạn có thể dễ dàng xây dựng các giải pháp quốc tế cho nhiều ngôn ngữ lập trình khác nhau.

## Cách Sử Dụng Nâng Cao

### Thư Mục Con Dịch

Miễn là `.i18n/conf.yml` được tạo (không cần phải bắt đầu từ mẫu dự án demo mỗi lần), `i18` sẽ hoạt động tốt.

Công cụ dòng lệnh sẽ tìm thấy `.i18n/conf.yml` cấu hình trong tất cả các thư mục con và dịch chúng.

Các dự án sử dụng kiến trúc [monorepo](//monorepo.tools) có thể chia các tệp ngôn ngữ thành các thư mục con.

![](https://p.3ti.site/1719910016.avif)

### Thư Mục Cài Đặt Tùy Chỉnh

Nó sẽ được cài đặt về `/usr/local/bin` theo mặc định.

Nếu `/usr/local/bin` không có quyền ghi thì nó sẽ được cài đặt thành `~/.bin` .

Đặt biến môi trường `TO` có thể xác định thư mục cài đặt, ví dụ :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```