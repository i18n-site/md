# Quy Ước Định Dạng MarkDown

## Điểm Neo

Các neo truyền thống `MarkDown` được tạo dựa trên nội dung văn bản. Trong trường hợp đa ngôn ngữ, giải pháp này không khả thi.

`i18n.site` Giải pháp neo định vị đã được thống nhất là chèn văn bản tương tự `<a rel=id href="#xxx" id="xxx"></a>` vào `MarkDown` để tạo neo định vị theo cách thủ công.

`<a rel=id href="#xxx" id="xxx"></a>` , ở đây `rel=id` xác định kiểu trang của điểm neo, vui lòng thay thế `xxx` bằng từ viết tắt tiếng Anh neo thực tế của bạn.

Các neo thường được thêm vào tiêu đề, chẳng hạn như:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Hiệu ứng hiển thị như sau:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` Vào `MarkDown`

`pug` `HTML` có thể được nhúng vào mã.

Nội dung trong phần tử `<pre>` sẽ không được dịch.

Kết hợp hai điểm này, bạn có thể dễ dàng viết `HTML` vào `MarkDown` để đạt được các hiệu ứng hiển thị khác nhau.

Bạn có thể tham khảo cách thực hiện trong [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) code như sau :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Lưu ý rằng `<style>` cũng được xác định ở trên `<pre>`
