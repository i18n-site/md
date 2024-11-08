# Fərdi Altbilgi

Hələ də demo layihəsini nümunə kimi götürsək, `md` kataloqunda `.i18n/htm/foot.pug` veb-saytın altbilgisini müəyyən edir.

![](https://p.3ti.site/1721286077.avif)

## Alt Yazı Tərzi

Demo layihəsində `md/.i18n/htm` aşağı olan üç `css` fayl var.

* `foot.css` : stili
* `import.css` 1Bütün sayt : `i18n.site` stil
* `conf.css` Altbilgi : və şriftləri

### Ikon Şrifti

Altbilgi işarəsi iconfont.cn adlı şrift yaratmaqla yaradılır `F` [İngilis versiyası](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Zəhmət olmasa, öz ikon şriftinizi yaradın və aşağıdakı konfiqurasiyanı `conf.css` ilə əvəz edin :

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

Zəhmət olmasa iconfont.cn şrift faylına birbaşa istinad etməyin, çünki onu safari brauzerinə yükləmək mümkün deyil.

## Veb Komponentləri

Siz `foot.pug` -da `js` yaza bilməzsiniz. Əgər qarşılıqlı əlaqə tələb olunursa, veb komponentini fərdiləşdirin.

[Veb komponenti](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` -da müəyyən edilə bilər və sonra `foot.pug` də istifadə edilə bilər.

Xüsusi `<x-img>` kimi veb komponentləri yaratmaq asandır.

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

`.i18n/htm/foot.pug` -dakı kod aşağıdakı kimidir :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Burada `${I18N.C}` `en/i18n.yml` -ə uyğundur :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

`i18n.yml` ilə birlikdə bu yazı metoduna bənzər `${I18N.xxx}` istifadə edərək, altbilginin çoxdilli beynəlxalqləşməsinə nail ola bilərsiniz.

Linkə `class="a"` əlavə etmək linkin `MarkDown` ə çevrilməsinin qarşısını almaq üçündür. Bax :
 [: `YAML` `HTML` -in `Markdown` yə çevrilməsinin qarşısını necə almaq olar](/i18/qa#H2) .