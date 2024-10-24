# インストールおよびデプロイ

## インストール

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## トークンの設定

`i18n.site`には、アクセストークンの設定を行うための`i18`翻訳ツールが内蔵されています。まずは[ここをクリックして`i18`のドキュメントを参照](/i18/use)してください。

## デモプロジェクト

`i18n.site`の使用方法を学ぶために、デモプロジェクトから始めましょう。

まず、デモリポジトリをクローンし、以下のコマンドを実行します

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

中国本土のユーザーは以下のように行えます

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`docker`を利用したローカルプレビューを容易にするためには、`demo.i18n.site`のコードベースをクローンするディレクトリ名は`md`に設定してください。

### 翻訳

まず、`md`ディレクトリに移動し、`i18n.site`を実行します。これにより、`en`から`zh`への翻訳が行われます。

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

実行後、翻訳ファイルとキャッシュファイルが生成されますので、それらを`md`ディレクトリ下で`git add .`して、リポジトリに追加してください。

### ローカルプレビュー

`docker`をインストールし、起動してください。(`MAC`ユーザーは、`docker`のランタイムとして[orbstack](https://orbstack.dev)を使用することをお勧めします。)

次に、`docker`ディレクトリに移動し、`./up.sh`を実行し、[https://127.0.0.1](https://127.0.0.1)にアクセスしてローカルプレビューを行ってください。

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### 投稿内容

`i18n.site`は[シングルページアプリケーション](https://developer.mozilla.org/docs/Glossary/SPA)のアーキテクチャを採用しており、ウェブサイトのエントリーページとコンテンツが独立してデプロイされます。

翻訳を実行すると、`md/out/dev`ディレクトリの下に`htm`と`v`のディレクトリが生成されます。

ここでの`dev`は、`.i18n/htm/dev.yml`設定ファイルに基づいて構築されることを意味します。

`dev`ディレクトリでは:

`htm`ディレクトリはウェブサイトのエントリーページです。

`v`ディレクトリにはバージョン番号がついたウェブサイトのコンテンツが含まれています。

ローカルプレビューではバージョン番号は考慮されず、すべてのファイルが`out/dev/v/0.1.0`ディレクトリにコピーされます。

正式リリースでは、変更されたファイルが新しいバージョン番号のディレクトリにコピーされます。

#### `-c`オプションで設定ファイルを指定します

異なる設定ファイルには、`out`ディレクトリに対応するディレクトリを作成します。

たとえば、`.i18n/htm/ol.yml`を指定すると`out/ol`ディレクトリが作成されます。

`dev.yml`と`ol.yml`はデフォルトの設定です。

`dev`は`development`の省略形で、開発環境を示し、ローカルプレビューに使用され、デフォルトの設定ファイルでもあります。
`ol`は`online`の省略形で、正式リリースに使用されるオンライン環境を示します。これは、コマンドラインパラメータ`-n`で`npm`にリリースする場合のデフォルトの設定ファイルでもあります。

他の設定ファイルも作成できます。コマンドラインで`--htm_conf`を使用して、使用する設定ファイル名を指定します

例えば:
```
i18n.site --htm_conf yourConfig --save
```

ここで`--save`は、リリースのバージョン番号を更新する意味です。

#### <a rel=id href="#npm" id="npm"></a> コンテンツをnpmjs.comに公開

コンテンツを[npmjs.com](//npmjs.com)に公開することは、推奨されるデフォルトのソリューションです([「フロントエンドの高可用性」](/i18n.site/feature#ha)を参照してください)。

##### npm loginおよびリリース

`nodejs`をインストールし、`npm login`でログインしてください。

`md/.i18n/htm/ol.yml`を編集し、[npmjs.com](//npmjs.com) にて未使用のパッケージ名に合わせて、[`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/ol.yml#L7)の値を`YOUR_NPM_PACKAGE`から自分の`npm`パッケージ名に変更してください。

その後、`md/.i18n/htm/ol.package.json` を変更してください

`md`ディレクトリで`i18n.site --npm`または`i18n.site -n`を実行して、翻訳および公開を行ってください。

継続的統合環境を使用して公開する場合、`nodejs`のインストールは不要で、ログイン済みの公開権限を持つ`~/.npmrc`を環境にコピーするだけで十分です。

`ol.yml`の`v:`のパッケージ名を変更する場合、**必ず`.i18n/v/ol`を削除してから公開してください**。

##### npmによる公開のプロキシサーバー

中国本土のユーザーがネットワークの問題で`npm`パッケージの公開ができない場合、環境変数`https_proxy`を設定してプロキシサーバーを構成してください。

プロキシサーバーのポートが`7890`であると仮定すると、以下のように設定できます

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### 自己ホスト型コンテンツ

コンテンツをセルフホストする場合は、まず`md/.i18n/htm/ol.yml`を編集し、 `v: //unpkg.com/i18n.site` URL プレフィックス ( `v: //i18n-v.xxx.com`など) に変更します。

`md`ディレクトリに移動し、実行してください

```
i18n.site --htm_conf ol --save
```

または短縮形式

```
i18n.site -c ol -s
```

次に、`md/out/ol/v`ディレクトリのコンテンツを`v:`で設定したURLプレフィックスパスに設定してください。

最後に、**パスの末尾が`/.v`から`1s`のキャッシュ時間を設定します**。そうしないと、新しくリリースされたコンテンツにすぐにアクセスできなくなります。

他のパスのキャッシュ時間は1年以上に設定して、不必要なリクエストを減らすことができます。

##### コンテンツをS3にホスト

自己ホスト型コンテンツを提供する場合、独自のサーバーを使用するだけでなく、`S3` + `CDN`を使用することも一般的な選択です。

[rclone](https://rclone.org)を使用して`S3`サーバーにログインし、以下のスクリプトを参照して変更し、リリースごとに増分変更を`S3`にコピーしてください。

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

`/.v`で終わるパスのキャッシュ時間が`1s`になるように`CDN`を構成してください。そうしないと、新しくリリースされたコンテンツにすぐにアクセスできなくなります。

### ウェブサイトを公開

ウェブサイトはどこにでもデプロイできます。[github page](https://pages.github.com)や[cloudflare page](https://pages.cloudflare.com)も良い選択です。

ウェブサイトは[シングルページアプリケーション](https://developer.mozilla.org/docs/Glossary/SPA)のアーキテクチャを使用しているため、`. `を含まないURLパスを必ず`index.html`に書き換えてください。

ウェブサイトのエントリーページは一度だけデプロイする必要があり、以降のコンテンツ更新時もエントリーページを再デプロイする必要はありません。

#### githubページにデプロイ

まず[ここをクリックしてgithub組織を作成](https://github.com/account/organizations/new?plan=free)。以下の組織名は例として`i18n-demo`です。

次に、この組織の下にリポジトリ`i18n-demo.github.io`を作成してください(`i18n-demo`に作成した組織名に置き換えてください)

![](https://p.3ti.site/1721098657.avif)

前回の記事で公開した内容が`out/ol/htm`として生成された場合、このディレクトリに移動し、以下のコマンドを実行してください:

```
ln -s index.html 404.html
```


`github page`はURLパスの書き換えをサポートしていないため、代わりに`404.html`を使用してください。

次に、`htm`ディレクトリで以下のコマンドを実行してください(`i18n-demo/i18n-demo.github.io.git`自分のリポジトリアドレスに置き換えてください):

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

コードをプッシュした後、(以下に示すように) `github page`のデプロイメントが正常に実行されるまで待ってから、それにアクセスしてください。

<img src="//p.3ti.site/1721116586.avif" width="350px">

デモページについては、以下を参照してください

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### cloudflareページにデプロイ

[cloudflare page](//pages.cloudflare.com)は`github page`と比較して、パスの書き換えが可能であり、中国本土にとってよりアクセスしやすいため、推奨されます。

`cloudflare page`のデプロイは通常、上記の`github page`のデプロイに基づいています。

プロジェクトを作成し、上記の`i18n-demo.github.io`リポジトリをバインドします。

プロセスは以下の図に示されています
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

組織`i18n-demo`へのアクセスを許可するには、`Add Account`をクリックしてください。

他の組織のリポジトリをバインドしている場合、新しい組織が表示される前に、`Add Account`を2回クリックして承認する必要がある場合があります。

![](https://p.3ti.site/1721118306.avif)

次に、リポジトリ`i18n-demo.github.io`を選択し、`Begin setup`をクリックし、以降の手順はデフォルト値を使用します。

![](https://p.3ti.site/1721118490.avif)

初めてバインドした場合、アクセス可能になるまで数分間待つ必要があります。

デプロイ後、カスタムドメイン名をバインドできます。

![](https://p.3ti.site/1721119459.avif)

カスタムドメイン名をバインドした後、以下に示すように、ドメイン名に移動し、シングルページアプリケーションのパス書き換えを構成してください

![](https://p.3ti.site/1721119320.avif)

以下の図のルールは次の通りです。以下の最初の行の`i18n.site`をバインドしたドメイン名に置き換えてください。

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

さらに、以下に示すようにキャッシュルールを設定し、キャッシュ期間を1ヶ月に設定してください。

![](https://p.3ti.site/1721125111.avif)

以下の図の2番目の手順で一致するドメイン名を、バインドしたドメイン名に変更してください。

#### 中国本土でのウェブサイトデプロイの最適化

中国本土のネットワーク環境でより良いアクセス性能を得るために、まず[ドメイン名を登録](//beian.aliyun.com)してください。

その後、中国国内のクラウドプロバイダーのオブジェクトストレージと `CDN` を使用して、`out/ol/htm` 下のコンテンツをデプロイしてください。

エッジコンピューティングを活用して、シングルページアプリケーションに合わせたパスの書き換えを行うことができます。例えば、[百度智能云 `CDN`](//cloud.baidu.com/product/cdn.html) は以下のように設定してください

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
![](https://p.3ti.site/1721121273.avif)

レコード`MX`とレコード`CNAME`は共存できないため、ドメイン名メールを同時に受信する場合は、`CNAME`をレコード`A`に[cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)スクリプトで連携させる必要があります。

さらに、中国本土のクラウド ベンダーの海外トラフィック料金は比較的高価であるため、コストを最適化したい場合は、 [Huawei DNSの無料の地理的解像度](/0)と[Cloudflare for SaaS](/1)のカスタム ドメイン名を使用して実現できます。トラフィックの迂回──中国本土のトラフィックは Baidu Cloud `CDN` 、国際トラフィックはcloudflareになります。

![](https://p.3ti.site/1721119788.avif)

これらのデプロイ最適化ソリューションは比較的複雑であり、将来的には別の章で詳しく紹介する予定です。

#### 汎用ドメイン名のリダイレクト

`i18n.site`を使用してメインのウェブサイトとして生成する場合、通常、ワイルドカードドメインのリダイレクトを設定する必要があります。具体的には、`*.xxx.com`(`www.xxx.com`を含む)からのアクセスを`xxx.com`にリダイレクトします。

この要件は、阿里云の`CDN`の`EdgeScript`を利用して実現できます([英文ドキュメント](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [中文ドキュメント](https://help.aliyun.com/zh/cdn/developer-reference/edgescript))

[阿里云のCDN](https://cdn.console.aliyun.com/domain/list)にドメインを追加し、`*.xxx.com`のドメインを阿里云`CDN`の`CNAME`に指向させます。

![](https://p.3ti.site/1721122000.avif)

例えば、上の図の`*.i18n.site`のワイルドカードドメインリダイレクトの設定は以下の通りです:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### nginxでデプロイする

nginxの`server`セクションに以下のような設定を追加してください。其中の`/root/i18n/md/out/ol/htm`は、あなたのプロジェクトの`out/ol/htm`のパスに変更してください:

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

#### `public`

ウェブサイトの静的ファイル、例えば`favicon.ico`、`robots.txt`などです。

ここで使用するアイコンファイルは、[realfavicongenerator.net](https://realfavicongenerator.net)で生成できます。

#### `.i18n`

`.i18n`ディレクトリには、`i18n.site`の設定ファイルや翻訳キャッシュなどが含まれています。詳細は次章の[「設定」](/i18n.site/conf)を参照してください。

#### `en`

ソース言語ディレクトリは、`.i18n/conf.yml`の設定ファイル内の`fromTo`の`en`に対応しています

```yaml
i18n:
  fromTo:
    en: zh
```

翻訳の設定は、[i18](/i18/use)を参照してください。