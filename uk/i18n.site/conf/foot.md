# Колонтитул

Взявши приклад демонстраційного проекту, нижній колонтитул веб-сайту `.i18n/htm/foot.pug` в каталозі `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) — це мова шаблонів, яка генерує `HTML` .

[➔ Натисніть тут, щоб вивчити граматику pug](https://pugjs.org)

**Не пишіть `css` і `js` в `foot.pug`** Інакше будуть помилки.

Будь ласка, зверніться до наведеного нижче, стиль написаний у відповідному `.css` а взаємодія досягається шляхом створення веб-компонентів.

## Стиль Нижнього Колонтитула

У демонстраційному `md/.i18n/htm` 3 `css` файли нижче.

* : нижнього `foot.css`
* `import.css` Стиль : `i18n.site` для всього сайту
* : та шрифти нижнього `conf.css`

### Шрифт Значка

Піктограма нижнього колонтитула створюється за допомогою iconfont.cn ( [англійська версія](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) створення шрифту під назвою `F`

Будь ласка, створіть свій власний шрифт піктограми за потреби та замініть : конфігурацію в `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Веб-Компоненти

`foot.pug` не можна писати `js` , якщо потрібна взаємодія, налаштуйте компонент веб-сторінки.

Ви можете визначити [веб-компонент](https://www.freecodecamp.org/news/build-your-first-web-component/) у `md/.i18n/htm/index.js` а потім використовувати його в `foot.pug` .

Легко створювати веб-компоненти, наприклад спеціальні теги `<x-img>`

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

`.i18n/htm/foot.pug` Код у ньому такий :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

: відповідний в `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Використовуючи `${I18N.xxx}` , подібний до цього методу написання, у поєднанні з `i18n.yml` ви можете досягти багатомовної інтернаціоналізації нижнього колонтитула.

Додайте `class="a"` до посилання , щоб уникнути перетворення посилання на `MarkDown` , подивіться :
 [: `YAML` запобігти перетворенню `HTML` посилання на `Markdown`](/i18/qa#H2) .