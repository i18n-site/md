# Калонтытул

Прымаючы ў якасці прыкладу дэма-праект, ніжні калонтытул вэб-сайта `.i18n/htm/foot.pug` ў каталогу `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) - гэта мова шаблонаў, якая стварае `HTML` .

[➔ Націсніце тут, каб вывучыць граматыку pug](https://pugjs.org)

**Не пішыце `css` і `js` `foot.pug`** , інакш будуць памылкі.

Звярніце ўвагу на наступнае, стыль напісаны ў адпаведным `.css` а ўзаемадзеянне дасягаецца шляхам стварэння вэб-кампанентаў.

## Стыль Калантытула

У дэманстрацыйным `md/.i18n/htm` 3 `css` файла ніжэй.

* `foot.css` ніжняга :
* `import.css` : `i18n.site` для ўсяго сайта
* `conf.css` : калантытула і шрыфты

### Шрыфт Значкоў

Значок ніжняга калонтытула ствараецца шляхам iconfont.cn ( [Англійская версія](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) стварэння шрыфта з назвай `F`

Калі ласка, стварыце свой уласны шрыфт значкоў і заменіце : канфігурацыю ў `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Вэб-Кампаненты

`foot.pug` немагчыма напісаць `js` , калі патрабуецца ўзаемадзеянне, наладзьце кампанент вэб-старонкі.

Вы можаце вызначыць [вэб-кампанент](https://www.freecodecamp.org/news/build-your-first-web-component/) у `md/.i18n/htm/index.js` а потым выкарыстоўваць яго ў `foot.pug` .

Лёгка ствараць вэб-кампаненты, напрыклад карыстальніцкія тэгі `<x-img>`

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

Код у : такі `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

: адпаведны ў `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Выкарыстоўваючы `${I18N.xxx}` падобны на гэты метад напісання, у спалучэнні з `i18n.yml` , вы можаце дасягнуць шматмоўнай інтэрнацыяналізацыі ніжняга калантытула.

Дадайце `class="a"` да спасылкі , каб пазбегнуць пераўтварэння спасылкі ў `MarkDown` , глядзіце :
 [: `YAML` прадухіліць пераўтварэнне `HTML` спасылкі ў `Markdown`](/i18/qa#H2) .