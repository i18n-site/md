# అనుకూలీకరించిన నావిగేషన్

నావిగేషన్ను ఎలా అనుకూలీకరించాలో వివరించడానికి డెమో సైట్ను ఉదాహరణగా తీసుకుందాం [i18n-demo.github.io](//i18n-demo.github.io)

![](https://p.3ti.site/1731036697.avif)

పై చిత్రంలో సంఖ్యా ప్రాంతాలకు సంబంధించిన ఫైల్లు క్రింది విధంగా ఉన్నాయి:

1. ఎడమ [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. కుడి [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) అనేది `HTML` లను ఉత్పత్తి చేసే టెంప్లేట్ భాష.

[➔ యొక్క వ్యాకరణాన్ని తెలుసుకోవడానికి ఇక్కడ క్లిక్ చేయండి pug](https://pugjs.org)

అంతర్జాతీయీకరణను అమలు చేయడానికి ఫైల్లో స్ట్రింగ్ `${I18N.sponsor}` ఉపయోగించబడుతుంది మరియు దాని కంటెంట్ మూల భాష డైరెక్టరీలోని సంబంధిత టెక్స్ట్తో భర్తీ చేయబడుతుంది [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml)

**`pug` లో `css` మరియు `js` వ్రాయవద్దు** , లేకుంటే లోపం ఉంటుంది.

స్టైల్స్ `css` లోకి వ్రాయబడ్డాయి మరియు వెబ్ భాగాలను సృష్టించడం ద్వారా పరస్పర చర్య సాధించబడుతుంది.

ఇక్కడ, [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css) బార్ యొక్క శైలికి సంబంధించిన ఫైల్ :