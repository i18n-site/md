---

brief: |
  i18n.site dabar palaiko viso teksto paiešką be serverio.

  Šiame straipsnyje pristatomas grynos priekinės viso teksto paieškos technologijos įgyvendinimas, įskaitant IndexedDB sukurtą apverstą indeksą, priešdėlių paiešką, žodžių segmentavimo optimizavimą ir kelių kalbų palaikymą.

  Palyginti su esamais sprendimais, i18n.site tiesioginė viso teksto paieška yra mažo dydžio ir greita, tinka mažoms ir vidutinėms svetainėms, pvz., dokumentams ir tinklaraščiams, ir yra pasiekiama neprisijungus.

---

# Gryna Priekinė Atvirkštinė Viso Teksto Paieška

## Seka

Po kelių savaičių kūrimo, [i18n.site](//i18n.site) (visiškai statinis markdown daugiakalbių vertimų & svetainių kūrimo įrankis) dabar palaiko gryną viso teksto paiešką.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Šiame straipsnyje bus aprašytas `i18n.site` grynos viso teksto paieškos techninis įgyvendinimas. Aplankykite [i18n.site](//i18n.site)

Kodas atviro : [Ieškoti branduolio](//github.com/i18n-site/ie/tree/main/qy) / [interaktyvi sąsaja](//github.com/i18n-site/plugin/tree/main/qy)

## Be Serverio Viso Teksto Paieškos Sprendimų Apžvalga

Mažoms ir vidutinėms visiškai statinėms svetainėms, pvz., dokumentams / asmeniniams tinklaraščiams, sukurti savarankiškai sukurtą viso teksto paieškos užpakalinę programą yra per sunku, o viso teksto paieška be paslaugų yra dažnesnis pasirinkimas.

Be serverio viso teksto paieškos sprendimai skirstomi į dvi plačias kategorijas:

Pirma, [algolia.com](//algolia.com) trečiųjų šalių paieškos paslaugų teikėjai teikia priekinius komponentus viso teksto paieškai.

Už tokias paslaugas reikia mokėti pagal paieškos apimtį ir dažnai jos nepasiekiamos naudotojams žemyninėje Kinijoje dėl tokių problemų, kaip svetainės atitiktis.

Jis negali būti naudojamas neprisijungus, negali būti naudojamas intranete ir turi didelių apribojimų. Šiame straipsnyje daug nekalbama.

Antrasis yra gryna priekinė viso teksto paieška.

Šiuo metu įprastos priekinės viso teksto paieškos apima [lunrjs](//lunrjs.com) ir [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (remiantis `lunrjs` antrine plėtra).

`lunrjs` Yra du indeksų kūrimo būdai ir abu turi savo problemų.

1. Iš anksto sukurti indekso failai

   Kadangi rodyklėje yra žodžių iš visų dokumentų, ji yra didelė.
   Kai dokumentas pridedamas arba keičiamas, turi būti įkeltas naujas indekso failas.
   Tai padidins vartotojo laukimo laiką ir sunaudos daug pralaidumo.

2. Greitai įkelkite dokumentus ir kurkite indeksus

   Indekso kūrimas yra daug skaičiavimo reikalaujanti užduotis. Indekso atkūrimas kiekvieną kartą, kai jį pasiekiate, sukels akivaizdžių vėlavimų ir prastos vartotojo patirties.

---

Be `lunrjs` , yra keletas kitų viso teksto paieškos sprendimų, tokių kaip :

[fusejs](//www.fusejs.io) apskaičiuokite ieškomų eilučių panašumą.

Šio sprendimo našumas itin prastas ir jo negalima naudoti viso teksto paieškai (žr [. Fuse.js Ilga užklausa trunka ilgiau nei 10 sekundes, kaip ją optimizuoti?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

, [TinySearch](//github.com/tinysearch/tinysearch) naudokite „Bloom“ filtrą, jo negalima naudoti ieškant priešdėlių (pvz., įveskite `goo` , ieškokite `good` , `google` ) ir negalite pasiekti panašaus automatinio užbaigimo efekto.

Dėl esamų sprendimų trūkumų `i18n.site` sukūrė naują gryno front-end viso teksto paieškos sprendimą, kuris pasižymi šiomis savybėmis :

1. Palaiko paiešką keliomis kalbomis ir yra mažo dydžio. Paieškos branduolio dydis supakavus `gzip` yra `6.9KB` (palyginimui, `lunrjs` dydis yra `25KB` ).
1. Sukurkite apverstą indeksą, pagrįstą `indexedb` , kuris užima mažiau atminties ir yra greitas.
1. Pridedant/keičiant dokumentus, iš naujo indeksuojami tik pridėti ar pakeisti dokumentai, sumažinant skaičiavimų kiekį.
1. Palaiko prefiksų paiešką ir gali rodyti paieškos rezultatus realiuoju laiku, kai vartotojas rašo.
1. Galima neprisijungus

Žemiau bus išsamiai pristatyta `i18n.site` techninio įgyvendinimo detalių.

## Daugiakalbis Žodžių Segmentavimas

Žodžių segmentavimui naudojamas naršyklės vietinis žodžių segmentavimas `Intl.Segmenter` , o visos pagrindinės naršyklės palaiko šią sąsają.

![](//p.3ti.site/1727667759.avif)

Žodžio segmentavimo `coffeescript` kodas yra toks

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

in:

* `/\p{P}/` yra reguliarioji { , atitinkanti `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` ženklus. | } `.</p><ul><li> `split('.')` yra todėl, kad `Firefox` naršyklės žodžio segmentavimas neskiria `. ` segmentų.</li>


## Indekso Pastatas

`IndexedDB` buvo sukurtos 5 objektų saugojimo lentelės :

* `word` : id -
* `doc` Dokumento url - : id - versijos numeris
* `docWord` Dokumento : id - žodis id
* `prefix` : - id masyvas
* `rindex` Word id - : id : Eilučių numerių masyvas

Įveskite dokumento `url` masyvą ir versijos numerį `ver` ir ieškokite, ar dokumentas egzistuoja `doc` lentelėje. Jei jo nėra, sukurkite apverstą indeksą. Tuo pačiu metu pašalinkite apverstą tų dokumentų, kurie nebuvo perduoti, indeksą.

Tokiu būdu galima pasiekti laipsnišką indeksavimą ir sumažinti skaičiavimo kiekį.

Sąveikos metu gali būti rodoma indekso [įkėlimo](//juejin.cn/post/7413586285954154522) eigos juosta [,](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) kad / išvengta vėlavimo įkeliant css progress + .

### IndexedDB Aukštas Rašymas Vienu Metu

Projektas [idb](//www.npmjs.com/package/idb) remiantis asinchronine IndexedDB

IndexedDB skaitymas ir rašymas yra asinchroniški. Kuriant indeksą, dokumentai bus įkeliami vienu metu, kad būtų sukurta indeksas.

Kad išvengtumėte dalinio duomenų praradimo dėl konkurencinio rašymo, galite remtis toliau pateiktu `coffeescript` kodu ir pridėti `ing` talpyklą tarp skaitymo ir rašymo, kad perimtumėte konkuruojančius įrašus.

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

## Tikslumas Ir Prisiminimas

Paieškoje pirmiausia bus segmentuojami vartotojo įvesti raktiniai žodžiai.

Tarkime, kad po žodžio segmentavimo yra `N` žodžių. Grąžinant rezultatus pirmiausia bus pateikti rezultatai, kuriuose yra visi raktiniai žodžiai, o tada bus pateikti rezultatai, kuriuose yra `N-1` , `N-2` ,..., `1` raktiniai žodžiai.

Pirmiausia rodomi paieškos rezultatai užtikrina užklausos tikslumą, o vėliau įkelti rezultatai (spustelėkite mygtuką įkelti daugiau) užtikrina atšaukimo greitį.

![](//p.3ti.site/1727684564.avif)

## Krovinys Pagal Poreikį

Siekiant pagerinti atsako greitį, paieška naudoja `yield` generatorių, kad įgyvendintų įkėlimą pagal pareikalavimą, ir grąžinama `limit` kartą, kai užklausiamas rezultatas.

Atminkite, kad kiekvieną kartą, kai ieškote dar kartą po `yield` , turite iš naujo atidaryti `IndexedDB` užklausos operaciją.

## Prefikso Paieška Realiuoju Laiku

Kad būtų rodomi paieškos rezultatai, kai vartotojas rašo, pavyzdžiui, kai įvedamas `wor` , rodomi žodžiai su priešdėliu `wor` pvz., `words` ir `work` .

![](//p.3ti.site/1727684944.avif)

Paieškos branduolys naudos `prefix` lentelę paskutiniam žodžiui po žodžių segmentavimo, kad surastų visus žodžius su priešdėliu ir ieškos iš eilės.

Apsaugos nuo drebėjimo funkcija `debounce` taip pat naudojama sąsajoje (įgyvendinama taip), kad būtų sumažintas vartotojo įvesties, suaktyvinančios paieškas, dažnis ir sumažintas skaičiavimo kiekis.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Galima Neprisijungus

Rodyklės lentelėje nesaugomas originalus tekstas, tik žodžiai, o tai sumažina saugyklos kiekį.

Norint paryškinti paieškos rezultatus, reikia iš naujo įkelti pradinį tekstą, o atitikus `service worker` galima išvengti pasikartojančių tinklo užklausų.

Tuo pačiu metu, kadangi `service worker` talpykloje saugo visus straipsnius, vartotojui atlikus paiešką, visa svetainė, įskaitant paiešką, pasiekiama neprisijungus.

## MarkDown Dokumentų Rodymo Optimizavimas

`i18n.site` grynas priekinės paieškos sprendimas yra optimizuotas `MarkDown` dokumentams.

Kai rodomi paieškos rezultatai, bus rodomas skyriaus pavadinimas, o spustelėjus skyrius bus naršomas.

![](//p.3ti.site/1727686552.avif)

## Apibendrinti

Apversta viso teksto paieška įdiegta tik priekinėje dalyje, nereikia serverio. Tai labai tinka mažoms ir vidutinio dydžio svetainėms, tokioms kaip dokumentai ir asmeniniai tinklaraščiai.

`i18n.site` Atvirojo kodo savarankiškai sukurta gryna priekinė paieška, mažo dydžio ir greito atsako, pašalina dabartinės grynos priekinės viso teksto paieškos trūkumus ir suteikia geresnę vartotojo patirtį.