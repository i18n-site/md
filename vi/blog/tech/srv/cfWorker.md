
## Tên miền CNAME绑定

Địa chỉ tên miền của Cloudflare Worker thông qua `SSL/TLS` → Tùy chỉnh tên máy chủ để绑定 CNAME tên miền sau đó, truy cập trực tiếp sẽ báo lỗi `error code: 522`

Lúc này, cần sử dụng Định tuyến HTTP → Định tuyến Workers để liên kết một route, như hình dưới所示

![](https://p.3ti.site/1719625477.avif)
![](https://p.3ti.site/1719625385.avif)