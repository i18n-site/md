# Индивидуальный Нижний Колонтитул

Продолжая использовать демонстрационный проект в качестве примера, `.i18n/htm/foot.pug` в каталоге `md` определяет нижний колонтитул веб-сайта.

![](https://p.3ti.site/1721286077.avif)

## Стиль Нижнего Колонтитула

В демо-проекте есть три файла с `css` под `md/.i18n/htm` .

* `foot.css` : Стиль нижнего колонтитула
* `import.css` : 1Стиль `i18n.site` для всего сайта
* `conf.css` : Значки и шрифты нижнего колонтитула

### Иконочный Шрифт

Значок нижнего колонтитула создается путем создания шрифта с именем `F` iconfont.cn ( [английская версия](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

При необходимости создайте свой собственный шрифт значка и замените следующую конфигурацию на `conf.css` :

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

Пожалуйста, не ссылайтесь напрямую на файл шрифта iconfont.cn, поскольку его невозможно загрузить в браузере Safari.

## Веб-Компоненты

Нельзя написать `js` в `foot.pug` Если требуется взаимодействие, настройте веб-компонент.

[Веб-компонент](https://www.freecodecamp.org/news/build-your-first-web-component/) можно определить в `md/.i18n/htm/index.js` , а затем использовать в `foot.pug` .

Веб-компоненты, такие как пользовательские `<x-img>` , создавать легко.

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

## Многоязычный Нижний Колонтитул

Код в `.i18n/htm/foot.pug` выглядит следующим образом :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Здесь `${I18N.C}` соответствует `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Используя `${I18N.xxx}` аналогичный этому методу написания, в сочетании с `i18n.yml` , вы можете добиться многоязычной интернационализации нижнего колонтитула.

Добавление `class="a"` к ссылке предотвращает преобразование ссылки в `MarkDown` См :
 [➔ `YAML` : Как предотвратить преобразование ссылки `HTML` в `Markdown`](/i18/qa#H2) .