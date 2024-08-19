# Ստորագիր

Դեռևս որպես օրինակ վերցնելով ցուցադրական նախագիծը, `md` գրացուցակում `.i18n/htm/foot.pug` սահմանում է կայքի ստորագիր:

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) կաղապարի լեզու է, որը առաջացնում է `HTML` -եր:

[➔ Սեղմեք այստեղ՝ քերականությունը սովորելու համար pug](https://pugjs.org)

**Մի գրեք `css` և `js` `foot.pug` ում** , հակառակ դեպքում սխալ կլինի:

Խնդրում ենք հետևել հետևյալին, ոճը գրված է համապատասխան `.css` ով, և փոխազդեցությունը ձեռք է բերվում վեբ բաղադրիչներ ստեղծելով:

## Ստորին Ոճ

Դեմո նախագծում կա երեք `css` ֆայլ `md/.i18n/htm` տակ:

* `foot.css` :
* `import.css` : `i18n.site` ոճ ամբողջ կայքի համար
* `conf.css` : Ստորագրի պատկերակներ և տառատեսակներ

### Պատկերակի Տառատեսակ

Ստորագրի պատկերակը ստեղծվում է iconfont.cn `F` տառատեսակի ստեղծմամբ ( [անգլերեն տարբերակ](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)):

Խնդրում ենք ստեղծել ձեր սեփական պատկերակի տառատեսակը ըստ անհրաժեշտության և փոխարինել հետևյալ կոնֆիգուրացիան `conf.css` ով :

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Վեբ Բաղադրիչներ

Դուք չեք կարող գրել `js` `foot.pug` ում: Եթե փոխազդեցություն է պահանջվում, խնդրում ենք հարմարեցնել վեբ բաղադրիչը:

[Վեբ բաղադրիչը](https://www.freecodecamp.org/news/build-your-first-web-component/) կարող է սահմանվել `md/.i18n/htm/index.js` ով, այնուհետև օգտագործվել `foot.pug` -ում:

Հեշտ է ստեղծել վեբ բաղադրիչներ, ինչպիսիք են հատուկ `<x-img>` :

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

## Բազմալեզու Ստորագիր

`.i18n/htm/foot.pug` ի կոդը հետևյալն է :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Այստեղ `${I18N.C}` համապատասխանում է `en/i18n.yml` ին :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Օգտագործելով `${I18N.xxx}` , որը նման է գրելու այս մեթոդին, զուգակցված `i18n.yml` հետ, կարող եք հասնել ստորագրի բազմալեզու միջազգայնացման:

Հղմանը `class="a"` ավելացնելը նշանակում է, որ հղումը չվերափոխվի `MarkDown` ի: Տես :
 [➔ `YAML` Ինչպես կանխել `HTML` : հղումը `Markdown` ի փոխակերպումը](/i18/qa#H2) :