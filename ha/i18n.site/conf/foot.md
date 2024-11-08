# Kafa

Har yanzu ɗaukar aikin demo azaman misali, `.i18n/htm/foot.pug` a cikin kundin adireshi `md` yana ayyana ƙafar gidan yanar gizon.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) yaren samfuri ne wanda ke haifar da `HTML` 's.

[➔ Danna nan don koyon nahawun pug](https://pugjs.org)

**Kada a rubuta `css` da `js` a cikin `foot.pug`** , in ba haka ba za a sami kuskure.

Da fatan za a koma zuwa masu zuwa, an rubuta salon a cikin daidaitattun `.css` , kuma ana samun hulɗar ta hanyar ƙirƙirar abubuwan yanar gizo.

## Salon Kafa

Akwai fayiloli `css` guda uku a ƙarƙashin `md/.i18n/htm` a cikin aikin demo.

* `foot.css` :
* `import.css` : `i18n.site` salon ga duka rukunin yanar gizon
* `conf.css` :

### Ikon Font

Ana samar da alamar ƙafa ta hanyar ƙirƙirar font `F` iconfont.cn [Sigar Turanci](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Da fatan za a ƙirƙiri rubutun gunkin ku kamar yadda ake buƙata kuma maye gurbin saitin mai zuwa a cikin `conf.css` :

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

Don Allah kar a yi la'akari da fayil ɗin font ɗin iconfont.cn kai tsaye saboda ba za a iya loda shi akan burauzar safari ba.

## Abubuwan Haɗin Yanar Gizo

Ba za ku iya rubuta `js` cikin `foot.pug` ba. Idan ana buƙatar hulɗa, da fatan za a tsara sashin yanar gizon.

Ana iya bayyana [ɓangaren yanar gizo](https://www.freecodecamp.org/news/build-your-first-web-component/) a cikin `md/.i18n/htm/index.js` sannan a yi amfani da shi a cikin `foot.pug` .

Yana da sauƙi don ƙirƙirar abubuwan haɗin yanar gizo, kamar `<x-img>` al'ada0 .

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

## Ƙafafun Harsuna Da Yawa

Lambar a cikin `.i18n/htm/foot.pug` shine kamar haka :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Anan `${I18N.C}` yayi daidai da `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Yin amfani da `${I18N.xxx}` mai kama da wannan hanyar rubutun, haɗe da `i18n.yml` , za ku iya cimma burin ƙasashen duniya na harsuna da yawa.

Ƙara `class="a"` zuwa hanyar haɗin yanar gizon shine don hana haɗin yanar gizon canzawa zuwa `MarkDown` Duba :
 [`HTML` `YAML` : `Markdown`](/i18/qa#H2)