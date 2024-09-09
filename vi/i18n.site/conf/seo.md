# Tối ưu hóa công cụ tìm kiếm (SEO)

## Nguyên tắc

`i18n.site` sử dụng kiến trúc một trang không làm mới, nhằm tạo điều kiện thuận lợi cho việc lập chỉ mục tìm kiếm, sẽ生成 các trang tĩnh riêng biệt và `sitemap.xml` để cho các trình thu thập thông tin quét.

Khi `User-Agent` của yêu cầu truy cập là trình thu thập thông tin của công cụ tìm kiếm, yêu cầu sẽ được chuyển hướng đến trang tĩnh qua `302`.

Trên trang tĩnh, sử dụng thẻ `link` để chỉ định các liên kết đến các phiên bản ngôn ngữ khác nhau của trang, ví dụ:

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Định cấu hình đối tượng lưu trữ để tải lên các tệp tĩnh

Các tệp tĩnh có thể được tạo ra trên máy local, nhưng phổ biến hơn là tải chúng lên hệ thống lưu trữ đối tượng.

Lấy ví dụ từ file cấu hình `.i18n/htm/ol.yml` trong dự án demo

```yml
host:
seo: true
out:
  - s3
v: //unpkg.com/i18n.site
x: 18x
importmap:
  i/: //unpkg.com/@i18n.site/
```

Trước tiên, hãy sửa đổi giá trị `host:` thành tên miền của bạn, ví dụ như `i18n.site`.

Sau đó, chỉnh sửa `~/.config/i18n.site.yml`, thêm cấu hình như sau:

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

Trong cấu hình, `i18n.site` vui lòng thay đổi thành giá trị `host:` trong `.i18n/htm/ol.yml`, `s3` có thể cấu hình nhiều đối tượng lưu trữ, trường `region` là tùy chọn (nhiều hệ thống lưu trữ đối tượng không cần thiết lập trường này).

Sau đó chạy lệnh `i18n.site -n` để xuất bản lại dự án.

Nếu bạn đã sửa đổi `~/.config/i18n.site.yml` và muốn tải lên lại, vui lòng sử dụng lệnh sau trong thư mục gốc của dự án để làm sạch bộ nhớ cache tải lên:

```
rm -rf .i18n/data/seo .i18n/data/public
```

## Cấu hình Cloudflare

Tên miền được托管 trên [cloudflare](//www.cloudflare.com).

### Quy tắc chuyển đổi

Thêm quy tắc chuyển đổi như hình dưới đây:

![](//p.3ti.site/1725436822.avif)

Mã quy tắc như sau, vui lòng thay đổi mã "i18n.site" thành tên miền của bạn:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Quy tắc bộ nhớ cache

Thêm quy tắc bộ nhớ cache như sau:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Quy tắc chuyển hướng

Đặt quy tắc chuyển hướng như sau, vui lòng thay đổi mã "i18n.site" thành tên miền của bạn:

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

`URL redirect` chọn chuyển hướng động, vui lòng thay đổi `/en` trong đường dẫn chuyển hướng `concat("/en",http.request.uri.path,".htm")` thành ngôn ngữ mặc định mà bạn muốn công cụ tìm kiếm索引.

## Cấu hình百度智能云

Nếu bạn cần cung cấp dịch vụ cho khu vực Trung Quốc đại lục, bạn có thể sử dụng [百度智能云](//cloud.baidu.com).

Dữ liệu được tải lên Bộ lưu trữ đối tượng Baidu và được liên kết với Mạng phân phối nội dung Baidu.

Sau đó, tạo script trong [EdgeJS边缘服务](//console.bce.baidu.com/cdn/#/cdn/ejs/list) như sau:

```js
var uri=r.uri,p=uri.lastIndexOf('.');

if(
  p<0 || !/html?|css|rss|avif|md|ico|gz|js|json|png|svg|txt|webmanifest|xml/.test(uri.slice(p+1))
){
  const ua = r.headersIn['User-Agent'].toLowerCase();
  if (/facebookexternalhit|slurp|bot|spider|curl/.test(ua)) {
    r.return(302,(/baidu|yisou|sogou|360|byte/.test(ua)?'/zh':'/en')+r.uri+'.htm')
    return
  }
  r.uri = '/index.html'
}

r.respHeader(()=>{
var t = [];
r.rawHeadersOut.forEach((i)=>{
    var out = r.headersOut;
    var key = i[0].toLowerCase();
    if(key.startsWith('x-')||key.startsWith('ohc-')){
        delete out[key]
    }
    out['Cache-Control']='max-age='+9e5;
    ['Content-MD5','Age','Expires','Last-Modified'].forEach((i)=>delete out[i])
})

})
```

Bấm vào `Debug` , sau đó bấm Xuất bản lên toàn bộ mạng.

![](//p.3ti.site/1725437754.avif)

## Cách sử dụng nâng cao: Phân phối lưu lượng dựa trên phân tích khu vực

Nếu bạn muốn cung cấp dịch vụ ở Trung Quốc đại lục và cũng muốn có lưu lượng truy cập quốc tế miễn phí từ `cloudflare`, bạn có thể sử dụng `DNS` với khả năng phân tích khu vực.

Ví dụ: [Huawei Cloud DNS](https://www.huaweicloud.com) cung cấp phân tích khu vực miễn phí, giúp lưu lượng truy cập từ Trung Quốc đại lục đi qua Baidu Smart Cloud và lưu lượng truy cập quốc tế đi qua `cloudflare`.

Có rất nhiều坑 trong việc cấu hình `cloudflare`. Dưới đây là một số điểm cần lưu ý:

### Tên miền được lưu trữ trên `DNS` khác, cách sử dụng `cloudflare`

Trước tiên, liên kết một tên miền tùy ý với `cloudflare`, sau đó sử dụng `SSL/TLS` → Tên miền tùy chỉnh để liên kết tên miền chính với tên miền này.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` không thể truy cập qua tên miền tùy chỉnh

Bởi vì `cloudflare`自带的对象存储 `R2` không thể truy cập qua tên miền tùy chỉnh, bạn cần sử dụng hệ thống lưu trữ đối tượng của bên thứ ba để đặt các tệp tĩnh.

Ở đây, lấy ví dụ [backblaze.com](https://www.backblaze.com) để minh họa cách liên kết hệ thống lưu trữ đối tượng của bên thứ ba với `cloudflare`.

Tạo một bucket trên `backblaze.com`, tải lên bất kỳ tệp nào, nhấp để duyệt tệp và nhận tên miền `Friendly URL`, tức là `f003.backblazeb2.com` ở đây.

![](//p.3ti.site/1725440783.avif)

Trong `cloudflare`, thay đổi tên miền `CNAME` thành `f003.backblazeb2.com` và bật proxy.

![](//p.3ti.site/1725440896.avif)

Thay đổi `SSL` của `cloudflare` → Chế độ mã hóa thành `Full`

![](//p.3ti.site/1725438572.avif)

Thêm quy tắc chuyển đổi như hình bên dưới, đặt ở vị trí đầu tiên (quy tắc đầu tiên có mức độ ưu tiên thấp nhất):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` chọn động và thay đổi `your_bucketname` trong `concat("/file/your_bucketname",http.request.uri.path)` thành tên bucket của bạn.

Ngoài ra, trong quy tắc chuyển đổi `cloudflare` ở trên, `index.html` được thay đổi thành `file/your_bucketname/index.html`, các cấu hình khác giữ nguyên.

![](//p.3ti.site/1725441384.avif)