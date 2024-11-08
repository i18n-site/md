# Danh Sách Phong Cách

[Bấm vào đây để duyệt tệp nguồn của trang này](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) và xem cách viết số `MarkDown` theo các kiểu sau.

## Khối Gấp

|+| MarkDown là gì?

    MarkDown là ngôn ngữ đánh dấu nhẹ cho phép người dùng tạo tài liệu được định dạng ở định dạng văn bản thuần túy, dễ đọc và dễ viết.

    Thường được sử dụng để viết tài liệu, bài viết blog, sách điện tử, bài đăng trên diễn đàn, v.v.

    Nó có những ưu điểm sau:

    1. Dễ học
    1. Rất dễ đọc
    1. Kiểm soát phiên bản thân thiện

       Vì `MarkDown` tài liệu ở định dạng văn bản thuần túy nên người lập trình có thể dễ dàng kết hợp chúng vào các hệ thống kiểm soát phiên bản (như `git` ).

       Điều này giúp việc theo dõi các thay đổi và cộng tác đơn giản hơn nhiều, đặc biệt là trong phát triển nhóm.

|-| I18N là gì?

    "I18N" là tên viết tắt của "Quốc tế hóa".

    Vì từ "Quốc tế hóa" có 18 chữ cái nằm giữa "I" và "N" nên "I18N" được sử dụng để đơn giản hóa cách trình bày.

    Theo thuật ngữ của giáo dân, nó có nghĩa là hỗ trợ nhiều ngôn ngữ.


Khối gấp là một cú pháp mở rộng từ `i18n.site` đến `MarkDown` , được viết như sau :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

với `|+| `或`|-| Dòng bắt đầu bằng ` sẽ tạo ra một khối gấp, và nội dung của khối gấp là các dòng tiếp theo có cùng mức độ thụt lề (các đoạn cách nhau bằng dòng trống).

Vượt qua`|-| `标记的折叠块默认展开，`|+| `Các khối thu gọn được gắn thẻ được thu gọn theo mặc định.

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
> Khi tham gia một cuộc phiêu lưu hoang dã, điều quan trọng là phải giữ an toàn. Dưới đây là một số lời khuyên an toàn quan trọng:
>
> - **Kiểm tra dự báo thời tiết** : Tuần trước, một nhóm người leo núi gặp phải cơn bão ở lưng chừng núi vì không xem dự báo thời tiết và phải sơ tán khẩn cấp.
> - **Mang theo những dụng cụ cần thiết** : Đảm bảo bạn mang đủ thức ăn, nước uống và đồ sơ cứu.
> - **Hiểu rõ địa hình** : Làm quen trước với địa hình và lộ trình của khu vực mạo hiểm để tránh bị lạc.
> - **Luôn kết nối** : Luôn kết nối với thế giới bên ngoài và đảm bảo mọi người có thể trở về an toàn.
>
> Hãy nhớ rằng, an toàn luôn được đặt lên hàng đầu!

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
    + Hội nghị trao đổi khởi nghiệp
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

### Tối Ưu Hóa Hiển Thị Bảng Lớn

Đối với các bảng tương đối lớn, có thể sử dụng các phương pháp sau để tối ưu hóa hiệu ứng hiển thị:

1. Sử dụng phông chữ nhỏ hơn

   Ví dụ: bọc bảng bằng `<div style="font-size:14px">` và `</div>` .

   Lưu ý rằng thẻ `div` phải chiếm dòng riêng và để trống các dòng trước và sau nó.
1. Để có văn bản dài hơn trong một ô, hãy chèn số `<br>` để ngắt dòng
1. Nếu một cột bị nén quá ngắn, bạn có thể thêm `<div style="width:100px">xxx</div>` vào tiêu đề để mở rộng chiều rộng và bạn cũng có thể thêm [`<wbr>` vào tiêu đề](//developer.mozilla.org/docs/Web/HTML/Element/wbr) để kiểm soát vị trí ngắt dòng.

Một ví dụ trình diễn như sau:

<div style="font-size:14px">

| Quốc gia       | <div style="width:70px;margin:auto">tên nhà tư tưởng</div> | Thời đại | Những đóng góp chính về mặt tư tưởng                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Trung Quốc       | Khổng Tử                                           | 551-479 TCN   | Người sáng lập Nho giáo đề xuất các khái niệm cốt lõi như “lòng nhân từ” và “sự đúng mực” đồng thời nhấn mạnh việc tu dưỡng đạo đức và trật tự xã hội. |
| Hy Lạp cổ đại     | Socrates                                       | 469-399 TCN   | Khám phá sự thật thông qua đối thoại và biện chứng đề xuất "biết chính mình" và nhấn mạnh tư duy hợp lý         |
| Pháp       | Voltaire                                         | 1694-1778       | Những nhân vật đại diện của thời kỳ Khai sáng ủng hộ sự hợp lý, tự do và bình đẳng, đồng thời chỉ trích sự mê tín tôn giáo và sự cai trị độc đoán.   |
| nước Đức       | Kant                                           | 1724-1804       | Đưa ra bài “Phê phán lý trí thuần túy”<br> Khám phá nền tảng của đạo đức, tự do và kiến thức, nhấn mạnh lý do thực tế     |

</div>

Mã giả cho ví dụ trên như sau:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Mã Số

### Mã Nội Tuyến

Trong thế giới rộng lớn của các ngôn ngữ lập trình, `Rust` , `Python` , `JavaScript` và `Go` mỗi số chiếm một vị trí duy nhất.

### Nhiều Dòng Mã

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Ngắt Dòng Trong Đoạn Văn

Có thể thực hiện ngắt dòng trong đoạn văn mà không cần thêm dòng trống giữa các dòng.
Khoảng cách giữa các ngắt dòng trong đoạn văn nhỏ hơn khoảng cách giữa các đoạn văn.

Ví dụ:

> Hãy sống như một người vĩ đại,
> Cái chết cũng là một anh hùng ma.
> Tôi vẫn nhớ Hạng Vũ,
> Bất đắc dĩ phải vượt qua Giang Đông.
>
> Li Qingzhao dùng câu chuyện bi thảm của Hạng Vũ để ám chỉ sự kém cỏi của nhà Tống.
> Bày tỏ sự bất mãn với việc triều đình đầu hàng mà không chiến đấu.