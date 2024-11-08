# Ẹsẹ Ti a Ṣe Adani

Ṣi mu iṣẹ akanṣe demo bi apẹẹrẹ, `.i18n/htm/foot.pug` ninu itọsọna `md` n ṣalaye ẹlẹsẹ ti oju opo wẹẹbu naa.

![](https://p.3ti.site/1721286077.avif)

## Ara Ẹlẹsẹ

Awọn faili `css` mẹta wa labẹ `md/.i18n/htm` ninu iṣẹ akanṣe demo.

* `foot.css` :
* `import.css` : `i18n.site` fun gbogbo aaye naa
* `conf.css` Awọn aami ẹlẹsẹ ati : akọwe

### Aami Font

Aami ẹlẹsẹ jẹ ipilẹṣẹ nipasẹ ṣiṣẹda fonti `F` iconfont.cn [Ẹya Gẹẹsi](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Jọwọ ṣẹda fonti aami tirẹ bi o ṣe nilo ki o rọpo iṣeto atẹle ni `conf.css` :

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

Jọwọ ma ṣe tọka taara faili fonti ti iconfont.cn nitori ko le ṣe kojọpọ lori ẹrọ aṣawakiri safari.

## Awọn Ẹya Ara Ẹrọ Wẹẹbu

O ko le kọ `js` ni `foot.pug` Ti o ba nilo ibaraenisepo, jọwọ ṣe akanṣe paati wẹẹbu.

[Apakan wẹẹbu kan](https://www.freecodecamp.org/news/build-your-first-web-component/) le ṣe asọye ni `md/.i18n/htm/index.js` ati lẹhinna lo ni `foot.pug` .

O rọrun lati ṣẹda awọn paati wẹẹbu, gẹgẹbi `<x-img>` aṣa0 .

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

Awọn koodu ni `.i18n/htm/foot.pug` jẹ bi wọnyi :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Nibi `${I18N.C}` ni ibamu si `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Lilo `${I18N.xxx}` iru si ọna kikọ yii, ni idapo pẹlu `i18n.yml` , o le ṣaṣeyọri isọdi-ede agbaye pupọ ti ẹlẹsẹ.

Fifi `class="a"` kun si ọna asopọ ni lati ṣe idiwọ ọna asopọ lati yipada si `MarkDown` Wo :
 [➔ `YAML` : o ṣe le ṣe idiwọ ọna asopọ `HTML` lati yipada si `Markdown`](/i18/qa#H2) .