# .i18n/conf.yml

A `i18n.site` konfigurációs fájlja `.i18n/conf.yml` , a tartalom pedig a következő :

```yaml
i18n:
  fromTo:
    en:
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
    use: Blog
addon:
  - i18n.addon/toc
```

A `upload` `ext:` beállítása azt jelenti, hogy csak `.md` fájlok kerülnek feltöltésre publikáláskor.

## Felső Navigációs Navigáció

A `nav:` konfigurációs opció a kezdőlap tetején található navigációs menü megfelelője.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Közülük `i18n: home` `home: Home` `en/i18n.yml` ben értéknek felel meg (ahol `en` a projektfordítás forrásnyelve).

`en/i18n.yml` tartalom a navigációs menüben megjelenő szöveg, amely a konfigurációban `fromTo` szerint lesz lefordítva, például `zh/i18n.yml` -re.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

A fordítás befejezése után a fordított `yml` értékeket módosíthatja, de ne törölje vagy adjon hozzá új `yml` kulcsokat.

### `use: Toc` Dokumentumsablon Vázlattal

A `nav` konfigurációban:

```
  - i18n: home
    use: Toc
    url: /
```

A `use: Toc` azt jelenti, hogy a `Toc` sablont használjuk a megjelenítéshez, ami egyetlen `Markdown` fájl megjelenítését jelenti.

`TOC` a `Table of Contents` rövidítése, és amikor ez a sablon megjelenik, a `Markdown` fájl tartalomjegyzéke az oldalsávon jelenik meg.

A `url:` a `Markdown` fájl elérési útját jelenti (a `/` a `/README.md` gyökérkönyvtárnak felel meg, a fájlnevet nagybetűvel kezdve és kisbetűvel befejezve kell megadni).

### `use: Md` Dokumentumsablon Vázlat Nélkül

A `Md` sablon hasonló a `Toc` sablonhoz, mindkettő egyetlen `Markdown` fájl megjelenítésére szolgál, de a `Md` sablon nem jeleníti meg a tartalomjegyzéket az oldalsávon.

A `use: Toc` beállítást a fenti konfigurációban `use: Md` -re módosíthatja, majd újra futtathatja a `i18n.site` parancsot a `md` könyvtárban, és meglátogathatja a fejlesztési előnézeti URL-t, hogy megfigyelje a kezdőlap változásait.

### `use: Blog` Blog Sablonok

A blogsablon a cikkek listáját (címek és absztraktok) jeleníti meg a megjelenési idő szerinti sorrendben.

[→ Kattintson ide, ha többet szeretne megtudni az adott konfigurációról](/i18n.site/conf/blog)

### `use: Doc` Fájl Dokumentumsablonja

A konfigurációs fájlban:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Azt jelzi, hogy `Doc` használatával kerülnek sablonok megjelenítésre.

A `Doc` sablon támogatja több `Markdown` fájl integrálását egyetlen vagy több projekt dokumentumvázlatának létrehozásához.

#### Több Projekt És Több Fájl

A `.i18n/conf.yml` `i18n:doc` ben konfiguráció többprojektes többfájlos renderelési mód.

Itt a `menu: NB demo1,demo2` azt jelenti, hogy az `NB` sablont használjuk a legördülő menü megjelenítéséhez.

<img src="//p.3ti.site/1721275191.avif" width="320px">

Az `NB` a `Name Brief` rövidítése, ami azt jelenti, hogy a legördülő menü megjeleníti a projekt nevét és szlogenjét.

Az `NB` mögött a `demo1,demo2` paraméterek következnek.

** A vessző `,` a `demo1,demo2` -ban előtt és után ne legyen ** .

A fenti paramétereknek megfelelő könyvtárindex fájl:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Egyetlen Projekt Több Fájlt

Ha csak egy projektje van, azt a következőképpen konfigurálhatja.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Egyetlen projekt több fájllal nem támogatja a `url` konfigurálását `/` gyökérútvonalként
> Ha __conf.yml beállítva a gyökér nav:__ útja, akkor a webhely kezdőlapjának elérésekor az automatikusan átíródik az első URL-re a `nav:` konfiguráció alatt.
> Ez a kialakítás a projektdokumentumok, blogok és egyéb tartalmak jobb megkülönböztetését szolgálja a könyvtárakon keresztül.
> Kezdőlapként ajánlott egyetlen fájlt és egyetlen oldalt használni.

> [!TIP]
> Ha az `url` nincs megadva, akkor az `url` alapértelmezés szerint az `i18n` értéke, ez a szabály más sablonokra is vonatkozik.

#### TOC Tartalomjegyzék Index

Ha a `use: Doc` sablon engedélyezve van a konfigurációban, engedélyezze `i18n.addon/toc` `.i18n/conf.yml` ben beépülő modult. A konfiguráció a következő :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` automatikusan telepíti és végrehajtja ezt a beépülő modult, beolvassa `TOC` a könyvtárindexfájlt, és létrehozza `json` a könyvtár vázlatát.

Ha egyetlen projektről van szó, több fájllal, akkor a `TOC` gyökérkönyvtár az `url:` nek megfelelő könyvtár a forrásnyelvi könyvtárban. Például, ha a forrásnyelv kínai: a `url: flashduty` nek megfelelő fájl a `zh/flashduty/TOC` .

Ha több projektről és több fájlról van szó, akkor nem kell `url:` beállítani. Az `TOC` gyökérkönyvtára a `i18n` értékének megfelelő könyvtár.

##### Részletes Tartalommagyarázat

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

`TOC` fájlok behúzással jelzik a vázlat hierarchikus kapcsolatát, támogatják a többszintű behúzást és az `# ` gyel kezdődő soros megjegyzéseket.

##### A szülői szint csak a címet tartalmazza, a tartalmat nem.

Ha több szintű behúzás van, a szülői szint csak a címet írja, a tartalmat nem, hogy elkerülje a tipográfiai hibákat.

##### A README.md projekt

A projekt `README.md` fájljába írhat tartalmat, például az `en/demo2/README.md`.

Vegye figyelembe, hogy a fájl tartalma nem tartalmaz tartalomjegyzék vázlatot, ezért ajánlott rövid, bevezető tartalmat írni.

###### Projekt Szlogenje

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

### Alapértelmezett Betöltés Konfigurációs Útvonal Nélkül

Egy bizonyos elérési út esetén, ha az elérési út előtagja nincs `nav:` -ban konfigurálva, akkor az elérési útnak megfelelő `MarkDown` fájl alapértelmezés szerint betöltődik, és a `Md` sablon használatával kerül megjelenítésre.

Például, ha `/test` elérése és `nav:` ennek az elérési útnak az előtagja nélkül van beállítva, és az aktuális böngészési nyelv az angol ( `en` kód), akkor `/en/test.md` alapértelmezés szerint betöltődik, és `Md` sablon használatával kerül megjelenítésre.

Ha az `/en/test.md` fájl nem létezik, akkor az alapértelmezett `404` oldal jelenik meg.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">