---

brief: |
  Tacaíonn i18n.site le cuardach téacs iomlán gan fhreastalaí.

  Tugann an t-alt seo isteach cur i bhfeidhm na teicneolaíochta cuardaigh téacs iomlán tosaigh tosaigh, lena n-áirítear innéacs inverted tógtha ag IndexedDB, cuardach réimír, leas iomlán a bhaint deighilt focal agus tacaíocht iltheanga.

  I gcomparáid leis na réitigh atá ann cheana féin, tá cuardach téacs iomlán tosaigh íon i18n.site beag i méid agus go tapa, oiriúnach do láithreáin ghréasáin bheaga agus mheánmhéide cosúil le doiciméid agus blaganna, agus tá sé ar fáil as líne.

---

# Cuardach Téacs Iomlán Inbhéartaithe Íon Tosaigh

## Seicheamh

Tar éis roinnt seachtainí forbartha, tacaíonn [i18n.site](//i18n.site) (uirlis statach amháin tógála markdown multilingualtranslation & ) le cuardach téacs iomlán íon tosaigh.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Déanfaidh an t-alt seo cur i bhfeidhm teicniúil `i18n.site` cuardach téacs iomlán tosaigh íon a roinnt chun [i18n.site](//i18n.site) a fháil ar an éifeacht cuardaigh.

[Cód](//github.com/i18n-site/plugin/tree/main/qy) [foinse](//github.com/i18n-site/ie/tree/main/qy) / :

## Athbhreithniú Ar Réitigh Chuardaigh Téacs Iomlán Gan Fhreastalaí

I gcás suíomhanna gréasáin beaga agus meánmhéide atá ina n-iomláine statach, mar dhoiciméid/blaganna pearsanta, tá sé róthrom inneall cuardaigh lántéacs féin-thógtha a thógáil, agus is é cuardach lántéacs gan seirbhís an rogha is coitianta.

Tá dhá chatagóir leathana i gceist le réitigh chuardaigh téacs iomlán gan fhreastalaí:

Ar an gcéad dul síos [algolia.com](//algolia.com) cuireann soláthraithe seirbhíse cuardaigh tríú páirtí comhpháirteanna tosaigh le haghaidh cuardach téacs iomlán.

Éilíonn seirbhísí den sórt sin íocaíocht bunaithe ar mhéid an chuardaigh, agus is minic nach mbíonn siad ar fáil d'úsáideoirí ar mhórthír na Síne mar gheall ar shaincheisteanna ar nós comhlíonadh láithreán gréasáin.

Ní féidir é a úsáid as líne, ní féidir é a úsáid ar an inlíon, agus tá teorainneacha móra aige. Ní phléann an t-alt seo mórán.

Is é an dara ceann cuardach téacs iomlán tosaigh íon.

I láthair na huaire, áirítear ar chuardaigh choitianta lántéacs tosaigh íon [lunrjs](//lunrjs.com) agus [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (bunaithe ar `lunrjs` forbairt thánaisteach).

`lunrjs` Tá dhá bhealach ann chun innéacsanna a thógáil, agus tá a gcuid fadhbanna féin ag an mbeirt.

1. Comhaid innéacs réamhthógtha

   Toisc go bhfuil focail ó gach doiciméad san innéacs, tá sé mór i méid.
   Nuair a chuirtear doiciméad leis nó nuair a athraítear é, ní mór comhad innéacs nua a luchtú.
   Méadóidh sé am feithimh an úsáideora agus ídíonn sé go leor bandaleithead.

2. Luchtaigh doiciméid agus tóg innéacsanna ar an eitilt

   Is dianchúram ríomhaireachta é innéacs a thógáil.

---

Chomh maith le `lunrjs` , tá roinnt réiteach cuardaigh téacs iomlán eile, mar :

[fusejs](//www.fusejs.io) , ríomh an chosúlacht idir teaghráin chun cuardach a dhéanamh.

Tá feidhmíocht an réitigh seo an-lag agus ní féidir é a úsáid le haghaidh cuardach téacs iomlán (féach [Fuse.js Tógann fiosrúchán fada níos mó ná 10 soicind, conas é a bharrfheabhsú?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) , úsáid scagaire Bloom chun cuardach a dhéanamh, ní féidir é a úsáid le haghaidh cuardaigh réimír (mar shampla, cuir isteach `goo` , cuardaigh `good` , `google` ), agus ní féidir leis an éifeacht críochnaithe uathoibríoch chomhchosúil a bhaint amach.

Mar gheall ar easnaimh na réitigh atá ann cheana féin, d'fhorbair `i18n.site` réiteach cuardaigh téacs iomlán nua tosaigh íon, a bhfuil na tréithe seo a leanas aige :

1. Tacaíonn sé le cuardach iltheanga `25KB` tá sé `6.9KB` `gzip` méid `lunrjs`
1. Tóg innéacs inbhéartaithe bunaithe ar `indexedb` , a thógann suas níos lú cuimhne agus atá tapa.
1. Nuair a dhéantar doiciméid a shuimiú nó a mhodhnú, ní dhéantar ach na doiciméid bhreise nó leasaithe a ath-innéacsú, rud a laghdóidh méid na ríomhanna.
1. Tacaíonn sé le cuardach réimír agus is féidir leis torthaí cuardaigh a thaispeáint i bhfíor-am agus an t-úsáideoir ag clóscríobh.
1. Ar fáil as líne

Anseo thíos, tabharfar isteach sonraí cur chun feidhme teicniúil `i18n.site` go mion.

## Deighilt Focal Ilteangach

Úsáideann deighilt focal deighilt focal dúchais an bhrabhsálaí `Intl.Segmenter` , agus tacaíonn gach brabhsálaí príomhshrutha leis an gcomhéadan seo.

![](//p.3ti.site/1727667759.avif)

Is é seo a leanas an cód deighilte focal `coffeescript`

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

i:

* Is slonn rialta é `/\p{P}/` a mheaitseálann marcálacha poncaíochta Áirítear le siombailí meaitseála ar leith: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~. `.</p><ul><li> Is éard atá i gceist le `split('.')` ná nach mír `. ` é deighilt focal brabhsálaí `Firefox` .</li>


## Foirgneamh Innéacs

Cruthaíodh 5 táblaí stórála réad i `IndexedDB` :

* `word` : id -
* `doc` : id - Doiciméad url - Uimhir leagain an doiciméid
* `docWord` : Eagar doiciméad id - focal id
* `prefix` : Réimír - focal id
* `rindex` : Focal id - Doiciméad id : Eagar de línte uimhreacha

Cuir isteach an t-eagar de dhoiciméad `url` agus uimhir leagain `ver` , agus cuardaigh an bhfuil an doiciméad i dtábla `doc` Mura bhfuil sé ann, cruthaigh innéacs inbhéartaithe. Ag an am céanna, bain an t-innéacs inbhéartaithe do na doiciméid sin nár tugadh isteach.

Ar an mbealach seo, is féidir innéacsú incriminteach a bhaint amach agus laghdaítear an méid ríomh.

San [idirghníomhú](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) tosaigh, / féidir barra dul chun cinn luchtaithe an progress + a thaispeáint css moill a sheachaint nuair a bhíonn [tú](//juejin.cn/post/7413586285954154522) ag luchtú den chéad uair.

### Scríbhneoireacht Ard Comhthráthach IndexedDB

Tá an tionscadal [idb](//www.npmjs.com/package/idb) bunaithe ar an imchochlú asincrónach de IndexedDB

Tá léann agus scríobh IndexedDB asincrónach. Nuair a bheidh innéacs á chruthú, déanfar doiciméid a luchtú i gcomhthráth chun an t-innéacs a chruthú.

D'fhonn caillteanas páirteach sonraí de bharr scríbhneoireacht iomaíoch a sheachaint, is féidir leat tagairt a dhéanamh don chód `coffeescript` thíos agus taisce `ing` a chur leis idir léamh agus scríobh chun scríbhinní iomaíocha a thascradh.

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

## Beachtas Agus Athghairm

Déanfaidh an cuardach na heochairfhocail a d'iontráil an t-úsáideoir a dheighilt ar dtús.

Glac leis go bhfuil `N` focal tar éis deighilt na bhfocal Nuair a bheidh torthaí á dtabhairt ar ais, seolfar torthaí ina bhfuil na heochairfhocail go léir ar ais ar dtús, agus ansin cuirfear torthaí ina bhfuil `N-1` , `N-2` ,..., `1` eochairfhocal ar ais.

Cinntíonn na torthaí cuardaigh a thaispeántar ar dtús cruinneas an fhiosrúcháin, agus cinntíonn na torthaí a lódáiltear ina dhiaidh sin (cliceáil ar an gcnaipe ualach níos mó) an ráta athghairme.

![](//p.3ti.site/1727684564.avif)

## Luchtaigh Ar Éileamh

D'fhonn an luas freagartha a fheabhsú, úsáideann an cuardach an gineadóir `yield` chun luchtú ar éileamh a chur i bhfeidhm, agus filleann sé `limit` uair a cheistítear toradh.

Tabhair faoi deara go gcaithfidh tú idirbheart fiosrúcháin de `IndexedDB` a athoscailt gach uair a dhéanann tú cuardach arís tar éis `yield` .

## Réimír Cuardach Fíor-Ama

Chun torthaí cuardaigh a thaispeáint agus an t-úsáideoir ag clóscríobh, mar shampla, nuair a chuirtear `wor` isteach, taispeántar focail a bhfuil réimír `wor` orthu mar `words` agus `work` .

![](//p.3ti.site/1727684944.avif)

Úsáidfidh an t-eithne cuardaigh an tábla `prefix` don fhocal deiridh tar éis deighilt focal chun gach focal a bhfuil réimír leis a aimsiú, agus cuardach a dhéanamh in ord.

Úsáidtear feidhm frith-shake `debounce` freisin in idirghníomhaíocht deireadh tosaigh (arna chur i bhfeidhm mar seo a leanas) chun minicíocht ionchuir úsáideora a spreagann cuardaigh a laghdú agus an méid ríomh a laghdú.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Ar Fáil as Líne

Ní stórálann an tábla innéacs an téacs bunaidh, ach na focail, rud a laghdaíonn an méid stórála.

Chun torthaí cuardaigh a aibhsiú is gá an buntéacs a athlódáil, agus is féidir le meaitseáil `service worker` iarratais líonra arís agus arís eile a sheachaint.

Ag an am céanna, toisc go ndéanann `service worker` caches ar gach alt, a luaithe a dhéanann an t-úsáideoir cuardach, tá an láithreán gréasáin iomlán, lena n-áirítear an cuardach, ar fáil as líne.

## Taispeáin Optamú Doiciméad MarkDown

Tá réiteach cuardaigh ceann tosaigh íon `i18n.site` optamaithe le haghaidh `MarkDown` doiciméad.

Nuair a thaispeánfar torthaí cuardaigh, taispeánfar ainm na caibidle agus déanfar an chaibidil a nascleanúint nuair a chliceáiltear uirthi.

![](//p.3ti.site/1727686552.avif)

## Achoimre

Cuardach téacs iomlán inbhéartaithe curtha i bhfeidhm ar an taobh tosaigh amháin, níl aon fhreastalaí ag teastáil. Tá sé an-oiriúnach do shuíomhanna gréasáin beaga agus meánmhéide cosúil le doiciméid agus blaganna pearsanta.

`i18n.site` Réitíonn cuardach tosaigh íon féinfhorbartha foinse oscailte, beag i méid agus freagra tapa, easnaimh an chuardaigh téacs iomlán tosaigh íon atá ann faoi láthair agus cuireann sé eispéireas úsáideora níos fearr ar fáil.