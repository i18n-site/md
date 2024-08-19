# Giải thích chi tiết về các tham số dòng lệnh

## `-p` làm sạch tệp

`-p` hoặc `--purge` sẽ dọn sạch các tệp tồn tại trong các thư mục dịch nhưng không tồn tại trong thư mục ngôn ngữ nguồn.

Bởi vì khi viết tài liệu, tên các tệp Markdown thường xuyên được điều chỉnh, dẫn đến việc xuất hiện nhiều tệp cũ và không cần thiết trong thư mục dịch.

Sử dụng tham số này, bạn có thể dọn sạch các tệp nên bị xóa trong các thư mục ngôn ngữ khác.

## `-d` chỉ định thư mục dịch

Thư mục dịch mặc định là thư mục chứa tệp hiện tại.

`-d` hoặc `--workdir` có thể chỉ định thư mục dịch, ví dụ như:

```
i18 -d ~/i18n/md
```

## `-h` xem trợ giúp

`-h` hoặc `--help` để xem trợ giúp cho dòng lệnh.