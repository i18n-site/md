# ఫుటరు

ఇప్పటికీ డెమో ప్రాజెక్ట్ను ఉదాహరణగా తీసుకుంటే, `md` డైరెక్టరీలో `.i18n/htm/foot.pug` వెబ్సైట్ ఫుటర్ని నిర్వచిస్తుంది.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) అనేది `HTML` లను ఉత్పత్తి చేసే టెంప్లేట్ భాష.

[➔ యొక్క వ్యాకరణాన్ని తెలుసుకోవడానికి ఇక్కడ క్లిక్ చేయండి pug](https://pugjs.org)

**`foot.pug` లో `css` మరియు `js` వ్రాయవద్దు** , లేకుంటే లోపం ఉంటుంది.

దయచేసి కింది వాటిని చూడండి, శైలి సంబంధిత `.css` లో వ్రాయబడింది మరియు వెబ్ భాగాలను సృష్టించడం ద్వారా పరస్పర చర్య సాధించబడుతుంది.

## ఫుటర్ శైలి

డెమో ప్రాజెక్ట్లో `md/.i18n/htm` కింద మూడు `css` ఫైల్లు ఉన్నాయి.

* `foot.css` :
* `import.css` : 1మొత్తం సైట్ కోసం `i18n.site` శైలి
* `conf.css` : ఫుటర్ చిహ్నాలు మరియు ఫాంట్లు

### చిహ్నం ఫాంట్

`F` iconfont.cn ( [ఇంగ్లీష్ వెర్షన్](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) అనే ఫాంట్ని సృష్టించడం ద్వారా ఫుటరు చిహ్నం రూపొందించబడింది.

దయచేసి అవసరమైన విధంగా మీ స్వంత ఐకాన్ ఫాంట్ని సృష్టించండి మరియు క్రింది కాన్ఫిగరేషన్ను `conf.css` లో భర్తీ చేయండి :

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

దయచేసి iconfont.cn యొక్క ఫాంట్ ఫైల్ను నేరుగా సూచించవద్దు ఎందుకంటే ఇది సఫారి బ్రౌజర్లో లోడ్ చేయబడదు.

## వెబ్ భాగాలు

మీరు `foot.pug` లో `js` వ్రాయలేరు. పరస్పర చర్య అవసరమైతే, దయచేసి వెబ్ భాగాన్ని అనుకూలీకరించండి.

[వెబ్ కాంపోనెంట్ను](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` లో నిర్వచించవచ్చు మరియు తర్వాత `foot.pug` లో ఉపయోగించవచ్చు.

అనుకూల `<x-img>` వంటి వెబ్ భాగాలను సృష్టించడం సులభం.

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

`.i18n/htm/foot.pug` లోని కోడ్ క్రింది విధంగా ఉంది :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

ఇక్కడ `${I18N.C}` `en/i18n.yml` కి అనుగుణంగా ఉంటుంది :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

ఈ వ్రాత పద్ధతికి సమానమైన `${I18N.xxx}` ఉపయోగించి, `i18n.yml` తో కలిపి, మీరు ఫుటరు యొక్క బహుళ-భాషా అంతర్జాతీయీకరణను సాధించవచ్చు.

లింక్కి `class="a"` జోడించడం అనేది లింక్ను `MarkDown` కి మార్చకుండా నిరోధించడం. చూడండి :
 [➔ `YAML` : లింక్ `HTML` `Markdown` కి మార్చకుండా ఎలా నిరోధించాలి](/i18/qa#H2) .