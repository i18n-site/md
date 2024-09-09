# Trình cắm

Trong `.i18n/conf.yml` có thể cấu hình trình cắm, ví dụ như:

```yml
addon:
  - i18n.addon/toc
```

## Trình cắm chính thức

* `i18n.addon/toc` : mục lục chỉ mục
  Đ根据 `TOC` tạo chỉ mục mục lục `json`, mặc định được启用

* `i18n.addon/mouse` : hiệu ứng chuột

## Quy tắc đặt tên tệp

Trình cắm đều là các gói `npm`.

Gói tương ứng với `i18n.addon/toc` ở trên là [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc).

Trình cắm mặc định sử dụng phiên bản mới nhất và kiểm tra cập nhật hàng tuần.

Nếu muốn khóa phiên bản, có thể viết `i18n.addon/toc@0.1.3`.

Câu lệnh dịch `i18n.site` sẽ cài đặt các tệp quy ước của gói plug-in và sau đó thực thi.

Tên tệp quy ước như sau

### htmIndex.js

`htmIndex.js` sẽ được chèn vào cuối `.i18n/htm/index.js`.

Trong đó `__CONF__` sẽ được thay thế bằng tên của cấu hình hiện tại (ví dụ như `dev` hoặc `ol`).

### afterTran.js

Nó sẽ được gọi sau khi dịch xong, với các tham số được truyền vào như sau.

* `lang_li` : danh sách ngôn ngữ, ngôn ngữ đầu tiên là ngôn ngữ nguồn
* `changed` : các tệp đã thay đổi
* `root` : thư mục gốc của dự án

Giá trị trả về là một từ điển, ví dụ như

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` là danh sách tệp đầu ra, `path` là đường dẫn tệp, `txt` là nội dung tệp.

## Hàm内置

Thời gian chạy `js` tích hợp được phát triển dựa trên [boa](https://github.com/boa-dev/boa), các hàm tích hợp trong đó bao gồm:

* `wPath(path, txt)` : ghi vào tệp
* `rTxt(path)` : đọc tệp văn bản
* `rBin(path)` : đọc tệp nhị phân
* `rDir(dirpath)` : đọc thư mục, giá trị trả về là một mảng: danh sách thư mục, danh sách tệp

## Hướng dẫn phát triển

Phát triển plug-in có thể tham khảo [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)