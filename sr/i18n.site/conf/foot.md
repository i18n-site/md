# Прилагођено Подножје

И даље узимајући демо пројекат као пример, `.i18n/htm/foot.pug` у директоријуму `md` дефинише подножје веб странице.

![](https://p.3ti.site/1721286077.avif)

## Стил Подножја

У демо пројекту постоје три `css` датотеке испод `md/.i18n/htm` .

* `foot.css` :
* `import.css` `i18n.site` : за цео сајт
* `conf.css` иконе и фонтови : подножју

### Фонт Иконе

Икона подножја се генерише креирањем фонта `F` iconfont.cn [енглеска верзија](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Направите сопствени фонт иконе по потреби и замените следећу конфигурацију у `conf.css` :

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

Немојте директно упућивати на датотеку фонта ицонфонт.цн јер се не може учитати у сафари претраживач.

## Веб Компоненте

Не можете писати `js` у `foot.pug` Ако је потребна интеракција, прилагодите веб компоненту.

[Веб компонента](https://www.freecodecamp.org/news/build-your-first-web-component/) се може дефинисати у `md/.i18n/htm/index.js` , а затим користити у `foot.pug` .

Лако је креирати веб компоненте, као што су прилагођене `<x-img>` .

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

## Вишејезично Подножје

Код у `.i18n/htm/foot.pug` је следећи :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Овде `${I18N.C}` одговара `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Користећи `${I18N.xxx}` сличан овом методу писања, у комбинацији са `i18n.yml` , можете постићи интернационализацију подножја на више језика.

Додавање `class="a"` линку је спречавање конвертовања везе у `MarkDown` Видите :
 [➔ `YAML` Како спречити : се линк `HTML` конвертује у `Markdown`](/i18/qa#H2) !