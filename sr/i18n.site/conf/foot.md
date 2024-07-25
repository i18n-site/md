# Фоотер

Узимајући за пример демо пројекат, подножје веб локације `.i18n/htm/foot.pug` дефинисано у директоријуму `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

је шаблонски језик који генерише `HTML` [`pug`](https://pugjs.org)

[➔ Кликните овде да научите граматику pug](https://pugjs.org)

**Немојте писати `css` и `js` `foot.pug`** , иначе ће бити грешака.

Молимо погледајте следеће, стил је написан одговарајућим `.css` а интеракција се постиже креирањем веб компоненти.

## Стил Подножја

У демо `md/.i18n/htm` постоје 3 `css` фајла испод.

* `foot.css` :
* : `i18n.site` стиле за цео сајт `import.css`
* Иконе и фонтови : подножју `conf.css`

### Фонт Иконе

Икона подножја је iconfont.cn ( [енглеска верзија](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) креирањем фонта под називом `F`

По потреби направите сопствени фонт иконе и замените : конфигурацију у `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Веб Компоненте

не `foot.pug` написати `js` у њему. Ако је потребна интеракција, прилагодите компоненту веб странице.

Можете дефинисати [веб компоненту](https://www.freecodecamp.org/news/build-your-first-web-component/) у `md/.i18n/htm/index.js` а затим користити компоненту у `foot.pug` .

Лако је креирати веб компоненте, попут прилагођених ознака `<x-img>`

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

Код у њему : следећи `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Овде : одговарајући у `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Користећи `${I18N.xxx}` сличан овом методу писања, у комбинацији са `i18n.yml` , можете постићи вишејезичну интернационализацију подножја.

`class="a"` линку да бисте избегли конвертовање везе у `MarkDown` , погледајте :
 [: `YAML` спречити да се `HTML` линка претвори у `Markdown`](/i18/qa#H2) .