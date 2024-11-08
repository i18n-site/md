# Triển Khai Và Trực Tuyến

`i18n.site` áp dụng kiến trúc [ứng dụng một trang](https://developer.mozilla.org/docs/Glossary/SPA) và trang truy cập trang web cũng như nội dung trang web được triển khai độc lập.

Sau khi chạy bản dịch trên, thư mục `htm` và `v` sẽ được tạo trong thư mục `md/out/dev` .

Ở đây, `dev` nghĩa là nó được xây dựng dựa trên file cấu hình `.i18n/htm/dev.yml` .

`dev` thư mục :

Thư mục `htm` là trang vào của trang web.

Thư mục `v` chứa nội dung trang web với số phiên bản.

Bản xem trước cục bộ không quan tâm đến số phiên bản và sẽ sao chép tất cả các tệp vào thư mục `out/dev/v/0.1.0` .

Đối với bản phát hành chính thức, các tệp đã thay đổi sẽ được sao chép vào thư mục số phiên bản mới.

## Chỉ Định Tệp Cấu Hình Bằng `-c`

Các file cấu hình khác nhau sẽ tạo các thư mục tương ứng trong thư mục `out` .

Ví dụ: `.i18n/htm/main.yml` sẽ tạo thư mục `out/main` .

`dev.yml` và `main.yml` là cấu hình mặc định.

`dev` là tên viết tắt của `development` , biểu thị môi trường phát triển, được sử dụng để xem trước cục bộ và cũng là tệp cấu hình mặc định.
`ol` là tên viết tắt của `online` , biểu thị môi trường trực tuyến, được sử dụng để phát hành chính thức. Đây cũng là file cấu hình mặc định khi sử dụng tham số dòng lệnh `-n` đến `npm` để phát hành.

Bạn cũng có thể tạo các tệp cấu hình khác Sử dụng `--htm_conf` trên dòng lệnh để chỉ định tên tệp cấu hình sẽ sử dụng:

Ví dụ:
```
i18n.site --htm_conf dist --save
```

Ở đây `--save` đại diện cho số phiên bản phát hành cập nhật.

## <a rel=id href="#npm" id="npm"></a> Xuất bản nội dung lên npmjs.com

Xuất bản nội dung lên [npmjs.com](//npmjs.com) là giải pháp mặc định được đề xuất (xem [Tính sẵn sàng cao của Front-end](/i18n.site/feature#ha) ).

### npm Đăng Nhập & Đăng

Cài đặt `nodejs` , đăng nhập bằng `npm login` .

Chỉnh sửa `md/.i18n/htm/main.yml` [npmjs.com](//npmjs.com) thay đổi giá trị từ [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` làm tên gói `npm` của riêng bạn.

Sau đó sửa đổi `md/.i18n/htm/main.package.json`

Chạy `i18n.site --npm` hoặc `i18n.site -n` trong thư mục `md` để dịch và xuất bản.

Nếu bạn sử dụng môi trường tích hợp liên tục để xuất bản thì không cần cài đặt `nodejs` Chỉ cần sao chép quyền đăng nhập và xuất bản `~/.npmrc` vào môi trường.

Nếu bạn sửa đổi tên gói `v:` trong `main.yml` , hãy **nhớ xóa `.i18n/v/main` trước** rồi xuất bản nó.

#### Máy Chủ Proxy Được Xuất Bản Bởi npm

Nếu người dùng ở Trung Quốc đại lục gặp sự cố mạng và không thể xuất bản `npm` gói, họ có thể đặt biến môi trường `https_proxy` để định cấu hình máy chủ proxy.

Giả sử rằng cổng máy chủ proxy của bạn là `7890` , bạn có thể viết:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Nội Dung Tự Lưu Trữ

Nếu bạn muốn tự lưu trữ nội dung, trước tiên hãy chỉnh sửa `md/.i18n/htm/main.yml` và thay đổi `v: //unpkg.com/i18n.site` thành tiền tố URL của bạn, chẳng hạn như `v: //i18n-v.xxx.com` .

Nhập thư mục `md` và chạy

```
i18n.site --htm_conf ol --save
```

hoặc viết tắt

```
i18n.site -c ol -s
```

Sau đó, định cấu hình nội dung trong thư mục `md/out/main/v` thành đường dẫn tiền tố URL được đặt trong `v:` .

Cuối cùng, **hãy định cấu hình thời gian bộ đệm của đường dẫn kết thúc bằng `/.v` đến `1s`** , nếu không nội dung mới phát hành sẽ không thể truy cập ngay được.

Thời gian lưu đệm cho các đường dẫn khác có thể được đặt thành một năm hoặc hơn để giảm các yêu cầu không cần thiết.

## Lưu Trữ Nội Dung Vào s3

Để tự lưu trữ nội dung, ngoài việc sử dụng máy chủ của riêng bạn, một lựa chọn phổ biến `CDN` là sử dụng `S3` +

Bạn có thể sử dụng [rclone](https://rclone.org) để đăng nhập vào máy chủ `S3` , sau đó tham khảo và sửa đổi tập lệnh sau và chỉ sao chép các thay đổi tăng dần thành `S3` cho mỗi bản phát hành.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Hãy nhớ cấu hình `CDN` để thời gian cache của đường dẫn kết thúc bằng `/.v` là `1s` , nếu không nội dung mới phát hành sẽ không thể truy cập ngay được.

## Xuất Bản Trang Web

Trang web có thể được triển khai ở mọi nơi, [github page](https://pages.github.com) và [cloudflare page](https://pages.cloudflare.com) là những lựa chọn tốt.

Vì trang web sử dụng kiến trúc [ứng dụng một trang](https://developer.mozilla.org/docs/Glossary/SPA) nên hãy nhớ viết lại đường dẫn URL không chứa `. ` đến `index.html` .

Trang nhập website chỉ cần triển khai một lần và không cần triển khai lại trang nhập website cho các lần cập nhật nội dung tiếp theo.

### Triển Khai Trên Trang github

Đầu tiên [hãy nhấp vào đây github để tạo một tổ chức](https://github.com/account/organizations/new?plan=free) . Tên tổ chức sau đây là `i18n-demo` làm ví dụ.

Sau đó tạo kho `i18n-demo.github.io` thuộc tổ chức này (vui lòng thay `i18n-demo` bằng tên tổ chức bạn đã tạo):

![](https://p.3ti.site/1721098657.avif)

Khi xuất bản nội dung ở bài viết trước, `out/main/htm` đã được tạo. Hãy nhập thư mục này và chạy :

```
ln -s index.html 404.html
```


Vì `github page` không hỗ trợ ghi lại đường dẫn URL nên thay vào đó, `404.html` được sử dụng.

Sau đó chạy lệnh sau vào thư mục `htm` (nhớ thay `i18n-demo/i18n-demo.github.io.git` bằng địa chỉ kho của chính bạn) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Sau khi đẩy mã, hãy đợi quá trình triển khai `github page` chạy thành công (như hình bên dưới) trước khi bạn có thể truy cập vào mã.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Đối với trang demo vui lòng xem:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Triển Khai Trên Trang cloudflare

[cloudflare page](//pages.cloudflare.com) So với `github page` , nó cung cấp khả năng viết lại đường dẫn và thân thiện hơn với Trung Quốc đại lục và dễ tiếp cận hơn.

Việc triển khai `cloudflare page` thường dựa trên việc triển khai `github page` ở trên.

Tạo một dự án và liên kết kho `i18n-demo.github.io` ở trên.

Quá trình này được thể hiện trong hình dưới đây:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Hãy nhấn vào `Add Account` để cấp quyền truy cập cho tổ chức `i18n-demo` .

Nếu bạn đã ràng buộc kho của tổ chức khác, bạn có thể cần phải nhấp vào `Add Account` hai lần để ủy quyền hai lần trước khi tổ chức mới được hiển thị.

![](https://p.3ti.site/1721118306.avif)

Tiếp theo, chọn kho `i18n-demo.github.io` , sau đó nhấp vào `Begin setup` và sử dụng các giá trị mặc định cho các bước tiếp theo.

![](https://p.3ti.site/1721118490.avif)

Sau khi ràng buộc lần đầu tiên, bạn cần đợi vài phút trước khi có thể truy cập.

Sau khi triển khai, bạn có thể liên kết một tên miền tùy chỉnh.

![](https://p.3ti.site/1721119459.avif)

Sau khi ràng buộc tên miền tùy chỉnh, vui lòng truy cập tên miền để định cấu hình ghi lại đường dẫn của ứng dụng một trang, như minh họa bên dưới:

![](https://p.3ti.site/1721119320.avif)

Các quy tắc trong hình trên như sau. Vui lòng thay số `i18n.site` ở dòng đầu tiên bên dưới bằng tên miền bạn đã ràng buộc.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Ngoài ra, vui lòng định cấu hình quy tắc bộ đệm, như hiển thị bên dưới và đặt thời lượng bộ đệm thành một tháng.

![](https://p.3ti.site/1721125111.avif)

Vui lòng thay đổi tên miền khớp ở bước thứ hai trong hình trên thành tên miền bạn đã ràng buộc.

### Tối Ưu Hóa Việc Triển Khai Trang Web Ở Trung Quốc Đại Lục

Nếu bạn muốn có được hiệu suất truy cập tốt hơn trong môi trường mạng ở Trung Quốc đại lục, trước tiên hãy [đăng ký một tên miền](//beian.aliyun.com) .

Sau đó, sử dụng đối tượng lưu trữ của các nhà `CDN` + khai nội dung sau `out/main/htm` .

Bạn có thể sử dụng điện toán ranh giới để viết lại đường dẫn nhằm thích ứng với các ứng dụng một trang. Ví dụ: [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) có thể được định cấu hình như sau:

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

![](https://p.3ti.site/1721121273.avif)

Vì bản ghi `MX` và bản ghi `CNAME` không thể cùng tồn tại nên nếu muốn nhận email tên miền cùng lúc, bạn cần phối hợp với tập lệnh [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) để cấp `CNAME` thành bản ghi `A` .

Ngoài ra, do phí lưu lượng truy cập nước ngoài của các nhà cung cấp đám mây ở Trung Quốc đại lục tương đối đắt, nếu muốn tối ưu hóa chi phí, bạn có thể sử dụng [DNS phân giải địa lý miễn phí của Huawei Cloud](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) và tên miền tùy chỉnh của [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (như hiển thị bên dưới) để đạt được. chuyển hướng giao thông──Định tuyến giao thông ở Trung Quốc đại lục Baidu Cloud `CDN` , lưu lượng truy cập quốc tế tăng cloudflare .

![](https://p.3ti.site/1721119788.avif)

Các giải pháp tối ưu hóa triển khai này phức tạp hơn và sẽ được giới thiệu trong các chương riêng biệt trong tương lai.

### Chuyển Hướng Tên Miền Chung

Nếu bạn sử dụng `i18n.site` để tạo một trang web làm trang web chính của mình, bạn thường cần định cấu hình chuyển hướng tên miền pan, nghĩa là chuyển hướng quyền truy cập đến `*.xxx.com` (bao gồm `www.xxx.com` ) đến `xxx.com` .

Yêu cầu này có thể đạt được với sự trợ giúp của Alibaba Cloud `CDN` `EdgeScript` ( [tài liệu tiếng Anh](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [tài liệu tiếng Trung](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Thêm tên miền vào [Alibaba Cloud CDN](https://cdn.console.aliyun.com/domain/list) và trỏ tên miền `*.xxx.com` `CNAME` trong Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Ví dụ: cấu hình chuyển hướng tên miền pan bằng `*.i18n.site` trong hình trên như sau:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Triển Khai Với nginx

Vui lòng thêm cấu hình tương tự như sau trong đoạn `server` của nginx Vui lòng thay đổi `/root/i18n/md/out/main/htm` thành đường dẫn của dự án `out/main/htm` của riêng bạn:

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Dựa Trên `github action` Tích Hợp Liên Tục

Bạn có thể tham khảo phần sau để cấu hình `github action` của mình:

```
name: i18n.site

on:
  workflow_dispatch:
  push:
    branches:
      - main
      - dist

jobs:
  i18n:

    permissions:
      repository-projects: write
      contents: write

    runs-on: ubuntu-latest

    steps:
      - name: checkout
        uses: actions/checkout@v4

      - name: https://i18n.site
        uses: i18n-site/github-action-i18n.site@main
        with:
          I18N_SITE_TOKEN: ${{ secrets.I18N_SITE_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Như có thể thấy trong cấu hình, quy trình làm việc này được kích hoạt khi đẩy tới nhánh `main` và nhánh `dist` .

Quy trình làm việc sẽ sử dụng tệp cấu hình tương ứng với tên chi nhánh để xuất bản tài liệu. Ở đây, `.i18n/htm/main.yml` và `.i18n/htm/dist.yml` sẽ được sử dụng làm cấu hình xuất bản tương ứng.

Chúng tôi đề xuất các phương pháp hay nhất sau đây cho quy trình phát hành tài liệu:

Khi các thay đổi được đẩy đến nhánh `main` , tài liệu sẽ được kích hoạt để được xây dựng và triển khai đến trạm xem trước (trạm xem trước có sẵn [github page](//pages.github.com) ).

Sau khi xác nhận rằng tài liệu là chính xác trên trang xem trước, mã sẽ được hợp nhất và đẩy đến nhánh `dist` , đồng thời quá trình xây dựng và triển khai chính thức sẽ trực tuyến.

Tất nhiên, việc thực hiện quy trình trên đòi hỏi phải viết nhiều cấu hình hơn.

Bạn có thể tham khảo dự án thực tế [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml) biết kịch bản quy trình làm việc.

`secrets.I18N_SITE_TOKEN` và `secrets.NPM_TOKEN` trong cấu hình yêu cầu bạn định cấu hình các biến bí mật trong cơ sở mã.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` là mã thông báo xuất bản của gói `npm` trong cấu hình Visit [npmjs.com](//npmjs.com) và tạo mã thông báo có quyền xuất bản (như hiển thị bên dưới).

![](//p.3ti.site/1730969906.avif)


## Cấu Trúc Thư Mục

### `public`

Các tệp tĩnh của trang web, chẳng hạn như `favicon.ico` , `robots.txt` , v.v.

Các tệp biểu tượng ở đây có thể được tạo bằng [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

Trong thư mục `.i18n` là các tập tin cấu hình, bộ đệm dịch, v.v. của `i18n.site` Xem chương tiếp theo ["Cấu hình"](/i18n.site/conf) để biết chi tiết.

### `en`

Thư mục ngôn ngữ nguồn, tương ứng với `en` file cấu hình `fromTo` trong `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Mời bạn tham khảo cấu hình dịch nhé [i18](/i18/use)