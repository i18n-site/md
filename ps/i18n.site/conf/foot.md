# فوټر

بیا هم د مثال په توګه د ډیمو پروژه اخیستل، د ویب پاڼې فوټر په `md` کې تعریف `.i18n/htm/foot.pug` .

<img alt="" src="https://p.3ti.site/1721286077.avif">

د کينډۍ ژبه [`pug`](https://pugjs.org) چې `HTML` جوړوي .

[➔ د ګرامر زده کولو لپاره دلته کلیک وکړئ pug](https://pugjs.org)

**`css` او `js` په `foot.pug` مه لیکئ** ، کنه غلطۍ به وي.

مهرباني وکړئ لاندې ته مراجعه وکړئ، سټایل په اړونده کې لیکل شوی `.css` او تعامل د ویب اجزاوو په جوړولو سره ترلاسه کیږي.

## د فوټر سټایل

په ډیمو `md/.i18n/htm` کې لاندې 3 `css` فایلونه شتون لري.

* : فوټر سټایل `foot.css`
* : ټول سایټ لپاره `i18n.site` سټایل `import.css`
* : فوټر شبیهونه او فونټونه `conf.css`

### icon فونټ

د فوټر عکس `F` ( [انګلیسي نسخه](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) لخوا رامینځته شوی iconfont.cn

مهرباني وکړئ د اړتیا سره سم خپل د آیکون فونټ جوړ کړئ او : تشکیلات په کې ځای په ځای کړئ `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## د ویب برخې برخې

په دې کې `js` نه لیکل کیږي `foot.pug` که د ویب پاڼې برخې ته اړتیا وي.

تاسو کولی شئ `md/.i18n/htm/index.js` کې [د ویب اجزا](https://www.freecodecamp.org/news/build-your-first-web-component/) تعریف کړئ او بیا په `foot.pug` کې برخه وکاروئ.

د ویب اجزاو جوړول اسانه دي، لکه دودیز ټګونه `<x-img>`

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

## څو ژبی فوټر

په دې کې کوډ : لاندې ډول دی `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

دلته اړونده په `en/i18n.yml` کې : `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

د دې لیکلو طریقې ته ورته په کارولو `${I18N.xxx}` ، `i18n.yml` سره یوځای، تاسو کولی شئ د فوټر څو ژبې نړیوال کول ترلاسه کړئ.

لینک ته اضافه `class="a"` ترڅو لینک `MarkDown` ته بدل نه شي، وګورئ :
 [: `YAML` کولای شو چی د `HTML` لینک `Markdown` ته د بدلیدو مخه ونیسو](/i18/qa#H2) .