# Thuật Ngữ

Có thể tạo tệp chú giải `.i18n/term.yml` Sau đây là ví dụ về bảng chú giải có ngôn ngữ nguồn là tiếng Trung Quốc :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

Trong số đó, `zh:` đại diện cho bảng thuật ngữ tiếng Trung mặc định của ngôn ngữ nguồn : Nghĩa là, bất kể nó được dịch sang ngôn ngữ nào, tiếng Trung `快猫星云` đều được dịch sang `Flashcat` .

`zh>en:` nghĩa là khi dịch từ tiếng Trung sang tiếng Anh thì `告警` được dịch thành `alert` và `故障` được dịch thành `incident` .

Ở đây, nhiều ngôn ngữ đích có thể được viết sau `zh>` , điều này có thể đơn giản hóa việc cấu hình các thuật ngữ trong các ngôn ngữ tương tự.

Ví dụ: `zh>sk>cs` có nghĩa là khi tiếng Trung được dịch sang tiếng Slovak và tiếng Séc, danh sách thuật ngữ này sẽ được chia sẻ.

> [!TIP]
> Bảng chú giải thuật ngữ đa mục tiêu và bảng chú giải thuật ngữ phản đối đơn hỗ trợ việc sử dụng kết hợp. Ví dụ: ba bảng chú giải thuật ngữ `zh>sk>cs` , `zh>sk` và `zh>cs` có thể được xác định cùng một lúc.