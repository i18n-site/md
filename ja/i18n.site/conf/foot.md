# フッター

デモプロジェクトを例にとって、`md`ディレクトリの`.i18n/htm/foot.pug`がウェブサイトのフッターを定義しています。

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org)は、`HTML`を生成するテンプレート言語です。

[➔ ここをクリックしてpugの文法を学ぶ](https://pugjs.org)

**`foot.pug`には`css`と`js`を書かないでください**。それするとエラーが発生します。

以下を参照してください。スタイルは対応する`.css`ファイルに書き、インタラクションはウェブコンポーネントの作成で実現します。

## フッターのスタイル

デモプロジェクトの`md/.i18n/htm`配下には3つの`css`ファイルがあります。

* `foot.css`: フッターのスタイル
* `import.css`: `i18n.site`サイト全体のデフォルトスタイル
* `conf.css`: フッターのアイコンとフォント

### アイコンフォント

フッターのアイコンは、iconfont.cn([英語版](https://www.iconfont.cn/?lang=en-us) / [中文版](https://www.iconfont.cn/?lang=zh))で作成された、`F`という名前のフォントを利用して生成されています。

必要に応じて、自分のアイコンフォントを作成し、`conf.css`の以下の設定を置き換えてください:

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## ウェブコンポーネント

`foot.pug`には`js`を書かないでください。インタラクションが必要な場合は、ウェブコンポーネントをカスタマイズしてください。

`md/.i18n/htm/index.js`で[ウェブコンポーネント](https://www.freecodecamp.org/news/build-your-first-web-component/)を定義し、それを`foot.pug`で使用します。

カスタムタグ`<x-img>`など、ウェブコンポーネントの作成は簡単です。

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

## フッターの多言語対応

`.i18n/htm/foot.pug`には以下のコードがあります:

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

ここで`${I18N.C}`は`en/i18n.yml`の以下に対応しています:

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

`${I18N.xxx}`のような書き方をし、`i18n.yml`と組み合わせることで、フッターの多言語対応を国际化します。

リンクに`class="a"`を追加することで、リンクが`Markdown`形式に変換されないようにします。以下を参照してください:
 [➔ `YAML`: リンクの`HTML`が`Markdown`に変換されないようにする方法](/i18/qa#H2)