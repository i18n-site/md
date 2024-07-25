# Колонтитул

Демо-долбоорду мисал катары алсак, веб-сайттын төмөнкү колонтитулдары `md` `.i18n/htm/foot.pug` .

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) бул `HTML` генерациялоочу үлгү тили.

[➔ Грамматиканы үйрөнүү үчүн бул жерди басыңыз pug](https://pugjs.org)

**`css` жана `js` деп `foot.pug`** , антпесе каталар болот.

Сураныч, төмөнкүгө кайрылыңыз, стиль тиешелүү `.css` де жазылган жана өз ара аракеттенүү веб-компоненттерди түзүү аркылуу ишке ашат.

## Колонтитул Стили

Демо `md/.i18n/htm` 3 `css` файл бар.

* `foot.css` :
* `import.css` Бүтүндөй сайт : `i18n.site` стил
* `conf.css` :

### Icon Шрифт

Колонтитул сүрөтчөсү iconfont.cn ( [англисче версиясы](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) тарабынан түзүлгөн `F`

Сураныч, өзүңүздүн сөлөкөт шрифтиңизди зарылчылыкка жараша түзүп, : конфигурацияны алмаштырыңыз `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Веб Компоненттери

Ага `js` жазуу мүмкүн эмес `foot.pug` , веб-баракчаны ыңгайлаштырыңыз.

Сизде [веб-компонентти](https://www.freecodecamp.org/news/build-your-first-web-component/) аныктап `md/.i18n/htm/index.js` андан кийин `foot.pug` ичинде компонентти колдонсоңуз болот.

Ыңгайлаштырылган тегдер сыяктуу желе компоненттерин түзүү оңой `<x-img>`

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

## Көп Тилдүү Колонтитул

: код төмөнкүдөй `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

: жерде `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

`${I18N.xxx}` жазуу ыкмасына окшош колдонуп, `i18n.yml` менен бирге колонтитулдун көп тилдүү интернационалдашуусуна жетише аласыз.

Шилтеме `MarkDown` ге айланбаш : шилтемеге кошуңуз `class="a"`
 [: Шилтеменин `HTML` `Markdown` га айланышына `YAML` жол бербөө керек](/i18/qa#H2) .