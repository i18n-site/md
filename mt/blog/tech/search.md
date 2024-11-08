---

brief: |
  i18n.site issa jappoġġja t-tfittxija full-test mingħajr server.

  Dan l-artikolu jintroduċi l-implimentazzjoni ta 'teknoloġija ta' tfittxija ta 'test sħiħ ta' quddiem pur, inkluż indiċi invertit mibni minn IndexedDB, tfittxija ta 'prefiss, ottimizzazzjoni tas-segmentazzjoni tal-kliem u appoġġ b'ħafna lingwi.

  Meta mqabbel ma 'soluzzjonijiet eżistenti, it-tfittxija ta' test sħiħ front-end pura ta 'i18n.site hija ta' daqs żgħir u veloċi, adattata għal websajts żgħar u ta 'daqs medju bħal dokumenti u blogs, u hija disponibbli offline.

---

# Tfittxija Ta' Test Sħiħ Maqlub Ta' Quddiem Pur

## Sekwenza

Wara diversi ġimgħat ta' żvilupp, [i18n.site](//i18n.site) (għodda ta' bini & ' websajts purament statika markdown multilingual translation) issa tappoġġja tfittxija ta' test sħiħ ta' quddiem.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Dan l-artikolu se jaqsam l-implimentazzjoni teknika ta ' `i18n.site` tfittxija full-test ta' quddiem [i18n.site](//i18n.site) tesperjenza l-effett tat-tfittxija.

Kodiċi open : [Fittex kernel](//github.com/i18n-site/ie/tree/main/qy) / [interface interattiv](//github.com/i18n-site/plugin/tree/main/qy)

## Reviżjoni Ta 'soluzzjonijiet Ta' Tfittxija Full-Test Mingħajr Server

Għal websajts ta 'daqs żgħir u medju purament statiċi bħal dokumenti/blogs personali, il-bini ta' backend ta 'tfittxija ta' test sħiħ mibni waħdu huwa tqil wisq, u tfittxija ta 'test sħiħ mingħajr servizz hija l-aktar għażla komuni.

Is-soluzzjonijiet tat-tiftix tat-test sħiħ mingħajr server jaqgħu f'żewġ kategoriji wesgħin:

L-ewwel, fornituri ta' servizzi ta' tfittxija ta' partijiet terzi [algolia.com](//algolia.com) jipprovdu komponenti front-end għal tfittxija full-test.

Servizzi bħal dawn jeħtieġu ħlas ibbażat fuq il-volum tat-tiftix, u ħafna drabi ma jkunux disponibbli għall-utenti fiċ-Ċina kontinentali minħabba kwistjonijiet bħall-konformità tal-websajt.

Ma jistax jintuża offline, ma jistax jintuża fuq l-intranet, u għandu limitazzjonijiet kbar. Dan l-artikolu ma jiddiskutix ħafna.

It-tieni hija purament tfittxija full-test front-end.

Fil-preżent, it-tfittxijiet ta' test sħiħ ta' front-end puri jinkludu [lunrjs](//lunrjs.com) u [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (ibbażat fuq żvilupp sekondarju `lunrjs` ).

`lunrjs` Hemm żewġ modi kif tibni indiċi, u t-tnejn għandhom il-problemi tagħhom.

1. Fajls tal-indiċi mibnija minn qabel

   Minħabba li l-indiċi fih kliem mid-dokumenti kollha, huwa kbir fid-daqs.
   Kull meta dokument jiġi miżjud jew modifikat, għandu jittella’ fajl ta’ indiċi ġdid.
   Se żżid il-ħin ta 'stennija tal-utent u tikkonsma ħafna bandwidth.

2. Tagħbija dokumenti u ibni indiċi fuq il-fly

   Il-bini ta 'indiċi huwa kompitu intensiv fil-komputazzjoni. Il-bini mill-ġdid tal-indiċi kull darba li taċċessa se tikkawża dewmien ovvju u esperjenza fqira tal-utent.

---

Minbarra `lunrjs` , hemm xi soluzzjonijiet oħra ta' tfittxija b'test sħiħ, bħal :

[fusejs](//www.fusejs.io) , ikkalkula x-xebh bejn is-sekwenzi biex tfittex.

Il-prestazzjoni ta 'din is-soluzzjoni hija estremament fqira u ma tistax tintuża għal tfittxija bit-test sħiħ (ara [Fuse.js Mistoqsija twila tieħu aktar minn 10 sekondi, kif tottimizzaha?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) , uża l-filtru Bloom biex tfittex, ma tistax tintuża għat-tfittxija tal-prefiss (per eżempju, daħħal `goo` , fittex `good` , `google` ), u ma tistax tikseb effett ta' tlestija awtomatika simili.

Minħabba n-nuqqasijiet tas-soluzzjonijiet eżistenti, `i18n.site` żviluppat soluzzjoni pura ġdida ta 'tfittxija ta' test sħiħ ta 'quddiem, li għandha l-karatteristiċi li ġejjin :

1. Jappoġġja tfittxija b'ħafna lingwi u huwa żgħir fid-daqs Id-daqs tal-qalba tat-tfittxija wara l-ippakkjar `gzip` huwa `6.9KB` (għal tqabbil, id-daqs ta ' `lunrjs` huwa `25KB` ).
1. Ibni indiċi maqlub ibbażat fuq `indexedb` , li jieħu inqas memorja u huwa mgħaġġel.
1. Meta d-dokumenti jiġu miżjuda/modifikati, id-dokumenti miżjuda jew modifikati biss jiġu indiċjati mill-ġdid, u jitnaqqas l-ammont ta’ kalkoli.
1. Jappoġġja t-tfittxija tal-prefiss u jista 'juri r-riżultati tat-tfittxija f'ħin reali waqt li l-utent ikun qed ittajpja.
1. Disponibbli offline

Hawn taħt, `i18n.site` dettalji ta' implimentazzjoni teknika se jiġu introdotti fid-dettall.

## Segmentazzjoni Tal-Kliem Multilingwi

Is-segmentazzjoni tal-kliem tuża s-segmentazzjoni tal-kelma nattiva tal-browser `Intl.Segmenter` , u l-brawżers mainstream kollha jappoġġjaw din l-interface.

![](//p.3ti.site/1727667759.avif)

Il-kodiċi tas-segmentazzjoni tal-kelma `coffeescript` huwa kif ġej

```coffee
SEG = new Intl.Segmenter 0, granularity: "word"

seg = (txt) =>
  r = []
  for {segment} from SEG.segment(txt)
    for i from segment.split('.')
      i = i.trim()
      if i and !'| `'.includes(i) and !/\p{P}/u.test(i)
        r.push i
  r

export default seg

export segqy = (q) =>
  seg q.toLocaleLowerCase()
```

fi:

* `/\p{P}/` hija espressjoni regolari li taqbel ma' marki ta' punteġġjatura Is-simboli speċifiċi ta' tqabbil jinkludu: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~. `.</p><ul><li> `split('.')` huwa minħabba li s-segmentazzjoni tal-kelma tal-brawżer `Firefox` ma tqassamx `. ` .</li>


## Bini Ta' Indiċi

Inħolqu 5 tabelli tal-ħażna tal-oġġetti `IndexedDB` :

* `word` : id -
* `doc` : id - Dokument url - Numru tal-verżjoni tad-dokument
* `docWord` : Array tad-dokument id - kelma id
* `prefix` : Array tal-prefiss - kelma id
* `rindex` : id - Dokument id : Array ta' numri tal-linja

Għaddi l-firxa tad-dokument `url` u n-numru tal-verżjoni `ver` , u fittex jekk id-dokument jeżistix fit-tabella `doc` Jekk ma jeżistix, oħloq indiċi maqlub. Fl-istess ħin, neħħi l-indiċi maqlub għal dawk id-dokumenti li ma ġewx mgħoddija.

B'dan il-mod, jista 'jinkiseb indiċjar inkrementali u l-ammont ta' kalkolu jitnaqqas.

Fl-interazzjoni ta 'quddiem, il-bar tal-progress tat-tagħbija tal-indiċi tista' tintwera [biex](//juejin.cn/post/7413586285954154522) tevita d-dewmien meta t-tagħbija għall-ewwel darba Ara "Bar tal-Progress b'Animazzjoni, Ibbażat fuq Implimentazzjoni css Pura" [Ingliż](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / progress + .

### IndexedDB Kitba Konkorrenti Għolja

Il-proġett huwa [idb](//www.npmjs.com/package/idb) ibbażat fuq l-inkapsulament mhux sinkroniku ta ' IndexedDB

IndexedDB jaqra u jikteb huma asinkroniċi. Meta jinħoloq indiċi, id-dokumenti se jitgħabbew fl-istess ħin biex jinħoloq l-indiċi.

Sabiex tevita telf parzjali tad-dejta ikkawżat minn kitba kompetittiva, tista 'tirreferi għall-kodiċi `coffeescript` hawn taħt u żżid cache `ing` bejn il-qari u l-kitba biex tinterċetta l-kitbiet li jikkompetu.

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

## Preċiżjoni U Recall

It-tfittxija l-ewwel se segmenta l-kliem kjavi mdaħħla mill-utent.

Assumi li hemm `N` kliem wara s-segmentazzjoni tal-kelma Meta tirritorna r-riżultati, l-ewwel jintbagħtu r-riżultati li fihom il-kliem kjavi kollha, u mbagħad jintbagħtu r-riżultati li fihom `N-1` , `N-2` ,..., `1` kliem prinċipali.

Ir-riżultati tat-tfittxija murija l-ewwel jiżguraw l-eżattezza tal-mistoqsija, u r-riżultati mgħobbija sussegwentement (ikklikkja l-buttuna tat-tagħbija aktar) jiżguraw ir-rata ta 'recall.

![](//p.3ti.site/1727684564.avif)

## Tagħbija Fuq Talba

Sabiex ittejjeb il-veloċità tar-rispons, it-tfittxija tuża l-ġeneratur `yield` biex timplimenta tagħbija fuq talba, u tirritorna `limit` darba li jiġi mistoqsi riżultat.

Innota li kull darba li terġa' tfittex wara `yield` , trid terġa' tiftaħ transazzjoni ta' mistoqsija ta' `IndexedDB` .

## Prefiss Tfittxija F'ħin Reali

Sabiex jintwerew ir-riżultati tat-tfittxija waqt li l-utent ikun qed ittajpja, pereżempju, meta tiddaħħal `wor` , jintwerew kliem prefissati bi `wor` bħal `words` u `work` .

![](//p.3ti.site/1727684944.avif)

Il-qalba tat-tfittxija se tuża t-tabella `prefix` għall-aħħar kelma wara s-segmentazzjoni tal-kelma biex issib il-kliem kollu prefiss magħha, u tfittex f'sekwenza.

Il-funzjoni ta 'kontra t-ħawwad `debounce` tintuża wkoll fl-interazzjoni ta' quddiem (implimentata kif ġej) biex tnaqqas il-frekwenza tal-input tal-utent li tiskatta t-tfittxijiet u tnaqqas l-ammont ta 'kalkolu.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Disponibbli Offline

It-tabella tal-indiċi ma taħżinx it-test oriġinali, il-kliem biss, li jnaqqas l-ammont ta 'ħażna.

L-enfasi tar-riżultati tat-tfittxija teħtieġ tagħbija mill-ġdid tat-test oriġinali, u t-tqabbil ta `service worker` jista' jevita talbiet ripetuti tan-netwerk.

Fl-istess ħin, minħabba li `service worker` jaħbat l-artikoli kollha, ladarba l-utent iwettaq tfittxija, il-websajt kollha, inkluża t-tfittxija, tkun disponibbli offline.

## Uri L-Ottimizzazzjoni Tad-Dokumenti MarkDown

Is-soluzzjoni pura ta' tfittxija ta' quddiem ta' `i18n.site` hija ottimizzata għal dokumenti `MarkDown` .

Meta turi r-riżultati tat-tfittxija, jintwera l-isem tal-kapitolu u l-kapitolu jiġi navigat meta jiġi kklikkjat.

![](//p.3ti.site/1727686552.avif)

## Agħti Fil-Qosor

Tiftix maqlub bit-test sħiħ implimentat purament fuq in-naħa ta' quddiem, l-ebda server meħtieġ. Huwa adattat ħafna għal websajts żgħar u ta 'daqs medju bħal dokumenti u blogs personali.

`i18n.site` Tfittxija ta 'quddiem pura żviluppata minn sors miftuħ, żgħir fid-daqs u rispons veloċi, issolvi n-nuqqasijiet tat-tfittxija tat-test sħiħ ta' quddiem pura attwali u tipprovdi esperjenza aħjar għall-utent.