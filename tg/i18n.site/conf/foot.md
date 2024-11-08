# Поёнтарии Фармоишӣ

Ҳанӯз лоиҳаи намоиширо ҳамчун мисол гирифта, `.i18n/htm/foot.pug` дар феҳристи `md` поёни вебсайтро муайян мекунад.

![](https://p.3ti.site/1721286077.avif)

## Услуби Поён

Дар лоиҳаи намоишӣ се файли `css` зери `md/.i18n/htm` мавҷуд аст.

* `foot.css` :
* `import.css` : `i18n.site` барои тамоми сайт
* `conf.css` Нишонаҳо : шрифтҳои поён

### Шрифти Icon

Тасвири поён бо роҳи сохтани шрифт бо номи iconfont.cn сохта мешавад `F` [версияи англисӣ](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Лутфан ҳуруфи нишонаи шахсии худро дар ҳолати зарурӣ эҷод кунед ва конфигуратсияи зеринро дар `conf.css` иваз кунед :

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

Лутфан ба файли шрифти iconfont.cn мустақиман истинод накунед, зеро онро дар браузери Safari бор кардан мумкин нест.

## Ҷузъҳои Веб

Шумо наметавонед `js` дар `foot.pug` нависед. Агар ҳамкорӣ лозим бошад, лутфан ҷузъи вебро танзим кунед.

[Ҷузъи вебро](https://www.freecodecamp.org/news/build-your-first-web-component/) дар `md/.i18n/htm/index.js` муайян кардан мумкин аст ва сипас дар `foot.pug` истифода мешавад.

Эҷоди ҷузъҳои веб, ба монанди `<x-img>` , осон аст.

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

## Пойафзоли Бисёрзабона

Рамз дар `.i18n/htm/foot.pug` чунин аст :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Дар ин ҷо `${I18N.C}` ба `en/i18n.yml` рост меояд :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Бо истифода аз `${I18N.xxx}` монанд ба ин усули навиштан, дар якҷоягӣ бо `i18n.yml` , шумо метавонед ба байнулмилалии бисёрзабони поёнтар ноил шавед.

Илова кардани `class="a"` ба истинод барои пешгирӣ кардани табдили истинод ба `MarkDown` Бингар :
 [➔ `YAML` Чӣ : аз табдил додани пайванди `HTML` ба `Markdown` пешгирӣ кардан мумкин аст](/i18/qa#H2) .