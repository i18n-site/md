---

brief: |
  i-i18n.site manje isekela ukusesha kombhalo ogcwele okungenasiphakeli.

  Lesi sihloko sethula ukuqaliswa kobuchwepheshe bokusesha bombhalo ophelele ophelele osekupheleni, okuhlanganisa inkomba ehlanekezelwe eyakhiwe yi-IndexedDB, ukusesha kwesiqalo, ukuthuthukiswa kwesegmentation yamagama nokusekelwa kwezilimi eziningi.

  Uma kuqhathaniswa nezixazululo ezikhona, ukusesha kwe-i18n.site kombhalo ophelele okumsulwa kuncane ngosayizi futhi kuyashesha, kufanelekile kumawebhusayithi amancane namaphakathi afana nemibhalo namabhulogi, futhi kuyatholakala ungaxhunyiwe ku-inthanethi.

---

# Usesho Lombhalo Ogcwele Omsulwa Ophelele Ohlanekezelwe

## Ukulandelana

Ngemva kwamaviki ambalwa okuthuthuka, [i18n.site](//i18n.site) (ithuluzi lokwakha & elimile markdown multilingualtranslation) manje lisekela ukusesha kombhalo ophelele okugcwele.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Lesi sihloko sizokwabelana ngokusetshenziswa kobuchwepheshe bosesho oluphelele lombhalo ophelele ongu `i18n.site` [i18n.site](//i18n.site) ukuze uthole umphumela wosesho.

Ikhodi yomthombo ovulekile : [Sesha](//github.com/i18n-site/ie/tree/main/qy) isikhombimsebenzisi esibonakalayo / [esisebenzayo](//github.com/i18n-site/plugin/tree/main/qy)

## Ukubuyekezwa Kwezixazululo Zosesho Lombhalo Ogcwele Ongenasiphakeli

Kumawebhusayithi amancane naphakathi nendawo amile njengamadokhumenti/amabhulogi omuntu siqu, ukwakha isizinda sokusesha sombhalo ogcwele esakhelwe wena kusinda kakhulu, futhi ukusesha umbhalo ogcwele okungenasevisi kuyisinqumo esivame kakhulu.

Izixazululo zokusesha umbhalo ogcwele ezingenaseva ziwela ezigabeni ezimbili ezibanzi:

Okokuqala, okufanayo [algolia.com](//algolia.com)

Amasevisi anjalo adinga inkokhelo esekelwe kumthamo wokusesha, futhi ngokuvamile awatholakali kubasebenzisi base-Mainland China ngenxa yezinkinga ezifana nokuthobela iwebhusayithi.

Ngeke isetshenziswe ungaxhunyiwe ku-inthanethi, ayikwazi ukusetshenziswa ku-intranethi, futhi inemikhawulo emikhulu. Lesi sihloko asixoxi okuningi.

Okwesibili usesho lombhalo ogcwele osekupheleni.

Njengamanje, usesho olujwayelekile `lunrjs` ogcwele ophelele [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) luhlanganisa [lunrjs](//lunrjs.com)

`lunrjs` Kunezindlela ezimbili zokwakha izinkomba, futhi zombili zinezinkinga zazo.

1. Amafayela enkomba akhiwe ngaphambilini

   Ngenxa yokuthi inkomba iqukethe amagama avela kuyo yonke imibhalo, inkulu ngosayizi.
   Noma nini lapho idokhumenti yengezwa noma ilungiswa, ifayela elisha lenkomba kufanele lilayishwe.
   Kuzokwandisa isikhathi sokulinda somsebenzisi futhi kudle umkhawulokudonsa omningi.

2. Layisha amadokhumenti futhi wakhe izinkomba ngokuhamba kwesikhathi

   Ukwakha inkomba kuwumsebenzi onzima wekhompyutha Ukwakha kabusha inkomba njalo uma ufinyelela kuyo kuzobangela ukubambezeleka okusobala kanye nolwazi olubi lomsebenzisi.

---

Ngokungeziwe kokuthi `lunrjs` , kunezinye izixazululo zokusesha zombhalo ogcwele, njengokuthi :

[fusejs](//www.fusejs.io) , bala ukufana phakathi kwezintambo zokusesha.

Ukusebenza kwalesi sixazululo kumbi kakhulu futhi akukwazi ukusetshenziselwa ukusesha umbhalo ogcwele (bheka [Fuse.js Umbuzo omude uthatha ngaphezu kwamasekhondi angu- 10 , ungawulungiselela kanjani?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) sebenzisa isihlungi se-Bloom ukusesha, asikwazi ukusetshenziselwa ukusesha isiqalo (isibonelo, faka `goo` , sesha `good` , `google` ), futhi awukwazi ukuzuza umphumela ofanayo wokuqedela ozenzakalelayo.

Ngenxa yokushiyeka kwezixazululo ezikhona, `i18n.site` uthuthukise isixazululo esisha sombhalo ophelele esihlanzekile, esinezici ezilandelayo :

1. Isekela ukusesha kwezilimi eziningi futhi incane ngosayizi Usayizi we-kernel yokusesha ngemuva kokupakishwa `gzip` ngu- `6.9KB` (uma kuqhathaniswa, usayizi ka- `lunrjs` ngu- `25KB` )
1. Yakha inkomba ehlanekezelwe ngokusekelwe ku `indexedb` , ethatha inkumbulo encane futhi esheshayo.
1. Lapho amadokhumenti engezwa/elungiswa, imibhalo eyengeziwe noma eshintshiwe kuphela ekhonjiswa kabusha, okunciphisa inani lezibalo.
1. Isekela ukusesha kwesiqalo futhi ingabonisa imiphumela yosesho ngesikhathi sangempela ngenkathi umsebenzisi ebhala.
1. Itholakala ungaxhunyiwe ku-inthanethi

Ngezansi, imininingwane engu `i18n.site` yokuqalisa ukusebenza izokwethulwa ngokuningiliziwe.

## Ukuhlukaniswa Kwamagama Ngezilimi Eziningi

Ukuhlukaniswa kwegama kusebenzisa ingxenye yegama lesiphequluli elingu `Intl.Segmenter` , futhi zonke iziphequluli ezivamile zisekela lesi sixhumanisi.

![](//p.3ti.site/1727667759.avif)

Igama elithi segmentation `coffeescript` code limi kanje

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

ku:

* `/\p{P}/` isisho esivamile esihambisana nezimpawu zokubhala eziqondile zifaka: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } . `.</p><ul><li> `split('.')` kungenxa yokuthi ukuhlukaniswa kwegama lesiphequluli esi `Firefox` akunayo ingxenye yesi `. ` .</li>


## Isakhiwo Senkomba

5 amathebula okugcina izinto adalwe ngo `IndexedDB` :

* `word` : id -
* `doc` : id - Idokhumenti url - Inombolo yenguqulo
* `docWord` : lwedokhumenti id - igama id
* `prefix` : lwesiqalo - igama id
* `rindex` : IZwi id - Idokhumenti id : Uhlu lwezinombolo zomugqa

Dlula ohlwini lwedokhumenti `url` kanye nenombolo yenguqulo `ver` , bese ucinga ukuthi ingabe idokhumenti ikhona yini kuthebula lesi- `doc` Uma ingekho, yakha inkomba ehlanekezelwe. Ngesikhathi esifanayo, susa inkomba ehlanekezelwe yalawo madokhumenti angazange adluliselwe kuwo.

Ngale ndlela, ukukhomba okukhuphukayo kungafinyelelwa futhi nenani lokubala liyancishiswa.

Ekuhlanganyeleni okungaphambili, ibha yenqubekelaphambili yokulayisha yenkomba ingaboniswa ukuze kugwenywe ukunensa lapho kulayishwa okokuqala ngqa Bona "Ibha Yenqubekelaphambili Enopopayi, Isekelwe Kokukodwa progress + Pure css Implementation" [English](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chinese](//juejin.cn/post/7413586285954154522) .

### I-IndexedDB Yokubhala Okuphezulu Ngesikhathi Esisodwa

Iphrojekthi [idb](//www.npmjs.com/package/idb) ngokusekelwe ekuhlanganisweni kwe-asynchronous IndexedDB

I-IndexedDB ifunda futhi ibhale asynchronous. Lapho udala inkomba, amadokhumenti azolayishwa kanyekanye ukuze kwakhiwe inkomba.

Ukuze ugweme ukulahleka kwedatha okuyingxenye okubangelwa ukubhala ngokuncintisana, ungabheka ikhodi `coffeescript` engezansi bese wengeza inqolobane `ing` phakathi kokufunda nokubhala ukuze unqande ukubhala okuncintisanayo.

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

## Ukunemba Nokukhumbula

Usesho luzoqala luhlukanise amagama angukhiye afakwe umsebenzisi.

Cabanga ukuthi kunamagama angu `N` ngemva kwesegimenti yamagama Uma ubuyisela imiphumela, imiphumela equkethe wonke amagama angukhiye izobuyiswa kuqala, bese kulandela imiphumela equkethe `N-1` , `N-2` ,..., `1` amagama angukhiye.

Imiphumela yosesho eboniswa kuqala iqinisekisa ukunemba kombuzo, futhi imiphumela elayishwa kamuva (chofoza inkinobho yokulayisha ngaphezulu) iqinisekisa izinga lokukhumbula.

![](//p.3ti.site/1727684564.avif)

## Layisha Ngokufunwa

Ukuze kuthuthukiswe isivinini sokuphendula, usesho lusebenzisa ijeneretha `yield` ukuze luqalise ukulayisha okudingekayo, futhi lubuyisela `limit` uma umphumela ubuzwa.

Qaphela ukuthi isikhathi ngasinye uma usesha futhi ngemva kuka `yield` , udinga ukuvula kabusha umsebenzi woku- `IndexedDB` .

## Isiqalo Sokusesha Kwesikhathi Sangempela

Ukuze ubonise imiphumela yosesho ngenkathi umsebenzisi ebhala, isibonelo, uma kufakwa `wor` , amagama aqanjwe ngo `wor` njengo `words` no `work` ayavezwa.

![](//p.3ti.site/1727684944.avif)

I-kernel yosesho izosebenzisa ithebula `prefix` legama lokugcina ngemva kokuhlukaniswa kwegama ukuze kutholwe wonke amagama aqanjwe ngawo, bese kusesha ngokulandelana.

Umsebenzi we-anti-shake ongu `debounce` nawo usetshenziswa ekuxhumaneni okungaphambili (kusetshenziswe ngendlela elandelayo) ukuze kuncishiswe imvamisa yokufaka komsebenzisi okubangela usesho nokunciphisa inani lokubala.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Itholakala Ungaxhunyiwe Ku-Inthanethi

Ithebula lenkomba aligcini umbhalo wokuqala, amagama kuphela, okunciphisa inani lokulondoloza.

Ukugqamisa imiphumela yosesho kudinga ukuphinda kulayishwe umbhalo wokuqala, futhi ukufanisa `service worker` kungagwema izicelo eziphindaphindiwe zenethiwekhi.

Ngesikhathi esifanayo, ngenxa yokuthi `service worker` ugcina zonke iziqephu zendatshana, uma umsebenzisi esesheshile, yonke iwebhusayithi, okuhlanganisa nosesho, iyatholakala ungaxhunyiwe ku-inthanethi.

## Bonisa Ukwenza Kahle Kwamadokhumenti E-MarkDown

`i18n.site` 's isixazululo esihlanzekile sokusesha senzelwe amadokhumenti `MarkDown` .

Uma ubonisa imiphumela yosesho, igama lesahluko lizovezwa futhi isahluko sizozulazulwa lapho ichofozwa.

![](//p.3ti.site/1727686552.avif)

## Fingqa

Usesho lombhalo ogcwele ohlanekezelwe lusetshenziswe ekuqaleni kuphela, asikho iseva edingekayo. Ifaneleka kakhulu kumawebhusayithi amancane naphakathi afana nemibhalo namabhulogi omuntu siqu.

`i18n.site` Umthombo ovulekile usesho lwangaphambili oluhlanzekile, oluncane ngosayizi nokuphendula ngokushesha, luxazulula ukushiyeka kosesho olugcwele lwamanje lwangaphambili oluphelele futhi lunikeza ulwazi olungcono lomsebenzisi.