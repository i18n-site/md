# Quy Ước Viết i18n.site MarkDown

## Điểm Neo

`MarkDown` điểm neo truyền thống được tạo dựa trên nội dung văn bản. Trong trường hợp đa ngôn ngữ, giải pháp này không khả thi.

Giải pháp điểm neo được thống nhất với `i18n.site` là chèn văn bản tương tự `<a rel=id href="#xxx" id="xxx"></a>` trong `MarkDown` để tự tạo điểm neo định vị.

`<a rel=id href="#xxx" id="xxx"></a>` , ở đây `rel=id` xác định kiểu trang của điểm neo, vui lòng thay thế `xxx` bằng từ viết tắt tiếng Anh neo thực tế của bạn.

Các neo thường được thêm vào tiêu đề, chẳng hạn như:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Hiệu ứng hiển thị như sau:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Viết `HTML` Vào `MarkDown`

`HTML` có thể được nhúng vào mã `pug` .

Nội dung trong phần tử `<pre>` sẽ không được dịch.

Kết hợp hai điểm này, bạn có thể dễ dàng viết `HTML` trong `MarkDown` để đạt được nhiều hiệu ứng hiển thị khác nhau.

[Bấm vào đây để tham khảo i18n.site Danh sách mã ngôn ngữ trên trang chủ HTML được viết](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) và mã như sau :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Lưu ý rằng `<style>` cũng được xác định ở `<pre>` ở trên.