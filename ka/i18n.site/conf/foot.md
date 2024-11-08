# Ქვედა Კოლონტიტული

მიუხედავად ამისა, დემო პროექტის მაგალითის მიღებით, `md` დირექტორიაში `.i18n/htm/foot.pug` განსაზღვრავს ვებსაიტის ქვედა კოლონტიტულს.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) არის შაბლონის ენა, რომელიც ქმნის `HTML` -ებს.

[➔ დააწკაპუნეთ აქ გრამატიკის შესასწავლად pug](https://pugjs.org)

**ნუ ჩაწერთ `css` და `js` `foot.pug` -ში** , წინააღმდეგ შემთხვევაში იქნება შეცდომა.

გთხოვთ, გაითვალისწინოთ შემდეგი, სტილი იწერება შესაბამის `.css` -ში და ურთიერთქმედება მიიღწევა ვებ კომპონენტების შექმნით.

## Ქვედა Კოლონტიტული

დემო პროექტში არის სამი `css` ფაილი `md/.i18n/htm` -ზე.

* `foot.css` : სტილი
* `import.css` : `i18n.site` სტილი მთელი საიტისთვის
* `conf.css` : ხატები და შრიფტები

### Ხატის Შრიფტი

ქვედა კოლონტიტულის ხატულა იქმნება შრიფტის შექმნით iconfont.cn სახელად `F` ( [ინგლისური ვერსია](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

გთხოვთ, საჭიროებისამებრ შექმენით თქვენი საკუთარი ხატის შრიფტი და შეცვალეთ შემდეგი კონფიგურაცია `conf.css` -ში :

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

გთხოვთ, პირდაპირ არ მიმართოთ iconfont.cn-ის შრიფტის ფაილს, რადგან ის ვერ იტვირთება safari ბრაუზერში.

## Ვებ Კომპონენტები

თქვენ არ შეგიძლიათ დაწეროთ `js` `foot.pug` -ში. თუ საჭიროა ურთიერთქმედება, გთხოვთ, დააკონფიგურიროთ ვებ კომპონენტი.

[ვებ კომპონენტი](https://www.freecodecamp.org/news/build-your-first-web-component/) შეიძლება განისაზღვროს `md/.i18n/htm/index.js` ში და შემდეგ გამოიყენოს `foot.pug` ში.

მარტივია ვებ კომპონენტების შექმნა, როგორიცაა მორგებული `<x-img>` .

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

კოდი `.i18n/htm/foot.pug` -ში არის შემდეგი :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

აქ `${I18N.C}` შეესაბამება `en/i18n.yml` ს :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

ამ ჩაწერის მეთოდის მსგავსი `${I18N.xxx}` გამოყენებით, `i18n.yml` თან ერთად, შეგიძლიათ მიაღწიოთ ქვედა კოლონტიტულის მრავალენოვან ინტერნაციონალიზაციას.

ბმულზე `class="a"` დამატება არის ბმულის `MarkDown` ად გადაქცევის თავიდან აცილება. იხილეთ :
 [➔ `YAML` როგორ ავიცილოთ თავიდან ბმული `HTML` : `Markdown` ზე გადაქცევა](/i18/qa#H2) .