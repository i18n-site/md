# Vấn Đề Thường Gặp

## Thêm Hoặc Bớt Dòng Dịch Dẫn Đến Nhầm Lẫn Trong Bản Dịch

Hãy nhớ rằng, **số dòng trong bản dịch phải tương ứng với số dòng trong văn bản gốc** .

Nghĩa là, khi điều chỉnh bản dịch theo cách thủ công, **không được thêm hoặc bớt dòng của bản dịch** , nếu không mối quan hệ ánh xạ giữa bản dịch và văn bản gốc sẽ bị rối loạn.

Nếu bạn vô tình thêm hoặc xóa một dòng, gây nhầm lẫn, vui lòng khôi phục bản dịch về phiên bản trước khi sửa đổi, chạy `i18` bản dịch và lưu lại ánh xạ chính xác vào bộ đệm.

Ánh xạ giữa bản dịch và văn bản gốc được liên kết với mã thông báo. Tạo mã thông báo mới trong [i18n.site/token](//i18n.site/token) , xóa `.i18h/hash` và dịch lại để xóa ánh xạ khó hiểu (nhưng điều này sẽ khiến tất cả các điều chỉnh thủ công đối với bản dịch bị mất).

## `YAML` : Để Ngăn `HTML` Của Liên Kết Bị Chuyển Đổi Thành `Markdown`

Giá trị của `YAML` sẽ được coi là `MarkDown` để dịch.

Đôi khi việc chuyển đổi `HTML` → `MarkDown` không phải là điều chúng tôi muốn, chẳng hạn như `<a href="/">Home</a>` được chuyển đổi thành `[Home](/)` .

Thêm bất kỳ thuộc tính nào ngoài `href` vào thẻ `a` , chẳng hạn như `<a class="A" href="/">Home</a>` , để tránh chuyển đổi này.

## Các Tập Tin Sau Xung Đột `./I18n/Hash`

Xóa các tệp xung đột và chạy `i18` Translate.
