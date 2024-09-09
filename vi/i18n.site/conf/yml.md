# .i18n/conf.yml

Cấu hình cho `i18n.site` là `.i18n/conf.yml`.

Ngoài các cài đặt [`i18`](/i18) , `ignore:` và `i18n:` , tệp cấu hình như sau:

```yaml
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
    use: Doc
addon:
  - i18n.addon/toc
```

Trong đó, mục cấu hình `upload` đến `ext:` có nghĩa là chỉ `.md` được tải lên khi xuất bản.

## Điều hướng hàng đầu

`nav:` tùy chọn cấu hình, tương ứng với menu điều hướng ở đầu trang chủ.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Trong đó, `i18n: home` tương ứng với `home: Home` trong `en/i18n.yml`.

`en/i18n.yml` sẽ được dịch sang nhiều ngôn ngữ, chẳng hạn như `zh/i18n.yml`.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Sau khi dịch xong, bạn có thể sửa đổi giá trị của bản dịch `yml`, nhưng không được thêm hoặc xóa khóa của bản dịch `yml`.

### `use: Toc`, mẫu tệp đơn (có大纲)

`nav` cấu hình:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` có nghĩa là sử dụng mẫu `Toc` để hiển thị, tức là hiển thị một mẫu `Markdown`.

`TOC` là viết tắt của `Table of Contents`. Khi mẫu này được hiển thị, đường viền của `Markdown` tệp này sẽ được hiển thị ở thanh bên.

`url:` đại diện cho đường dẫn tệp `Markdown` ( `/` tương ứng với thư mục gốc `/README.md`, tệp này yêu cầu tiền tố viết hoa và hậu tố viết thường).

### `use: Md`, mẫu tệp đơn (không có大纲)

Mẫu `Md` và mẫu `Toc` alike, cả hai đều được sử dụng để hiển thị một tệp `Markdown`. Nhưng mẫu `Md` không hiển thị đường viền ở thanh bên.

Bạn có thể thay đổi `use: Toc` trong cấu hình trên thành `use: Md`, chạy lại `i18n.site` trong thư mục `md`, sau đó truy cập địa chỉ URL xem trước phát triển để quan sát các thay đổi trên trang chủ.

### Tải mặc định không có đường dẫn cấu hình

Nếu một đường dẫn nhất định được truy cập và tiền tố đường dẫn của nó không được định cấu hình trong `nav:`, tệp `Markdown` tương ứng với đường dẫn sẽ được tải theo mặc định và hiển thị bằng mẫu `Md`.

Ví dụ: nếu `/test` được truy cập, và `nav:` không cấu hình cho đường dẫn này, và ngôn ngữ trang là tiếng Anh (mã `en`), thì `/en/test.md` sẽ được tải theo mặc định và hiển thị bằng mẫu `Md`.

Nếu `/en/test.md` tệp này không tồn tại, trang `404` mặc định sẽ được hiển thị.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc`, mẫu nhiều tệp

Trong tệp cấu hình:

```
  - i18n: blog
    use: Doc
```

Có nghĩa là sử dụng `Doc` để hiển thị mẫu.

`Doc` mẫu hỗ trợ tích hợp nhiều tệp `Markdown` để tạo大纲 tài liệu cho một hoặc nhiều dự án.

#### Dự án đơn (nhiều tệp)

`blog` ở trên là chế độ một mục của `Doc`.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Khi url Trống, Nó Mặc Định Có Giá Trị Là i18n

Nếu không viết `url`, `url` mặc định có giá trị là `i18n`. Quy tắc này cũng áp dụng cho các mẫu khác.

Phương pháp viết ở trên tương đương với `url: blog`, tệp tương ứng là `en/blog/TOC`.

#### Nhiều dự án

`.i18n/conf.yml` cấu hình `i18n:doc` là chế độ đa dự án.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Ở đây, `menu: NB demo1,demo2`, có nghĩa là sử dụng mẫu `NB` để hiển thị menu thả xuống.

`NB` là viết tắt của `Name Brief`, có nghĩa là menu thả xuống có thể hiển thị tên và khẩu hiệu của dự án.

`NB` được theo sau bởi tham số `demo1,demo2`.
Lưu ý: ** Không có dấu cách ** trước và sau dấu phẩy `,` trong `demo1,demo2`.

Các tham số trên, tệp chỉ mục thư mục tương ứng là:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Mục Lục Mục Lục TOC

`i18n.site` sẽ thực thi plugin `js` `.i18n/hook/after.tran/TOC.js` trong kho demo để đọc tệp chỉ mục `doc` tương ứng với cấu hình `TOC` mẫu để tạo大纲 `json`.

Nếu sử dụng mẫu `doc`, bạn phải có plugin này.

Nếu bạn khởi tạo dự án `i18n.site` từ thư mục trống, hãy nhớ sao chép `.i18n` từ dự án demo vào thư mục của bạn.

Mẫu `Doc` sẽ hiển thị大纲 dựa trên `json` được tạo.

##### Giải thích nội dung chi tiết

`en/blog/TOC` nội dung như sau:

```
README.md

news/README.md
  news/begin.md
```

##### Sử dụng thụt lề để biểu thị层级

`README.md` ở hàng đầu tiên của `en/blog/TOC` tương ứng với `i18n.site`, tức là tên dự án.

Các dòng tiếp theo như hình bên dưới.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` tương ứng với `News`
`news/begin.md` tương ứng với `Our Product is Online!`

`TOC` tệp sử dụng thụt lề để biểu thị mối quan hệ phân cấp của大纲, hỗ trợ nhiều cấp thụt lề và nhận xét dòng bắt đầu bằng `#`.

##### Cấp cha mẹ chỉ viết tiêu đề, không viết nội dung

Khi có nhiều cấp thụt lề, cấp cha mẹ chỉ viết tiêu đề, không viết nội dung. Nếu không, sẽ gây rối loạn排版.

##### Dự án README.md

Nội dung có thể được viết ở `README.md` của dự án, ví dụ như `en/demo2/README.md`.

Lưu ý rằng nội dung của tệp này không hiển thị大纲, vì vậy nên viết ngắn gọn và mạch lạc.

###### Khẩu hiệu dự án

Bạn có thể thấy `Deme Two` có khẩu hiệu dự án bên dưới menu thả xuống và tên dự án大纲 `Your Project slogan`.

![](https://p.3ti.site/1721276842.avif)

Điều này tương ứng với dòng đầu tiên của `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Nội dung sau dấu hai chấm `:` của tiêu đề cấp một của `README.md` dự án sẽ được coi là khẩu hiệu của dự án.

Người dùng Trung, Nhật, Hàn lưu ý, sử dụng dấu hai chấm nửa độ rộng `:` thay vì dấu hai chấm đầy đủ.

##### Làm thế nào để di chuyển TOC với số lượng lớn?

`TOC` tệp cần được đặt trong thư mục ngôn ngữ nguồn.

Ví dụ: nếu ngôn ngữ nguồn là tiếng Trung, `TOC` ở trên là `zh/blog/TOC`.

Nếu thay đổi ngôn ngữ nguồn, cần di chuyển hàng loạt tệp `TOC` của một ngôn ngữ cụ thể sang ngôn ngữ khác.

Bạn có thể tham khảo lệnh sau:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Vui lòng sửa đổi `en/` và `zh/` trong lệnh trên thành mã ngôn ngữ của bạn.