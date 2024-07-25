# Поён

Ҳанӯз лоиҳаи намоишӣ ҳамчун мисол, поёни вебсайт `.i18n/htm/foot.pug` феҳристи `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) забони шаблонест, ки `HTML` тавлид мекунад.

[➔ Барои омӯхтани грамматикаи pug](https://pugjs.org)

**Дар `css` ва `js` `foot.pug`** , вагарна хатогиҳо ҷой хоҳанд дошт.

Лутфан ба зер муроҷиат кунед, услуб дар `.css`

## Услуби Поён

Дар лоиҳаи `md/.i18n/htm` 3 `css` файл дар зер мавҷуд аст.

* `foot.css` :
* `import.css` : `i18n.site` барои тамоми сайт
* Нишонаҳо ва : `conf.css`

### Шрифти Icon

[Тасвири](https://www.iconfont.cn/?lang=zh) `F` / [ҷониби](https://www.iconfont.cn/?lang=en-us) iconfont.cn

Лутфан ҳуруфи нишонаи шахсии худро дар ҳолати зарурӣ эҷод кунед ва : зеринро дар `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Ҷузъҳои Веб

`foot.pug` Дар он `js` навишта наметавонад.

Шумо метавонед [ҷузъи вебро](https://www.freecodecamp.org/news/build-your-first-web-component/) `foot.pug` `md/.i18n/htm/index.js`

Эҷоди ҷузъҳои веб, ба монанди барчаспҳои фармоишӣ осон аст `<x-img>`

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

## Пойафзолҳои Бисёрзабона

Рамзи он чунин : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

: `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Бо истифода аз `${I18N.xxx}` ки ба ин усули навиштан монанд аст, дар якҷоягӣ бо `i18n.yml` , шумо метавонед ба интернационализатсияи бисёрзабони поёнтар ноил шавед.

Ба истинод илова `class="a"` , то истинодро ба `MarkDown` табдил надиҳед :
 [: `YAML` пешгирӣ кардани `HTML` и истинод ба `Markdown`](/i18/qa#H2) .