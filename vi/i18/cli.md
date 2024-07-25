# Giải Thích Chi Tiết Về Các Tham Số Dòng Lệnh

## `-P` Tập Tin Sạch

`-p` `--purge` sẽ dọn sạch các tệp tồn tại trong mỗi thư mục dịch nhưng không tồn tại trong thư mục ngôn ngữ nguồn.

Vì khi viết tài liệu, tên file Markdown thường xuyên bị điều chỉnh dẫn đến có nhiều file cũ, bị bỏ trong thư mục dịch.

Sử dụng tham số này để dọn sạch các tập tin cần xóa trong các thư mục ngôn ngữ khác.

## `-D` Chỉ Định Thư Mục Dịch

Thư mục đã dịch mặc định là thư mục chứa tệp hiện tại.

`-d` `--workdir` có thể chỉ định thư mục dịch, chẳng hạn như:

```
i18 -d ~/i18n/md
```

## Xem Trợ Giúp `-H`

`-h` Hoặc `--help` có thể xem trợ giúp về dòng lệnh.