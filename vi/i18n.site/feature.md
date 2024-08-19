# Tính năng sản phẩm

## Đã tích hợp bản dịch `i18`

Chương trình đã tích hợp sẵn bản dịch `i18`, cách sử dụng chi tiết xem tại [➔ tài liệu `i18`](/i18).

## Tự động khớp ngôn ngữ trình duyệt

Ngôn ngữ mặc định của trang web sẽ tự động khớp với ngôn ngữ của trình duyệt.

Sau khi người dùng手动切换 ngôn ngữ, sẽ ghi nhớ lựa chọn của người dùng.

Mã liên quan: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee).

## Thích ứng di động

Có trải nghiệm đọc hoàn hảo trên thiết bị di động.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Tính sẵn sàng cao của giao diện người dùng

`i18n.site` sẽ tự động xuất bản nội dung trang web lên `npmjs.com`, với sự hỗ trợ của [jsdelivr.com](//jsdelivr.com), [unpkg.com](//unpkg.com) và các `CDN` khác trên `npm`.

Trên cơ sở đó, đã thêm nguồn镜像 từ Trung Quốc đại lục, giúp người dùng Trung Quốc có thể truy cập ổn định, đạt được **tính sẵn sàng cao của giao diện người dùng**.

Principles: Sử dụng [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) để chặn yêu cầu, nếu yêu cầu thất bại sẽ thử lại trên `CDN` khác, và tự động启用响应最快的 source 作为默认 tải source.

Mã liên quan: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## Ứng dụng một trang, tải nhanh

Trang web sử dụng cấu trúc ứng dụng một trang, khi chuyển trang không cần làm mới, tải rất nhanh.

## Được tối ưu hóa cho trải nghiệm đọc

### Thiết kế tinh tế

> Sự đơn giản trong thiết kế đã được thể hiện hoàn hảo trên trang web này.
> Nó loại bỏ những chi tiết không cần thiết, hiển thị nội dung ở dạng thuần túy nhất.
> Như một bài thơ ngắn nhưng đầy cảm xúc.

<p style="text-align:right">── Tác giả I18N.SITE</p>

[➔ Nhấp vào đây để xem tổng览 các phong cách](/i18n.site/md/styl).

### Tải phông chữ trực tuyến, hỗ trợ tiếng Trung

Theo mặc định, trang web đã启用 [phông chữ Alimama Double Axis Variable Round](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR), [MiSans](https://hyperos.mi.com/font/zh/download/) và các phông chữ trực tuyến khác, thống nhất trải nghiệm đọc của người dùng trên các nền tảng khác nhau.

Nhằm cải thiện tốc độ tải, phông chữ đã được phân chia theo tần suất sử dụng.

Mã liên quan: [github.com/i18n-site/font](https://github.com/i18n-site/font).

### Thanh điều hướng trên cùng tự động ẩn

Khi cuộn xuống, thanh điều hướng trên cùng sẽ tự động ẩn.

Khi cuộn lên, thanh điều hướng ẩn sẽ hiển thị lại.

Khi chuột không di chuyển, thanh điều hướng sẽ mờ dần.

Thanh điều hướng có nút toàn màn hình ở góc phải trên, tạo trải nghiệm đọc tài liệu immersif.

### Danh sách nội dung nổi bật theo chương hiện tại

Khi cuộn nội dung bên phải, danh sách nội dung bên trái sẽ nổi bật chương đang đọc.

## Chi tiết thú vị

### Hiệu ứng chuột

Khi di chuột vào nút bên phải của thanh điều hướng trên cùng, bạn sẽ thấy hiệu ứng đặc biệt thú vị.

### Con ma nhỏ `404`

Trang `404` có một con ma nhỏ rất đáng yêu, mắt nó sẽ di chuyển theo chuột, [➔ Nhấp vào đây để xem](/404)

## Open source code

[Mã nguồn mở](/i18n.site/src), nếu bạn quan tâm đến việc tham gia phát triển,欢迎使用 [danh sách thư](//groups.google.com/u/2/g/i18n-site) để giới thiệu bản thân.

Có nhiều yêu cầu nhỏ quan trọng nhưng không khẩn cấp. Nhóm phát triển sẽ phân công nhiệm vụ thực hành dựa trên kỹ năng của bạn và hoàn thiện tài liệu phát triển trong quá trình phân công yêu cầu.