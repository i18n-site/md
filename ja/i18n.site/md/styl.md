# スタイル一覧

[ここをクリックして、このページのソースファイルを確認し、以下の形式で`MarkDown`の記述方法を御覧ください。](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md)

## 下線 & 削除線 & 太字

これは__アンダーライン__、~~消去線~~そして**太字**のデモテキストです。

書き方としては以下の通りです:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

`i18n.site`のウェブサイト構築ツールの`Markdown`パーサーは、下線、 strikethrough、太字の構文を最適化し、マークの前後にスペースがなくても効果があります。これにより、中国語、日本語、韓国語などのスペースを区切り文字として使用しない言語でドキュメントを書くのがより簡単になります。

拡張読書: [なぜ、掘金的Markdownの強調構文(`**……**`)が時々効かないのか？](//juejin.cn/post/7064565848421171213)

## 引用

### 単行引用

> 我が才は必ず有用なり、千金散尽後も再び還る。
<p style="text-align:right">─ 李白</p>

### 複数行引用

> SF小説の他に独自の利点があるのは、その視野が非常に広いことです。
> 『戦争と平和』は百万字に及び、しかし一地域の数十年の歴史を描いただけです；
> そしてアシモフの『最後の答え』のようなSF小説は、短短の数千字で人類を含む宇宙全体の数十億年の歴史を鮮やかに描きます。
> このような包容力と大胆さは、伝統文学が到達することのできないものです。
<p style="text-align:right">── 劉慈欣</p>

### ヒント `> [!TIP]`

> [!TIP]
> パスポートおよびビザの有効期限を必ず確認してください。期限切れの書類では入国・出国ができません。

以下のように記載されています

```
> [!TIP]
> YOUR CONTENT
```

### 備考 `> [!NOTE]`

> [!NOTE]
> 私にメッセージを送ると、即座に返信するなら、それは何を示しているのでしょうか？
> これは、私が携帯電話を非常喜欢していることを意味しています。


### 警報 `> [!WARN]`

> [!WARN]
> 野外探险を行う際には、安全に注意を払うことが肝要です。
> 先週、一支登山队在半山遭遇了暴風雨，因为他们没有查看天气预报，不得不紧急避難しました。
> 覚えておいてください、屋外活動には十分な準備と天候への注意が必要です。

## やることリスト

- [x] 製品プロトタイプの設計と機能リスト
- [ ] 技術スタックと開発ツールの決定
- [ ] 製品開発のタイムラインとマイルストーンの設定

## リスト

### 順序付きリスト

1. ランニング
   1. 週3回、1回5キロメートル
   1. ハーフマラソン参加
1. ジムでのトレーニング
   1. 週2回、1回1時間
   1. 体幹筋群の強化

### 順序なしリスト

* 社交活動
  - 業界交流会参加
    + 技術共有会
    + 起業家交流会
  - 友人との集まりを主催
    + アウトドアバーベキュー
    + 映画の夜

## 表

| ＜哲学者＞       | 主要な貢献                           |
|--------------|------------------------------------|
| 孔子         | 儒教の創始者 |
| ソクラテス     | 西洋哲学の父  |
| ニーチェ         | 超人的哲学、伝統的道徳と宗教の批判       |
| マルクス       | 共産主義 |

## コード

### インラインコード

プログラミング言語の広大な世界で、 `Rust` 、 `Python` 、 `JavaScript` 、 `Go` はそれぞれ独自の位置を占めています。

### 複数行のコード

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```