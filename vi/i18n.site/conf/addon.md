# Trình Cắm Thêm

Các plug-in có thể được cấu hình trong `.i18n/conf.yml` , chẳng hạn như:

```yml
addon:
  - i18n.addon/toc
```

## Trình Cắm Chính Thức

* `i18n.addon/toc` : mục thư mục
  Tạo chỉ mục thư mục `json` dựa trên `TOC` , được bật theo mặc định

* `i18n.addon/mouse` hiệu ứng :

## Quy Ước Tên Tệp

Plug-in đều là gói `npm` .

Gói tương ứng với `i18n.addon/toc` ở trên là [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Plugin sử dụng phiên bản mới nhất theo mặc định và kiểm tra cập nhật hàng tuần.

Nếu bạn muốn sửa phiên bản, bạn có thể viết `i18n.addon/toc@0.1.3` .

Dòng lệnh dịch `i18n.site` sẽ cài đặt tệp quy ước của gói plug-in và sau đó thực thi nó.

Tên tập tin đã thống nhất như sau

### htmIndex.js

`htmIndex.js` sẽ được chèn vào cuối `.i18n/htm/index.js` .

Trong đó `__CONF__` sẽ được thay thế bằng tên của cấu hình hiện tại (chẳng hạn như `dev` hoặc `ol` ).

### afterTran.js

Nó sẽ được gọi sau khi quá trình dịch hoàn tất và các tham số được truyền vào như sau.

* `lang_li` Danh sách ngôn : , ngôn ngữ đầu tiên là ngôn ngữ nguồn
* `changed` tập tin đã sửa :
* `root` : Thư mục gốc của dự án

Giá trị trả về là một từ điển, chẳng hạn như

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` là danh sách tệp đầu ra, `path` là đường dẫn tệp và `txt` là nội dung tệp.

## Chức Năng Tích Hợp

Thời gian chạy `js` tích hợp dựa trên sự phát triển thứ cấp của [boa](https://github.com/boa-dev/boa) và các hàm tích hợp như sau :

* `wPath(path, txt)` : Ghi vào tập tin
* `rTxt(path)` : Đọc tệp văn bản
* `rBin(path)` : Đọc tệp nhị phân
* `rDir(dirpath)` : Đọc thư mục, giá trị trả về là mảng : , danh sách file

## Hướng Dẫn Phát Triển

Phát triển plug-in có thể là một tài liệu tham khảo [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)