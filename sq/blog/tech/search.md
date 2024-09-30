# Kërkim I Pastër I Përmbysur Me Tekst Të Plotë

## Sekuencë

Pas disa javësh & markdown [i18n.site](//i18n.site)

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Ky artikull do të ndajë zbatimin e `i18n.site` teknologjisë së plotë të kërkimit me tekst të plotë. [i18n.site](//i18n.site) mund të përjetoni efektin e kërkimit.

[Bërthama](//github.com/i18n-site/plugin/tree/main/qy) [e kërkimit](//github.com/i18n-site/ie/tree/main/qy) me kod të hapur /

## Një Përmbledhje E Zgjidhjeve Të Kërkimit Me Tekst Të Plotë Pa Server

Për faqet e internetit të vogla si dokumente/bloge personale që janë thjesht statike, është padyshim shumë e rëndë të ndërtosh vetë një bazë kërkimi me tekst të plotë dhe kërkimi me tekst të plotë pa shërbime është padyshim një peshë më e mirë.

Zgjidhjet ekzistuese të kërkimit me tekst të plotë pa server ndahen në dy kategori të gjera.

Njëri është një ofrues i shërbimit të kërkimit të palëve të treta i ngjashëm me [algolia.com](//algolia.com) i cili ofron komponentë të kërkimit me tekst të plotë në fund.

Shërbime të tilla kërkojnë pagesë dhe nuk janë të disponueshme për përdoruesit në Kinën kontinentale për shkak të çështjeve të pajtueshmërisë së faqes në internet.

Nuk mund të përdoret jashtë linje, nuk mund të përdoret në intranet dhe ka kufizime të mëdha. Ky artikull nuk diskuton shumë.

E dyta është kërkimi i pastër me tekst të plotë.

Kërkimet më të njohura të tekstit të plotë përfshijnë [lunrjs](https://lunrjs.com) [ ElasticLunr.js ] [https://github.com/weixsong/elasticlunr.js](%E5%9F%BA%E4%BA%8E%60lunrjs%60%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91) .

`lunrjs` Ka dy mënyra për të krijuar indekse, por të dyja kanë problemet e tyre.

1. Skedarët e indeksit të para-ndërtuar

   Për shkak se indeksi përmban fjalë nga të gjitha dokumentet, ai është i madh në madhësi.
   Sa herë që shtohet ose modifikohet një dokument, duhet të ngarkohet një skedar i ri indeks.
   Do të rrisë kohën e pritjes së përdoruesit dhe do të konsumojë shumë gjerësi bande.

2. Ngarkoni dokumente dhe krijoni indekse në fluturim

   Ndërtimi i një indeksi është një detyrë intensive llogaritëse.

Përveç `lunrjs` , ka disa zgjidhje të tjera të kërkimit me tekst të plotë, si p.sh. :

[fusejs](https://www.fusejs.io) llogaritni ngjashmërinë midis vargjeve për të kërkuar.

Performanca e kësaj zgjidhjeje është jashtëzakonisht e dobët dhe nuk mund të përdoret për kërkim me tekst të plotë (shih [Fuse.js Kërkesa e gjatë zgjat më shumë se 10 sekonda, si ta optimizoni atë?](https://stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

, përdorni filtrin Bloom për të kërkuar, nuk mund [TinySearch](https://github.com/tinysearch/tinysearch) përdoret për kërkimin e prefiksit (për shembull, shkruani `goo` , kërkoni `good` , `google` ) dhe nuk mund të arrini efekt të ngjashëm të përfundimit.

Nga pakënaqësia me mangësitë e zgjidhjeve ekzistuese, `i18n.site` zhvilloi një zgjidhje të re të pastër të kërkimit me tekst të plotë, e cila ka karakteristikat e mëposhtme :

1. Mbështet kërkimin në shumë gjuhë dhe është i vogël në madhësi. Madhësia e kernelit të kërkimit pas paketimit `gzip` është `6.9KB` (për krahasim, madhësia e `lunrjs` është `25KB` ).
1. Ndërtoni një indeks të përmbysur bazuar në `indexedb` , i cili merr më pak memorie dhe është i shpejtë.
1. Kur dokumentet shtohen/modifikohen, vetëm dokumentet e shtuara ose të modifikuara riindeksohen, duke zvogëluar sasinë e llogaritjeve.
1. Mbështet kërkimin me prefiks, i cili mund të shfaqë rezultatet e kërkimit në kohë reale ndërsa përdoruesi është duke shtypur.
1. E disponueshme jashtë linje

Më poshtë, `i18n.site` detaje teknike të zbatimit do të prezantohen në detaje.

## Segmentimi Shumëgjuhësh I Fjalëve

Segmentimi i fjalëve përdor segmentimin e fjalëve origjinale të shfletuesit `Intl.Segmenter` , dhe të gjithë shfletuesit e zakonshëm e mbështesin këtë ndërfaqe.

![](https://p.3ti.site/1727667759.avif)

Kodi i segmentimit të fjalëve `coffeescript` është si më poshtë

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

në:

* `/\p{P}/` është një shprehje e rregullt që përputhet me shenjat e pikësimit Simbolet specifike të përputhjes përfshijnë: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } . `.</p><ul><li> `split('.')` është sepse segmentimi i fjalëve `Firefox` shfletuesit nuk e segmenton `.` .</li>


## Ndërtimi I Indeksit

5 tabela të ruajtjes së objekteve u krijuan në `IndexedDB` :

* `word` : id -
* `doc` : id - Numri i versionit të url -
* `docWord` Grup id dokumentit id - fjalë :
* `prefix` : i prefiksit - fjalë id
* `rindex` : id - Dokument id : Vargu i numrave të rreshtave

Kaloni në grupin e dokumentit `url` dhe versionit numër `ver` dhe kërkoni nëse dokumenti ekziston në tabelën `doc` Nëse nuk ekziston, krijoni një indeks të përmbysur. Në të njëjtën kohë, hiqni indeksin e përmbysur për ato dokumente që nuk janë kaluar.

Në këtë mënyrë, mund të arrihet indeksimi në rritje dhe sasia e llogaritjes zvogëlohet.

Në ndërveprimin në pjesën e përparme, shiriti [i](https://dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) [progresit](https://juejin.cn/post/7413586285954154522) të ngarkimit të indeksit mund të shfaqet për të shmangur vonesën / ngarkohet për herë css progress + .

### IndexedDB Shkrim I Lartë I Njëkohshëm

Projekti është [idb](https://www.npmjs.com/package/idb) bazuar në kapsulimin asinkron të IndexedDB

Leximet dhe shkrimet e IndexedDB janë asinkrone. Kur krijoni një indeks, dokumentet do të ngarkohen njëkohësisht për të krijuar indeksin.

Për të shmangur humbjen e pjesshme të të dhënave të shkaktuar nga shkrimi konkurrues, mund t'i referoheni kodit `coffeescript` më poshtë dhe të shtoni një memorie të fshehtë `ing` midis leximit dhe shkrimit për të përgjuar shkrimet konkurruese.

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

## Prefiksi I Kërkimit Në Kohë Reale

Për të shfaqur rezultatet e kërkimit ndërsa përdoruesi është duke shtypur, për shembull, kur futet `wor` , shfaqen fjalët e parashtesuara me `wor` si `words` dhe `work` .

![](https://p.3ti.site/1727684944.avif)

Kerneli i kërkimit do të përdorë tabelën `prefix` për fjalën e fundit pas segmentimit të fjalës për të gjetur të gjitha fjalët e parashtesuara me të dhe për të kërkuar në rend.

Funksioni kundër tundjes `debounce` përdoret gjithashtu në ndërveprimin në pjesën e përparme (i zbatuar si më poshtë) për të reduktuar frekuencën e kërkimeve që nxisin hyrjen e përdoruesit dhe për të zvogëluar sasinë e llogaritjes.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Saktësia Dhe Kujtimi

Kërkimi së pari do të segmentojë fjalët kyçe të futura nga përdoruesi.

Supozoni se ka `N` fjalë pas segmentimit të fjalëve Kur kthehen rezultatet, së pari do të kthehen rezultatet që përmbajnë të gjitha fjalët kyçe dhe më pas do të kthehen rezultatet që përmbajnë `N-1` , `N-2` ,..., `1` fjalë kyçe.

Rezultatet e kërkimit të shfaqura së pari sigurojnë saktësinë e pyetjes dhe rezultatet e ngarkuara më pas (kliko butonin "Ngarko më shumë") sigurojnë shkallën e tërheqjes.

![](https://p.3ti.site/1727684564.avif)

## Ngarkoni Sipas Kërkesës

Për të përmirësuar shpejtësinë e përgjigjes, kërkimi përdor gjeneratorin `yield` për të zbatuar ngarkimin sipas kërkesës dhe kthehet `limit` herë që kërkohet një rezultat.

Vini re se sa herë që kërkoni përsëri pas `yield` , duhet të rihapni një transaksion të pyetjes prej `IndexedDB` .

## Prefiksi I Kërkimit Në Kohë Reale

Për të shfaqur rezultatet e kërkimit ndërsa përdoruesi është duke shtypur, për shembull, kur futet `wor` , shfaqen fjalët e parashtesuara me `wor` si `words` dhe `work` .

![](https://p.3ti.site/1727684944.avif)

Kerneli i kërkimit do të përdorë tabelën `prefix` për fjalën e fundit pas segmentimit të fjalës për të gjetur të gjitha fjalët e parashtesuara me të dhe për të kërkuar në rend.

Funksioni kundër tundjes `debounce` përdoret gjithashtu në ndërveprimin në pjesën e përparme (i zbatuar si më poshtë) për të reduktuar frekuencën e kërkimeve që nxisin hyrjen e përdoruesit dhe për të zvogëluar sasinë e llogaritjes.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## E Disponueshme Jashtë Linje

Tabela e indeksit nuk ruan tekstin origjinal, vetëm fjalët, gjë që zvogëlon sasinë e ruajtjes.

Theksimi i rezultateve të kërkimit kërkon rifreskimin e tekstit origjinal dhe përputhja me `service worker` mund të shmangë kërkesat e përsëritura të rrjetit.

Në të njëjtën kohë, për shkak se `service worker` ruan të gjithë artikujt, pasi përdoruesi kryen një kërkim, e gjithë faqja e internetit, përfshirë kërkimin, është e disponueshme jashtë linje.

## Shfaq Optimizimin E Dokumenteve MarkDown

Zgjidhja e pastër e kërkimit në front-end të `i18n.site` është optimizuar për `MarkDown` dokument.

Kur shfaqen rezultatet e kërkimit, do të shfaqet emri i kapitullit dhe kapitulli do të navigohet kur të klikohet.

![](https://p.3ti.site/1727686552.avif)

## Përmblidhni

Kërkimi i përmbysur me tekst të plotë i zbatuar thjesht në pjesën e përparme, me përgjigje të shpejtë dhe pa nevojë për server.

Është shumë i përshtatshëm për faqet e internetit të vogla dhe të mesme si dokumente dhe blogje personale.