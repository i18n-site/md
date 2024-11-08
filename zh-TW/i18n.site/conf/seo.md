# 搜索引擎優化(SEO)

## 原理

`i18n.site`采用了無刷新單頁面架構，為了方便搜索索引，會生成單獨靜態頁面和`sitemap.xml`讓爬虫抓取。

当訪問請求的`User-Agent`被為搜索引擎的爬虫時，會通過`302`將請求重定向到靜態頁面。

靜態頁面上，用`link`標明此頁面不同語言版本的鏈接，比如:

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## 本地 nginx 配置

以演示項目中`.i18n/htm/main.yml`配置文件為例

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

請首先修改上面`host:`的值為您的域名，比如`xxx.com`。

然后，`i18n.site -n`，靜態頁面會生成到 `out/main/htm` 目錄下。

当然你也可以啟用其他配置文件，比如先參考`main`的配置創建`.i18n/htm/dist.package.json`和`.i18n/htm/dist.yml`。

然后運行`i18n.site -n -c dist`，這樣靜態頁面會生成到`out/dist/htm`。

`nginx` 可以參考下面的配置來設置

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# server worker 的腳本不要緩存太久
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# 其他靜態資源設置較長的緩存時間
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# 設置爬虫用哪個靜態文件作為首頁入口
location = / {
  # 如果 $botLang 不為空，則表示是爬虫訪問，根據設置的語言路徑重定向
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# 單頁面應用配置
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## 配置上傳靜態文件的對象存儲

靜態文件可以生成到本地，但更常見的做法是將其上傳到對象存儲。

修改上面配置的`out`為:

```
out:
  - s3
```

然后，編輯`~/.config/i18n.site.yml`，加入如下的配置:

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

配置中,`i18n.site`請修改為`.i18n/htm/main.yml`中`host:`的值,`s3`下面可以配置多個對象存儲,`region`字段是可選的(很多對象存儲不需要設置此字段)。

然后運行`i18n.site -n`重新发布項目。

如果修改了`~/.config/i18n.site.yml`,  想重新上傳, 請在項目根目錄下, 用下面的命令清理上傳緩存:

```
rm -rf .i18n/data/seo .i18n/data/public
```


## cloudflare 配置

域名托管到 [cloudflare](//www.cloudflare.com) 。

### 轉換規則

添加如下圖的轉換規則:

![](//p.3ti.site/1725436822.avif)

規則代碼如下，請修改代碼"i18n.site"為你的域名:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### 緩存規則

添加緩存規則如下:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### 重定向規則

設置重定向規則如下，請修改代碼"i18n.site"為你的域名

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

`URL redirect`選擇動態重定向，請修改重定向路徑`concat("/en",http.request.uri.path,".htm")`中的`/en`為你想讓搜索引擎收錄默認語言。

## 百度智能云配置

如果你需要面向中國大陸地區提供服務，可以使用[百度智能云](//cloud.baidu.com)。

數據上傳到百度對象存儲，并綁定到百度內容分发網絡。

然后在 [EdgeJS邊緣服務](//console.bce.baidu.com/cdn/#/cdn/ejs/list) 創建腳本如下

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
  // 可設置響應頭來調試輸出，比如 out.XXX = 'MSG';
})
```

點擊`Debug`，然后點擊全網发布。

![](//p.3ti.site/1725437754.avif)

## 高級用法: 基于地域解析分发流量

如果你既想在中國大陸地區提供服務，又想要`cloudflare`的免費國際流量，可以使用帶有地域解析的`DNS`。

比如[華為云DNS](https://www.huaweicloud.com)就提供了免費的地域解析，借助它可以實現中國大陸流量走百度智能云，國際流量走`cloudflare`。

`cloudflare`的配置有不少坑，這里說几個注意點:

### 域名托管在其他`DNS`，怎么用`cloudflare`

首先綁定一個任意域名到`cloudflare`，然后借助`SSL/TLS`→ 自定義域名，關聯主域名到此域名。

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2`無法通過自定義域名訪問

因為`cloudflare`自帶的對象存儲`R2`無法自定義域名訪問，所以需要用第三方的對象存儲來放置靜態文件。

這里以 [backblaze.com](https://www.backblaze.com) 為例，演示怎么綁定第三方對象存儲到`cloudflare`。

在`backblaze.com`創建存儲桶，上傳任意文件，點擊瀏覽文件，获取`Friendly URL`的域名，這里是`f003.backblazeb2.com`。

![](//p.3ti.site/1725440783.avif)

在`cloudflare`將域名`CNAME`到`f003.backblazeb2.com`，并開啟代理。

![](//p.3ti.site/1725440896.avif)

修改`cloudflare`的`SSL`→ 加密模式，設置為`Full`

![](//p.3ti.site/1725438572.avif)

添加轉換規則如下圖，放在首位(首位優先級最低):

![](//p.3ti.site/1725443232.avif)

`Rewrite to`選擇動態，修改`concat("/file/your_bucketname",http.request.uri.path)`中的`your_bucketname`為你的存儲桶名。

此外，上文的`cloudflare`轉換規則 中`index.html`改為`file/your_bucketname/index.html`，其他配置照舊。

![](//p.3ti.site/1725441384.avif)