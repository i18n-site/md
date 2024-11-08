# Gyik

## A Fordítás Sorainak Hozzáadása Vagy Törlése, Ami Zavart Okoz a Fordításban

> [!WARN]
> Ne feledje, **hogy a fordításban szereplő sorok számának meg kell egyeznie az eredeti szöveg soraival** .
> Ez azt jelenti, hogy a fordítás manuális módosításakor **ne adjon hozzá vagy töröljön sorokat a fordításból** , ellenkező esetben a fordítás és az eredeti szöveg közötti leképezési kapcsolat rendezetlen lesz.

Ha véletlenül hozzáad vagy töröl egy sort, ami zavart okoz, kérjük, állítsa vissza a fordítást a módosítás előtti verzióra, futtassa újra `i18` fordítást, és tárolja újra a megfelelő leképezést.

A fordítás és az eredeti szöveg közötti leképezés a tokenhez van kötve. Hozzon létre egy új tokent [i18n.site/token](//i18n.site/token) törölje `.i18h/hash` , majd fordítsa le újra a zavaró leképezés törléséhez (de ez a fordítás minden kézi módosítását elveszti).

## `YAML` Hogyan Lehet Elkerülni : Hogy Az `HTML` Linket `Markdown` Ssé Alakítsák

A `YAML` értéket a rendszer `MarkDown` -nek tekinti a fordításhoz.

Néha a `HTML` → `MarkDown` közötti átalakítás nem az, amit szeretnénk, például `<a href="/">Home</a>` `[Home](/)` -ra alakítják át.

Ha az `href` től eltérő attribútumot ad hozzá a `a` címkéhez, például `<a class="A" href="/">Home</a>` , elkerülheti ezt a konverziót.

## `./i18n/hash` Fájl Ütközik Alább

Törölje az ütköző fájlokat, és futtassa újra `i18` fordítást.