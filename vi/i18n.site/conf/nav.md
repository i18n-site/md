# Điều Hướng Tùy Chỉnh

Hãy lấy trang web [i18n-demo.github.io](//i18n-demo.github.io) làm ví dụ để giải thích cách tùy chỉnh điều hướng.

![](https://p.3ti.site/1731036697.avif)

Các file tương ứng với các vùng được đánh số trong hình trên như sau:

1. Còn lại [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Đúng [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) là ngôn ngữ mẫu tạo ra `HTML` 's.

[➔ Bấm vào đây để học ngữ pháp pug](https://pugjs.org)

Chuỗi định dạng `${I18N.sponsor}` được sử dụng trong tệp để triển khai quốc tế hóa và nội dung của nó sẽ được thay thế bằng văn bản tương ứng trong [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) trong thư mục ngôn ngữ nguồn.

**Đừng viết `css` và `js` vào `pug`** , nếu không sẽ xảy ra lỗi.

Các kiểu được viết thành `css` và đạt được sự tương tác bằng cách tạo các thành phần web.

Ở đây, tệp tương ứng với kiểu của thanh [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css) hướng là :