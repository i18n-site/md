# インストールしてください&

## 構成トークン

`i18n.site` `i18`翻訳ツールが埋め込まれています。[ここをクリックして`i18`ドキュメントを参照し、アクセス トークンを設定してください](/i18/use)。

## インストール

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## デモプロジェクト

デモプロジェクトから始めて、 の使い方を学びましょう`i18n.site`

まずデモ リポジトリのクローンを作成し、次のようにコマンドを実行します。

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

中国本土のユーザーは次のことができます。

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` `docker`を使用してローカルでプレビューできるように、コード ベース クローンのディレクトリ名は`md`にする必要があります。

### 翻訳する

まず、 `md`ディレクトリに入り、 `i18n.site`実行します。これにより、 `en`が`zh`に変換されます。

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

実行後、変換ファイルとキャッシュ ファイルが`md`ディレクトリ内の`git add . `に追加されることを忘れないでください。

### ローカルプレビュー

`docker`をインストールして起動します ( `MAC` `docker`のランタイムとして[orbstack](https://orbstack.dev)を使用することをお勧めします)。

次に、 `docker`ディレクトリに入って`./up.sh`を実行し、 [https://127.0.0.1](https://127.0.0.1)にアクセスしてローカルでプレビューします。

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### 投稿内容

`i18n.site`[シングルページアプリケーション](https://developer.mozilla.org/docs/Glossary/SPA)アーキテクチャを採用し、Webサイトの入口ページとWebサイトのコンテンツを独立して展開します。

上記の変換を実行すると、 `md/out/dev`ディレクトリに`htm`ディレクトリと`v`ディレクトリが生成されます。

ここで、 `dev` `.i18n/htm/dev.yml`ファイルに基づいて構築されることを示します。

`dev`コンテンツの下に:

`htm`ディレクトリの下に Web サイトの入り口ページがあります。

`v`ディレクトリには、バージョン番号付きの Web サイトのコンテンツが含まれています。

ローカル プレビューでは、バージョン番号に関係なく、すべてのファイルが`out/dev/v/0.1.0`ディレクトリにコピーされます。

正式リリースの場合、変更されたファイルは新しいバージョン番号のディレクトリにコピーされます。

#### -c を使用して構成ファイルを指定します

異なる設定ファイルは、 `out`ディレクトリの下に対応するディレクトリを作成します。

たとえば、 `.i18n/htm/ol.yml` `out/ol`ディレクトリを作成します。

`dev.yml`と`ol.yml`デフォルトの設定です。

`dev`は`development`の省略形で、開発環境を表し、ローカル プレビューに使用され、デフォルトの構成ファイルでもあります。
`ol`は`online`の省略形で、オンライン環境を表し、正式リリースに使用され、 `npm`コマンド ライン パラメーター`-n`を使用して) に公開するときのデフォルトの構成ファイルでもあります。

コマンドラインで`--htm_conf`を使用して他の構成ファイルを作成することもできます。

例えば:
```
i18n.site --htm_conf yourConfig --save
```

ここで`--save`アップデートのリリースのバージョン番号を示します。

#### <a rel=id href="#npm" id="npm"></a> コンテンツを npmjs.com に公開する

コンテンツを[npmjs.com](//npmjs.com)に公開することが推奨されるデフォルトのソリューションです ( [「フロントエンドの高可用性](/i18n.site/feature#ha)」を参照)。

##### npm login &リリース

`nodejs` `npm login`を使用してログインします。

`md/.i18n/htm/ol.yml` `v: //unpkg.com/i18n.site`の`i18n.site`独自の`npm`パッケージ名 ) に変更します。

[npmjs.com](//npmjs.com)では、空いているパッケージ名を使用してください。Web サイトのドメイン名をパッケージ名として使用することをお勧めします。

`npm`パッケージに基づいて公開する場合は、 `v:`値の接頭辞として**`//unpkg.com/`を使用してください**。キャッシュ時間`i18n.site`この接頭辞パスの下`/.v`は、新しいリリースをタイムリーに表示できるように特別に最適化されています。

`md`ディレクトリで`i18n.site --npm`または`i18n.site -n`を実行して、翻訳して公開します。

継続的統合環境を使用して公開する場合は、それをインストールする必要はありません`nodejs`ログインして公開された権限を`~/.npmrc`環境にコピーするだけです。

`ol.yml`の`v:`内のパッケージ名を変更する場合は、**必ず`.i18n/v/ol`削除して**から公開してください。

##### npm によって公開されるプロキシ サーバー

中国本土のユーザーがネットワークの問題に遭遇し、 `npm`パッケージを公開できない場合は、環境変数`https_proxy`を設定してプロキシ サーバーを構成できます。

プロキシ サーバーのポートが`7890`次のように記述できます。

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### 自己ホスト型コンテンツ

コンテンツをセルフホストする場合は、まず`md/.i18n/htm/ol.yml`を編集し、 `v: //unpkg.com/i18n.site` `v: //i18n-v.xxx.com`などの URL プレフィックスに変更します。

ディレクトリに入って実行します`md`

```
i18n.site --htm_conf ol --save
```

または略語

```
i18n.site -c ol -s
```

次に、 `md/out/ol/v`ディレクトリ内のコンテンツを`v:`で設定した URL プレフィックス パスに設定します。

最後に、 **`/.v`で終わるパスのキャッシュ時間を`1s`に設定します**。そうしないと、新しくリリースされたコンテンツにすぐにアクセスできなくなります。

他のパスのキャッシュ時間を 1 年以上に設定して、不要なリクエストを減らすことができます。

##### コンテンツを s3 にホストする

コンテンツをセルフホストするには、独自のサーバーを使用する以外に、 `S3` + `CDN`使用することも一般的です。

[rclone](https://rclone.org) Login `S3`サーバーを使用し、以下のスクリプトを参照して変更し、公開するたびに増分変更のみを`S3`にコピーします。

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

`/.v`で終わるパスのキャッシュ時間が`1s`になるように`CDN`そうしないと、新しくリリースされたコンテンツにすぐにアクセスできなくなります。

### ウェブサイトを公開する

Web サイトはどこにでも展開できます。 [github page](https://pages.github.com)および[cloudflare page](https://pages.cloudflare.com)適切な選択です。

Web サイトは[シングルページ アプリケーション](https://developer.mozilla.org/docs/Glossary/SPA)のアーキテクチャを採用しているため、 `. ` `index.html`含まない URL パスを忘れずに書き換えてください。

Web サイトのエントリ ページを展開する必要があるのは 1 回だけであり、その後のコンテンツ更新のために Web サイトのエントリ ページを再展開する必要はありません。

#### githubページにデプロイする

まず[githubここをクリックして組織を作成します](https://github.com/account/organizations/new?plan=free)。例として、次の組織名があります`i18n-demo`

次に、この組織の下にウェアハウスを作成します`i18n-demo.github.io` `i18n-demo`を作成した組織名に置き換えてください)。

<img alt="" src="https://p.3ti.site/1721098657.avif">

前回の記事の内容を公開する際に生成されていますので`out/ol/htm`このディレクトリに入って実行してください:

```
ln -s index.html 404.html
```


`github page` URL パスの書き換えをサポートしていないため、代わりに`404.html`が使用されます。

次に、 `htm`ディレクトリで次のコマンドを実行します ( `i18n-demo/i18n-demo.github.io.git`自分のウェアハウスのアドレスに置き換えることを忘れないでください) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

コードをプッシュした後、(以下に示すように) `github page`デプロイメントが正常に実行されるまで待機すると、それにアクセスできるようになります。

<img src="//p.3ti.site/1721116586.avif" width="350px">

デモページについては、以下を参照してください。

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Cloudflareページでのデプロイ

[cloudflare page](//pages.cloudflare.com)に比べて、パスの書き換えが可能であり、より中国本土に親しみやすく`github page`使用することをお勧めします。

`cloudflare page`デプロイメントは通常、上記の`github page`のデプロイメントに基づいています。

プロジェクトを作成し、上記のウェアハウスをバインドします`i18n-demo.github.io`

プロセスを次の図に示します。
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

`i18n-demo`へのアクセスを許可するには、 `Add Account`をクリックしてください。

別の組織のウェアハウスをバインドしている場合は、新しい組織が表示される前に、 `Add Account`を 2 回クリックして承認する必要がある場合があります。

<img alt="" src="https://p.3ti.site/1721118306.avif">

次に、 `i18n-demo.github.io` Warehouse」を選択し、 `Begin setup`をクリックして、以降の手順ではデフォルト値を使用します。

<img alt="" src="https://p.3ti.site/1721118490.avif">

初めてバインドした後、アクセスできるようになるまで数分間待つ必要があります。

展開後、カスタム ドメイン名をバインドできます。

<img alt="" src="https://p.3ti.site/1721119459.avif">

カスタム ドメイン名をバインドした後、以下に示すように、ドメイン名に移動してシングルページ アプリケーションのパス書き換えを構成してください。

<img alt="" src="https://p.3ti.site/1721119320.avif">

上の図のルールは次のとおりです。下の最初の行の`i18n.site` 、バインドされているドメイン名に置き換えてください。

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

さらに、以下に示すようにキャッシュ ルールを設定し、キャッシュ期間を 1 か月に設定してください。

<img alt="" src="https://p.3ti.site/1721125111.avif">

上の図の 2 番目の手順で一致するドメイン名を、バインドしたドメイン名に変更してください。

#### 中国本土での Web サイト展開の最適化

中国本土のネットワーク環境でより良いアクセシビリティ性能を獲得したい場合は、最初に[ドメイン名を登録して](//beian.aliyun.com)ください。

`out/ol/htm` 、 `CDN`本土のクラウド ベンダーのオブジェクト ストレージを使用します+

エッジ コンピューティングを使用して[、Baidu Smart Cloud などの単一ページ アプリケーションに適応するようにパスを書き換えることができます`CDN`](//cloud.baidu.com/product/cdn.html)

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

`MX`レコードと`CNAME`レコードは共存できないため、ドメイン名メールを同時に受信したい場合は、 [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)スクリプトと連携して`CNAME`を`A`レコードにフラット化する) 必要があります。

さらに、中国本土のクラウド ベンダーの海外トラフィック料金は比較的高価であるため、コストを最適化したい場合は、 [Huawei Cloud の無料の地理的DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html)と[Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas)のカスタム ドメイン名を使用して実現できます。トラフィックの迂回──中国本土のトラフィックは Baidu Cloud `CDN`国際トラフィックはcloudflareになります。

<img alt="" src="https://p.3ti.site/1721119788.avif">

これらの展開最適化ソリューションはより複雑であり、将来的には別の章で紹介される予定です。

#### 汎用ドメイン名のリダイレクト

`i18n.site`を使用して Web サイトをメイン Web サイトとして生成する場合は、通常、パンドメイン リダイレクトを構成する必要があります。つまり、 `*.xxx.com` ( `www.xxx.com`を含む) アクセスを`xxx.com` .

この要件は、Alibaba Cloud の`EdgeScript` ([英語ドキュメント](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works)/[中国語ドキュメント](https://help.aliyun.com/zh/cdn/developer-reference/edgescript)) の助けを借りて達成できます`CDN`

[Alibaba CDN](https://cdn.console.aliyun.com/domain/list)にドメイン名を追加し、 `*.xxx.com`ドメイン名が Alibaba Cloud `CDN`の`CNAME`を指すようにします。

<img alt="" src="https://p.3ti.site/1721122000.avif">

たとえば、上の図の`*.i18n.site`のパンドメイン名リダイレクト構成は次のとおりです。

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### nginxでデプロイする

`server`に次のような構成を追加してくださいnginx `/root/i18n/md/out/ol/htm`は独自のプロジェクトのパスに変更してください`out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### ディレクトリ構造

#### 公共

Web サイトの静的ファイル ( `favicon.ico` `robots.txt`など)。

ここでのアイコン ファイルは[realfavicongenerator.net](https://realfavicongenerator.net)で生成できます。

#### .i18n

`.i18n`ディレクトリの下には、 `i18n.site`の設定ファイル、変換キャッシュなどが含まれます。詳細については、次の章[「設定」](/i18n.site/conf)を参照してください。

#### jp

ソース言語ディレクトリ (構成ファイルの`fromTo` `en` `.i18n/conf.yml`対応)

```yaml
i18n:
  fromTo:
    en: zh
```

翻訳[i18](/i18/use)

