# Hrein Og Öfug Framendaleit Í Fullri Texta

## Röð

Eftir nokkurra vikna þróun styður [i18n.site](//i18n.site) (eingöngu kyrrstæð markdown fjöltyngsþýðingartól & að byggja upp vefsíðu) nú hreina fulltextaleit.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Þessi grein mun deila útfærslunni á `i18n.site` hreinni fulltextaleitartækni [i18n.site](//i18n.site) Þú getur upplifað leitaráhrifin.

Kóða opinn uppspretta [leitarkjarna](//github.com/i18n-site/ie/tree/main/qy) / [viðmót](//github.com/i18n-site/plugin/tree/main/qy)

## Yfirlit Yfir Netþjónalausar Leitarlausnir Í Fullri Texta

Fyrir litlar vefsíður eins og skjöl/persónuleg blogg sem eru eingöngu kyrrstæð er það eflaust of þungt að byggja upp fulltextaleitarbakenda sjálfur, og fulltextaleit án þjónustu er án efa þyngri.

Núverandi netþjónalausar leitarlausnir í fullum texta falla í tvo víðtæka flokka.

Einn er leitarþjónustuveita þriðja aðila svipað og [algolia.com](//algolia.com) sem býður upp á leitarhluta í fullum texta að framan.

Slík þjónusta krefst greiðslu og er ekki í boði fyrir notendur á meginlandi Kína vegna vandamála í samræmi við vefsíður.

Það er ekki hægt að nota það án nettengingar, ekki hægt að nota það á innra netinu og hefur miklar takmarkanir. Þessi grein fjallar ekki mikið.

Annað er hrein framhlið fulltextaleit.

Þekktari hreinu leitirnar í fullum texta [lunrjs](https://lunrjs.com) og [ ElasticLunr.js ] [https://github.com/weixsong/elasticlunr.js](%E5%9F%BA%E4%BA%8E%60lunrjs%60%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91) .

`lunrjs` Það eru tvær leiðir til að byggja upp vísitölur, en báðar hafa sín vandamál.

1. Forsmíðaðar vísitöluskrár

   Þar sem skráin inniheldur orð úr öllum skjölum er hún stór í sniðum.
   Alltaf þegar skjali er bætt við eða breytt verður að hlaða inn nýrri vísitöluskrá.
   Það mun auka biðtíma notandans og eyða mikilli bandbreidd.

2. Hladdu skjölum og byggðu vísitölur á flugu

   Að byggja upp vísitölu er reiknifrekt verkefni Að endurbyggja vísitöluna í hvert sinn sem þú opnar hana mun valda augljósum töfum og lélegri notendaupplifun.

Auk `lunrjs` eru nokkrar aðrar leitarlausnir í fullri texta, svo sem :

[fusejs](https://www.fusejs.io) , reiknaðu líkt milli strengja við leit.

Árangur þessarar lausnar er afar lélegur og ekki hægt að nota hana fyrir heildartextaleit (sjá [Fuse.js Löng fyrirspurn tekur meira en 10 sekúndur, hvernig á að fínstilla hana?](https://stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](https://github.com/tinysearch/tinysearch) , notaðu Bloom síu til að leita, er ekki hægt að nota til að leita að forskeyti (til dæmis, sláðu inn `goo` , leitaðu `good` , `google` ), og getur ekki náð svipuðum sjálfvirkum útfyllingaráhrifum.

Vegna óánægju með galla núverandi lausna, þróaði `i18n.site` nýja hreina framenda heildartextaleitarlausn, sem hefur eftirfarandi eiginleika :

1. Styður margra tungumála leit og er lítill í stærð Stærð leitarkjarna eftir pökkun `gzip` er `6.9KB` (til samanburðar er stærð `lunrjs` `25KB` ).
1. Búðu til öfugan vísitölu sem byggir á `indexedb` , sem tekur minna minni og er fljótur.
1. Þegar skjölum er bætt við/breytt er aðeins bætt við eða breytt skjöl endurverðtryggð, sem dregur úr magni útreikninga.
1. Styður forskeyti leit, sem getur birt leitarniðurstöður í rauntíma á meðan notandinn er að skrifa.
1. Í boði án nettengingar

Hér að neðan verða `i18n.site` tæknilegar útfærsluupplýsingar kynntar í smáatriðum.

## Margmála Orðaskiptingu

Orðaskiptingu notar innfædda orðaskiptingu vafrans `Intl.Segmenter` , og allir almennir vafrar styðja þetta viðmót.

![](https://p.3ti.site/1727667759.avif)

Orðið skipting `coffeescript` kóði er sem hér segir

```coffee
SEG = new Intl.Segmenter 0, granularity: "word"

seg = (txt) =>
  r = []
  for {segment} from SEG.segment(txt)
    for i from segment.split('.')
      i = i.trim()
      if i and !'|`'.includes(i) and !/\p{P}/u.test(i)
        r.push i
  r

export default seg

export segqy = (q) =>
  seg q.toLocaleLowerCase()
```

í:

* `/\p{P}/` er regluleg tjáning sem passar við greinarmerki: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~. `.</p><ul><li> `split('.')` er vegna þess að `Firefox` vafraorðaskipting er ekki hluti `.` .</li>


## Vísitölubygging

5 hlutageymslutöflur voru búnar til í `IndexedDB` :

* `word` orð : id -
* `doc` : id - Skjal url - Skjalaútgáfunúmer
* `docWord` : Fylki af skjali id - orð id
* `prefix` : Array forskeyti - orð id
* `rindex` : Word id - Document id : Fylki af línunúmerum

Farðu inn í fylkið skjal `url` og útgáfu númer `ver` og leitaðu hvort skjalið sé til í töflu `doc` Ef það er ekki til skaltu búa til öfuga vísitölu. Á sama tíma skaltu fjarlægja öfuga vísitöluna fyrir þau skjöl sem ekki voru send inn.

Þannig er hægt að ná fram stigvaxandi verðtryggingu og lækka magn útreikninga.

Í framvindusamskiptum er hægt að sýna framvindustiku vísitölunnar til að forðast töf þegar hleðsla er í fyrsta skipti. Sjá "Framfarastiku með hreyfimynd, byggt á einni progress + Pure css Implementation" [English](https://dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chinese](https://juejin.cn/post/7413586285954154522) .

### IndexedDB Mikil Samhliða Skrif

Verkefnið er [idb](https://www.npmjs.com/package/idb) byggt á ósamstilltri hjúpun IndexedDB

IndexedDB lestur og skrif eru ósamstilltur. Þegar vísir er stofnuð verða skjöl hlaðin samtímis til að búa til vísitöluna.

Til að forðast gagnatap að hluta af völdum samkeppnisskrifa geturðu vísað í `coffeescript` kóðann hér að neðan og bætt við `ing` skyndiminni á milli lestrar og ritunar til að stöðva skrif í samkeppni.

```coffee
pusher = =>
  ing = new Map()
  (table, id, val)=>
    id_set = ing.get(id)
    if id_set
      id_set.add val
      return

    id_set = new Set([val])
    ing.set id, id_set
    pre = await table.get(id)
    li = pre?.li or []

    loop
      to_add = [...id_set]
      li.push(...to_add)
      await table.put({id,li})
      for i from to_add
        id_set.delete i
      if not id_set.size
        ing.delete id
        break
    return

rindexPush = pusher()
prefixPush = pusher()
```

## Forskeyti Í Rauntíma Leit

Til þess að birta leitarniðurstöður á meðan notandinn er að skrifa, til dæmis, þegar `wor` er slegið inn, birtast orð með forskeyti `wor` eins og `words` og `work` .

![](https://p.3ti.site/1727684944.avif)

Leitarkjarninn mun nota `prefix` töfluna fyrir síðasta orðið eftir orðaskiptingu til að finna öll orð með forskeytinu og leita í röð.

Anti-shake aðgerð `debounce` er einnig notuð í framenda samskiptum (útfærð sem hér segir) til að draga úr tíðni notendainntaks sem kallar fram leit og draga úr magni útreikninga.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Nákvæmni Og Endurköllun

Leitin mun fyrst flokka leitarorð sem notandinn hefur slegið inn.

Gerum ráð fyrir að það séu `N` orð á eftir orðaskiptingunni. Þegar niðurstöðum er skilað verða fyrst skilaðar niðurstöðum sem innihalda öll leitarorð og síðan verða niðurstöður sem innihalda `N-1` , `N-2` ,..., `1` leitarorð skilað.

Leitarniðurstöðurnar sem birtast fyrst tryggja nákvæmni fyrirspurnarinnar og niðurstöðurnar sem hlaðnar eru í kjölfarið (smelltu á hlaða meira hnappinn) tryggja innköllunarhlutfallið.

![](https://p.3ti.site/1727684564.avif)

## Hlaða Á Eftirspurn

Til að bæta svarhraðann notar leitin `yield` rafalinn til að innleiða hleðslu á eftirspurn og skilar `limit` sinn sem spurt er um niðurstöðu.

Athugaðu að í hvert sinn sem þú leitar aftur eftir `yield` þarftu að opna aftur fyrirspurnarfærslu upp á `IndexedDB` .

## Forskeyti Í Rauntíma Leit

Til þess að birta leitarniðurstöður á meðan notandinn er að skrifa, til dæmis, þegar `wor` er slegið inn, birtast orð með forskeyti `wor` eins og `words` og `work` .

![](https://p.3ti.site/1727684944.avif)

Leitarkjarninn mun nota `prefix` töfluna fyrir síðasta orðið eftir orðaskiptingu til að finna öll orð með forskeytinu og leita í röð.

Anti-shake aðgerð `debounce` er einnig notuð í framenda samskiptum (útfærð sem hér segir) til að draga úr tíðni notendainntaks sem kallar fram leit og draga úr magni útreikninga.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Í Boði Án Nettengingar

Vísitaflan geymir ekki upprunalega textann, aðeins orðin, sem dregur úr geymsluplássi.

Til að auðkenna leitarniðurstöður þarf að endurhlaða upprunalega textann og samsvörun `service worker` getur komið í veg fyrir endurteknar netbeiðnir.

Á sama tíma, vegna þess að `service worker` vistar allar greinar, þegar notandinn hefur framkvæmt leit, er öll vefsíðan, þar á meðal leitin, aðgengileg án nettengingar.

## Sýna Fínstillingu Á MarkDown Skjölum

Hrein framhliðarleitarlausn `i18n.site` er fínstillt fyrir `MarkDown` skjöl.

Þegar leitarniðurstöður eru sýndar mun nafn kaflans birtast og kaflanum verður flakkað þegar smellt er á hann.

![](https://p.3ti.site/1727686552.avif)

## Tekið Saman

Snúin heildartextaleit útfærð eingöngu á framendanum, með hröðum viðbrögðum og engin þörf á netþjóni.

Það er mjög hentugur fyrir litlar og meðalstórar vefsíður eins og skjöl og persónuleg blogg.