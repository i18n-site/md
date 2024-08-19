# Gyik

## A fordítás sorainak hozzáadása vagy törlése, ami a fordítás összezavarásához vezet

Ne feledje, **a fordítás sorainak száma egyeznie kell az eredeti szöveg sorainak számával**.

Ez azt jelenti, hogy a fordítás kézi szerkesztése során **ne adjon hozzá vagy töröljön sorokat a fordításból**, különben a fordítás és az eredeti szöveg közötti leképezési kapcsolat összezavarodhat.

Ha véletlenül hozzáad vagy töröl egy sort, ami összezavarodást okoz, kérjük, állítsa vissza a fordítást a módosítás előtti verzióra, futtassa újra az `i18` fordítást, és újra tárolja a helyes leképezést.

A fordítás és az eredeti szöveg közötti leképezés a tokenhez van kötve. Hozzon létre egy új tokent a [i18n.site/token](//i18n.site/token) oldalon, törölje a `.i18h/hash` fájlt, majd fordítsa le újra a zavaros leképezés törléséhez (de ez a kézi módosítások minden változatát el fogja veszíteni).

## `YAML`: Hogyan kerülhetjük el, hogy az `HTML` linkek `Markdown` formátumba ne alakuljanak át?

A `YAML` értékeket a rendszer `Markdown` formátumban tekinti a fordítás során.

Néha az `HTML` és `Markdown` közötti átalakítás nem az eredmény, amelyet elérnénk, például az `<a href="/">Home</a>` elemet `[Home](/)` formátumba alakítják át.

Adjon hozzá bármilyen attribútumot az `a` címkéhez az `href` kivételével, például `<a class="A" href="/">Home</a>`, hogy elkerülje ezt a konverziót.

## A `./i18n/hash` alatti fájlütközés

Törölje az ütköző fájlokat, és futtassa újra az `i18` fordítást.