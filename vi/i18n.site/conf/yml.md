# .i18n/conf.yml

`i18n.site` Tệp cấu hình là `.i18n/conf.yml` .

Ngoại trừ cài đặt `ignore:` và `i18n:` của [`i18`](/i18) , tệp cấu hình như sau:

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
```

Trong số đó, mục cấu hình `ext:` của `upload` có nghĩa là chỉ `.md` sẽ được tải lên khi xuất bản.

## Điều Hướng Hàng Đầu

tùy chọn cấu hình `nav:` , tương ứng với menu điều hướng ở đầu trang chủ.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Trong số đó, `i18n: home` tương ứng với `en/i18n.yml`中`home: Home` .

`en/i18n.yml` sẽ được dịch sang nhiều ngôn ngữ, chẳng hạn như `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Sau khi dịch xong, bạn có thể sửa đổi giá trị của `yml` trong bản dịch nhưng không được thêm hoặc xóa key của dịch `yml` .

### `use: Toc` , Mẫu Tệp Đơn (Có Phác Thảo)

Đang định cấu : `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` có nghĩa là sử dụng kết xuất `Toc` , hiển thị một mẫu `Markdown` duy nhất.

`TOC` là tên viết tắt của `Table of Contents` . Khi mẫu này được hiển thị, đường viền của tệp `Markdown` này sẽ được hiển thị trong thanh bên.

`url:` đại diện cho đường dẫn tệp của `Markdown` ( `/` tương ứng với thư mục gốc `/README.md` , tên tệp này yêu cầu tiền tố viết hoa và hậu tố chữ thường).

### `use: Md` , Mẫu Tệp Đơn (Không Có Phác Thảo)

Mẫu `Md` giống như `Toc` , cả hai đều được sử dụng để hiển thị một tệp `Markdown` . Tuy nhiên `Md` mẫu không hiển thị đường viền trong thanh bên.

Bạn có thể sửa đổi `use: Toc` trong cấu hình ở trên thành `use: Md` , chạy lại `i18n.site` trong thư mục `md` và sau đó truy cập URL xem trước quá trình phát triển để quan sát các thay đổi trên trang chủ.

### Tải Mặc Định Không Có Đường Dẫn Cấu Hình

Nếu tiền tố đường dẫn của một đường dẫn nhất định đang được truy cập không được định cấu hình trong `nav:` thì tệp `MarkDown` tương ứng với đường dẫn sẽ được tải theo mặc định và được hiển thị bằng mẫu `Md` .

Ví dụ: nếu bạn truy cập `/test` và `nav:` được định cấu hình không có đường dẫn này và ngôn ngữ trang là tiếng Anh (mã `en` ), thì mẫu sẽ được tải `/en/test.md` và hiển thị bằng `Md` theo mặc định.

`/en/test.md` tệp này không tồn tại, trang `404` mặc định sẽ được hiển thị.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Mẫu Nhiều Tệp

Trong tập tin cấu hình:

```
  - i18n: blog
    use: Doc
```

Cho biết việc sử dụng `Doc` để hiển thị mẫu.

Mẫu `Doc` hỗ trợ tích hợp nhiều `MarkDown` để tạo đề cương tài liệu cho một hoặc nhiều dự án.

#### Dự Án Đơn (Nhiều Tệp)

`blog` ở trên là chế độ một dự án của `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Khi url Trống, Nó Mặc Định Có Giá Trị Là i18n

Nếu bạn không viết `url` , `url` giá trị của `i18n` .

Cách viết trên tương đương với việc có `url: blog` và file tương ứng của nó là `en/blog/TOC` .

#### Nhiều Dự Án

`.i18n/conf.yml` Cấu hình trong `i18n:doc` là chế độ nhiều dự án.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Ở đây, `menu: NB demo1,demo2` có nghĩa là sử dụng `NB` để hiển thị menu thả xuống.

`NB` , là tên viết tắt của `Name Breif` , cho biết menu thả xuống có thể hiển thị tên và khẩu hiệu của dự án.

`NB` được theo sau bởi tham số `demo1,demo2` được truyền cho nó.
Lưu ý rằng không được có dấu cách ** trước và sau dấu phẩy `,` `demo1,demo2` : **

Đối với các tham số trên, file chỉ mục thư mục tương ứng là:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Mục Lục Mục Lục TOC

`i18n.site` Sẽ thực thi `js` plugin `.i18n/hook/after.tran/TOC.js` trong kho demo để đọc tệp chỉ mục thư mục `doc` tương ứng với cấu hình mẫu `TOC` để tạo `json` của phác thảo thư mục.

Nếu bạn sử dụng mẫu `doc` , bạn phải có plugin này.

Nếu bạn khởi tạo dự án `i18n.site` từ một thư mục trống, hãy nhớ sao chép `.i18n` trong dự án demo vào thư mục của bạn.

`Doc` Mẫu sẽ hiển thị phác thảo mục lục dựa trên `json` được tạo.

##### Giải Thích Nội Dung Chi Tiết

`en/blog/TOC` Nội dung như sau :

```
README.md

news/README.md
  news/begin.md
```

##### Sử Dụng Thụt Lề Để Biểu Thị Mức Độ

Ở trên `en/blog/TOC` `README.md` ở dòng đầu tiên tương ứng với `i18n.site` trong hình bên dưới, là tên dự án.

Hai dòng tiếp theo được hiển thị trong ảnh chụp màn hình bên dưới.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` tương ứng với `News` ,
`news/begin.md` tương ứng với `Our Product is Online !`

`TOC` Tệp được thụt lề để biểu thị mối quan hệ phân cấp của đường viền và hỗ trợ thụt lề đa cấp.

##### Cấp Độ Cha Mẹ Chỉ Viết Tiêu Đề Chứ Không Viết Nội Dung.

Khi có nhiều cấp độ thụt lề, cấp độ gốc chỉ viết tiêu đề chứ không viết nội dung. Nếu không, kiểu chữ sẽ bị rối tung.

##### Dự Án README.md 

`README.md` dự án chẳng hạn, bạn có thể viết nội dung bằng `en/demo2/README.md` .

Lưu ý nội dung file này không hiển thị dàn ý mục lục nên nên hạn chế độ dài và viết phần giới thiệu ngắn gọn.

###### Khẩu Hiệu Dự Án

Như bạn có thể thấy, `Deme Two` Bên dưới menu thả xuống và tên dự án phác thảo danh mục, có khẩu hiệu dự `Your Project slogan` :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: tương ứng với dòng đầu tiên `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Project `README.md` Nội dung sau dấu hai chấm `:` đầu tiên trong tiêu đề cấp một sẽ được coi là khẩu hiệu của dự án.

Người dùng từ Trung Quốc, Nhật Bản và Hàn Quốc, xin lưu ý rằng bạn phải sử dụng dấu hai chấm có độ rộng nửa chiều rộng `:` vì dấu hai chấm có chiều rộng đầy đủ.

##### Làm Thế Nào Để Di Chuyển TOC Với Số Lượng Lớn?

`TOC` Tệp cần được đặt trong thư mục của ngôn ngữ nguồn.

Ví dụ: nếu ngôn ngữ nguồn là tiếng Trung thì `TOC` ở trên là `zh/blog/TOC` .

Nếu ngôn ngữ nguồn bị sửa đổi, bạn cần di chuyển hàng loạt `TOC` bằng ngôn ngữ nhất định trong dự án sang ngôn ngữ khác.

Bạn có thể tham khảo các lệnh sau:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Vui lòng sửa đổi `en/` và `zh/` trong lệnh trên thành mã ngôn ngữ của bạn.


