# Câu hỏi thường gặp

## Vô tình xóa `.i18n/v`, dẫn đến không thể phát hành gói `npm`

`.i18n/v/ol/v.hash` lưu trữ lịch sử các phiên bản phát hành của gói `npm`.

Nếu bạn vô tình xóa `.i18n/v/ol`, sẽ không thể phát hành gói `npm`.

Tại thời điểm này, trước hết hãy tìm số phiên bản của phiên bản phát hành cuối cùng của dự án của bạn tại [npmjs.com](//npmjs.com), ví dụ: `0.1.9`.

Sau đó, tham khảo đoạn `bash` bên dưới để tạo tệp.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Lưu ý rằng phương pháp này sẽ làm mất lịch sử tệp, dẫn đến việc không thể cập nhật từng phiên bản cho lần phát hành tiếp theo, và tất cả nội dung sẽ được đóng gói và tải lên một lần nữa.