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

Với sự trợ giúp của `YMAL` '|`Cú pháp, bạn có thể viết tóm tắt nhiều dòng.

Cấu hình cây thư mục bên phải blog cũng là `TOC` file (xem chương trước). Chỉ những bài viết liệt kê ở `TOC` mới xuất hiện trong mục lục trang chủ blog.

Những bài viết không chứa thông tin meta sẽ không xuất hiện trên trang chủ blog mà có thể xuất hiện ở cây thư mục bên phải.

Nếu cần ghim bài viết lên đầu bạn hãy chạy `i18n.site` và edit `xxx.yml` file bên dưới `.i18n/data/blog` , đồng thời đổi timestamp thành số âm (nhiều số âm sẽ được sắp xếp từ nhỏ đến lớn theo giá trị tuyệt đối).