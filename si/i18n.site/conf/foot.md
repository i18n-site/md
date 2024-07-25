# පාදකය

තවමත් ආදර්ශන ව්‍යාපෘතිය උදාහරණයක් ලෙස ගෙන, වෙබ් අඩවියේ පාදකය `md` අර්ථ දක්වා `.i18n/htm/foot.pug` .

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) යනු `HTML` ජනනය කරන අච්චු භාෂාවකි.

[➔ ව්‍යාකරණ ඉගෙන ගැනීමට මෙතන ක්ලික් කරන්න pug](https://pugjs.org)

**`css` සහ `js` යනුවෙන් ලියන්න `foot.pug`** , එසේ නොමැතිනම් දෝෂ ඇති වේ.

කරුණාකර පහත සඳහන් දේ වෙත යොමු වන්න, විලාසය අනුරූප `.css` සහ අන්තර්ක්‍රියා වෙබ් සංරචක නිර්මාණය කිරීමෙන් සාක්ෂාත් කරගනු ලැබේ.

## පාදක විලාසය

`md/.i18n/htm` ව්‍යාපෘතියේ පහත ගොනු `css` ක් ඇත.

* `foot.css` :
* `import.css` සම්පූර්ණ අඩවිය : `i18n.site` විලාසය
* `conf.css` අයිකන සහ :

### අයිකන අකුරු

iconfont.cn [ඉංග්‍රීසි අනුවාදය](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) `F`

කරුණාකර අවශ්‍ය පරිදි ඔබේම අයිකන අකුරු නිර්මාණය කර : වින්‍යාසය ප්‍රතිස්ථාපනය කරන්න `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## වෙබ් සංරචක

`foot.pug` `js`

ඔබට [වෙබ් සංරචකයක්](https://www.freecodecamp.org/news/build-your-first-web-component/) නිර්වචනය කළ `foot.pug` `md/.i18n/htm/index.js`

අභිරුචි ටැග් වැනි වෙබ් සංරචක සෑදීම පහසුය `<x-img>`

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

## බහුභාෂා පාදකය

එහි ඇති කේතය පහත පරිදි : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

`${I18N.C}` අදාල එක `en/i18n.yml` හි ඇත :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

`${I18N.xxx}` ලිවීමේ ක්‍රමයට සමානව, `i18n.yml` සමඟ ඒකාබද්ධව, ඔබට පාදයේ බහු භාෂා ජාත්‍යන්තරකරණය ලබා ගත හැක.

සබැඳිය `MarkDown` බවට පරිවර්තනය වීම වළක්වා ගැනීමට සබැඳියට එක් : , බලන්න `class="a"`
 [: ලින්ක් එකේ `HTML` `Markdown` බවට පරිවර්තනය වීම වලක්වන්නේ `YAML`](/i18/qa#H2) .