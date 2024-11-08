# フッター

引き続きデモ プロジェクトを例に挙げると、 `md`ディレクトリの`.i18n/htm/foot.pug`は Web サイトのフッターを定義します。

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) `HTML`を生成するテンプレート言語です。

[➔ の文法を学ぶにはここをクリックしてくださいpug](https://pugjs.org)

**`foot.pug`に`css`と`js`書き込まないでください**。そうしないとエラーが発生します。

以下を参照してください。スタイルは対応する`.css`に書き込まれ、Web コンポーネントを作成することで対話が実現されます。

## フッターのスタイル

デモ プロジェクトには`md/.i18n/htm`の下に`css`ファイルが 3 つあります。

* `foot.css` :フッターのスタイル
* `import.css` : 1サイト全体の`i18n.site`スタイル
* `conf.css` :フッターのアイコンとフォント

### アイコンフォント

フッター アイコンは、 `F` iconfont.cn ([英語版](https://www.iconfont.cn/?lang=en-us)/[中文版](https://www.iconfont.cn/?lang=zh)) という名前のフォントを作成することによって生成されます。

必要に応じて独自のアイコン フォントを作成し、次の設定を`conf.css`に置き換えてください:

```
@font-face {
  font-family: "F";
  src: url(//p.3ti.site/ico1.woff2) format("woff2");
}

#Ft>b>a.site {
  background: url("//p.3ti.site/i18n.svg") 0 0 / cover;
  display: block;
  height: 24px;
  opacity: 0.8;
  width: 115px;
  flex-shrink: 0;
}
```

iconfont.cnのフォントファイルはsafariブラウザでは読み込むことができないため、直接参照しないでください。

## Webコンポーネント

`foot.pug`に`js`書き込むことはできません。インタラクションが必要な場合は、Webコンポーネントをカスタマイズしてください。

[Web コンポーネントは](https://www.freecodecamp.org/news/build-your-first-web-component/)`md/.i18n/htm/index.js`で定義し、 `foot.pug`で使用できます。

カスタム`<x-img>`などの Web コンポーネントを簡単に作成できます。

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

`.i18n/htm/foot.pug`のコードは次のとおりです:

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

ここで、 `${I18N.C}` `en/i18n.yml`に対応します:

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

この書き方と同様に`${I18N.xxx}`使用し、 `i18n.yml`と組み合わせることで、フッターの多言語国際化を実現できます。

リンクに`class="a"`追加すると、リンクが`MarkDown`に変換されなくなります。「 :参照してください。
 [➔ `YAML` :リンク`HTML` `Markdown`に変換されないようにする方法](/i18/qa#H2)。