# ఇన్స్టాల్ చేసి ఉపయోగించుకోండి

## విండోస్ మొదట git bash ని ఇన్స్టాల్ చేయండి

windows సిస్టమ్, దయచేసి [ముందుగా `git bash` డౌన్లోడ్ చేసి, ఇన్స్టాల్ చేయడానికి ఇక్కడ క్లిక్ చేయండి](https://git-scm.com/download/win) .

తదుపరి కార్యకలాపాలను `git bash` లో అమలు చేయండి.

## ఇన్స్టాల్ చేయండి

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### అనువాద టోకెన్ని కాన్ఫిగర్ చేయండి

టోకెన్ని కాపీ చేయడానికి క్లిక్ [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

`~/.config/i18n.site.yml` సృష్టించండి, కాపీ చేసిన కంటెంట్ను అందులో అతికించండి, కంటెంట్ క్రింది విధంగా ఉంటుంది:

```
token: YOUR_API_TOKEN
```

[i18n.site/payBill](//i18n.site/payBill) , మీరు చెల్లింపు కోసం క్రెడిట్ కార్డ్ని బైండ్ చేయాలి (రీఛార్జ్ అవసరం లేదు, వెబ్సైట్ స్వయంచాలకంగా వినియోగానికి అనుగుణంగా రుసుములను తీసివేస్తుంది, [ధర కోసం హోమ్పేజీని చూడండి](/#price) ).

## ఉపయోగించండి

### డెమో ప్రాజెక్ట్

`i18` అనువాదం కాన్ఫిగరేషన్ తెలుసుకోవడానికి దయచేసి డెమో ప్రాజెక్ట్ని చూడండి [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

చైనాలోని వినియోగదారులు క్లోన్ చేయవచ్చు [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

క్లోనింగ్ తర్వాత, డైరెక్టరీని నమోదు చేసి, అనువాదాన్ని పూర్తి చేయడానికి `i18` అమలు చేయండి.

### డైరెక్టరీ నిర్మాణం

టెంప్లేట్ గిడ్డంగి డైరెక్టరీ నిర్మాణం క్రింది విధంగా ఉంది

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en` డైరెక్టరీలో అనువదించబడిన డెమో ఫైల్లు కేవలం ఒక ఉదాహరణ మాత్రమే మరియు వాటిని తొలగించవచ్చు.

### అనువాదాన్ని అమలు చేయండి

డైరెక్టరీని నమోదు చేసి, అనువదించడానికి `i18` అమలు చేయండి.

అనువాదంతో పాటు, ప్రోగ్రామ్ `.i18n/data` ఫోల్డర్ను కూడా రూపొందిస్తుంది, దయచేసి దానిని రిపోజిటరీకి జోడించండి.

కొత్త ఫైల్ను అనువదించిన తర్వాత, ఈ డైరెక్టరీలో కొత్త డేటా ఫైల్ ఉత్పత్తి చేయబడుతుంది `git add . ` జోడించాలని గుర్తుంచుకోండి.

## కాన్ఫిగరేషన్ ఫైల్

`.i18n/conf.yml` అనేది `i18` కమాండ్ లైన్ అనువాద సాధనం యొక్క కాన్ఫిగరేషన్ ఫైల్

కంటెంట్ క్రింది విధంగా ఉంది:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### మూల భాష &

కాన్ఫిగరేషన్ ఫైల్లో, `fromTo` యొక్క సబార్డినేట్:

`en` మూల భాష, `zh ja ko de fr` అనువాదం యొక్క లక్ష్య భాష.

భాషా కోడ్ చూడండి [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

ఉదాహరణకు, మీరు చైనీస్ని ఆంగ్లంలోకి అనువదించాలనుకుంటే, ఈ లైన్ `zh: en` ని మళ్లీ వ్రాయండి.

మీరు మద్దతు ఉన్న అన్ని భాషలకు అనువదించాలనుకుంటే, దయచేసి `:` తర్వాత ఖాళీగా ఉంచండి. ఉదాహరణకు

```
i18n:
  fromTo:
    en:
```

వేర్వేరు ఫైల్ల : వేర్వేరు `fromTo` కాన్ఫిగర్ చేయవచ్చు / .

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

ఈ కాన్ఫిగరేషన్ పట్టికలో, డైరెక్టరీ `blog` అనువాదం యొక్క మూల భాష `zh` , మరియు డైరెక్టరీ `blog/your_file_name.md` అనువాదం కోసం మూల భాష `ja` .

### ఫైల్ను విస్మరించండి

డిఫాల్ట్గా, మూల భాష డైరెక్టరీలో `.md` మరియు `.yml` తో మొదలయ్యే అన్ని ఫైల్లు అనువదించబడతాయి.

మీరు నిర్దిష్ట ఫైల్లను విస్మరించి, వాటిని అనువదించకూడదనుకుంటే (అసంపూర్తిగా ఉన్న చిత్తుప్రతులు వంటివి), మీరు `ignore` ఫీల్డ్ కాన్ఫిగరేషన్ని ఉపయోగించవచ్చు.

`ignore` `.gitignore` ఫైల్ వలె [globset](https://docs.rs/globset/latest/globset/#syntax) ఉపయోగిస్తుంది.

ఉదాహరణకు, పై కాన్ఫిగరేషన్ ఫైల్లోని `_* ` అంటే `_` తో ప్రారంభమయ్యే ఫైల్లు అనువదించబడవు.

## అనువాద నియమాలు

### అనువాద సంపాదకులు పంక్తులను జోడించకూడదు లేదా తొలగించకూడదు

అనువాదం సవరించదగినది. అసలు వచనాన్ని సవరించండి మరియు దాన్ని మళ్లీ మెషీన్-అనువదించండి, అనువాదానికి మాన్యువల్ సవరణలు భర్తీ చేయబడవు (అసలు టెక్స్ట్ యొక్క ఈ పేరా సవరించబడకపోతే).

> [!WARN]
> అనువాదం మరియు అసలు వచనం యొక్క పంక్తులు తప్పనిసరిగా ఒకదానికొకటి అనుగుణంగా ఉండాలి. అంటే, అనువాదాన్ని కంపైల్ చేసేటప్పుడు పంక్తులను జోడించవద్దు లేదా తొలగించవద్దు. లేకపోతే, ఇది అనువాద సవరణ కాష్లో గందరగోళాన్ని కలిగిస్తుంది.

ఏదైనా తప్పు జరిగితే, దయచేసి [పరిష్కారాల కోసం తరచుగా అడిగే ప్రశ్నలను చూడండి.](/i18/qa#H1)

### `YAML` అనువాదాలు

కమాండ్ లైన్ సాధనం మూల భాష ఫైల్ డైరెక్టరీలో `.yml` తో ముగిసే అన్ని ఫైల్లను కనుగొని వాటిని అనువదిస్తుంది.

* ఫైల్ పేరు ప్రత్యయం తప్పనిసరిగా `.yml` ( `.yaml` కాదు) అని గుర్తుంచుకోండి.

సాధనం నిఘంటువు విలువలను `.yml` లో మాత్రమే అనువదిస్తుంది, నిఘంటువు కీలను కాదు.

ఉదాహరణకు `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

`i18n/zh/i18n.yml` గా అనువదించబడుతుంది

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML` యొక్క అనువాదం మానవీయంగా కూడా సవరించబడుతుంది (కానీ అనువాదంలో కీలు లేదా పంక్తులను జోడించవద్దు లేదా తొలగించవద్దు).

`YAML` అనువాదం ఆధారంగా, మీరు వివిధ ప్రోగ్రామింగ్ భాషల కోసం అంతర్జాతీయ పరిష్కారాలను సులభంగా రూపొందించవచ్చు.

## అధునాతన వినియోగం

### అనువాద ఉప డైరెక్టరీ

`.i18n/conf.yml` సృష్టించబడినంత కాలం (ప్రతిసారీ డెమో ప్రాజెక్ట్ టెంప్లేట్ నుండి ప్రారంభించాల్సిన అవసరం లేదు), `i18` బాగా పని చేస్తుంది.

కమాండ్ లైన్ సాధనం అన్ని ఉప డైరెక్టరీలలో `.i18n/conf.yml` కాన్ఫిగరేషన్లను కనుగొని వాటిని అనువదిస్తుంది.

[monorepo](//monorepo.tools) ఉపయోగించే ప్రాజెక్ట్లు భాషా ఫైల్లను ఉప డైరెక్టరీలుగా విభజించగలవు

![](https://p.3ti.site/1719910016.avif)

### కస్టమ్ ఇన్స్టాలేషన్ డైరెక్టరీ

ఇది డిఫాల్ట్గా `/usr/local/bin` కి ఇన్స్టాల్ చేయబడుతుంది.

`/usr/local/bin` వ్రాయడానికి అనుమతి లేకపోతే అది `~/.bin` కి ఇన్స్టాల్ చేయబడుతుంది.

ఎన్విరాన్మెంట్ వేరియబుల్ `TO` ని సెట్ చేయడం వలన ఇన్స్టాలేషన్ డైరెక్టరీని నిర్వచించవచ్చు, ఉదాహరణకు :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```