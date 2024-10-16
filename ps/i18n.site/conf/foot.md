# فوټر

بیا هم د مثال په توګه د ډیمو پروژه اخیستل، په `md` لارښود کې `.i18n/htm/foot.pug` د ویب پاڼې فوټر تعریفوي.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) د کينډۍ ژبه ده چې `HTML` 's جوړوي.

[➔ د ګرامر زده کولو لپاره دلته کلیک وکړئ pug](https://pugjs.org)

**په `foot.pug` کې `css` او `js` مه لیکئ** ، که نه نو یوه تېروتنه به وي.

مهرباني وکړئ لاندې ته مراجعه وکړئ، سټایل په اړونده `.css` کې لیکل شوی، او تعامل د ویب اجزاوو په جوړولو سره ترلاسه کیږي.

## د فوټر سټایل

په ډیمو پروژه کې `md/.i18n/htm` لاندې درې `css` فایلونه شتون لري.

* د فوټر : `foot.css`
* `import.css` : ټول سایټ لپاره `i18n.site` سټایل
* `conf.css` فوټر : او فونټونه

### icon فونټ

د فوټر آیکون `F` iconfont.cn نوم د فونټ په جوړولو سره رامینځته شوی ( [انګلیسي نسخه](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

مهرباني وکړئ د اړتیا سره سم خپل د آیکون فونټ جوړ کړئ او لاندې ترتیب په `conf.css` کې ځای په ځای کړئ :

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## د ویب برخې برخې

تاسو نشئ کولی په `foot.pug` کې `js` ولیکئ. که متقابل عمل ته اړتیا وي ، مهرباني وکړئ د ویب برخې تنظیم کړئ.

[د ویب برخې برخه](https://www.freecodecamp.org/news/build-your-first-web-component/) په `md/.i18n/htm/index.js` کې تعریف کیدی شي او بیا په `foot.pug` کې کارول کیږي.

د ویب اجزاو جوړول اسانه دي، لکه custom `<x-img>` .

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

په `.i18n/htm/foot.pug` کې کوډ په لاندې ډول دی :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

دلته `${I18N.C}` د `en/i18n.yml` سره مطابقت لري :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

د دې لیکلو میتود ته ورته `${I18N.xxx}` په کارولو سره، `i18n.yml` سره یوځای، تاسو کولی شئ د فوټر څو ژبو نړیوال کول ترلاسه کړئ.

لینک ته `class="a"` اضافه کول د لینک د `MarkDown` ته د بدلیدو مخه نیسي. وګورئ :
 [➔ `YAML` څنګه د لینک `HTML` : په `Markdown` بدلیدو څخه مخنیوی وشي](/i18/qa#H2) .