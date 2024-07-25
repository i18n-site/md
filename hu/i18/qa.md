# Gyakori Probléma

## A Fordítás Sorainak Hozzáadása Vagy Törlése, Ami Zavart Okoz a Fordításban

Ne feledje, **hogy a fordításban szereplő sorok számának meg kell egyeznie az eredeti szöveg soraival** .

Ez azt jelenti, hogy a fordítás manuális módosításakor **ne adjon hozzá vagy töröljön sorokat a fordításból** , ellenkező esetben a fordítás és az eredeti szöveg közötti leképezési kapcsolat rendezetlen lesz.

Ha véletlenül hozzáad vagy töröl egy sort, ami zavart okoz, kérjük, állítsa vissza a fordítást a módosítás előtti verzióra, futtassa `i18` a fordítást , és tárolja újra a gyorsítótárban a megfelelő leképezést.

A fordítás és az eredeti szöveg `.i18h/hash` leképezés a tokenhez van kötve. Hozzon létre egy új tokent a [i18n.site/token](//i18n.site/token)

## `YAML` : `HTML` `Markdown`

A `YAML` értéke `MarkDown` ként lesz kezelve a fordításnál.

`HTML` a → `MarkDown` konvertálása nem az, amit szeretnénk, például `<a href="/">Home</a>` konvertálása `[Home](/)` .

Adjon hozzá bármilyen más attribútumot a `a` címkéhez, például `<a class="A" href="/">Home</a>` , hogy elkerülje ezt `href` konverziót.

## `./I18n/Hash` Következő Fájlok Ütköznek

Törölje az ütköző fájlokat, és futtassa újra a Fordítást `i18`
