# Подножје

Сепак, земајќи го како пример демо-проектот, подножјето на веб-локацијата `.i18n/htm/foot.pug` дефинирано во директориумот `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) шаблон јазик кој генерира `HTML` .

[➔ Кликнете овде за да ја научите граматиката на pug](https://pugjs.org)

**Не пишувајте `css` и `js` `foot.pug`** , инаку ќе има грешки.

Ве молиме погледнете го следново, стилот е напишан во соодветното `.css` а интеракцијата се постигнува со креирање на веб компоненти.

## Стил На Подножјето

Во демо `md/.i18n/htm` проектот има 3 `css` датотеки подолу.

* Стил : подножјето `foot.css`
* : `i18n.site` стил за целата страница `import.css`
* Икони и фонтови : подножјето `conf.css`

### Фонт На Икона

Иконата за подножјето е генерирана iconfont.cn ( [англиска верзија](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) создавање фонт со име `F`

Ве молиме креирајте сопствен фонт за икона по потреба и заменете ја : конфигурација во `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Веб Компоненти

`foot.pug` може да напише `js` во него.

Можете да дефинирате [веб-компонента](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` и потоа да ја користите компонентата во `foot.pug` .

Лесно е да се креираат веб-компоненти, како сопствени ознаки `<x-img>`

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

Кодот во него е како `.i18n/htm/foot.pug` следува :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Еве : соодветниот во `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Користејќи `${I18N.xxx}` на овој метод на пишување, во комбинација со `i18n.yml` , можете да постигнете повеќејазична интернационализација на футерот.

`class="a"` на врската за да избегнете конвертирање на врската во `MarkDown` , видете :
 [: `YAML` да спречите конвертирање `HTML` на врската во `Markdown`](/i18/qa#H2) .