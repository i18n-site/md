<h1 style="justify-content:space-between">3Ti.Site · Suy nghĩ không biên giới<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, một trình tạo trang tĩnh, có thể tự động dịch Markdown [sang hơn một trăm ngôn ngữ khác nhau](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Một số người có thể hỏi, vì tất cả các trình duyệt đều có chức năng dịch thuật nên có cần thiết phải quốc tế hóa trang web không?

Tôi muốn nói rằng **chỉ những trang web tạo bản dịch tĩnh mới có thể hỗ trợ tìm kiếm toàn văn bản đa ngôn ngữ tại chỗ và tối ưu hóa công cụ tìm kiếm** .

## Giới Thiệu

Kinh thánh · Sáng thế ký :

> Vào thời cổ đại, khi các ngôn ngữ còn là một, loài người đã xây dựng một tòa tháp cao tới tận trời, cánh cổng dẫn đến lãnh địa của Chúa, tuyên bố sức mạnh của loài người.
>
> Chúa tuyên bố, "Con người đoàn kết thành một bộ tộc, có chung một ngôn ngữ, và tòa tháp này chỉ là lời mở đầu. Bây giờ họ đã đạt được mong muốn của mình và sẽ không còn sợ hãi nữa."
>
> Vì vậy, Chúa giáng trần, phân tán con người đến các ngóc ngách khác nhau, sử dụng các ngôn ngữ khác nhau.
>
> Từ đó trở đi, việc giao tiếp của con người trở nên khó khăn, tranh chấp bất tận, và không còn một tòa tháp nào chạm tới trời nữa.

Tiểu thuyết khoa học viễn tưởng &quot;Three-Body&quot; (phát âm tiếng Trung: `3Ti` ) hư cấu về một nền văn minh ngoài hành tinh giao tiếp qua sóng điện từ, không có rào cản ngôn ngữ và thịnh vượng về mặt công nghệ.

Tôi hy vọng có thể tạo ra một công cụ có thể giúp con người trên trái đất giống như con người ba cơ thể, giao tiếp mà không bị ràng buộc bởi ngôn ngữ và đoàn kết toàn nhân loại một lần nữa.

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
