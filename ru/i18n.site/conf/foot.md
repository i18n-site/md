# Нижний колонтитул

Продолжая пример с демонстрационным проектом, в директории `md` файл `.i18n/htm/foot.pug` определяет нижний колонтитул сайта.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) — это шаблонный язык для генерации `HTML`.

[➔ Нажмите здесь, чтобы изучить синтаксис pug](https://pugjs.org)

**Не включайте `css` и `js` в `foot.pug`**, это может привести к ошибкам.

См. ниже: стили должны быть записаны в соответствующие `.css` файлы, а интерактивность достигается созданием веб-компонентов.

## Стили для нижнего колонтитула

В демонстрационном проекте в директории `md/.i18n/htm` находятся три `css` файла.

* `foot.css`: стили для нижнего колонтитула
* `import.css`: базовые стили для всего сайта `i18n.site`
* `conf.css`: иконки и шрифты для нижнего колонтитула

### Иконные шрифты

Иконки нижнего колонтитула создаются с помощью генерации шрифта с названием `F` на сайте iconfont.cn ([английская версия](https://www.iconfont.cn/?lang=en-us) / [китайская версия](https://www.iconfont.cn/?lang=zh)).

Создайте свои иконные шрифты по мере необходимости и замените соответствующие настройки в `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Веб-компоненты

Не добавляйте `js` в `foot.pug`, если требуется интерактивность, создайте пользовательский веб-компонент.

Определите [веб-компонент](https://www.freecodecamp.org/news/build-your-first-web-component/) в `md/.i18n/htm/index.js`, а затем используйте его в `foot.pug`.

Создание веб-компонентов просто, например, пользовательский тег `<x-img>`.

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

## Многоязычность нижнего колонтитула

В файле `.i18n/htm/foot.pug` есть следующий код:

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Здесь `${I18N.C}` соответствует записи в `en/i18n.yml`:

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Используя синтаксис `${I18N.xxx}`, совместно с `i18n.yml`, можно реализовать многоязычную поддержку для нижнего колонтитула.

Добавление `class="a"` к ссылкам предотвращает их преобразование в формат `Markdown`, см.:
 [➔ `YAML`: Как избежать преобразования `HTML`-ссылок в `Markdown`](/i18/qa#H2).