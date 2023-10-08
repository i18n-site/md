# I18N.SITE · Ngôn Ngữ Không Biên Giới<img Src="//i-01.eu.org/i18n.svg" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, một trình tạo trang tĩnh đa ngôn ngữ, có thể tự động dịch Markdown [sang hơn một trăm ngôn ngữ khác nhau](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n.lang.webp" alt="" />

Có thể một số người muốn hỏi, hiện nay trình duyệt đã tích hợp sẵn chức năng dịch thuật, liệu có cần thiết phải quốc tế hóa website hay không?

Tôi muốn nói rằng **chỉ bằng cách quốc tế hóa toàn bộ trang web, chúng tôi mới có thể hỗ trợ tìm kiếm toàn văn bản đa ngôn ngữ tại chỗ và tối ưu hóa công cụ tìm kiếm** .

## Hướng Dẫn

## Giới Thiệu Chức Năng

### Giữ Định Dạng Đánh Dấu

### Sửa Đổi Bản Dịch

Sau khi sửa đổi bản dịch, bạn cần chạy lại `./i18n.sh` để cập nhật bộ đệm.

### Ghi Chú Dịch Thuật

Chú thích dịch cần ghi rõ ngôn ngữ sau \```, chẳng hạn như ` ```rust` .

Hiện hỗ trợ dịch nhận xét cho Rust, c, cpp, java, js, cà phê, python và bash.

Chỉnh sửa [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) để thêm hỗ trợ dịch cho nhận xét bằng nhiều ngôn ngữ hơn.

### Định Cấu Hình Proxy

Việc đặt các biến môi trường sau cho phép lệnh gọi API Google Dịch đi qua proxy.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Nhúng Biến

```
test: 测试变量<br 0>嵌入
```

### Làm Sạch Bộ Nhớ Tạm

```bash
rm -rf .i18n/.cache
```
