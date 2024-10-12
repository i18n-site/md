# Аста

Stillаман да демо проектын мисал итеп алсак, `md` каталогтагы `.i18n/htm/foot.pug` сайтның аскы өлешен билгели.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) - `HTML` теле.

[The Грамматикасын өйрәнү өчен монда басыгыз pug](https://pugjs.org)

**`css` һәм `js` `foot.pug` белән язмагыз** , югыйсә хата килеп чыга.

Зинһар, түбәндәгеләргә мөрәҗәгать итегез, стиль тиешле `.css` язылган, һәм үзара бәйләнеш веб-компонентлар булдыру ярдәмендә ирешелә.

## Аяк Асты Стиле

Демо проектында `md/.i18n/htm` астында өч `css` файл бар.

* `foot.css` Аяк асты стиле :
* `import.css` : Бөтен сайт өчен `i18n.site` стиле!
* `conf.css` Аяк асты иконалары һәм шрифтлар :

### Иконка Шрифты

Түбәндәге иконка iconfont.cn исемле шрифт ясап ясала ( `F` [версия](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh))!

Зинһар, кирәк булганда үзегезнең иконка шрифтын булдырыгыз һәм түбәндәге конфигурацияне `conf.css` белән алыштырыгыз :

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Веб Компонентлары

Сез `foot.pug` дан `js` яза алмыйсыз. Әгәр үзара бәйләнеш кирәк булса, веб компонентны көйләгез.

[Веб компонентны](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` белән билгеләргә, аннары `foot.pug` кулланырга мөмкин.

Веб компонентларны ясау җиңел, мәсәлән, махсус `<x-img>` .

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

## Күп Телле Аста

`.i18n/htm/foot.pug` код түбәндәгечә :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Монда `${I18N.C}` `en/i18n.yml` туры килә :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Бу язу ысулына охшаган `${I18N.xxx}` кулланып, `i18n.yml` белән кушылып, сез аскы өлешнең күп телле интернационализациясенә ирешә аласыз.

Ссылкага `class="a"` өстәү - сылтаманың `MarkDown` әверелүен булдырмау. Карагыз :
 [`HTML` `YAML` : `Markdown`](/i18/qa#H2)