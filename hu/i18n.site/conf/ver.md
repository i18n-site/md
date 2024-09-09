# Projekt verzió

A demó projekt például:

`en/demo2/v` a projekt jelenlegi verziószáma, amely a navigációs oldalsávban a projekt neve mellett jelenik meg.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Itt az `en/` a `.i18n/conf.yml` fájlban konfigurált forrásnyelvhez tartozó nyelvi kód.

Ha a forrásnyelv nem angol, akkor a `v` fájlt a forrásnyelv projektmappájába kell helyezni.

A dokumentumok történeti verziói közötti tallózás funkció fejlesztés alatt áll.

Javasoljuk, hogy csak jelentős frissítésekkor (például `v1`, `v2`) módosítsd a dokumentum verziószámát, hogy elkerüld a túl sok verziószám okozta zűrzavart a keresőmotorok indexében.

## Üres `v` fájlokat használj különböző projektek fájlindexeinek szétválasztására

A demó projektben, az `en/demo2/v` mellett, az `en/blog` és `en/demo1` mappákban is találhatóak üres `v` fájlok.

Üres `v` fájlok nem jelennek meg az oldalsáv tartalomjegyzékében, de ha létezik `v` fájl, az adott mappa és alkönyvtárai fájloinak önálló indexe jön létre.

Különböző projektek indexeinek szétválasztásával elkerülhető, hogy a teljes webhely fájloinak indexe egyszerre töltődjön be, ami lassíthatja az elérést.

Például a demó projektben a `blog` indexfájl: [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json)