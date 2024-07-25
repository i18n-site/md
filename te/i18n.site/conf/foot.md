# ఫుటరు

ఇప్పటికీ డెమో ప్రాజెక్ట్‌ను ఉదాహరణగా తీసుకుంటే, వెబ్‌సైట్ యొక్క ఫుటర్ `md` `.i18n/htm/foot.pug` .

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) అనేది `HTML` ఉత్పత్తి చేసే టెంప్లేట్ భాష.

[➔ యొక్క వ్యాకరణాన్ని తెలుసుకోవడానికి ఇక్కడ క్లిక్ చేయండి pug](https://pugjs.org)

**`foot.pug` `css` మరియు `js` వ్రాయవద్దు** , లేకుంటే లోపాలు ఉంటాయి.

దయచేసి కింది వాటిని చూడండి, శైలి సంబంధిత `.css` లో వ్రాయబడింది మరియు వెబ్ భాగాలను సృష్టించడం ద్వారా పరస్పర చర్య సాధించబడుతుంది.

## ఫుటర్ శైలి

`md/.i18n/htm` ప్రాజెక్ట్‌లో 3 `css` ఫైల్‌లు క్రింద ఉన్నాయి.

* `foot.css` :
* `import.css` : సైట్ కోసం `i18n.site` శైలి
* `conf.css` : చిహ్నాలు మరియు ఫాంట్‌లు

### చిహ్నం ఫాంట్

/ [చిహ్నం](https://www.iconfont.cn/?lang=en-us) iconfont.cn[​](https://www.iconfont.cn/?lang=zh) `F`

దయచేసి అవసరమైన విధంగా మీ స్వంత ఐకాన్ ఫాంట్‌ని సృష్టించండి మరియు : కాన్ఫిగరేషన్‌ను లో భర్తీ చేయండి `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## వెబ్ భాగాలు

`foot.pug` `js`

మీరు `md/.i18n/htm/index.js` [వెబ్ కాంపోనెంట్‌ని](https://www.freecodecamp.org/news/build-your-first-web-component/) నిర్వచించవచ్చు మరియు `foot.pug` లో కాంపోనెంట్‌ని ఉపయోగించవచ్చు.

అనుకూల ట్యాగ్‌ల వంటి వెబ్ భాగాలను సృష్టించడం సులభం `<x-img>`

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

## బహుభాషా ఫుటరు

అందులో కోడ్ ఇలా : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

ఇక్కడ సంబంధితమైనది `en/i18n.yml` : ఉంది `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

`${I18N.xxx}` వ్రాత పద్ధతిని ఉపయోగించి, `i18n.yml` తో కలిపి, మీరు ఫుటరు యొక్క బహుళ-భాషా అంతర్జాతీయీకరణను సాధించవచ్చు.

లింక్ `MarkDown` కి మార్చబడకుండా ఉండటానికి లింక్‌కి `class="a"` , చూడండి :
 [: లింక్ యొక్క `HTML` `Markdown` కి మార్చకుండా `YAML` నిరోధించాలి](/i18/qa#H2) .