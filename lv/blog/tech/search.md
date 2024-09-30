# Tīra Priekšgala Apgrieztā Pilna Teksta Meklēšana

## Secība

Pēc vairāku nedēļu izstrādes [i18n.site](//i18n.site) (tīri statisks markdown daudzvalodu tulkošanas & vietņu veidošanas rīks) tagad atbalsta tīru priekšgala pilna teksta meklēšanu.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Šajā rakstā tiks parādīta `i18n.site` tīras pilna teksta meklēšanas tehnoloģija. [i18n.site](//i18n.site) varat izbaudīt meklēšanas efektu.

[Koda](//github.com/i18n-site/plugin/tree/main/qy) atvērtā koda [meklēšanas kodols](//github.com/i18n-site/ie/tree/main/qy) /

## Pārskats Par Bezservera Pilna Teksta Meklēšanas Risinājumiem

Nelielām vietnēm, piemēram, dokumentiem/personīgajiem emuāriem, kas ir tīri statiski, neapšaubāmi ir pārāk smagi pašam izveidot pilna teksta meklēšanas aizmuguri, un pilna teksta meklēšana bez pakalpojumiem neapšaubāmi ir labāka.

Esošie bezserveru pilna teksta meklēšanas risinājumi iedalās divās plašās kategorijās.

Viens ir trešās puses meklēšanas pakalpojumu sniedzējs, kas līdzīgs [algolia.com](//algolia.com) kas nodrošina priekšgala pilna teksta meklēšanas komponentus.

Par šādiem pakalpojumiem ir jāmaksā, un tie nav pieejami lietotājiem kontinentālajā Ķīnā vietņu atbilstības problēmu dēļ.

To nevar izmantot bezsaistē, nevar izmantot iekštīklā, un tam ir lieli ierobežojumi. Šajā rakstā nav daudz apspriests.

Otrais ir tīra priekšgala pilna teksta meklēšana.

Plašāk zināmie priekšgala pilna teksta meklējumi ietver [lunrjs](https://lunrjs.com) [ ElasticLunr.js ] [https://github.com/weixsong/elasticlunr.js](%E5%9F%BA%E4%BA%8E%60lunrjs%60%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91) .

`lunrjs` Ir divi veidi, kā veidot indeksus, taču abiem ir savas problēmas.

1. Iepriekš izveidoti indeksa faili

   Tā kā rādītājā ir vārdi no visiem dokumentiem, tas ir liels.
   Ikreiz, kad dokuments tiek pievienots vai pārveidots, ir jāielādē jauns indeksa fails.
   Tas palielinās lietotāja gaidīšanas laiku un patērēs daudz joslas platuma.

2. Ielādējiet dokumentus un veidojiet indeksus lidojumā

   Indeksa izveide ir skaitļošanas ziņā ietilpīgs uzdevums. Indeksa atjaunošana katru reizi, kad tam piekļūstat, radīs acīmredzamas kavēšanās un sliktu lietotāja pieredzi.

Papildus `lunrjs` ir daži citi pilna teksta meklēšanas risinājumi, piemēram :

[fusejs](https://www.fusejs.io) aprēķiniet meklējamo virkņu līdzību.

Šī risinājuma veiktspēja ir ārkārtīgi vāja, un to nevar izmantot pilna teksta meklēšanai (skatiet [Fuse.js Ilgs vaicājums aizņem vairāk nekā 10 sekundes, kā to optimizēt?](https://stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](https://github.com/tinysearch/tinysearch) izmantojiet Blūma filtru, lai meklētu, to nevar izmantot prefiksu meklēšanai (piemēram, ievadiet `goo` , meklējiet `good` , `google` ), un nevar sasniegt līdzīgu automātiskās pabeigšanas efektu.

No neapmierinātības ar esošo risinājumu trūkumiem, `i18n.site` izstrādāja jaunu tīru priekšgala pilna teksta meklēšanas risinājumu, kuram ir šādas funkcijas :

1. Atbalsta meklēšanu vairākās valodās un ir maza izmēra. Meklēšanas kodola izmērs pēc `gzip` iepakojuma ir `6.9KB` (salīdzinājumam, `lunrjs` izmērs ir `25KB` ).
1. Izveidojiet apgrieztu indeksu, pamatojoties uz `indexedb` , kas aizņem mazāk atmiņas un ir ātrs.
1. Pievienojot/pārveidojot dokumentus, atkārtoti tiek indeksēti tikai pievienotie vai pārveidotie dokumenti, samazinot aprēķinu apjomu.
1. Atbalsta prefiksu meklēšanu un var parādīt meklēšanas rezultātus reāllaikā, kamēr lietotājs raksta.
1. Pieejams bezsaistē

Zemāk tiks detalizēti aprakstītas `i18n.site` tehniskās ieviešanas detaļas.

## Daudzvalodu Vārdu Segmentēšana

Vārdu segmentācija izmanto pārlūkprogrammas vietējo vārdu segmentāciju `Intl.Segmenter` , un visas galvenās pārlūkprogrammas atbalsta šo saskarni.

![](https://p.3ti.site/1727667759.avif)

Vārda segmentācijas `coffeescript` kods ir šāds

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

in:

* `/\p{P}/` ir regulāra izteiksme, kas atbilst pieturzīmēm. Konkrēti atbilstības simboli ietver: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } `.</p><ul><li> `split('.')` ir tāpēc, ka `Firefox` pārlūkprogrammas vārda segmentācija nesadala `.` segmentu.</li>


## Indeksa Ēka

5 objektu uzglabāšanas tabulas tika izveidotas `IndexedDB` :

* `word` vārdi : id -
* `doc` Dokumenta url - : id - versijas numurs
* `docWord` Dokumenta masīvs id - id :
* `prefix` : - id masīvs
* `rindex` : id - Dokuments id : Rindas numuru masīvs

Nododiet dokumenta masīvu `url` un versijas numuru `ver` un meklējiet, vai dokuments eksistē `doc` tabulā. Ja tā nav, izveidojiet apgrieztu indeksu. Vienlaikus noņemiet apgriezto indeksu tiem dokumentiem, kas netika nodoti.

Tādā veidā var panākt pakāpenisku indeksāciju un samazināt aprēķinu apjomu.

Priekšgala mijiedarbībā var parādīt indeksa ielādes norises joslu, lai izvairītos no kavēšanās, pirmo reizi ielādējot. Skatiet sadaļu "Progresa josla ar animāciju, pamatojoties uz vienu progress + Tīra css ieviešana" [angļu](https://dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [ķīniešu](https://juejin.cn/post/7413586285954154522) .

### IndexedDB Augsta Vienlaicīga Rakstīšana

Projekts ir [idb](https://www.npmjs.com/package/idb) pamatojoties uz asinhrono iekapsulēšanu IndexedDB

IndexedDB lasīšana un rakstīšana ir asinhrona. Veidojot indeksu, dokumenti tiks ielādēti vienlaikus, lai izveidotu indeksu.

Lai izvairītos no daļēja datu zuduma, ko izraisa konkurējoša rakstīšana, varat atsaukties uz tālāk norādīto `coffeescript` kodu un starp lasīšanu un rakstīšanu pievienot kešatmiņu `ing` , lai pārtvertu konkurējošus ierakstus.

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

## Prefikss Reāllaika Meklēšana

Lai parādītu meklēšanas rezultātus, kamēr lietotājs raksta, piemēram, ievadot `wor` , tiek parādīti vārdi ar prefiksu `wor` piemēram, `words` un `work` .

![](https://p.3ti.site/1727684944.avif)

Meklēšanas kodols izmantos tabulu `prefix` pēdējam vārdam pēc vārda segmentācijas, lai atrastu visus vārdus ar prefiksu ar to un meklētu pēc kārtas.

Anti-shake funkcija `debounce` tiek izmantota arī priekšgala mijiedarbībā (tiek īstenota šādi), lai samazinātu lietotāja ievades biežumu, aktivizējot meklēšanu, un samazinātu aprēķinu apjomu.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Precizitāte Un Atsaukšana

Meklēšana vispirms segmentēs lietotāja ievadītos atslēgvārdus.

Pieņemsim, ka aiz vārda segmentācijas ir `N` vārdu. Atgriežot rezultātus, vispirms tiks atgriezti rezultāti, kas satur visus atslēgvārdus, un pēc tam tiks atgriezti rezultāti, kas satur `N-1` , `N-2` ,..., `1` atslēgvārdus.

Vispirms parādītie meklēšanas rezultāti nodrošina vaicājuma precizitāti, un pēc tam ielādētie rezultāti (noklikšķiniet uz pogas Ielādēt vairāk) nodrošina atsaukšanas ātrumu.

![](https://p.3ti.site/1727684564.avif)

## Slodze Pēc Pieprasījuma

Lai uzlabotu atbildes ātrumu, meklēšana izmanto `yield` ģeneratoru, lai ieviestu ielādi pēc pieprasījuma, un atgriež `limit` reizi, kad tiek vaicāts rezultāts.

Ņemiet vērā, ka katru reizi, kad veicat atkārtotu meklēšanu pēc `yield` , jums ir atkārtoti jāatver vaicājuma transakcija ar `IndexedDB` .

## Prefikss Reāllaika Meklēšana

Lai parādītu meklēšanas rezultātus, kamēr lietotājs raksta, piemēram, ievadot `wor` , tiek parādīti vārdi ar prefiksu `wor` piemēram, `words` un `work` .

![](https://p.3ti.site/1727684944.avif)

Meklēšanas kodols izmantos tabulu `prefix` pēdējam vārdam pēc vārda segmentācijas, lai atrastu visus vārdus ar prefiksu ar to un meklētu pēc kārtas.

Anti-shake funkcija `debounce` tiek izmantota arī priekšgala mijiedarbībā (tiek īstenota šādi), lai samazinātu lietotāja ievades biežumu, aktivizējot meklēšanu, un samazinātu aprēķinu apjomu.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Pieejams Bezsaistē

Indeksa tabulā netiek saglabāts oriģinālais teksts, tikai vārdi, kas samazina krātuves apjomu.

Lai izceltu meklēšanas rezultātus, ir atkārtoti jāielādē oriģinālais teksts, un atbilstība `service worker` var izvairīties no atkārtotiem tīkla pieprasījumiem.

Tajā pašā laikā, tā kā `service worker` kešatmiņā saglabā visus rakstus, tiklīdz lietotājs veic meklēšanu, visa vietne, ieskaitot meklēšanu, ir pieejama bezsaistē.

## MarkDown Dokumentu Displeja Optimizācija

`i18n.site` tīrais priekšgala meklēšanas risinājums ir optimizēts `MarkDown` dokumentiem.

Rādot meklēšanas rezultātus, tiks parādīts nodaļas nosaukums un, noklikšķinot uz nodaļas, tiks pārvietota.

![](https://p.3ti.site/1727686552.avif)

## Apkopojiet

Apgrieztā pilna teksta meklēšana, kas ieviesta tikai priekšpusē, ar ātru atbildi un nav nepieciešams serveris.

Ļoti piemērots mazām un vidējām vietnēm, piemēram, dokumentiem un personīgajiem emuāriem.