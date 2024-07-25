# MarkDown ఫార్మాట్ కన్వెన్షన్

## మూల విషయం

`MarkDown` యాంకర్లు టెక్స్ట్ కంటెంట్ ఆధారంగా రూపొందించబడ్డాయి, ఈ పరిష్కారం సాధ్యం కాదు.

`i18n.site` పొజిషనింగ్ యాంకర్‌ను మాన్యువల్‌గా సృష్టించడానికి `MarkDown` `<a rel=id href="#xxx" id="xxx"></a>` ఉన్న వచనాన్ని చొప్పించడం అంగీకరించిన యాంకర్ పరిష్కారం.

`<a rel=id href="#xxx" id="xxx"></a>` , ఇక్కడ `rel=id` యాంకర్ పాయింట్ యొక్క పేజీ శైలిని నిర్వచిస్తుంది, దయచేసి `xxx` మీ అసలు యాంకర్ ఆంగ్ల సంక్షిప్తీకరణతో భర్తీ చేయండి.

యాంకర్లు సాధారణంగా టైటిల్‌కి జోడించబడతాయి, అవి:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

ప్రదర్శన ప్రభావం క్రింది విధంగా ఉంది:

<img src="//p.3ti.site/1721381136.avif" width="350">

## లో `HTML` వ్రాయండి `MarkDown`

`pug` `HTML` కోడ్‌లో పొందుపరచవచ్చు.

`<pre>` కంటెంట్ అనువదించబడదు.

ఈ రెండు పాయింట్లను కలిపి, మీరు వివిధ ప్రదర్శన ప్రభావాలను సాధించడానికి `HTML` `MarkDown` సులభంగా వ్రాయవచ్చు.

మీరు [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) కోడ్ క్రింది విధంగా ఉంది :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

`<style>` `<pre>` కూడా నిర్వచించబడిందని గమనించండి.
