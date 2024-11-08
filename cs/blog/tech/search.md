---

brief: |
  i18n.site nyní podporuje fulltextové vyhledávání bez serveru.

  Tento článek představuje implementaci čistě frontendové technologie fulltextového vyhledávání, včetně invertovaného indexu vytvořeného pomocí IndexedDB, vyhledávání prefixů, optimalizace segmentace slov a podpory více jazyků.

  Ve srovnání se stávajícími řešeními je čisté front-endové fulltextové vyhledávání i18n.site malé a rychlé, vhodné pro malé a středně velké weby, jako jsou dokumenty a blogy, a je dostupné offline.

---

# Čisté Front-Endové Invertované Fulltextové Vyhledávání

## Sekvence

Po několika týdnech vývoje nyní [i18n.site](//i18n.site) (čistě statický markdown multilingualtranslation & nástroj pro vytváření webových stránek) podporuje čistě front-endové fulltextové vyhledávání.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Tento článek bude sdílet technickou implementaci `i18n.site` čistě front-endového fulltextového vyhledávání Navštivte [i18n.site](//i18n.site)

[Kód](//github.com/i18n-site/plugin/tree/main/qy) / [source](//github.com/i18n-site/ie/tree/main/qy) :

## Recenze Řešení Fulltextového Vyhledávání Bez Serveru

Pro malé a středně velké čistě statické webové stránky, jako jsou dokumenty/osobní blogy, je budování vlastního backendu pro fulltextové vyhledávání příliš těžké a běžnější volbou je fulltextové vyhledávání bez služeb.

Řešení fulltextového vyhledávání bez serveru spadají do dvou širokých kategorií:

Za prvé, [algolia.com](//algolia.com) poskytovatelé vyhledávacích služeb třetích stran poskytují front-endové komponenty pro fulltextové vyhledávání.

Tyto služby vyžadují platbu na základě objemu vyhledávání a pro uživatele v pevninské Číně jsou často nedostupné kvůli problémům, jako je soulad s webovými stránkami.

Nelze jej používat offline, nelze jej používat na intranetu a má velká omezení. Tento článek moc nepojednává.

Druhým je čistě frontendové fulltextové vyhledávání.

V současné době běžné čistě frontendové fulltextové vyhledávání zahrnuje [lunrjs](//lunrjs.com) a [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (na základě `lunrjs` sekundárního vývoje).

`lunrjs` Existují dva způsoby vytváření indexů a oba mají své vlastní problémy.

1. Předem vytvořené indexové soubory

   Protože index obsahuje slova ze všech dokumentů, je velký.
   Kdykoli je dokument přidán nebo upraven, musí být načten nový soubor indexu.
   Prodlouží čekací dobu uživatele a spotřebuje hodně šířky pásma.

2. Načítání dokumentů a vytváření indexů za běhu

   Vytvoření indexu je výpočetně náročný úkol. Přebudování indexu pokaždé, když k němu přistoupíte, způsobí zjevné zpoždění a špatné uživatelské prostředí.

---

Kromě `lunrjs` existují některá další řešení fulltextového vyhledávání, jako například :

[fusejs](//www.fusejs.io) vypočítejte podobnost mezi hledanými řetězci.

Výkon tohoto řešení je extrémně slabý a nelze jej použít pro fulltextové vyhledávání (viz [Fuse.js Dlouhý dotaz trvá déle než 10 sekund, jak jej optimalizovat?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) použijte k vyhledávání filtr Bloom, nelze jej použít pro vyhledávání prefixů (například zadejte `goo` , vyhledejte `good` , `google` ) a nelze dosáhnout podobného efektu automatického dokončení.

Kvůli nedostatkům stávajících řešení vyvinul `i18n.site` nové čistě front-endové fulltextové vyhledávání, které má následující vlastnosti :

1. Podporuje vícejazyčné vyhledávání a má malou velikost Velikost vyhledávacího jádra po zabalení `gzip` je `6.9KB` (pro srovnání velikost `lunrjs` je `25KB` ).
1. Sestavte invertovaný index založený na `indexedb` , který zabírá méně paměti a je rychlý.
1. Když jsou dokumenty přidány/upraveny, pouze přidané nebo upravené dokumenty jsou znovu indexovány, což snižuje množství výpočtů.
1. Podporuje vyhledávání prefixů a může zobrazovat výsledky vyhledávání v reálném čase, zatímco uživatel píše.
1. Dostupné offline

Níže bude podrobně představeno `i18n.site` podrobností o technické implementaci.

## Vícejazyčné Členění Slov

Segmentace slov používá nativní segmentaci slov prohlížeče `Intl.Segmenter` a všechny běžné prohlížeče toto rozhraní podporují.

![](//p.3ti.site/1727667759.avif)

Kód segmentace `coffeescript` slova je následující

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

* `/\p{P}/` je regulární výraz, který se shoduje s interpunkčními znaménky Mezi specifické shodné symboly patří: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } `.</p><ul><li> `split('.')` je, protože `Firefox` segmentace slov prohlížeče nesegmentuje `. ` .</li>


## Budování Indexu

5 tabulek úložiště objektů bylo vytvořeno za `IndexedDB` :

* `word` : id -
* `doc` : id - Číslo verze url -
* `docWord` : dokumentu id - slovo id
* `prefix` : Pole předpony - slovo id
* `rindex` : Word id - Dokument id : Pole čísel řádků

Předejte pole dokumentu `url` a číslo verze `ver` a vyhledejte, zda dokument existuje v tabulce `doc` Pokud neexistuje, vytvořte invertovaný index. Zároveň odeberte obrácený index u těch dokumentů, které nebyly předány.

Tímto způsobem lze dosáhnout inkrementálního indexování a snížit objem výpočtu.

V front-end interakci lze zobrazit ukazatel průběhu načítání indexu, aby se předešlo zpoždění při prvním načítání Viz "Ukazatel průběhu s animací, založené na jedné progress + Pure css Implementation" [English](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chinese](//juejin.cn/post/7413586285954154522) .

### IndexedDB S Vysokým Souběžným Zápisem

Projekt je [idb](//www.npmjs.com/package/idb) na základě asynchronního zapouzdření IndexedDB

Čtení a zápisy IndexedDB jsou asynchronní. Při vytváření indexu budou dokumenty načteny současně, aby se vytvořil index.

Abyste se vyhnuli částečné ztrátě dat způsobené konkurenčním zápisem, můžete se podívat na kód `coffeescript` níže a přidat mezi čtení a zápis mezipaměť `ing` , abyste zachytili konkurenční zápisy.

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

## Přesnost a Vyvolání

Vyhledávání nejprve segmentuje klíčová slova zadaná uživatelem.

Předpokládejme, že za slovem segmentace je `N` slov. Při vracení výsledků budou nejprve vráceny výsledky obsahující všechna klíčová slova a poté výsledky obsahující `N-1` , `N-2` ,..., `1` klíčová slova.

Zobrazené výsledky vyhledávání nejprve zajistí přesnost dotazu a následně načtené výsledky (klikněte na tlačítko načíst více) zajistí rychlost vyvolání.

![](//p.3ti.site/1727684564.avif)

## Zatížení Na Vyžádání

Aby se zlepšila rychlost odezvy, vyhledávání používá generátor `yield` k implementaci načítání na vyžádání a vrací se `limit` když je dotazován výsledek.

Všimněte si, že pokaždé, když budete hledat znovu po `yield` , musíte znovu otevřít transakci dotazu `IndexedDB` .

## Vyhledávání Předpon v Reálném Čase

Chcete-li zobrazit výsledky vyhledávání, když uživatel píše, například když je zadáno `wor` , zobrazí se slova s předponou `wor` například `words` a `work` .

![](//p.3ti.site/1727684944.avif)

Vyhledávací jádro použije tabulku `prefix` pro segmentaci posledního slova za slovem, aby nalezlo všechna slova s předponou a prohledávalo je v pořadí.

Funkce Anti-shake `debounce` se také používá v interakci na front-endu (implementováno následovně) ke snížení frekvence uživatelských vstupů spouštějících vyhledávání a snížení množství výpočtů.

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

Indexová tabulka neukládá původní text, pouze slova, což snižuje velikost úložiště.

Zvýraznění výsledků vyhledávání vyžaduje opětovné načtení původního textu a shoda s `service worker` může zabránit opakovaným síťovým požadavkům.

Zároveň, protože `service worker` ukládá všechny články do mezipaměti, jakmile uživatel provede vyhledávání, celý web včetně vyhledávání je dostupný offline.

## Optimalizace Zobrazení Dokumentů MarkDown

Čisté řešení front-end vyhledávání společnosti `i18n.site` je optimalizováno pro dokumenty `MarkDown` .

Při zobrazení výsledků hledání se zobrazí název kapitoly a po kliknutí se bude v kapitole pohybovat.

![](//p.3ti.site/1727686552.avif)

## Shrnout

Invertované fulltextové vyhledávání implementované čistě na frontendu, není potřeba žádný server. Je velmi vhodný pro malé a středně velké webové stránky, jako jsou dokumenty a osobní blogy.

`i18n.site` Open source samostatně vyvinuté čisté front-end vyhledávání, malé rozměry a rychlá odezva, řeší nedostatky současného čistě frontendového fulltextového vyhledávání a poskytuje lepší uživatelskou zkušenost.