---

brief: |
  i18n.site hadda waxay taageertaa raadinta qoraal buuxa oo bilaa server ah.

  Maqaalkani waxa uu soo bandhigayaa hirgelinta tignoolajiyada raadinta qoraal-buuxa ee hore ee saafi ah, oo ay ku jiraan tusmaynta rogan ee ay dhistay IndexedDB, horgale raadinta, hagaajinta kala qaybinta erayada iyo taageerada luqadaha badan.

  Marka la barbar dhigo xalalka jira, i18n.site's saafiga ah ee dhamaadka-dhamaadka qoraalka buuxa ee raadinta cabbirkiisu waa yar yahay oo dhakhso badan, oo ku habboon mareegaha yaryar iyo kuwa dhexdhexaadka ah sida dukumentiyada iyo blogyada, waxaana laga heli karaa offline.

---

# Raadinta Qoraalka Buuxa Ee Dhamaadka-Hore Ee Saafiga Ah

## Isku Xigxiga

Kadib dhowr toddobaad oo horumarin ah [i18n.site](//i18n.site) (qalab dhisme oo kaliya markdown & luqado badan leh) waxay hadda taageertaa raadinta qoraal-buuxa oo saafi ah.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Maqaalkani wuxuu wadaagi doonaa hirgelinta farsamada ee `i18n.site` qoraal-buuxa oo saafi ah Booqo [i18n.site](//i18n.site)

Koodhka isha furan : [raadinta kernel](//github.com/i18n-site/ie/tree/main/qy) / [is dhexgal](//github.com/i18n-site/plugin/tree/main/qy)

## Dib U Eegis Lagu Sameeyay Xalal Raadinta Qoraal Buuxa Oo Bilaa Server Ah

Kuwa yaryar iyo kuwa dhexdhexaadka ah ee shabakadaha taagan sida dukumeentiyada/bloogyada gaarka ah, dhisidda dhabarka raadinta qoraal-buuxa oo iskiis u dhisan waa mid aad u culus, iyo raadinta qoraal-buuxa oo bilaa adeeg ah ayaa ah doorashada caadiga ah.

Xalka raadinta qoraal-buuxa ee aan server-ka lahayn waxay u kala baxaan laba qaybood:

Marka hore [algolia.com](//algolia.com) kuwa la midka ah bixiyeyaasha adeegga raadinta ee dhinac saddexaad waxay bixiyaan qaybaha hore ee raadinta qoraalka buuxa.

Adeegyada noocan oo kale ah waxay u baahan yihiin lacag-bixin ku salaysan mugga raadinta, oo inta badan ma helaan isticmaalayaasha ku sugan dhul weynaha Shiinaha arrimo ay ka mid yihiin u hoggaansanaanta shabakadda.

Looma isticmaali karo offline, laguma isticmaali karo intranetka, waxayna leedahay xaddidaadyo waaweyn. Maqaalkani wax badan kama hadlayo.

Midka labaad waa raadinta qoraal buuxa oo saafi ah.

Waqtigan xaadirka ah, raadinta qoraalka-dhamaadka saafiga ah ee caadiga ah waxaa ka mid ah [lunrjs](//lunrjs.com) iyo [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (oo ku saleysan `lunrjs` horumarinta labaad).

`lunrjs` Waxaa jira laba siyaabood oo loo dhiso tusmooyinka, labaduba waxay leeyihiin dhibaatooyin iyaga u gaar ah.

1. Faylasha tusmada ee horay loo dhisay

   Sababtoo ah tusmadu waxay ka kooban yihiin erayo dhammaan dukumentiyada, waa weyn tahay cabbir ahaan.
   Mar kasta oo dukumeenti lagu daro ama wax laga beddelo, fayl tusmo cusub waa in la raro.
   Waxay kordhin doontaa wakhtiga sugitaanka isticmaaluhu waxayna cuni doontaa xaddi badan.

2. Ku shub dukumentiyada oo ku dhis tusmooyinka duulista

   Dhisidda tusmaynta waa hawl adag oo xisaabin ah mar kasta oo aad gasho waxay sababi doontaa habacsanaan muuqata iyo khibrad isticmaale oo liidata.

---

Marka lagu daro `lunrjs` , waxaa jira xalal raadin qoraal-buuxa oo kale ah, sida :

[fusejs](//www.fusejs.io) xisaabi isku ekaanshaha xargaha si loo baadho.

Waxqabadka xalkan aad buu u liitaa loomana isticmaali karo raadinta qoraal buuxa (eeg [Fuse.js Weydiinta dheer waxay qaadataa in ka badan 10 ilbiriqsi, sida loo hagaajiyo?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) isticmaal filtarrada Bloom si aad u baadho, looma isticmaali karo raadinta horgalayaasha (tusaale, geli `goo` , raadinta `good` , `google` ), mana gaadhi karto saamayn dhammaystiran oo toos ah oo la mid ah.

Sababtoo ah cilladaha xalalka jira, `i18n.site` waxay soo saartay xal raadin qoraal ah oo cusub oo saafi ah, kaas oo leh sifooyinka soo socda :

1. Waxay taageertaa raadinta luqadaha badan waana yar tahay cabbirka kernelka ka dib xirmada `gzip` waa `6.9KB` (marka la barbardhigo, cabbirka `lunrjs` waa `25KB` )
1. Samee tilmaame rogan oo ku salaysan `indexedb` , kaas oo qaada xusuusta yar oo dhakhso badan.
1. Marka dukumentiyada lagu daro/wax laga beddelo, kaliya dukumeentiyada lagu daray ama la beddelay ayaa dib-u-tusmayn lagu sameeyay, taasoo yaraynaysa tirada xisaabinta.
1. Waxay taageertaa horgalayaasha raadinta waxayna soo bandhigi kartaa natiijooyinka raadinta wakhtiga dhabta ah inta isticmaaluhu wax qorayo.
1. La heli karo offline

Hoosta, `i18n.site` faahfaahinta hirgelinta farsamada ayaa loo soo bandhigi doonaa si faahfaahsan.

## Kala Qaybinta Ereyada Luqadaha Badan

Qaybinta kelmadda waxay isticmaashaa browserka qaybtiisa asalka ah ee `Intl.Segmenter` , iyo dhammaan daalacashada caadiga ah waxay taageeraan is-dhexgalkan.

![](//p.3ti.site/1727667759.avif)

Erayga Segmentation `coffeescript` code waa sida soo socota

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

gudaha:

* `/\p{P}/` waa odhaah joogto ah oo u dhigma calaamadaha xarakaynta ee gaarka ah waxaa ka mid ah: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } `</p><ul><li> `split('.')` waa sababta oo ah `Firefox` qaybin kelmad browser ma aha qaybta `. ` .</li>


## Dhismaha Index

5 miisaska wax lagu kaydiyo ayaa lagu abuuray `IndexedDB` :

* `word` : id -
* `doc` : id - url - Numbarka nooca dukumeentiga
* `docWord` dokumenti id - id :
* `prefix` : Horgalayaasha - kelmad id
* `rindex` : id - id :

Gudb soo diyaargarowga dukumeentiga `url` iyo nooca nambarka `ver` , oo raadi in dukumeentigu ku jiro shaxda `doc` Haddii aanu jirin, samee tusmo rogan. Isla mar ahaantaana, ka saar tusaha rogan ee dukumeentiyada aan la gudbin.

Sidan, tusmaynta korodhka ayaa lagu gaari karaa waxaana la dhimi karaa qaddarka xisaabinta.

Is dhexgalka dhamaadka-dhamaadka, bar horumarka loading ee index [waa](//juejin.cn/post/7413586285954154522) la / bandhigi karaa [si](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) looga fogaado dib u dhaca marka la soo css markii ugu progress + .

### IndexedDB Qoraal Isla Socda

Mashruucu waxa [idb](//www.npmjs.com/package/idb) iyadoo lagu salaynayo isku xidhka asynchronous ee IndexedDB

IndexedDB wax akhriya oo qoraa waa isku mid. Marka la samaynayo index, dukumentiyada waa la rari doonaa si isku mid ah si loo sameeyo tusaha.

Si looga fogaado qayb ka mid ah luminta xogta ee ay keento qorista tartanka, waxaad tixraaci kartaa `coffeescript` code ee hoose oo aad ku dari kartaa `ing` kayd ah inta u dhaxaysa akhrinta iyo qorista si aad uga hortagto qorista tartanka.

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

## Saxnaanta Iyo Xusuusta

Raadinta ayaa marka hore u kala qaybin doonta ereyada muhiimka ah ee uu galo isticmaaluhu.

Ka soo qaad in ay jiraan `N` kelmadood ka dib marka la soo celiyo natiijooyinka, natiijooyinka ay ku jiraan dhammaan ereyada muhiimka ah ayaa la soo celin doonaa marka hore, ka dibna natiijooyinka ka kooban `N-1` , `N-2` ,..., `1` keywords ayaa la soo celin doonaa.

Natiijooyinka raadinta ee la soo bandhigay ayaa marka hore xaqiijiya saxsanaanta weydiinta, natiijadiina markii dambe la raray (riix batoonka dheeriga ah) hubi heerka soo celinta.

![](//p.3ti.site/1727684564.avif)

## Ku Rar Baahida

Si loo hagaajiyo xawaaraha jawaabta, goobiddu waxay isticmaashaa koronto-dhaliyaha `yield` si uu u hirgeliyo rarista baahida, oo soo noqda `limit` oo natiijada la waydiiyo.

Ogsoonow mar kasta oo aad raadiso `yield` ka dib, waxaad u baahan tahay inaad dib u furto macaamil ganacsi oo `IndexedDB` ah.

## Horgale Raadinta Waqtiga-Dhabta Ah

Si loo soo bandhigo natiijooyinka raadinta marka isticmaaluhu wax ku qorayo, tusaale ahaan, marka `wor` la geliyo, waxaa la soo bandhigayaa ereyada horgalayaasha leh `wor` sida `words` iyo `work` .

![](//p.3ti.site/1727684944.avif)

Kernel-ka raadinta wuxuu u isticmaali doonaa miiska `prefix` kelmada u danbeysa ka dib kala qaybinta kelmad si uu u helo dhammaan kelmadaha horgalayaasha ah, oo u raadi siday isku xig xigaan.

Shaqada ka-hortagga ruxitaanka `debounce` ayaa sidoo kale loo isticmaalaa isdhexgalka-dhamaadka hore (oo loo hirgeliyay sida soo socota) si loo yareeyo inta jeer ee soo-celinta isticmaale ee kicinta raadinta iyo in la yareeyo qaddarka xisaabinta.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## La Heli Karo Offline

Jaantusku ma kaydiyo qoraalka asalka ah, kaliya erayada, taas oo yaraynaysa qadarka kaydinta.

Muujinta natiijooyinka raadinta waxay u baahan tahay dib u soo dejinta qoraalkii asalka ahaa, iyo ku dhigmida `service worker` waxay ka fogaan kartaa codsiyada shabakada ee soo noqnoqda.

Isla mar ahaantaana, sababtoo ah `service worker` wuxuu kaydiyaa dhammaan maqaallada, marka isticmaaluhu sameeyo baaritaan, dhammaan mareegaha, oo ay ku jiraan raadinta, ayaa laga heli karaa offline.

## Muuji Hagaajinta Dukumeentiyada MarkDown

`i18n.site` 's saafi ah raadinta dhamaadka-dhamaadka hore ee raadinta ayaa loo hagaajiyay `MarkDown` dukumeenti.

Marka la soo bandhigo natiijooyinka raadinta, magaca cutubka ayaa la soo bandhigi doonaa oo cutubka waa la dhex mari doonaa marka la gujiyo.

![](//p.3ti.site/1727686552.avif)

## Soo Koob

Raadinta qoraal-buuxa oo rogan ayaa lagu hirgeliyay oo keliya dhinaca hore, looma baahna server. Aad bay ugu habboon tahay shabakadaha yar yar iyo kuwa dhexdhexaadka ah sida dukumentiyada iyo blogyada gaarka ah.

`i18n.site` Isha furan oo iskeed u horumarisay raadinta dhamaadka hore ee saafiga ah, cabbir yar iyo jawaab degdeg ah, waxay xallisaa cilladaha hadda jira ee dhamaadka-dhamaadka sare ee raadinta qoraalka buuxa waxayna bixisaa khibrad isticmaale oo wanaagsan.