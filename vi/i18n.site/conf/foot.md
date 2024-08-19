# Chân trang

Vẫn lấy ví dụ từ dự án trình diễn, tệp `.i18n/htm/foot.pug` trong thư mục `md` định nghĩa chân trang của website.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) là một ngôn ngữ mẫu để tạo ra `HTML`.

[➔ Nhấp vào đây để học cú pháp của pug](https://pugjs.org)

**Đừng viết `css` và `js` trong `foot.pug`**, nếu không sẽ xảy ra lỗi.

Vui lòng tham khảo phần sau, các样式 được viết trong tệp `.css` tương ứng, và tương tác được thực hiện bằng cách tạo các thành phần trang web.

## Kiểu dáng chân trang

Trong dự án trình diễn, thư mục `md/.i18n/htm` có ba tệp `css`.

* `foot.css`: Kiểu dáng chân trang
* `import.css`: `i18n.site` là样式 mặc định cho toàn bộ trang web
* `conf.css`: Biểu tượng và phông chữ cho chân trang

### Biểu tượng phông chữ

Biểu tượng chân trang được tạo ra từ phông chữ có tên `F` trên iconfont.cn ([phiên bản tiếng Anh](https://www.iconfont.cn/?lang=en-us) / [phiên bản tiếng Trung](https://www.iconfont.cn/?lang=zh)).

Vui lòng tạo biểu tượng phông chữ của riêng bạn nếu cần và thay thế cấu hình sau trong `conf.css`:

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Thành phần trang web

Không được viết `js` trong `foot.pug`; nếu cần tương tác, vui lòng tạo thành phần trang web tùy chỉnh.

Bạn có thể định nghĩa [thành phần trang web](https://www.freecodecamp.org/news/build-your-first-web-component/) trong `md/.i18n/htm/index.js`, sau đó sử dụng thành phần này trong `foot.pug`.

Tạo thành phần trang web rất đơn giản, ví dụ như thẻ tùy chỉnh `<x-img>`.

```js
customElements.define(
  'x-img',
  class extends HTMLElement {
    constructor() {
      super();
      var img = document.createElement('img');
      img.src = '//p.3ti.site/i18n.svg';
      img.style = "height:99px;width:99px;";
      this.append(img);
    }
  }
)
```

## Chân trang đa ngôn ngữ

Mã trong `.i18n/htm/foot.pug` như sau:

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Ở đây `${I18N.C}` tương ứng với phần trong `en/i18n.yml`:

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Sử dụng `${I18N.xxx}` theo cách này, kết hợp với `i18n.yml`, để thực hiện quốc tế hóa đa ngôn ngữ cho chân trang.

Thêm `class="a"` vào liên kết để tránh liên kết bị chuyển đổi thành định dạng `Markdown`, xem thêm:
 [➔ `YAML`: Làm thế nào để tránh liên kết `HTML` bị chuyển đổi thành `Markdown`](/i18/qa#H2).