# Ստորագիր

Դեռևս որպես օրինակ վերցնելով ցուցադրական նախագիծը, կայքի էջատակը սահմանվում `.i18n/htm/foot.pug` `md` :

<img alt="" src="https://p.3ti.site/1721286077.avif">

Կաղապարի լեզու է [`pug`](https://pugjs.org) որը ստեղծում է `HTML` :

[➔ Սեղմեք այստեղ՝ քերականությունը սովորելու համար pug](https://pugjs.org)

**Մի գրեք `css` `js` `foot.pug`** , այլապես սխալներ կլինեն:

Խնդրում ենք հետևել հետևյալին, ոճը գրված է համապատասխան `.css` իսկ փոխազդեցությունը ձեռք է բերվում վեբ բաղադրիչներ ստեղծելով:

## Ստորին Ոճ

Դեմո նախագծում կա 3 `css` ֆայլ `md/.i18n/htm`

* : `foot.css`
* `import.css` `i18n.site` ոճ ամբողջ կայքի :
* `conf.css` : և տառատեսակներ

### Պատկերակի Տառատեսակ

Ստորագրի պատկերակը ստեղծվել է iconfont.cn -ի միջոցով ( [անգլերեն տարբերակ](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) ստեղծելով `F`

Խնդրում ենք ստեղծել ձեր սեփական պատկերակի տառատեսակը ըստ անհրաժեշտության և փոխարինել : կոնֆիգուրացիան `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Վեբ Բաղադրիչներ

Եթե `js` է պահանջվում, խնդրում `foot.pug` հարմարեցնել վեբ էջի բաղադրիչը:

Դուք կարող եք սահմանել [վեբ բաղադրիչ](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` այնուհետև օգտագործել բաղադրիչը `foot.pug` -ում:

Հեշտ է ստեղծել վեբ բաղադրիչներ, ինչպիսիք են հատուկ պիտակները `<x-img>`

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

Դրանում ծածկագիրը հետևյալն : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

`${I18N.C}` համապատասխանը `en/i18n.yml` -ում է :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Օգտագործելով `${I18N.xxx}` գրելու մեթոդը, որը զուգորդվում է `i18n.yml` հետ, կարող եք հասնել ստորագրի բազմալեզու միջազգայնացմանը:

`class="a"` հղմանը, որպեսզի չվերափոխվենք հղումը `MarkDown` , տես :
 [: `YAML` կանխել հղման `HTML` -ի փոխակերպումը `Markdown`](/i18/qa#H2) .