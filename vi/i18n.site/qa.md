# Câu Hỏi Thường Gặp

## Vô Tình Xóa `.i18n/v` , Khiến Gói `npm` Không Được Xuất Bản

Phiên bản lịch sử do gói `npm` phát hành được lưu ở `.i18n/v/ol/v.hash` .

Nếu bạn vô tình xóa `.i18n/v/ol` gói `npm` sẽ không được phát hành.

Tại thời điểm này, trước tiên hãy tìm số phiên bản của phiên bản phát hành cuối cùng của dự án của bạn trong [npmjs.com](//npmjs.com) ví dụ: `0.1.9` .

Sau đó tham khảo số `bash` bên dưới để tạo file.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Lưu ý rằng sửa chữa theo cách này sẽ làm mất lịch sử tệp, khiến không thể cập nhật dần dần bản phát hành tiếp theo và tất cả nội dung sẽ được đóng gói lại và tải lên một lần.