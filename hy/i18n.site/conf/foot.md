# Անհատականացված Ստորագիր

Դեռևս որպես օրինակ վերցնելով ցուցադրական նախագիծը, `md` գրացուցակում `.i18n/htm/foot.pug` սահմանում է կայքի ստորագիր:

![](https://p.3ti.site/1721286077.avif)

## Ստորին Ոճ

Դեմո նախագծում կա երեք `css` ֆայլ `md/.i18n/htm` ի տակ:

* `foot.css` :
* `import.css` : `i18n.site` ոճ ամբողջ կայքի համար
* `conf.css` : Ստորագրի պատկերակներ և տառատեսակներ

### Պատկերակի Տառատեսակ

Ստորագրի պատկերակը ստեղծվում է iconfont.cn անունով տառատեսակի ստեղծմամբ `F` [անգլերեն տարբերակ](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)):

Խնդրում ենք ստեղծել ձեր սեփական պատկերակի տառատեսակը ըստ անհրաժեշտության և փոխարինել հետևյալ կոնֆիգուրացիան `conf.css` -ով :

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

Խնդրում ենք ուղղակիորեն մի հղում անեք iconfont.cn-ի տառատեսակի ֆայլին, քանի որ այն հնարավոր չէ բեռնել safari դիտարկիչում:

## Վեբ Բաղադրիչներ

Դուք չեք կարող գրել `js` `foot.pug` -ում: Եթե փոխազդեցություն է պահանջվում, խնդրում ենք հարմարեցնել վեբ բաղադրիչը:

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

`.i18n/htm/foot.pug` -ի կոդը հետևյալն է :

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

Օգտագործելով `${I18N.xxx}` որը նման է գրելու այս մեթոդին, զուգակցված `i18n.yml` հետ, կարող եք հասնել ստորագրի բազմալեզու միջազգայնացման:

Հղմանը `class="a"` ավելացնելը նշանակում է, որ հղումը չվերափոխվի `MarkDown` ի: Տես :
 [➔ `YAML` Ինչպես կանխել `HTML` : `Markdown` ի փոխակերպումը](/i18/qa#H2) :