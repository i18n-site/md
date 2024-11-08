# Індивідуальний Колонтитул

Взявши як приклад демонстраційний проект, `.i18n/htm/foot.pug` у каталозі `md` визначає нижній колонтитул веб-сайту.

![](https://p.3ti.site/1721286077.avif)

## Стиль Нижнього Колонтитула

У демонстраційному проекті є три файли `css` під `md/.i18n/htm` .

* `foot.css` : Стиль нижнього колонтитула
* `import.css` : 1 Стиль `i18n.site` для всього сайту
* `conf.css` Значки та шрифти : колонтитула

### Шрифт Значка

Піктограма нижнього колонтитула створюється шляхом створення шрифту з назвою `F` iconfont.cn ( [англійська версія](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Будь ласка, створіть свій власний шрифт піктограми за потреби та замініть наступну конфігурацію на `conf.css` :

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

Будь ласка, не посилайтеся прямо на файл шрифту iconfont.cn, оскільки його неможливо завантажити у браузері Safari.

## Веб-Компоненти

Ви не можете писати `js` з `foot.pug` Якщо потрібна взаємодія, налаштуйте веб-компонент.

[Веб-компонент](https://www.freecodecamp.org/news/build-your-first-web-component/) можна визначити в `md/.i18n/htm/index.js` , а потім використовувати в `foot.pug` .

Легко створювати веб-компоненти, наприклад спеціальні `<x-img>` .

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

## Багатомовний Колонтитул

Код у `.i18n/htm/foot.pug` виглядає наступним чином :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Тут `${I18N.C}` відповідає `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Використовуючи `${I18N.xxx}` подібний до цього методу написання, у поєднанні з `i18n.yml` ви можете досягти багатомовної інтернаціоналізації нижнього колонтитула.

Додавання `class="a"` до посилання запобігає перетворенню посилання на `MarkDown` Подивіться :
 [➔ `YAML` : Як запобігти перетворенню посилання `HTML` на `Markdown`](/i18/qa#H2) .