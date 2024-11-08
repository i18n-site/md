# 部署上线

`i18n.site`采用了[單頁應用](https://developer.mozilla.org/docs/Glossary/SPA)的架構，網站入口頁面 和 網站內容 分别獨立部署。

運行上面翻譯后，會在`md/out/dev`目錄下生成`htm`和`v`目錄。

這里，`dev`表示是基于`.i18n/htm/dev.yml`配置文件來構建。

`dev`目錄下:

`htm`目錄下是網站入口頁。

`v`目錄下是帶版本號網站內容。

本地預覽不用管版本號，會把文件都复制到`out/dev/v/0.1.0`目錄下。

正式发布，會复制有改動的文件到新的版本號目錄下。

## 用 `-c` 指定配置文件

不同的配置文件，會創建對應的目錄到`out`目錄下。

比如，`.i18n/htm/main.yml`會創建`out/main`目錄。

`dev.yml`和`main.yml`是默認自帶的配置。

`dev`是`development`的縮寫，表示開发環境，用于本地預覽，也是默認的配置文件。
`ol`是`online`的縮寫，表示线上環境，用于正式发布，也是使用命令行參數`-n`发布到`npm`時的默認配置文件。

您也可以創建其他配置文件，命令行中使用`--htm_conf`可以指定使用配置文件名：

比如：
```
i18n.site --htm_conf dist --save
```

這里`--save`表示更新发布版本號。

## <a rel=id href="#npm" id="npm"></a> 发布內容到 npmjs.com

发布內容到 [npmjs.com](//npmjs.com) 是推荐的默認方案 ( 參見[前端高可用](/i18n.site/feature#ha) )。

### npm 登錄 & 发布

安裝`nodejs`，使用`npm login`登錄。

編輯`md/.i18n/htm/main.yml`，修改[`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7)的值`YOUR_NPM_PACKAGE`為你自己的`npm`包名，任何 [npmjs.com](//npmjs.com) 上未被占用的包名都可以。

然后修改`md/.i18n/htm/main.package.json`

在`md`目錄下運行`i18n.site --npm`或`i18n.site -n`即可翻譯并发布。

如您使用持續集成環境來发布，無需安裝`nodejs`，复制已登錄并有发布權限`~/.npmrc`到該環境下即可。

如果修改了`main.yml`中`v:`的包名，請**務必先刪除`.i18n/v/main`**，然后再发布。

#### npm 发布的代理服務器

中國大陸用戶會如果遇到網絡問題導致無法发布`npm`包，可以設置環境變量`https_proxy`來配置代理服務器。

假設你的代理服務器端口是`7890`，可以這么寫：

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## 自托管內容

若想自托管內容，首先，編輯`md/.i18n/htm/main.yml`，修改`v: //unpkg.com/i18n.site`為您的網址前綴，比如`v: //i18n-v.xxx.com`。

進入`md`目錄運行

```
i18n.site --htm_conf ol --save
```

或者簡寫

```
i18n.site -c ol -s
```

然后，配置`md/out/main/v`目錄下的內容到`v:`中設置的網址前綴路徑。

最后，**配置`/.v`結尾的路徑緩存時間為`1s`**，否則無法即時訪問到新发布的內容。

其他路徑的緩存時間可設置為一年或更多，以減少不必要的請求。

## 托管內容到 s3

自托管內容，除了使用自己的服務器，另一個常見的選擇是用`S3`+`CDN`。

可以使用 [rclone](https://rclone.org) 登錄`S3`服務器，然后參考并修改下面的腳本，每次发布只复制增量的改動到`S3`。

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

記得配置`CDN`，讓`/.v`結尾的路徑緩存時間為`1s`，否則無法即時訪問到新发布的內容。

## 发布網站

網站可以部署到任何地方，[github page](https://pages.github.com)、[cloudflare page](https://pages.cloudflare.com) 都是不錯的選擇。

因為網站采用了[單頁應用](https://developer.mozilla.org/docs/Glossary/SPA)的架構，所以記得重寫不包含`. `的網址路徑到`index.html`。

網站入口頁只需部署一次，后續內容更新，也無需重新部署網頁入口頁。

### 在 github page 上部署

首先 [點此在 github 創建組織](https://github.com/account/organizations/new?plan=free)，下文組織名以`i18n-demo`為例。

然后在此組織下面創建倉庫`i18n-demo.github.io`（請替換`i18n-demo`為您創建的組織名）：

![](https://p.3ti.site/1721098657.avif)

在前文发布內容時，已經生成`out/main/htm`，這里請進入此目錄，然后運行:

```
ln -s index.html 404.html
```


因為`github page`不支持網址路徑重寫，所以上面用`404.html`作為代替。

接着在`htm`目錄下運行下面的命令（記得替換`i18n-demo/i18n-demo.github.io.git`為您自己的倉庫地址）:

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

推送代碼后，等`github page`的部署運行成功（如下圖），即可訪問。

<img src="//p.3ti.site/1721116586.avif" width="350px">

演示頁面請參見:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### 在 cloudflare page 上部署

[cloudflare page](//pages.cloudflare.com)相比`github page`，提供了路徑重寫，以及對中國大陸更友好的可訪問性，推荐使用。

`cloudflare page`的部署，通常會基于上面`github page`的部署。

創建項目，綁定上面的`i18n-demo.github.io`倉庫。

流程如下圖所示:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

請點擊`Add Account`，授權訪問`i18n-demo`組織的權限。

如綁定過其他組織的倉庫，可能需要點兩次`Add Account`來授權兩次，才會顯示新的組織。

![](https://p.3ti.site/1721118306.avif)

接下來選擇`i18n-demo.github.io`倉庫，然后點擊`Begin setup`，后續步驟都用默認值即可。

![](https://p.3ti.site/1721118490.avif)

首次綁定，需要等待几分钟才可以訪問。

部署之后，可以綁定自定義域名。

![](https://p.3ti.site/1721119459.avif)

綁定自定義域名后，請到域名下面配置單頁應用的路徑重寫，如下圖:

![](https://p.3ti.site/1721119320.avif)

上圖的規則如下，請替換下面第一行的`i18n.site`為您綁定的域名。

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

此外，請配置緩存規則，如下圖，配置緩存時長為一個月。

![](https://p.3ti.site/1721125111.avif)

上圖中第二步的域名匹配請改為您綁定的域名。

### 對中國大陸的網站部署優化

想在中國大陸的網絡環境下获得更好可訪問性能，請先[備案域名](//beian.aliyun.com)。

然后，利用中國大陸云廠商的對象存儲+`CDN`部署`out/main/htm`下面的內容即可。

可以用邊緣計算重寫路徑來適配單頁應用，比如[百度智能云`CDN`](//cloud.baidu.com/product/cdn.html)可這樣配置：

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

![](https://p.3ti.site/1721121273.avif)

因為`MX`記錄和`CNAME`記錄不能共存，若想同時收取域名郵件，還需要配合[cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)腳本，把`CNAME`拉平為`A`記錄。

此外，因為中國大陸的云廠商海外流量的費用較貴，想優化成本，可以配合[華為云DNS的免費地域解析](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html)，以及 [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) 的自定義域名（如下圖），實現流量分流 ── 中國大陸的流量走百度云`CDN`，國際流量走cloudflare。

![](https://p.3ti.site/1721119788.avif)

這些部署優化方案較复雜，將在未來撰寫單獨的章節介紹。

### 泛域名的重定向

如果使用`i18n.site`生成網站作為您的主網站，通常還需配置泛域名重定向，也就是把`*.xxx.com`（包含了`www.xxx.com`）的訪問重定向到`xxx.com`。

此需求可以借助阿里云`CDN`的`EdgeScript`來實現 ( [英文文檔](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [中文文檔](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

在[阿里云的CDN](https://cdn.console.aliyun.com/domain/list)添加域名，將`*.xxx.com`域名指向阿里云`CDN`的`CNAME`。

![](https://p.3ti.site/1721122000.avif)

比如上圖的`*.i18n.site`的泛域名重定向配置如下：

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### 用 nginx 部署

請在nginx的`server`段落中添加類似如下的配置，其中`/root/i18n/md/out/main/htm`請改為你自己項目`out/main/htm`的路徑：

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## 基于 `github action` 持續集成

可以參考下面配置您的`github action`：

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

配置中可見，当推送到`main`分支和`dist`分支的時候都會觸发此工作流。

工作流會使用分支名對應的配置文件來发布文檔，這里分别會使用 `.i18n/htm/main.yml` 和 `.i18n/htm/dist.yml` 作為发布配置。

我們推荐文檔发布流程的最佳實踐如下:

当有改動推送到`main`分支時，觸发文檔構建并部署到預覽站(預覽站可以用[github page](//pages.github.com))。

在預覽站確認文檔無誤后，再合并代碼推送到`dist`分支，正式構建部署上线。

当然，實現上述流程需要撰寫更多配置。

您可以參考實際項目[github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)的工作流腳本編寫 。

配置中 `secrets.I18N_SITE_TOKEN` 和 `secrets.NPM_TOKEN` 是需要你在代碼庫中配置秘密變量。

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` 可訪問 [i18n.site/token](//i18n.site/token) 获取。

`NPM_TOKEN`是配置中`npm`包的发布令牌，訪問[npmjs.com](//npmjs.com)，創建具有发布權限的令牌(如下圖)。

![](//p.3ti.site/1730969906.avif)


## 目錄結構

### `public`

網站的靜態文件，比如`favicon.ico`,`robots.txt`等等。

這里的圖標文件可以用 [realfavicongenerator.net](https://realfavicongenerator.net) 生成。

### `.i18n`

`.i18n`目錄下是`i18n.site`的配置文件、翻譯緩存等，詳見下一章[『配置』](/i18n.site/conf)。

### `en`

源語言目錄，對應`.i18n/conf.yml`配置文件中`fromTo`的`en`

```yaml
i18n:
  fromTo:
    en: zh
```

翻譯的配置請參考[i18](/i18/use)。