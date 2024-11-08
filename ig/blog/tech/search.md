---

brief: |
  i18n.site na-akwado ọchụchọ ederede zuru oke nke enweghị ihe nkesa.

  Edemede a na-ewebata mmejuputa teknụzụ ọchụchọ zuru oke n'ihu n'ihu, gụnyere ntụgharị ntụgharị nke IndexedDB wuru, ọchụchọ prefix, njikarịcha nkebi okwu na nkwado asụsụ ọtụtụ.

  E jiri ya tụnyere azịza ndị dị adị, i18n.site dị ọcha n'ihu njedebe ederede zuru oke pere mpe na ngwa ngwa, dabara maka weebụsaịtị pere mpe na ọkara dị ka akwụkwọ na blọọgụ, ọ dịkwa na ntanetị.

---

# Ọchụchọ Ederede Zuru Oke Tụgharịa N'ihu

## Usoro

Ka ọtụtụ izu nke mmepe gachara [i18n.site](//i18n.site) (ngwa ọrụ ụlọ weebụsaịtị & markdown multilingualtranslation) na-akwado ọchụchọ ederede zuru oke n'ihu.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Edemede a ga-ekekọrịta mmejuputa teknuzu nke `i18n.site` dị ọcha n'ihu-ngwụcha ederede [i18n.site](//i18n.site) na-enweta nsonaazụ ọchụchọ.

Koodu : [emepe kernel](//github.com/i18n-site/ie/tree/main/qy) / [interface mmekọrịta](//github.com/i18n-site/plugin/tree/main/qy)

## Nyochaa Ngwọta Ọchụchọ Ederede Zuru Oke Na-Enweghị Ihe Nkesa

Maka webụsaịtị pere mpe na nke ọkara kwụ ọtọ dị ka akwụkwọ/blọọgụ nkeonwe, iwulite ihe nchọta ederede zuru oke nke onwe ya dị oke arọ, na nchọ ederede zuru oke na-enweghị ọrụ bụ nhọrọ a na-ahụkarị.

Ngwọta ọchụchọ ederede zuru oke na-enweghị nkesa ga-adaba na ngalaba abụọ sara mbara:

Nke [algolia.com](//algolia.com) , ndị na-eweta ọrụ ọchụchọ ndị yiri ya na-enye ihe ndị dị n'ihu maka ọchụchọ ederede zuru oke.

Ọrụ ndị dị otú ahụ chọrọ ugwo dabere na olu ọchụchọ, ma ọ naghị adị ndị ọrụ na ala China n'ihi okwu dị ka nnabata webụsaịtị.

Enweghị ike iji ya na-anọghị n'ịntanetị, enweghị ike iji ya na intranet, ma nwee oke oke. Isiokwu a adịghị atụle nke ukwuu.

Nke abụọ bụ nchọcha ederede zuru oke n'ihu.

Ugbu a, nchọcha ederede zuru oke n'ihu na-agụnye [lunrjs](//lunrjs.com) na [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (dabere na mmepe nke `lunrjs` ).

`lunrjs` Enwere ụzọ abụọ iji wuo ndeksi, ma ha abụọ nwere nsogbu nke ha.

1. Faịlụ ndeksi ewuruburu

   N'ihi na ndeksi nwere okwu sitere na akwụkwọ niile, ọ buru ibu na nha.
   Mgbe ọ bụla agbakwunyere ma ọ bụ gbanwee akwụkwọ, a ga-ebunye faịlụ ndeksi ọhụrụ.
   Ọ ga-abawanye oge nchere onye ọrụ ma na-eri ọtụtụ bandwidth.

2. Budata akwụkwọ ma wuo ndeksi na ofufe

   Ịmepụta ndeksi bụ ọrụ siri ike na-arụkọ ọrụ ọnụ mgbe ọ bụla ị nwetara ya ga-eme ka ọ bụrụ ihe na-adịghị mma na ahụmahụ onye ọrụ.

---

Na mgbakwunye na `lunrjs` , enwere ụfọdụ ngwọta ọchụchọ ederede zuru oke, dị ka :

[fusejs](//www.fusejs.io) , gbakọọ myirịta n'etiti eriri iji chọọ.

Arụmọrụ nke ngwọta a dị oke njọ na enweghị ike iji ya maka nyocha ederede zuru oke (lee [Fuse.js Ajụjụ ogologo na-ewe ihe karịrị 10 sekọnd, otu esi ebuli ya?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) , jiri Bloom filter iji chọọ, enweghị ike iji ya mee ihe maka prefix (dịka ọmụmaatụ, tinye `goo` , ọchụchọ `good` , `google` ), na enweghị ike nweta nsonaazụ mmecha akpaka yiri ya.

N'ihi adịghị ike nke ihe ngwọta ndị dị ugbu a, `i18n.site` mepụtara ihe ọhụrụ dị ọcha n'ihu-ngwụcha ihe nchọta ederede zuru oke, nke nwere àgwà ndị a :

1. Na-akwado nchọta asụsụ dị iche iche ma pere mpe n'ogo nke kernel ọchụchọ mgbe nkwakọchara `gzip` bụ `6.9KB` (maka ntụnyere, nha nke `lunrjs` bụ `25KB` ).
1. Mepụta ndepụta ntụgharị ntụgharị dabere na `indexedb` , nke na-ewe obere ebe nchekwa na ngwa ngwa.
1. Mgbe agbakwunyere / gbanwee akwụkwọ, ọ bụ naanị akwụkwọ agbakwunyere ma ọ bụ gbanwetụrụ ka a na-edegharịgharị ọzọ, na-ebelata ọnụ ọgụgụ nke mgbako.
1. Na-akwado ọchụchọ prefix ma nwee ike igosipụta nsonaazụ ọchụchọ ozugbo mgbe onye ọrụ na-ede.
1. Dị na-anọghị n'ịntanetị

N'okpuru ebe a, a ga-ewebata nkọwa mmejuputa teknụzụ `i18n.site` n'ụzọ zuru ezu.

## Nkewa Okwu Ọtụtụ Asụsụ

Nkewa okwu na-eji nkebi okwu `Intl.Segmenter` nke ihe nchọgharị ihe nchọgharị, yana ihe nchọgharị niile bụ isi na-akwado interface a.

![](//p.3ti.site/1727667759.avif)

Koodu nkebi `coffeescript` bụ nke a

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

na:

* `/\p{P}/` bụ okwu oge niile dabara na akara edemede akọwapụtara gụnyere: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } '</p><ul><li> `split('.')` bụ n'ihi na `Firefox` nkebi okwu nchọgharị anaghị agba nke `. ` .</li>


## Index Ụlọ

E kere tebụl nchekwa ihe 5 na `IndexedDB` :

* `word` : id -
* `doc` : id - Akwụkwọ url - Nọmba ụdị akwụkwọ
* `docWord` : Akwụkwọ id - okwu id
* `prefix` : prefix - okwu id
* `rindex` : Okwu id - Akwụkwọ id : N'usoro nke nọmba ahịrị

Nyefee n'ụdị akwụkwọ `url` na nọmba ụdị `ver` , wee chọọ ma akwụkwọ ahụ ọ dị na tebụl `doc` Ọ bụrụ na ọ dịghị, mepụta ndezigharị ntụgharị. N'otu oge ahụ, wepụ index tụgharịrị maka akwụkwọ ndị ahụ na-ebufeghị ya.

N'ụzọ dị otú a, enwere ike nweta nrịbawanye indexing na ọnụ ọgụgụ nke ngụkọta oge belata.

Na mkparịta ụka n'ihu, enwere ike [igosipụta](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) ogwe ọganihu [nke](//juejin.cn/post/7413586285954154522) ntinye nke index / zere nkwụsịtụ css ị na progress + ebu ibu maka oge mbụ.

### IndexedDB Ederede Dị Elu N'otu Oge

[idb](//www.npmjs.com/package/idb) oru ngo a dabere na nkpuchi asynchronous nke IndexedDB

IndexedDB na-agụ ma na-ede enweghị ihe jikọrọ ya. Mgbe ị na-emepụta ndeksi, a ga-ebuba akwụkwọ n'otu oge iji mepụta ndeksi.

Ka ịzenarị mfu data n'eleghị anya n'ihu site na ịde asọmpi, ị nwere ike zoo aka na koodu `coffeescript` dị n'okpuru wee gbakwunye cache `ing` n'etiti ịgụ na ide iji gbochie ndị na-asọmpi.

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

## Nkenke Na Icheta

Ọchịchọ a ga-ebu ụzọ kewaa mkpụrụokwu onye ọrụ tinyegoro.

Were ya na enwere okwu `N` mgbe nkewa okwu gachara, a ga-ebu ụzọ weghachi nsonaazụ nwere mkpụrụokwu niile, wee weghachi nsonaazụ nwere `N-1` , `N-2` ,..., `1` .

Nsonaazụ ọchụchọ ahụ egosiri na-ebu ụzọ hụ na ajụjụ ahụ ziri ezi, yana rịzọlt ebugoro emesịa (pịa bọtịnụ ibu ọzọ) hụ na ọnụego ncheta.

![](//p.3ti.site/1727684564.avif)

## Ibu Na-Achọ

Iji meziwanye ọsọ nzaghachi, ọchụchọ ahụ na-eji generator `yield` mejuputa ntinye a na-achọ, ma na-alọghachi mgbe `limit` a jụrụ nsonaazụ ya.

Rịba ama na oge ọ bụla ị na-achọgharị ọzọ ka `yield` gasịrị, ị ga-emepegharị azụmahịa ajụjụ nke `IndexedDB` .

## Prefix Ọchụchọ Ozugbo

Iji gosi nsonaazụ ọchụchọ ka onye ọrụ na-apịpị, dịka ọmụmaatụ, mgbe abanyere `wor` , a na-egosipụta okwu ndị etinyegoro na `wor` dị ka `words` na `work` .

![](//p.3ti.site/1727684944.avif)

Nchọgharị kernel ga-eji tebụl `prefix` maka okwu ikpeazụ ka nkewa okwu gachara chọta okwu niile etinyere na ya, wee chọọ n'usoro.

A na-ejikwa ọrụ mgbochi ịma jijiji `debounce` na-emekọrịta ihe n'ihu-n'ihu (emejuputa ya dị ka ndị a) iji belata ugboro ntinye ntinye onye ọrụ na-akpali ọchụchọ ma belata ọnụọgụgụ.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Dị Na-Anọghị N'ịntanetị

Tebụl ntụaka anaghị echekwa ederede mbụ, naanị okwu, nke na-ebelata oke nchekwa.

Ịmepụta nsonaazụ ọchụchọ chọrọ ibugharị ederede izizi, yana `service worker` dakọtara nwere ike zere arịrịọ netwọk ugboro ugboro.

N'otu oge ahụ, n'ihi na `service worker` na-echekwa akụkọ niile, ozugbo onye ọrụ mere ọchụchọ, webụsaịtị niile, gụnyere ọchụchọ ahụ, dị na ntanetị.

## Gosipụta Njikarịcha Akwụkwọ MarkDown

`i18n.site` 's dị ọcha n'ihu-ngwụcha ihe nchọta ka emebere maka akwụkwọ `MarkDown` .

Mgbe ị na-egosipụta nsonaazụ ọchụchọ, a ga-egosipụta aha isiakwụkwọ ahụ ma gagharịa isiakwụkwọ ahụ mgbe ịpịrị ya.

![](//p.3ti.site/1727686552.avif)

## Nchịkọta

Nchọgharị ederede zuru oke etinyere na njedebe ihu, ọ nweghị ihe nkesa achọrọ. Ọ dabara nke ọma maka webụsaịtị obere na ọkara dị ka akwụkwọ na blọọgụ nkeonwe.

`i18n.site` Mepee isi mmalite nke nchọta n'ihu dị ọcha mepụtara, obere nha na nzaghachi ngwa ngwa, na-edozi adịghị ike nke ugbu a dị ọcha n'ihu njedebe nchọ ederede zuru oke ma na-enye ahụmịhe onye ọrụ ka mma.