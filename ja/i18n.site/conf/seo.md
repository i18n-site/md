# 検索エンジン最適化 (SEO)

## 原理

`i18n.site`は無刷新の単一ページアーキテクチャを採用しており、検索インデックスの作成を容易にするため、個別の静的ページと`sitemap.xml`を生成してクローラーにクロールさせます。

アクセスリクエストの`User-Agent`が検索エンジンのクローラーである場合、リクエストは`302`を介して静的ページにリダイレクトされます。

静的ページ上では、`link`タグを使用して、このページの異なる言語バージョンのリンクを示します。例えば:

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## 静的ファイルをアップロードするためのオブジェクトストレージを設定する

静的ファイルはローカルに生成することもできますが、一般的にはオブジェクトストレージにアップロードする方法が好まれます。

デモプロジェクトの`.i18n/htm/ol.yml`設定ファイルを例にします

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

まず、上記の`host:`の値をあなたのドメイン名に変更してください。例えば `i18n.site`。

次に、`~/.config/i18n.site.yml`を編集し、以下の設定を追加します:

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

設定では、`.i18n/htm/ol.yml`の`host:`の値に`i18n.site`を変更してください。`s3`の下に複数のオブジェクトストレージを設定できます。`region`フィールドは任意です(多くのオブジェクトストレージではこのフィールドは不要です)。

その後、`i18n.site -n`を実行してプロジェクトを再公開します。

`~/.config/i18n.site.yml`を変更して再アップロードしたい場合は、プロジェクトのルートディレクトリで以下のコマンドを使用してアップロードキャッシュをクリアしてください:

```
rm -rf .i18n/data/seo .i18n/data/public
```

## クラウドflareの設定

ドメインを[cloudflare](//www.cloudflare.com)に托管します。

### 変換ルール

以下図のように変換ルールを追加します

![](//p.3ti.site/1725436822.avif)

ルールコードは以下の通りで、コード中の「i18n.site」をあなたのドメイン名に変更してください

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### キャッシュルール

以下のようにキャッシュルールを追加します

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### リダイレクトルール

以下のようにリダイレクトルールを設定します。コード中の「i18n.site」をあなたのドメイン名に変更してください

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

`URL redirect`を動的リダイレクトに選択し、`concat("/en",http.request.uri.path,".htm")`の`/en`を検索エンジンがインデックスするデフォルトの言語に変更してください。

## 百度智能云の設定

中国本土にサービスを提供する必要がある場合は、[百度智能云](//cloud.baidu.com)を使用できます。

データを百度オブジェクトストレージにアップロードし、百度コンテンツ配信ネットワークにバインドします。

その後、[EdgeJSエッジサービス](//console.bce.baidu.com/cdn/#/cdn/ejs/list)で以下のようにスクリプトを作成します

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

`Debug`をクリックし、全网发布をクリックします。

![](//p.3ti.site/1725437754.avif)

## 高度な用法: 地域解析に基づくトラフィック分散

中国本土でサービスを提供しつつ、無料の国際トラフィックを`cloudflare`で利用したい場合は、地域解析に基づく`DNS`を使用します。

例えば、[华为云DNS](https://www.huaweicloud.com)は無料の地域解析を提供しており、これにより中国本土のトラフィックは百度智能云を通じて、国際トラフィックは`cloudflare`を通じて分散できます。

`cloudflare`の設定にはいくつかの落とし穴があります。以下にいくつかの注意点を紹介します

### ドメインが他の`DNS`で托管されている場合、`cloudflare`をどのように使用するか

まず任意のドメインを`cloudflare`にバインドし、次に`SSL/TLS` → カスタムドメインを使用してメインドメインをこのドメインに関連付けます。

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2`はカスタムドメイン名を介してアクセス不可

`cloudflare`のオブジェクトストレージ`R2`はカスタムドメイン名でアクセスできないため、静的ファイルを配置するにはサードパーティのオブジェクトストレージを使用する必要があります。

ここでは、[backblaze.com](https://www.backblaze.com)を例にして、サードパーティのオブジェクトストレージを`cloudflare`にバインドする方法を示します。

`backblaze.com`でバケットを作成し、任意のファイルをアップロードし、ファイルを参照してクリックして、`Friendly URL`のドメイン名を取得します。ここでは`f003.backblazeb2.com`です。

![](//p.3ti.site/1725440783.avif)

ドメイン名を`CNAME`から`f003.backblazeb2.com`の`cloudflare`に変更し、プロキシを有効にします。

![](//p.3ti.site/1725440896.avif)

`cloudflare`の`SSL` → 暗号化モードを`Full`に設定します

![](//p.3ti.site/1725438572.avif)

以下図のように変換ルールを追加し、最初に配置します(最初のルールは優先順位が最も低くなります)

![](//p.3ti.site/1725443232.avif)

`Rewrite to`を動的を選択し、`concat("/file/your_bucketname",http.request.uri.path)`の`your_bucketname`をあなたのバケット名に変更します。

また、前述の`cloudflare`変換ルールでは、`index.html`を`file/your_bucketname/index.html`に変更し、他の設定はそのままにします。

![](//p.3ti.site/1725441384.avif)