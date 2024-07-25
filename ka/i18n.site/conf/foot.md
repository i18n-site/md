# Ქვედა Კოლონტიტული

მიუხედავად ამისა, დემო პროექტის მაგალითზე, ვებსაიტის ქვედა კოლონტიტული `.i18n/htm/foot.pug` `md` .

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) შაბლონის ენა, რომელიც ქმნის `HTML` .

[➔ დააწკაპუნეთ აქ გრამატიკის შესასწავლად pug](https://pugjs.org)

**არ ჩაწეროთ `css` `js` `foot.pug`** , წინააღმდეგ შემთხვევაში იქნება შეცდომები.

გთხოვთ, გაითვალისწინოთ შემდეგი, სტილი იწერება შესაბამის `.css` ხოლო ურთიერთქმედება მიიღწევა ვებ კომპონენტების შექმნით.

## Ქვედა Კოლონტიტული

დემო `md/.i18n/htm` არის 3 `css` ფაილი ქვემოთ.

* : `foot.css`
* `import.css` : `i18n.site` მთელი საიტისთვის
* `conf.css` ხატები და :

### Ხატის Შრიფტი

[ქვედა](https://www.iconfont.cn/?lang=en-us) [კოლონტიტულის](https://www.iconfont.cn/?lang=zh) `F` / iconfont.cn

გთხოვთ, საჭიროებისამებრ შექმენით თქვენი საკუთარი ხატის შრიფტი და შეცვალეთ : კონფიგურაცია `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Ვებ Კომპონენტები

მასში `js` ვერ ჩაწერს, თუ საჭიროა ურთიერთქმედება, `foot.pug` დააკონფიგურიროთ ვებგვერდის კომპონენტი.

შეგიძლიათ განსაზღვროთ [ვებ კომპონენტი](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` შემდეგ გამოიყენოთ კომპონენტი `foot.pug` -ში.

მარტივია ვებ კომპონენტების შექმნა, როგორიცაა მორგებული ტეგები `<x-img>`

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

## Მრავალენოვანი Ქვედა Კოლონტიტული

კოდი მასში : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

აი `${I18N.C}` შესაბამისი არის `en/i18n.yml` -ში :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

`${I18N.xxx}` წერის მეთოდის გამოყენებით, `i18n.yml` -თან ერთად, შეგიძლიათ მიაღწიოთ ძირის მრავალენოვან ინტერნაციონალიზაციას.

`class="a"` ბმულზე , რათა თავიდან აირიდოს ბმული `MarkDown` -ად გადაქცევა , იხილეთ :
 [: `YAML` ავიცილოთ თავიდან ბმულის `HTML` `Markdown` -ად გადაქცევა](/i18/qa#H2) .