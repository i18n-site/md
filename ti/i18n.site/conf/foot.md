# እግረ ጽሑፍ

ሕጂ ውን ነቲ ናይ ዲሞ ፕሮጀክት ከም ኣብነት ወሲድናዮ `.i18n/htm/foot.pug` ኣብቲ `md` ማህደር ንእግሪ ጽሑፍ ናይቲ መርበብ ሓበሬታ ይገልጽ።

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) `HTML` 's ዘመንጩ ናይ ቅጥዒ ቋንቋ እዩ።

[➔ ሰዋስው ናይ pug](https://pugjs.org)

**ኣብ `foot.pug` `css` ን `js` ን ኣይትጽሓፉ** ፣ እንተዘይኮይኑ ጌጋ ክህሉ እዩ።

በጃኹም ነዚ ዝስዕብ ተወከሱ፣ እቲ ቅዲ ናብቲ ዝሰማማዕ `.css` ይጽሓፍ፣ እቲ ምትእስሳር ድማ ናይ መርበብ ኣካላት ብምፍጣር እዩ ዝረጋገጽ።

## ቅዲ እግረ-ጽሑፍ

ኣብቲ ናይ ዲሞ ፕሮጀክት ትሕቲ `md/.i18n/htm` ዝኾኑ ሰለስተ `css` ፋይላት ኣለዉ።

* `foot.css` : ቅዲ እግረ-ጽሑፍ
* `import.css` : `i18n.site` ቅዲ ንመላእ ሳይት።
* `conf.css` : እግረ-ጽሑፍ ምልክታትን ቅርጽታትን

### ምልክት ቅርጺ ፊደል

እቲ ናይ እግሪ ምልክት `F` iconfont.cn ( [ትግርኛ ስሪት](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) ዝበሃል ቅርጺ ብምፍጣር ይፍጠር።

በጃኹም ከም ኣድላይነቱ ናይ ባዕልኹም icon font ፍጠሩ እሞ ነዚ ዝስዕብ ውቅር ብ `conf.css` ተክእዎ :

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

በጃኹም ብቐጥታ ነቲ ናይ iconfont.cn ቅርጺ ፋይል ኣይትውከሱ ምኽንያቱ ኣብ ሳፋሪ መርበብ ሓበሬታ ክጽዓን ስለዘይክእል።

## ናይ መርበብ ሓበሬታ ክፍልታት

`js` ካብ `foot.pug` ክትጽሕፍ ኣይትኽእልን ኢኻ።ምትእስሳር እንተድኣ ኣድልዩ፡ በጃኻ ነቲ ናይ መርበብ ሓበሬታ ክፍሊ ኣመዓራርዮ።

[ሓደ ዌብ ኮምፖነንት](https://www.freecodecamp.org/news/build-your-first-web-component/) ኣብ `md/.i18n/htm/index.js` ክግለጽ ይኽእል ድሕሪኡ ኣብ `foot.pug` ክጥቀመሉ ይኽእል።

ከም custom `<x-img>` ዝኣመሰሉ ናይ መርበብ ሓበሬታ ክፍልታት ምፍጣር ቀሊል እዩ።

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

ኣብ `.i18n/htm/foot.pug` ዘሎ ኮድ ከምዚ ዝስዕብ እዩ :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

ኣብዚ `${I18N.C}` ምስ `en/i18n.yml` ይሰማማዕ :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

ምስዚ ኣገባብ ጽሕፈት ዝመሳሰል `${I18N.xxx}` ብምጥቃም፡ ምስ `i18n.yml` ተደሚሩ፡ ናይቲ እግረ-ጽሑፍ ብብዙሕ ቋንቋታት ኣህጉራዊ ምግባር ክትበጽሕ ትኽእል።

ኣብቲ ሊንክ `class="a"` ምውሳኽ እቲ ሊንክ ናብ `MarkDown` ከይቅየር ንምክልኻል እዩ ርአ :
 [➔ `YAML` ከመይ ጌርና ሊንክ `HTML` ናብ `Markdown` ከይቅየር :](/i18/qa#H2) !