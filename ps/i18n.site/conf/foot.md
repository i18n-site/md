# دودیز فوټر

بیا هم د مثال په توګه د ډیمو پروژه اخیستل، په `md` لارښود کې `.i18n/htm/foot.pug` د ویب پاڼې فوټر تعریفوي.

![](https://p.3ti.site/1721286077.avif)

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

مهرباني وکړئ په مستقیم ډول د iconfont.cn فونټ فایل ته مراجعه مه کوئ ځکه چې دا په سفاري براوزر کې نشي پورته کیدی.

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

لینک ته `class="a"` اضافه کول د لینک د `MarkDown` بدلیدو مخه نیسي. وګورئ :
 [➔ `YAML` څنګه د لینک `HTML` : په `Markdown` بدلیدو څخه مخنیوی وشي](/i18/qa#H2) .