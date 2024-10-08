# .i18n/conf.yml

`i18n.site` కోసం ప్రొఫైల్ `.i18n/conf.yml` .

[`i18`](/i18) , `ignore:` మరియు `i18n:` సెట్టింగులు మినహా, కాన్ఫిగరేషన్ ఫైల్ క్రింది విధంగా ఉంటుంది:

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
addon:
  - i18n.addon/toc
```

వాటిలో, `upload` నుండి `ext:` కాన్ఫిగరేషన్ అంశం అంటే ప్రచురించేటప్పుడు `.md` మాత్రమే అప్లోడ్ చేయబడతాయి.

## టాప్ నావిగేషన్ nav

`nav:` కాన్ఫిగరేషన్ ఎంపికలు, హోమ్ పేజీ ఎగువన ఉన్న నావిగేషన్ మెనుకి అనుగుణంగా ఉంటాయి.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

వాటిలో, `i18n: home` `en/i18n.yml` లో `home: Home` కి అనుగుణంగా ఉంటుంది.

`zh/i18n.yml` వంటి బహుళ భాషల్లోకి `en/i18n.yml` అనువదించబడుతుంది.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

అనువాదం పూర్తయిన తర్వాత, మీరు అనువాదం `yml` విలువను సవరించవచ్చు, కానీ అనువాదం `yml` కీని జోడించవద్దు లేదా తొలగించవద్దు.

### `use: Toc` , సింగిల్ ఫైల్ టెంప్లేట్ (అవుట్లైన్తో)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` అంటే `Toc` టెంప్లేట్ని ఉపయోగించి రెండరింగ్ చేయడం, ఇది ఒకే `Markdown` టెంప్లేట్ను రెండరింగ్ చేయడం.

`TOC` అనేది `Table of Contents` యొక్క సంక్షిప్తీకరణ. ఈ టెంప్లేట్ రెండర్ చేయబడినప్పుడు, ఈ `Markdown` ఫైల్ యొక్క అవుట్లైన్ సైడ్బార్లో ప్రదర్శించబడుతుంది.

`url:` అనేది `Markdown` యొక్క ఫైల్ పాత్ను సూచిస్తుంది ( `/` రూట్ డైరెక్టరీ `/README.md` కి అనుగుణంగా ఉంటుంది, ఈ ఫైల్ పేరుకు పెద్ద అక్షరం ఉపసర్గ మరియు చిన్న అక్షర ప్రత్యయం అవసరం).

### `use: Md` , సింగిల్ ఫైల్ టెంప్లేట్ (అవుట్లైన్ లేదు)

`Md` టెంప్లేట్ మరియు `Toc` టెంప్లేట్ ఒకేలా ఉంటాయి మరియు రెండూ ఒకే `Markdown` ఫైల్ను రెండర్ చేయడానికి ఉపయోగించబడతాయి. కానీ `Md` టెంప్లేట్ సైడ్బార్లో అవుట్లైన్ను చూపదు.

మీరు ఎగువ కాన్ఫిగరేషన్లోని `use: Toc` `use: Md` కి సవరించవచ్చు, `md` డైరెక్టరీలో `i18n.site` మళ్లీ అమలు చేయవచ్చు, ఆపై హోమ్పేజీలో మార్పులను గమనించడానికి డెవలప్మెంట్ ప్రివ్యూ URLని సందర్శించండి.

### కాన్ఫిగరేషన్ పాత్ లేకుండా డిఫాల్ట్ లోడ్ అవుతోంది

ఒక నిర్దిష్ట మార్గం యాక్సెస్ చేయబడి, దాని పాత్ ప్రిఫిక్స్ `nav:` లో కాన్ఫిగర్ చేయబడకపోతే, మార్గానికి సంబంధించిన `MarkDown` ఫైల్ డిఫాల్ట్గా లోడ్ చేయబడుతుంది మరియు `Md` టెంప్లేట్ ఉపయోగించి రెండర్ చేయబడుతుంది.

ఉదాహరణకు, `/test` యాక్సెస్ చేయబడి, మరియు `nav:` ఈ మార్గం లేకుండా కాన్ఫిగర్ చేయబడి ఉంటే మరియు పేజీ భాష ఆంగ్లం (కోడ్ `en` ), `/en/test.md` డిఫాల్ట్గా లోడ్ చేయబడుతుంది మరియు టెంప్లేట్ `Md` ఉపయోగించి రెండర్ చేయబడుతుంది.

`/en/test.md` ఈ ఫైల్ ఉనికిలో లేకుంటే, డిఫాల్ట్ `404` పేజీ ప్రదర్శించబడుతుంది.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , బహుళ-ఫైల్ టెంప్లేట్

కాన్ఫిగరేషన్ ఫైల్లో:

```
  - i18n: blog
    use: Doc
```

టెంప్లేట్ రెండరింగ్ కోసం `Doc` ఉపయోగించడాన్ని సూచిస్తుంది.

`Doc` టెంప్లేట్ సింగిల్ లేదా బహుళ ప్రాజెక్ట్ల కోసం డాక్యుమెంట్ అవుట్లైన్లను రూపొందించడానికి బహుళ `MarkDown` ఏకీకృతం చేయడానికి మద్దతు ఇస్తుంది.

#### ఒకే ప్రాజెక్ట్ (బహుళ ఫైళ్లు)

ఎగువ `blog` అనేది `Doc` యొక్క సింగిల్-ఐటెమ్ మోడ్.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### url ఖాళీగా ఉన్నప్పుడు, అది i18n విలువకు డిఫాల్ట్ అవుతుంది

`url` వ్రాయబడకపోతే, `url` విలువ `i18n` కి డిఫాల్ట్ అవుతుంది. ఈ నియమం ఇతర టెంప్లేట్లకు కూడా ప్రభావం చూపుతుంది.

పైన వ్రాసే పద్ధతి `url: blog` కి సమానం మరియు దాని సంబంధిత ఫైల్ `en/blog/TOC` .

#### బహుళ ప్రాజెక్టులు

`.i18n/conf.yml` లో `i18n:doc` కాన్ఫిగరేషన్ బహుళ-ప్రాజెక్ట్ మోడ్.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

ఇక్కడ, `menu: NB demo1,demo2` , అంటే డ్రాప్-డౌన్ మెనుని రెండర్ చేయడానికి `NB` టెంప్లేట్ని ఉపయోగించడం.

`NB` , ఇది `Name Breif` యొక్క సంక్షిప్తీకరణ, డ్రాప్-డౌన్ మెను ప్రాజెక్ట్ పేరు మరియు నినాదాన్ని ప్రదర్శించగలదని అర్థం.

`NB` తర్వాత దానికి `demo1,demo2` పరామితి పంపబడింది.
: ** `demo1,demo2` `,` కామాకు ముందు మరియు తర్వాత ** ఖాళీలు ఉండకూడదు.

పై పారామితుల కోసం, సంబంధిత డైరెక్టరీ ఇండెక్స్ ఫైల్:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC విషయ సూచిక సూచిక

`json` డైరెక్టరీ అవుట్లైన్ను రూపొందించడానికి `TOC` టెంప్లేట్ కాన్ఫిగరేషన్కు సంబంధించిన `doc` డైరెక్టరీ ఇండెక్స్ ఫైల్ను చదవడానికి `i18n.site` డెమో వేర్హౌస్లో `js` ప్లగ్-ఇన్ `.i18n/hook/after.tran/TOC.js` అమలు చేస్తుంది.

మీరు `doc` టెంప్లేట్ని ఉపయోగిస్తే, మీరు తప్పనిసరిగా ఈ ప్లగ్-ఇన్ని కలిగి ఉండాలి.

మీరు ఖాళీ ఫోల్డర్ నుండి ప్రాజెక్ట్ `i18n.site` ప్రారంభిస్తే, డెమో ప్రాజెక్ట్ `.i18n` ని మీ డైరెక్టరీకి కాపీ చేయాలని గుర్తుంచుకోండి.

`Doc` టెంప్లేట్ ఉత్పత్తి చేయబడిన `json` ఆధారంగా విషయ సూచిక అవుట్లైన్ను అందిస్తుంది.

##### వివరణాత్మక కంటెంట్ వివరణ

`en/blog/TOC` కంటెంట్ క్రింది విధంగా ఉంది :

```
README.md

news/README.md
  news/begin.md
```

##### స్థాయిలను సూచించడానికి ఇండెంటేషన్ ఉపయోగించండి

ఎగువ `en/blog/TOC` యొక్క మొదటి వరుసలోని `README.md` దిగువ చిత్రంలో ఉన్న `i18n.site` కి అనుగుణంగా ఉంటుంది, ఇది ప్రాజెక్ట్ పేరు.

దిగువ స్క్రీన్షాట్లో చూపిన విధంగా తదుపరి రెండు పంక్తులు ఉన్నాయి.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` `News` కి అనుగుణంగా ఉంటుంది,
`news/begin.md` `Our Product is Online !` కి అనుగుణంగా ఉంటుంది

అవుట్లైన్ యొక్క క్రమానుగత సంబంధాన్ని సూచించడానికి `TOC` ఫైల్లు ఇండెంట్ చేయబడ్డాయి, బహుళ-స్థాయి ఇండెంటేషన్కు మద్దతు ఇస్తాయి మరియు `#` తో ప్రారంభమయ్యే లైన్ కామెంట్లు.

##### పేరెంట్ స్థాయి టైటిల్ను మాత్రమే వ్రాస్తుంది, కంటెంట్ కాదు.

ఇండెంటేషన్ యొక్క బహుళ స్థాయిలు ఉన్నప్పుడు, పేరెంట్ లెవెల్ టైటిల్ను మాత్రమే వ్రాస్తుంది మరియు కంటెంట్ను కాదు. లేకపోతే, టైపోగ్రఫీ గందరగోళంగా ఉంటుంది.

##### ప్రాజెక్ట్ README.md

కంటెంట్ `en/demo2/README.md` వంటి అంశం `README.md` లో వ్రాయవచ్చు.

ఈ ఫైల్ యొక్క కంటెంట్ విషయ సూచిక అవుట్లైన్ను చూపదని గుర్తుంచుకోండి, కాబట్టి నిడివిని పరిమితం చేసి, చిన్న పరిచయాన్ని వ్రాయమని సిఫార్సు చేయబడింది.

###### ప్రాజెక్ట్ నినాదం

డ్రాప్-డౌన్ మెను మరియు కేటలాగ్ అవుట్లైన్ ప్రాజెక్ట్ : `Deme Two` క్రింద దాని ప్రాజెక్ట్ ట్యాగ్లైన్ ఉందని మీరు చూడవచ్చు `Your Project slogan`

![](https://p.3ti.site/1721276842.avif)

ఇది `en/demo2/README.md` మొదటి వరుసకు అనుగుణంగా ఉంటుంది :

```
# Demo Two : Your Project slogan
```

ప్రాజెక్ట్ `README.md` యొక్క మొదటి-స్థాయి శీర్షికలో మొదటి కోలన్ `:` తర్వాత కంటెంట్ ప్రాజెక్ట్ నినాదంగా పరిగణించబడుతుంది.

చైనా, జపాన్ మరియు కొరియాకు చెందిన వినియోగదారులు, దయచేసి మీరు పూర్తి వెడల్పు కోలన్కు బదులుగా సగం వెడల్పు కోలన్ `:` ఉపయోగించాలని గమనించండి.

##### TOCని పెద్దమొత్తంలో ఎలా తరలించాలి?

మూల భాష యొక్క డైరెక్టరీలో `TOC` ఫైల్లను ఉంచాలి.

ఉదాహరణకు, మూల భాష చైనీస్ అయితే, పైన ఉన్న `TOC` `zh/blog/TOC` .

మూల భాష సవరించబడితే, మీరు ప్రాజెక్ట్లోని నిర్దిష్ట భాష యొక్క `TOC` ఫైల్లను మరొక భాషకు బ్యాచ్గా తరలించాలి.

మీరు క్రింది ఆదేశాలను సూచించవచ్చు:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

దయచేసి పై ఆదేశంలో `en/` మరియు `zh/` మీ భాషా కోడ్కి సవరించండి.