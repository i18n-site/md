# Прилагодено Подножје

Сепак, земајќи го демо-проектот како пример, `.i18n/htm/foot.pug` во директориумот `md` го дефинира подножјето на веб-локацијата.

![](https://p.3ti.site/1721286077.avif)

## Стил На Подножјето

Во демо-проектот има три датотеки `css` под `md/.i18n/htm` .

* `foot.css` :
* `import.css` `i18n.site` : за целата локација
* `conf.css` Икони и фонтови на :

### Фонт На Икона

Иконата за подножјето се генерира со креирање на фонт со име iconfont.cn ( [англиска верзија](https://www.iconfont.cn/?lang=en-us) / `F`[版](https://www.iconfont.cn/?lang=zh)).

Ве молиме креирајте сопствен фонт за икона по потреба и заменете ја следнава конфигурација во `conf.css` :

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

Ве молиме не упатувајте директно на датотеката со фонтови на iconfont.cn бидејќи не може да се вчита на прелистувачот Safari.

## Веб Компоненти

Не можете да напишете `js` во `foot.pug` Доколку е потребна интеракција, приспособете ја веб-компонентата.

[Веб-компонента](https://www.freecodecamp.org/news/build-your-first-web-component/) може да се дефинира во `md/.i18n/htm/index.js` , а потоа да се користи во `foot.pug` .

Лесно е да се креираат веб компоненти, како што се сопствени `<x-img>` .

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

## Повеќејазичен Подножје

Кодот во `.i18n/htm/foot.pug` е како што следува :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Овде `${I18N.C}` одговара на `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Користејќи `${I18N.xxx}` сличен на овој метод на пишување, во комбинација со `i18n.yml` , може да постигнете повеќејазична интернационализација на футерот.

Додавањето `class="a"` на врската е да се спречи конвертирање на врската во `MarkDown` Видете :
 [➔ `YAML` Како да спречите конвертирање : врската `HTML` во `Markdown`](/i18/qa#H2) .