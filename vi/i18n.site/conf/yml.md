# .i18n/conf.yml

File cấu hình cho `i18n.site` là `.i18n/conf.yml` và nội dung như sau :

```yaml
i18n:
  fromTo:
    en:
upload:
  ext:
    - md
nav:
  - i18n: home
    use: Toc
    url: /
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
  - i18n: blog
    use: Blog
addon:
  - i18n.addon/toc
```

Trong số đó, mục cấu hình `upload` đến `ext:` nghĩa là chỉ có `.md` được tải lên khi xuất bản.

## Điều Hướng Hàng Đầu

`nav:` tùy chọn cấu hình, tương ứng với menu điều hướng ở đầu trang chủ.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Trong đó, `i18n: home` tương ứng với `home: Home` trong `en/i18n.yml` (trong đó `en` là ngôn ngữ nguồn của bản dịch dự án).

Nội dung `en/i18n.yml` là văn bản hiển thị trong menu điều hướng, nó sẽ được dịch theo `fromTo` trong cấu hình, ví dụ dịch sang `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Sau khi dịch xong, bạn có thể sửa đổi giá trị của bản dịch `yml` , nhưng không được thêm hoặc xóa khóa của bản dịch `yml` .

### `use: Toc` Tài Liệu Đơn Có Dàn Ý

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` có nghĩa là hiển thị bằng mẫu `Toc` , tức là hiển thị một mẫu `Markdown` .

`TOC` là tên viết tắt của `Table of Contents` Khi mẫu này được hiển thị, đường viền của `Markdown` tệp này sẽ được hiển thị ở thanh bên.

`url:` đại diện cho đường dẫn file `Markdown` ( `/` tương ứng với thư mục gốc `/README.md` , tên file này yêu cầu tiền tố viết hoa và hậu tố viết thường).

### `use: Md` Tài Liệu Đơn Không Có Phác Thảo

Mẫu `Md` và mẫu `Toc` giống nhau và cả hai đều được sử dụng để hiển thị một tệp `Markdown` . Nhưng mẫu `Md` không hiển thị đường viền ở thanh bên.

Bạn có thể sửa đổi `use: Toc` trong cấu hình trên thành `use: Md` , chạy lại `i18n.site` trong thư mục `md` , sau đó truy cập URL xem trước quá trình phát triển để quan sát các thay đổi trên trang chủ.

### `use: Blog` Mẫu Blog

Mẫu blog hiển thị danh sách các bài viết (tiêu đề và tóm tắt) theo thứ tự thời gian xuất bản.

[→ Click vào đây để tìm hiểu cấu hình cụ thể](/i18n.site/conf/blog)

### `use: Doc` Mẫu Tài Liệu Tập Tin

Trong tập tin cấu hình:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Cho biết sử dụng `Doc` để hiển thị mẫu.

`Doc` hỗ trợ tích hợp nhiều `MarkDown` để tạo đề cương tài liệu cho một hoặc nhiều dự án.

#### Nhiều Dự Án Và Nhiều Tập Tin

Cấu hình `.i18n/conf.yml` trong `i18n:doc` là chế độ kết xuất nhiều tệp đa dự án.

Ở đây, `menu: NB demo1,demo2` , có nghĩa là sử dụng mẫu `NB` để hiển thị menu thả xuống.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , là viết tắt của `Name Breif` , có nghĩa là menu thả xuống có thể hiển thị tên và khẩu hiệu của dự án.

`NB` được theo sau bởi tham số `demo1,demo2` được truyền cho nó.

Lưu ý : ** Không được có dấu cách ** trước và sau dấu phẩy `,` trong `demo1,demo2` .

Tệp chỉ mục thư mục tương ứng cho các tham số trên là:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Dự Án Đơn Nhiều Tập Tin

Nếu bạn chỉ có một dự án, bạn có thể cấu hình nó như sau.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Dự án đơn lẻ có nhiều tệp không hỗ trợ định cấu hình `url` làm đường dẫn gốc `/`
> Nếu __conf.yml → nav:__ Không có đường dẫn gốc nào được định cấu hình, khi truy cập vào trang chủ của trang web, nó sẽ tự động được ghi lại vào URL đầu tiên theo cấu hình `nav:` .
> Thiết kế này nhằm phân biệt tốt hơn các tài liệu dự án, blog và các nội dung khác thông qua các thư mục.
> Nên sử dụng một tệp và một trang duy nhất làm trang chủ.

> [!TIP]
> Nếu `url` không được ghi, `url` mặc định có giá trị là `i18n` Quy tắc này cũng có hiệu lực đối với các mẫu khác.

#### Mục Lục Mục Lục TOC

Nếu mẫu `use: Doc` được bật trong cấu hình, vui lòng bật plug-in `i18n.addon/toc` trong `.i18n/conf.yml` Cấu hình như sau :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` sẽ tự động cài đặt và thực thi plug-in này, đọc `TOC` tệp chỉ mục thư mục và tạo `json` bản phác thảo thư mục.

Nếu là một dự án có nhiều file thì thư mục gốc `TOC` là thư mục tương ứng với `url:` trong thư mục ngôn ngữ nguồn. Ví dụ: nếu ngôn ngữ nguồn là tiếng Trung Quốc: file tương ứng với `url: flashduty` là `zh/flashduty/TOC` .

Nếu là nhiều dự án và nhiều file thì không cần cấu hình `url:` Thư mục gốc của `TOC` là thư mục tương ứng với giá trị của `i18n` .

##### Giải Thích Nội Dung Chi Tiết

`en/blog/TOC` dung như sau :

```
README.md

news/README.md
  news/begin.md
```

##### Sử Dụng Thụt Lề Để Biểu Thị Mức Độ

`README.md` ở hàng đầu tiên của `en/blog/TOC` ở trên tương ứng với `i18n.site` trong hình bên dưới, chính là tên dự án.

Hai dòng tiếp theo được hiển thị trong ảnh chụp màn hình bên dưới.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` tương ứng với `News` ,
`news/begin.md` tương ứng với `Our Product is Online !`

`TOC` được thụt lề để biểu thị mối quan hệ phân cấp của đường viền, hỗ trợ thụt lề nhiều cấp và nhận xét dòng bắt đầu bằng `# ` .

##### Cấp Độ Cha Mẹ Chỉ Viết Tiêu Đề Chứ Không Viết Nội Dung.

Khi có nhiều cấp độ thụt lề, cấp độ gốc chỉ viết tiêu đề chứ không viết nội dung. Nếu không, kiểu chữ sẽ bị rối tung.

##### Dự Án README.md

Nội dung có thể được viết ở mục `README.md` , chẳng hạn như `en/demo2/README.md` .

Lưu ý nội dung file này không hiển thị dàn ý mục lục nên nên hạn chế độ dài và viết phần giới thiệu ngắn gọn.

###### Khẩu Hiệu Dự Án

Bạn có thể thấy `Your Project slogan` `Deme Two` có dòng giới thiệu dự án bên dưới menu thả xuống và tên dự án phác thảo danh mục :

![](https://p.3ti.site/1721276842.avif)

Điều này tương ứng với hàng đầu tiên của `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Nội dung sau dấu hai chấm đầu tiên của tiêu đề cấp `:` của dự án `README.md` sẽ được coi là khẩu hiệu của dự án.

Người dùng từ Trung Quốc, Nhật Bản và Hàn Quốc, xin lưu ý rằng bạn nên sử dụng dấu hai chấm nửa độ rộng `:` thay vì dấu hai chấm có chiều rộng đầy đủ.

##### Làm Thế Nào Để Di Chuyển TOC Với Số Lượng Lớn?

`TOC` tập tin cần được đặt trong thư mục của ngôn ngữ nguồn.

Ví dụ: nếu ngôn ngữ nguồn là tiếng Trung thì `TOC` ở trên là `zh/blog/TOC` .

Nếu ngôn ngữ nguồn được sửa đổi, bạn cần di chuyển hàng loạt các tệp `TOC` của một ngôn ngữ nhất định trong dự án sang ngôn ngữ khác.

Bạn có thể tham khảo các lệnh sau:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Vui lòng sửa đổi `en/` và `zh/` trong lệnh trên thành mã ngôn ngữ của bạn.

### Tải Mặc Định Không Có Đường Dẫn Cấu Hình

Đối với một đường dẫn nhất định đang được truy cập, nếu tiền tố đường dẫn không được định cấu hình trong `nav:` , tệp `MarkDown` tương ứng với đường dẫn sẽ được tải theo mặc định và hiển thị bằng mẫu `Md` .

Ví dụ: nếu `/test` được truy cập và `nav:` được định cấu hình không có tiền tố của đường dẫn này và ngôn ngữ duyệt hiện tại là tiếng Anh (mã `en` ), `/en/test.md` sẽ được tải theo mặc định và hiển thị bằng mẫu `Md` .

Nếu `/en/test.md` tập tin này không tồn tại, trang `404` mặc định sẽ được hiển thị.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">