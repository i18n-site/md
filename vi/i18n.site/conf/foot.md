# Chân Trang

Vẫn lấy dự án demo làm ví dụ, `.i18n/htm/foot.pug` trong thư mục `md` xác định phần chân trang của trang web.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) là ngôn ngữ mẫu tạo ra `HTML` 's.

[➔ Bấm vào đây để học ngữ pháp pug](https://pugjs.org)

**Đừng viết `css` và `js` vào `foot.pug`** , nếu không sẽ xảy ra lỗi.

Vui lòng tham khảo phần sau, kiểu được viết vào số `.css` tương ứng và đạt được sự tương tác bằng cách tạo các thành phần web.

## Kiểu Chân Trang

Có ba tệp `css` dưới `md/.i18n/htm` trong dự án demo.

* `foot.css` :
* `import.css` : 1 Kiểu mặc `i18n.site` cho toàn bộ trang web
* `conf.css` biểu tượng và phông chữ chân :

### Phông Chữ Biểu Tượng

Biểu tượng chân trang được tạo bằng cách tạo phông chữ có tên `F` iconfont.cn ( [Phiên bản tiếng Anh](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Vui lòng tạo phông chữ biểu tượng của riêng bạn nếu cần và thay thế cấu hình sau bằng `conf.css` :

```
@font-face {
  font-family: "F";
  src: url(//p.3ti.site/ico1.woff2) format("woff2");
}

#Ft>b>a.site {
  background: url("//p.3ti.site/i18n.svg") 0 0 / cover;
  display: block;
  height: 24px;
  opacity: 0.8;
  width: 115px;
  flex-shrink: 0;
}
```

Vui lòng không tham khảo trực tiếp tệp phông chữ của iconfont.cn vì nó không thể tải được trên trình duyệt safari.

## Thành Phần Web

Bạn không thể viết `js` trong `foot.pug` Nếu cần tương tác, vui lòng tùy chỉnh thành phần web.

[Một thành phần web](https://www.freecodecamp.org/news/build-your-first-web-component/) có thể được xác định bằng `md/.i18n/htm/index.js` và sau đó được sử dụng trong `foot.pug` .

Thật dễ dàng để tạo các thành phần web, chẳng hạn như `<x-img>` tùy chỉnh0.

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

## Chân Trang Đa Ngôn Ngữ

Mã trong `.i18n/htm/foot.pug` như sau :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Ở đây `${I18N.C}` tương ứng với `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Sử dụng `${I18N.xxx}` tương tự như phương pháp viết này, kết hợp với `i18n.yml` , bạn có thể đạt được sự quốc tế hóa đa ngôn ngữ của phần chân trang.

Thêm `class="a"` vào liên kết là để ngăn liên kết bị chuyển thành `MarkDown` Xem :
 [➔ `YAML` : Làm cách nào để ngăn liên kết `HTML` bị chuyển thành `Markdown`](/i18/qa#H2) .