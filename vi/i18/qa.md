# Câu hỏi thường gặp

## Thêm hoặc xóa dòng dịch có thể dẫn đến sự nhầm lẫn trong bản dịch

Hãy nhớ rằng, **số dòng trong bản dịch phải tương ứng với số dòng trong văn bản gốc**

Nghĩa là, khi điều chỉnh bản dịch thủ công, **không được thêm hoặc xóa dòng dịch**, nếu không sẽ làm rối loạn mối quan hệ ánh xạ giữa bản dịch và văn bản gốc

Nếu không cẩn thận thêm hoặc xóa dòng, gây ra sự nhầm lẫn, vui lòng khôi phục bản dịch về phiên bản trước khi sửa đổi, sau đó chạy lại lệnh `i18` để cache lại ánh xạ chính xác

Ánh xạ giữa bản dịch và văn bản gốc được liên kết với mã thông báo. Tạo mã thông báo mới tại [i18n.site/token](//i18n.site/token), xóa `.i18h/hash`, sau đó dịch lại để làm sạch ánh xạ bị nhầm lẫn (nhưng sẽ làm mất tất cả các điều chỉnh thủ công đối với bản dịch)

## `YAML`: Cách tránh việc liên kết `HTML` bị chuyển thành `Markdown`

Giá trị của `YAML` sẽ được coi là `Markdown` để dịch

Đôi khi, việc chuyển đổi từ `HTML` sang `Markdown` không phải là điều ta mong muốn, ví dụ như `<a href="/">Home</a>` bị chuyển thành `[Home](/)`

Để tránh việc này, bạn có thể thêm bất kỳ thuộc tính nào khác ngoài `href` vào thẻ `a`, ví dụ như `<a class="A" href="/">Home</a>`

## Xung đột tập tin trong thư mục `./i18n/hash`

Xóa các tập tin xung đột và sau đó chạy lại lệnh `i18` để dịch