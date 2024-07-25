# Altbilgi

Hələ də demo layihəsini nümunə götürsək, vebsaytın `.i18n/htm/foot.pug` `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) `HTML` yaradan şablon dilidir.

[➔ qrammatikasını öyrənmək üçün bura klikləyin pug](https://pugjs.org)

**`foot.pug` `css` və `js` yazmayın** , əks halda səhvlər olacaq.

Lütfən, aşağıdakılara baxın, üslub müvafiq `.css` -də yazılır və qarşılıqlı əlaqə veb komponentləri yaratmaqla əldə edilir.

## Alt Yazı Tərzi

Demo `md/.i18n/htm` aşağıda 3 `css` fayl var.

* `foot.css` :
* `import.css` Bütün sayt üçün `i18n.site` :
* `conf.css` ikonları və :

### Ikon Şrifti

[Altbilgi](https://www.iconfont.cn/?lang=en-us) işarəsi iconfont.cn / şrift [yaratmaqla](https://www.iconfont.cn/?lang=zh) `F`

Zəhmət olmasa, öz ikon şriftinizi yaradın və : konfiqurasiyanı dəyişdirin `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Veb Komponentləri

Qarşılıqlı əlaqə tələb olunarsa, onda `js` yazmaq `foot.pug` .

`md/.i18n/htm/index.js` [veb komponenti](https://www.freecodecamp.org/news/build-your-first-web-component/) təyin edə və sonra `foot.pug` -da komponentdən istifadə edə bilərsiniz.

Fərdi teqlər kimi veb komponentləri yaratmaq asandır `<x-img>`

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

## Çoxdilli Altbilgi

İçindəki kod : kimidir `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

: müvafiq olan `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Bu yazı metoduna bənzər `i18n.yml` ilə birlikdə istifadə `${I18N.xxx}` , altbilginin çoxdilli beynəlmiləlləşməsinə nail ola bilərsiniz.

Linkin `MarkDown` çevrilməməsi üçün linkə əlavə : `class="a"`
 [: Linkin `HTML` `Markdown` -a çevrilməsinin qarşısını `YAML` almaq olar](/i18/qa#H2) .