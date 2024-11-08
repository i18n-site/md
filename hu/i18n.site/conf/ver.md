# Projekt Verzió

Vegyük példaként a demóprojektet:

`en/demo2/v` a projekt aktuális verziószáma, amely a projekt nevétől jobbra jelenik meg az oldalsáv körvonalában.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Itt `en/` az `.i18n/conf.yml` által konfigurált fordítási forrásnyelvnek megfelelő nyelvi kód.

Ha a forrásnyelve nem angol, akkor a `v` fájlt a forrásnyelv projektkönyvtárába kell helyezni.

A dokumentumok történeti változatai között böngészhető lehetőség fejlesztés alatt áll.

Javasoljuk, hogy a dokumentum verziószámát csak nagyobb frissítések megjelenésekor módosítsa (például `v1` , `v2` ), hogy elkerülje, hogy túl sok verziószám zűrzavart okozzon a keresőmotorok által indexelt oldalakon.

## Használjon Üres `v` Fájlokat a Különböző Projektek Fájlindexeinek Felosztásához

A demóprojektben `en/demo2/v` mellett azt is láthatod, hogy az `en/blog` és `en/demo1` könyvtárban `v` üres fájl van.

Üres `v` nem jelenik meg az oldalsáv körvonalában, de amíg van `v` fájl, a könyvtár és az alkönyvtárak fájljaihoz független index jön létre.

A különböző projektek indexeinek felosztásával elkerülheti a lassú hozzáférést, amelyet a teljes webhelyen lévő összes fájl indexének egyszerre történő betöltése okoz.

Például a demóprojektben a `blog` nak megfelelő indexfájl [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :