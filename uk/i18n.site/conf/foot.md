# Колонтитул

Зате прикладі демонстраційного проекту, файл `.i18n/htm/foot.pug` у каталозі `md` визначає футер веб-сайту.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) — це мова шаблонів для створення `HTML`.

[➔ Натисніть тут, щоб вивчити граматику pug](https://pugjs.org)

**Не додавайте `css` і `js` до `foot.pug`**, інакше виникнуть помилки.

Будь ласка, зверніться до наступного: стилі写入 відповідні `.css`, а взаємодія реалізовується через створення веб-компонентів.

## Стилі футера

У демонстраційному проекті під `md/.i18n/htm` є три файли `css`.

* `foot.css`: стилі футера
* `import.css`: базові стилі для всього сайту `i18n.site`
* `conf.css`: іконки та шрифти для футера

### Іконки шрифтів

Іконки футера створюються за допомогою генерації шрифту з назвою `F` на сайті iconfont.cn ([англійська версія](https://www.iconfont.cn/?lang=en-us) / [українська версія](https://www.iconfont.cn/?lang=zh)).

Будь ласка, створіть свої іконки шрифту за потреби та замініть наступні налаштування в `conf.css`:

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Веб-компоненти

Не додавайте `js` до `foot.pug`. Якщо потрібна взаємодія, створіть власний веб-компонент.

Ви можете визначити [веб-компонент](https://www.freecodecamp.org/news/build-your-first-web-component/) у файлі `md/.i18n/htm/index.js`, а потім використовувати його в `foot.pug`.

Створення веб-компонентів просте, наприклад,自定义 тег `<x-img>`.

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

У файлі `.i18n/htm/foot.pug` є такий код:

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

Використовуючи`${I18N.xxx}` у подібному форматі, разом з `i18n.yml` можна досягти багатомовної міжнародизації футера.

Додавання `class="a"` до посилання запобігає його перетворенню на формат `Markdown`. Дивіться:
 [➔ `YAML`: Як запобігти перетворенню посилання `HTML` на `Markdown`](/i18/qa#H2).