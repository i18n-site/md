# Câu Hỏi Thường Gặp

## Thêm Hoặc Bớt Dòng Dịch Dẫn Đến Nhầm Lẫn Trong Bản Dịch

> [!WARN]
> Hãy nhớ rằng, **số dòng trong bản dịch phải tương ứng với số dòng trong văn bản gốc** .
> Nghĩa là, khi điều chỉnh bản dịch theo cách thủ công, **không được thêm hoặc bớt dòng của bản dịch** , nếu không mối quan hệ ánh xạ giữa bản dịch và văn bản gốc sẽ bị rối loạn.

Nếu bạn vô tình thêm hoặc xóa một dòng, gây nhầm lẫn, vui lòng khôi phục bản dịch về phiên bản trước khi sửa đổi, chạy lại bản dịch `i18` và lưu lại ánh xạ chính xác vào bộ đệm.

Ánh xạ giữa bản dịch và văn bản gốc được liên kết với mã thông báo. Tạo mã thông báo mới trong [i18n.site/token](//i18n.site/token) xóa `.i18h/hash` và dịch lại để xóa ánh xạ khó hiểu (nhưng điều này sẽ khiến tất cả các điều chỉnh thủ công đối với bản dịch bị mất).

## `YAML` : Làm Sao Để Tránh Link `HTML` Bị Chuyển Thành `Markdown`

Giá trị `YAML` được coi là `MarkDown` để dịch.

Đôi khi việc chuyển đổi từ `HTML` → `MarkDown` không phải là điều chúng ta mong muốn, chẳng hạn như `<a href="/">Home</a>` được chuyển đổi thành `[Home](/)` .

Việc thêm bất kỳ thuộc tính nào ngoài `href` vào thẻ `a` , chẳng hạn như `<a class="A" href="/">Home</a>` , có thể tránh được chuyển đổi này.

## `./i18n/hash` Tập Tin Xung Đột Bên Dưới

Xóa các tập tin xung đột và chạy lại bản dịch `i18` .