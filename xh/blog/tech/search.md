---

brief: |
  i-i18n.site ngoku ixhasa uphendlo lokubhaliweyo okupheleleyo olungenamncedisi.

  Eli nqaku lizisa ukuphunyezwa kobuchwephesha obucocekileyo be-front-end-full-text search, kubandakanywa ne-inverted index eyakhiwe yi-IndexedDB, ukukhangela kwe-prefix, ukusetyenziswa kwe-segmentation yegama kunye nenkxaso yeelwimi ezininzi.

  Xa kuthelekiswa nezisombululo ezikhoyo, uphendlo olupheleleyo lwe-i18n.site olucwengileyo lwangaphambili luncinci ngobukhulu kwaye lukhawuleza, lufanelekile kwiiwebhusayithi ezincinci kunye neziphakathi ezifana namaxwebhu kunye neeblogi, kwaye zifumaneka ngaphandle kweintanethi.

---

# Uphendlo Olusulungekileyo Lwangaphambili Oluguqulelwe Ngokupheleleyo

## Ulandelelwano

markdown kweeveki & zophuhliso, [i18n.site](//i18n.site)

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Eli nqaku liza kwabelana ngokuphunyezwa kobugcisa be [i18n.site](//i18n.site) `i18n.site` ecocekileyo yokukhangela okubhaliweyo okugcweleyo.

Ikhowudi yomthombo ovulekileyo : [i-kernel](//github.com/i18n-site/ie/tree/main/qy) / [interface esebenzayo](//github.com/i18n-site/plugin/tree/main/qy)

## Uphononongo Lwezisombululo Zokukhangela Ezipheleleyo Ezingenaseva

Kwiiwebhusayithi ezincinci neziphakathi ezizinzileyo ezinje ngamaxwebhu/iiblogi zobuqu, ukwakha i-backend yokukhangela egcweleyo ezakhelweyo inzima kakhulu, kwaye ukukhangela okubhaliweyo okupheleleyo okungenankonzo lolona khetho luqhelekileyo.

Izisombululo zokukhangela okubhaliweyo okupheleleyo ngaphandle kweseva ziwela kwiindidi ezimbini ezibanzi:

Okokuqala, ezifanayo [algolia.com](//algolia.com)

Ezo nkonzo zifuna intlawulo esekelwe kumthamo wokukhangela, kwaye zihlala zingafumaneki kubasebenzisi belizwe laseTshayina ngenxa yemicimbi efana nokuthotyelwa kwewebhusayithi.

Ayinakusetyenziswa ngaphandle kweintanethi, ayinakusetyenziswa kwi-intranethi, kwaye inemida emikhulu. Eli nqaku alithethi kakhulu.

Okwesibini luphendlo olusulungekileyo lwangaphambili olupheleleyo.

Okwangoku, uphendlo olupheleleyo lwesiphelo esipheleleyo [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) `lunrjs` [lunrjs](//lunrjs.com)

`lunrjs` Kukho iindlela ezimbini zokwakha izalathisi, kwaye zombini zineengxaki zazo.

1. Iifayile zesalathiso ezakhiwe kwangaphambili

   Ngenxa yokuba isalathiso siqulethe amagama avela kuwo onke amaxwebhu, sikhulu ngobukhulu.
   Nanini na xa uxwebhu longezwa okanye lulungiswa, ifayile entsha yesalathiso kufuneka ilayishwe.
   Iya kwandisa ixesha lokulinda lomsebenzisi kwaye idle i-bandwidth eninzi.

2. Layisha amaxwebhu kwaye wakhe izalathisi kubhabho

   Ukwakha isalathiso ngumsebenzi onzima wekhompyutha Ukwakha kwakhona isalathiso ngalo lonke ixesha ufikelela kuso kuya kubangela i-lags ebonakalayo kunye namava omsebenzisi angalunganga.

---

Ukongeza ku `lunrjs` , kukho ezinye izisombululo zokukhangela okubhaliweyo okugcweleyo, njenge :

[fusejs](//www.fusejs.io) , bala ukufana phakathi kwemitya ukukhangela.

Ukusebenza kwesi sisombululo kumbi kakhulu kwaye akunakusetyenziselwa ukukhangela okubhaliweyo okugcweleyo (bona [Fuse.js Umbuzo omde uthatha ngaphezulu kwe 10 imizuzwana, ungenziwa njani?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) sebenzisa i-Bloom filter ukukhangela, ayinakusetyenziselwa uphendlo lwesimaphambili (umzekelo, ngenisa `goo` , khangela `good` , `google` ), kwaye awukwazi ukufikelela kwisiphumo esizenzekelayo esizenzekelayo.

Ngenxa yokungaphumeleli kwezisombululo ezikhoyo, `i18n.site` yavelisa isisombululo esitsha esicocekileyo esipheleleyo sesicatshulwa esipheleleyo, esinezi mpawu zilandelayo :

1. Ixhasa uphando lweelwimi ezininzi kwaye incinci ngobukhulu Ubungakanani bekernel yokukhangela emva kokupakishwa `gzip` yi- `6.9KB` (ukuthelekisa, ubungakanani be `lunrjs` yi- `25KB` )
1. Yakha isalathiso esiguqulweyo esekwe kwi `indexedb` , ethatha imemori encinci kwaye iyakhawuleza.
1. Xa amaxwebhu ongezwa / aguqulwa, kuphela amaxwebhu adityanisiweyo okanye atshintshiweyo aphinde afakwe kwakhona, ukunciphisa inani lokubala.
1. Ixhasa uphendlo lwesimaphambili kwaye ingabonisa iziphumo zophendlo ngexesha lokwenyani ngelixa umsebenzisi echwetheza.
1. Iyafumaneka ngaphandle kweintanethi

Ngezantsi, `i18n.site` iinkcukacha zokuphunyezwa kobugcisa ziya kwaziswa ngokubanzi.

## Ukwahlulahlula Amagama Kwiilwimi Ezininzi

Ulwahlulo lwamagama lusebenzisa ulwahlulo lwegama lesikhangeli `Intl.Segmenter` , kwaye zonke iibhrawuza eziqhelekileyo ziyaluxhasa olujongano.

![](//p.3ti.site/1727667759.avif)

Igama elithi segmentation `coffeescript` ikhowudi imi ngolu hlobo lulandelayo

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

kwi:

* `/\p{P}/` yintetho eqhelekileyo ehambelana namanqaku obhalo athile aquka: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } . `.</p><ul><li> `split('.')` kungenxa yokuba i `Firefox` i-browser ye-segmentation yegama ayinayo i-segment yesi `. ` .</li>


## Isakhiwo Sesalathisi

Iitafile ze-5 zokugcina izinto zenziwe kwi `IndexedDB` :

* `word` amazwi : id -
* `doc` : id - Uxwebhu url - inombolo yoguqulelo loxwebhu
* `docWord` Uluhlu : id - igama id
* `prefix` : lwesimaphambili - igama id
* `rindex` : Igama id - Uxwebhu id : Uluhlu lwamanani emigca

Dlulisa uluhlu loxwebhu `url` kunye nenombolo yoguqulelo `ver` , kwaye ukhangele ukuba ngaba uxwebhu lukhona kwitheyibhile `doc` Ukuba alukho, yenza isalathisi esiguqulweyo. Kwangaxeshanye, susa isalathiso esiguqulweyo saloo maxwebhu angagqithiswanga kuwo.

Ngale ndlela, i-incremental indexing inokufezekiswa kwaye inani lokubala liyancitshiswa.

Kwintsebenziswano yangaphambili, ibar yenkqubela phambili yokulayisha isalathisi ingabonakaliswa ukunqanda i-lag xa ilayishwa okokuqala ngqa Bona "Ibha yenkqubela phambili kunye ne-animation, isekelwe kwi-Single progress + Pure css Implementation" [IsiNgesi](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chinese](//juejin.cn/post/7413586285954154522) .

### I-IndexedDB Ephezulu Yokubhala Ngaxeshanye

Iprojekthi [idb](//www.npmjs.com/package/idb) ngokusekelwe kwi-asynchronous encapsulation ye IndexedDB

I-IndexedDB ifunda kwaye ibhala ayihambelaniyo. Xa usenza isalathisi, amaxwebhu aya kulayishwa ngaxeshanye ukwenza isalathisi.

Ukuze ugweme ukulahleka kwedatha inxalenye ebangelwa kukubhala ngokukhuphisanayo, unokubhekisela kwikhowudi `coffeescript` engezantsi kwaye ungeze i-cache `ing` phakathi kokufunda nokubhala ukuze uthintele ukubhala okukhuphisanayo.

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

## Ukuchaneka Kunye nokuKhumbula

Ukukhangela kuya kuqala ukwahlula amagama angundoqo afakwe ngumsebenzisi.

Cinga ukuba kukho amagama `N` emva kokwahlulwa kwamagama Xa ubuyisela iziphumo, iziphumo eziqulethe onke amagama angundoqo ziya kubuyiselwa kuqala, kwaye iziphumo eziqulathe `N-1` , `N-2` ,..., `1` amagama angundoqo aya kubuyiselwa.

Iziphumo zokukhangela ezibonisiweyo kuqala ziqinisekisa ukuchaneka kombuzo, kwaye iziphumo zilayishwe emva koko (cofa iqhosha lomthwalo ongaphezulu) uqinisekise izinga lokukhumbula.

![](//p.3ti.site/1727684564.avif)

## Layisha Ngokwemfuno

Ukuze kuphuculwe isantya sokuphendula, uphendlo lusebenzisa i `yield` generator ukuphumeza ukulayisha okufunekayo, kwaye ibuyisela `limit` xa isiphumo sibuzwa.

Qaphela ukuba ngalo lonke ixesha ukhangela kwakhona emva kwe `yield` , kufuneka uphinde uvule itransekshini yombuzo we `IndexedDB` .

## Uphendlo Lwexesha Lokwenyani Isimaphambili

Ukuze ubonise iziphumo zophando ngelixa umsebenzisi echwetheza, umzekelo, xa `wor` efakiwe, amagama afakwe kwi `wor` njengo `words` kunye no `work` ayaboniswa.

![](//p.3ti.site/1727684944.avif)

I-kernel yokukhangela izakusebenzisa itheyibhile `prefix` yegama lokugqibela emva kokwahlulwa kwegama ukufumana onke amagama afakwe ngaphambili kuyo, kunye nokukhangela ngokulandelelana.

Umsebenzi we-Anti-shake `debounce` isetyenziselwa ukusebenzisana kwangaphambili (iphunyezwe ngolu hlobo lulandelayo) ukunciphisa i-frequency yegalelo lomsebenzisi elibangela ukukhangela kunye nokunciphisa inani lokubala.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Iyafumaneka Ngaphandle Kweintanethi

Itheyibhile yesalathisi ayigcini isicatshulwa sokuqala, kuphela amagama, okunciphisa inani lokugcinwa.

Ukugqamisa iziphumo zophendlo kufuna ukulayishwa kwakhona kombhalo wokuqala, kwaye ukuthelekisa u `service worker` kunokunqanda izicelo eziphindaphindiweyo zenethiwekhi.

Ngexesha elifanayo, kuba `service worker` igcina onke amanqaku, xa umsebenzisi enze uphando, yonke iwebhusayithi, kubandakanywa nokukhangela, ifumaneka ngaphandle kweintanethi.

## Bonisa Ukwenziwa Kwamaxwebhu eMarkDown

`i18n.site` 's isisombululo sophendlo lwesiphelo esicocekileyo senzelwe amaxwebhu `MarkDown` .

Xa ubonisa iziphumo zophendlo, igama lesahluko liya kuboniswa kwaye isahluko siya kukhangelwa xa ucofa.

![](//p.3ti.site/1727686552.avif)

## Shwankathela

Uphendlo lokubhaliweyo okupheleleyo oluguqulweyo luphunyezwe ngokuchanekileyo kumphambili, akukho mncedisi ufunekayo. Ifanelekile kakhulu kwiiwebhusayithi ezincinci kunye neziphakathi ezifana namaxwebhu kunye neeblogi zomntu.

`i18n.site` Umthombo ovulekileyo oziphuhlisileyo uphendlo olusulungekileyo lwangaphambili, ubungakanani obuncinci kunye nokuphendula ngokukhawuleza, ukusombulula iintsilelo zophendlo lwangoku olusulungekileyo olupheleleyo lwangaphambili kwaye lubonelela ngamava angcono omsebenzisi.