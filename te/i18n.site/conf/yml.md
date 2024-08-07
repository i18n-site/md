# .i18n/conf.yml

కాన్ఫిగరేషన్ ఫైల్ `.i18n/conf.yml` `i18n.site`

[`i18`](/i18) యొక్క `ignore:` మరియు `i18n:` సెట్టింగ్‌లు మినహా, కాన్ఫిగరేషన్ ఫైల్ క్రింది విధంగా ఉంది:

```yaml
upload:
  ext:
    - md
nav:
  - i18n: home
    use: Toc
    url: /
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
  - i18n: blog
    use: Doc
```

వాటిలో, `upload` యొక్క `ext:` కాన్ఫిగరేషన్ అంశం ప్రచురించేటప్పుడు `.md` మాత్రమే అప్‌లోడ్ చేయబడుతుంది.

## టాప్ నావిగేషన్ nav

`nav:` కాన్ఫిగరేషన్ ఎంపికలు, హోమ్ పేజీ ఎగువన ఉన్న నావిగేషన్ మెనుకి అనుగుణంగా ఉంటాయి.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

వాటిలో, `en/i18n.yml`中`home: Home` కి అనుగుణంగా `i18n: home` .

`zh/i18n.yml` వంటి బహుళ భాషల్లోకి అనువదించబడుతుంది `en/i18n.yml`

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

అనువాదం పూర్తయిన తర్వాత, మీరు అనువాదంలో `yml` సవరించవచ్చు, కానీ అనువాదం `yml` యొక్క కీని జోడించవద్దు లేదా తొలగించవద్దు.

### `use: Toc` సింగిల్ ఫైల్ టెంప్లేట్ (అవుట్‌లైన్‌తో)

కాన్ఫిగర్ : `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` అంటే `Toc` రెండరింగ్‌ని ఉపయోగించడం, ఇది ఒకే `Markdown` టెంప్లేట్‌ను రెండరింగ్ చేయడం.

`TOC` `Table of Contents` ఈ టెంప్లేట్ రెండర్ చేయబడినప్పుడు, ఈ `Markdown` ఫైల్ యొక్క రూపురేఖలు సైడ్‌బార్‌లో ప్రదర్శించబడతాయి.

`url:` `Markdown` ఫైల్ పాత్‌ను సూచిస్తుంది ( `/` రూట్ డైరెక్టరీకి అనుగుణంగా ఉంటుంది `/README.md` , ఈ ఫైల్ పేరుకు పెద్ద అక్షరం ఉపసర్గ మరియు చిన్న అక్షరం ప్రత్యయం అవసరం).

### `use: Md` సింగిల్ ఫైల్ టెంప్లేట్ (ఔట్‌లైన్ లేదు)

`Md` టెంప్లేట్ అనేది `Toc` వలె ఉంటుంది, రెండూ ఒకే `Markdown` ఫైల్‌ను రెండర్ చేయడానికి ఉపయోగించబడతాయి. అయితే `Md` టెంప్లేట్ సైడ్‌బార్‌లో అవుట్‌లైన్‌ను చూపదు.

మీరు పైన ఉన్న కాన్ఫిగరేషన్‌లో `use: Md` కి `use: Toc` `i18n.site` `md` డైరెక్టరీలో మళ్లీ, ఆపై హోమ్‌పేజీలో మార్పులను గమనించడానికి డెవలప్‌మెంట్ ప్రివ్యూ URLని సందర్శించండి.

### కాన్ఫిగరేషన్ పాత్ లేకుండా డిఫాల్ట్ లోడ్ అవుతోంది

`nav:` `MarkDown` `Md`

ఉదాహరణకు, మీరు సందర్శిస్తే `/test` మరియు `nav:` ఈ మార్గం లేకుండా కాన్ఫిగర్ చేయబడి ఉంటే మరియు పేజీ భాష ఇంగ్లీష్ (కోడ్ `en` ) అయితే, టెంప్లేట్ డిఫాల్ట్‌గా లోడ్ చేయబడుతుంది `/en/test.md` మరియు ఉపయోగించి రెండర్ చేయబడుతుంది `Md` .

ఈ ఫైల్ ఉనికిలో లేకుంటే `/en/test.md` డిఫాల్ట్ `404` పేజీ ప్రదర్శించబడుతుంది.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , బహుళ-ఫైల్ టెంప్లేట్

కాన్ఫిగరేషన్ ఫైల్‌లో:

```
  - i18n: blog
    use: Doc
```

టెంప్లేట్ రెండరింగ్ కోసం `Doc` సూచిస్తుంది.

`Doc` ఒకే లేదా బహుళ ప్రాజెక్ట్‌ల కోసం డాక్యుమెంట్ అవుట్‌లైన్‌లను రూపొందించడానికి బహుళ `MarkDown` ఏకీకృతం చేయడానికి టెంప్లేట్ మద్దతు ఇస్తుంది.

#### ఒకే ప్రాజెక్ట్ (బహుళ ఫైళ్లు)

`blog` పైన `Doc` యొక్క ఒకే-ప్రాజెక్ట్ మోడ్.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### url ఖాళీగా ఉన్నప్పుడు, అది i18n విలువకు డిఫాల్ట్ అవుతుంది

మీరు `url` `i18n` విలువకు `url` వ్రాయకపోతే, ఈ నియమం ఇతర టెంప్లేట్‌లకు కూడా వర్తిస్తుంది.

పైన వ్రాసే పద్ధతి కలిగి ఉంటుంది `url: blog` మరియు దాని సంబంధిత ఫైల్ `en/blog/TOC` .

#### బహుళ ప్రాజెక్టులు

`.i18n/conf.yml` `i18n:doc` లోని కాన్ఫిగరేషన్ బహుళ-ప్రాజెక్ట్ మోడ్.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

ఇక్కడ, `menu: NB demo1,demo2` అంటే డ్రాప్-డౌన్ మెనుని రెండర్ చేయడానికి `NB` ఉపయోగించడం.

`NB` , `Name Breif` యొక్క సంక్షిప్తీకరణ, డ్రాప్-డౌన్ మెను ప్రాజెక్ట్ పేరు మరియు నినాదాన్ని ప్రదర్శిస్తుందని సూచిస్తుంది.

`NB` అనే `demo1,demo2` దానికి పాస్ చేయబడింది.
కామా `demo1,demo2` లో `,` ముందు మరియు తర్వాత ** ఉండకూడదని గమనించండి : **

పై పారామితుల కోసం, సంబంధిత డైరెక్టరీ ఇండెక్స్ ఫైల్:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC విషయ సూచిక సూచిక

డైరెక్టరీ అవుట్‌లైన్ `json` ని రూపొందించడానికి డైరెక్టరీ ఇండెక్స్ ఫైల్ `doc` టెంప్లేట్ కాన్ఫిగరేషన్‌కు అనుగుణంగా `TOC` చదవడానికి డెమో వేర్‌హౌస్‌లో `js` ప్లగిన్ `.i18n/hook/after.tran/TOC.js` అమలు చేస్తుంది `i18n.site`

మీరు `doc` ఉపయోగిస్తే, మీరు ఈ ప్లగ్-ఇన్‌ని కలిగి ఉండాలి.

మీరు ఒక ఖాళీ ఫోల్డర్ నుండి `i18n.site` ప్రారంభించినట్లయితే, డెమో ప్రాజెక్ట్‌లోని `.i18n` మీ డైరెక్టరీకి కాపీ చేయాలని గుర్తుంచుకోండి.

`Doc` టెంప్లేట్ రూపొందించిన `json` ఆధారంగా విషయాల పట్టికను అందిస్తుంది.

##### వివరణాత్మక కంటెంట్ వివరణ

కంటెంట్ : క్రింది విధంగా ఉంది `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### స్థాయిలను సూచించడానికి ఇండెంటేషన్ ఉపయోగించండి

పైన `en/blog/TOC` మొదటి పంక్తిలోని `README.md` దిగువ చిత్రంలో ఉన్న `i18n.site` కి అనుగుణంగా ఉంటుంది, ఇది ప్రాజెక్ట్ పేరు.

దిగువ స్క్రీన్‌షాట్‌లో చూపిన విధంగా తదుపరి రెండు పంక్తులు ఉన్నాయి.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` `News`
`news/begin.md` `Our Product is Online !`

`TOC` అవుట్‌లైన్ యొక్క క్రమానుగత సంబంధాన్ని సూచించడానికి ఫైల్ ఇండెంట్ చేయబడింది మరియు బహుళ-స్థాయి ఇండెంటేషన్‌కు మద్దతు ఇస్తుంది.

##### పేరెంట్ స్థాయి టైటిల్‌ను మాత్రమే వ్రాస్తుంది, కంటెంట్ కాదు.

ఇండెంటేషన్ యొక్క బహుళ స్థాయిలు ఉన్నప్పుడు, పేరెంట్ లెవెల్ టైటిల్‌ను మాత్రమే వ్రాస్తుంది మరియు కంటెంట్‌ను కాదు. లేకపోతే, టైపోగ్రఫీ గందరగోళంగా ఉంటుంది.

##### ప్రాజెక్ట్ README.md 

ప్రాజెక్ట్ యొక్క `README.md` , ఉదాహరణకు, మీరు `en/demo2/README.md` లో కంటెంట్‌ని వ్రాయవచ్చు.

ఈ ఫైల్ యొక్క కంటెంట్ విషయ సూచిక అవుట్‌లైన్‌ను చూపదని గుర్తుంచుకోండి, కాబట్టి నిడివిని పరిమితం చేసి చిన్న పరిచయాన్ని వ్రాయమని సిఫార్సు చేయబడింది.

###### ప్రాజెక్ట్ నినాదం

మీరు చూడగలిగినట్లుగా `Deme Two` డ్రాప్-డౌన్ మెను మరియు కేటలాగ్ అవుట్‌లైన్ ప్రాజెక్ట్ పేరు క్రింద, దాని ప్రాజెక్ట్ నినాదం `Your Project slogan` :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: మొదటి పంక్తికి అనుగుణంగా ఉంటుంది `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

ప్రాజెక్ట్ `README.md` మొదటి-స్థాయి శీర్షికలోని మొదటి కోలన్ `:` తర్వాత ఉన్న కంటెంట్ ప్రాజెక్ట్ నినాదంగా పరిగణించబడుతుంది.

చైనా, జపాన్ మరియు కొరియాకు చెందిన వినియోగదారులు, దయచేసి మీరు పూర్తి-వెడల్పు కోలన్‌కు బదులుగా సగం వెడల్పు కోలన్‌ని ఉపయోగించాలని గుర్తుంచుకోండి `:`

##### TOCని పెద్దమొత్తంలో ఎలా తరలించాలి?

`TOC` ఫైల్‌ని సోర్స్ లాంగ్వేజ్ డైరెక్టరీలో ఉంచాలి.

ఉదాహరణకు, మూల భాష చైనీస్ అయితే, పైన `zh/blog/TOC` `TOC`

సోర్స్ లాంగ్వేజ్ సవరించబడితే, మీరు ప్రాజెక్ట్‌లోని నిర్దిష్ట భాషలోని `TOC` మరొక భాషలోకి తరలించాలి.

మీరు క్రింది ఆదేశాలను సూచించవచ్చు:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

దయచేసి మీ భాషా కోడ్‌కు ఎగువ ఆదేశంలో `en/` మరియు `zh/` సవరించండి.


