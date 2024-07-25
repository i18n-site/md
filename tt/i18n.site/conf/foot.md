# Аста

Stillаман да демо проектын мисал итеп алсак, вебсайтның аскы өлеше каталогта `.i18n/htm/foot.pug` `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

шаблон теле `HTML` чыгара [`pug`](https://pugjs.org)

[The Грамматикасын өйрәнү өчен монда басыгыз pug](https://pugjs.org)

**`css` Һәм `js` `foot.pug`** , югыйсә хаталар булыр.

Зинһар, түбәндәгеләргә мөрәҗәгать итегез, стиль тиешле итеп язылган `.css` Һәм үзара бәйләнеш веб-компонентлар булдыру ярдәмендә ирешелә.

## Аяк Асты Стиле

`md/.i18n/htm` проектында түбәндә 3 `css` файл бар.

* Аяк асты : `foot.css`
* Бөтен сайт өчен `i18n.site` : `import.css`
* : асты иконалары һәм шрифтлар `conf.css`

### Иконка Шрифты

Аяк асты иконасы `F` [инглизчә версия](https://www.iconfont.cn/?lang=en-us) / [by](https://www.iconfont.cn/?lang=zh) ) белән ясалган iconfont.cn

Зинһар, кирәк булганда үзегезнең иконка шрифтын булдырыгыз һәм : конфигурацияне алыштырыгыз `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Веб Компонентлары

Анда `js` яза `foot.pug` , үзара бәйләнеш кирәк булса, зинһар, веб-бит компонентын көйләгез.

Сез [веб компонентны](https://www.freecodecamp.org/news/build-your-first-web-component/) билгели аласыз `md/.i18n/htm/index.js` аннары компонентны `foot.pug` куллана аласыз.

Веб компонентларны ясау җиңел, махсус тэглар кебек `<x-img>`

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

Андагы код : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

`en/i18n.yml` : `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Бу язу ысулына `${I18N.xxx}` , `i18n.yml` белән кушылып, сез аста күп телле интернационализациягә ирешә аласыз.

Ссылкага `MarkDown` га әверелмәс : сылтамага өстәгез `class="a"`
 [: Ссылканың `HTML` `Markdown` әйләнүен `YAML` булдырмаска](/i18/qa#H2) .