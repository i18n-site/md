# 検索エンジン最適化 (SEO)

## 原理

`i18n.site`非更新の単一ページ アーキテクチャを採用しており、検索インデックス作成を容易にするために、クローラーがクロールするために別の静的ページと`sitemap.xml`生成されます。

アクセス リクエストの`User-Agent`が検索エンジン クローラーによって使用される場合、リクエストは`302`を介して静的ページにリダイレクトされます。

静的ページでは、このページの別の言語バージョンへのリンクを示すには`link`使用します ( :など)。

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## ローカルの nginx 構成

デモプロジェクトの`.i18n/htm/main.yml`構成ファイルを例として取り上げます

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

まず、上記の`host:`の値をドメイン名に変更してください ( `xxx.com`など)。

次に、 `i18n.site -n` 、静的ページが`out/main/htm`ディレクトリに生成されます。

もちろん、最初に`main`の構成を参照して`.i18n/htm/dist.package.json`と`.i18n/htm/dist.yml`を作成するなど、他の構成ファイルを有効にすることもできます。

次に、 `i18n.site -n -c dist`実行すると、静的ページが`out/dist/htm`に生成されます。

以下の設定を参照すると`nginx`設定可能です。

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# サーバーワーカースクリプトを長時間キャッシュしないでください
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# 他の静的リソースのキャッシュ時間を長く設定する
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# クローラーがホームページのエントリとして使用する静的ファイルを設定します
location = / {
  # $botLangが空でない場合は、設定された言語パスに従ったクローラーのアクセスとリダイレクトを意味します。
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# シングルページアプリケーション構成
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## 静的ファイルをアップロードするためのオブジェクト ストレージを構成する

静的ファイルはローカルで生成できますが、より一般的なアプローチは、静的ファイルをオブジェクト ストレージにアップロードすることです。

上記で設定した`out` :に変更します。

```
out:
  - s3
```

次に、 `~/.config/i18n.site.yml`を編集して次の設定を追加します:

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

設定では、 `i18n.site` `host:` in `.i18n/htm/main.yml`の値に変更してください。複数のオブジェクト ストアは`s3`下に設定でき、 `region`フィールドはオプションです (多くのオブジェクト ストアではこのフィールドを設定する必要はありません)。

次に、 `i18n.site -n`実行してプロジェクトを再公開します。

`~/.config/i18n.site.yml`変更して再アップロードしたい場合は、プロジェクトのルート ディレクトリで次のコマンドを使用してアップロード キャッシュをクリアしてください:

```
rm -rf .i18n/data/seo .i18n/data/public
```


## クラウドフレア構成

にホストされている[cloudflare](//www.cloudflare.com)名。

### 変換ルール

以下に示すように変換ルールを追加します。

![](//p.3ti.site/1725436822.avif)

ルール コードは次のとおりです。コード「i18n.site」をドメイン名に変更してください。

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### キャッシュルール

次のようにキャッシュ ルールを追加します。

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### リダイレクトルール

次のようにリダイレクト ルールを設定します。コード「i18n.site」をドメイン名に変更してください。

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

`URL redirect`動的リダイレクトを選択します。リダイレクト パス`concat("/en",http.request.uri.path,".htm")`の`/en` 、検索エンジンに含めるデフォルトの言語に変更してください。

## Baidu インテリジェント クラウド構成

中国本土にサービスを提供する必要がある場合は、 [Baidu Smart Cloud を](//cloud.baidu.com)使用できます。

データは Baidu Object Storage にアップロードされ、Baidu コンテンツ配信ネットワークにバインドされます。

次に、次のように[EdgeJSサービス](//console.bce.baidu.com/cdn/#/cdn/ejs/list)でスクリプトを作成します。

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
  // 応答ヘッダーは、out.XXX = 'MSG'; などのデバッグ出力に設定できます。
})
```

`Debug`をクリックし、[ネットワーク全体に公開] をクリックします。

![](//p.3ti.site/1725437754.avif)

## 高度な使用法: 地域解像度に基づいてトラフィックを分散します。

中国本土でサービスを提供し、無料の国際トラフィックも`cloudflare`にしたい場合は、地域解像度で`DNS`使用できます。

たとえば、 [Huawei Cloud DNS](https://www.huaweicloud.com)は無料の地域分析を提供しており、これにより中国本土のトラフィックは Baidu Smart Cloud を通過でき、国際トラフィックは`cloudflare`を通過できます。

`cloudflare`の設定には落とし穴がたくさんあります。注意点をいくつか紹介します:

### ドメイン名は他のホストでホストされています`DNS` 、使用方法`cloudflare`

まず任意のドメイン名を`cloudflare`にバインドし、次に`SSL/TLS` → カスタム ドメイン名を使用してメイン ドメイン名をこのドメイン名に関連付けます。

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2`カスタム ドメイン名を介してアクセスできません

`cloudflare`のオブジェクト ストレージ`R2`にはカスタマイズされたドメイン名ではアクセスできないため、静的ファイルを配置するにはサードパーティのオブジェクト ストレージを使用する必要があります。

ここでは、 [backblaze.com](https://www.backblaze.com)を例として、サードパーティのオブジェクトを`cloudflare`にバインドする方法を示します。

`backblaze.com`でバケットを作成し、任意のファイルをアップロードし、クリックしてファイルを参照し、ドメイン名`Friendly URL` (ここでは`f003.backblazeb2.com`を取得します。

![](//p.3ti.site/1725440783.avif)

ドメイン名を`CNAME`から`f003.backblazeb2.com`の`cloudflare`に変更し、プロキシを有効にします。

![](//p.3ti.site/1725440896.avif)

`cloudflare` `SSL`変更 → 暗号化モード、 `Full`に設定

![](//p.3ti.site/1725438572.avif)

以下に示すように変換ルールを追加し、最初に置きます (最初のルールの優先順位が最も低くなります)。

![](//p.3ti.site/1725443232.avif)

`Rewrite to`動的を選択し、 `your_bucketname` in `concat("/file/your_bucketname",http.request.uri.path)`バケット名に変更します。

また、上記の`cloudflare`変換ルールでは、 `index.html` `file/your_bucketname/index.html`に変更され、その他の構成は変わりません。

![](//p.3ti.site/1725441384.avif)