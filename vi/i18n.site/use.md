# Cài Đặt &

## Mã Thông Báo Cấu Hình

`i18n.site` Công cụ `i18` dịch được nhúng, vui lòng [nhấp vào đây để tham khảo tài liệu `i18` để định cấu hình mã thông báo truy cập](/i18/use) .

## Cài Đặt

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Dự Án Demo

Hãy bắt đầu với một dự án demo và tìm hiểu cách sử dụng `i18n.site`

Trước tiên, chúng tôi sao chép kho lưu trữ demo và chạy lệnh như sau:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Người dùng ở Trung Quốc đại lục có thể:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Tên thư mục của bản sao cơ sở mã phải là `md` để tạo điều kiện cho việc xem trước cục bộ với `docker` `demo.i18n.site`

### Dịch

Đầu tiên, hãy nhập thư mục `md` và chạy `i18n.site` , nó sẽ dịch `en` sang `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Sau khi chạy, các tệp dịch và bộ đệm sẽ được tạo. Hãy nhớ thêm chúng vào kho lưu trữ `git add . ` trong thư mục `md`

### Xem Trước Cục Bộ

Cài đặt và bắt đầu `docker` ( `MAC` khuyên bạn nên sử dụng [orbstack](https://orbstack.dev) làm thời gian chạy của `docker` ).

Sau đó, nhập thư mục `docker` và chạy `./up.sh` , sau đó truy cập [https://127.0.0.1](https://127.0.0.1) để xem trước cục bộ.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Nội Dung Bài Viết

`i18n.site` Thông qua kiến ​​trúc [ứng dụng một trang](https://developer.mozilla.org/docs/Glossary/SPA) và trang truy cập trang web và nội dung trang web được triển khai độc lập.

Sau khi chạy bản dịch trên, thư mục `htm` và `v` sẽ được tạo trong thư mục `md/out/dev`

Ở đây, `dev` chỉ ra rằng nó được xây dựng dựa trên tệp `.i18n/htm/dev.yml` .

`dev` Dưới nội dung :

`htm` Dưới thư mục là trang vào trang web.

`v` Thư mục chứa nội dung trang web với số phiên bản.

Bản xem trước cục bộ sẽ sao chép tất cả các tệp vào thư mục `out/dev/v/0.1.0`

Đối với bản phát hành chính thức, các tệp đã thay đổi sẽ được sao chép vào thư mục số phiên bản mới.

#### Sử Dụng -c Để Chỉ Định Tệp Cấu Hình

Các tệp cấu hình khác nhau sẽ tạo các thư mục tương ứng trong thư mục `out`

Ví dụ: `.i18n/htm/ol.yml` sẽ tạo một thư mục `out/ol` .

`dev.yml` và `ol.yml` là cấu hình mặc định.

`dev` là tên viết tắt của `development` , đại diện cho môi trường phát triển, được sử dụng để xem trước cục bộ và cũng là tệp cấu hình mặc định.
`ol` là tên viết tắt của `online` , đại diện cho môi trường trực tuyến, được sử dụng để phát hành chính thức và cũng là tệp cấu hình mặc định khi xuất bản lên `npm` sử dụng tham số dòng lệnh `-n` .

Bạn cũng có thể tạo các tệp cấu hình khác Sử dụng `--htm_conf` trên dòng lệnh để chỉ định tên tệp cấu hình:

Ví dụ:
```
i18n.site --htm_conf yourConfig --save
```

Ở đây `--save` cho biết số phiên bản phát hành cập nhật.

#### <a rel=id href="#npm" id="npm"></a> Xuất bản nội dung lên npmjs.com

Xuất bản nội dung lên [npmjs.com](//npmjs.com) là giải pháp mặc định được đề xuất (xem [Tính sẵn sàng cao của Front-end](/i18n.site/feature#ha) ).

##### npm login & Giải Phóng

Cài đặt `nodejs` sử dụng `npm login` để đăng nhập.

Chỉnh sửa `md/.i18n/htm/ol.yml` thay đổi `i18n.site` trong `v: //unpkg.com/i18n.site` thành tên gói của riêng bạn `npm` .

Chỉ cần sử dụng tên gói trống trên [npmjs.com](//npmjs.com) Sử dụng tên miền trang web làm tên gói là một lựa chọn tốt.

Khi xuất bản dựa trên gói `npm` , **hãy đảm bảo sử dụng `//unpkg.com/`** làm tiền tố của giá trị `v:` . Thời gian bộ đệm `i18n.site` theo đường dẫn tiền tố này `/.v` đã được tối ưu hóa đặc biệt để cho phép xem kịp thời các bản phát hành mới.

Chạy `i18n.site --npm` hoặc `i18n.site -n` trong thư mục `md`

Nếu bạn sử dụng môi trường tích hợp liên tục để xuất bản thì không cần phải cài đặt nó `nodejs` Chỉ cần sao chép `~/.npmrc` quyền đã đăng nhập và xuất bản vào môi trường.

Nếu bạn sửa đổi tên gói trong `v:` trong `ol.yml` , hãy **nhớ xóa `.i18n/v/ol` trước** rồi xuất bản nó.

##### Máy Chủ Proxy Được Xuất Bản Bởi npm

Nếu người dùng ở Trung Quốc đại lục gặp sự cố mạng và không thể xuất bản gói `npm` , họ có thể đặt biến môi trường `https_proxy` để định cấu hình máy chủ proxy.

Giả sử rằng cổng máy chủ proxy của bạn là `7890` bạn có thể viết:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Nội Dung Tự Lưu Trữ

Nếu bạn muốn tự lưu trữ nội dung, trước tiên, hãy chỉnh sửa `md/.i18n/htm/ol.yml` và thay đổi `v: //unpkg.com/i18n.site` thành tiền tố URL của bạn, chẳng hạn như `v: //i18n-v.xxx.com` .

Nhập thư mục `md` và chạy

```
i18n.site --htm_conf ol --save
```

hoặc viết tắt

```
i18n.site -c ol -s
```

Sau đó, định cấu hình nội dung trong thư mục `md/out/ol/v` thành đường dẫn tiền tố URL được đặt trong `v:` .

Cuối cùng, **hãy định cấu hình thời gian lưu trữ của đường dẫn kết thúc bằng `/.v` thành `1s`** , nếu không nội dung mới phát hành sẽ không thể truy cập được ngay lập tức.

Thời gian lưu đệm cho các đường dẫn khác có thể được đặt thành một năm hoặc hơn để giảm các yêu cầu không cần thiết.

##### Lưu Trữ Nội Dung Vào s3

Để tự lưu trữ nội dung, ngoài việc sử dụng máy chủ của riêng bạn, + `CDN` chọn phổ biến khác là sử dụng `S3`

Bạn có thể sử dụng máy chủ Đăng nhập [rclone](https://rclone.org) `S3` sau đó tham khảo và sửa đổi tập lệnh bên dưới và chỉ sao chép các thay đổi gia tăng vào `S3` mỗi lần bạn xuất bản.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Hãy nhớ cấu hình `CDN` để thời gian cache của đường dẫn kết thúc bằng `/.v` là `1s` , nếu không bạn sẽ không thể truy cập ngay nội dung mới được phát hành.

### Xuất Bản Trang Web

Trang web có thể được triển khai ở mọi nơi, [github page](https://pages.github.com) và [cloudflare page](https://pages.cloudflare.com) là những lựa chọn tốt.

Vì trang web sử dụng kiến ​​trúc của [một ứng dụng một trang](https://developer.mozilla.org/docs/Glossary/SPA) nên `index.html` nhớ viết lại đường dẫn URL không chứa `. `

Trang nhập website chỉ cần triển khai một lần và không cần triển khai lại trang nhập website cho các lần cập nhật nội dung tiếp theo.

#### Triển Khai Trên Trang github

Đầu tiên [hãy nhấp vào đây github để tạo một tổ chức](https://github.com/account/organizations/new?plan=free) . Tên tổ chức sau đây là ví dụ `i18n-demo`

Sau đó tạo kho thuộc tổ chức này `i18n-demo.github.io` (Vui lòng thay `i18n-demo` bằng tên tổ chức bạn đã tạo):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Khi xuất bản nội dung trong bài viết trước, nó đã được tạo `out/ol/htm` Hãy nhập thư mục này và chạy :

```
ln -s index.html 404.html
```


Vì `github page` không hỗ trợ viết lại đường dẫn URL nên `404.html` được sử dụng thay thế.

Sau đó chạy lệnh sau trong thư mục `htm` (nhớ thay `i18n-demo/i18n-demo.github.io.git` bằng địa chỉ kho hàng của bạn) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Sau khi đẩy mã, hãy đợi quá trình triển khai `github page` chạy thành công (như hiển thị bên dưới) và sau đó bạn có thể truy cập nó.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Đối với trang demo vui lòng xem:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Triển Khai Trên Trang cloudflare

[cloudflare page](//pages.cloudflare.com) So với `github page` , nó cung cấp khả năng viết lại đường dẫn và thân thiện hơn với Trung Quốc đại lục và dễ tiếp cận hơn.

`cloudflare page` Việc triển khai thường dựa trên việc triển khai `github page` ở trên.

Tạo một dự án và liên kết kho ở trên `i18n-demo.github.io`

Quá trình này được thể hiện trong hình dưới đây:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Vui lòng nhấp vào `Add Account` để cấp quyền truy cập cho `i18n-demo` tổ chức .

Nếu bạn đã ràng buộc kho của một tổ chức khác, bạn có thể cần phải nhấp vào `Add Account` hai lần để ủy quyền cho tổ chức đó hai lần trước khi tổ chức mới được hiển thị.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Tiếp theo chọn `i18n-demo.github.io` Warehouse, sau đó nhấp vào `Begin setup` và sử dụng các giá trị mặc định cho các bước tiếp theo.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Sau khi ràng buộc lần đầu tiên, bạn cần đợi vài phút trước khi có thể truy cập.

Sau khi triển khai, bạn có thể liên kết một tên miền tùy chỉnh.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Sau khi ràng buộc tên miền tùy chỉnh, vui lòng truy cập tên miền để định cấu hình ghi lại đường dẫn của ứng dụng một trang, như hiển thị bên dưới:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Các quy tắc trong hình trên như sau. Vui lòng thay thế `i18n.site` ở dòng đầu tiên bên dưới bằng tên miền được ràng buộc với bạn.

```
(http.host in {"i18n.site"}) and not (
ends_with(http.request.uri.path,".html") or
ends_with(http.request.uri.path,".htm") or
ends_with(http.request.uri.path,".ico") or
ends_with(http.request.uri.path,".js") or
ends_with(http.request.uri.path,".avif") or
ends_with(http.request.uri.path,".css") or
ends_with(http.request.uri.path,".json") or
ends_with(http.request.uri.path,".png") or
ends_with(http.request.uri.path,".svg") or
ends_with(http.request.uri.path,".txt") or
ends_with(http.request.uri.path,".webmanifest") or
ends_with(http.request.uri.path,".xml")
)
```

Ngoài ra, vui lòng định cấu hình quy tắc bộ đệm, như hiển thị bên dưới và đặt thời lượng bộ đệm thành một tháng.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Vui lòng thay đổi tên miền khớp ở bước thứ hai trong hình trên thành tên miền bạn đã ràng buộc.

#### Tối Ưu Hóa Việc Triển Khai Trang Web Ở Trung Quốc Đại Lục

Nếu bạn muốn có được hiệu suất truy cập tốt hơn trong môi trường mạng ở Trung Quốc đại lục, trước tiên hãy [đăng ký một tên miền](//beian.aliyun.com) .

`out/ol/htm` đó, `CDN` sử dụng kho lưu trữ đối tượng của các nhà cung cấp đám mây ở Trung Quốc đại lục +

Bạn có thể sử dụng điện toán biên để viết lại đường dẫn nhằm thích ứng với các ứng dụng một trang, chẳng hạn như [Đám mây thông minh của Baidu `CDN`](//cloud.baidu.com/product/cdn.html) Nó có thể được định cấu hình như thế này:

```js
var uri=r.uri,p=uri.lastIndexOf('.');
if(
  p<0 || !'|avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml|'.includes('|'+uri.slice(p+1)+'|')
){
  r.uri='/index.html'
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
<img alt="" src="https://p.3ti.site/1721121273.avif">

Vì các bản ghi `MX` và `CNAME` bản ghi không thể cùng tồn tại nên nếu bạn muốn nhận email tên miền cùng lúc, bạn cần hợp tác với tập lệnh [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) để san bằng `CNAME` thành `A` record.

Ngoài ra, do phí lưu lượng truy cập nước ngoài của các nhà cung cấp đám mây ở Trung Quốc đại lục tương đối đắt, nếu muốn tối ưu hóa chi phí, bạn có thể sử dụng [độ phân giải địa lý miễn phí của Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) và tên miền tùy chỉnh của [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (như hiển thị bên dưới) để đạt được. chuyển hướng giao thông──Giao thông ở Trung Quốc đại lục Baidu Cloud `CDN` lưu lượng truy cập quốc tế tăng cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Các giải pháp tối ưu hóa triển khai này phức tạp hơn và sẽ được giới thiệu trong các chương riêng biệt trong tương lai.

#### Chuyển Hướng Tên Miền Chung

Nếu bạn sử dụng `i18n.site` để tạo một trang web làm trang web chính của mình, bạn thường cần định cấu hình chuyển hướng tên miền pan, nghĩa là chuyển hướng quyền truy cập `*.xxx.com` (bao gồm `www.xxx.com` ) vào `xxx.com` .

Yêu cầu này có thể đạt được với sự trợ giúp của `EdgeScript` của Alibaba Cloud `CDN` ( [Tài liệu tiếng Anh](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Tài liệu tiếng Trung](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Thêm tên miền vào [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) và trỏ `*.xxx.com` miền tới `CNAME` của Alibaba Cloud `CDN` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Ví dụ: cấu hình chuyển hướng tên miền pan của `*.i18n.site` trong hình trên như sau:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Triển Khai Với nginx

Vui lòng thêm cấu hình tương tự như sau vào `server` nginx trong đó `/root/i18n/md/out/ol/htm` vui lòng thay đổi nó thành đường dẫn của dự án của riêng bạn `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Cấu Trúc Thư Mục

#### Công Cộng

Các tập tin tĩnh của trang web, chẳng hạn như `favicon.ico` `robots.txt` , v.v.

Các tệp biểu tượng ở đây có thể được tạo bằng [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` Trong thư mục này là các tệp cấu hình của `i18n.site` , bộ đệm dịch, v.v. Xem chương tiếp theo ["Cấu hình"](/i18n.site/conf) để biết chi tiết.

#### Vi

Thư mục ngôn ngữ nguồn, tương ứng `.i18n/conf.yml` `fromTo` `en` trong file cấu hình

```yaml
i18n:
  fromTo:
    en: zh
```

Mời bạn tham khảo cấu hình dịch nhé [i18](/i18/use)

