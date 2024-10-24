# Danh Sách Phong Cách

[Bấm vào đây để duyệt tệp nguồn của trang này](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) và xem cách viết số `MarkDown` theo các kiểu sau.

## Gạch & &

Đây là dấu gạch __ __ ,~~ gạch ngang~~ và **in đậm** văn bản trình bày.

Nó được viết như sau:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Trình phân tích cú pháp `MarkDown` của công cụ xây dựng trang web `i18n.site` đã tối ưu hóa cú pháp gạch chân, gạch ngang và in đậm, có thể phát huy tác dụng mà không cần khoảng trắng trước và sau dấu, giúp việc viết tài liệu bằng các ngôn ngữ như Trung Quốc, Nhật Bản, Hàn Quốc trở nên dễ dàng hơn. không sử dụng dấu cách làm dấu phân cách.

Đọc mở rộng : [Tại sao cú pháp Markdown của Nuggets ( `**……**` ) đôi khi không có hiệu lực?](//juejin.cn/post/7064565848421171213)

## Trích Dẫn

### Trích Dẫn Một Dòng

> Bản chất của tôi là tài năng của tôi sẽ hữu ích và tôi sẽ quay lại sau khi tiêu hết tiền.
<p style="text-align:right">─ Lý Bạch</p>

### Nhiều Dòng Trích Dẫn

> Một ưu điểm độc đáo khác của khoa học viễn tưởng là phạm vi cực kỳ rộng của nó.
> Một cuốn “Chiến tranh và Hòa bình” bằng hàng triệu từ chỉ mô tả lịch sử của một khu vực trong vài thập kỷ;
> Và những cuốn tiểu thuyết khoa học viễn tưởng như “Câu trả lời cuối cùng” của Asimov mô tả một cách sinh động lịch sử hàng tỷ năm của toàn vũ trụ, bao gồm cả loài người, chỉ trong vài nghìn từ.
> Tính bao dung và táo bạo như vậy là điều không thể đạt được trong văn học truyền thống.
<p style="text-align:right">── Lưu Từ Tâm</p>

### `> [!TIP]`

> [!TIP]
> Hãy nhớ kiểm tra tính hợp lệ của hộ chiếu và thị thực của bạn. Các tài liệu hết hạn không thể nhập cảnh hoặc xuất cảnh.

Nó được viết như sau

```
> [!TIP]
> YOUR CONTENT
```

### Nhận Xét `> [!NOTE]`

> [!NOTE]
> Nếu bạn gửi tin nhắn cho tôi và tôi trả lời ngay lập tức, điều đó có nghĩa là gì?
> Điều này chứng tỏ tôi rất thích chơi điện thoại di động.


### Cảnh Báo `> [!WARN]`

> [!WARN]
> Khi tham gia một cuộc phiêu lưu hoang dã, điều quan trọng là phải giữ an toàn.
> Tuần trước, một nhóm người leo núi gặp bão ở lưng chừng núi và phải sơ tán vì không xem dự báo thời tiết.
> Hãy nhớ rằng, bất kỳ hoạt động ngoài trời nào cũng cần có sự chuẩn bị đầy đủ và chú ý đến thời tiết.

## Danh Sách Việc Cần Làm

- [x] Thiết kế nguyên mẫu sản phẩm và danh sách tính năng
- [ ] Xác định ngăn xếp công nghệ và công cụ phát triển
- [ ] Xây dựng các mốc thời gian và cột mốc phát triển sản phẩm

## Danh Sách

### Danh Sách Đặt Hàng

1. đang chạy
   1. Ba lần một tuần, mỗi lần 5 km
   1. Chạy một nửa marathon
1. tập thể dục
   1. Hai lần một tuần, mỗi lần 1 giờ
   1. Tập trung vào các cơ cốt lõi

### Danh Sách Không Có Thứ Tự

* sự kiện xã hội
  - Tham gia các cuộc họp trao đổi ngành
    + Buổi chia sẻ công nghệ
    + Hội nghị giao lưu khởi nghiệp
  - Tổ chức tụ tập bạn bè
    + BBQ ngoài trời
    + đêm chiếu phim

## Tờ Giấy

| nhà tư tưởng       | Đóng góp chính                           |
|--------------|------------------------------------|
| Khổng Tử         | Người sáng lập Nho giáo |
| Socrates     | cha đẻ của triết học phương Tây  |
| Nietzsche         | Triết lý siêu nhân, phê phán đạo đức và tôn giáo truyền thống       |
| Marx       | chủ nghĩa cộng sản |

## mã số

### Mã Nội Tuyến

Trong thế giới rộng lớn của các ngôn ngữ lập trình, `Rust` , `Python` , `JavaScript` và `Go` mỗi số chiếm một vị trí duy nhất.

### Nhiều Dòng Mã

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```