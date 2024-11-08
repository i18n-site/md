# Cài Đặt Xem Trước &

## Cài Đặt

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Mã Thông Báo Cấu Hình

`i18n.site` có tích hợp sẵn `i18` công cụ dịch thuật. Vui lòng [bấm vào đây để tham khảo tài liệu `i18` cấu hình access token](/i18/use) .

## Dự Án Demo

Hãy bắt đầu với một dự án demo để tìm hiểu cách sử dụng `i18n.site` .

Trước tiên, chúng tôi sao chép kho lưu trữ demo và chạy lệnh như sau:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Người dùng ở Trung Quốc đại lục có thể:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Tên thư mục của bản sao cơ sở mã `demo.i18n.site` phải là `md` để tạo điều kiện xem trước cục bộ với `docker` .

### Dịch

Đầu tiên, nhập thư mục `md` và chạy `i18n.site` , nó sẽ dịch `en` thành `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Sau khi chạy, các tập tin dịch và bộ đệm sẽ được tạo. Hãy nhớ thêm chúng vào kho lưu trữ trong `git add . ` `md` .

### Xem Trước Cục Bộ

Cài đặt và khởi động `docker` ( `MAC` người dùng khuyến nghị sử dụng [orbstack](https://orbstack.dev) làm thời gian chạy cho `docker` ).

Sau đó, nhập thư mục `docker` và chạy `./up.sh` , sau đó truy cập [https://127.0.0.1](https://127.0.0.1) để xem trước cục bộ.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">