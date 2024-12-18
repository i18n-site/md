# スタイルリスト

[ここをクリックしてこのページのソース ファイルを参照し、](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md)次のスタイルで`MarkDown`記述する方法を確認してください。

## 折り畳まれたブロック

|+| マークダウンとは何ですか?

    MarkDown は、ユーザーが読み書きしやすいプレーン テキスト形式で書式設定されたドキュメントを作成できる軽量のマークアップ言語です。

    一般的に、ドキュメント、ブログ記事、電子書籍、フォーラムへの投稿などを書くために使用されます。

    次のような利点があります。

    1. 学びやすい
    1. 可読性が高い
    1. バージョン管理に優しい

       `MarkDown`ドキュメントはプレーン テキスト形式であるため、プログラマはそれらをバージョン管理システム ( `git`など) に簡単に組み込むことができます。

       これにより、特にチーム開発において、変更の追跡と共同作業がはるかに簡単になります。

|-| I18Nとは何ですか?

    「I18N」は「Internationalization」の略称です。

    「国際化」という単語は「I」と「N」の間に 18 文字あるため、表現を簡略化するために「I18N」が使用されます。

    平たく言えば、複数の言語をサポートすることを意味します。


フォールディング ブロックは`i18n.site`から`MarkDown`までの拡張構文で、次のように記述します:

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

`付き|+| `或`|-| ` で始まる行は折りたたみブロックを生成し、折りたたみブロックの内容は同じレベルのインデントを持つ後続の行になります (段落は空白行で区切られます)。

パス`|-| `标记的折叠块默认展开，`|+| `タグ付きの折りたたまれたブロックはデフォルトで折りたたまれます。

## 下線& &

これは__アンダースコア__です。~~取り消し線~~そして**太字の**プレゼンテーションテキスト。

次のように書かれています。

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

`i18n.site`ウェブサイト構築ツールの`MarkDown`パーサーは、下線、取り消し線、太字の構文を最適化し、マークの前後にスペースがなくても有効になり、中国、日本、韓国などの言語でのドキュメントの作成が容易になります。区切り文字としてスペースを使用しないでください。

詳細な読み方: [Nuggets のMarkdown構文 ( `**……**` ) が時々有効にならないのはなぜですか?](//juejin.cn/post/7064565848421171213)

## 引用

### 一行引用

> 自分の才能が役に立ち、お金を使い果たしてから戻ってくるのが私の性分です。
<p style="text-align:right">─ 李白</p>

### 複数行の引用符

> SF のもう 1 つのユニークな利点は、その範囲が非常に広いことです。
> 「戦争と平和」は 100 万語ありますが、ある地域の数十年の歴史しか説明できません。
> そして、アシモフの『ファイナルアンサー』のような SF 小説は、人類を含む宇宙全体の数十億年の歴史を、わずか数千語で鮮やかに描写します。
> このような包括性と大胆さは、伝統的な文学では実現できません。
<p style="text-align:right">── 劉慈欣</p>

### ヒント`> [!TIP]`

> [!TIP]
> パスポートとビザの有効期限を忘れずに確認してください。有効期限が切れている書類は出入国できません。

次のように書かれています

```
> [!TIP]
> YOUR CONTENT
```

### 備考`> [!NOTE]`

> [!NOTE]
> メッセージを送ってすぐに返信したら、それは何を意味しますか?
> これは、私が本当に携帯電話で遊ぶのが大好きであることを示しています。


### 警告`> [!WARN]`

> [!WARN]
> ワイルドな冒険に出かけるときは、安全を確保することが重要です。重要な安全上のヒントをいくつか紹介します。
>
> - **天気予報を確認する**: 先週、登山者のグループが天気予報を確認しなかったため、山の中腹で嵐に遭遇し、緊急に避難しなければなりませんでした。
> - **必要な装備を携行**: 十分な食料、水、応急処置用品を必ず持参してください。
> - **地形を理解する**: 道に迷わないように、事前にアドベンチャー エリアの地形とルートをよく理解してください。
> - **接続を維持**: 外の世界との接続を維持し、誰もが安全に帰宅できるようにします。
>
> 安全は常に最優先であることを忘れないでください。

## やることリスト

- [x] 製品プロトタイプの設計と機能リスト
- [ ] テクノロジースタックと開発ツールを決定する
- [ ] 製品開発のタイムラインとマイルストーンを作成する

## リスト

### 順序付きリスト

1. 走っている
   1. 週に3回、毎回5キロメートル
   1. ハーフマラソンを走る
1. ジムトレーニング
   1. 週に2回、毎回1時間程度
   1. 体幹の筋肉に焦点を当てる

### 順序なしリスト

* 社交行事
  - 業界交流会に参加する
    + 技術共有セッション
    + 起業家交流会
  - 友達の集まりを企画する
    + アウトドアBBQ
    + 映画の夜

## シート

| 思想家       | 主な貢献                           |
|--------------|------------------------------------|
| 孔子         | 儒教の創始者 |
| ソクラテス     | 西洋哲学の父  |
| ニーチェ         | スーパーマンの哲学、伝統的な道徳と宗教を批判       |
| マルクス       | 共産主義 |

### 大きなテーブルの表示の最適化

比較的大きなテーブルの場合、次の方法を使用して表示効果を最適化できます。

1. 小さいフォントを使用する

   たとえば、テーブルを`<div style="font-size:14px">`と`</div>`で囲みます。

   `div`タグは独自の行を占有し、その前後に空白行を残す必要があることに注意してください。
1. セル内の長いテキストの場合は、行を折り返すために`<br>`挿入します。
1. 列が短くなりすぎる場合は、ヘッダーに`<div style="width:100px">xxx</div>`を追加して幅を広げることができます。また、[ヘッダーに`<wbr>`](//developer.mozilla.org/docs/Web/HTML/Element/wbr)を追加して改行位置を制御することもできます。

デモンストレーションの例は次のとおりです。

<div style="font-size:14px">

| 国家       | <div style="width:70px;margin:auto">思想家の名前</div> | 時代 | 主なイデオロギー的貢献                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| 中国       | 孔子                                           | 紀元前 551 ～ 479 年   | 儒教の創始者は「仁」や「礼儀」などの中核となる概念を提唱し、道徳の育成と社会秩序を重視しました。 |
| 古代ギリシャ     | ソクラテス                                       | 紀元前 469 ～ 399 年   | 対話と弁証法による真実の探求は「自分を知る」ことを提案し、合理的思考を重視します         |
| フランス       | ヴォルテール                                         | 1694-1778       | 啓蒙主義の代表的な人物たちは合理性、自由、平等を主張し、宗教的な迷信と権威主義的支配を批判しました。   |
| ドイツ       | カント                                           | 1724-1804       | 「純粋理性批判」を提唱する<br>実践的な理性を強調しながら、道徳、自由、知識の基礎を探求します。     |

</div>

上記の例の疑似コードは次のとおりです。

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## コード

### インラインコード

プログラミング言語の広大な世界では、 `Rust` 、 `Python` 、 `JavaScript` 、 `Go`はそれぞれ独自の位置を占めています。

### 複数行のコード

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## 段落内での改行

段落内での改行は、行間に空白行を追加することなく実現できます。
段落内の改行の間隔は、段落間の間隔よりも狭くなります。

例えば:

> 偉大な人間として生き、
> 死もまた幽霊の英雄です。
> 項羽は今でも懐かしいです
> 江東を越えるのは気が進まない。
>
> 李青照は項羽の悲劇的な物語を利用して宋の無能さをほのめかした。
> 戦わずして降伏した朝廷に不満を表明。