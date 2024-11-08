# Тохируулсан Хөл Хэсэг

Демо төслийг жишээ болгон авч үзвэл `md` лавлах дахь `.i18n/htm/foot.pug` нь вэбсайтын хөлийг тодорхойлдог.

![](https://p.3ti.site/1721286077.avif)

## Хөлийн Хэв Маяг

Демо төсөлд `md/.i18n/htm` ээс доош гурван `css` файл байна.

* `foot.css` хөлийн хэв :
* `import.css` : сайтын `i18n.site` хэв маяг
* `conf.css` : дүрс болон фонтууд

### Дүрсний Фонт

Footer дүрс нь iconfont.cn нэртэй фонт үүсгэснээр үүсдэг `F` [Англи хувилбар](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Шаардлагатай бол өөрийн дүрсний фонт үүсгэж, `conf.css` д дараах тохиргоог солино уу :

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

Safari хөтөч дээр ачаалах боломжгүй тул iconfont.cn-ийн фонтын файлыг шууд дурдаж болохгүй.

## Вэб Бүрэлдэхүүн Хэсгүүд

Та `foot.pug` -д `js` гэж бичих боломжгүй. Хэрэв харилцан үйлчлэл шаардлагатай бол вэб бүрэлдэхүүнийг тохируулна уу.

[Вэб бүрэлдэхүүнийг](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` -д тодорхойлж, дараа нь `foot.pug` -д ашиглаж болно.

Custom `<x-img>` гэх мэт вэб бүрэлдэхүүн хэсгүүдийг үүсгэхэд хялбар байдаг.

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

`.i18n/htm/foot.pug` дэх код нь дараах байдалтай байна :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Энд `${I18N.C}` `en/i18n.yml` тэй тохирч байна :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Энэхүү бичих аргатай төстэй `${I18N.xxx}` `i18n.yml` тэй хослуулснаар та хөлийн олон хэлийг олон улсын болгох боломжтой.

Холбоос дээр `class="a"` нэмэх нь холбоосыг `MarkDown` рүү хөрвүүлэхээс сэргийлнэ. Харна уу :
 [➔ `YAML` `HTML` холбоосыг `Markdown` руу хөрвүүлэхээс хэрхэн сэргийлэх :](/i18/qa#H2) ?