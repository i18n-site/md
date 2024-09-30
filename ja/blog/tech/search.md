# 純粋なフロントエンド逆引き全文検索

## 順番

数週間の開発を経て、 [i18n.site](//i18n.site) (純粋に静的なmarkdown多言語翻訳およびウェブサイト構築ツール) が、純粋なフロントエンド全文検索をサポートするようになりました。

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

本稿では、`i18n.site`の純粋なフロントエンド全文検索技術の実装について解説し、検索効果を体験いただくために[i18n.site](//i18n.site)をご案内します。

コードはオープンソースです。[検索カーネル](//github.com/i18n-site/ie/tree/main/qy) / [インタラクティブインターフェース](//github.com/i18n-site/plugin/tree/main/qy)

## サーバーレス全文検索ソリューションの概観

純粋に静的なドキュメントや個人のブログなどの小規模な Web サイトの場合、全文検索バックエンドを自分で構築するには間違いなく重すぎます。サービスなしの全文検索の方が間違いなく優れた重みです。

現在のサーバーレス全文検索ソリューションは大きく二つのカテゴリーに分類されます。

一つ目は、[algolia.com](//algolia.com)などの第三者検索サービスプロバイダーで、フロントエンド向けの全文検索コンポーネントを提供しています。

このようなサービスは有料であり、ウェブサイトの法的要件により、中国本土のユーザーが利用できません。

オフラインやイントラネットでの使用も不可能で、大きな制限があります。詳細は省略します。

二つ目は、純粋なフロントエンドの全文検索です。

よりよく知られている純粋なフロントエンド全文検索には[lunrjs](/0)および [ ElasticLunr.js ] [https://github.com/weixsong/elasticlunr.js](%E5%9F%BA%E4%BA%8E%60lunrjs%60%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91)あります。

`lunrjs`はインデックスの構築方法が二通りありますが、それぞれに問題があります。

1. 事前構築のインデックスファイル

   インデックスにはすべてのドキュメントの単語が含まれているため、ファイルサイズが大きくなります。
   ドキュメントが追加や変更されるたびに、新しいインデックスファイルをロードする必要があります。
   これにより、ユーザーの待ち時間が長くなり、大量の帯域幅が消費されます。

2. ドキュメントのロードとリアルタイムインデックス構築

   インデックスの構築は計算負荷が高いため、アクセスごとにインデックスを再構築すると、明らかな遅延が発生し、ユーザーエクスペリエンスが低下します。

`lunrjs`以外にも、他の全文検索ソリューションもあります

[fusejs](https://www.fusejs.io)は、文字列間の相似度を計算して検索を行います。

このアプローチのパフォーマンスは非常に悪く、全文検索には適さないです(「[Fuse.jsの長クエリは10秒以上かかります。どう最適化するか？](https://stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries)」を参照してください)。

[TinySearch](https://github.com/tinysearch/tinysearch)は、ブルームフィルターを使用して検索を行いますが、接頭辞検索(例えば、`goo`を入力して`good`や`google`を検索する場合)には対応せず、自動補完のような機能も提供していません。

現行のソリューションの欠点に対する不満から、`i18n.site`は全く新しい純前端的全文検索ソリューションを自社開発しました。以下にその特徴を示します:

1. 多言語検索をサポートし、ファイルサイズが小さいです。`gzip`で圧縮した検索カーネルのサイズはわずか`6.9KB`です(比較のために、`lunrjs`のサイズは`25KB`です)
1. `indexedb`に基づいた転置インデックスを構築し、メモリ消費量が少なく、高速です
1. ドキュメントが追加/変更された場合、追加または変更されたドキュメントのみが再インデックスされるため、計算量が削減されます
1. オフラインでも利用可能です
1. 以下に、技術実装の詳細を紹介します

以下では、`i18n.site`の技術実装の詳細を紹介します。

## 多言語の分詞

以下は分詞の`coffeescript`コードの例です。

![](https://p.3ti.site/1727667759.avif)

以下は、分詞に用いる`coffeescript`のコードです

```coffee
SEG = new Intl.Segmenter 0, granularity: "word"

seg = (txt) =>
  r = []
  for {segment} from SEG.segment(txt)
    for i from segment.split('.')
      i = i.trim()
      if i and !'|`'.includes(i) and !/\p{P}/u.test(i)
        r.push i
  r

export default seg

export segqy = (q) =>
  seg q.toLocaleLowerCase()
```

その中で:

* `/\p{P}/` 、句読点に一致する正規表現です。 `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } 〜。 `。</p><ul><li> `split('.')`は、 `Firefox`ブラウザの単語セグメント化が`.`セグメント化しないためです。</li>


## インデックスの構築

`word` : id - ワード

* `word`:ID - 語
* `docWord` : ドキュメントID - ワードIDの配列
* `prefix` : プレフィックス - ワードIDの配列
* `rindex` : ワードID - ドキュメントID : 行番号の配列
* `rindex`:語ID - ドキュメントID : 行番号の配列

ドキュメントの`url`とバージョン番号`ver`の配列を渡し、`doc`テーブルにドキュメントが存在するかどうかを確認します。存在しない場合には、転置インデックスを作成し、渡されなかったドキュメントの逆索引を削除します。

この方法により、インクリメンタルなインデックス作成が可能になり、計算量が削減されます。

フロントエンド対話では、初回ロード時の遅延を避けるために、インデックスのロード進行状況バーを表示できます。「単一のprogress + Pure css実装に基づくアニメーション付きの進行状況バー」 [English](https://dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chinese を](https://juejin.cn/post/7413586285954154522)参照してください。

### IndexedDBの高并发書き込み

このプロジェクトは、IndexedDBの非同期カプセル化に基づいて[idb](https://www.npmjs.com/package/idb)を開発しました。

IndexedDBの読み取りと書き込みは非同期で、インデックスを作成する際には、ドキュメントが同時にロードされてインデックスが作成されます。

競合書き込みによるデータの一部の損失を避けるためには、以下の`coffeescript`コードを参照し、読み取りと書き込みの間に`ing`キャッシュを追加して競合書き込みを防ぎます。

```coffee
pusher = =>
  ing = new Map()
  (table, id, val)=>
    id_set = ing.get(id)
    if id_set
      id_set.add val
      return

    id_set = new Set([val])
    ing.set id, id_set
    pre = await table.get(id)
    li = pre?.li or []

    loop
      to_add = [...id_set]
      li.push(...to_add)
      await table.put({id,li})
      for i from to_add
        id_set.delete i
      if not id_set.size
        ing.delete id
        break
    return

rindexPush = pusher()
prefixPush = pusher()
```

## プレフィックスリアルタイム検索

ユーザーが入力中に検索結果をリアルタイムで表示するため、例えば`wor`を入力すると、`words`や`work`など`wor`で始まる単語が表示されます。

![](https://p.3ti.site/1727684944.avif)

フロントエンドインタラクションでは、ユーザー入力の頻度を減らし、計算負荷を削減するために、`debounce`関数を使用します。

フロントエンドのインタラクションでは、ユーザー入力の頻度を減らし、計算量を削減するために、`debounce`関数を使用します(以下のように実装されています)。

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## 精度と完全性

検索では、まずユーザーが入力したキーワードを分詞します。

分詞後の単語が`N`個あると仮定すると、結果を返す際には、まずすべてのキーワードを含む結果が返され、次に`N-1`、`N-2`、...、`1`個のキーワードを含む結果が返されます。

最初に表示される検索結果によってクエリの正確さが保証され、その後読み込まれる結果 ([さらに読み込む] ボタンをクリック) によって再現率が保証されます。

![](https://p.3ti.site/1727684564.avif)

## オンデマンドでの読み込み

`yield`後に再度検索するたびに、`IndexedDB`のクエリトランザクションを再度開く必要がありますことに注意してください。

`yield`の後、再度検索を行うたびに、`IndexedDB`のクエリトランザクションを再度開く必要がありますことに注意してください。

## プレフィックスリアルタイム検索

ユーザーが入力中に検索結果をリアルタイムで表示するため、例えば`wor`を入力すると、`words`や`work`など`wor`で始まる単語が表示されます。

![](https://p.3ti.site/1727684944.avif)

フロントエンドインタラクションでは、ユーザー入力の頻度を減らし、計算負荷を削減するために、`debounce`関数を使用します。

フロントエンドのインタラクションでは、ユーザー入力の頻度を減らし、計算量を削減するために、`debounce`関数を使用します(以下のように実装されています)。

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## オフラインでの利用可能

インデックステーブルには元のテキストは保存されておらず、単語のみが保存されるため、ストレージの量が削減されます。

同時に、`service worker`がすべての記事をキャッシュするため、ユーザーが検索を実行すると、検索を含むウェブサイト全体がオフラインでも利用可能になります。

また、`service worker`がすべての記事をキャッシュするため、ユーザーが検索を行った場合、検索を含むウェブサイト全体がオフラインでも利用可能です。

## Markdownドキュメントの表示最適化

`i18n.site`の純粋なフロントエンド検索ソリューションは、 `MarkDown`ドキュメント用に最適化されています。

要約

![](https://p.3ti.site/1727686552.avif)

## まとめ

ドキュメントや個人ブログなどの中小規模のウェブサイトに非常に適しています。

ドキュメントや個人のブログなどの中小規模のウェブサイトに非常に適しています。