# Ẹlẹsẹ

Ṣi mu iṣẹ akanṣe demo bi apẹẹrẹ, ẹlẹsẹ ti oju opo wẹẹbu `.i18n/htm/foot.pug` asọye ninu itọsọna `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) ede awoṣe ti o ṣe agbejade `HTML` .

[➔ Tẹ ibi lati kọ ẹkọ girama ti pug](https://pugjs.org)

**Maṣe kọ `css` ati `js` `foot.pug`** , bibẹẹkọ awọn aṣiṣe yoo wa.

Jọwọ tọkasi atẹle naa, aṣa naa ni a kọ sinu ibaramu `.css` ati ibaraenisepo naa waye nipasẹ ṣiṣẹda awọn paati wẹẹbu.

## Ara Ẹlẹsẹ

Ninu iṣẹ akanṣe `md/.i18n/htm` 3 `css` awọn faili wa ni isalẹ.

* `foot.css` :
* `import.css` : Aṣa `i18n.site` fun gbogbo aaye naa
* Awọn aami `conf.css` ati awọn :

### Aami Font

/ [ẹlẹsẹ](https://www.iconfont.cn/?lang=zh) `F` ipilẹṣẹ [nipasẹ](https://www.iconfont.cn/?lang=en-us) iconfont.cn

Jọwọ ṣẹda fonti aami tirẹ bi o ṣe nilo ki o rọpo : atẹle ni `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Awọn Ẹya Ara Ẹrọ Wẹẹbu

`foot.pug` `js`

O le ṣalaye [paati wẹẹbu kan](https://www.freecodecamp.org/news/build-your-first-web-component/) `foot.pug` `md/.i18n/htm/index.js`

O rọrun lati ṣẹda awọn paati wẹẹbu, bii awọn afi aṣa `<x-img>`

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

## Ẹlẹsẹ-Ede Pupọ

Awọn koodu ti o : ninu rẹ jẹ bi atẹle `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Eyi ti o baamu jẹ : `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Lilo `${I18N.xxx}` iru si ọna kikọ yii, ni idapo pẹlu `i18n.yml` , o le ṣaṣeyọri isọdi-ede agbaye ti ẹlẹsẹ.

`class="a"` si ọna asopọ lati yago fun iyipada ọna asopọ si `MarkDown` , wo :
 [: `YAML` le ṣe idiwọ `HTML` ọna asopọ lati yipada si `Markdown`](/i18/qa#H2) .