# i18n.site MarkDown రైటింగ్ కన్వెన్షన్

## యాంకర్ పాయింట్

సాంప్రదాయ `MarkDown` యాంకర్ పాయింట్లు టెక్స్ట్ కంటెంట్ ఆధారంగా రూపొందించబడ్డాయి, బహుళ భాషల విషయంలో, ఈ పరిష్కారం సాధ్యం కాదు.

పొజిషనింగ్ యాంకర్ పాయింట్ని మాన్యువల్గా క్రియేట్ చేయడానికి `MarkDown` లో `<a rel=id href="#xxx" id="xxx"></a>` కి సమానమైన వచనాన్ని చొప్పించడం `i18n.site` తో అంగీకరించిన యాంకర్ పాయింట్ సొల్యూషన్.

`<a rel=id href="#xxx" id="xxx"></a>` , ఇక్కడ `rel=id` యాంకర్ పాయింట్ యొక్క పేజీ శైలిని నిర్వచిస్తుంది, దయచేసి `xxx` మీ అసలు యాంకర్ ఆంగ్ల సంక్షిప్తీకరణతో భర్తీ చేయండి.

యాంకర్లు సాధారణంగా టైటిల్కి జోడించబడతాయి, అవి:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

ప్రదర్శన ప్రభావం క్రింది విధంగా ఉంది:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `MarkDown` లో `HTML` వ్రాయండి

`HTML` `pug` కోడ్లో పొందుపరచవచ్చు.

`<pre>` మూలకాలలోని కంటెంట్ అనువదించబడదు.

ఈ రెండు పాయింట్లను కలిపి, మీరు వివిధ ప్రదర్శన ప్రభావాలను సాధించడానికి `HTML` లో `MarkDown` ని సులభంగా వ్రాయవచ్చు.

[HTML కోసం ఇక్కడ క్లిక్ i18n.site](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

పైన `<pre>` లో `<style>` కూడా నిర్వచించబడిందని గమనించండి.