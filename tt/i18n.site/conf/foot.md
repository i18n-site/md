# Custзенчәлекле Аста

Stillаман да демо проектын мисал итеп алсак, `md` каталогтагы `.i18n/htm/foot.pug` сайтның аскы өлешен билгели.

![](https://p.3ti.site/1721286077.avif)

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

Зинһар, iconfont.cn шрифт файлына турыдан-туры мөрәҗәгать итмәгез, чөнки аны сафари браузерына йөкләп булмый.

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

Бу язу ысулына охшаган `${I18N.xxx}` кулланып, `i18n.yml` белән кушылып, сез аста күп телле интернационализациягә ирешә аласыз.

Ссылкага `class="a"` өстәү - сылтаманың `MarkDown` әверелүен булдырмау. Карагыз :
 [`HTML` `YAML` : `Markdown`](/i18/qa#H2)