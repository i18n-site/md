# Đề Xuất Của Biên Tập Viên

Mọi người đều có trình chỉnh sửa yêu thích của riêng mình. Tại đây, chúng tôi chia sẻ `Markdown` cách thực hành tốt nhất của mình.

Chúng tôi sử dụng [vscode](https://code.visualstudio.com/) để viết `MarkDown` và cài đặt plug-in [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) để xem trước trong thời gian thực trong khi viết.

Như hiển thị bên dưới, nhấp chuột phải vào trình chỉnh sửa để mở cửa sổ xem trước.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Nhập `code xxx.md` vào dòng lệnh để gọi `vscode` mở file `Markdown` .

Sử dụng [PicList](https://github.com/Kuingsmile/PicList) để tải ảnh lên, nhớ đặt phím tắt tải lên và tải ảnh chụp màn hình lên chỉ bằng một cú nhấp chuột.

Nó hỗ trợ tự động sao chép tên tệp sang định dạng `Markdown` sau khi tải lên, giúp cải thiện hiệu quả đáng kể.

Đồng thời, bạn có thể tham khảo cấu hình sau, sửa đổi file và cấu hình file tải lên sẽ tự động nén về `avif` để giảm dung lượng hình ảnh.

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