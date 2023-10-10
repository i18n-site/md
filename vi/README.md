<h1 style="justify-content:space-between">3Ti.Site · Nghĩ không biên giới<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, một trình tạo trang tĩnh đa ngôn ngữ, có thể tự động dịch Markdown [sang hơn một trăm ngôn ngữ khác nhau](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Có thể một số người muốn hỏi, hiện nay trình duyệt đã tích hợp sẵn chức năng dịch thuật, liệu có cần thiết phải quốc tế hóa website hay không?

Tôi muốn nói rằng **chỉ bằng cách quốc tế hóa toàn bộ trang web, chúng tôi mới có thể hỗ trợ tìm kiếm toàn văn bản đa ngôn ngữ tại chỗ và tối ưu hóa công cụ tìm kiếm** .

## Sự Liên Tiếp

"Kinh thánh·Sáng thế ký":

> Người xưa không phân biệt ngôn ngữ. Họ sinh ra đã kiêu hãnh và muốn xây dựng một tòa tháp cao có đỉnh vươn tới tận trời.
> <blockquote><p>Đức Chúa Trời không hài lòng với sự kiêu ngạo của con người nên đã phân tán muôn loài sống ở nhiều nơi khác nhau, không thể hiểu được nhau.</p></blockquote>
> <blockquote><p>Kể từ đó, con người khó liên lạc, tranh chấp vẫn tiếp diễn và trên thế giới không có Tháp Babel.</p></blockquote>

Tiểu thuyết khoa học viễn tưởng &quot;Three-Body&quot; (phát âm tiếng Trung: `3Ti` ) hư cấu về một nền văn minh ngoài hành tinh giao tiếp qua sóng điện từ, không có rào cản ngôn ngữ và thịnh vượng về mặt công nghệ.

Tôi hy vọng rằng với sự trợ giúp của công cụ này, con người trên trái đất sẽ giống như những con người ba cơ thể, giao tiếp sẽ không bị hạn chế bởi ngôn ngữ và toàn nhân loại sẽ đoàn kết lại.

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
