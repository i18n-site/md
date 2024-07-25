# Vấn Đề Thường Gặp

## Vô Tình Xóa `.i18n/V` , Khiến Gói `Npm` Không Được Xuất Bản

`.i18n/v/ol/v.hash` Phiên bản lịch sử của `npm` bản phát hành gói được lưu trong !

Nếu bạn vô tình xóa `.i18n/v/ol` gói `npm` sẽ không được xuất bản.

Tại thời điểm này, trước tiên hãy tìm số phiên bản của phiên bản phát hành cuối cùng của dự án của bạn trong [npmjs.com](//npmjs.com) , chẳng hạn như `0.1.9`

Sau đó tham khảo `bash` Tạo bên dưới.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Lưu ý rằng sửa chữa theo cách này sẽ làm mất lịch sử tệp, khiến không thể cập nhật dần dần bản phát hành tiếp theo và tất cả nội dung sẽ được đóng gói lại và tải lên một lần.

