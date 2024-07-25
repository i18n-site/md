# Хөл Хэсэг

Демо төслийг жишээ болгон авч үзвэл вэб сайтын доод хэсэг `.i18n/htm/foot.pug` `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) нь `HTML` үүсгэдэг загвар хэл юм.

[➔ Хэлний дүрмийг энд дарж сурна уу pug](https://pugjs.org)

**`css` болон `js` гэж бүү `foot.pug`** , тэгэхгүй бол алдаа гарна.

Дараахыг үзнэ үү, хэв маяг нь харгалзах `.css` -д бичигдсэн бөгөөд вэб бүрэлдэхүүн хэсгүүдийг бий болгосноор харилцан үйлчлэлд хүрдэг.

## Хөлийн Хэв Маяг

`md/.i18n/htm` төсөлд доор 3 `css` файл байна.

* Footer : `foot.css`
* `import.css` Бүх сайтын : `i18n.site` хэв маяг
* : дүрс болон фонтууд `conf.css`

### Дүрсний Фонт

Footer дүрсийг iconfont.cn ( [Англи хувилбар](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) гэсэн фонтоор үүсгэсэн `F`

Шаардлагатай бол өөрийн дүрсний фонтыг үүсгэж, : тохиргоог солино уу `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Вэб Бүрэлдэхүүн Хэсгүүд

Үүнд `js` бичих `foot.pug` . Хэрэв харилцан үйлдэл шаардлагатай бол вэб хуудасны бүрэлдэхүүнийг тохируулна уу.

-д [вэб бүрэлдэхүүнийг](https://www.freecodecamp.org/news/build-your-first-web-component/) тодорхойлж `md/.i18n/htm/index.js` дараа нь `foot.pug` доторх бүрэлдэхүүн хэсгийг ашиглаж болно.

Захиалгат шошго гэх мэт вэб бүрэлдэхүүн хэсгүүдийг үүсгэхэд хялбар `<x-img>`

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

## Олон Хэлний Хөл Хэсэг

Үүний код нь дараах байдалтай : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

: харгалзах нь `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Энэхүү бичих аргатай төстэй `${I18N.xxx}` `i18n.yml` -тэй хослуулан ашигласнаар та хөлийн олон хэлийг олон улсын болгох боломжтой.

Холбоосыг `MarkDown` руу хөрвүүлэхгүйн : холбоос руу нэмнэ үү `class="a"`
 [: Холбоосын `HTML` `Markdown` руу хөрвүүлэхээс `YAML` сэргийлэх вэ](/i18/qa#H2) .