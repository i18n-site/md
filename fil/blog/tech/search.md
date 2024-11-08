---

brief: |
  Sinusuportahan na ngayon ng i18n.site ang walang server na full-text na paghahanap.

  Ipinakilala ng artikulong ito ang pagpapatupad ng purong front-end na full-text na teknolohiya sa paghahanap, kabilang ang inverted index na binuo ng IndexedDB, prefix search, word segmentation optimization at multi-language support.

  Kung ikukumpara sa mga umiiral nang solusyon, ang purong front-end na full-text na paghahanap ng i18n.site ay maliit sa laki at mabilis, angkop para sa maliliit at katamtamang laki ng mga website tulad ng mga dokumento at blog, at available offline.

---

# Purong Front-End Inverted Full-Text Na Paghahanap

## Pagkakasunod-Sunod

Pagkatapos ng ilang linggo ng pag-develop, [i18n.site](//i18n.site) (isang purong static na markdown multilingual translation & website building tool) ay sumusuporta na ngayon sa purong front-end na full-text na paghahanap.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

[i18n.site](//i18n.site) ng artikulong ito ang teknikal na pagpapatupad ng `i18n.site` puro front-end na full-text na paghahanap.

Code open source : [Search kernel](//github.com/i18n-site/ie/tree/main/qy) / [interactive na interface](//github.com/i18n-site/plugin/tree/main/qy)

## Isang Pagsusuri Ng Mga Full-Text Na Solusyon Sa Paghahanap Na Walang Server

Para sa maliliit at katamtamang laki na puro static na mga website tulad ng mga dokumento/personal na blog, ang pagbuo ng self-built na full-text na backend sa paghahanap ay masyadong mabigat, at ang walang serbisyong full-text na paghahanap ay ang mas karaniwang pagpipilian.

Ang mga walang server na full-text na solusyon sa paghahanap ay nahahati sa dalawang malawak na kategorya:

Una, ang mga katulad na [algolia.com](//algolia.com)

Ang mga naturang serbisyo ay nangangailangan ng pagbabayad batay sa dami ng paghahanap, at kadalasang hindi available sa mga user sa mainland China dahil sa mga isyu gaya ng pagsunod sa website.

Hindi ito magagamit offline, hindi magagamit sa intranet, at may malalaking limitasyon. Hindi gaanong tinatalakay ang artikulong ito.

Ang pangalawa ay puro front-end na full-text na paghahanap.

Sa kasalukuyan, ang mga karaniwang puro front-end na full-text na paghahanap ay kasama ang [lunrjs](//lunrjs.com) at [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (batay sa `lunrjs` pangalawang pag-unlad).

`lunrjs` Mayroong dalawang paraan upang bumuo ng mga index, at pareho silang may sariling mga problema.

1. Pre-built index file

   Dahil ang index ay naglalaman ng mga salita mula sa lahat ng mga dokumento, ito ay malaki ang sukat.
   Sa tuwing ang isang dokumento ay idinagdag o binago, isang bagong index file ay dapat na mai-load.
   Papataasin nito ang oras ng paghihintay ng user at kumonsumo ng maraming bandwidth.

2. Mag-load ng mga dokumento at bumuo ng mga index sa mabilisang

   Ang pagbuo ng index ay isang computationally intensive na gawain.

---

Bilang karagdagan sa `lunrjs` , may ilang iba pang full-text na solusyon sa paghahanap, tulad ng :

[fusejs](//www.fusejs.io) , kalkulahin ang pagkakatulad sa pagitan ng mga string upang maghanap.

Ang pagganap ng solusyon na ito ay napakahina at hindi magagamit para sa buong tekstong paghahanap (tingnan [Fuse.js Ang mahabang query ay tumatagal ng higit sa 10 segundo, paano ito i-optimize?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) , gumamit ng Bloom filter upang maghanap, hindi magagamit para sa paghahanap ng prefix (halimbawa, ilagay ang `goo` , paghahanap `good` , `google` ), at hindi makakamit ang katulad na epekto ng awtomatikong pagkumpleto.

Dahil sa mga pagkukulang ng mga kasalukuyang solusyon, nakabuo `i18n.site` ng isang bagong purong front-end na full-text na solusyon sa paghahanap, na may mga sumusunod na katangian :

1. Sinusuportahan ang paghahanap sa maraming wika at maliit ang laki Ang laki ng kernel ng paghahanap pagkatapos ng packaging `gzip` ay `6.9KB` (para sa paghahambing, ang laki ng `lunrjs` ay `25KB` ).
1. Bumuo ng inverted index batay sa `indexedb` , na kumukuha ng mas kaunting memorya at mabilis.
1. Kapag ang mga dokumento ay idinagdag/binago, tanging ang idinagdag o binagong mga dokumento lamang ang muling ini-index, na binabawasan ang dami ng mga kalkulasyon.
1. Sinusuportahan ang paghahanap ng prefix at maaaring magpakita ng mga resulta ng paghahanap sa real time habang nagta-type ang user.
1. Available offline

Sa ibaba, `i18n.site` detalye ng teknikal na pagpapatupad ang ipapakilala nang detalyado.

## Multilinggwal Na Pag-Segment Ng Salita

Ginagamit ng word segmentation ang native word segmentation `Intl.Segmenter` ng browser, at sinusuportahan ng lahat ng pangunahing browser ang interface na ito.

![](//p.3ti.site/1727667759.avif)

Ang salitang segmentation `coffeescript` code ay ang mga sumusunod

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

sa:

* `/\p{P}/` ay isang regular na expression na tumutugma sa mga punctuation mark Kasama sa mga partikular na katugmang simbolo ang: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~. `.</p><ul><li> `split('.')` ay dahil `Firefox` browser word segmentation ay hindi segment `. ` .</li>


## Pagbuo Ng Index

5 object storage table ang ginawa sa `IndexedDB` :

* `word` : id -
* `doc` : id - Dokumento url - Numero ng bersyon ng dokumento
* `docWord` : Array ng dokumento id - salita id
* `prefix` : Array ng prefix - salita id
* `rindex` : Word id - Document id : Array ng mga numero ng linya

Ipasa ang hanay ng dokumento `url` at numero ng bersyon `ver` , at hanapin kung umiiral ang dokumento sa talahanayan `doc` Kung wala ito, lumikha ng baligtad na index. Kasabay nito, alisin ang baligtad na index para sa mga dokumentong hindi naipasa.

Sa ganitong paraan, maaaring makamit ang incremental indexing at mababawasan ang halaga ng pagkalkula.

Sa front-end na pakikipag-ugnayan, [ang](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) pag-load [ng](//juejin.cn/post/7413586285954154522) progress bar ng index / maaaring ipakita upang maiwasan ang lag kapag naglo css load sa unang progress + .

### IndexedDB Mataas Na Sabay-Sabay Na Pagsulat

Ang proyekto ay [idb](//www.npmjs.com/package/idb) batay sa asynchronous encapsulation ng IndexedDB

Ang mga pagbabasa at pagsusulat ng IndexedDB ay asynchronous. Kapag lumilikha ng isang index, ang mga dokumento ay mailo-load nang sabay-sabay upang lumikha ng index.

Upang maiwasan ang bahagyang pagkawala ng data na dulot ng mapagkumpitensyang pagsulat, maaari kang sumangguni sa `coffeescript` code sa ibaba at magdagdag ng `ing` cache sa pagitan ng pagbabasa at pagsusulat upang mahadlangan ang mga nakikipagkumpitensyang pagsusulat.

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

## Katumpakan at Recall

Ise-segment muna ng paghahanap ang mga keyword na ipinasok ng user.

Ipagpalagay na mayroong `N` salita pagkatapos ng pagse-segment ng salita Kapag nagbabalik ng mga resulta, ibabalik muna ang mga resultang naglalaman ng lahat ng keyword, at pagkatapos ay ibabalik ang mga resultang naglalaman ng `N-1` , `N-2` ,..., `1` keyword.

Ang mga resulta ng paghahanap na ipinapakita ay unang tinitiyak ang katumpakan ng query, at ang mga resulta na na-load kasunod (i-click ang pindutan ng pag-load ng higit pa) ay tinitiyak ang rate ng recall.

![](//p.3ti.site/1727684564.avif)

## Mag-Load on Demand

Upang mapahusay ang bilis ng pagtugon, ginagamit ng paghahanap ang `yield` generator upang ipatupad ang on-demand na paglo-load, at bumabalik `limit` may itatanong na resulta.

Tandaan na sa tuwing maghahanap ka muli pagkatapos ng `yield` , kailangan mong muling buksan ang isang transaksyon ng query na `IndexedDB` .

## Prefix Real-Time Na Paghahanap

Upang maipakita ang mga resulta ng paghahanap habang nagta-type ang user, halimbawa, kapag `wor` ang ipinasok, ang mga salitang may prefix na `wor` gaya ng `words` at `work` ay ipinapakita.

![](//p.3ti.site/1727684944.avif)

Gagamitin ng search kernel ang `prefix` table para sa huling salita pagkatapos ng pagse-segment ng salita upang mahanap ang lahat ng mga salita na may prefix na kasama nito, at maghanap sa pagkakasunud-sunod.

Ginagamit din ang anti-shake function `debounce` sa front-end na pakikipag-ugnayan (ipinatupad bilang mga sumusunod) upang bawasan ang dalas ng input ng user na nagti-trigger ng mga paghahanap at bawasan ang dami ng pagkalkula.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Available Offline

Ang talahanayan ng index ay hindi nag-iimbak ng orihinal na teksto, tanging ang mga salita, na binabawasan ang dami ng imbakan.

Ang pag-highlight ng mga resulta ng paghahanap ay nangangailangan ng muling pagkarga ng orihinal na teksto, at ang pagtutugma `service worker` ay maaaring maiwasan ang mga paulit-ulit na kahilingan sa network.

Kasabay nito, dahil ini-cache `service worker` ang lahat ng mga artikulo, kapag nagsagawa ng paghahanap ang user, ang buong website, kasama ang paghahanap, ay available offline.

## Display Optimization Ng MarkDown Na Mga Dokumento

Ang purong front-end na solusyon sa paghahanap ng `i18n.site` ay na-optimize para sa `MarkDown` dokumento.

Kapag nagpapakita ng mga resulta ng paghahanap, ang pangalan ng kabanata ay ipapakita at ang kabanata ay ma-navigate kapag na-click.

![](//p.3ti.site/1727686552.avif)

## Ibuod

Ang inverted full-text na paghahanap ay ipinatupad lamang sa front end, walang server na kinakailangan. Ito ay napaka-angkop para sa maliit at katamtamang laki ng mga website tulad ng mga dokumento at personal na blog.

`i18n.site` Open source na self-developed purong front-end na paghahanap, maliit sa laki at mabilis na pagtugon, nilulutas ang mga pagkukulang ng kasalukuyang purong front-end na full-text na paghahanap at nagbibigay ng mas magandang karanasan ng user.