# ਫੁੱਟਰ

ਅਜੇ ਵੀ ਇੱਕ ਉਦਾਹਰਨ ਵਜੋਂ ਡੈਮੋ ਪ੍ਰੋਜੈਕਟ ਨੂੰ ਲੈ ਕੇ, ਵੈਬਸਾਈਟ ਦੇ ਫੁੱਟਰ ਨੂੰ `md` ਵਿੱਚ ਪਰਿਭਾਸ਼ਿਤ ਕੀਤਾ ਗਿਆ `.i18n/htm/foot.pug` ।

<img alt="" src="https://p.3ti.site/1721286077.avif">

ਇੱਕ ਟੈਂਪਲੇਟ ਭਾਸ਼ਾ ਹੈ ਜੋ `HTML` ਤਿਆਰ ਕਰਦੀ ਹੈ [`pug`](https://pugjs.org)

[➔ ਦੀ ਵਿਆਕਰਨ ਸਿੱਖਣ ਲਈ ਇੱਥੇ ਕਲਿੱਕ ਕਰੋ pug](https://pugjs.org)

**`css` ਅਤੇ `js` `foot.pug` ਨਾ ਲਿਖੋ** , ਨਹੀਂ ਤਾਂ ਗਲਤੀਆਂ ਹੋਣਗੀਆਂ।

ਕਿਰਪਾ ਕਰਕੇ ਹੇਠਾਂ ਦਿੱਤੇ ਨੂੰ ਵੇਖੋ, ਸ਼ੈਲੀ ਅਨੁਸਾਰੀ ਵਿੱਚ ਲਿਖੀ ਗਈ ਹੈ `.css` ਅਤੇ ਇੰਟਰੈਕਸ਼ਨ ਵੈਬ ਕੰਪੋਨੈਂਟ ਬਣਾ ਕੇ ਪ੍ਰਾਪਤ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।

## ਫੁੱਟਰ ਸ਼ੈਲੀ

ਡੈਮੋ ਪ੍ਰੋਜੈਕਟ ਵਿੱਚ ਹੇਠਾਂ 3 `css` ਫਾਈਲਾਂ ਹਨ `md/.i18n/htm`

* ਫੁੱਟਰ : `foot.css`
* ਪੂਰੀ ਸਾਈਟ ਲਈ `import.css` `i18n.site` :
* ਫੁੱਟਰ ਆਈਕਾਨ ਅਤੇ : `conf.css`

### ਆਈਕਨ ਫੌਂਟ

ਫੁੱਟਰ ਆਈਕਨ iconfont.cn ( [ਅੰਗਰੇਜ਼ੀ ਸੰਸਕਰਣ](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) ਦੁਆਰਾ ਤਿਆਰ ਕੀਤਾ ਗਿਆ ਹੈ `F`

ਕਿਰਪਾ ਕਰਕੇ ਲੋੜ ਅਨੁਸਾਰ ਆਪਣਾ ਖੁਦ ਦਾ ਆਈਕਨ ਫੌਂਟ ਬਣਾਓ ਅਤੇ ਹੇਠ ਦਿੱਤੀ ਸੰਰਚਨਾ : ਵਿੱਚ ਬਦਲੋ `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## ਵੈੱਬ ਭਾਗ

ਇਸ ਵਿੱਚ `js` ਨਹੀਂ ਲਿਖਿਆ ਜਾ ਸਕਦਾ `foot.pug` , ਕਿਰਪਾ ਕਰਕੇ ਵੈਬ ਪੇਜ ਕੰਪੋਨੈਂਟ ਨੂੰ ਅਨੁਕੂਲਿਤ ਕਰੋ।

ਤੁਸੀਂ `md/.i18n/htm/index.js` [ਇੱਕ ਵੈਬ ਕੰਪੋਨੈਂਟ](https://www.freecodecamp.org/news/build-your-first-web-component/) ਪਰਿਭਾਸ਼ਿਤ ਕਰ ਸਕਦੇ ਹੋ ਅਤੇ ਫਿਰ `foot.pug` ਵਿੱਚ ਕੰਪੋਨੈਂਟ ਦੀ ਵਰਤੋਂ ਕਰ ਸਕਦੇ ਹੋ.

ਵੈਬ ਕੰਪੋਨੈਂਟ ਬਣਾਉਣਾ ਆਸਾਨ ਹੈ, ਜਿਵੇਂ ਕਸਟਮ ਟੈਗਸ `<x-img>`

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

## ਬਹੁ-ਭਾਸ਼ਾਈ ਫੁੱਟਰ

ਇਸ ਵਿੱਚ ਕੋਡ ਹੇਠ ਲਿਖੇ ਅਨੁਸਾਰ : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

ਇੱਥੇ ਸੰਬੰਧਿਤ ਇੱਕ `en/i18n.yml` ਵਿੱਚ : `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

ਇਸ ਲਿਖਤ ਵਿਧੀ ਦੇ ਸਮਾਨ ਦੀ ਵਰਤੋਂ `${I18N.xxx}` , `i18n.yml` ਦੇ ਨਾਲ, ਤੁਸੀਂ ਫੁੱਟਰ ਦਾ ਬਹੁ-ਭਾਸ਼ੀ ਅੰਤਰਰਾਸ਼ਟਰੀਕਰਨ ਪ੍ਰਾਪਤ ਕਰ ਸਕਦੇ ਹੋ।

ਲਿੰਕ ਨੂੰ `MarkDown` ਵਿੱਚ ਬਦਲਣ ਤੋਂ ਬਚਣ ਲਈ ਲਿੰਕ ਵਿੱਚ ਸ਼ਾਮਲ `class="a"` , ਵੇਖੋ :
 [: ਲਿੰਕ ਦੇ `HTML` `Markdown` ਵਿੱਚ ਤਬਦੀਲ ਹੋਣ ਤੋਂ `YAML` ਰੋਕਿਆ ਜਾਵੇ](/i18/qa#H2) ।