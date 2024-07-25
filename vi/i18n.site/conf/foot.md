# Chân Trang

Vẫn lấy dự án demo làm ví dụ, phần chân trang của trang web `.i18n/htm/foot.pug` xác định trong thư mục `md` .

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) là ngôn ngữ mẫu tạo ra `HTML` .

[➔ Bấm vào đây để học ngữ pháp pug](https://pugjs.org)

**Đừng viết `css` và `js` vào `foot.pug`** , nếu không sẽ có lỗi.

Vui lòng tham khảo phần sau, kiểu được viết bằng `.css` và sự tương tác đạt được bằng cách tạo các thành phần web.

## Kiểu Chân Trang

Trong dự án demo `md/.i18n/htm` Có 3 `css` file bên dưới.

* : cách chân trang `foot.css`
* `import.css` : Kiểu mặc `i18n.site` cho toàn bộ trang web
* Biểu tượng và phông chữ chân : `conf.css`

### Phông Chữ Biểu Tượng

Biểu tượng chân trang được tạo bởi iconfont.cn ( [phiên bản tiếng Anh](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) tạo ra một phông chữ có tên `F`

Vui lòng tạo phông chữ biểu tượng của riêng bạn nếu cần và thay thế : hình sau trong `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Thành Phần Web

`foot.pug` không thể viết `js` trong đó. Nếu cần phải tương tác, vui lòng tùy chỉnh thành phần trang web.

Bạn có thể xác định [thành phần web](https://www.freecodecamp.org/news/build-your-first-web-component/) trong `md/.i18n/htm/index.js` và sau đó sử dụng thành phần đó trong `foot.pug` .

Thật dễ dàng để tạo các thành phần web, như thẻ tùy chỉnh `<x-img>`

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

`.i18n/htm/foot.pug` Mã trong đó như sau :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Đây `${I18N.C}` Cái tương ứng nằm trong `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Sử dụng `${I18N.xxx}` tương tự như phương pháp viết này, kết hợp với `i18n.yml` , bạn có thể quốc tế hóa phần chân trang bằng nhiều ngôn ngữ.

Thêm `class="a"` vào liên kết để tránh liên kết bị chuyển thành `MarkDown` , xem :
 [: `YAML` để ngăn `HTML` của liên kết bị chuyển thành `Markdown`](/i18/qa#H2) .