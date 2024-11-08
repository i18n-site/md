# පාදකය

තවමත් ආදර්ශන ව්යාපෘතිය උදාහරණයක් ලෙස ගනිමින්, `md` නාමාවලියෙහි `.i18n/htm/foot.pug` වෙබ් අඩවියේ පාදකය නිර්වචනය කරයි.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) යනු `HTML` 's ජනනය කරන අච්චු භාෂාවකි.

[➔ ව්යාකරණ ඉගෙන ගැනීමට මෙතන ක්ලික් කරන්න pug](https://pugjs.org)

**`foot.pug` හි `css` සහ `js` ලියන්න එපා** , එසේ නොමැතිනම් දෝෂයක් ඇති වේ.

කරුණාකර පහත සඳහන් දේ වෙත යොමු වන්න, විලාසය අනුරූප `.css` ට ලියා ඇත, සහ අන්තර්ක්රියා වෙබ් සංරචක සෑදීමෙන් සාක්ෂාත් කරගනු ලැබේ.

## පාදක විලාසය

ආදර්ශන ව්යාපෘතියේ `md/.i18n/htm` යටතේ ගොනු `css` ක් ඇත.

* `foot.css` පාදක :
* `import.css` : 1 සම්පූර්ණ වෙබ් අඩවිය සඳහා `i18n.site` විලාසය
* `conf.css` පාදක : සහ අකුරු

### අයිකන අකුරු

පාදක නිරූපකය ජනනය කරනු ලබන්නේ `F` iconfont.cn ( [ඉංග්රීසි අනුවාදය](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh))

කරුණාකර අවශ්ය පරිදි ඔබේම අයිකන අකුරු නිර්මාණය කර පහත වින්යාසය `conf.css` හි ප්රතිස්ථාපනය කරන්න :

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

කරුණාකර iconfont.cn හි අකුරු ගොනුව සෆාරි බ්රවුසරයේ පූරණය කළ නොහැකි බැවින් එය සෘජුවම යොමු නොකරන්න.

## වෙබ් සංරචක

ඔබට `foot.pug` න් `js` ලිවිය නොහැක. අන්තර්ක්රියා අවශ්ය නම්, කරුණාකර වෙබ් සංරචකය අභිරුචිකරණය කරන්න.

[වෙබ් සංරචකයක්](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` හි අර්ථ දැක්විය හැකි අතර පසුව `foot.pug` හි භාවිතා කළ හැක.

අභිරුචි `<x-img>` වැනි වෙබ් සංරචක සෑදීම පහසුය.

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

`.i18n/htm/foot.pug` හි කේතය පහත පරිදි වේ :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

මෙහි `${I18N.C}` `en/i18n.yml` ට අනුරූප වේ :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

මෙම ලිවීමේ ක්රමයට සමාන `${I18N.xxx}` භාවිතා කරමින්, `i18n.yml` සමඟ ඒකාබද්ධව, ඔබට පාදකය බහු භාෂා ජාත්යන්තරකරණය ලබා ගත හැක.

සබැඳියට `class="a"` එකතු කිරීම සබැඳිය `MarkDown` බවට පරිවර්තනය වීම වැළැක්වීමයි. බලන්න :
 [➔ `YAML` ලින්ක් `HTML` `Markdown` බවට පරිවර්තනය වීම වළක්වා ගන්නේ :](/i18/qa#H2) ?