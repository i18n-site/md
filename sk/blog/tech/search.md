---

brief: |
  i18n.site teraz podporuje fulltextové vyhľadávanie bez servera.

  Tento článok predstavuje implementáciu čisto frontendovej technológie fulltextového vyhľadávania, vrátane invertovaného indexu vytvoreného pomocou IndexedDB, vyhľadávania prefixov, optimalizácie segmentácie slov a podpory viacerých jazykov.

  V porovnaní s existujúcimi riešeniami je čisté front-endové fulltextové vyhľadávanie i18n.site malé a rýchle, vhodné pre malé a stredne veľké webové stránky, ako sú dokumenty a blogy, a je dostupné offline.

---

# Čisté Front-End Invertované Fulltextové Vyhľadávanie

## Postupnosť

Po niekoľkých týždňoch vývoja [i18n.site](//i18n.site) (čisto statický markdown viacjazyčný prekladový & nástroj na vytváranie webových stránok) teraz podporuje čisto front-endové fulltextové vyhľadávanie.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Tento článok bude zdieľať technickú implementáciu `i18n.site` čistého front-endového fulltextového vyhľadávania. Navštívte stránku [i18n.site](//i18n.site)

[Kód](//github.com/i18n-site/plugin/tree/main/qy) / [source](//github.com/i18n-site/ie/tree/main/qy) :

## Prehľad Riešení Fulltextového Vyhľadávania Bez Serverov

Pre malé a stredne veľké čisto statické webové stránky, ako sú dokumenty/osobné blogy, je budovanie vlastného backendu pre fulltextové vyhľadávanie príliš náročné a častejšou voľbou je fulltextové vyhľadávanie bez služieb.

Bezserverové riešenia fulltextového vyhľadávania spadajú do dvoch širokých kategórií:

Po prvé, [algolia.com](//algolia.com) poskytovatelia vyhľadávacích služieb tretích strán poskytujú front-end komponenty pre fulltextové vyhľadávanie.

Takéto služby si vyžadujú platbu na základe objemu vyhľadávania a pre používateľov v pevninskej Číne sú často nedostupné z dôvodu problémov, ako je napríklad súlad s webovými stránkami.

Nedá sa použiť offline, nedá sa použiť na intranete a má veľké obmedzenia. Tento článok veľa nerozoberá.

Druhým je čisté front-endové fulltextové vyhľadávanie.

V súčasnosti bežné čisto front-endové fulltextové vyhľadávania zahŕňajú [lunrjs](//lunrjs.com) a [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (založené na `lunrjs` sekundárnom vývoji).

`lunrjs` Existujú dva spôsoby vytvárania indexov a oba majú svoje vlastné problémy.

1. Vopred vytvorené indexové súbory

   Pretože index obsahuje slová zo všetkých dokumentov, je veľký.
   Vždy, keď sa dokument pridá alebo upraví, musí sa načítať nový indexový súbor.
   Zvýši to čakaciu dobu používateľa a spotrebuje veľa šírky pásma.

2. Načítajte dokumenty a vytvorte indexy za chodu

   Vytvorenie indexu je výpočtovo náročná úloha Prebudovanie indexu zakaždým, keď k nemu pristúpite, spôsobí zjavné oneskorenia a zlú používateľskú skúsenosť.

---

Okrem `lunrjs` existujú aj iné riešenia fulltextového vyhľadávania, ako napríklad :

[fusejs](//www.fusejs.io) vypočítajte podobnosť medzi reťazcami na vyhľadávanie.

Výkon tohto riešenia je extrémne slabý a nedá sa použiť na fulltextové vyhľadávanie (pozri [Fuse.js Dlhý dopyt trvá viac ako 10 sekúnd, ako ho optimalizovať?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) na vyhľadávanie použite filter Bloom, nedá sa použiť na vyhľadávanie prefixov (napríklad zadajte `goo` , hľadajte `good` , `google` ) a nemôžete dosiahnuť podobný efekt automatického dokončenia.

Z dôvodu nedostatkov existujúcich riešení vyvinul `i18n.site` nové čisté front-endové fulltextové riešenie, ktoré má nasledujúce vlastnosti :

1. Podporuje viacjazyčné vyhľadávanie a má malú veľkosť. Veľkosť vyhľadávacieho jadra po zabalení `gzip` je `6.9KB` (pre porovnanie, veľkosť `lunrjs` je `25KB` ).
1. Zostavte invertovaný index založený na `indexedb` , ktorý zaberá menej pamäte a je rýchly.
1. Keď sa pridajú/upravia dokumenty, preindexujú sa iba pridané alebo upravené dokumenty, čím sa zníži množstvo výpočtov.
1. Podporuje vyhľadávanie prefixov a dokáže zobraziť výsledky vyhľadávania v reálnom čase, keď používateľ píše.
1. Dostupné offline

Nižšie bude podrobne predstavených `i18n.site` podrobností o technickej implementácii.

## Viacjazyčné Členenie Slov

Segmentácia slov využíva natívnu segmentáciu slov prehliadača `Intl.Segmenter` a všetky bežné prehliadače podporujú toto rozhranie.

![](//p.3ti.site/1727667759.avif)

Kód segmentácie `coffeescript` slova je nasledujúci

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

v:

* `/\p{P}/` je regulárny výraz, ktorý sa zhoduje s interpunkčnými znamienkami, medzi ktoré patria: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } `.</p><ul><li> `split('.')` je preto, že `Firefox` segmentácia slov prehliadača nesegmentuje `. ` .</li>


## Budovanie Indexu

5 tabuliek ukladania objektov bolo vytvorených za `IndexedDB` :

* `word` : id -
* `doc` : id - Číslo verzie url -
* `docWord` : Pole dokumentu id - slovo id
* `prefix` : Pole predpony - slovo id
* `rindex` : Word id - Dokument id : Pole čísel riadkov

Zadajte pole dokumentu `url` a číslo verzie `ver` a vyhľadajte, či dokument existuje v tabuľke `doc` Ak neexistuje, vytvorte obrátený index. Zároveň odstráňte obrátený index pre tie dokumenty, ktoré neboli odovzdané.

Týmto spôsobom je možné dosiahnuť prírastkové indexovanie a znížiť množstvo výpočtu.

V interakcii s front-endom je možné / indikátor priebehu načítania indexu [,](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) [aby](//juejin.cn/post/7413586285954154522) sa css oneskoreniu pri prvom progress + .

### Indexovaná Databáza S Vysokým Počtom Súbežných Zápisov

Projekt je [idb](//www.npmjs.com/package/idb) na základe asynchrónneho zapuzdrenia IndexedDB

Čítanie a zápis indexovanej databázy je asynchrónny. Pri vytváraní indexu sa dokumenty načítajú súčasne, aby sa vytvoril index.

Aby ste predišli čiastočnej strate údajov spôsobenej konkurenčným zápisom, môžete sa pozrieť na kód `coffeescript` nižšie a pridať medzi čítanie a zápis vyrovnávaciu pamäť `ing` , aby ste mohli zachytiť konkurenčné zápisy.

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

## Precision and Recall

Vyhľadávanie najskôr segmentuje kľúčové slová zadané používateľom.

Predpokladajme, že za slovom segmentácia je `N` slov. Pri vrátení výsledkov sa najskôr vrátia výsledky obsahujúce všetky kľúčové slová a potom výsledky obsahujúce `N-1` , `N-2` ,..., `1` kľúčové slová.

Zobrazené výsledky vyhľadávania najskôr zaistia presnosť dopytu a následne načítané výsledky (kliknite na tlačidlo načítať viac) zaistia rýchlosť vyvolania.

![](//p.3ti.site/1727684564.avif)

## Zaťaženie Na Požiadanie

Aby sa zlepšila rýchlosť odozvy, vyhľadávanie používa generátor `yield` na implementáciu načítania na požiadanie a vracia sa `limit` , keď je dotazovaný výsledok.

Všimnite si, že zakaždým, keď budete hľadať znova po `yield` , musíte znova otvoriť dopytovú transakciu `IndexedDB` .

## Prefix Vyhľadávanie v Reálnom Čase

Aby sa zobrazili výsledky vyhľadávania, keď používateľ píše, napríklad keď zadáte `wor` , zobrazia sa slová s predponou `wor` napríklad `words` a `work` .

![](//p.3ti.site/1727684944.avif)

Vyhľadávacie jadro použije tabuľku `prefix` pre segmentáciu posledného slova za slovom na nájdenie všetkých slov s predponou a postupné vyhľadávanie.

Funkcia Anti-shake `debounce` sa používa aj pri interakcii na prednej strane (implementovaná nasledovne), aby sa znížila frekvencia vstupu používateľa spúšťajúceho vyhľadávanie a znížil sa objem výpočtov.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Dostupné Offline

Indexová tabuľka neuchováva pôvodný text, ale iba slová, čo znižuje množstvo úložného priestoru.

Zvýraznenie výsledkov vyhľadávania vyžaduje opätovné načítanie pôvodného textu a zhoda s `service worker` môže zabrániť opakovaným sieťovým požiadavkám.

Zároveň, pretože `service worker` ukladá všetky články do vyrovnávacej pamäte, keď používateľ vykoná vyhľadávanie, celý web vrátane vyhľadávania je dostupný offline.

## Optimalizácia Zobrazenia Dokumentov MarkDown

Čisté front-endové riešenie vyhľadávania `i18n.site` je optimalizované pre `MarkDown` dokumenty.

Pri zobrazovaní výsledkov vyhľadávania sa zobrazí názov kapitoly a po kliknutí sa bude v kapitole pohybovať.

![](//p.3ti.site/1727686552.avif)

## Zhrnúť

Invertované fulltextové vyhľadávanie implementované čisto na frontende, nie je potrebný žiadny server. Je veľmi vhodný pre malé a stredne veľké webové stránky, ako sú dokumenty a osobné blogy.

`i18n.site` Open source samostatne vyvinuté čisté front-end vyhľadávanie, malé rozmery a rýchla odozva, rieši nedostatky súčasného čistého front-end fulltextového vyhľadávania a poskytuje lepšiu používateľskú skúsenosť.