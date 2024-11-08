# Tối Ưu Hóa Công Cụ Tìm Kiếm (Seo)

## Nguyên Tắc

`i18n.site` sử dụng kiến trúc một trang không làm mới để tạo điều kiện thuận lợi cho việc lập chỉ mục tìm kiếm, một trang tĩnh riêng biệt và `sitemap.xml` sẽ được tạo để trình thu thập thông tin thu thập thông tin.

Khi `User-Agent` của yêu cầu truy cập được trình thu thập thông tin của công cụ tìm kiếm sử dụng, yêu cầu sẽ được chuyển hướng đến trang tĩnh thông qua `302` .

Trên các trang tĩnh, sử dụng `link` để biểu thị các liên kết đến các phiên bản ngôn ngữ khác nhau của trang này, chẳng hạn như :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Cấu Hình nginx Cục Bộ

Lấy file cấu hình `.i18n/htm/main.yml` trong dự án demo làm ví dụ

```yml
host: i18n-demo.github.io
seo: true
out:
  - fs

pkg:
  i: i18n.site
  md: i18n.site

cdn:
  v:
  jsd:
```

Trước tiên hãy sửa đổi giá trị `host:` ở trên thành tên miền của bạn, chẳng hạn như `xxx.com` .

Sau đó, `i18n.site -n` , trang tĩnh sẽ được tạo trong thư mục `out/main/htm` .

Tất nhiên, bạn cũng có thể kích hoạt các file cấu hình khác, chẳng hạn như trước tiên hãy tham khảo cấu hình `main` để tạo `.i18n/htm/dist.package.json` và `.i18n/htm/dist.yml` .

Sau đó chạy `i18n.site -n -c dist` để trang tĩnh được tạo thành `out/dist/htm` .

`nginx` có thể được thiết lập bằng cách tham khảo cấu hình bên dưới.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Không lưu trữ các tập lệnh chạy của máy chủ quá lâu
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Đặt thời gian bộ đệm dài hơn cho các tài nguyên tĩnh khác
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Đặt tệp tĩnh mà trình thu thập thông tin sử dụng làm mục nhập trang chủ
location = / {
  # Nếu $botLang không trống, điều đó có nghĩa là trình thu thập thông tin truy cập và chuyển hướng theo đường dẫn ngôn ngữ đã đặt
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Cấu hình ứng dụng một trang
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Định Cấu Hình Lưu Trữ Đối Tượng Để Tải Lên Các Tệp Tĩnh

Các tệp tĩnh có thể được tạo cục bộ, nhưng cách tiếp cận phổ biến hơn là tải chúng lên bộ lưu trữ đối tượng.

Sửa đổi `out` được định cấu hình ở trên thành :

```
out:
  - s3
```

Sau đó, chỉnh sửa `~/.config/i18n.site.yml` và thêm cấu hình sau :

```yml
site:
  i18n.site:
    s3:
      - endpoint: s3.eu-central-003.backblazeb2.com
        ak: # access key
        sk: # secret key
        bucket: # bucket name
        # region:
```

Trong cấu hình, vui lòng thay đổi `i18n.site` thành giá trị `host:` trong `.i18n/htm/main.yml` , nhiều cửa hàng đối tượng có thể được định cấu hình trong `s3` và trường `region` là tùy chọn (nhiều cửa hàng đối tượng không cần đặt trường này).

Sau đó chạy `i18n.site -n` để xuất bản lại dự án.

Nếu bạn đã sửa đổi `~/.config/i18n.site.yml` và muốn tải lên lại, vui lòng sử dụng lệnh sau trong thư mục gốc của dự án để xóa bộ đệm tải lên :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Cấu Hình Đám Mây

Tên miền được lưu trữ [cloudflare](//www.cloudflare.com) .

### Quy Tắc Chuyển Đổi

Thêm các quy tắc chuyển đổi như dưới đây:

![](//p.3ti.site/1725436822.avif)

Mã quy tắc như sau, vui lòng sửa đổi mã "i18n.site" thành tên miền của bạn:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Quy Tắc Bộ Nhớ Đệm

Thêm quy tắc bộ đệm như sau:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Quy Tắc Chuyển Hướng

Đặt quy tắc chuyển hướng như sau, vui lòng sửa đổi mã "i18n.site" thành tên miền của bạn

![](//p.3ti.site/1725437096.avif)

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
) and (
http.user_agent wildcard "*bot*" or
http.user_agent wildcard "*spider*" or
http.user_agent wildcard "*facebookexternalhit*" or
http.user_agent wildcard "*slurp*" or
http.user_agent wildcard "curl*" or
http.user_agent wildcard "*InspectionTool*"
)
```

`URL redirect` Chọn chuyển hướng động, vui lòng sửa đổi `/en` trong đường dẫn chuyển hướng `concat("/en",http.request.uri.path,".htm")` thành ngôn ngữ mặc định mà bạn muốn công cụ tìm kiếm đưa vào.

## Cấu Hình Đám Mây Thông Minh Của Baidu

Nếu bạn cần cung cấp dịch vụ cho Trung Quốc đại lục, bạn có thể sử dụng [Baidu Smart Cloud](//cloud.baidu.com) .

Dữ liệu được tải lên Bộ lưu trữ đối tượng Baidu và được liên kết với Mạng phân phối nội dung Baidu.

Sau đó tạo tập lệnh trong [dịch vụ cạnh EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list)

```js
const uri = r.uri, p = uri.lastIndexOf(".");
if (
  p < 0 ||
  !"|js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest|".includes(
    "|" + uri.slice(p + 1) + "|",
  )
) {
  const ua = r.headersIn["User-Agent"].toLowerCase()
  if (/facebookexternalhit|slurp|bot|spider|curl/.test(ua)) {
    r.return(
      302,
      (/baidu|yisou|sogou|360|byte/.test(ua) ? "/zh" : "/en") + r.uri + ".htm",
    )
  } else {
    r.uri = "/index.html"
  }
}

r.respHeader(() => {
  const t = [], out = r.headersOut;
  ["Content-MD5", "Age", "Expires", "Last-Modified"].forEach(
    i => delete out[i]
  )
  r.rawHeadersOut.forEach(i => {
    const key = i[0].toLowerCase()
    if (key.startsWith("x-") || key.startsWith("ohc-")) {
      delete out[key]
    }
  })
  out["Cache-Control"] = "max-age=" + 9e5
  // Tiêu đề phản hồi có thể được đặt thành đầu ra gỡ lỗi, chẳng hạn như out.XXX = 'MSG';
})
```

Bấm vào `Debug` , sau đó bấm Xuất bản lên toàn bộ mạng.

![](//p.3ti.site/1725437754.avif)

## Cách Sử Dụng Nâng Cao: Phân Phối Lưu Lượng Truy Cập Dựa Trên Độ Phân Giải Khu Vực

Nếu bạn muốn cung cấp dịch vụ ở Trung Quốc đại lục và cũng muốn có `cloudflare` lưu lượng truy cập quốc tế miễn phí, bạn có thể sử dụng `DNS` với độ phân giải khu vực.

Ví dụ: [Huawei Cloud DNS](https://www.huaweicloud.com) cung cấp phân tích khu vực miễn phí, trong đó lưu lượng truy cập của Trung Quốc đại lục có thể đi qua Đám mây thông minh của Baidu và lưu lượng truy cập quốc tế có thể đi qua `cloudflare` .

Có rất nhiều cạm bẫy trong cấu hình của `cloudflare` Dưới đây là một số điểm cần lưu ý :

### Tên Miền Được Lưu Trữ Ở `DNS` Khác, Cách Sử Dụng `cloudflare`

Trước tiên, liên kết một tên miền tùy ý với `cloudflare` , sau đó sử dụng `SSL/TLS` → tên miền tùy chỉnh để liên kết tên miền chính với tên miền này.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Không Thể Được Truy Cập Thông Qua Tên Miền Tùy Chỉnh

Bởi vì tên miền tùy `cloudflare` không thể truy cập bộ lưu trữ đối tượng tích hợp `R2` nên bộ lưu trữ đối tượng của bên thứ ba cần được sử dụng để đặt các tệp tĩnh.

Ở đây chúng tôi lấy [backblaze.com](https://www.backblaze.com) làm ví dụ để minh họa cách liên kết các đối tượng của bên thứ ba được lưu trữ tại `cloudflare` .

Tạo một nhóm tại `backblaze.com` , tải lên bất kỳ tệp nào, nhấp để duyệt tệp và nhận tên miền `Friendly URL` , tức là `f003.backblazeb2.com` tại đây.

![](//p.3ti.site/1725440783.avif)

Thay đổi tên miền từ `CNAME` thành `f003.backblazeb2.com` thành `cloudflare` và kích hoạt proxy.

![](//p.3ti.site/1725440896.avif)

Sửa đổi `cloudflare` trên `SSL` → chế độ mã hóa, đặt thành `Full`

![](//p.3ti.site/1725438572.avif)

Thêm quy tắc chuyển đổi như hình bên dưới, đặt trước (quy tắc đầu tiên có mức độ ưu tiên thấp nhất):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` chọn động và sửa đổi `your_bucketname` trong `concat("/file/your_bucketname",http.request.uri.path)` thành tên nhóm của bạn.

Ngoài ra, trong quy tắc chuyển đổi `cloudflare` ở trên, `index.html` được đổi thành `file/your_bucketname/index.html` , các cấu hình khác vẫn giữ nguyên.

![](//p.3ti.site/1725441384.avif)