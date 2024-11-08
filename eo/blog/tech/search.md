---

brief: |
  i18n.site nun subtenas senservila plenteksta serĉo.

  Ĉi tiu artikolo prezentas la efektivigon de pura front-end-plenteksta serĉteknologio, inkluzive de inversa indekso konstruita de IndexedDB, prefiksa serĉo, vortsegmenta optimumigo kaj plurlingva subteno.

  Kompare kun ekzistantaj solvoj, la pura antaŭfina plenteksta serĉo de i18n.site estas malgranda laŭgranda kaj rapida, taŭga por malgrandaj kaj mezgrandaj retejoj kiel dokumentoj kaj blogoj, kaj disponeblas eksterrete.

---

# Pura Front-End Inversigita Plenteksta Serĉo

## Sekvenco

Post pluraj semajnoj da evoluo [i18n.site](//i18n.site) (nure senmova markdown multlingva tradukado & retejo-konstrua ilo) nun subtenas puran antaŭfinan plentekstan serĉon.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Ĉi tiu artikolo dividos la teknikan efektivigon de `i18n.site` pura front-end-plenteksta serĉo [i18n.site](//i18n.site) sperti la serĉan efikon.

Kodo : [Serĉu kernon](//github.com/i18n-site/ie/tree/main/qy) / [interaga interfaco](//github.com/i18n-site/plugin/tree/main/qy)

## Revizio De Senservilaj Plentekstaj Serĉsolvoj

Por malgrandaj kaj mezgrandaj pure senmovaj retejoj kiel dokumentoj/personaj blogoj, konstrui memkonstruitan plentekstan serĉan backend estas tro peza, kaj senserva plenteksta serĉo estas la pli ofta elekto.

Senservilaj plentekstaj serĉsolvoj kategoriiĝas en du larĝajn kategoriojn:

Unue, [algolia.com](//algolia.com) Triaj serĉservoprovizantoj provizas antaŭajn komponantojn por plenteksta serĉo.

Tiaj servoj postulas pagon bazitan sur serĉvolumo, kaj ofte estas neatingeblaj por uzantoj en kontinenta Ĉinio pro problemoj kiel retejo-konformeco.

Ĝi ne povas esti uzata eksterrete, ne povas esti uzata en la intrareto kaj havas grandajn limigojn. Ĉi tiu artikolo ne multe diskutas.

La dua estas pura antaŭfina plenteksta serĉo.

Nuntempe, oftaj puraj antaŭfinaj plentekstaj serĉoj inkluzivas [lunrjs](//lunrjs.com) kaj [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (bazitaj sur `lunrjs` sekundara evoluo).

`lunrjs` Estas du manieroj konstrui indeksojn, kaj ambaŭ havas siajn proprajn problemojn.

1. Antaŭkonstruitaj indeksaj dosieroj

   Ĉar la indekso enhavas vortojn el ĉiuj dokumentoj, ĝi estas granda laŭ grando.
   Kiam ajn dokumento estas aldonita aŭ modifita, nova indeksa dosiero devas esti ŝargita.
   Ĝi pliigos la atendan tempon de la uzanto kaj konsumos multan bendolarĝon.

2. Ŝarĝu dokumentojn kaj konstruu indeksojn sur la flugo

   Konstrui indekson estas komputile intensa tasko Rekonstrui la indekson ĉiufoje kiam vi aliras ĝin kaŭzos evidentajn malfruojn kaj malbonan sperton de uzanto.

---

Krom `lunrjs` , ekzistas iuj aliaj plentekste serĉsolvoj, kiel ekzemple :

[fusejs](//www.fusejs.io) , kalkulu la similecon inter ĉenoj por serĉi.

La rendimento de ĉi tiu solvo estas ekstreme malbona kaj ne povas esti uzata por plenteksta serĉo (vidu [Fuse.js Longa demando daŭras pli ol 10 sekundoj, kiel optimumigi ĝin?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) uzu Bloom-filtrilon por serĉi, ne povas esti uzata por prefiksa serĉo (ekzemple, enigu `goo` , serĉu `good` , `google` ), kaj ne povas atingi similan aŭtomatan kompletigan efikon.

Pro la mankoj de la ekzistantaj solvoj, `i18n.site` evoluigis novan puran antaŭfinan plentekstan serĉsolvon, kiu havas la jenajn karakterizaĵojn :

1. Subtenas plurlingvan serĉon kaj estas malgranda en grandeco La grandeco de la serĉkerno post pakado `gzip` estas `6.9KB` (por komparo, la grandeco de `lunrjs` estas `25KB` ).
1. Konstruu inversan indekson bazitan sur `indexedb` , kiu okupas malpli da memoro kaj estas rapida.
1. Kiam dokumentoj estas aldonitaj/modifitaj, nur la aldonitaj aŭ modifitaj dokumentoj estas reindeksitaj, reduktante la kvanton de kalkuloj.
1. Elportas prefiksan serĉon kaj povas montri serĉrezultojn en reala tempo dum la uzanto tajpas.
1. Disponebla eksterrete

Malsupre, `i18n.site` teknikaj efektivigdetaloj estos enkondukitaj detale.

## Plurlingva Vortsegmentado

Vortsegmentado uzas la indiĝenan vortsegmentadon de la retumilo `Intl.Segmenter` , kaj ĉiuj ĉefaj retumiloj subtenas ĉi tiun interfacon.

![](//p.3ti.site/1727667759.avif)

La vortsegmenta `coffeescript` kodo estas jena

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

en:

* `/\p{P}/` estas regula esprimo, kiu kongruas kun interpunkciaj signoj. Specifaj kongruaj simboloj inkluzivas: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~. `.</p><ul><li> `split('.')` estas ĉar `Firefox` retumila vortsegmentado ne segmentas `. ` .</li>


## Indeksa Konstruaĵo

5 objektaj stokaj tabloj estis kreitaj en `IndexedDB` :

* `word` : id -
* `doc` : id - Dokumenta url - Dokumenta versio numero
* `docWord` id de dokumento id - vorto :
* `prefix` : Tabelo de prefikso - vorto id
* `rindex` : id - Dokumento id : Tabelo de linionumeroj

Enmetu la tabelon de dokumento `url` kaj versio numero `ver` , kaj serĉu ĉu la dokumento ekzistas en tabelo `doc` Se ĝi ne ekzistas, kreu inversan indekson. Samtempe, forigu la inversan indekson por tiuj dokumentoj, kiuj ne estis transdonitaj.

Tiamaniere, pliiga indeksado povas esti atingita kaj la kvanto de kalkulo estas reduktita.

En antaŭa interagado, la ŝarĝa progresbreto de la indekso povas esti montrita por eviti la malfruon dum la ŝarĝo unuafoje Vidu "Progresbaro kun Animacio, Bazita sur Unuopa progress + Pura css Efektivigo" [Angla](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Ĉina](//juejin.cn/post/7413586285954154522) .

### IndexedDB Alta Samtempa Skribo

La projekto estas [idb](//www.npmjs.com/package/idb) surbaze de la nesinkrona enkapsuligo de IndexedDB

IndexedDB legado kaj skribado estas nesinkronaj. Kiam oni kreas indekson, dokumentoj estos ŝarĝitaj samtempe por krei la indekson.

Por eviti partan datumperdon kaŭzitan de konkurenciva skribo, vi povas raporti al la `coffeescript` kodo sube kaj aldoni `ing` kaŝmemoron inter legado kaj skribo por kapti konkurantajn skribojn.

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

## Precizeco Kaj Revoko

La serĉo unue segmentos la ŝlosilvortojn enigitajn de la uzanto.

Supozu ke estas `N` vortoj post la vortsegmentado Revenante rezultojn, rezultoj enhavantaj ĉiujn ŝlosilvortojn estos resenditaj, kaj poste rezultoj enhavantaj `N-1` , `N-2` ,..., `1` ŝlosilvortoj estos resenditaj.

La serĉrezultoj montritaj unue certigas la precizecon de la konsulto, kaj la rezultoj ŝarĝitaj poste (alklaku la butonon Ŝargi pli) certigas la revokan indicon.

![](//p.3ti.site/1727684564.avif)

## Ŝarĝu Laŭpeto

Por plibonigi la respondrapidecon, la serĉo uzas la `yield` generatoron por efektivigi laŭpetan ŝarĝon, kaj revenas `limit` kiam rezulto estas pridemandita.

Rimarku ke ĉiufoje kiam vi serĉas denove post `yield` , vi devas remalfermi demandan transakcion de `IndexedDB` .

## Prefiksa Realtempa Serĉo

Por montri serĉrezultojn dum la uzanto tajpas, ekzemple, kiam `wor` estas enigita, vortoj prefiksitaj per `wor` kiel ekzemple `words` kaj `work` estas montrataj.

![](//p.3ti.site/1727684944.avif)

La serĉkerno uzos la `prefix` tabelon por la lasta vorto post vortsegmentado por trovi ĉiujn vortojn prefiksitajn kun ĝi, kaj serĉos en sinsekvo.

Kontraŭ-skua funkcio `debounce` ankaŭ estas uzata en antaŭa interago (efektivigita jene) por redukti la oftecon de uzanta enigo ekiganta serĉojn kaj redukti la kvanton de kalkulo.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Disponebla Eksterrete

La indeksa tabelo ne konservas la originalan tekston, nur la vortojn, kio reduktas la kvanton de stokado.

Substreki serĉrezultojn postulas reŝargi la originalan tekston, kaj kongrui `service worker` povas eviti ripetajn retajn petojn.

Samtempe, ĉar `service worker` konservas ĉiujn artikolojn, post kiam la uzanto faras serĉon, la tuta retejo, inkluzive de la serĉo, estas disponebla eksterrete.

## Montru Optimumigo De MarkDown-Dokumentoj

La pura antaŭfina serĉsolvo de `i18n.site` estas optimumigita por `MarkDown` dokumentoj.

Kiam vi montras serĉrezultojn, la ĉapitronomo estos montrata kaj la ĉapitro navigos kiam oni klakas.

![](//p.3ti.site/1727686552.avif)

## Resumu

Inversa plenteksta serĉo efektivigita nur ĉe la antaŭa fino, neniu servilo bezonata. Ĝi estas tre taŭga por malgrandaj kaj mezgrandaj retejoj kiel dokumentoj kaj personaj blogoj.

`i18n.site` Malfermfonta memevoluinta pura antaŭfina serĉo, malgranda laŭ grandeco kaj rapida respondo, solvas la mankojn de la nuna pura antaŭfina plenteksta serĉo kaj provizas pli bonan uzantan sperton.