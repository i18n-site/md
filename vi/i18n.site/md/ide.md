# Đề Xuất Của Biên Tập Viên

Mọi người đều có trình soạn thảo yêu thích của riêng mình. Hãy chia sẻ những phương pháp hay nhất của chúng tôi tại đây `Markdown`

Chúng tôi sử dụng [vscode](https://code.visualstudio.com/) Write `MarkDown` và cài đặt plug-in [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) để xem trước trong thời gian thực trong khi viết.

Như hiển thị bên dưới, nhấp chuột phải vào trình chỉnh sửa để mở cửa sổ xem trước.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

Nhập `code xxx.md` trên dòng lệnh để gọi `vscode` mở tệp `Markdown` .

Sử dụng [PicList](https://github.com/Kuingsmile/PicList) để tải ảnh lên, nhớ đặt phím tắt tải lên và tải ảnh chụp màn hình lên chỉ bằng một cú nhấp chuột.

Nó hỗ trợ tự động sao chép định `Markdown` tên tệp sau khi tải lên, giúp cải thiện hiệu quả đáng kể.

Đồng thời, bạn có thể tham khảo cấu hình sau, sửa đổi file và cấu hình file tải lên sẽ được nén tự động thành `avif`

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
