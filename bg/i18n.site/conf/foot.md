# Персонализиран Долен Колонтитул

Все още вземайки демонстрационния проект като пример, `.i18n/htm/foot.pug` в директорията `md` определя долния колонтитул на уебсайта.

![](https://p.3ti.site/1721286077.avif)

## Стил На Долния Колонтитул

Има три `css` файла под `md/.i18n/htm` в демонстрационния проект.

* `foot.css` : Стил на долния колонтитул
* `import.css` : 1 Стил `i18n.site` за целия сайт
* `conf.css` : Икони и шрифтове в долния колонтитул

### Шрифт На Икона

Иконата на долния колонтитул се генерира чрез създаване на шрифт с име `F` iconfont.cn ( [английска версия](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Моля, създайте свой собствен шрифт на икона, ако е необходимо, и заменете следната конфигурация в `conf.css` :

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

Моля, не препращайте директно към файла с шрифтове на iconfont.cn, защото той не може да бъде зареден в браузъра safari.

## Уеб Компоненти

Не можете да пишете `js` към `foot.pug` Ако се изисква взаимодействие, моля, персонализирайте уеб компонента.

[Уеб компонент](https://www.freecodecamp.org/news/build-your-first-web-component/) може да бъде дефиниран в `md/.i18n/htm/index.js` и след това да се използва в `foot.pug` .

Лесно е да създавате уеб компоненти, като потребителски `<x-img>` .

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

## Многоезичен Долен Колонтитул

Кодът в `.i18n/htm/foot.pug` е както следва :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Тук `${I18N.C}` отговаря на `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Използвайки `${I18N.xxx}` подобен на този метод на писане, комбиниран с `i18n.yml` , можете да постигнете многоезична интернационализация на долния колонтитул.

Добавянето на `class="a"` към връзката е за предотвратяване на преобразуването на връзката в `MarkDown` Вижте :
 [➔ `YAML` : Как да предотвратим преобразуването на връзка `HTML` във `Markdown`](/i18/qa#H2) .