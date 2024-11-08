# ਅਨੁਕੂਲਿਤ ਫੁੱਟਰ

ਅਜੇ ਵੀ ਇੱਕ ਉਦਾਹਰਣ ਵਜੋਂ ਡੈਮੋ ਪ੍ਰੋਜੈਕਟ ਨੂੰ ਲੈ ਕੇ, `md` ਡਾਇਰੈਕਟਰੀ ਵਿੱਚ `.i18n/htm/foot.pug` ਵੈਬਸਾਈਟ ਦੇ ਫੁੱਟਰ ਨੂੰ ਪਰਿਭਾਸ਼ਿਤ ਕਰਦਾ ਹੈ.

![](https://p.3ti.site/1721286077.avif)

## ਫੁੱਟਰ ਸ਼ੈਲੀ

ਡੈਮੋ ਪ੍ਰੋਜੈਕਟ ਵਿੱਚ `md/.i18n/htm` ਹੇਠਾਂ ਤਿੰਨ `css` ਫਾਈਲਾਂ ਹਨ।

* `foot.css` : ਸ਼ੈਲੀ
* `import.css` : 1ਪੂਰੀ ਸਾਈਟ ਲਈ `i18n.site` ਸ਼ੈਲੀ
* `conf.css` : ਆਈਕਾਨ ਅਤੇ ਫੌਂਟ

### ਆਈਕਨ ਫੌਂਟ

ਫੁੱਟਰ ਆਈਕਨ iconfont.cn ( [ਅੰਗਰੇਜ਼ੀ ਸੰਸਕਰਣ](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) ਨਾਮਕ ਫੌਂਟ ਬਣਾ ਕੇ ਤਿਆਰ ਕੀਤਾ ਗਿਆ `F` ।

ਕਿਰਪਾ ਕਰਕੇ ਲੋੜ ਅਨੁਸਾਰ ਆਪਣਾ ਖੁਦ ਦਾ ਆਈਕਨ ਫੌਂਟ ਬਣਾਓ ਅਤੇ ਹੇਠਾਂ ਦਿੱਤੀ ਸੰਰਚਨਾ ਨੂੰ `conf.css` ਵਿੱਚ ਬਦਲੋ :

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

ਕਿਰਪਾ ਕਰਕੇ iconfont.cn ਦੀ ਫੌਂਟ ਫਾਈਲ ਦਾ ਸਿੱਧਾ ਹਵਾਲਾ ਨਾ ਦਿਓ ਕਿਉਂਕਿ ਇਸਨੂੰ ਸਫਾਰੀ ਬ੍ਰਾਊਜ਼ਰ 'ਤੇ ਲੋਡ ਨਹੀਂ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ।

## ਵੈੱਬ ਭਾਗ

ਤੁਸੀਂ `foot.pug` ਵਿੱਚ `js` ਨਹੀਂ ਲਿਖ ਸਕਦੇ। ਜੇਕਰ ਇੰਟਰੈਕਸ਼ਨ ਦੀ ਲੋੜ ਹੈ, ਤਾਂ ਕਿਰਪਾ ਕਰਕੇ ਵੈੱਬ ਕੰਪੋਨੈਂਟ ਨੂੰ ਅਨੁਕੂਲਿਤ ਕਰੋ।

[ਇੱਕ ਵੈਬ ਕੰਪੋਨੈਂਟ ਨੂੰ](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` ਵਿੱਚ ਪਰਿਭਾਸ਼ਿਤ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ ਅਤੇ ਫਿਰ `foot.pug` ਵਿੱਚ ਵਰਤਿਆ ਜਾ ਸਕਦਾ ਹੈ।

ਵੈਬ ਕੰਪੋਨੈਂਟ ਬਣਾਉਣਾ ਆਸਾਨ ਹੈ, ਜਿਵੇਂ ਕਿ ਕਸਟਮ `<x-img>` ।

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

`.i18n/htm/foot.pug` ਵਿੱਚ ਕੋਡ ਹੇਠ ਲਿਖੇ ਅਨੁਸਾਰ ਹੈ :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

ਇੱਥੇ `${I18N.C}` `en/i18n.yml` ਨਾਲ ਮੇਲ ਖਾਂਦਾ ਹੈ :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

ਇਸ ਲਿਖਣ ਵਿਧੀ ਦੇ ਸਮਾਨ `${I18N.xxx}` ਵਰਤੋਂ ਕਰਦੇ ਹੋਏ, `i18n.yml` ਦੇ ਨਾਲ ਮਿਲਾ ਕੇ, ਤੁਸੀਂ ਫੁੱਟਰ ਦਾ ਬਹੁ-ਭਾਸ਼ੀ ਅੰਤਰਰਾਸ਼ਟਰੀਕਰਨ ਪ੍ਰਾਪਤ ਕਰ ਸਕਦੇ ਹੋ।

ਲਿੰਕ ਵਿੱਚ `class="a"` ਜੋੜਨਾ ਲਿੰਕ ਨੂੰ `MarkDown` ਵਿੱਚ ਤਬਦੀਲ ਹੋਣ ਤੋਂ ਰੋਕਣ ਲਈ ਹੈ। ਵੇਖੋ :
 [➔ `YAML` : ਲਿੰਕ `HTML` `Markdown` ਵਿੱਚ ਬਦਲਣ ਤੋਂ ਕਿਵੇਂ ਰੋਕਿਆ ਜਾਵੇ](/i18/qa#H2) ।