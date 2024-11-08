# 製品の特徴

## 統合された翻訳は`i18`

プログラムには`i18`翻訳が組み込まれています。具体的な使用方法については[、➔ `i18`ドキュメント](/i18)を参照してください。

## ブラウザ言語を自動的に一致させる

Web サイトのデフォルト言語は、ブラウザーの言語と自動的に一致します。

ユーザーが手動で言語を切り替えた後、ユーザーの選択が記憶されます。

関連コード[github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee) :

## モバイル端末への適応

携帯電話でも完璧な読書体験ができます。

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> フロントエンドの高可用性

`i18n.site` 、 [jsdelivr.com](//jsdelivr.com) 、 [unpkg.com](//unpkg.com) 、および`npm`にロードされた他の`CDN`コンテンツを利用して、デフォルトでサイト コンテンツを`npmjs.com`に公開します。

これに基づいて、中国本土からのミラー ソースが追加され、中国のユーザーが安定したアクセスを確保し、**高いフロントエンド可用性を**実現できるようになりました。

原則は、リクエストを[`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API)でインターセプトし、失敗したリクエストを他の`CDN`で再試行し、最も速く応答するオリジン サイトをデフォルトの読み込みソースとして適応的に有効にすることです。

関連コード[github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker) :

## 単一ページのアプリケーション、非常に高速な読み込み

この Web サイトはシングルページ アプリケーション アーキテクチャを採用しており、ページ切り替え時の更新がなく、読み込みが非常に高速です。

## 読書体験に最適化

### うまくデザインされたスタイル

> この Web サイトの Web デザインには、シンプルさの美しさが完璧に表現されています。
> 余分な装飾を放棄し、コンテンツを最も純粋な形で表現します。
> 美しい詩のように、短くても人の心に響きます。

<p style="text-align:right">I18N.SITE作者</p>

[➔ ここをクリックしてスタイルのリストを表示します](/i18n.site/md/styl)。

### `RSS`

![](//p.3ti.site/1725541085.avif)

上の図は、サブスクリプション`i18n.site` [inoreader.com](//inoreader.com)使用した多言語`RSS`示しています。

### オンラインフォントを読み込み、中国語をサポート

デフォルトでは[、Alimama の二重軸可変長方形](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR)フォント、 [MiSans](https://hyperos.mi.com/font/zh/download/)およびその他のオンライン フォントが Web ページで有効になり、さまざまなプラットフォーム上のユーザーの読書体験を統一します。

同時に、読み込み速度を向上させるために、単語の頻度統計に従ってフォントがスライスされます。

関連コード[github.com/i18n-site/font](https://github.com/i18n-site/font) :

### トップナビゲーションが自動的に非表示になります

下にスクロールすると、上部のナビゲーションが自動的に非表示になります。

上にスクロールすると、非表示のナビゲーションが再び表示されます。

マウスが動いていないときはフェードアウトします。

ナビゲーション バーの右上隅に全画面ボタンがあり、没入型の文書読み取りエクスペリエンスを実現します。

### 現在の章の同期されたアウトラインの強調表示

右側のコンテンツをスクロールすると、左側のアウトラインが同時に現在読んでいる章を強調表示します。

## クールな詳細

### マウス効果

上部ナビゲーションの右側にあるボタンの上にマウスを置くと、クールな特殊効果が表示されます。

### `404`小さな幽霊

`404`ページには、マウスで目が動くかわいい小さな幽霊がいます。 [➔ ここをクリックして表示します](/404)。

## コードオープンソース

[コードはオープン ソースです](/i18n.site/c/src)。開発に参加することに興味がある場合は、[メーリング リスト](//groups.google.com/u/2/g/i18n-site)に参加してください。

重要ではあるが緊急ではない小さな要件が多数あり、開発チームはあなたの得意な技術に基づいてハンズオンタスクを割り当て、要件を割り当てながら開発ドキュメントを改善します。