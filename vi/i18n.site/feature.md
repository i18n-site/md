# Tính năng Sản phẩm

## Tích hợp Bản dịch `i18`

Chương trình tích hợp sẵn Bản dịch `i18`, cách sử dụng chi tiết xem [➔ Tài liệu `i18`](/i18).

## Tự động Khớp Ngôn ngữ Trình duyệt

Ngôn ngữ mặc định của trang web sẽ tự động khớp với ngôn ngữ của trình duyệt.

Sau khi người dùng手动切换 ngôn ngữ, lựa chọn của người dùng sẽ được ghi nhớ.

Mã liên quan: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee).

## Thích ứng Điện thoại Di động

Có trải nghiệm đọc hoàn hảo trên điện thoại di động.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Tính Sẵn sàng Cao của Giao diện Trước

`i18n.site` sẽ xuất bản nội dung trang web lên `npmjs.com` theo mặc định, với sự trợ giúp của [jsdelivr.com](//jsdelivr.com) , [unpkg.com](//unpkg.com) và nhiều nội dung `CDN` khác được tải trên `npm` .

Trên cơ sở đó, đã thêm nguồn镜像 từ Trung Quốc đại lục, giúp người dùng Trung Quốc có thể truy cập ổn định, đạt được **Tính sẵn sàng cao của giao diện trước**.

Nguyên tắc là: chặn các yêu cầu bằng [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , thử lại các yêu cầu không thành công trên `CDN` khác và kích hoạt thích ứng trang gốc phản hồi nhanh nhất làm nguồn tải mặc định.

Mã liên quan: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## Ứng dụng Một trang, Tải nhanh

Trang web sử dụng kiến trúc ứng dụng một trang, không cần làm mới khi chuyển trang và tải nhanh.

## Optimized for Reading Experience

### Thiết kế tinh tế

> Sự đơn giản trong vẻ đẹp được thể hiện hoàn hảo trong thiết kế trang web này.
> Nó loại bỏ những chi tiết không cần thiết, hiển thị nội dung ở dạng thuần túy nhất.
> Như một bài thơ ngắn nhưng lay động lòng người.

<p style="text-align:right">── Tác giả I18N.SITE</p>

[➔ Nhấp vào đây để xem tổng览 các样式](/i18n.site/md/styl).

### `RSS` đa ngôn ngữ

![](//p.3ti.site/1725541085.avif)

Hình trên là ví dụ đăng ký `RSS` đa ngôn ngữ `i18n.site` bằng [inoreader.com](//inoreader.com).

### Tải Font trực tuyến, Hỗ trợ Tiếng Trung

Theo mặc định, trang web đã启用 [phông chữ Alimama Double-axis Variable Round](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR), [MiSans](https://hyperos.mi.com/font/zh/download/) và các phông chữ trực tuyến khác, thống nhất trải nghiệm đọc của người dùng trên các nền tảng khác nhau.

Đồng thời, để cải thiện tốc độ tải, phông chữ được phân chia theo tần suất sử dụng.

Mã liên quan: [github.com/i18n-site/font](https://github.com/i18n-site/font).

### Thanh Điều hướng Đầu tự động Ẩn

Cuộn xuống, thanh điều hướng trên cùng sẽ tự động ẩn.

Cuộn lên, thanh điều hướng ẩn sẽ xuất hiện trở lại.

Khi chuột không di chuyển, thanh điều hướng sẽ mờ dần.

Thanh điều hướng có nút toàn màn hình ở góc trên bên phải, mang lại trải nghiệm đọc tài liệu immersif.

### Danh sách Tóm tắt Nổi bật Chương Hiện tại

Khi cuộn nội dung bên phải, danh sách tóm tắt bên trái sẽ nổi bật chương đang đọc.

## Chi tiết Đẹp

### Hiệu ứng Chuột

Khi di chuột vào nút ở phía bên phải của thanh điều hướng trên cùng, bạn sẽ thấy các hiệu ứng đẹp mắt.

### Phantom `404`

Trang `404` có một linh hồn nhỏ xinh, mắt của nó sẽ di chuyển theo chuột, [➔ Nhấp vào đây để xem](/404)

## Mã Mở nguồn

[Mã này là mã nguồn mở](/i18n.site/src). Nếu bạn quan tâm đến việc tham gia phát triển, xin hãy giới thiệu bản thân trên [danh sách thư](//groups.google.com/u/2/g/i18n-site).

Có nhiều yêu cầu nhỏ quan trọng nhưng không khẩn cấp. Nhóm phát triển sẽ phân công nhiệm vụ thực hành dựa trên kỹ năng của bạn và hoàn thiện tài liệu phát triển trong quá trình giao nhiệm vụ.