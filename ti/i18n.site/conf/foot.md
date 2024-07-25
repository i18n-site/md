# እግረ ጽሑፍ

ሕጂ ውን ነቲ ናይ ዲሞ ፕሮጀክት ከም ኣብነት ብምውሳድ `.i18n/htm/foot.pug` ናይቲ መርበብ ሓበሬታ ኣብቲ `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

`HTML` ዘመንጩ ናይ ቅጥዒ ቋንቋ እዩ [`pug`](https://pugjs.org)

[➔ ሰዋስው ናይ pug](https://pugjs.org)

**`css` ን `js` `foot.pug`** ፡ እንተዘይኮይኑ ጌጋታት ክህሉ እዩ።

በጃኹም ነዚ ዝስዕብ ተወከሱ፣ እቲ ቅዲ በቲ ዝሰማማዕ `.css` እቲ ምትእስሳር ድማ ናይ መርበብ ኣካላት ብምፍጣር እዩ ዝረጋገጽ።

## ቅዲ እግረ-ጽሑፍ

ኣብቲ ናይ ዲሞ ፕሮጀክት 3 `css` ፋይላት ኣብ ታሕቲ ኣለዉ `md/.i18n/htm`

* `foot.css` :
* : `i18n.site` ቅዲ ንመላእ ሳይት `import.css`
* `conf.css` :

### ምልክት ቅርጺ ፊደል

እቲ ናይ እግሪ ምልክት ብ iconfont.cn ( [ትግርኛ ስሪት](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) `F`

በጃኹም ከም ኣድላይነቱ ናይ ገዛእ ርእስኹም icon font ፍጠሩ እሞ : ዝስዕብ ውቅር ኣብ `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## ናይ መርበብ ሓበሬታ ክፍልታት

`foot.pug` `js`

[ኣብ](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` `foot.pug`

ናይ መርበብ ሓበሬታ ክፍልታት ምፍጣር ቀሊል እዩ፣ ከም ብሕታዊ መለለዪታት `<x-img>`

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

## ብዙሕ ቋንቋታት ዝዛረብ እግረ ጽሑፍ

`.i18n/htm/foot.pug` :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

: እቲ ተዛማዲ ኣብ `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

`i18n.yml` ኣገባብ ጽሕፈት ዝመሳሰል `${I18N.xxx}`

እቲ ሊንክ : `MarkDown` ከይቅየር ኣብቲ ሊንክ ወስኹሉ `class="a"`
 [: `YAML` `HTML` `Markdown`](/i18/qa#H2)