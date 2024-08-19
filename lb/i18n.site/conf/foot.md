# Fousszeilen

Nach ëmmer den Demo-Projet als Beispill ze huelen, `.i18n/htm/foot.pug` am `md` Verzeichnis definéiert de Fousszeil vun der Websäit.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) ass eng Template Sprooch déi `HTML` generéiert.

[➔ Klickt hei fir d'Grammatik vun pug](https://pugjs.org)

**Schreift net `css` an `js` an `foot.pug`** , soss gëtt et e Feeler.

Gitt w.e.g. op déi folgend, de Stil gëtt an de entspriechende `.css` geschriwwen, an d'Interaktioun gëtt erreecht andeems Dir Webkomponenten erstallt.

## Fousszeilen Stil

Et ginn dräi `css` Dateien ënner `md/.i18n/htm` am Demo-Projet.

* `foot.css` : Fousszeilen
* `import.css` : `i18n.site` Stil fir de ganze Site
* `conf.css` : Symboler a Schrëften

### Icon Schrëft

D'Footer Ikon gëtt generéiert andeems Dir eng Schrëft mam `F` iconfont.cn ( [Englesch Versioun](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Erstellt w.e.g. Är eege Ikon Schrëft wéi néideg an ersetzt déi folgend Konfiguratioun an `conf.css` :

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Web Komponenten

Dir kënnt net `js` an `foot.pug` schreiwen. Wann Interaktioun erfuerderlech ass, passt w.e.g. de Webkomponent un.

[E Webkomponent](https://www.freecodecamp.org/news/build-your-first-web-component/) kann an `md/.i18n/htm/index.js` definéiert ginn an dann an `foot.pug` benotzt ginn.

Et ass einfach Webkomponenten ze kreéieren, sou wéi personaliséiert `<x-img>` .

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

## Méisproocheg Fousszeilen

De Code an `.i18n/htm/foot.pug` ass wéi follegt :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Hei entsprécht `${I18N.C}` `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Mat `${I18N.xxx}` ähnlech wéi dës Schreifmethod, kombinéiert mat `i18n.yml` , kënnt Dir Multi-Sprooch Internationaliséierung vum Fousszeilen erreechen.

`class="a"` op de Link ze addéieren ass fir ze verhënneren datt de Link op `MarkDown` ëmgewandelt gëtt. Kuckt :
 [➔ `YAML` Wéi verhënnert : datt de Link `HTML` op `Markdown` ëmgewandelt gëtt](/i18/qa#H2) .