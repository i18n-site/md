# .i18n/conf.yml

A konfigurációs fájl `.i18n/conf.yml` `i18n.site`

`ignore:` [`i18`](/i18) `i18n:` beállításainak kivételével a konfigurációs fájl a következő:

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

`.md` `ext:` `upload`

## Felső Navigációs Navigáció

`nav:` lehetőségek, a kezdőlap tetején található navigációs menünek megfelelően.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Közülük a `i18n: home` megfelel a `en/i18n.yml`中`home: Home` -nak.

több nyelvre is le lesz fordítva, például `zh/i18n.yml` `en/i18n.yml`

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

A fordítás befejezése után módosíthatja a fordítás `yml` , de ne adja hozzá vagy törölje a `yml` fordítás kulcsát.

### `use: Toc` Egyetlen Fájl Sablon (Vázlattal)

: `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`Toc` renderelést `use: Toc` , ami egyetlen `Markdown` sablont jelent.

`Table of Contents` `TOC` `Markdown`

`url:` a `Markdown` fájl elérési útját jelöli ( `/` a gyökérkönyvtárnak felel meg `/README.md` , ehhez a fájlnévhez nagybetűs előtag és kisbetűs utótag szükséges).

### `use: Md` Egyetlen Fájl Sablon (Nincs Vázlat)

`Md` sablon ugyanaz, mint `Toc` , mindkettő egyetlen `Markdown` fájl megjelenítésére szolgál. Azonban `Md` a sablon nem mutatja a körvonalat az oldalsávban.

A fenti konfigurációban `use: Toc` a következőt: `use: Md` , futtassa `i18n.site` ismét a `md` könyvtárban, majd keresse fel a fejlesztési előnézeti URL-t, hogy megfigyelje a változásokat a kezdőlapon.

### Alapértelmezett Betöltés Konfigurációs Útvonal Nélkül

Ha egy adott elérési út elérési úti előtagja nincs beállítva a `nav:` az elérési útnak megfelelő `MarkDown` fájl alapértelmezés szerint betöltődik, és `Md` sablon használatával jelenik meg.

Például, ha meglátogatja a `/test` , és `nav:` ezen elérési út nélkül van beállítva, és az oldal nyelve angol ( `en` kód), akkor a sablon alapértelmezés szerint betöltődik `/en/test.md` és a következővel jelenik meg `Md` .

Ha ez a fájl nem létezik, `/en/test.md` az alapértelmezett `404` oldal jelenik meg.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` Több Fájlból Álló Sablon

A konfigurációs fájlban:

```
  - i18n: blog
    use: Doc
```

Jelzi a `Doc`

`Doc` `MarkDown`

#### Egyetlen Projekt (Több Fájl)

A fentiekben az egyprojektes mód `Doc` `blog`

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Ha Az url Üres, Az Alapértelmezett Érték Az i18n

Ha nem `url` be `i18n` `url`

A fenti írási mód egyenértékű a `url: blog` a megfelelő fájl pedig `en/blog/TOC` .

#### Több Projekt

`i18n:doc` `.i18n/conf.yml` többprojektes mód.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Itt a `menu: NB demo1,demo2` `NB` használatát jelenti a legördülő menü megjelenítéséhez.

`NB` a `Name Breif` rövidítése, ami azt jelzi, hogy a legördülő menü megjelenítheti a projekt nevét és szlogenjét.

`NB` után a neki átadott `demo1,demo2` paraméter.
Megjegyzés A `,` vessző előtt `demo1,demo2` után ne legyen ** : **

A fenti paraméterekhez a megfelelő könyvtárindex fájl:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Tartalomjegyzék Index

`i18n.site` `js` `.i18n/hook/after.tran/TOC.js` `doc` `TOC` `json`

Ha `doc` használ, rendelkeznie kell ezzel a beépülő modullal.

Ha üres mappából inicializálja `.i18n` `i18n.site`

A `Doc` a tartalomjegyzéket a generált `json` alapján jeleníti meg.

##### Részletes Tartalommagyarázat

A tartalom : következő `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Használjon Behúzást a Szintek Jelzésére

`en/blog/TOC` az első sorban lévő `README.md` az alábbi képen látható `i18n.site` -nak felel meg, ami a projekt neve.

A következő két sor az alábbi képernyőképen látható.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` megfelel `News` ,
`news/begin.md` megfelel `Our Product is Online !`

A fájl `TOC` jelzi a vázlat hierarchikus kapcsolatát, és támogatja a többszintű behúzást.

##### A Szülői Szint Csak a Címet Írja, a Tartalmat Nem.

Ha a behúzás több szintje is van, a szülőszint csak a címet írja, a tartalmat nem. Ellenkező esetben a tipográfia elromlik.

##### A README.md Projekt 

például a projektben írhat tartalmat `en/demo2/README.md` `README.md`

Vegye figyelembe, hogy ennek a fájlnak a tartalma nem tartalmaz tartalomjegyzék vázlatot, ezért ajánlott korlátozni a terjedelmét és rövid bevezetőt írni.

###### Projekt Szlogenje

Amint látható `Deme Two` a legördülő menü és a katalógusvázlat projekt neve alatt található a projekt `Your Project slogan` :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: megfelel az első sornak `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

`:` `README.md`

A kínai, japán és koreai felhasználók vegye figyelembe, hogy a teljes szélességű kettőspont helyett félszélességű kettőspontot kell használnia `:`

##### Hogyan Lehet Tömegesen Mozgatni a TOC-T?

A fájlt a forrásnyelv könyvtárába kell helyezni `TOC`

Például, ha a forrásnyelv a kínai, akkor a fenti `zh/blog/TOC` `TOC`

Ha a forrásnyelv módosul, akkor a projektben egy bizonyos nyelvű `TOC` köteggel kell áthelyeznie egy másik nyelvre.

A következő parancsokra hivatkozhat:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Kérjük, `zh/` a nyelvkódot a fenti parancsban `en/`


