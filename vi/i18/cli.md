# Giải Thích Chi Tiết Về Các Tham Số Dòng Lệnh

## `-p` Tập Tin

`-p` hoặc `--purge` sẽ xóa các tệp tồn tại trong mỗi thư mục dịch nhưng không tồn tại trong thư mục ngôn ngữ nguồn.

Vì khi viết tài liệu, tên file Markdown thường xuyên bị điều chỉnh dẫn đến nhiều file cũ, bị bỏ sót trong thư mục dịch.

Sử dụng tham số này để dọn sạch các tập tin cần xóa trong các thư mục ngôn ngữ khác.

## `-d` Chỉ Định Thư Mục Dịch

Thư mục đã dịch mặc định là thư mục chứa tệp hiện tại.

`-d` hoặc `--workdir` có thể chỉ định thư mục dịch, chẳng hạn như:

```
i18 -d ~/i18n/md
```

## `-h` Xem Trợ Giúp

`-h` hoặc `--help` để xem trợ giúp dòng lệnh.