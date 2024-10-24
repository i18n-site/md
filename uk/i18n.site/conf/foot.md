# Колонтитул

Займаючись прикладом демонстраційного проекту, файл `.i18n/htm/foot.pug` у каталозі `md` визначає футер веб-сайту.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) — це мова шаблонів для генерації `HTML`.

[➔ Натисніть тут, щоб вивчити граматику pug](https://pugjs.org)

**Не додавайте `css` і `js` до `foot.pug`**, інакше виникнуть помилки.

Будь ласка, зверніться до наступного: стилі写入 відповідні `.css`, а взаємодія реалізовується через створення веб-компонентів.

## Стилі футера

У демонстраційному проекті є три файли `css` у директорії `md/.i18n/htm`.

* `foot.css`: стилі футера
* `import.css`: базовий стиль для всього сайту `i18n.site`
* `conf.css`: іконки та шрифти для футера

### Іконний шрифт

Іконки футера створюються за допомогою шрифту з назвою `F`, створеного на iconfont.cn ([англійська версія](https://www.iconfont.cn/?lang=en-us) / [китайська версія](https://www.iconfont.cn/?lang=zh)).

Будь ласка, створіть свій власний іконний шрифт за потреби та замініть наступні налаштування у `conf.css`:

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

Будь ласка, не посилайтеся безпосередньо на файл шрифту з iconfont.cn, оскільки його неможливо завантажити в браузері Safari.

## Веб-компоненти

`foot.pug` не повинен містити `js`. Якщо потрібна взаємодія, створіть власний веб-компонент.

Ви можете визначити [веб-компонент](https://www.freecodecamp.org/news/build-your-first-web-component/) у `md/.i18n/htm/index.js`, а потім використовувати його у `foot.pug`.

Створення веб-компонентів є простим, наприклад,自定义 тег `<x-img>`.

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

## Багатомовність футера

Код у `.i18n/htm/foot.pug` виглядає так:

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Тут `${I18N.C}` відповідає запису в `en/i18n.yml`:

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Використовуючи `${I18N.xxx}` подібний спосіб запису, разом з `i18n.yml`, можна досягти багатомовної міжнародизації футера.

Додавання `class="a"` до посилання запобігає його перетворенню на формат `Markdown`. Дивіться:
 [➔ `YAML`: Як запобігти перетворенню посилання `HTML` на `Markdown`](/i18/qa#H2).