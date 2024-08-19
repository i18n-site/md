# .i18n/conf.yml

A `i18n.site` konfigurációs fájl `.i18n/conf.yml`.

Az [`i18n`](/i18) `ignore:` és `i18n:` beállítások kivételével a konfigurációs fájl a következőképpen néz ki:

```yaml
upload:
  ext:
    - md
nav:
  - i18n: home
    use: Toc
    url: /
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
  - i18n: blog
    use: Doc
```

A `upload` `ext:` beállítása azt jelenti, hogy csak `.md` fájlok kerülnek feltöltésre publikáláskor.

## Felső navigációs menü

A `nav:` konfigurációs opció a kezdőlap tetején található navigációs menü megfelelője.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Itt a `i18n: home` a `en/i18n.yml` fájlban a `home: Home` megfelelője.

A `en/i18n.yml` több nyelvre is le lesz fordítva, például `zh/i18n.yml`.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

A fordítás befejezése után a fordított `yml` értékeket módosíthatja, de ne törölje vagy adjon hozzá új `yml` kulcsokat.

### `use: Toc`, egyedi fájl sablon (tartalomjegyzékkel)

A `nav` konfigurációban:

```
  - i18n: home
    use: Toc
    url: /
```

A `use: Toc` azt jelenti, hogy a `Toc` sablont használjuk a megjelenítéshez, ami egyetlen `Markdown` fájl megjelenítését jelenti.

`TOC` a `Table of Contents` rövidítése, és amikor ez a sablon megjelenik, a `Markdown` fájl tartalomjegyzéke az oldalsávon jelenik meg.

A `url:` a `Markdown` fájl elérési útját jelenti (a `/` a `/README.md` gyökérkönyvtárnak felel meg, a fájlnevet nagybetűvel kezdve és kisbetűvel befejezve kell megadni).

### `use: Md`, egyedi fájl sablon (nincs tartalomjegyzék)

A `Md` sablon hasonló a `Toc` sablonhoz, mindkettő egyetlen `Markdown` fájl megjelenítésére szolgál, de a `Md` sablon nem jeleníti meg a tartalomjegyzéket az oldalsávon.

A `use: Toc` beállítást a fenti konfigurációban `use: Md` -re módosíthatja, majd újra futtathatja a `i18n.site` parancsot a `md` könyvtárban, és meglátogathatja a fejlesztési előnézeti URL-t, hogy megfigyelje a kezdőlap változásait.

### Alapértelmezett betöltés konfigurációs útvonal nélkül

Ha egy adott elérési út nem található meg a `nav:` konfigurációban, akkor az elérési út megfelelő `Markdown` fájl alapértelmezés szerint betöltődik, és a `Md` sablon segítségével jelenik meg.

Például, ha a `/test` elérési út megnyitása esetén a `nav:` konfiguráció nem tartalmazza ezt az elérési utat, és az oldal nyelve angol (kód: `en`), akkor az `/en/test.md` fájl töltődik be alapértelmezés szerint, és a `Md` sablon segítségével jelenik meg.

Ha az `/en/test.md` fájl nem létezik, akkor az alapértelmezett `404` oldal jelenik meg.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc`, több fájlból álló sablon

A konfigurációs fájlban:

```
  - i18n: blog
    use: Doc
```

Azt jelzi, hogy `Doc` használatával kerülnek sablonok megjelenítésre.

A `Doc` sablon támogatja több `Markdown` fájl integrálását egyetlen vagy több projekt dokumentumvázlatának létrehozásához.

#### Egyetlen projekt (több fájl)

Az `blog` a `Doc` sablon egyprojektes módja.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Ha az URL üres, az alapértelmezett érték az i18n.

Ha az `url` nincs megadva, akkor az `url` alapértelmezés szerint az `i18n` értéke, ez a szabály más sablonokra is vonatkozik.

A fenti írásmód egyenértékű a `url: blog` beállítással, a megfelelő fájl pedig az `en/blog/TOC`.

#### Több projekt

Az `.i18n/conf.yml` fájlban a `i18n:doc` konfiguráció többprojektes módot jelent.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Itt a `menu: NB demo1,demo2` azt jelenti, hogy az `NB` sablont használjuk a legördülő menü megjelenítéséhez.

Az `NB` a `Name Brief` rövidítése, ami azt jelenti, hogy a legördülő menü megjeleníti a projekt nevét és szlogenjét.

Az `NB` mögött a `demo1,demo2` paraméterek következnek.
** A vessző `,` a `demo1,demo2` -ban előtt és után ne legyen ** .

A fenti paramétereknek megfelelő könyvtárindex fájl:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC tartalomjegyzék index

Az `i18n.site` végrehajtja a `js` beépülő modult a demóraktárban található `.i18n/hook/after.tran/TOC.js` fájlból, hogy beolvassa a `TOC` sablonkonfiguráció megfelelő `doc` könyvtárindex fájlját, és létrehozza a tartalomjegyzék `json` formátumú fájlját.

Ha `doc` sablont használ, akkor rendelkeznie kell ezzel a beépülő modullal.

Ha a `i18n.site` projektet üres mappából inicializálja, ne felejtse el átmásolni az `.i18n` mappát a bemutató projektből a saját könyvtárába.

A `Doc` sablon a generált `json` alapján jeleníti meg a tartalomjegyzéket.

##### Részletes tartalommagyarázat

Az `en/blog/TOC` fájl tartalma a következő:

```
README.md

news/README.md
  news/begin.md
```

##### Használjon behúzást a szintek jelzésére.

Az `en/blog/TOC` fájl első sora a `README.md`, amely a `i18n.site` megfelelője, azaz a projekt neve.

A következő két sor az alábbi képernyőképen látható.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

A `news/README.md` a `News` megfelelője.
A `news/begin.md` a `Our Product is Online !` megfelelője.

A `TOC` fájlok behúzással jelzik a tartalomjegyzék hierarchikus kapcsolatát, és támogatják a többszintű behúzást.

##### A szülői szint csak a címet tartalmazza, a tartalmat nem.

Ha több szintű behúzás van, a szülői szint csak a címet írja, a tartalmat nem, hogy elkerülje a tipográfiai hibákat.

##### A README.md projekt

A projekt `README.md` fájljába írhat tartalmat, például az `en/demo2/README.md`.

Vegye figyelembe, hogy a fájl tartalma nem tartalmaz tartalomjegyzék vázlatot, ezért ajánlott rövid, bevezető tartalmat írni.

###### Projekt szlogenje

Lásd, hogy a `Deme Two` a `Your Project slogan` projekt szlogenje a legördülő menü és a tartalomjegyzék projekt neve alatt található.

![](https://p.3ti.site/1721276842.avif)

Ez a `en/demo2/README.md` első sorának felel meg.

```
# Demo Two : Your Project slogan
```

A `README.md` projekt első szintű címének az `:` kettőspont utáni része a projekt szlogenje.

Kérjük, vegye figyelembe a kínai, japán és koreai felhasználókat, hogy a teljes szélességű kettőspont helyett félszélességű kettőspontot `:` használjon.

##### Hogyan lehet tömegesen mozgatni a TOC-ot?

A `TOC` fájlt a forrásnyelv könyvtárában kell elhelyezni.

Például, ha a forrásnyelv kínai, akkor a fenti `TOC` az `zh/blog/TOC`.

Ha a forrásnyelv megváltozik, akkor a projektben egy adott nyelv `TOC` fájlját át kell helyezni egy másik nyelvre.

Nézze meg a következő parancsokat:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Kérjük, módosítsa a fenti parancsokban az `en/` és `zh/` nyelvi kódokat.