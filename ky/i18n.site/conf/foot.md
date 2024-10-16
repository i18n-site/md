# Колонтитул

Демо долбоорду мисал катары алып, `md` каталогундагы `.i18n/htm/foot.pug` веб-сайттын төмөнкү колонтитулун аныктайт.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) - бул `HTML` лерди пайда кылган шаблон тили.

[➔ Грамматиканы үйрөнүү үчүн бул жерди басыңыз pug](https://pugjs.org)

**`foot.pug` `css` жана `js` деп жазбаңыз** , антпесе ката болот.

Сураныч, төмөнкүнү караңыз, стиль тиешелүү `.css` жазылат жана өз ара аракеттенүү желе компоненттерин түзүү аркылуу ишке ашат.

## Колонтитул Стили

Демо долбоордо `md/.i18n/htm` төмөн үч `css` файл бар.

* `foot.css` :
* `import.css` : сайт үчүн `i18n.site` стил
* `conf.css` : сүрөтчөлөрү жана шрифтер

### Icon Шрифт

Колонтитул сүрөтчөсү iconfont.cn деген шрифт түзүү аркылуу түзүлөт `F` [англисче версия](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Сураныч, өзүңүздүн сөлөкөт шрифтиңизди зарылчылыкка жараша түзүңүз жана төмөнкү конфигурацияны `conf.css` менен алмаштырыңыз :

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Веб Компоненттери

`foot.pug` ичинде `js` жаза албайсыз. Эгер өз ара аракеттенүү керек болсо, веб-компонентти ыңгайлаштырыңыз.

[Желе компоненти](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` аныкталып, андан кийин `foot.pug` колдонулушу мүмкүн.

Ыңгайлаштырылган `<x-img>` сыяктуу веб компоненттерин түзүү оңой.

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

`.i18n/htm/foot.pug` коду төмөнкүдөй :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Бул жерде `${I18N.C}` `en/i18n.yml` туура келет :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Бул жазуу ыкмасына окшош `${I18N.xxx}` `i18n.yml` менен айкалыштыруу менен колдонуп, колонтитулдун көп тилдүү интернационалдашуусуна жетише аласыз.

Шилтемеге `class="a"` кошуу шилтемени `MarkDown` айлантуудан сактайт. Караңыз :
 [`HTML` `YAML` : `Markdown`](/i18/qa#H2)