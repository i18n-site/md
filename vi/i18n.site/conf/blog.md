# Mẫu Blog

`i18n/conf.yml` trên `use: Blog` có nghĩa là sử dụng mẫu blog để hiển thị.

Tệp `markdown` của bài đăng blog cần định cấu hình thông tin meta.

Thông tin meta phải ở đầu file, bắt đầu bằng `---` và kết thúc bằng `---` Định dạng của thông tin cấu hình ở giữa là `YAML` .

Cấu hình của file demo như sau:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` cho biết tóm tắt nội dung sẽ được hiển thị trên trang chỉ mục blog.

Với sự trợ giúp của `YMAL` ' | `Cú pháp, bạn có thể viết tóm tắt nhiều dòng.

Cấu hình cây thư mục bên phải blog cũng là `TOC` file (xem chương trước). Chỉ những bài viết liệt kê ở `TOC` mới xuất hiện trong mục lục trang chủ blog.

Những bài viết không chứa thông tin meta sẽ không xuất hiện trên trang chủ blog mà có thể xuất hiện ở cây thư mục bên phải.

## Thông Tin Tác Giả

Thông tin tác giả có thể được viết trong meta info của bài viết, chẳng hạn như:

```yml
author: marlowe
```

Sau đó chỉnh sửa `author.yml` trong thư mục ngôn ngữ nguồn và thêm thông tin tác giả, chẳng hạn như :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` và `title` đều là tùy chọn. Nếu `name` không được đặt, tên khóa (ở đây `marlowe` ) sẽ được sử dụng là `name` .

Xem dự án demo [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) và [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Bài Viết Được Ghim

Nếu cần ghim bài viết lên đầu bạn hãy chạy `i18n.site` và edit `xxx.yml` file bên dưới `.i18n/data/blog` , đồng thời đổi timestamp thành số âm (nhiều số âm sẽ được sắp xếp từ lớn nhất đến nhỏ nhất).