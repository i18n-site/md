# Projekt Verzió

Vegyük példaként a demóprojektet:

A `en/demo2/v` aktuális verziószáma, amely a projekt nevétől jobbra jelenik meg az oldalsáv körvonalában.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Itt `en/` a `.i18n/conf.yml` fordítási forrásnyelvnek megfelelő nyelvi kód.

Ha a forrásnyelv nem angol, akkor a `v` fájlt a forrásnyelv projektkönyvtárába kell helyezni. 

A dokumentumok történeti változatai között böngészhető lehetőség fejlesztés alatt áll.

Javasoljuk, hogy csak a dokumentum verziószámát módosítsa nagyobb frissítések kiadásakor (például `v1` , `v2` ), hogy elkerülje a keresőmotorok által indexelt oldalak túl sok verziószám miatti zsúfoltságát.

## Használjon Üres `V`

A demóprojektben a `en/demo2/v` mellett azt is láthatja, hogy `en/blog` és `en/demo1` könyvtárak tartalma üres `v` fájlok.

Az `v` nem jelenik meg az oldalsáv körvonalában, de amíg a `v` fájl létezik, a rendszer független indexet generál a könyvtárban és az alkönyvtárban lévő fájlokhoz.

A különböző projektek indexeinek felosztásával elkerülheti a lassú hozzáférést, amelyet a teljes webhelyen lévő összes fájl indexének egyszerre történő betöltése okoz.

Például a demo projektben [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) megfelelő indexfájl : `blog`

