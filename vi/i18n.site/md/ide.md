# Đề xuất của 编辑器

Mỗi người đều có thói quen sử dụng 编辑器 riêng, ở đây chia sẻ một số thực hành tốt nhất với `Markdown`.

Chúng tôi sử dụng [vscode](https://code.visualstudio.com/) để viết `Markdown`, đồng thời cài đặt插件 [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) để xem trước trực tiếp trong quá trình viết.

Như hình bên dưới, nhấp phải trong 编辑器 để mở cửa sổ xem trước.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Nhập `code xxx.md` trong dòng lệnh để gọi `vscode` mở tệp `Markdown`.

Sử dụng [PicList](https://github.com/Kuingsmile/PicList) để tải ảnh lên, nhớ thiết lập phím tắt để tải lên, sau khi chụp ảnh màn hình có thể tải lên bằng một cú nhấp chuột.

Nó hỗ trợ sao chép tự động tên tệp thành định dạng `Markdown` sau khi tải lên, rất tiện lợi và nâng cao hiệu quả.

Đồng thời, bạn có thể tham khảo cấu hình sau, chỉnh sửa tệp để tự động nén tệp tải lên thành định dạng `avif`, giúp giảm kích thước ảnh.

```json
"buildIn": {
  "compress": {
    "quality": 99,
    "isConvert": true,
    "convertFormat": "avif",
    "isReSize": false,
    "reSizeWidth": 0,
    "reSizeHeight": 0,
    "skipReSizeOfSmallImg": false,
    "isReSizeByPercent": false,
    "reSizePercent": 50,
    "isRotate": false,
    "rotateDegree": 0,
    "isRemoveExif": true,
    "isFlip": false,
    "isFlop": false,
    "formatConvertObj": {}
  },
  … …
```