# Індывідуальны Калонтытул

Прымаючы ў якасці прыкладу дэма-праект, `.i18n/htm/foot.pug` у каталогу `md` вызначае ніжні калонтытул вэб-сайта.

![](https://p.3ti.site/1721286077.avif)

## Стыль Калантытула

У дэманстрацыйным праекце ёсць тры файлы `css` пад `md/.i18n/htm` .

* `foot.css` : Стыль ніжняга калонтытула
* `import.css` : 1 Стыль `i18n.site` для ўсяго сайта
* `conf.css` : ніжняга калонтытула і шрыфты

### Шрыфт Значкоў

Значок ніжняга калонтытула ствараецца шляхам стварэння шрыфта з назвай `F` iconfont.cn ( [версія на англійскай мове](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Калі ласка, стварыце свой уласны шрыфт значкоў і заменіце наступную канфігурацыю на `conf.css` :

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

Калі ласка, не спасылайцеся непасрэдна на файл шрыфтоў iconfont.cn, таму што яго немагчыма загрузіць у браўзеры safari.

## Вэб-Кампаненты

Вы не можаце напісаць `js` з `foot.pug` Калі патрабуецца ўзаемадзеянне, наладзьце вэб-кампанент.

[Вэб-кампанент](https://www.freecodecamp.org/news/build-your-first-web-component/) можна вызначыць у `md/.i18n/htm/index.js` , а потым выкарыстоўваць у `foot.pug` .

Лёгка ствараць вэб-кампаненты, такія як уласныя `<x-img>` .

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

## Шматмоўны Калонтытул

Код у `.i18n/htm/foot.pug` выглядае наступным чынам :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Тут `${I18N.C}` адпавядае `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Выкарыстоўваючы `${I18N.xxx}` падобны да гэтага метаду напісання, у спалучэнні з `i18n.yml` , вы можаце дасягнуць шматмоўнай інтэрнацыяналізацыі ніжняга калонтытула.

Даданне `class="a"` да спасылкі прадухіляе пераўтварэнне спасылкі ў `MarkDown` Глядзіце :
 [➔ `YAML` : Як прадухіліць пераўтварэнне спасылкі `HTML` у `Markdown`](/i18/qa#H2) .