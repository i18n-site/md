# フッター

引き続きデモ プロジェクトを例に挙げると、Web サイトのフッターは`md`ディレクトリで定義され`.i18n/htm/foot.pug` 。

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) `HTML`を生成するテンプレート言語です。

[➔ の文法を学ぶにはここをクリックしてくださいpug](https://pugjs.org)

**`foot.pug`には`css`と`js`書かないでください**。そうしないとエラーが発生します。

以下を参照してください。スタイルは対応する`.css`対話は Web コンポーネントを作成することによって実現されます。

## フッターのスタイル

デモプロジェクトに`md/.i18n/htm`以下の 3 つの`css`ファイルがあります。

* `foot.css`フッター:スタイル
* `import.css` :サイト全体の`i18n.site`スタイル
* `conf.css` :アイコンとフォント

### アイコンフォント

フッター アイコンはiconfont.cn ([英語版](https://www.iconfont.cn/?lang=en-us)/[中文版](https://www.iconfont.cn/?lang=zh)) という名前のフォントを作成することによって生成されます`F`

必要に応じて独自のアイコン フォントを作成し、 :の設定を`conf.css`に置き換えてください。

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Webコンポーネント

`foot.pug` `js`を記述することはできません。インタラクションが必要な場合は、Web ページのコンポーネントをカスタマイズしてください。

`md/.i18n/htm/index.js`で[Web コンポーネント](https://www.freecodecamp.org/news/build-your-first-web-component/)を定義し、そのコンポーネントを`foot.pug`で使用できます。

カスタム タグなどの Web コンポーネントを簡単に作成できます`<x-img>`

```js
customElements.define(
  'x-img',
  class extends HTMLElement {
    constructor() {
      super();
      var img = document.createElement('img');
      img.src = '//p.3ti.site/i18n.svg';
      img.style = "height:99px;width:99px;";
      this.append(img);
    }
  }
)
```

## 多言語フッター

`.i18n/htm/foot.pug`その中のコードは次のとおりです:

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

ここで`${I18N.C}`対応するものは`en/i18n.yml` :にあります。

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

この記述方法と同様に`${I18N.xxx}` `i18n.yml`と組み合わせて使用​​すると、フッターの多言語国際化を実現できます。

リンクが`MarkDown`に変換されないようにするには、リンクに`class="a"`を追加します: 「!」を参照してください。
 [:リンクの`HTML` `Markdown`に変換されないようにする`YAML`](/i18/qa#H2) 。