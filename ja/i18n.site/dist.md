# 導入とオンライン

`i18n.site`では[シングルページアプリケーション](https://developer.mozilla.org/docs/Glossary/SPA)アーキテクチャを採用しており、Webサイトの入口ページとWebサイトのコンテンツが独立して展開されています。

上記の変換を実行すると、ディレクトリ`md/out/dev`の下にディレクトリ`htm`と`v`生成されます。

ここで、 `dev` `.i18n/htm/dev.yml`設定ファイルに基づいて構築されることを意味します。

`dev`ディレクトリー:

`htm`ディレクトリは Web サイトの入り口ページです。

`v`ディレクトリには、バージョン番号が付いた Web サイトのコンテンツが含まれています。

ローカル プレビューではバージョン番号は考慮されず、すべてのファイルが`out/dev/v/0.1.0`ディレクトリにコピーされます。

正式リリースの場合、変更されたファイルは新しいバージョン番号のディレクトリにコピーされます。

## 設定ファイルを`-c`で指定

異なる設定ファイルは、 `out`ディレクトリに対応するディレクトリを作成します。

たとえば、 `.i18n/htm/main.yml`指定すると`out/main`ディレクトリが作成されます。

`dev.yml`と`main.yml`デフォルトの構成です。

`dev`は`development`の省略形で、開発環境を示し、ローカル プレビューに使用され、デフォルトの構成ファイルでもあります。
`ol`は`online`の省略形で、正式リリースに使用されるオンライン環境を示します。これは、コマンド ライン パラメータ`-n` ～ `npm`使用してリリースする場合のデフォルトの設定ファイルでもあります。

他の構成ファイルを作成することもできます。コマンド ラインで`--htm_conf`使用して、使用する構成ファイル名を指定します。

例えば:
```
i18n.site --htm_conf dist --save
```

ここで、 `--save`アップデートのリリースのバージョン番号を表します。

## <a rel=id href="#npm" id="npm"></a> コンテンツを npmjs.com に公開する

コンテンツを[npmjs.com](//npmjs.com)に公開することが推奨されるデフォルトのソリューションです ( [「フロントエンドの高可用性](/i18n.site/feature#ha)」を参照)。

### npmログイン&投稿

`nodejs`インストールし、 `npm login`でログインします。

`md/.i18n/htm/main.yml`を編集し、 [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE`値を独自の`npm`パッケージ名として変更します。 [npmjs.com](//npmjs.com)上の任意のパッケージ名を使用できます。

次に、 `md/.i18n/htm/main.package.json`変更します

`md`ディレクトリで`i18n.site --npm`または`i18n.site -n`実行して、翻訳して公開します。

継続的統合環境を使用して公開する場合、 `nodejs`インストールする必要はありません。ログイン済みの公開権限`~/.npmrc`環境にコピーするだけです。

`main.yml`の`v:`のパッケージ名を変更する場合は、**必ず`.i18n/v/main`削除してから公開してください**。

#### npm によって公開されるプロキシ サーバー

中国本土のユーザーがネットワークの問題に遭遇し、 `npm`パッケージを公開できない場合は、環境変数`https_proxy`設定してプロキシ サーバーを構成できます。

プロキシ サーバーのポートが`7890`であると仮定すると、次のように記述できます。

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## 自己ホスト型コンテンツ

コンテンツをセルフホストする場合は、まず`md/.i18n/htm/main.yml`を編集し、 `v: //unpkg.com/i18n.site` URL プレフィックス ( `v: //i18n-v.xxx.com`など) に変更します。

`md`ディレクトリに入って実行します。

```
i18n.site --htm_conf ol --save
```

または略語

```
i18n.site -c ol -s
```

次に、 `md/out/main/v`ディレクトリのコンテンツを`v:`で設定した URL プレフィックス パスに設定します。

最後に、**末尾が`/.v`から`1s`パスのキャッシュ時間を構成します**。そうしないと、新しくリリースされたコンテンツにすぐにアクセスできなくなります。

他のパスのキャッシュ時間を 1 年以上に設定して、不要なリクエストを減らすことができます。

## コンテンツを s3 にホストする

コンテンツをセルフホストするには、独自のサーバーを使用することに加えて、 `S3` + `CDN`を使用することも一般的なオプションです。

[rclone](https://rclone.org)使用して`S3`サーバーにログインし、次のスクリプトを参照して変更し、リリースごとに増分変更を`S3`にコピーするだけです。

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

`/.v`で終わるパスのキャッシュ時間が`1s`になるように`CDN`を構成することを忘れないでください。そうしないと、新しくリリースされたコンテンツにすぐにアクセスできなくなります。

## ウェブサイトを公開する

Web サイトはどこにでも展開できます。 [github page](https://pages.github.com)および[cloudflare page](https://pages.cloudflare.com)は適切な選択です。

Web サイトは[単一ページのアプリケーション](https://developer.mozilla.org/docs/Glossary/SPA)アーキテクチャを使用しているため、 `. `含まない URL パスを必ず`index.html`に書き換えてください。

Web サイトのエントリ ページを展開する必要があるのは 1 回だけであり、その後のコンテンツ更新のために Web サイトのエントリ ページを再展開する必要はありません。

### githubページにデプロイする

まず[ここをクリックして組織を作成しgithub](https://github.com/account/organizations/new?plan=free) 。以下の組織名は例として`i18n-demo`です。

次に、この組織の下にウェアハウス`i18n-demo.github.io`を作成します ( `i18n-demo`作成した組織名に置き換えてください)。

![](https://p.3ti.site/1721098657.avif)

前回の記事の内容を公開すると`out/main/htm`生成されていますので、このディレクトリに入って:を実行してください。

```
ln -s index.html 404.html
```


`github page` URL パスの書き換えをサポートしないため、代わりに`404.html`使用されます。

次に、 `htm`ディレクトリで次のコマンドを実行します ( `i18n-demo/i18n-demo.github.io.git`自分のウェアハウスのアドレスに置き換えることを忘れないでください) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

コードをプッシュした後、(以下に示すように) `github page`のデプロイメントが正常に実行されるまで待ってから、それにアクセスしてください。

<img src="//p.3ti.site/1721116586.avif" width="350px">

デモページについては、以下を参照してください。

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Cloudflareページでのデプロイ

[cloudflare page](//pages.cloudflare.com) `github page`と比較して、パスの書き換えが可能であり、中国本土にとってより親しみやすく、使用することをお勧めします。

`cloudflare page`の展開は通常、上記の`github page`の展開に基づいています。

プロジェクトを作成し、上記の`i18n-demo.github.io`ウェアハウスをバインドします。

プロセスを次の図に示します。
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

組織`i18n-demo`へのアクセスを許可するには、 `Add Account`をクリックしてください。

別の組織のウェアハウスをバインドしている場合は、新しい組織が表示される前に、 `Add Account` 2 回クリックして承認する必要がある場合があります。

![](https://p.3ti.site/1721118306.avif)

次に、ウェアハウス`i18n-demo.github.io`選択してから`Begin setup`をクリックし、後続の手順ではデフォルト値を使用します。

![](https://p.3ti.site/1721118490.avif)

初めてバインドした後、アクセスできるようになるまで数分間待つ必要があります。

展開後、カスタム ドメイン名をバインドできます。

![](https://p.3ti.site/1721119459.avif)

カスタム ドメイン名をバインドした後、以下に示すように、ドメイン名に移動してシングルページ アプリケーションのパス書き換えを構成してください。

![](https://p.3ti.site/1721119320.avif)

上の図のルールは次のとおりです。以下の最初の行の`i18n.site`バインドしたドメイン名に置き換えてください。

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

さらに、以下のようにキャッシュ ルールを設定し、キャッシュ期間を 1 か月に設定してください。

![](https://p.3ti.site/1721125111.avif)

上の図の 2 番目の手順で一致するドメイン名を、バインドしたドメイン名に変更してください。

### 中国本土での Web サイト展開の最適化

中国本土のネットワーク環境でより良いアクセシビリティ性能を獲得したい場合は、最初に[ドメイン名を登録して](//beian.aliyun.com)ください。

次に、中国本土のクラウド ベンダーのオブジェクト ストレージを使用します+ `CDN` `out/main/htm`のコンテンツを展開します。

エッジ コンピューティングを使用して、単一ページ アプリケーションに適応するようにパスを書き換えることができます。たとえば、 [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html)次のように構成できます。

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

![](https://p.3ti.site/1721121273.avif)

レコード`MX`とレコード`CNAME`共存できないため、ドメイン名メールを同時に受信したい場合は、レコード`A`に[cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)スクリプトをレベル`CNAME`で連携させる必要があります。

さらに、中国本土のクラウド ベンダーの海外トラフィック料金は比較的高価であるため、コストを最適化したい場合は、 [Huawei DNSの無料の地理的解像度](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html)と[Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas)のカスタム ドメイン名を使用して実現できます。トラフィックの迂回──中国本土のトラフィック ルーティングは Baidu Cloud `CDN` 、国際トラフィックはcloudflareになります。

![](https://p.3ti.site/1721119788.avif)

これらの展開最適化ソリューションはより複雑であり、将来的には別の章で紹介される予定です。

### 汎用ドメイン名のリダイレクト

`i18n.site`使用して Web サイトをメイン Web サイトとして生成する場合、通常はパンドメイン リダイレクトを構成する必要があります。つまり、アクセスを`*.xxx.com` ( `www.xxx.com`を含む) から`xxx.com`にリダイレクトします。

この要件は、Alibaba Cloud `CDN` `EdgeScript` ([英語ドキュメント](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works)/[中国語ドキュメント](https://help.aliyun.com/zh/cdn/developer-reference/edgescript)) の助けを借りて達成できます。

[Alibaba CDN](https://cdn.console.aliyun.com/domain/list)でドメイン名を追加し、Alibaba Cloud `CDN`でドメイン名`*.xxx.com` `CNAME`指します。

![](https://p.3ti.site/1721122000.avif)

たとえば、上の図の`*.i18n.site`のパンドメイン名リダイレクト構成は次のとおりです。

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### nginxでデプロイする

! の`server`段落に次のような設定を追加してくださいnginx `/root/i18n/md/out/main/htm`独自のプロジェクトのパスに変更してください`out/main/htm` :

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## `github action`継続的インテグレーションに基づく

`github action`設定するには、以下を参照してください。

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

構成からわかるように、このワークフローはブランチ`main`とブランチ`dist`にプッシュするときにトリガーされます。

ワークフローは、ブランチ名に対応する構成ファイルを使用してドキュメントを公開します。ここでは、公開構成として`.i18n/htm/main.yml`と`.i18n/htm/dist.yml`それぞれ使用されます。

ドキュメントのリリース プロセスについては、次のベスト プラクティスをお勧めします。

変更がブランチ`main`にプッシュされると、ドキュメントの作成がトリガーされ、プレビュー ステーションに展開されます (プレビュー ステーションは使用可能です[github page](//pages.github.com) )。

プレビュー サイトでドキュメントが正しいことを確認した後、コードがマージされてブランチ`dist`にプッシュされ、正式なビルドとデプロイがオンラインになります。

もちろん、上記のプロセスを実装するには、さらに構成を記述する必要があります。

ワークフロー スクリプトについては[github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)実際のプロジェクトを参照できます。

構成で`secrets.I18N_SITE_TOKEN`と`secrets.NPM_TOKEN`使用するには、コード ベースでシークレット変数を構成する必要があります。

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` 、構成内のパッケージ`npm`の公開トークンです。 [npmjs.com](//npmjs.com)にアクセスして、公開権限を持つトークンを作成します (以下を参照)。

![](//p.3ti.site/1730969906.avif)


## ディレクトリ構造

### `public`

Web サイトの静的ファイル ( `favicon.ico` 、 `robots.txt`など)。

ここでのアイコン ファイルは[realfavicongenerator.net](https://realfavicongenerator.net)で生成できます。

### `.i18n`

`.i18n`ディレクトリの下には、 `i18n.site`の設定ファイルや翻訳キャッシュなどが置かれます。詳細については、次の章[「設定」](/i18n.site/conf)を参照してください。

### `en`

ソース言語ディレクトリ`.i18n/conf.yml`構成ファイルの`fromTo`に対応します`en`

```yaml
i18n:
  fromTo:
    en: zh
```

翻訳[i18](/i18/use)